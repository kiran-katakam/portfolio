#!/bin/sh
# Renders scripts/og.html to public/og.png (1200x630 share card).
cd "$(dirname "$0")/.." &&
google-chrome --headless --disable-gpu --hide-scrollbars --window-size=1200,630 \
  --screenshot="$PWD/public/og.png" "file://$PWD/scripts/og.html"
