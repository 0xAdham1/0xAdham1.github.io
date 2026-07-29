#!/usr/bin/env bash
# Post-build: English-only static site served at root (no /en prefix).
# The app lives under src/app/[locale], so Next always emits pages under out/en/.
# This mirrors them to the root so links like /about resolve on a plain static host.
set -e
cd "$(dirname "$0")"
# Drop non-English locale outputs (content is English-only).
for l in es ja zh-CN zh-TW pt-BR; do
  rm -rf "out/$l" "out/$l.html" "out/$l.txt"
done
# Mirror English pages + RSC data up to the root.
cp -r out/en/. out/
# Homepage at root.
cp out/en.html out/index.html
[ -f out/en.txt ] && cp out/en.txt out/index.txt || true
echo "flatten: done"
