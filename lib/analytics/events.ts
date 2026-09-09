/**
 * Analytics event layer (spec §57).
 *
 * `track()` is browser-safe: it fans out to GA4 (gtag), PostHog and our own
 * first-party attribution endpoint (/api/events). All calls are guarded so the
 * app works with zero analytics configured.
 */

export const EVENTS = {
  viewProduct: 'view_product',
  viewComparison: 'view_comparison',
  viewIndustry: 'view_industry',
  finderStart: 'finder_start',
  finderAnswer: 'finder_answer',
  finderStepComplete: 'finder_step_complete',
  finderComplete: 'finder_complete',
  matchView: 'match_view',
  matchExpand: 'match_expand',
  vendorClick: 'vendor_click',
  leadFormStart: 'lead_form_start',
  leadSubmit: 'lead_submit',
  leadConsentVendor: 'lead_consent_vendor',
  demoRequested: 'demo_requested',
  affiliateConversion: 'affiliate_conversion',
} as const;

export type EventName = (typeof EVENTS)[keyof typeof EVENTS];

type Props = Record<string, unknown>;

const SESSION_KEY = 'fsc_session_id';

/** Stable first-party session id stored in sessionStorage (spec §58). */
export function getSessionId(): string {
  if (typeof window === 'undefined') return 'server';
  try {
    let id = window.sessionStorage.getItem(SESSION_KEY);
    if (!id) {
      id = crypto.randomUUID();
      window.sessionStorage.setItem(SESSION_KEY, id);
    }
    return id;
  } catch {
    return 'no-storage';
  }
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    posthog?: { capture: (event: string, props?: Props) => void };
  }
}

export function track(event: EventName | string, properties: Props = {}): void {
  if (typeof window === 'undefined') return;
  const sessionId = getSessionId();
  const path = window.location?.pathname;
  const payload = { ...properties, sessionId, path };

  try {
    window.gtag?.('event', event, payload);
  } catch {
    /* no-op */
  }
  try {
    window.posthog?.capture(event, payload);
  } catch {
    /* no-op */
  }

  // First-party attribution store (fire-and-forget).
  try {
    const body = JSON.stringify({ event, properties, sessionId, path });
    if (navigator.sendBeacon) {
      navigator.sendBeacon('/api/events', new Blob([body], { type: 'application/json' }));
    } else {
      void fetch('/api/events', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body, keepalive: true });
    }
  } catch {
    /* no-op */
  }
}

/** Capture first-touch attribution once per session (spec §58). */
export function captureAttribution(): void {
  if (typeof window === 'undefined') return;
  try {
    const KEY = 'fsc_attribution';
    if (window.localStorage.getItem(KEY)) return;
    const params = new URLSearchParams(window.location.search);
    const attribution = {
      landingPage: window.location.pathname,
      referrer: document.referrer || undefined,
      utmSource: params.get('utm_source') || undefined,
      utmMedium: params.get('utm_medium') || undefined,
      utmCampaign: params.get('utm_campaign') || undefined,
      utmContent: params.get('utm_content') || undefined,
      utmTerm: params.get('utm_term') || undefined,
      firstTouch: new Date().toISOString(),
      sessionId: getSessionId(),
    };
    window.localStorage.setItem(KEY, JSON.stringify(attribution));
  } catch {
    /* no-op */
  }
}

export function readAttribution(): Record<string, string> | undefined {
  if (typeof window === 'undefined') return undefined;
  try {
    const raw = window.localStorage.getItem('fsc_attribution');
    return raw ? (JSON.parse(raw) as Record<string, string>) : undefined;
  } catch {
    return undefined;
  }
}
