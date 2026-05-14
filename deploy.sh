#!/usr/bin/env bash
set -euo pipefail

rm -rf public
hugo
npx wrangler pages deploy public --project-name blog
