import Link from 'next/link';
import { breadcrumbJsonLd, jsonLdScript, type Crumb } from '@/lib/seo/jsonld';

/**
 * Visible breadcrumbs + BreadcrumbList structured data (spec §53).
 * The last crumb is the current page (not a link).
 */
export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-page pt-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-muted">
        {crumbs.map((c, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-1.5">
              {isLast ? (
                <span className="font-medium text-ink-soft" aria-current="page">
                  {c.name}
                </span>
              ) : (
                <>
                  <Link href={c.path} className="hover:text-brand-700">
                    {c.name}
                  </Link>
                  <span aria-hidden className="text-slate-300">
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd(crumbs))}
      />
    </nav>
  );
}
