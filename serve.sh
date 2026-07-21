#!/usr/bin/env bash
# Local preview server for the site or the sandbox.
# Usage:
#   ./serve.sh           # previews site/    on http://localhost:8642
#   ./serve.sh sandbox   # previews sandbox/ on http://localhost:8643
#   ./serve.sh stop      # stops both
#
# Workflow: experiment with themes/layouts in sandbox/, preview with
# ./serve.sh sandbox, and when happy, copy the changed files into site/
# (e.g. cp sandbox/styles.css site/), commit, and ./deploy.sh.

set -euo pipefail
cd "$(dirname "$0")"

stop_all() {
  pkill -f "http.server 8642" 2>/dev/null || true
  pkill -f "http.server 8643" 2>/dev/null || true
  echo "Stopped preview servers."
}

case "${1:-site}" in
  stop) stop_all ;;
  sandbox)
    (cd sandbox && python3 -m http.server 8643 &>/dev/null &)
    echo "Sandbox preview: http://localhost:8643"
    ;;
  site|"")
    (cd site && python3 -m http.server 8642 &>/dev/null &)
    echo "Site preview: http://localhost:8642"
    ;;
  *) echo "Usage: ./serve.sh [site|sandbox|stop]"; exit 1 ;;
esac
