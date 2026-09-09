import Link from 'next/link';

/** Proper 404 (spec §68, §101). */
export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">404</p>
      <h1 className="mt-2 text-3xl font-bold text-ink">We couldn’t find that page</h1>
      <p className="mt-3 max-w-md text-ink-muted">
        The page you’re looking for doesn’t exist or may have moved. Try the software directory or
        find your best-fit software.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href="/software/" className="btn-secondary">Browse software</Link>
        <Link href="/find-software/" className="btn-primary">Find My Software</Link>
      </div>
    </div>
  );
}
