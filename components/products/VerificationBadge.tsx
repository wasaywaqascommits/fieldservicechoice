import type { VerificationStatus } from '@/types';
import { VERIFICATION_LABELS } from '@/lib/labels';

const TONE: Record<VerificationStatus, string> = {
  verified: 'bg-positive-bg text-positive-fg border-positive-border',
  vendor_confirmed: 'bg-brand-50 text-brand-700 border-brand-200',
  needs_verification: 'bg-warning-bg text-warning-fg border-warning-border',
  not_disclosed: 'bg-slate-100 text-ink-muted border-slate-200',
};

export function VerificationBadge({ status }: { status: VerificationStatus }) {
  return <span className={`chip ${TONE[status]}`}>{VERIFICATION_LABELS[status]}</span>;
}

/** "Verified: date" / "Not yet verified" line (spec §30, §103). */
export function LastVerified({ date, label = 'Verified' }: { date: string | null; label?: string }) {
  if (!date) {
    return <span className="text-xs text-ink-muted">Not yet verified</span>;
  }
  return (
    <span className="text-xs text-ink-muted">
      {label}: <time dateTime={date}>{date}</time>
    </span>
  );
}
