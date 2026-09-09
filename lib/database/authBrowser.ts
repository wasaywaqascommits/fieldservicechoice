'use client';

import { createBrowserClient } from '@supabase/ssr';
import { hasSupabasePublic, supabaseConfig } from '@/lib/env';

/** Browser Supabase client for the admin sign-in form. */
export function createBrowserSupabase() {
  if (!hasSupabasePublic) return null;
  return createBrowserClient(supabaseConfig.url, supabaseConfig.anonKey);
}
