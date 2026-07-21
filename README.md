# oitd-website

Repo for designing and building the new business website.

## Layout

| Path | Purpose |
|---|---|
| `site/` | **Website root** — everything in here syncs/deploys to hosting (Netlify, Vercel, GitHub Pages, S3, etc.). Nothing else in this repo gets deployed. |
| `assets/` | Source material (not deployed unless referenced) |
| `assets/photos/` | Profile photos, team headshots, site imagery |
| `assets/logos/` | Logo files (SVG, PNG, etc.) |
| `assets/brand/` | Fonts, color swatches, brand guidelines |
| `docs/` | Supporting documentation |
| `PLAN.md` | Master plan: goals, tech stack, milestones |
| `STRUCTURE.md` | Sitemap and page-by-page structure |
| `BRIEF.md` | **Raw data file** — all business info, copy, and content the planner/builder will incorporate |

## Workflow

1. Fill in `BRIEF.md` with raw content and business data.
2. Use `PLAN.md` to decide stack + hosting.
3. Build into `site/`.
4. Sync/deploy `site/` only.
