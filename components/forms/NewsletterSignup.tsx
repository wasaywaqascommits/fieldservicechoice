'use client';

import { useState } from 'react';

/** Optional newsletter signup (spec §61). Not a launch blocker. */
export function NewsletterSignup() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.get('email'), company_website_hp: form.get('company_website_hp') }),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return <p className="text-sm font-medium text-positive-fg">You’re subscribed. Thanks!</p>;
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2 sm:flex-row">
      <label className="sr-only" htmlFor="newsletter-email">Email address</label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        required
        placeholder="you@company.com"
        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 sm:max-w-xs"
      />
      <div aria-hidden className="hidden">
        <input type="text" name="company_website_hp" tabIndex={-1} autoComplete="off" />
      </div>
      <button type="submit" disabled={status === 'submitting'} className="btn-primary">
        {status === 'submitting' ? 'Subscribing…' : 'Subscribe'}
      </button>
      {status === 'error' && <span className="text-sm text-danger-fg">Try again.</span>}
    </form>
  );
}
