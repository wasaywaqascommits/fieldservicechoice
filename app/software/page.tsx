import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo/metadata';
import { getProducts } from '@/lib/database/content';
import { PageHero } from '@/components/ui/PageHero';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { SoftwareDirectory } from '@/components/software/SoftwareDirectory';
import { AffiliateDisclosure } from '@/components/shared/AffiliateDisclosure';

export const metadata: Metadata = buildMetadata({
  title: 'Field Service Software Directory — Compare 15 Platforms',
  description:
    'Browse and filter field service management software by trade, team size, work type and capabilities. Compare up to four platforms side by side.',
  path: '/software/',
});

export default async function SoftwarePage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const sp = await searchParams;
  const products = getProducts();

  return (
    <>
      <Breadcrumbs crumbs={[{ name: 'Home', path: '/' }, { name: 'Software', path: '/software/' }]} />
      <PageHero
        title="Field Service Software Directory"
        subtitle="Filter by trade, team size, work type and capabilities — or run the Finder for personalized Fit Scores."
      />
      <div className="container-page py-10">
        <SoftwareDirectory products={products} initialQuery={sp.q ?? ''} />
        <div className="mt-10">
          <AffiliateDisclosure />
        </div>
      </div>
    </>
  );
}
