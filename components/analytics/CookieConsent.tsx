'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const STORAGE_KEY = 'fsc-consent';

type Consent = 'granted' | 'denied';

function updateGoogleConsent(value: Consent) {
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag === 'function') {
    w.gtag('consent', 'update', {
      ad_storage: value,
      analytics_storage: value,
      ad_user_data: value,
      ad_personalization: value,
    });
  }
}

/**
 * Lightweight, self-hosted cookie-consent banner wired to Google Consent Mode
 * v2. Analytics stay denied by default (set in the GA bootstrap) until the
 * visitor accepts here; the choice is remembered in localStorage so the banner
 * only shows once.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      /* storage blocked; don't show a banner we can't remember */
    }
  }, []);

  function decide(value: Consent) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    updateGoogleConsent(value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur"
    >
      <div className="container-page flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-3xl text-sm text-ink-soft">
          We use cookies to measure how the site is used and improve it. You can accept analytics
          cookies or decline. See our{' '}
          <Link href="/privacy/" className="font-medium text-brand-700 hover:underline">
            privacy policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button type="button" onClick={() => decide('denied')} className="btn-secondary">
            Decline
          </button>
          <button type="button" onClick={() => decide('granted')} className="btn-primary">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
