# sandbox/

A scratch copy of the website for experimenting with themes, layouts, and copy
**without touching the live site**. Nothing in here is ever deployed —
`deploy.sh` only publishes `site/`.

## Workflow

1. Edit files in here (try a new color scheme in `styles.css`, rearrange
   sections in `index.html`, whatever).
2. Preview locally: `./serve.sh sandbox` → http://localhost:8643
   (Run `./serve.sh site` in parallel → http://localhost:8642 to compare
   against the current live version.)
3. Happy with a change? Copy the file into `site/`:
   ```bash
   cp sandbox/styles.css site/styles.css
   ```
4. Commit and deploy:
   ```bash
   git add -A && git commit -m "New theme"
   ./deploy.sh
   ```
5. Experiment failed? Reset the sandbox to match the live site:
   ```bash
   rm -rf sandbox && cp -R site sandbox
   ```

Tip: you can keep multiple experiments as extra folders (`sandbox-dark/`,
`sandbox-minimal/`) — only `site/` is ever published.
