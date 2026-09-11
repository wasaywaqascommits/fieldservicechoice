import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo/metadata';
import { ContentPage } from '@/components/ui/ContentPage';
import { CTASection } from '@/components/shared/CTASection';

export const metadata: Metadata = buildMetadata({
  title: 'About FieldServiceChoice',
  description:
    'FieldServiceChoice is an independent, specialist platform for finding, comparing and choosing Field Service Management software.',
  path: '/about/',
});

export default function AboutPage() {
  return (
    <>
      <ContentPage
        title="About FieldServiceChoice"
        subtitle="The specialist place to figure out which field service software actually fits your business."
        crumbs={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about/' }]}
      >
        <p>
          FieldServiceChoice is an independent software discovery, comparison and recommendation
          platform focused specifically on Field Service Management software. We help field-service
          and home-service business owners answer one question:{' '}
          <em>which field service software is actually right for my business?</em>
        </p>
        <h2>Why specialization matters</h2>
        <p>
          General software directories treat every category the same. We don’t. An HVAC company, a
          roofing contractor and a pest-control route business have genuinely different software
          needs, and we evaluate products on those terms, by trade, team size, workflows,
          integrations and budget.
        </p>
        <h2>How we’re different</h2>
        <ul>
          <li>A transparent, personalized Fit Score instead of generic star ratings.</li>
          <li>Trade-specific requirements, not word-swapped templates.</li>
          <li>Verified, dated facts, and honesty about what we haven’t verified yet.</li>
          <li>Clear monetization disclosures, with no pay-for-ranking.</li>
        </ul>
        <h2>Our promise</h2>
        <p>
          We build trust through methodology and usefulness, not fabricated social proof. We’re a
          new platform, and we’d rather earn your trust with transparency than inflated claims.
        </p>
      </ContentPage>
      <CTASection />
    </>
  );
}
