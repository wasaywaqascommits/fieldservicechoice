import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo/metadata';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { PartnerForm } from '@/components/forms/PartnerForm';

export const metadata: Metadata = buildMetadata({
  title: 'Partner With FieldServiceChoice',
  description:
    'Reach high-intent field service software buyers through affiliate, referral, qualified-lead, demo and co-marketing partnerships. Partners cannot buy rankings or Fit Scores.',
  path: '/partner-with-us/',
});

export default function PartnerPage() {
  return (
    <>
      <Breadcrumbs crumbs={[{ name: 'Home', path: '/' }, { name: 'Partner With Us', path: '/partner-with-us/' }]} />
      <div className="container-page py-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="prose-fsc max-w-none">
            <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Partner with FieldServiceChoice
            </h1>
            <p className="mt-3 text-lg text-ink-muted">
              Reach field service and home-service business owners at the moment they’re choosing
              software.
            </p>
            <h2>Ways we can work together</h2>
            <ul>
              <li>Affiliate partnerships</li>
              <li>Referral partnerships</li>
              <li>Qualified leads and attended demos</li>
              <li>Revenue share</li>
              <li>Co-marketing</li>
              <li>Vendor data / fact verification</li>
            </ul>
            <div className="rounded-lg border border-brand-200 bg-brand-50 p-4 text-sm text-ink-soft">
              <strong className="text-brand-800">Important:</strong> Partners cannot purchase
              rankings or Fit Scores. Our recommendations stay independent. See our{' '}
              <a href="/methodology/">methodology</a> and{' '}
              <a href="/editorial-policy/">editorial policy</a>.
            </div>
          </div>
          <div>
            <PartnerForm />
          </div>
        </div>
      </div>
    </>
  );
}
