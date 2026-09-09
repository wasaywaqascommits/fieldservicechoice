'use client';

import Link from 'next/link';
import { useState } from 'react';
import { PRIMARY_NAV, RESOURCES_NAV } from './nav';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2" aria-label="FieldServiceChoice home">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-600 text-sm font-bold text-white">
            FS
          </span>
          <span className="text-lg font-bold tracking-tight text-ink">
            FieldService<span className="text-brand-600">Choice</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {PRIMARY_NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-ink-soft hover:bg-surface-subtle hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button
              type="button"
              aria-expanded={resourcesOpen}
              aria-haspopup="true"
              onClick={() => setResourcesOpen((v) => !v)}
              className="rounded-md px-3 py-2 text-sm font-medium text-ink-soft hover:bg-surface-subtle hover:text-ink"
            >
              Resources
            </button>
            {resourcesOpen && (
              <div className="absolute right-0 top-full w-56 rounded-lg border border-slate-200 bg-white p-1 shadow-lift">
                {RESOURCES_NAV.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-md px-3 py-2 text-sm text-ink-soft hover:bg-surface-subtle hover:text-ink"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/find-software/" className="hidden btn-primary sm:inline-flex">
            Find My Software
          </Link>
          <button
            type="button"
            className="btn-secondary lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span aria-hidden>{mobileOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="container-page flex flex-col py-3" aria-label="Mobile">
            {PRIMARY_NAV.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-ink-soft hover:bg-surface-subtle"
              >
                {link.label}
              </Link>
            ))}
            <p className="px-2 pt-3 pb-1 text-xs font-semibold uppercase tracking-wide text-ink-muted">
              Resources
            </p>
            {RESOURCES_NAV.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm text-ink-soft hover:bg-surface-subtle"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/find-software/"
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-3"
            >
              Find My Software
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
