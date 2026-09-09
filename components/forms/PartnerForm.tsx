'use client';

import { useState } from 'react';

const TYPES = [
  { value: 'affiliate', label: 'Affiliate partnership' },
  { value: 'referral', label: 'Referral partnership' },
  { value: 'cpl', label: 'Cost-per-lead (CPL)' },
  { value: 'cpa', label: 'Cost-per-action (CPA)' },
  { value: 'co_marketing', label: 'Co-marketing' },
  { value: 'data_verification', label: 'Data / fact verification' },
  { value: 'other', label: 'Something else' },
];

export function PartnerForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const res = await fetch('/api/partner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error || 'Please check the form and try again.');
      }
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  if (status === 'success') {
    return (
      <div className="card border-positive-border bg-positive-bg p-6">
        <h3 className="text-lg font-bold text-positive-fg">Thanks — we’ll be in touch</h3>
        <p className="mt-2 text-sm text-ink-soft">
          We’ve received your inquiry and will reply to the email you provided.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-4 p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Company" name="company" required />
        <Field label="Your name" name="name" required />
        <Field label="Title" name="title" />
        <Field label="Work email" name="email" type="email" required />
        <Field label="Website" name="website" />
        <label className="block text-sm">
          <span className="mb-1 block font-medium text-ink-soft">Partnership type</span>
          <select
            name="partnershipType"
            defaultValue="affiliate"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-ink focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          >
            {TYPES.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="block text-sm">
        <span className="mb-1 block font-medium text-ink-soft">Message</span>
        <textarea
          name="message"
          rows={4}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-ink focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
        />
      </label>

      <div aria-hidden className="hidden">
        <input type="text" name="company_website_hp" tabIndex={-1} autoComplete="off" />
      </div>

      {status === 'error' && (
        <p className="rounded-lg border border-danger-border bg-danger-bg p-3 text-sm text-danger-fg">{errorMsg}</p>
      )}
      <button type="submit" disabled={status === 'submitting'} className="btn-primary">
        {status === 'submitting' ? 'Sending…' : 'Partner with FieldServiceChoice'}
      </button>
      <p className="text-xs text-ink-muted">
        Partners can never purchase rankings or Fit Scores. See our{' '}
        <a href="/editorial-policy/" className="text-brand-700 hover:underline">editorial policy</a>.
      </p>
    </form>
  );
}

function Field({ label, name, type = 'text', required = false }: { label: string; name: string; type?: string; required?: boolean }) {
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
        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-ink focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
      />
    </label>
  );
}
