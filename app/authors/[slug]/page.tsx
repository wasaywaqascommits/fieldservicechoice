import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ALL_AUTHOR_SLUGS, getAuthorBySlug, getBestPages, getGuides } from '@/lib/database/content';
import { buildMetadata } from '@/lib/seo/metadata';
import { jsonLdScript, personJsonLd } from '@/lib/seo/jsonld';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { AuthorAvatar } from '@/components/shared/AuthorByline';
import { CTASection } from '@/components/shared/CTASection';

export function generateStaticParams() {
  return ALL_AUTHOR_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) return buildMetadata({ title: 'Author not found', description: 'Not found', path: `/authors/${slug}/`, noindex: true });
  return buildMetadata({
    title: `${author.name}, ${author.role}`,
    description: author.shortBio,
    path: `/authors/${author.slug}/`,
  });
}

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) notFound();

  const guides = getGuides();
  const bestPages = getBestPages();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(personJsonLd(author))} />
      <Breadcrumbs
        crumbs={[
          { name: 'Home', path: '/' },
          { name: author.name, path: `/authors/${author.slug}/` },
        ]}
      />
      <div className="container-page py-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <AuthorAvatar author={author} size={88} />
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{author.name}</h1>
            <p className="mt-1 text-lg text-ink-muted">{author.role}</p>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
              {author.location && <span className="text-ink-muted">{author.location}</span>}
              {author.links.linkedin && (
                <a
                  href={author.links.linkedin}
                  target="_blank"
                  rel="me noopener nofollow"
                  className="font-medium text-brand-700 hover:underline"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 max-w-3xl space-y-4 text-ink-soft">
          {author.bio.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {(guides.length > 0 || bestPages.length > 0) && (
          <div className="mt-12">
            <h2 className="mb-4 text-xl font-bold text-ink">Articles by {author.name}</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {guides.map((g) => (
                <Link key={g.slug} href={`/guides/${g.slug}/`} className="card p-4 hover:border-brand-300">
                  <span className="text-xs font-medium uppercase tracking-wide text-ink-muted">Guide</span>
                  <p className="mt-1 font-semibold text-ink">{g.title}</p>
                </Link>
              ))}
              {bestPages.map((b) => (
                <Link key={b.slug} href={`/best/${b.slug}/`} className="card p-4 hover:border-brand-300">
                  <span className="text-xs font-medium uppercase tracking-wide text-ink-muted">Buying guide</span>
                  <p className="mt-1 font-semibold text-ink">{b.h1}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <CTASection />
    </>
  );
}
