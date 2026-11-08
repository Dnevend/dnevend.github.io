#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

FONT_URL="https://raw.githubusercontent.com/google/fonts/main/ofl/notoserifsc/NotoSerifSC%5Bwght%5D.ttf"
CACHE_DIR="scripts/.cache"
SRC_FONT="$CACHE_DIR/NotoSerifSC[wght].ttf"
CHARS_FILE="scripts/serif-chars.txt"
OUTPUT="static/fonts/noto-serif-sc-subset.woff2"

if [ ! -d build ]; then
  echo "build/ not found. Run \`yarn build\` first." >&2
  exit 1
fi

if command -v uvx >/dev/null 2>&1; then
  PY=(uvx --from fonttools --with brotli python)
  SUBSET=(uvx --from fonttools --with brotli pyftsubset)
elif command -v pyftsubset >/dev/null 2>&1; then
  PY=(python3)
  SUBSET=(pyftsubset)
else
  echo "Need uv (https://docs.astral.sh/uv/, recommended) or: pip install fonttools brotli" >&2
  exit 1
fi

mkdir -p "$CACHE_DIR"

if [ ! -f "$SRC_FONT" ]; then
  echo "Downloading Noto Serif SC..."
  curl -fL --retry 3 --max-time 300 -o "$SRC_FONT.part" "$FONT_URL"
  mv "$SRC_FONT.part" "$SRC_FONT"
fi

"${PY[@]}" scripts/serif_chars.py --write
"${SUBSET[@]}" "$SRC_FONT" \
  --text-file="$CHARS_FILE" \
  --flavor=woff2 \
  --output-file="$OUTPUT" \
  --layout-features='*' \
  --no-hinting

"${PY[@]}" scripts/serif_chars.py --verify-font
ls -lh "$OUTPUT"
