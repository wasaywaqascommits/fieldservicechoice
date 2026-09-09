/**
 * Fit Score badge (spec §6, §11). Color communicates strength of match:
 * green = strong, brand = good, amber = moderate, muted = weak.
 */
function toneFor(score: number) {
  if (score >= 85) return 'bg-positive-bg text-positive-fg border-positive-border';
  if (score >= 70) return 'bg-brand-50 text-brand-700 border-brand-200';
  if (score >= 50) return 'bg-warning-bg text-warning-fg border-warning-border';
  return 'bg-slate-100 text-ink-muted border-slate-200';
}

export function MatchScore({ score, size = 'md' }: { score: number; size?: 'sm' | 'md' | 'lg' }) {
  const pad = size === 'lg' ? 'px-4 py-2 text-2xl' : size === 'sm' ? 'px-2 py-0.5 text-sm' : 'px-3 py-1 text-lg';
  return (
    <span
      className={`inline-flex items-baseline gap-1 rounded-full border font-bold ${pad} ${toneFor(score)}`}
      aria-label={`${score} percent match`}
    >
      {score}
      <span className="text-[0.65em] font-semibold">% Match</span>
    </span>
  );
}
