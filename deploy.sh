#!/usr/bin/env bash
set -euo pipefail

hugo
npx wrangler pages deploy public --project-name blog
