'use client';

import { useState } from 'react';
import type { Product } from '@/types';
import type { VendorConsent } from '@/types/finder';
import { EVENTS, getSessionId, readAttribution, track } from '@/lib/analytics/events';

const consentWording = (name: string) =>
  `Send my details to ${name} so they can contact me about pricing and demos.`;

function joinNames(names: string[]): string {
  if (names.length <= 1) return names[0] ?? '';
  return `${names.slice(0, -1).join(', ')} or ${names[names.length - 1]}`;
}

/**
 * Vendor lead capture (reuses the /api/lead pipeline). Works for one product
 * (product page) or several (comparison page). There are no Finder answers —
 * just explicit, per-vendor consent. Nothing is sent to a vendor unless its box
 * is checked.
 */
export function ProductLeadForm({
  products,
  sourcePage,
}: {
  products: Product[];
  sourcePage: string;
}) {
  const [selected, setSelected] = useState<Record<string, boolean>>(
    Object.fromEntries(products.map((p) => [p.slug, true])),
  );
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [started, setStarted] = useState(false);

  function onFirstInteract() {
    if (!started) {
      setStarted(true);
      track(EVENTS.leadFormStart, { source: sourcePage });
    }
  }

  function toggle(slug: string) {
    onFirstInteract();
    setSelected((prev) => ({ ...prev, [slug]: !prev[slug] }));
  }

  const selectedNames = products.filter((p) => selected[p.slug]).map((p) => p.name);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const form = new FormData(e.currentTarget);
    const now = new Date().toISOString();

    const selectedVendors = products.filter((p) => selected[p.slug]).map((p) => p.slug);
    const consents: VendorConsent[] = products.map((p) => ({
      productSlug: p.slug,
      consented: Boolean(selected[p.slug]),
      wordingShown: consentWording(p.name),
      timestamp: now,
    }));

    const payload = {
      name: String(form.get('name') || ''),
      email: String(form.get('email') || ''),
      phone: String(form.get('phone') || ''),
      businessName: String(form.get('businessName') || ''),
      country: 'US',
      matchedProducts: [],
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
      <div className="card border-positive-border bg-positive-bg p-6">
        <h3 className="text-lg font-bold text-positive-fg">You&rsquo;re all set</h3>
        <p className="mt-2 text-sm text-ink-soft">
          {selectedNames.length > 0
            ? `Thanks — we’ll pass your details to ${joinNames(selectedNames)} and they’ll reach out about pricing and demos.`
            : 'Thanks — we’ve saved your request. Select a provider next time to have them reach out.'}
        </p>
      </div>
    );
  }

  const multi = products.length > 1;

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

      <fieldset className="mt-4">
        {multi && (
          <legend className="mb-2 text-sm font-semibold text-ink">Who can contact you?</legend>
        )}
        <div className="space-y-2">
          {products.map((p) => (
            <label
              key={p.slug}
              className="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-200 p-3 hover:bg-surface-subtle"
            >
              <input
                type="checkbox"
                className="mt-0.5 h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                checked={Boolean(selected[p.slug])}
                onChange={() => toggle(p.slug)}
              />
              <span className="text-sm text-ink-soft">{consentWording(p.name)}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <p className="mt-3 text-xs text-ink-muted">
        By submitting, you agree to our{' '}
        <a href="/privacy/" className="text-brand-700 hover:underline">
          Privacy Policy
        </a>
        .{' '}
        {selectedNames.length > 0
          ? `${joinNames(selectedNames)} will receive the details above.`
          : 'No provider is selected, so we’ll only save your request.'}
      </p>

      {status === 'error' && (
        <p className="mt-3 rounded-lg border border-danger-border bg-danger-bg p-3 text-sm text-danger-fg">
          {errorMsg}
        </p>
      )}

      <button type="submit" disabled={status === 'submitting'} className="btn-primary mt-4 w-full sm:w-auto">
        {status === 'submitting'
          ? 'Sending…'
          : multi
            ? 'Get pricing & demos'
            : `Get pricing & demos from ${products[0].name}`}
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
