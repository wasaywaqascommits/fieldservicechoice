import type { ReactNode } from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import type { Crumb } from '@/lib/seo/jsonld';

/** Standard wrapper for editorial / trust / legal pages. */
export function ContentPage({
  title,
  subtitle,
  crumbs,
  children,
  updated,
}: {
  title: string;
  subtitle?: string;
  crumbs: Crumb[];
  children: ReactNode;
  updated?: string;
}) {
  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <article className="container-page py-8">
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-3xl text-lg text-ink-muted">{subtitle}</p>}
        {updated && <p className="mt-2 text-xs text-ink-muted">Last updated {updated}</p>}
        <div className="mt-8 max-w-3xl prose-fsc">{children}</div>
      </article>
    </>
  );
}
