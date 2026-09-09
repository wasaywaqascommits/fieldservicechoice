# Deploying FieldServiceChoice to Vercel

Vercel is the recommended host — it runs the Next.js Node server natively with zero config.

## 1. Push to GitHub

```bash
git add .
git commit -m "Initial FieldServiceChoice platform"
git branch -M main
git remote add origin https://github.com/<you>/fieldservicechoice.git
git push -u origin main
```

## 2. Create the Vercel project

1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
2. Framework preset: **Next.js** (auto-detected). Build command `next build`, output handled automatically.
3. Add **Environment Variables** (Project → Settings → Environment Variables):
   - `NEXT_PUBLIC_SITE_URL` = `https://fieldservicechoice.com`
   - `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` (mark as **sensitive**; server only)
   - Optional: `NEXT_PUBLIC_GA_MEASUREMENT_ID`, `NEXT_PUBLIC_POSTHOG_KEY`, `NEXT_PUBLIC_POSTHOG_HOST`
4. Deploy.

## 3. Supabase production

- Use a dedicated Supabase project for production.
- Run `supabase/migrations/0001_init.sql`, then `0002_rls.sql` (and optionally `seed.sql`) in the SQL editor.
- Create your admin user and add its id to `admin_profiles` (see README → Admin setup).

## 4. Custom domain

1. In Vercel → Project → **Domains**, add `fieldservicechoice.com` and `www.fieldservicechoice.com`.
2. Point DNS at Vercel (A/ALIAS or the provided CNAME). If DNS/email stays on cPanel, only the web records change.
3. Confirm `NEXT_PUBLIC_SITE_URL` matches the final canonical host.

## 5. Post-deploy checks

- `‹site›/sitemap.xml` and `‹site›/robots.txt` resolve.
- Product/comparison/industry pages render server-side (view source shows real HTML).
- `/admin` is `noindex` and requires sign-in.
- Submit a test lead and confirm it appears in Supabase (`leads` table) and admin.
