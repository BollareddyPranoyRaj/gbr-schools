// app/not-found.tsx

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-[80vh] bg-background flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary/10">404</h1>
        <h2 className="text-3xl font-semibold text-primary mt-4 mb-2">Page Not Found</h2>
        <p className="text-text-muted mb-8 max-w-md mx-auto">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
