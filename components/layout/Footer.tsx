import Link from 'next/link';
import {
  FOOTER_COMPANY,
  FOOTER_COMPARISONS,
  FOOTER_LEGAL,
  FOOTER_SOFTWARE,
  INDUSTRY_NAV,
  type NavLink,
} from './nav';

function FooterColumn({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold text-ink">{title}</h3>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-ink-muted hover:text-brand-700">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="container-page py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-600 text-sm font-bold text-white">
                FS
              </span>
              <span className="font-bold text-ink">FieldServiceChoice</span>
            </Link>
            <p className="mt-3 text-sm text-ink-muted">
              Find the right field service software for your business — based on your trade, team
              size, workflows and budget.
            </p>
          </div>
          <FooterColumn title="Software" links={FOOTER_SOFTWARE} />
          <FooterColumn title="Industries" links={INDUSTRY_NAV} />
          <FooterColumn title="Comparisons" links={FOOTER_COMPARISONS} />
          <FooterColumn title="Company" links={FOOTER_COMPANY} />
          <FooterColumn title="Legal" links={FOOTER_LEGAL} />
        </div>

        <div className="mt-10 rounded-lg border border-slate-200 bg-surface-subtle p-4 text-xs text-ink-muted">
          <strong className="font-semibold text-ink-soft">Affiliate disclosure:</strong>{' '}
          FieldServiceChoice may earn referral fees from certain software providers. These
          relationships do not influence our Fit Scores or editorial recommendations.{' '}
          <Link href="/affiliate-disclosure/" className="text-brand-700 hover:underline">
            Learn more
          </Link>
          .
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-ink-muted sm:flex-row">
          <p>© {new Date().getFullYear()} FieldServiceChoice. All rights reserved.</p>
          <p>Independent comparisons. Transparent methodology.</p>
        </div>
      </div>
    </footer>
  );
}
