#!/usr/bin/env bash
# Deploy site/ to GitHub Pages (gh-pages branch of binarynomad/oitd-website).
# Usage: ./deploy.sh
#
# How it works: publishes ONLY the contents of site/ to the gh-pages branch
# via git subtree. The main branch (plans, brief, assets) is never published.

set -euo pipefail
cd "$(dirname "$0")"

# Commit any uncommitted changes first so the deploy matches main
if ! git diff-index --quiet HEAD --; then
  echo "Uncommitted changes found. Commit them first (git add -A && git commit)."
  exit 1
fi

echo "Pushing main..."
git push origin main

echo "Deploying site/ to gh-pages..."
git subtree push --prefix site origin gh-pages

echo "Done. Live at https://oitd.net in ~1 minute."
