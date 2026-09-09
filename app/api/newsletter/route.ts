import { NextResponse } from 'next/server';
import { newsletterSchema } from '@/lib/validation/schemas';
import { createNewsletterSignup } from '@/lib/database/mutations';
import { clientKey, rateLimit } from '@/lib/security/rateLimit';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const limit = rateLimit(clientKey(req, 'newsletter'), 10);
  if (!limit.ok) return NextResponse.json({ error: 'Too many requests.' }, { status: 429 });

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  if (typeof (body as Record<string, unknown>)?.company_website_hp === 'string' && (body as Record<string, string>).company_website_hp.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const parsed = newsletterSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Enter a valid email.' }, { status: 400 });
  }

  try {
    await createNewsletterSignup(parsed.data);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Failed to subscribe.' }, { status: 500 });
  }
}
