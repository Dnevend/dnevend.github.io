#!/usr/bin/env python3
"""把 sitemap 中的 URL 提交给 IndexNow（Bing / Yandex 等）。"""

from __future__ import annotations

import json
import sys
import urllib.error
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITEMAP = ROOT / "build" / "sitemap.xml"
KEY = "dnevend-indexnow-2026-a7f3c9b1"
HOST = "dnevend.site"
SITE = f"https://{HOST}"
ENDPOINT = "https://api.indexnow.org/indexnow"


def sitemap_urls() -> list[str]:
    tree = ET.parse(SITEMAP)
    return [
        node.text.strip()
        for node in tree.getroot().iter("{http://www.sitemaps.org/schemas/sitemap/0.9}loc")
        if node.text and node.text.strip()
    ]


def main() -> int:
    if not SITEMAP.exists():
        print(f"缺少 {SITEMAP}，跳过 IndexNow", file=sys.stderr)
        return 1

    key_file = ROOT / "build" / f"{KEY}.txt"
    if not key_file.exists():
        print(f"缺少 IndexNow key 文件: {key_file}", file=sys.stderr)
        return 1

    urls = sitemap_urls()
    if not urls:
        print("sitemap 没有 URL，跳过 IndexNow", file=sys.stderr)
        return 1

    payload = json.dumps(
        {
            "host": HOST,
            "key": KEY,
            "keyLocation": f"{SITE}/{KEY}.txt",
            "urlList": urls,
        }
    ).encode("utf-8")

    request = urllib.request.Request(
        ENDPOINT,
        data=payload,
        headers={"Content-Type": "application/json; charset=utf-8"},
        method="POST",
    )

    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            print(f"IndexNow: HTTP {response.status}, 提交 {len(urls)} 条 URL")
            body = response.read().decode("utf-8", errors="replace").strip()
            if body:
                print(body)
        return 0
    except urllib.error.HTTPError as error:
        body = error.read().decode("utf-8", errors="replace").strip()
        print(f"IndexNow 失败: HTTP {error.code} {body}", file=sys.stderr)
        return 1
    except Exception as error:  # noqa: BLE001
        print(f"IndexNow 失败: {error}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
