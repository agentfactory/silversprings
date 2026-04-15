# Silver Springs Studio

A fundraising-forward Next.js 16 site for Silver Springs Studio — an Ottawa-Carleton non-profit supporting adults with developmental disabilities through visual arts, gardening, cooking, and an artists' shop.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19** + **TypeScript**
- **Tailwind CSS v4** with custom Silver Springs design tokens
- **Fraunces** (headlines) + **Inter** (body) via `next/font`
- **Resend** for contact/intake form submissions
- **Donorbox** embed for donations (CRA tax receipts)

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in values
npm run dev
```

Visit http://localhost:3000.

## Environment variables

See `.env.example`. At minimum for production:

- `RESEND_API_KEY` — contact + intake forms
- `NEXT_PUBLIC_DONORBOX_URL` — campaign URL (update `donorboxCampaign` slug in `src/lib/content.ts` too)

## Content & placeholder data

All copy, programs, stories, and product data live in **`src/lib/content.ts`**.

Markers to find before launch:

- `TODO(denis)` — real values to replace (charity reg #, Donorbox slug, real socials)
- `[DRAFT]` — placeholder participant stories; replace with real, consented stories

## Deploy to Railway

1. Push to GitHub, connect Railway project to the repo.
2. Set env vars in Railway dashboard (see `.env.example`).
3. Railway auto-detects Next.js. Build: `npm run build`. Start: `npm start`.

## Site map

- `/` — homepage narrative (hero → impact → why → story → programs → giving tiers → volunteer → intake)
- `/our-mission` — about + impact
- `/programs` + `/programs/[slug]` — four programs
- `/stories` — participant voices
- `/shop` + `/shop/[slug]` — artists' shop
- `/donate` — Donorbox embed + giving tiers
- `/get-involved` — trial class, intake, volunteer, partner
- `/contact` — general contact form

## Accessibility

- Skip-to-content link
- Full keyboard nav, visible focus states
- Semantic HTML, ARIA where needed
- `prefers-reduced-motion` respected
- WCAG AA contrast targeted throughout
