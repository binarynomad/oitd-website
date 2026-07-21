# Blind-Spot Critique of PLAN.md

> Second-agent review of `PLAN.md` (with `BRIEF.md` and `STRUCTURE.md` as inputs) prior to building v1.
> Fulfills PLAN.md Milestone 4: "Plan critiqued by second agent (blind-spot review)."
> Tags: **[must-fix]** blocks a correct v1 or deploy · **[should-fix]** fix before launch · **[nice-to-have]** polish.

## Contradictions between files

1. **[must-fix] Section count mismatch: PLAN has 8 sections, STRUCTURE has 7.** PLAN.md adds a standalone "Technologies" section (#4) that doesn't exist in STRUCTURE.md, and STRUCTURE's sticky-nav spec (`About · Services · Who I Help · How It Works · Contact`) has no Technologies anchor. PLAN says "See STRUCTURE.md for detail" — but the detail contradicts the summary. Reconcile before build (and decide if Technologies gets a nav anchor).

2. **[must-fix] Voice inconsistency: "I" vs "we".** STRUCTURE uses first person ("What I Do", "Who I Help"); BRIEF's legacy copy uses "We help our clients…"; the business is one person. Pick one voice (first person singular is honest for a solo consultancy) and note it in Content Rules — otherwise the builder will mix them.

3. **[should-fix] "AI/agentic tooling" appears as a Services card in PLAN (#3) but is not in BRIEF's "Problems you solve" list** — it only exists in the tech-stack inventory. PLAN's own Content Rules say "no claims beyond what's in the brief." Either add an AI-services line to BRIEF (what does Brian actually deliver — agent deployment? LLM vendor selection? automation buildout?) or drop the card.

## SEO gaps

4. **[must-fix] BRIEF's entire SEO section is empty** (keywords, meta description, page title all blank) while the build checklist requires "Meta: title, description, OG tags." Draft these before build — they're positioning decisions, not implementation details. Suggested targets exist implicitly: "IT consultant SF Bay Area", "SOC 2 readiness consultant", "fractional IT architect", "email deliverability DMARC consultant".

5. **[should-fix] No structured data plan.** A JSON-LD `ProfessionalService` + `Person` block (name, founder, foundingDate 2007, areaServed, sameAs → LinkedIn) is cheap and high-value for a local B2B consultancy. Add to checklist.

6. **[should-fix] No OG image specified.** The checklist requires OG tags but neither logo PNG is a valid 1200×630 social card. Plan to generate one, or accept ugly link previews on LinkedIn — which is your only social channel, so previews matter.

7. **[nice-to-have] No canonical URL, robots.txt, or sitemap.xml mentioned**, and no www-vs-apex redirect decision. Trivial for one page but should be in the deploy checklist.

## Conversion / CTA

8. **[must-fix] Verify https://calendly.com/oitd before build.** The plan never confirms the link is live, public, and has a "free intro call" event type. Also consider linking a specific event URL (e.g. `/oitd/intro-call`) rather than the profile page — profile pages can show multiple or zero events and add a click.

9. **[should-fix] Calendly-only contact is a conversion leak.** Visitors unwilling to book a 30-min call with a stranger (most B2B first-touchers) have no low-friction fallback — no email, no form. BRIEF says email is TBD; resolve it before launch, even if it's just `hello@oitd.net`. LinkedIn is not a contact channel for procurement-minded SMBs.

10. **[should-fix] No analytics/measurement plan.** The site has exactly one goal (bookings) and no way to know if it's working. Add a privacy-friendly option (Cloudflare Web Analytics, Plausible) and/or UTM parameters on the Calendly links so bookings are attributable.

11. **[nice-to-have] CTA copy is undifferentiated.** "Book a free intro call" repeated N times is fine, but the plan gives no secondary path for not-ready visitors (e.g., "Connect on LinkedIn" as an explicit soft CTA rather than a footer link).

## Deploy / DNS

12. **[must-fix] oitd.net already hosts a live site, and DNS migration risk is unaddressed.** BRIEF quotes copy "from current site," so something is serving oitd.net now. The plan's deploy milestone says only "Deploy + DNS." Before touching anything: identify registrar/DNS host, inventory ALL existing records — especially MX/SPF/DKIM/DMARC. Breaking his own email authentication during a DNS move would be a bad look for a consultant who sells email deliverability. This deserves its own pre-deploy checklist.

13. **[should-fix] "Hosting TBD, decide at deploy time" is mostly fine for static files, but not fully host-agnostic:** custom-domain HTTPS setup, apex/CNAME flattening support, and redirect rules differ across Netlify/GH Pages/Cloudflare Pages. GH Pages in particular complicates apex domains and private repos. Narrowing to one candidate now costs nothing.

## Technical / stack

14. **[should-fix] The `file://` requirement conflicts with the optional Calendly inline embed and Google Font.** The embed loads third-party JS (won't behave identically on `file://`), and a CDN font is an external dependency the checklist otherwise forbids. Recommend deciding now: button-only Calendly + self-hosted or system font. This also resolves Open Question #4.

15. **[should-fix] Calendly inline embed has privacy implications the plan ignores.** It sets cookies/loads trackers; BRIEF's legal section is TBD with no privacy policy. Button-only sidesteps this entirely for a CA-based business (CCPA). Another argument for killing the embed.

16. **[should-fix] Theme is undecided ("dark or light professional theme") and brand colors are TBD.** This blocks the contrast acceptance criterion and affects logo usability (check whether the PNGs have transparent backgrounds that only work on one background). Decide before build, not during.

## Accessibility

17. **[should-fix] The a11y checklist is too thin.** "Semantic HTML, alt text, accessible contrast" omits the things single-page sites actually get wrong: keyboard-operable mobile menu with `aria-expanded`, visible focus states, a skip-to-content link, logical heading hierarchy (one `h1`), and `prefers-reduced-motion` respected for smooth-scrolling anchor nav. Add these to acceptance criteria.

## Copy / positioning

18. **[should-fix] The headline "Helping You Build Better Systems" is generic** — it doesn't say who it's for or what outcome. The subheadline must carry the positioning (SMBs → structure to scale, cost savings). Plan permits rewriting; it should *require* the hero to name the audience and outcome, since the brief's elevator pitch ("companies grow organically with little structure…") is the strongest copy in the file.

19. **[nice-to-have] "How It Works" step 2 in BRIEF is internal-facing** ("Brian evaluates… confirms he has the skills") — needs reframing to client benefit ("honest assessment of fit before you spend a dollar" is actually a trust asset if worded right).

20. **[nice-to-have] Tech grid curation risk.** BRIEF lists ~50 tools including obscure ones (Hermes, OpenClaw, Pi Agent, "Kandji/Iru") and four "alternative model" vendors. PLAN says "representative, not exhaustive" — good, but give the builder a cap (~15–20 recognizable logos/names) and drop anything a buyer wouldn't recognize; a long list of AI model providers reads as hobbyist, not architect.

21. **[nice-to-have] "~19 years" / "since 2007" staleness.** Use "since 2007" everywhere (or compute years in JS); hard-coded "~19 years" and a hard-coded © year will silently rot.

## Assets

22. **[should-fix] No favicon source exists.** Checklist requires a favicon; nothing in `assets/` is designated for it. Also unspecified: which logo (`oitd-logo-1.png` mark vs `oitd-title-20210422.png` wordmark) goes in the nav vs hero. The title logo is dated 2021 — confirm it's still current branding.

---

## Verdict

**Buildable with fixes — not as-is.** The structure, stack, and content rules are sound and appropriately scoped; nothing here requires rethinking the approach. But four items genuinely block a correct v1: the PLAN/STRUCTURE section mismatch (#1), voice decision (#2), missing SEO/meta copy (#4), and Calendly URL verification (#8). The DNS/email migration risk (#12) blocks *deploy*, not build, but should be investigated in parallel since it may take the longest to resolve. Recommend a 30-minute pass to reconcile the docs and answer the four open questions in PLAN.md before writing any HTML.
