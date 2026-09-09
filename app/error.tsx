'use client';

import { useEffect } from 'react';

/** Global error boundary (spec §68). */
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <h1 className="text-3xl font-bold text-ink">Something went wrong</h1>
      <p className="mt-3 max-w-md text-ink-muted">
        An unexpected error occurred. Please try again — if it keeps happening, let us know.
      </p>
      <div className="mt-6 flex gap-3">
        <button type="button" onClick={reset} className="btn-primary">
          Try again
        </button>
        <a href="/" className="btn-secondary">
          Go home
        </a>
      </div>
    </div>
  );
}
