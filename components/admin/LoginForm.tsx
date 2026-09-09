'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createBrowserSupabase } from '@/lib/database/authBrowser';

export function LoginForm() {
  const router = useRouter();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const supabase = createBrowserSupabase();
    if (!supabase) {
      setStatus('error');
      setMessage('Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and the keys in .env.local.');
      return;
    }
    setStatus('submitting');
    const form = new FormData(e.currentTarget);
    const { error } = await supabase.auth.signInWithPassword({
      email: String(form.get('email')),
      password: String(form.get('password')),
    });
    if (error) {
      setStatus('error');
      setMessage(error.message);
      return;
    }
    router.refresh();
  }

  return (
    <div className="mx-auto mt-24 max-w-sm">
      <div className="card p-6">
        <h1 className="text-xl font-bold text-ink">Admin sign in</h1>
        <p className="mt-1 text-sm text-ink-muted">FieldServiceChoice administration.</p>
        <form onSubmit={onSubmit} className="mt-5 space-y-4">
          <label className="block text-sm">
            <span className="mb-1 block font-medium text-ink-soft">Email</span>
            <input name="email" type="email" required className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500" />
          </label>
          <label className="block text-sm">
            <span className="mb-1 block font-medium text-ink-soft">Password</span>
            <input name="password" type="password" required className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500" />
          </label>
          {status === 'error' && (
            <p className="rounded-lg border border-danger-border bg-danger-bg p-2 text-xs text-danger-fg">{message}</p>
          )}
          <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full">
            {status === 'submitting' ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
}
