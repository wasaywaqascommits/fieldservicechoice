import 'server-only';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { hasSupabaseAdmin, supabaseConfig } from '@/lib/env';

/**
 * Server-side privileged Supabase client (service role).
 *
 * SECURITY (spec §39): the service-role key bypasses Row Level Security, so
 * this module is marked `server-only` and must never be imported into a Client
 * Component. Returns null when admin credentials are not configured, so callers
 * can fall back to dev behavior during local development.
 */
let cached: SupabaseClient | null = null;

export function getServiceClient(): SupabaseClient | null {
  if (!hasSupabaseAdmin) return null;
  if (cached) return cached;
  cached = createClient(supabaseConfig.url, supabaseConfig.serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return cached;
}
