import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ALL_PRODUCT_SLUGS, getProductBySlug } from '@/lib/database/content';
import { buildMetadata } from '@/lib/seo/metadata';
import { PRICING_MODEL_LABELS } from '@/lib/labels';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { PricingBlock } from '@/components/products/PricingBlock';
import { VendorLink } from '@/components/shared/VendorLink';
import { AffiliateDisclosure } from '@/components/shared/AffiliateDisclosure';
import { CTASection } from '@/components/shared/CTASection';

export function generateStaticParams() {
  return ALL_PRODUCT_SLUGS.map((slug) => ({ slug }));
}

/** A pricing page is only indexable once it carries verified plan data (spec §110). */
function isIndexable(slug: string): boolean {
  const p = getProductBySlug(slug);
  if (!p) return false;
  return p.pricing.plans.some((pl) => pl.verificationStatus === 'verified' && pl.monthlyPrice != null);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProductBySlug(slug);
  if (!p) return buildMetadata({ title: 'Not found', description: 'Not found', path: `/pricing/${slug}/`, noindex: true });
  return buildMetadata({
    title: `${p.name} Pricing`,
    description: `${p.name} pricing overview — pricing model, what to expect, and how to get a current quote. We verify and date pricing; we never publish fabricated numbers.`,
    path: `/pricing/${slug}/`,
    noindex: !isIndexable(slug),
    ogType: 'article',
  });
}

export default async function PricingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProductBySlug(slug);
  if (!p) notFound();

  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Software', path: '/software/' },
          { name: p.name, path: `/products/${p.slug}/` },
          { name: 'Pricing', path: `/pricing/${slug}/` },
        ]}
      />
      <div className="container-page py-8">
        <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{p.name} Pricing</h1>
        <p className="mt-3 max-w-3xl text-ink-muted">
          {p.name} uses {PRICING_MODEL_LABELS[p.pricing.model].toLowerCase()} pricing. Below is what
          we currently know. We only publish pricing figures we have independently verified and
          dated — never estimates presented as fact.
        </p>

        <div className="mt-6 max-w-2xl">
          <PricingBlock product={p} />
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <Link href={`/products/${p.slug}/`} className="btn-secondary">Read the full {p.name} review</Link>
          <VendorLink productSlug={p.slug} affiliateSlug={p.commercial.affiliateLinkSlug} sourcePage="pricing">
            Get current pricing from {p.name}
          </VendorLink>
        </div>

        <div className="mt-8 max-w-2xl">
          <AffiliateDisclosure />
        </div>
      </div>

      <CTASection title={`Is ${p.name} worth it for your business?`} buttonLabel="Find My Match" />
    </>
  );
}
