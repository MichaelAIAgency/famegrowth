# FameGrowth

OnlyFans Agentur Website. Next.js (App Router) · Tailwind CSS · Framer Motion · Lucide.
Built for SEO ("onlyfans agentur") and conversion, deployable on Vercel.

## Stack
- **Next.js 14** (App Router, RSC) with the Metadata API for SEO
- **Tailwind CSS** for styling, **Framer Motion** for animation, **Lucide** for icons
- Dynamic routes for **Fallstudie** (`/fallstudie`) and **Blog** (`/blog`) backed by typed mock data in `lib/`

## Getting started
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Configuration — do this before launch
Copy `.env.example` to `.env.local` and set:
- `NEXT_PUBLIC_SITE_URL` — production URL (canonical/sitemap/OG)
- `NEXT_PUBLIC_WHATSAPP_NUMBER` — owner WhatsApp number, digits only (e.g. `491701234567`)

Then fill in the real content:
- `lib/site.ts` — brand, contact, social, scarcity (`slotsLeft`, `slotsMonth`)
- `app/impressum/page.tsx` & `app/datenschutz/page.tsx` — legally required, currently placeholders
- `lib/caseStudies.ts` & `lib/blog.ts` — swap mock data for real content (or a CMS)
- `app/api/lead/route.ts` — wire up real lead delivery (Resend / CRM / Slack); currently logs server-side

## SEO surface
- Per-page metadata via `lib/seo.ts` (`buildMetadata`)
- JSON-LD: Organization + WebSite (layout), FAQPage (home), Article + BreadcrumbList (inner pages)
- `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`, dynamic OG image `app/opengraph-image.tsx`

## Notes
- The legacy chatbot was intentionally **not** migrated.
- All animation respects `prefers-reduced-motion`.
