'use client';

import { useState } from 'react';
import type { Product } from '@/types';
import type { FinderAnswers, VendorConsent } from '@/types/finder';
import { EVENTS, getSessionId, readAttribution, track } from '@/lib/analytics/events';
import { ProductLogo } from '@/components/products/ProductLogo';

interface MatchedProduct {
  product: Product;
  score: number;
}

const CONSENT_WORDING = (name: string) =>
  `Send my information to ${name} so they can contact me about their software.`;

/**
 * Lead capture with explicit, per-vendor consent (spec §12, §13, §14, §64).
 * Nothing is sent to any vendor unless the buyer checks that vendor's box.
 */
export function LeadForm({
  matches,
  answers,
  sourcePage,
}: {
  matches: MatchedProduct[];
  answers: FinderAnswers;
  sourcePage: string;
}) {
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [started, setStarted] = useState(false);

  function toggle(slug: string) {
    setSelected((prev) => ({ ...prev, [slug]: !prev[slug] }));
  }

  function onFirstInteract() {
    if (!started) {
      setStarted(true);
      track(EVENTS.leadFormStart, { source: sourcePage });
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const form = new FormData(e.currentTarget);
    const now = new Date().toISOString();

    const selectedVendors = matches.filter((m) => selected[m.product.slug]).map((m) => m.product.slug);
    const consents: VendorConsent[] = matches.map((m) => ({
      productSlug: m.product.slug,
      consented: Boolean(selected[m.product.slug]),
      wordingShown: CONSENT_WORDING(m.product.name),
      timestamp: now,
    }));

    const payload = {
      name: String(form.get('name') || ''),
      email: String(form.get('email') || ''),
      phone: String(form.get('phone') || ''),
      businessName: String(form.get('businessName') || ''),
      website: String(form.get('website') || ''),
      state: String(form.get('state') || ''),
      country: 'US',
      answers,
      matchedProducts: matches.map((m) => ({ slug: m.product.slug, score: m.score })),
      selectedVendors,
      consents,
      attribution: { ...readAttribution(), sessionId: getSessionId() },
      sourcePage,
      company_website_hp: String(form.get('company_website_hp') || ''),
    };

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }
      track(EVENTS.leadSubmit, { vendors: selectedVendors.length });
      selectedVendors.forEach((slug) => track(EVENTS.leadConsentVendor, { product: slug }));
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  if (status === 'success') {
    return (
      <div className="card border-positive-border bg-positive-bg p-6 text-center">
        <h3 className="text-lg font-bold text-positive-fg">You’re all set</h3>
        <p className="mt-2 text-sm text-ink-soft">
          We’ve saved your results. If you selected any providers, they’ll be in touch. You can keep
          exploring your matches above at any time.
        </p>
      </div>
    );
  }

  const anySelected = matches.some((m) => selected[m.product.slug]);

  return (
    <form onSubmit={handleSubmit} onChange={onFirstInteract} className="card p-6">
      <h3 className="text-lg font-bold text-ink">Save your results & get pricing or demos</h3>
      <p className="mt-1 text-sm text-ink-muted">
        Optional. We’ll only share your details with the providers you explicitly select below, 
        never with everyone automatically.
      </p>

      <fieldset className="mt-5">
        <legend className="text-sm font-semibold text-ink">Which providers can contact you?</legend>
        <div className="mt-2 space-y-2">
          {matches.map((m) => (
            <label
              key={m.product.slug}
              className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 p-3 hover:bg-surface-subtle"
            >
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                checked={Boolean(selected[m.product.slug])}
                onChange={() => toggle(m.product.slug)}
              />
              <ProductLogo product={m.product} size="sm" />
              <span className="text-sm font-medium text-ink-soft">
                Send my information to {m.product.name}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" required autoComplete="name" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        <Field label="Phone (optional)" name="phone" type="tel" autoComplete="tel" />
        <Field label="Business name (optional)" name="businessName" autoComplete="organization" />
        <Field label="Website (optional)" name="website" autoComplete="url" />
        <Field label="State (optional)" name="state" autoComplete="address-level1" />
      </div>

      {/* Honeypot, hidden from humans, must stay empty. */}
      <div aria-hidden className="hidden">
        <label>
          Company website
          <input type="text" name="company_website_hp" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <p className="mt-4 text-xs text-ink-muted">
        By submitting, you agree to our{' '}
        <a href="/privacy/" className="text-brand-700 hover:underline">
          Privacy Policy
        </a>
        . {anySelected ? 'Selected providers will receive the details above.' : 'No providers are selected, so we’ll only save your results.'}
      </p>

      {status === 'error' && (
        <p className="mt-3 rounded-lg border border-danger-border bg-danger-bg p-3 text-sm text-danger-fg">
          {errorMsg}
        </p>
      )}

      <button type="submit" disabled={status === 'submitting'} className="btn-primary mt-4 w-full sm:w-auto">
        {status === 'submitting' ? 'Saving…' : 'Save my results'}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block font-medium text-ink-soft">
        {label}
        {required && <span className="text-danger-fg"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-ink focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
      />
    </label>
  );
}
