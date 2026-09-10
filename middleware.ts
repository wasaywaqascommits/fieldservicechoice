import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Keep every non-production host out of search indexes (spec §47, §110).
 *
 * The app is served from several hosts: the real domain
 * (fieldservicechoice.com), the production Vercel alias
 * (fieldservicechoice.vercel.app) and per-deployment preview URLs
 * (fieldservicechoice-*.vercel.app). Only the real domain should be indexable.
 *
 * We add `X-Robots-Tag: noindex, nofollow` to responses on any host that is not
 * the canonical domain. We deliberately keep those hosts crawlable in
 * robots.txt so crawlers can SEE the noindex header and drop the pages — the
 * canonical tags then consolidate everything onto the real domain.
 */
const CANONICAL_HOST = (process.env.NEXT_PUBLIC_SITE_URL || 'https://fieldservicechoice.com')
  .replace(/^https?:\/\//, '')
  .replace(/\/.*$/, '')
  .toLowerCase();

export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const host = (req.headers.get('host') || '').toLowerCase().split(':')[0];
  const isCanonical = host === CANONICAL_HOST || host === `www.${CANONICAL_HOST}`;
  if (!isCanonical) {
    res.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }
  return res;
}

export const config = {
  // Run on page routes; skip Next internals and static asset files.
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.\\w+$).*)'],
};
