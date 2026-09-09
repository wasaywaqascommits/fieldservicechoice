/**
 * Commercial disclosure shown close to recommendations with affiliate links
 * (spec §63 — not hidden only in the footer).
 */
export function AffiliateDisclosure({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <p className="text-xs text-ink-muted">
        We may earn a referral fee from some providers. This never affects our Fit Scores or
        recommendations.
      </p>
    );
  }
  return (
    <div className="rounded-lg border border-slate-200 bg-surface-subtle p-4 text-sm text-ink-muted">
      <strong className="font-semibold text-ink-soft">Commercial disclosure.</strong>{' '}
      FieldServiceChoice may earn a referral fee if you visit or purchase from certain providers.
      These commercial relationships do not affect our Fit Scores or editorial recommendations.
    </div>
  );
}
