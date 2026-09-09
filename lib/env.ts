/**
 * Centralized environment access. Nothing else should read process.env directly
 * so we have a single place that documents what is optional vs required.
 */

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://fieldservicechoice.com').replace(/\/$/, '');

export const SITE_NAME = 'FieldServiceChoice';

export const supabaseConfig = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || '',
  serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY || '',
};

/** True when the public (browser-safe) Supabase config is present. */
export const hasSupabasePublic = Boolean(supabaseConfig.url && supabaseConfig.anonKey);

/** True when server-side privileged Supabase writes are possible. */
export const hasSupabaseAdmin = Boolean(supabaseConfig.url && supabaseConfig.serviceRoleKey);

export const analyticsConfig = {
  gaId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '',
  posthogKey: process.env.NEXT_PUBLIC_POSTHOG_KEY || '',
  posthogHost: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
};

export const turnstileConfig = {
  siteKey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '',
  secret: process.env.TURNSTILE_SECRET_KEY || '',
};
