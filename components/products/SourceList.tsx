import type { Source, SourceType } from '@/types';
import { VerificationBadge } from './VerificationBadge';

const SOURCE_TYPE_LABELS: Record<SourceType, string> = {
  official_pricing: 'Official pricing',
  official_documentation: 'Official documentation',
  official_integrations: 'Official integrations',
  vendor_confirmation: 'Vendor confirmation',
  hands_on_testing: 'Hands-on testing',
  independent_research: 'Independent research',
};

/** Sources & verification block (spec §36, §103). */
export function SourceList({ sources }: { sources: Source[] }) {
  if (sources.length === 0) {
    return <p className="text-sm text-ink-muted">No sources recorded yet.</p>;
  }
  return (
    <ul className="space-y-3">
      {sources.map((s) => (
        <li key={s.url} className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-slate-200 p-3">
          <div className="min-w-0">
            <a
              href={s.url}
              target="_blank"
              rel="nofollow noopener"
              className="text-sm font-medium text-brand-700 hover:underline"
            >
              {s.title}
            </a>
            <p className="text-xs text-ink-muted">
              {SOURCE_TYPE_LABELS[s.type]}
              {s.accessedAt ? ` · accessed ${s.accessedAt}` : ''}
            </p>
          </div>
          <VerificationBadge status={s.verificationStatus} />
        </li>
      ))}
    </ul>
  );
}
