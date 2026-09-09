import { getServiceClient } from '@/lib/database/client';

interface LeadRow {
  id: string;
  name: string | null;
  email: string | null;
  business_name: string | null;
  industry: string | null;
  budget_band: string | null;
  selected_vendors: string[] | null;
  status: string | null;
  created_at: string | null;
}

export default async function AdminLeads() {
  const supabase = getServiceClient();
  let leads: LeadRow[] = [];
  let error: string | null = null;

  if (supabase) {
    const { data, error: err } = await supabase
      .from('leads')
      .select('id,name,email,business_name,industry,budget_band,selected_vendors,status,created_at')
      .order('created_at', { ascending: false })
      .limit(100);
    if (err) error = err.message;
    else leads = (data as LeadRow[]) ?? [];
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-ink">Leads</h1>
      <p className="mt-1 text-sm text-ink-muted">
        Buyer submissions with per-vendor consent. Sensitive data — never exposed publicly (spec §39).
      </p>

      {!supabase ? (
        <div className="mt-6 card p-6 text-sm text-ink-muted">
          Connect Supabase (set the environment variables) to view and manage leads. Until then,
          submitted leads are logged server-side but not persisted.
        </div>
      ) : error ? (
        <div className="mt-6 card border-danger-border bg-danger-bg p-6 text-sm text-danger-fg">
          Could not load leads: {error}. Run the migrations in <code>supabase/migrations</code>.
        </div>
      ) : leads.length === 0 ? (
        <div className="mt-6 card p-6 text-sm text-ink-muted">No leads yet.</div>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[820px] text-sm">
            <thead>
              <tr className="bg-surface-subtle text-left text-ink-muted">
                <th className="p-3 font-medium">Name</th>
                <th className="p-3 font-medium">Email</th>
                <th className="p-3 font-medium">Business</th>
                <th className="p-3 font-medium">Industry</th>
                <th className="p-3 font-medium">Budget</th>
                <th className="p-3 font-medium">Selected vendors</th>
                <th className="p-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {leads.map((l) => (
                <tr key={l.id}>
                  <td className="p-3 text-ink">{l.name}</td>
                  <td className="p-3 text-ink-soft">{l.email}</td>
                  <td className="p-3 text-ink-soft">{l.business_name ?? '—'}</td>
                  <td className="p-3 text-ink-soft">{l.industry ?? '—'}</td>
                  <td className="p-3 text-ink-soft">{l.budget_band ?? '—'}</td>
                  <td className="p-3 text-ink-soft">{(l.selected_vendors ?? []).join(', ') || '—'}</td>
                  <td className="p-3 text-ink-soft">{l.status ?? 'new'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
