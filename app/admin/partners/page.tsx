import { getServiceClient } from '@/lib/database/client';

interface PartnerRow {
  id: string;
  company: string | null;
  contact_name: string | null;
  email: string | null;
  partnership_type: string | null;
  status: string | null;
  created_at: string | null;
}

export default async function AdminPartners() {
  const supabase = getServiceClient();
  let rows: PartnerRow[] = [];
  let error: string | null = null;

  if (supabase) {
    const { data, error: err } = await supabase
      .from('partner_inquiries')
      .select('id,company,contact_name,email,partnership_type,status,created_at')
      .order('created_at', { ascending: false })
      .limit(100);
    if (err) error = err.message;
    else rows = (data as PartnerRow[]) ?? [];
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-ink">Partner inquiries</h1>
      {!supabase ? (
        <div className="mt-6 card p-6 text-sm text-ink-muted">Connect Supabase to view partner inquiries.</div>
      ) : error ? (
        <div className="mt-6 card border-danger-border bg-danger-bg p-6 text-sm text-danger-fg">Could not load: {error}</div>
      ) : rows.length === 0 ? (
        <div className="mt-6 card p-6 text-sm text-ink-muted">No partner inquiries yet.</div>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="bg-surface-subtle text-left text-ink-muted">
                <th className="p-3 font-medium">Company</th>
                <th className="p-3 font-medium">Contact</th>
                <th className="p-3 font-medium">Email</th>
                <th className="p-3 font-medium">Type</th>
                <th className="p-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rows.map((r) => (
                <tr key={r.id}>
                  <td className="p-3 font-medium text-ink">{r.company}</td>
                  <td className="p-3 text-ink-soft">{r.contact_name}</td>
                  <td className="p-3 text-ink-soft">{r.email}</td>
                  <td className="p-3 text-ink-soft">{r.partnership_type}</td>
                  <td className="p-3 text-ink-soft">{r.status ?? 'new'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
