// app/not-found.tsx

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] bg-background flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <p className="text-8xl font-bold text-primary/10 tabular-nums">404</p>
        <h1 className="text-2xl font-bold text-primary mt-4 mb-2">Page not found</h1>
        <p className="text-text-muted mb-8 max-w-md mx-auto text-sm">
          This page doesn&apos;t exist or has been moved. Try heading back to the homepage.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-[var(--radius-sm)] hover:bg-primary/90 transition-colors min-h-[44px]"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}
