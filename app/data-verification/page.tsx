import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo/metadata';
import { ContentPage } from '@/components/ui/ContentPage';

export const metadata: Metadata = buildMetadata({
  title: 'Data Verification',
  description:
    'What our verification labels mean, Pricing Verified, Features Verified, Integrations Verified, Vendor Confirmed and Editorially Reviewed, and how we date every fact.',
  path: '/data-verification/',
});

export default function DataVerificationPage() {
  return (
    <ContentPage
      title="Data Verification"
      subtitle="What our verification labels mean and how we keep facts current."
      crumbs={[{ name: 'Home', path: '/' }, { name: 'Data Verification', path: '/data-verification/' }]}
    >
      <p>
        We label the key facts on every product with a verification status and a date so you can see
        exactly how much to trust them. We never present unverified information as verified, and we
        never publish fabricated pricing, ratings or review counts.
      </p>
      <h2>What the labels mean</h2>
      <ul>
        <li><strong>Pricing Verified:</strong> we confirmed the pricing against an official source on the date shown.</li>
        <li><strong>Features Verified:</strong> feature availability confirmed against official documentation.</li>
        <li><strong>Integrations Verified:</strong> integration availability confirmed against the vendor’s integration directory.</li>
        <li><strong>Vendor Confirmed:</strong> the vendor confirmed a specific fact directly.</li>
        <li><strong>Editorially Reviewed:</strong> our editorial team reviewed the analysis and positioning.</li>
        <li><strong>Needs Verification:</strong> development or preliminary data we have not yet independently confirmed.</li>
        <li><strong>Not Publicly Disclosed:</strong> the vendor does not publish this information.</li>
      </ul>
      <h2>Freshness</h2>
      <p>
        Verified facts carry dates. Internally, pricing older than 90 days and integrations older
        than 180 days are flagged for re-verification. Where data is quote-based or undisclosed, we
        say so and point you to the vendor.
      </p>
    </ContentPage>
  );
}
