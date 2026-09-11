import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo/metadata';
import { ContentPage } from '@/components/ui/ContentPage';
import { CTASection } from '@/components/shared/CTASection';

export const metadata: Metadata = buildMetadata({
  title: 'Our Independence Pledge',
  description:
    'How FieldServiceChoice stays independent: no pay-for-ranking, a published Fit Score methodology, dated and verified facts, and honest "who it’s not for" guidance.',
  path: '/independence/',
});

export default function IndependencePage() {
  return (
    <>
      <ContentPage
        title="Our Independence Pledge"
        subtitle="Most field service software “comparison” sites are paid for by the vendors they rank. We aren’t — and here is exactly how we keep it that way."
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Independence Pledge', path: '/independence/' },
        ]}
        updated="2026-09-11"
      >
        <p>
          Choosing field service software is a high-stakes, expensive decision, and the buyer
          deserves guidance that works for <em>them</em> — not for whichever vendor paid the most.
          This page is our public, standing commitment to that principle. If we ever break one of
          these promises, hold us to it.
        </p>

        <h2>1. No pay-for-ranking. Ever.</h2>
        <p>
          Vendor payments never influence our Fit Scores, our rankings, our shortlists, or our
          editorial recommendations. Our scoring engine is built so that it <strong>cannot</strong>{' '}
          read a product’s commercial relationship with us — it only sees the buyer’s requirements
          and a product’s verified capabilities. A vendor cannot buy a higher score, a better
          placement, or a kinder verdict. See our{' '}
          <Link href="/affiliate-disclosure/">affiliate disclosure</Link> for exactly how we make
          money and why it changes nothing about the rankings.
        </p>

        <h2>2. We show our math.</h2>
        <p>
          Star ratings hide their reasoning. Our{' '}
          <Link href="/methodology/">Fit Score methodology</Link> is published and explained: every
          match shows which factors it was scored on, why it matched, and where it falls short. You
          can see the logic, disagree with it, and weigh it yourself. Transparency you can inspect is
          worth more than a rating you have to trust blindly.
        </p>

        <h2>3. We date every fact — and label what we haven’t verified.</h2>
        <p>
          Pricing and features change. So we stamp what we’ve verified with the date we checked it,
          against the vendor’s official sources, and we clearly label anything we{' '}
          <em>haven’t</em> independently confirmed rather than presenting a guess as fact. We would
          rather tell you “we’re not sure yet” than publish a number we can’t stand behind. Read how
          in <Link href="/data-verification/">our data-verification standards</Link>.
        </p>

        <h2>4. We tell you when <em>not</em> to buy.</h2>
        <p>
          A recommendation you can trust has to be willing to say no. Every product profile includes
          who it’s a poor fit for, and our comparisons will tell you when the honest answer is
          “neither — look elsewhere.” We are not here to sell you the most expensive platform; we’re
          here to help you avoid buying the wrong one.
        </p>

        <h2>5. We’re useful even when there’s no deal in it for us.</h2>
        <p>
          We recommend the right fit for your business whether or not we have a commercial
          relationship with that vendor. Where we might earn a referral fee, we disclose it plainly.
          Our value is being right and being honest — not steering you toward a payout.
        </p>

        <h2>How we actually make money</h2>
        <p>
          Transparency cuts both ways, so here it is: we may earn a referral fee when you choose to
          visit or sign up with some providers, and vendors can pay to receive qualified leads from
          buyers who explicitly opt in to be contacted. Neither of those ever changes a Fit Score,
          a ranking, or a recommendation — that separation is the whole point of this pledge. If
          you’re a vendor, our terms are the same for everyone:{' '}
          <Link href="/partner-with-us/">partner with us</Link>.
        </p>

        <h2>Hold us accountable</h2>
        <p>
          If you ever see something on this site that looks bought, biased, or out of date, tell us
          — <Link href="/contact/">get in touch</Link>. Independence isn’t a slogan; it’s a standard
          we expect to be measured against. Learn more about how we work in our{' '}
          <Link href="/editorial-policy/">editorial policy</Link> and{' '}
          <Link href="/about/">about page</Link>.
        </p>
      </ContentPage>
      <CTASection />
    </>
  );
}
