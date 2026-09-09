# Deploying FieldServiceChoice on cPanel (Node.js / Passenger)

FieldServiceChoice is a **server-rendered Next.js application**. It needs a Node.js runtime — it is **not** a static site, so it cannot run from plain HTML hosting. Many cPanel hosts support Node.js apps via **Setup Node.js App** (Phusion Passenger). This guide covers that path, plus a recommended hybrid.

> **Recommended:** host the app on **Vercel** (see `VERCEL-DEPLOY.md`) and use cPanel for **DNS and email** only. This avoids the most common cPanel/Passenger issues with Next.js. Use the steps below only if you must run the app on cPanel.

## Requirements

- cPanel with **Setup Node.js App** (Passenger) and **Node.js 20+** (Node 22 recommended; 24 also works).
- SSH access (strongly recommended for `npm install` and `npm run build`).
- A Supabase project for leads/admin (optional for a read-only content site).

## 1. Create the Node.js application

1. cPanel → **Setup Node.js App** → **Create Application**.
2. Node.js version: **22.x** (or the newest available ≥ 20).
3. Application mode: **Production**.
4. Application root: e.g. `fieldservicechoice`.
5. Application URL: your domain/subdomain.
6. **Application startup file:** `server.js` (created in step 4).
7. Save. cPanel creates a virtualenv and shows the `source ...activate` command.

## 2. Upload the code

Upload the project (Git or the File Manager) into the application root — **exclude** `node_modules` and `.next`; you'll build on the server.

## 3. Environment variables

In **Setup Node.js App → Environment variables**, add:

- `NODE_ENV=production`
- `NEXT_PUBLIC_SITE_URL=https://yourdomain.com`
- `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (server-only)
- Any optional analytics keys.

## 4. Add a Passenger startup file

Passenger runs the startup file. Create `server.js` in the application root so it starts the Next.js production server:

```js
// server.js — starts Next.js under Passenger
const { createServer } = require('http');
const next = require('next');

const port = process.env.PORT || 3000;
const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => handle(req, res)).listen(port, () => {
    console.log(`FieldServiceChoice listening on ${port}`);
  });
});
```

## 5. Install and build (over SSH)

```bash
cd ~/fieldservicechoice
source /home/<user>/nodevenv/fieldservicechoice/22/bin/activate   # path shown by cPanel
npm install
npm run build
```

## 6. Restart the app

cPanel → **Setup Node.js App → Restart**, or `touch tmp/restart.txt` in the app root.

## 7. Supabase & admin

Run `supabase/migrations/0001_init.sql`, `0002_rls.sql`, and optionally `seed.sql` in Supabase, then create your admin user and add its id to `admin_profiles` (README → Admin setup).

## Troubleshooting

- **502 / app won't boot:** confirm the startup file is `server.js`, the Node version is ≥ 20, and `npm run build` completed. Check the Passenger log.
- **Missing build:** you must run `npm run build` on the server; `.next` should not be uploaded from your machine.
- **`sharp`/native module errors:** rebuild on the server (`npm rebuild`) so native binaries match the host.
- **Passenger can't find Node modules:** ensure `npm install` ran inside the activated virtualenv shown by cPanel.

If your host can't run a persistent Node process, deploy the app to Vercel and keep DNS/email on cPanel — do **not** try to force this app into static-only hosting.
