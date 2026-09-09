import { NextResponse } from 'next/server';
import { finderAnswersSchema } from '@/lib/validation/schemas';
import { getProducts } from '@/lib/database/content';
import { rankProducts } from '@/lib/scoring/engine';
import type { FinderAnswers } from '@/types/finder';

export const runtime = 'nodejs';

/**
 * Server-side Finder scoring endpoint (spec §78). The client computes results
 * locally for instant UX; this endpoint provides the same scoring for
 * server-side use, integrations and testing, using the exact same engine.
 */
export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const parsed = finderAnswersSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? 'Validation failed.' }, { status: 400 });
  }

  const results = rankProducts(parsed.data as FinderAnswers, getProducts(), { limit: 5 });
  return NextResponse.json({
    ok: true,
    results: results.map((r) => ({
      slug: r.productSlug,
      score: r.score,
      excluded: r.excluded,
      reasons: r.reasons,
      flags: r.flags,
    })),
  });
}
