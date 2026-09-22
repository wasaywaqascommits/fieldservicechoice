import Link from 'next/link';
import {
  FOOTER_COMPANY,
  FOOTER_COMPARISONS,
  FOOTER_LEGAL,
  FOOTER_SOFTWARE,
  INDUSTRY_NAV,
  SOCIAL_LINKS,
  type NavLink,
} from './nav';
import { LogoMark } from '@/components/shared/Logo';

function LinkedInIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

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
              <LogoMark className="h-8 w-auto" />
              <span className="font-bold text-ink">FieldServiceChoice</span>
            </Link>
            <p className="mt-3 text-sm text-ink-muted">
              Find the right field service software for your business, based on your trade, team
              size, workflows and budget.
            </p>
            <div className="mt-4 flex items-center gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer me"
                  aria-label={`FieldServiceChoice on ${s.label}`}
                  className="text-ink-muted transition-colors hover:text-brand-700"
                >
                  {s.label === 'LinkedIn' ? <LinkedInIcon /> : s.label}
                </a>
              ))}
            </div>
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
