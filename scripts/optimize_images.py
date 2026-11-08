#!/usr/bin/env python3
"""把仓库里的 PNG / JPEG（可选 GIF）转成 WebP 并压缩。

默认行为：
1. 扫描 blog/、static/、archive/、docs/ 下的位图；
2. 转 WebP（超过 --max-width 的先等比缩小）；
3. 只有当体积确实变小（默认至少省 5%）才保留，否则保留原文件；
4. 改写所有文本文件里指向这些图片的引用；
5. 确认没有任何引用残留后，删除原始文件。

幂等：已经优化过的仓库再跑一次不会有任何改动，可以在构建前直接调用。
依赖：Pillow（`python3 -m pip install pillow`）。缺依赖时静默跳过，
避免在没装 Python 依赖的 CI 环境里卡住构建。

用法：
  python3 scripts/optimize_images.py --dry-run     # 只看能省多少，不改文件
  python3 scripts/optimize_images.py               # 实际执行
  python3 scripts/optimize_images.py --gif         # 顺便处理动图 GIF
"""

from __future__ import annotations

import argparse
import os
import re
import sys
from pathlib import Path

try:
    from PIL import Image, ImageOps
except ImportError:  # CI 里没装 Pillow 时让构建继续
    Image = None

ROOT = Path(__file__).resolve().parent.parent

SCAN_DIRS = ("blog", "static", "archive", "docs", "src")
SKIP_DIRS = {"node_modules", "build", ".docusaurus", ".git", ".cache", ".playwright-mcp", "__pycache__"}
TEXT_EXTS = {
    ".md", ".mdx", ".js", ".jsx", ".ts", ".tsx", ".css", ".scss",
    ".json", ".yml", ".yaml", ".html",
}
RASTER_EXTS = {".png", ".jpg", ".jpeg"}

# 括号 / 引号 / 空白之后、括号 / 引号 / 空白或查询串之前的一串路径
PATH_RE = re.compile(
    r"""(?<=[("'\s])[^\s()"'<>]+?\.(?:png|jpe?g|gif)(?=[)"'\s?#])""",
    re.IGNORECASE,
)


def iter_files(base: Path, exts: set[str] | None = None):
    for dirpath, dirnames, filenames in os.walk(base):
        dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS]
        for name in filenames:
            path = Path(dirpath) / name
            if exts is None or path.suffix.lower() in exts:
                yield path


def resolve_ref(ref: str, text_file: Path) -> Path | None:
    """把文本里的引用解析成真实文件路径；解析不出来返回 None。"""
    ref = ref.split("#", 1)[0].split("?", 1)[0]
    if ref.startswith(("http://", "https://", "data:", "//")):
        return None
    if ref.startswith("/"):
        return (ROOT / "static" / ref.lstrip("/")).resolve()
    candidate = (text_file.parent / ref).resolve()
    if candidate.exists():
        return candidate
    # Docusaurus 配置里常用 'img/foo.jpg' 这种相对 static/ 的写法
    fallback = (ROOT / "static" / ref).resolve()
    return fallback if fallback.exists() else candidate


def human(n: int) -> str:
    return f"{n / 1024:.0f} KB" if n < 1024 * 1024 else f"{n / 1024 / 1024:.1f} MB"


def _encode(src: Path, quality: int, max_width: int, out: Path | None) -> int:
    """把 src 编码成 WebP 并返回字节数；out 为 None 时只在内存里编码。"""
    with Image.open(src) as im:
        if getattr(im, "n_frames", 1) > 1:
            return 0
        im = ImageOps.exif_transpose(im)
        if im.mode not in ("RGB", "RGBA"):
            im = im.convert("RGBA" if "A" in im.getbands() or "transparency" in im.info else "RGB")
        if max_width and im.width > max_width:
            im = im.resize((max_width, round(im.height * max_width / im.width)), Image.LANCZOS)
        if out is None:
            import io

            buf = io.BytesIO()
            im.save(buf, "WEBP", quality=quality, method=6)
            return buf.tell()
        out.parent.mkdir(parents=True, exist_ok=True)
        im.save(out, "WEBP", quality=quality, method=6)
    return out.stat().st_size


def _encode_gif(src: Path, quality: int, max_width: int, out: Path | None) -> int:
    """动图 GIF -> 动图 WebP，返回字节数。"""
    import tempfile

    tmp = None
    if out is None:
        tmp = Path(tempfile.mkstemp(suffix=".webp")[1])
        out = tmp
    try:
        with Image.open(src) as im:
            frames, durations = [], []
            for frame in range(im.n_frames):
                im.seek(frame)
                frame_image = im.convert("RGBA")
                if max_width and frame_image.width > max_width:
                    frame_image = frame_image.resize(
                        (max_width, round(frame_image.height * max_width / frame_image.width)),
                        Image.LANCZOS,
                    )
                frames.append(frame_image)
                durations.append(im.info.get("duration", 80))
            frames[0].save(
                out, "WEBP", save_all=True, append_images=frames[1:],
                duration=durations, loop=im.info.get("loop", 0),
                quality=quality, method=4,
            )
        return out.stat().st_size
    finally:
        if tmp:
            tmp.unlink(missing_ok=True)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--dry-run", action="store_true", help="只统计，不落盘")
    parser.add_argument("--gif", action="store_true", help="连动图 GIF 一起转")
    parser.add_argument("--quiet", action="store_true", help="没有可优化项时不输出")
    parser.add_argument("--quality", type=int, default=86)
    parser.add_argument("--max-width", type=int, default=1600)
    parser.add_argument("--min-saving", type=float, default=0.05, help="至少省这么多才替换")
    args = parser.parse_args()

    image_files = [p for base in SCAN_DIRS if (ROOT / base).exists() for p in iter_files(ROOT / base)]

    exts = set(RASTER_EXTS) | ({".gif"} if args.gif else set())
    candidates = [p for p in image_files if p.suffix.lower() in exts]
    # 引用可能出现在仓库任何文本文件里（配置、脚本、草稿），全量扫描
    text_files = list(iter_files(ROOT, TEXT_EXTS))

    if not candidates:
        if not args.quiet:
            print("没有需要处理的图片。")
        return 0

    if Image is None:
        print("未安装 Pillow，跳过图片优化（pip install pillow 后重试）。", file=sys.stderr)
        return 0

    converted: list[tuple[Path, Path, int, int]] = []
    skipped: list[tuple[Path, str]] = []
    for src in sorted(candidates):
        dst = src.with_suffix(".webp")
        if dst.exists():
            skipped.append((src, "同名 .webp 已存在"))
            continue
        try:
            encode = _encode_gif if src.suffix.lower() == ".gif" else _encode
            size = encode(src, args.quality, args.max_width, None if args.dry_run else dst)
        except Exception as exc:  # 单张失败不影响整体
            skipped.append((src, f"转换失败：{exc}"))
            continue
        if size and size < src.stat().st_size * (1 - args.min_saving):
            converted.append((src, dst, src.stat().st_size, size))
        else:
            if not args.dry_run:
                dst.unlink(missing_ok=True)
            skipped.append((src, "WebP 没有更小，保留原图"))

    if not converted:
        if not args.quiet:
            print(f"扫描 {len(candidates)} 张图片，没有可优化的（{len(skipped)} 张跳过）。")
        return 0

    # 引用改写：只改能解析到这张图的路径，避免同名文件误伤
    by_name: dict[str, list[tuple[Path, Path]]] = {}
    for src, dst, _, _ in converted:
        by_name.setdefault(src.name.lower(), []).append((src, dst))

    rewrites: list[tuple[Path, str, str]] = []
    for text in text_files:
        try:
            content = text.read_text(encoding="utf-8")
        except (UnicodeDecodeError, OSError):
            continue
        new = content
        for match in PATH_RE.finditer(content):
            ref = match.group(0)
            src = resolve_ref(ref, text)
            if src is None:
                continue
            pair = next((p for p in by_name.get(src.name.lower(), []) if p[0] == src), None)
            if not pair:
                continue
            new = new.replace(ref, ref[: -len(src.suffix)] + ".webp")
            rewrites.append((text, ref, ref[: -len(src.suffix)] + ".webp"))
        if new != content and not args.dry_run:
            text.write_text(new, encoding="utf-8")

    # 删除前再确认一遍：没有任何残留引用指向原文件
    leftovers: dict[Path, list[str]] = {}
    if not args.dry_run:
        for src, _, _, _ in converted:
            for text in text_files:
                try:
                    content = text.read_text(encoding="utf-8")
                except (UnicodeDecodeError, OSError):
                    continue
                for match in PATH_RE.finditer(content):
                    if resolve_ref(match.group(0), text) == src:
                        leftovers.setdefault(src, []).append(str(text.relative_to(ROOT)))
    removed = 0
    if not args.dry_run:
        for src, _, _, _ in converted:
            if src in leftovers:
                continue
            src.unlink(missing_ok=True)
            removed += 1

    before = sum(b for _, _, b, _ in converted)
    after = sum(a for _, _, _, a in converted)
    saved = before - after
    verb = "可" if args.dry_run else "已"
    print(f"{verb}转换 {len(converted)} 张：{human(before)} -> {human(after)}，" f"{verb}省 {human(saved)}（{saved / before:.0%}）")
    for src, dst, b, a in sorted(converted, key=lambda x: x[2] - x[3], reverse=True)[:10]:
        print(f"  {src.relative_to(ROOT)}  {human(b)} -> {human(a)}")
    if rewrites:
        print(f"  {verb}改写 {len(rewrites)} 处引用（{len({r[0] for r in rewrites})} 个文件）")
    if leftovers:
        print("  以下文件仍有引用，已保留原图：")
        for src, refs in leftovers.items():
            print(f"    {src.relative_to(ROOT)} <- {', '.join(sorted(set(refs)))}")
    if skipped and not args.quiet:
        print(f"  跳过 {len(skipped)} 张：" + "；".join(f"{p.name}（{r}）" for p, r in skipped[:5]))
    if not args.dry_run:
        print(f"  删除原图 {removed} 个")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
