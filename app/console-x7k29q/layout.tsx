import type { Metadata } from 'next';
import Link from 'next/link';
import { getServerUser, isAdminConfigured } from '@/lib/database/authServer';
import { LoginForm } from '@/components/admin/LoginForm';

// Admin must never be indexed (spec §33, §110).
export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: 'Admin — FieldServiceChoice',
};

const ADMIN_NAV = [
  { href: '/console-x7k29q/', label: 'Dashboard' },
  { href: '/console-x7k29q/products/', label: 'Products' },
  { href: '/console-x7k29q/leads/', label: 'Leads' },
  { href: '/console-x7k29q/partners/', label: 'Partner inquiries' },
];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const configured = isAdminConfigured();
  const user = configured ? await getServerUser() : null;

  // When Supabase auth is configured but nobody is signed in, gate everything.
  if (configured && !user) {
    return <LoginForm />;
  }

  return (
    <div className="min-h-screen bg-surface-subtle">
      <div className="border-b border-slate-200 bg-white">
        <div className="container-page flex h-14 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/console-x7k29q/" className="font-bold text-ink">
              FSC Admin
            </Link>
            <nav className="flex gap-1">
              {ADMIN_NAV.map((n) => (
                <Link key={n.href} href={n.href} className="rounded-md px-3 py-1.5 text-sm text-ink-soft hover:bg-surface-subtle">
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
          <span className="text-xs text-ink-muted">{user?.email ?? 'preview mode'}</span>
        </div>
      </div>

      {!configured && (
        <div className="container-page pt-4">
          <div className="rounded-lg border border-warning-border bg-warning-bg p-3 text-sm text-warning-fg">
            Preview mode: Supabase is not configured, so authentication is disabled and no lead /
            partner data is available. Set the Supabase environment variables to enable full admin.
          </div>
        </div>
      )}

      <div className="container-page py-8">{children}</div>
    </div>
  );
}
