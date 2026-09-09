import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo/metadata';
import { ContentPage } from '@/components/ui/ContentPage';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description: 'How FieldServiceChoice collects, uses and shares information, including lead data and vendor consent.',
  path: '/privacy/',
});

export default function PrivacyPage() {
  return (
    <ContentPage
      title="Privacy Policy"
      crumbs={[{ name: 'Home', path: '/' }, { name: 'Privacy', path: '/privacy/' }]}
      updated="2026-09-10"
    >
      <div className="rounded-lg border border-warning-border bg-warning-bg p-4 text-sm text-warning-fg">
        This is a template privacy policy provided for development. It is not legal advice — have it
        reviewed by qualified counsel before launch.
      </div>
      <h2>Information we collect</h2>
      <p>
        We collect information you provide directly (for example, when you use the Finder or submit a
        form): your name, email, phone, business details, your Finder answers, and which vendors you
        choose to share your details with. We also collect limited analytics and attribution data
        (such as pages viewed and referral source).
      </p>
      <h2>How we use information</h2>
      <p>
        We use your information to provide personalized recommendations, to save your results, and —
        only with your explicit, per-vendor consent — to introduce you to the software providers you
        select. We do not sell your information, and we never share it with vendors you did not
        select.
      </p>
      <h2>Vendor consent</h2>
      <p>
        We share your details with a vendor only when you explicitly check that vendor’s box. We keep
        a record of the consent wording shown, the vendors selected, and the timestamp.
      </p>
      <h2>Your choices</h2>
      <p>
        You can request access to, correction of, or deletion of your data, and you can opt out of
        marketing communications, by contacting us. We support data export and deletion requests.
      </p>
      <h2>Contact</h2>
      <p>Questions about privacy? Email privacy@fieldservicechoice.com.</p>
    </ContentPage>
  );
}
