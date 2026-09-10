import Link from 'next/link';
import { getProductBySlug, getProducts } from '@/lib/database/content';
import { rankProducts } from '@/lib/scoring/engine';
import type { FinderAnswers } from '@/types/finder';

/**
 * A REAL, build-time Fit Score example.
 *
 * These numbers are the actual output of the rules-based scoring engine
 * (`lib/scoring/engine.ts`) for the sample buyer below — not a mockup and not
 * hand-picked. The engine reads only buyer answers + editorial/feature data and
 * never touches commercial relationships (data-integrity invariant, spec §9).
 */
const SAMPLE_ANSWERS: FinderAnswers = {
  industry: 'hvac',
  technicians: '26-50',
  businessModel: 'both',
  requiredFeatures: ['dispatching', 'service_agreements', 'pricebook', 'inventory'],
  accounting: 'quickbooks_desktop',
  budget: '1000_2500',
};

const SCENARIO = ['HVAC', '26–50 technicians', 'Both residential & commercial', 'QuickBooks Desktop', '$1,000–2,500/mo'];

export function FitScoreExample() {
  const results = rankProducts(SAMPLE_ANSWERS, getProducts(), { limit: 3 });
  if (results.length === 0) return null;

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
        {SCENARIO.map((s) => (
          <span key={s} className="chip border-slate-300 bg-white px-3 py-1 text-xs text-ink-soft">
            {s}
          </span>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {results.map((r, i) => {
          const product = getProductBySlug(r.productSlug);
          if (!product) return null;
          // Show up to two of the most differentiating reasons (positives first,
          // then any concern) so each card explains its own score.
          const positives = r.reasons.filter((x) => x.sentiment === 'positive');
          const concern = r.reasons.find((x) => x.sentiment === 'concern');
          const shown = [...positives.slice(0, concern ? 1 : 2), ...(concern ? [concern] : [])].slice(0, 2);
          return (
            <div key={r.productSlug} className="card flex flex-col p-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                  Match #{i + 1}
                </span>
                <span className="rounded-md bg-brand-50 px-2 py-0.5 text-sm font-bold text-brand-700">
                  {r.score}
                  <span className="text-xs font-medium text-ink-muted">/100</span>
                </span>
              </div>
              <h3 className="mt-2 font-semibold text-ink">{product.name}</h3>
              <ul className="mt-2 space-y-1.5">
                {shown.map((reason, j) => (
                  <li key={j} className="flex gap-1.5 text-sm text-ink-muted">
                    <span
                      aria-hidden
                      className={`mt-px ${reason.sentiment === 'concern' ? 'text-warning-fg' : 'text-brand-600'}`}
                    >
                      {reason.sentiment === 'concern' ? '!' : '✓'}
                    </span>
                    <span>{reason.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <p className="mt-5 text-center text-sm text-ink-muted">
        This is one example — your matches are scored against{' '}
        <span className="font-medium text-ink-soft">your own</span> trade, team size, integrations and
        budget.{' '}
        <Link href="/find-software/" className="font-medium text-brand-700 hover:underline">
          Get your personalized matches →
        </Link>
      </p>
    </div>
  );
}
