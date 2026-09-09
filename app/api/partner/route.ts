import { NextResponse } from 'next/server';
import { partnerSchema } from '@/lib/validation/schemas';
import { createPartnerInquiry } from '@/lib/database/mutations';
import { clientKey, rateLimit } from '@/lib/security/rateLimit';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const limit = rateLimit(clientKey(req, 'partner'), 6);
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

  const parsed = partnerSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? 'Validation failed.' }, { status: 400 });
  }

  try {
    const result = await createPartnerInquiry(parsed.data);
    return NextResponse.json({ ok: true, id: result.id });
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : 'Failed to submit.' }, { status: 500 });
  }
}
