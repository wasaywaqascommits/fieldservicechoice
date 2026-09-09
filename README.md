# FieldServiceChoice

An independent, specialist platform for **finding, comparing and choosing Field Service Management (FSM) software**. Business owners answer a few questions about their trade, team size, workflows, integrations and budget, and receive personalized, transparent **Fit Scores** — never influenced by vendor payments.

Built with **Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS · Supabase (PostgreSQL)**.

---

## Table of contents

- [What's included](#whats-included)
- [Requirements](#requirements)
- [Quick start](#quick-start)
- [Environment variables](#environment-variables)
- [Supabase setup](#supabase-setup)
- [Database migrations & seeding](#database-migrations--seeding)
- [Admin setup](#admin-setup)
- [Development, build & test](#development-build--test)
- [Deployment](#deployment)
- [Project structure](#project-structure)
- [Data integrity rules](#data-integrity-rules)
- [Troubleshooting](#troubleshooting)

---

## What's included

- **Homepage, software directory** (filter + compare up to 4), and **Software Finder** with a transparent, rules-based **Fit Score** engine.
- **Data-driven templates**: product profiles, head-to-head comparisons, alternatives, industry pages, "best" lists, pricing pages and buying guides.
- **Lead flow** with explicit **per-vendor consent**, plus affiliate/outbound **click tracking** via `/go/[slug]`.
- **SEO infrastructure**: per-page metadata, self-referencing canonicals, dynamic `sitemap.xml`, `robots.txt`, JSON-LD (Organization, WebSite, BreadcrumbList, SoftwareApplication — no fabricated ratings), breadcrumbs and internal linking.
- **Trust pages**: methodology, editorial policy, data verification, affiliate disclosure + legal templates.
- **Admin area** (`/admin`, `noindex`, Supabase-auth-gated): dashboard, product verification workload, leads and partner inquiries.
- **Supabase schema** (`supabase/migrations`) with Row Level Security and seed data.
- **Tests** (`tests/`) for the Fit Score engine — including a test proving affiliate payout never changes the score.

> The public site runs **fully offline on the local seed data in `/data`** — Supabase is only required for persisting leads/partners and for admin auth.

---

## Requirements

- **Node.js 20.11+** (developed and built on Node 24 LTS; the Node 22 line is fully supported).
- npm 10+ (or pnpm/yarn).
- A Supabase project (optional for local UI development; required for leads + admin).

---

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in NEXT_PUBLIC_SITE_URL at minimum
npm run dev                  # http://localhost:3000
```

The site works immediately with no Supabase configured — form submissions are validated and logged server-side (not persisted) until you connect a database.

---

## Environment variables

Copy `.env.example` to `.env.local`. All Supabase/analytics keys are optional for local UI work.

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | yes | Canonical base URL (no trailing slash). |
| `NEXT_PUBLIC_SUPABASE_URL` | for DB/admin | Supabase project URL. |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | for DB/admin | Anon/publishable key (browser-safe, RLS-guarded). |
| `SUPABASE_SERVICE_ROLE_KEY` | for writes | **Server-only.** Bypasses RLS for lead/partner writes. Never expose to the browser. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | no | GA4 measurement id. |
| `NEXT_PUBLIC_POSTHOG_KEY` / `NEXT_PUBLIC_POSTHOG_HOST` | no | PostHog analytics. |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY` | no | Optional bot protection. |

---

## Supabase setup

1. Create a project at [supabase.com](https://supabase.com).
2. In **Project Settings → API**, copy the Project URL, the anon/publishable key, and the service-role key into `.env.local`.
3. Run the migrations and seed (below).

## Database migrations & seeding

Using the Supabase SQL editor (simplest) or the Supabase CLI:

```bash
# With the Supabase CLI (linked project):
supabase db push        # or run the files manually, in order:
#   supabase/migrations/0001_init.sql
#   supabase/migrations/0002_rls.sql
#   supabase/seed.sql    (optional seed)
```

Or paste each file into **SQL Editor → New query** and run them in order: `0001_init.sql`, then `0002_rls.sql`, then optionally `seed.sql`.

RLS ensures the public can only read published content; leads, consents, partner inquiries, revenue and vendor terms are never publicly readable. Public form submissions are written server-side with the service-role key.

## Admin setup

The admin area lives at `/admin` and is `noindex`. Access requires a Supabase Auth user whose id is present in the `admin_profiles` table.

1. In Supabase **Authentication → Users**, create your admin user (email + password). **Never hard-code admin credentials.**
2. Grant admin rights by inserting your user id into `admin_profiles`:

```sql
insert into admin_profiles (id, email, role)
values ('<auth-user-uuid>', 'you@example.com', 'admin');
```

3. Sign in at `/admin`.

Without Supabase configured, `/admin` runs in **preview mode**: it shows content/verification stats from the seed and exposes no lead/partner data.

## Development, build & test

```bash
npm run dev         # dev server
npm run build       # production build
npm run start       # serve the production build
npm run lint        # ESLint (next/core-web-vitals)
npm run typecheck   # tsc --noEmit
npm run test        # Vitest (Fit Score engine)
npm run check       # typecheck + lint + test
```

## Deployment

- **Vercel (recommended):** see [`VERCEL-DEPLOY.md`](./VERCEL-DEPLOY.md).
- **cPanel (Node.js / Passenger):** see [`CPANEL-DEPLOY.md`](./CPANEL-DEPLOY.md).

## Project structure

```
app/                 # App Router pages, API routes, sitemap/robots
  api/               # lead, partner, newsletter, finder, events endpoints
  go/[slug]/         # outbound vendor click tracking + redirect
  admin/             # auth-gated admin (noindex)
components/          # UI, layout, products, finder, comparison, forms, admin
data/                # canonical dev seed: products, features, industries, comparisons…
lib/
  scoring/           # Fit Score engine + configurable weights (no UI, no commercial data)
  database/          # data-access layer, Supabase clients, server mutations, auth
  seo/               # metadata + JSON-LD helpers
  analytics/         # event tracking + attribution
  validation/        # Zod schemas
  security/          # rate limiting
supabase/            # migrations + seed
tests/               # Vitest suites
types/               # domain + finder/lead types
```

## Data integrity rules

- **We never fabricate** pricing, ratings, review counts, customer counts, integrations or testing claims.
- Facts carry a **verification status** and a **date**; the UI shows "not yet verified" / "contact vendor" instead of made-up values.
- The **Fit Score engine never reads commercial data** (affiliate type, payout, partnership). A test enforces this.

## Troubleshooting

- **Fonts fail to fetch during build:** the build fetches the Inter font from Google. On an offline machine, swap `next/font/google` for a local font or a system stack in `app/layout.tsx`.
- **Admin shows "preview mode":** Supabase env vars are not set — expected until you configure them.
- **Leads not saving:** confirm `SUPABASE_SERVICE_ROLE_KEY` is set (server) and migrations have run.
