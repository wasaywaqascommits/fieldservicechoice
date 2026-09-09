import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ALL_GUIDE_SLUGS, getGuideBySlug } from '@/lib/database/content';
import { buildMetadata } from '@/lib/seo/metadata';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CTASection } from '@/components/shared/CTASection';

export function generateStaticParams() {
  return ALL_GUIDE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuideBySlug(slug);
  if (!g) return buildMetadata({ title: 'Not found', description: 'Not found', path: `/guides/${slug}/`, noindex: true });
  return buildMetadata({
    title: g.title,
    description: `${g.intro.slice(0, 155)}`,
    path: `/guides/${g.slug}/`,
    ogType: 'article',
  });
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = getGuideBySlug(slug);
  if (!g) notFound();

  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Guides', path: `/guides/${g.slug}/` },
          { name: g.title, path: `/guides/${g.slug}/` },
        ]}
      />
      <article className="container-page py-8">
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-ink sm:text-4xl">{g.title}</h1>
        <p className="mt-2 text-xs text-ink-muted">
          {g.updatedAt && <>Updated {g.updatedAt}</>}
        </p>
        <p className="mt-4 max-w-3xl text-lg text-ink-muted">{g.intro}</p>

        <div className="mt-8 max-w-3xl prose-fsc">
          {g.sections.map((s) => (
            <section key={s.heading}>
              <h2>{s.heading}</h2>
              {s.body.map((b, i) => (
                <p key={i}>{b}</p>
              ))}
            </section>
          ))}
        </div>
      </article>

      <CTASection />
    </>
  );
}
