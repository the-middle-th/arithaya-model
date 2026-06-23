#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

git remote get-url origin >/dev/null 2>&1 || \
  git remote add origin git@github.com:arithachboss-cmyk/arithaya-model.git

git push -u origin main
