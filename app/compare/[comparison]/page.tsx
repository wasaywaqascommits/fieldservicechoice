import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ALL_COMPARISON_SLUGS, getComparisonBySlug, getDefaultAuthor, getProductBySlug } from '@/lib/database/content';
import { buildMetadata } from '@/lib/seo/metadata';
import { faqPageJsonLd, jsonLdScript } from '@/lib/seo/jsonld';
import { comparisonFaqs } from '@/lib/comparisons/faqs';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { FaqList } from '@/components/best/FaqList';
import { ProductLeadForm } from '@/components/products/ProductLeadForm';
import { AuthorByline } from '@/components/shared/AuthorByline';
import { ComparisonTable } from '@/components/comparison/ComparisonTable';
import { ProductLogo } from '@/components/products/ProductLogo';
import { VendorLink } from '@/components/shared/VendorLink';
import { AffiliateDisclosure } from '@/components/shared/AffiliateDisclosure';
import { CTASection } from '@/components/shared/CTASection';

export function generateStaticParams() {
  return ALL_COMPARISON_SLUGS.map((comparison) => ({ comparison }));
}

export async function generateMetadata({ params }: { params: Promise<{ comparison: string }> }): Promise<Metadata> {
  const { comparison } = await params;
  const c = getComparisonBySlug(comparison);
  if (!c) return buildMetadata({ title: 'Comparison not found', description: 'Not found', path: `/compare/${comparison}/`, noindex: true });
  const a = getProductBySlug(c.productA);
  const b = getProductBySlug(c.productB);
  return buildMetadata({
    title: `${a?.name} vs ${b?.name}: Which Is Better for Your Business?`,
    description: `${a?.name} vs ${b?.name}, pricing, features, implementation and best-fit differences to help you choose the right field service software.`,
    path: `/compare/${c.slug}/`,
    ogType: 'article',
  });
}

function ChoiceCard({ title, items, tone }: { title: string; items: string[]; tone: 'a' | 'b' | 'neither' }) {
  const cls = tone === 'a' ? 'border-brand-200 bg-brand-50' : tone === 'b' ? 'border-positive-border bg-positive-bg' : 'border-slate-200 bg-surface-subtle';
  return (
    <div className={`rounded-xl border p-5 ${cls}`}>
      <h3 className="text-sm font-bold text-ink">{title}</h3>
      <ul className="mt-2 space-y-1.5 text-sm text-ink-soft">
        {items.map((i) => (
          <li key={i} className="flex gap-2"><span aria-hidden>•</span>{i}</li>
        ))}
      </ul>
    </div>
  );
}

export default async function ComparePage({ params }: { params: Promise<{ comparison: string }> }) {
  const { comparison } = await params;
  const c = getComparisonBySlug(comparison);
  if (!c) notFound();
  const a = getProductBySlug(c.productA);
  const b = getProductBySlug(c.productB);
  if (!a || !b) notFound();

  const faqs = comparisonFaqs(a, b, c);
  const author = getDefaultAuthor();

  return (
    <>
      {faqs.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(faqPageJsonLd(faqs))} />
      )}
      <Breadcrumbs
        crumbs={[
          { name: 'Home', path: '/' },
          { name: `${a.name} vs ${b.name}`, path: `/compare/${c.slug}/` },
        ]}
      />

      <div className="container-page py-8">
        <div className="mb-6 flex items-center gap-4">
          <ProductLogo product={a} />
          <span className="text-lg font-bold text-ink-muted">vs</span>
          <ProductLogo product={b} />
        </div>
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {a.name} vs {b.name}: Which Is Better for Your Service Business?
        </h1>
        <div className="mt-3">
          <AuthorByline author={author} prefix="By" />
        </div>
        <p className="mt-3 max-w-3xl text-ink-muted">{c.intro}</p>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <ChoiceCard title={`Choose ${a.name} if…`} items={c.chooseA} tone="a" />
          <ChoiceCard title={`Choose ${b.name} if…`} items={c.chooseB} tone="b" />
          <ChoiceCard title="Choose neither if…" items={c.chooseNeither} tone="neither" />
        </div>

        <div className="mt-10">
          <h2 className="mb-3 text-xl font-bold text-ink">Side-by-side comparison</h2>
          <ComparisonTable products={[a, b]} />
        </div>

        <div className="mt-10 space-y-8">
          {c.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="mb-2 text-xl font-bold text-ink">{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="mb-3 text-ink-soft">{p}</p>
              ))}
            </section>
          ))}
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          <div className="card p-5">
            <div className="flex items-center gap-3">
              <ProductLogo product={a} size="sm" />
              <p className="font-semibold text-ink">{a.name}</p>
            </div>
            <div className="mt-4 flex gap-2">
              <Link href={`/products/${a.slug}/`} className="btn-secondary">Read review</Link>
              <VendorLink productSlug={a.slug} affiliateSlug={a.commercial.affiliateLinkSlug} sourcePage="compare">Visit</VendorLink>
            </div>
          </div>
          <div className="card p-5">
            <div className="flex items-center gap-3">
              <ProductLogo product={b} size="sm" />
              <p className="font-semibold text-ink">{b.name}</p>
            </div>
            <div className="mt-4 flex gap-2">
              <Link href={`/products/${b.slug}/`} className="btn-secondary">Read review</Link>
              <VendorLink productSlug={b.slug} affiliateSlug={b.commercial.affiliateLinkSlug} sourcePage="compare">Visit</VendorLink>
            </div>
          </div>
        </div>

        {faqs.length > 0 && (
          <div className="mt-12 max-w-3xl">
            <h2 className="mb-4 text-xl font-bold text-ink">{a.name} vs {b.name}: frequently asked questions</h2>
            <FaqList faqs={faqs} />
          </div>
        )}

        {/* Get pricing & demos for both (lead capture) */}
        <div className="mt-12 max-w-3xl">
          <h2 className="mb-1 text-xl font-bold text-ink">Get pricing &amp; demos for {a.name} and {b.name}</h2>
          <p className="mb-3 text-sm text-ink-muted">
            Still deciding? Have both vendors send pricing and set up a demo so you can compare them
            directly. Pick one or both below, nothing is shared until you opt in.
          </p>
          <ProductLeadForm products={[a, b]} sourcePage={`compare:${c.slug}`} />
        </div>

        <div className="mt-8">
          <AffiliateDisclosure />
        </div>
      </div>

      <CTASection title="Not sure which fits your business?" buttonLabel="Get My Personalized Match" />
    </>
  );
}
