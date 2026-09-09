import { NextResponse } from 'next/server';
import { analyticsEventSchema } from '@/lib/validation/schemas';
import { recordEvent } from '@/lib/database/mutations';
import { clientKey, rateLimit } from '@/lib/security/rateLimit';

export const runtime = 'nodejs';

/** First-party attribution/event sink (spec §57, §58). */
export async function POST(req: Request) {
  const limit = rateLimit(clientKey(req, 'events'), 120);
  if (!limit.ok) return new NextResponse(null, { status: 204 });

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return new NextResponse(null, { status: 204 });
  }

  const parsed = analyticsEventSchema.safeParse(body);
  if (!parsed.success) return new NextResponse(null, { status: 204 });

  try {
    await recordEvent({
      event: parsed.data.event,
      properties: parsed.data.properties,
      sessionId: parsed.data.sessionId,
      path: parsed.data.path,
    });
  } catch {
    /* best-effort */
  }
  return new NextResponse(null, { status: 204 });
}
