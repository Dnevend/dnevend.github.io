#!/usr/bin/env python3
"""构建后 SEO 自检：sitemap、canonical、robots、noindex、description。"""

from __future__ import annotations

import re
import sys
import xml.etree.ElementTree as ET
from pathlib import Path
from urllib.parse import unquote, urlparse

ROOT = Path(__file__).resolve().parent.parent
BUILD = ROOT / "build"
SITE = "https://dnevend.site"
SITEMAP = BUILD / "sitemap.xml"
ROBOTS = BUILD / "robots.txt"

errors: list[str] = []


def fail(message: str) -> None:
    errors.append(message)


def build_file(url: str) -> Path:
    path = unquote(urlparse(url).path)
    if path == "/":
        return BUILD / "index.html"
    return BUILD / path.strip("/") / "index.html"


def page_head(html: str) -> str:
    return html.split("</head>", 1)[0]


def check_nul_bytes() -> None:
    """React 18 会在中文文本 chunk 边界写入 NUL；构建后必须被清掉。"""
    offenders: list[tuple[Path, int]] = []
    for html_file in sorted(BUILD.rglob("*.html")):
        count = html_file.read_bytes().count(b"\x00")
        if count:
            offenders.append((html_file, count))

    if offenders:
        total = sum(count for _, count in offenders)
        fail(f"{len(offenders)} 个 HTML 文件仍含 {total} 个 NUL 字节")
        for html_file, count in offenders[:5]:
            fail(f"  NUL: {html_file.relative_to(ROOT)} ({count})")


def check_internal_links() -> None:
    """页面内链必须是带尾斜杠的页面 URL；静态资源（带扩展名）跳过。"""
    site_host = urlparse(SITE).netloc
    offenders: list[tuple[Path, str]] = []

    for html_file in sorted(BUILD.rglob("*.html")):
        html = html_file.read_text(encoding="utf-8", errors="ignore")
        for href in re.findall(r'href="([^"]+)"', html):
            parsed = urlparse(href)

            if parsed.scheme and parsed.scheme not in ("http", "https"):
                continue
            if parsed.netloc and parsed.netloc != site_host:
                continue

            path = parsed.path
            if not path.startswith("/"):
                continue
            if re.search(r"\.[a-z0-9]{2,5}$", path, re.IGNORECASE):
                continue
            if not path.endswith("/"):
                offenders.append((html_file, href))
                break

    if offenders:
        fail(f"{len(offenders)} 个页面含无尾斜杠内链")
        for html_file, href in offenders[:5]:
            fail(f"  {html_file.relative_to(ROOT)} -> {href}")


NOINDEX_ALLOWED_PREFIXES = (
    "/blog/tags/",
    "/blog/authors",
    "/blog/archive",
    "/docs/tags",
    "/mark/tags",
)


def check_indexability(locs: list[str]) -> None:
    """只允许列表页 noindex；所有非 noindex 页面必须出现在 sitemap。"""
    sitemap_urls = {unquote(url) for url in locs}

    for html_file in sorted(BUILD.rglob("*.html")):
        relative = html_file.relative_to(BUILD)
        if relative.name == "404.html" or "baidu_verify" in relative.name:
            continue

        head = page_head(html_file.read_text(encoding="utf-8", errors="ignore"))
        robots = re.search(r'<meta[^>]*name="robots"[^>]*content="([^"]*)"', head)
        is_noindex = bool(robots and "noindex" in robots.group(1).lower())
        route = f"/{relative.parent.as_posix().strip('.')}/".replace("//", "/")
        if relative.parent.as_posix() == ".":
            route = "/"

        if is_noindex:
            if not any(route.startswith(prefix) for prefix in NOINDEX_ALLOWED_PREFIXES):
                fail(f"正文页被误设 noindex: {route}")
            continue

        canonical = re.search(r'<link[^>]*rel="canonical"[^>]*href="([^"]+)"', head)
        if canonical and unquote(canonical.group(1)) not in sitemap_urls:
            fail(f"可索引页面不在 sitemap: {canonical.group(1)}")


def main() -> int:
    if not SITEMAP.exists():
        fail(f"缺少 {SITEMAP.relative_to(ROOT)}")
        return report()

    check_nul_bytes()
    check_internal_links()

    if not ROBOTS.exists():
        fail("缺少 build/robots.txt")
    elif f"Sitemap: {SITE}/sitemap.xml" not in ROBOTS.read_text(encoding="utf-8"):
        fail("robots.txt 未声明 sitemap")

    tree = ET.parse(SITEMAP)
    locs = [node.text.strip() for node in tree.getroot().iter("{http://www.sitemaps.org/schemas/sitemap/0.9}loc")]
    lastmods = list(tree.getroot().iter("{http://www.sitemaps.org/schemas/sitemap/0.9}lastmod"))

    if not locs:
        fail("sitemap 没有 URL")

    check_indexability(locs)

    for url in locs:
        if not url.startswith(f"{SITE}/"):
            fail(f"sitemap URL 域名异常: {url}")
        if not url.endswith("/"):
            fail(f"sitemap URL 缺少尾斜杠: {url}")

        html_file = build_file(url)
        if not html_file.exists():
            fail(f"sitemap URL 没有对应构建文件: {url} -> {html_file.relative_to(ROOT)}")
            continue

        head = page_head(html_file.read_text(encoding="utf-8", errors="ignore"))

        canonical = re.search(r'<link[^>]*rel="canonical"[^>]*href="([^"]+)"', head)
        if not canonical:
            fail(f"缺少 canonical: {url}")
        elif unquote(canonical.group(1)) != unquote(url):
            fail(f"canonical 与 sitemap 不一致: {url} != {canonical.group(1)}")

        robots = re.search(r'<meta[^>]*name="robots"[^>]*content="([^"]*)"', head)
        if robots and "noindex" in robots.group(1).lower():
            fail(f"sitemap 中出现 noindex 页面: {url}")

        description = re.search(
            r'<meta[^>]*name="description"[^>]*content="([^"]*)"', head
        )
        if not description or not description.group(1).strip():
            fail(f"缺少 meta description: {url}")

    if not lastmods:
        fail("sitemap 没有 lastmod")

    print(f"sitemap URLs: {len(locs)}")
    print(f"lastmod: {len(lastmods)}")
    print(f"robots.txt: {'ok' if ROBOTS.exists() else 'missing'}")
    return report()


def report() -> int:
    if errors:
        print("\nSEO 检查失败：", file=sys.stderr)
        for error in errors:
            print(f"  - {error}", file=sys.stderr)
        return 1
    print("SEO 检查通过")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
