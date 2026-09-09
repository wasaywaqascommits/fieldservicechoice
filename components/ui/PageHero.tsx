import type { ReactNode } from 'react';

/** Simple, consistent hero for content and template pages. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <div className="border-b border-slate-200 bg-white">
      <div className="container-page py-10 sm:py-12">
        {eyebrow && (
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-600">{eyebrow}</p>
        )}
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-lg text-ink-muted">{subtitle}</p>}
        {children}
      </div>
    </div>
  );
}
