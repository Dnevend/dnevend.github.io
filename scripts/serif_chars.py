#!/usr/bin/env python3
"""Collect and verify the characters rendered with the serif fallback font.

Every element styled with `var(--font-serif)` carries a `data-serif` attribute.
The built site is scanned for those elements, so the bundled font subset cannot
silently miss characters from new copy.

Usage:
  python3 scripts/serif_chars.py                 # build output vs serif-chars.txt
  python3 scripts/serif_chars.py --write         # rewrite serif-chars.txt from build output
  python3 scripts/serif_chars.py --verify-font   # also check the woff2 cmap (needs fontTools)
"""

from __future__ import annotations

import argparse
import sys
from html.parser import HTMLParser
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
BUILD_DIR = REPO_ROOT / "build"
CHARS_FILE = REPO_ROOT / "scripts" / "serif-chars.txt"
FONT_FILE = REPO_ROOT / "static" / "fonts" / "noto-serif-sc-subset.woff2"

# Rendered inside serif elements only in edge cases (e.g. a post without a
# date), or likely to appear in future copy (years, Latin project names), so
# they may not be present in the current build output.
EXTRA_CHARS = "".join(chr(code) for code in range(0x20, 0x7F)) + "未知年份"


def rel(path: Path) -> str:
    return str(path.relative_to(REPO_ROOT))


class SerifTextParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self._marked_tags: list[str] = []
        self.chars: set[str] = set()

    def handle_starttag(self, tag, attrs):
        if any(name == "data-serif" for name, _ in attrs):
            self._marked_tags.append(tag)

    def handle_endtag(self, tag):
        if self._marked_tags and self._marked_tags[-1] == tag:
            self._marked_tags.pop()

    def handle_data(self, data):
        if not self._marked_tags:
            return
        self.chars.update(char for char in data if char.isprintable())


def collect_chars() -> tuple[set[str], dict[str, set[str]]]:
    if not BUILD_DIR.is_dir():
        sys.exit("build/ not found. Run `yarn build` first.")

    chars: set[str] = set(EXTRA_CHARS)
    pages: dict[str, set[str]] = {}

    for html_file in sorted(BUILD_DIR.rglob("*.html")):
        parser = SerifTextParser()
        parser.feed(html_file.read_text(encoding="utf-8", errors="ignore"))
        if parser.chars:
            pages[rel(html_file)] = parser.chars
            chars.update(parser.chars)

    return chars, pages


def read_chars_file() -> set[str]:
    if not CHARS_FILE.is_file():
        sys.exit(f"{rel(CHARS_FILE)} not found. Run `./scripts/build-serif-subset.sh`.")
    return set(CHARS_FILE.read_text(encoding="utf-8")) - {"\n", "\r"}


def write_chars_file(chars: set[str]) -> None:
    CHARS_FILE.write_text("".join(sorted(chars)) + "\n", encoding="utf-8")
    print(f"Wrote {len(chars)} characters to {rel(CHARS_FILE)}.")


def check_build(chars: set[str], pages: dict[str, set[str]]) -> bool:
    known = read_chars_file()
    missing = sorted(chars - known)
    if not missing:
        print(f"OK: all {len(chars)} serif characters are listed in {rel(CHARS_FILE)}.")
        return True

    print(f"Serif characters missing from {rel(CHARS_FILE)}:", file=sys.stderr)
    for char in missing:
        locations = ", ".join(page for page, page_chars in pages.items() if char in page_chars)
        print(f"  {char!r} (U+{ord(char):04X}) - {locations or 'conditional copy'}", file=sys.stderr)
    print("\nRun `yarn build && ./scripts/build-serif-subset.sh` to regenerate the font.", file=sys.stderr)
    return False


def check_font() -> bool:
    try:
        from fontTools.ttLib import TTFont
    except ImportError:
        sys.exit(
            "fontTools is required for --verify-font. "
            "Run via `uvx --from fonttools --with brotli python scripts/serif_chars.py --verify-font`."
        )

    if not FONT_FILE.is_file():
        sys.exit(f"{rel(FONT_FILE)} not found.")

    covered = set(TTFont(FONT_FILE).getBestCmap())
    chars = read_chars_file()
    missing = sorted(char for char in chars if ord(char) not in covered)
    if missing:
        print(f"{rel(FONT_FILE)} is missing characters:", file=sys.stderr)
        print("  " + " ".join(f"{char!r} (U+{ord(char):04X})" for char in missing), file=sys.stderr)
        print("\nRegenerate it with `./scripts/build-serif-subset.sh`.", file=sys.stderr)
        return False

    print(f"OK: {FONT_FILE.name} covers all {len(chars)} characters in {rel(CHARS_FILE)}.")
    return True


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--write", action="store_true", help="rewrite serif-chars.txt from build output")
    parser.add_argument(
        "--verify-font",
        action="store_true",
        help="verify the woff2 covers serif-chars.txt (needs fontTools)",
    )
    args = parser.parse_args()

    chars, pages = collect_chars()

    if args.write:
        write_chars_file(chars)
    elif not check_build(chars, pages):
        sys.exit(1)

    if args.verify_font and not check_font():
        sys.exit(1)


if __name__ == "__main__":
    main()
