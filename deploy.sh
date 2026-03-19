#!/usr/bin/env bash
set -euo pipefail

hugo
(cd ~/src/bjj-quartz && npx quartz build -o public)
cp -r ~/src/bjj-quartz/public/ public/bjj/
npx wrangler pages deploy public --project-name blog
