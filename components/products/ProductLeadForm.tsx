'use client';

import { useState } from 'react';
import type { Product } from '@/types';
import type { VendorConsent } from '@/types/finder';
import { EVENTS, getSessionId, readAttribution, track } from '@/lib/analytics/events';

const consentWording = (name: string) =>
  `Send my details to ${name} so they can contact me about pricing and demos.`;

/**
 * Product-scoped lead capture (reuses the /api/lead pipeline). Unlike the Finder
 * form there are no Finder answers — just this one vendor, with explicit consent.
 * Nothing is sent to the vendor unless the consent box is checked.
 */
export function ProductLeadForm({ product }: { product: Product }) {
  const [consented, setConsented] = useState(true);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [started, setStarted] = useState(false);

  function onFirstInteract() {
    if (!started) {
      setStarted(true);
      track(EVENTS.leadFormStart, { source: `product:${product.slug}` });
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const form = new FormData(e.currentTarget);
    const now = new Date().toISOString();

    const consents: VendorConsent[] = [
      {
        productSlug: product.slug,
        consented,
        wordingShown: consentWording(product.name),
        timestamp: now,
      },
    ];

    const payload = {
      name: String(form.get('name') || ''),
      email: String(form.get('email') || ''),
      phone: String(form.get('phone') || ''),
      businessName: String(form.get('businessName') || ''),
      country: 'US',
      matchedProducts: [],
      selectedVendors: consented ? [product.slug] : [],
      consents,
      attribution: { ...readAttribution(), sessionId: getSessionId() },
      sourcePage: `product:${product.slug}`,
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
      track(EVENTS.leadSubmit, { vendors: consented ? 1 : 0 });
      if (consented) track(EVENTS.leadConsentVendor, { product: product.slug });
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  if (status === 'success') {
    return (
      <div className="card border-positive-border bg-positive-bg p-6">
        <h3 className="text-lg font-bold text-positive-fg">You&rsquo;re all set</h3>
        <p className="mt-2 text-sm text-ink-soft">
          {consented
            ? `Thanks — we’ll pass your details to ${product.name} and they’ll reach out about pricing and demos.`
            : 'Thanks — we’ve saved your request. You can revisit your matches any time via the Finder.'}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} onChange={onFirstInteract} className="card p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" required autoComplete="name" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        <Field label="Phone (optional)" name="phone" type="tel" autoComplete="tel" />
        <Field label="Business name (optional)" name="businessName" autoComplete="organization" />
      </div>

      {/* Honeypot — hidden from humans, must stay empty. */}
      <div aria-hidden className="hidden">
        <label>
          Company website
          <input type="text" name="company_website_hp" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="mt-4 flex cursor-pointer items-start gap-3 rounded-lg border border-slate-200 p-3 hover:bg-surface-subtle">
        <input
          type="checkbox"
          className="mt-0.5 h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
          checked={consented}
          onChange={() => {
            onFirstInteract();
            setConsented((v) => !v);
          }}
        />
        <span className="text-sm text-ink-soft">{consentWording(product.name)}</span>
      </label>

      <p className="mt-3 text-xs text-ink-muted">
        By submitting, you agree to our{' '}
        <a href="/privacy/" className="text-brand-700 hover:underline">
          Privacy Policy
        </a>
        .{' '}
        {consented
          ? `${product.name} will receive the details above.`
          : 'No provider is selected, so we’ll only save your request.'}
      </p>

      {status === 'error' && (
        <p className="mt-3 rounded-lg border border-danger-border bg-danger-bg p-3 text-sm text-danger-fg">
          {errorMsg}
        </p>
      )}

      <button type="submit" disabled={status === 'submitting'} className="btn-primary mt-4 w-full sm:w-auto">
        {status === 'submitting' ? 'Sending…' : `Get pricing & demos from ${product.name}`}
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
