# Website Plan — Open IT Design (oitd.net)

## Overview

Single-page marketing site for Open IT Design, an IT consultancy run by Brian Huddleston (IT Architect, est. 2007, SF Bay Area, remote-first). One goal: get qualified visitors to book a **free intro call** via Calendly.

- **Primary CTA:** Book a free intro call → https://calendly.com/oitd
- **Domain:** https://oitd.net
- **Secondary link:** LinkedIn → https://www.linkedin.com/in/bhuddleston/
- **Source data:** `BRIEF.md` (all copy/content), `STRUCTURE.md` (section outline)
- **Build output:** `site/` (deployable root; nothing else in the repo ships)

## Audience & Message

- **Sweet spot:** small and medium-sized businesses that grew organically and need IT structure, compliance readiness, and cost control to scale into large companies.
- **Proof range:** solo companies up to 20,000-employee utilities; in business since 2007.
- **Positioning:** not a break/fix shop — builds frameworks, infrastructure, and integrations. Cost-optimization angle (IT sprawl, underutilized services → savings) should be prominent.

## Tech Stack

- **Type:** static single page — plain HTML + CSS + minimal vanilla JS (no framework, no build step). Fast, hostable anywhere, trivial to maintain.
- **Files:** `site/index.html`, `site/styles.css`, `site/script.js` (nav scroll + mobile menu only), `site/assets/` (optimized copies of logo + photo from repo `assets/`).
- **Fonts:** system font stack or one Google Font (e.g. Inter) — decide during build; keep it self-hostable if simple.
- **Calendly:** link buttons (https://calendly.com/oitd). Optional inline embed widget in the contact section if it stays lightweight.
- **Hosting:** TBD (Netlify / GitHub Pages / Cloudflare Pages all fine for static). Decide at deploy time — the build must not depend on a specific host.

## Page Sections (top → bottom)

See `STRUCTURE.md` for detail. Summary:

1. **Hero** — logo, headline, subheadline (consultancy positioning from BRIEF source copy), Calendly CTA
2. **About** — Brian, photo, since 2007, Bay Area/remote-first, cross-platform + AWS/VoIP/data-center depth
3. **Services** — grouped offering cards (infra/cloud, email deliverability, compliance/SOC 2, identity & access, shadow-IT audit + cost optimization, office build-outs, AI/agentic tooling)
4. **Technologies** — compact grid from BRIEF Tech Stack section (representative, not exhaustive); AI/agentic items featured, not buried
5. **Who I Help** — SMB sweet spot, client range stats, works with facilities/security/finance
6. **How It Works** — 3 steps: free intro call → evaluation → timeline/cost/availability; hourly in 15-min increments
7. **Contact/CTA** — Calendly (button or embed), LinkedIn
8. **Footer** — © Open IT Design, since 2007, LinkedIn

Global: sticky anchor nav, repeated CTA, mobile-responsive, dark or light professional theme.

## Content Rules

- All copy derives from `BRIEF.md`. The two legacy-site quotes are source material — rewrite freely; no obligation to reuse verbatim.
- No testimonials section (none yet).
- No fake client logos or claims beyond what's in the brief.
- Email/phone TBD — do not invent; Calendly + LinkedIn are the only contact paths for now.

## Build Checklist (acceptance criteria)

- [ ] Single page renders all 8 sections, responsive (mobile → desktop)
- [ ] Anchor nav works, sticky, with mobile menu
- [ ] All CTAs point to https://calendly.com/oitd; LinkedIn link correct
- [ ] Logo + profile photo optimized (web-sized, compressed) in `site/assets/`
- [ ] Meta: title, description, OG tags, favicon
- [ ] Semantic HTML, alt text, accessible contrast
- [ ] No build step required to deploy `site/`; opens correctly from `file://` and any static host
- [ ] Fast: no heavy JS, no external dependencies beyond optional font/Calendly embed

## Milestones

1. [x] BRIEF.md filled in
2. [x] Structure decided (single page)
3. [x] Stack chosen (static, no framework)
4. [ ] Plan critiqued by second agent (blind-spot review)
5. [ ] v1 built in `site/`
6. [ ] Review + iterate
7. [ ] Deploy + DNS for oitd.net

## Open Questions

- Hosting provider + DNS for oitd.net (registrar? where is the domain managed?)
- Brand colors/fonts — derive from logo (`assets/logos/`) unless directed otherwise
- Email address to list publicly? (currently Calendly-only)
- Calendly inline embed vs. button-only
