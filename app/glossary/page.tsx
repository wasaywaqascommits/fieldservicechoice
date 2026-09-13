import type { Metadata } from 'next';
import Link from 'next/link';
import { GLOSSARY } from '@/data/glossary';
import { getDefaultAuthor } from '@/lib/database/content';
import { buildMetadata, absoluteUrl } from '@/lib/seo/metadata';
import { jsonLdScript } from '@/lib/seo/jsonld';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { AuthorByline } from '@/components/shared/AuthorByline';
import { CTASection } from '@/components/shared/CTASection';

export const metadata: Metadata = buildMetadata({
  title: 'Field Service Software Glossary',
  description:
    'Plain-language definitions of the field service software terms that matter when you are choosing a platform, from dispatching and flat-rate pricebooks to job costing and QuickBooks sync.',
  path: '/glossary/',
});

const terms = [...GLOSSARY].sort((a, b) => a.term.localeCompare(b.term));
const letters = Array.from(new Set(terms.map((t) => t.term[0].toUpperCase()))).sort();

const definedTermSet = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: 'Field Service Software Glossary',
  url: absoluteUrl('/glossary/'),
  hasDefinedTerm: terms.map((t) => ({
    '@type': 'DefinedTerm',
    name: t.term,
    description: t.definition,
    url: absoluteUrl(`/glossary/#${t.slug}`),
  })),
};

export default function GlossaryPage() {
  const author = getDefaultAuthor();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(definedTermSet)} />
      <Breadcrumbs
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Glossary', path: '/glossary/' },
        ]}
      />
      <div className="container-page py-8">
        <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Field Service Software Glossary</h1>
        <div className="mt-3">
          <AuthorByline author={author} date="2026-09-13" dateLabel="Updated" prefix="By" />
        </div>
        <p className="mt-4 max-w-3xl text-lg text-ink-muted">
          The plain-language meaning of the terms you will run into while choosing field service software. Each
          definition links to the guide that covers it in more depth, so you can go from a quick answer to the full
          picture in one click.
        </p>

        {/* A-Z index */}
        <nav aria-label="Jump to letter" className="mt-6 flex flex-wrap gap-1.5">
          {letters.map((l) => (
            <a
              key={l}
              href={`#letter-${l}`}
              className="grid h-8 w-8 place-items-center rounded-md border border-slate-200 bg-white text-sm font-semibold text-brand-700 hover:bg-brand-50"
            >
              {l}
            </a>
          ))}
        </nav>

        <div className="mt-8 max-w-3xl">
          {letters.map((letter) => (
            <section key={letter} id={`letter-${letter}`} className="scroll-mt-24">
              <h2 className="mt-8 border-b border-slate-200 pb-1 text-sm font-bold uppercase tracking-wide text-ink-muted">
                {letter}
              </h2>
              <dl className="mt-4 space-y-6">
                {terms
                  .filter((t) => t.term[0].toUpperCase() === letter)
                  .map((t) => (
                    <div key={t.slug} id={t.slug} className="scroll-mt-24">
                      <dt className="text-lg font-bold text-ink">{t.term}</dt>
                      <dd className="mt-1 text-ink-soft">{t.definition}</dd>
                      {t.related && (
                        <dd className="mt-2">
                          <Link href={t.related.href} className="text-sm font-medium text-brand-700 hover:underline">
                            {t.related.label} →
                          </Link>
                        </dd>
                      )}
                    </div>
                  ))}
              </dl>
            </section>
          ))}
        </div>
      </div>

      <CTASection title="Ready to find your best-fit software?" />
    </>
  );
}
