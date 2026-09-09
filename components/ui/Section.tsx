import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  /** Alternate background for zebra striping between sections. */
  tone?: 'default' | 'subtle' | 'sky';
}

const TONE: Record<NonNullable<SectionProps['tone']>, string> = {
  default: 'bg-white',
  subtle: 'bg-surface-subtle',
  sky: 'bg-surface-sky',
};

export function Section({ children, className = '', tone = 'default' }: SectionProps) {
  return (
    <section className={`${TONE[tone]} ${className}`}>
      <div className="container-page py-12 sm:py-16">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-8 ${center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}>
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-600">{eyebrow}</p>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{title}</h2>
      {subtitle && <p className="mt-3 text-ink-muted">{subtitle}</p>}
    </div>
  );
}
