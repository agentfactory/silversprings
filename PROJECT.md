# Silver Springs Studio — Project Handoff

> **Reboot instructions for Claude:** Read this file first. Everything you need to pick up where we left off is here. Full plan at `C:\Users\lafla\.claude\plans\hazy-inventing-cocoa.md`.

---

## What this is

A fundraising-forward marketing site for **Silver Springs Studio**, an Ottawa-Carleton non-profit supporting adults with developmental disabilities (ages 16+). Programs: visual arts, gardening, cooking, and an artists' shop. Supported by OCAPDD.

**Why we're rebuilding:**
- `silverspringstudio.com` (live) has zero fundraising mechanisms — purely transactional.
- `silversprings-production.up.railway.app` was a failed redo — bolted on a Donate button without narrative.
- **Goal:** interweave donation asks with mission storytelling as the *core* narrative (not a tab), while preserving service promotion (programs, intake, shop, volunteer).

---

## Current status: v1 code complete, NOT deployed

| Phase | Status |
|-------|--------|
| Plan approved | ✅ |
| Next.js scaffolded | ✅ |
| Design system (Tailwind v4 tokens) | ✅ |
| Homepage 9-section narrative | ✅ |
| All 8 pages + 8 dynamic routes built | ✅ |
| Contact + intake API routes (Resend) | ✅ |
| robots.txt + sitemap | ✅ |
| Production build green | ✅ |
| Git init | ❌ not started |
| GitHub repo | ❌ not created |
| Railway deploy | ❌ blocked on Denis decisions |

**Next action on reboot:** Deploy to Railway. See "Deployment checklist" below.

---

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-based config via `@theme` in `src/app/globals.css`)
- **Fraunces** serif headlines + **Inter** body, loaded via `next/font`
- **lucide-react** for icons (v1.8.0 — Instagram/Facebook brand icons removed, custom SVGs in `footer.tsx`)
- **Resend** for transactional email (project rule: never SendGrid/ElasticEmail)
- **Donorbox** iframe embed for donations (Canadian charity → CRA tax receipts)
- Deploys on **Railway** (project-wide convention, push via GitHub)

**Windows gotcha:** `lightningcss-win32-x64-msvc` had to be force-installed separately — npm's optional deps failed on initial install. Already fixed in `package.json`. Won't affect Linux Railway build.

---

## Design system at a glance

**Palette** (tokens in `globals.css`):
- `cream` / `cream-dark` — page background
- `sage-100` through `sage-900` — primary accent (calm, natural)
- `terracotta-100` through `terracotta-700` — warm CTA/emphasis
- `ink` / `ink-soft` / `ink-muted` — text hierarchy
- `line` — borders

**Typography:**
- `font-serif` → Fraunces (with SOFT, WONK, opsz axes) — all display copy
- `font-sans` → Inter — body

**Voice:** warm, serious, not clinical. Expects artists to make real work. Examples of the tone:
- *"Creativity doesn't have an age limit. Or a diagnosis."* (hero)
- *"Not as therapy. As practice."* (mission)
- *"A gift of any size keeps the studio open."* (giving tiers)

---

## File map

```
src/
├── app/
│   ├── layout.tsx              Root shell, fonts, header, footer, skip link
│   ├── page.tsx                Homepage — 8 imported sections
│   ├── globals.css             Tailwind v4 @theme tokens, grain texture, a11y
│   ├── robots.ts + sitemap.ts  SEO
│   ├── our-mission/page.tsx
│   ├── programs/page.tsx + [slug]/page.tsx    4 programs via generateStaticParams
│   ├── stories/page.tsx
│   ├── shop/page.tsx + [slug]/page.tsx        4 products via generateStaticParams
│   ├── donate/page.tsx         Donorbox iframe + giving-tier cards
│   ├── get-involved/page.tsx   Trial + intake + volunteer + partner
│   ├── contact/page.tsx
│   └── api/
│       ├── contact/route.ts    POST → Resend (falls back to console.log in dev)
│       └── intake/route.ts     POST → Resend
├── components/
│   ├── site/           header.tsx, footer.tsx, section.tsx
│   ├── home/           hero, impact-stats, why-we-exist, featured-story,
│   │                   programs-grid, giving-tiers, volunteer-band, join-cta
│   ├── ui/             button.tsx (variant + size variants, link-aware)
│   └── forms/          simple-form.tsx (client component, fetch POST)
└── lib/
    ├── content.ts      SINGLE SOURCE OF TRUTH — all copy, programs, stories,
    │                   products, giving tiers, site metadata
    └── utils.ts        cn(), donorboxUrl(amount)
```

**If you need to change copy or data:** `src/lib/content.ts`. Don't edit page components for copy changes.

---

## Homepage narrative (the thing the rejected redo missed)

Section order in `src/app/page.tsx`:

1. **Hero** — emotional lede + dual CTA (Donate primary, Programs secondary). CSS-art landscape placeholder.
2. **ImpactStats** — 4 numbers (participants, years, programs, sales → artists)
3. **WhyWeExist** — problem statement about what happens when school ends
4. **FeaturedStory** — participant quote on sage-900 panel (Maya, placeholder)
5. **ProgramsGrid** — 4 staggered cards (Arts, Gardening, Cooking, Shop)
6. **GivingTiers** — $25/$75/$250/$1000, each wired to Donorbox with prefilled amount
7. **VolunteerBand** — terracotta CTA panel
8. **JoinCta** — two-card section for trial + intake (participant/family focused)

Donor narrative is interleaved (not in a separate tab). Service CTAs for participants/families are at the bottom so donors read the mission first.

---

## Placeholders to replace before launch

All marked in `src/lib/content.ts`:

- `TODO(denis): charity reg #` — CRA registration number (footer)
- `TODO(denis): donorboxCampaign` — actual campaign slug (donate page iframe)
- `TODO(denis): validate socials` — Instagram + Facebook URLs
- `TODO(denis): confirm inbox` — `hello@silverspringstudio.com` or actual
- `[DRAFT]` on 3 participant stories — replace with real consented stories
- All imagery is CSS-art (SVG gradients + shapes). Real photography needs consent releases before launch. Image slots are already sized and styled.

---

## Environment variables

See `.env.example`. For Railway deploy:

```
RESEND_API_KEY=re_xxx
CONTACT_TO_EMAIL=denis@theagentfactory.ai
CONTACT_FROM_EMAIL="Silver Springs <noreply@silverspringstudio.com>"
INTAKE_TO_EMAIL=          # optional, falls back to CONTACT_TO_EMAIL
NEXT_PUBLIC_DONORBOX_URL=https://donorbox.org/silver-springs-studio
```

**Graceful dev fallback:** If `RESEND_API_KEY` is missing, contact/intake routes log to console and return `ok: true` so you can test the UX without credentials.

---

## Deployment checklist (pick up here on reboot)

Denis needs to answer these before we can deploy:

1. **GitHub repo** — new repo or existing URL?
2. **Railway project** — deploy into the existing `silversprings-production` project (replacing the rejected redo), or create a new service?
3. **Auth** — Claude needs:
   ```bash
   ! gh auth status
   ! railway login
   ```
   (The `!` prefix runs it in-session so Claude sees the result.)

Once answered, deploy sequence is:

```bash
cd C:/Users/lafla/claude_projects/silver-springs
git init && git add -A && git commit -m "v1: fundraising-first site"
gh repo create <name> --source=. --push --public   # or --private
railway link                                        # pick existing project
railway up                                          # or push to GitHub → auto-deploy
# Then set env vars in Railway dashboard (above)
```

**Verification after deploy:**
- All 8 top-level routes render
- Keyboard tab through header → donate CTA → hero CTAs → sections
- Submit contact form → email lands at `denis@theagentfactory.ai`
- Donorbox iframe loads (will 404 until campaign slug is real — expected)
- Lighthouse ≥95 perf, 100 a11y, 100 SEO
- Mobile at 375px — no layout breaks

---

## Open decisions (not blocking deploy)

1. **Shop checkout:** Currently CTAs go to `/contact` as inquiry flow. Switch to Stripe Payment Links or Shopify when Silver Springs formalizes inventory. One link per product in `content.ts`.
2. **Photography:** Denis to coordinate participant consent releases before replacing CSS-art placeholders.
3. **Donorbox campaign:** Needs to be registered with OCAPDD's charity umbrella or as Silver Springs' own — out of scope for the site build.

---

## Key constraints / project rules (from CLAUDE.md files)

- **Resend only** for email (never SendGrid/ElasticEmail).
- **Railway deploys via GitHub push.** Never confuse Railway deploy IDs with git commit hashes.
- **Confirm before destructive or shared-state actions** (this is why we paused before deploying).
- **No emojis in code.** Use lucide-react or inline SVG.
- **Windows shell:** use bash syntax (forward slashes, `/dev/null`), not PowerShell.
- **Package-first:** research before writing custom (done — we picked Donorbox, Resend, shadcn patterns over rolling our own).

---

## How to pick up cleanly on reboot

Paste this into Claude at the start of a fresh session:

> Read `C:\Users\lafla\claude_projects\silver-springs\PROJECT.md` and then ask me which of the "Deployment checklist" questions I've resolved. Don't touch any files until I confirm which GitHub repo and Railway project to target. The code is already v1 complete and building green — we just need to deploy.
