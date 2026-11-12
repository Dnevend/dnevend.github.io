#!/usr/bin/env python3
"""把 sitemap 中最近更新的 URL 推送给百度普通收录接口。

需要在仓库 Secrets 中配置 BAIDU_TOKEN（百度搜索资源平台 -> 普通收录 -> API 推送）。
未配置时脚本直接跳过，不影响部署。
"""

from __future__ import annotations

import os
import sys
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITEMAP = ROOT / "build" / "sitemap.xml"
SITE = "https://dnevend.site"
NS = "{http://www.sitemaps.org/schemas/sitemap/0.9}"
LIMIT = int(os.environ.get("BAIDU_PUSH_LIMIT", "10"))


def sitemap_items() -> list[tuple[str, str]]:
    tree = ET.parse(SITEMAP)
    items: list[tuple[str, str]] = []
    for node in tree.getroot().iter(f"{NS}url"):
        loc = node.find(f"{NS}loc")
        lastmod = node.find(f"{NS}lastmod")
        if loc is not None and loc.text:
            items.append((loc.text.strip(), lastmod.text.strip() if lastmod is not None and lastmod.text else ""))
    return items


def main() -> int:
    token = os.environ.get("BAIDU_TOKEN", "").strip()
    if not token:
        print("BAIDU_TOKEN 未配置，跳过百度主动推送")
        return 0

    if not SITEMAP.exists():
        print(f"缺少 {SITEMAP}", file=sys.stderr)
        return 1

    items = sitemap_items()
    # 最近更新的优先；没有 lastmod 的排在后面
    items.sort(key=lambda item: item[1], reverse=True)
    urls = [url for url, _ in items[:LIMIT]]

    if not urls:
        print("sitemap 没有 URL，跳过百度主动推送", file=sys.stderr)
        return 1

    endpoint = (
        "http://data.zz.baidu.com/urls?"
        + urllib.parse.urlencode({"site": SITE, "token": token})
    )
    request = urllib.request.Request(
        endpoint,
        data="\n".join(urls).encode("utf-8"),
        headers={"Content-Type": "text/plain"},
        method="POST",
    )

    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            print(f"百度推送: HTTP {response.status}, 提交 {len(urls)} 条 URL")
            print(response.read().decode("utf-8", errors="replace"))
        return 0
    except urllib.error.HTTPError as error:
        body = error.read().decode("utf-8", errors="replace").strip()
        print(f"百度推送失败: HTTP {error.code} {body}", file=sys.stderr)
        return 1
    except Exception as error:  # noqa: BLE001
        print(f"百度推送失败: {error}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
