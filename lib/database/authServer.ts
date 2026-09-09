import 'server-only';
import { cookies } from 'next/headers';
import { createServerClient } from '@supabase/ssr';
import { hasSupabasePublic, supabaseConfig } from '@/lib/env';

/**
 * Read-only server auth helper for the admin area (spec §33, §39).
 * Returns the signed-in user, or null when Supabase is not configured or no
 * session exists. Cookie writes are intentionally no-ops here (RSC-safe);
 * session establishment happens on the client sign-in form.
 */
export async function getServerUser(): Promise<{ id: string; email: string | null } | null> {
  if (!hasSupabasePublic) return null;
  try {
    const cookieStore = await cookies();
    const supabase = createServerClient(supabaseConfig.url, supabaseConfig.anonKey, {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll: () => {
          /* no-op in RSC */
        },
      },
    });
    const { data } = await supabase.auth.getUser();
    if (!data.user) return null;
    return { id: data.user.id, email: data.user.email ?? null };
  } catch {
    return null;
  }
}

export function isAdminConfigured(): boolean {
  return hasSupabasePublic;
}
