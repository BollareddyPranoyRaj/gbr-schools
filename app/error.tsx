// app/error.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[80vh] bg-background flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-lg w-full">
        <h2 className="text-2xl font-bold text-primary mb-4">Something went wrong</h2>
        <p className="text-text-muted mb-8 text-sm">
          An unexpected error occurred. Please try again, or return to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto px-6 py-3 bg-primary text-white rounded-[var(--radius-sm)] font-medium hover:bg-primary/90 transition-colors min-h-[44px]"
          >
            Try again
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 border border-border text-text-main rounded-[var(--radius-sm)] font-medium hover:bg-surface transition-colors min-h-[44px] inline-flex items-center justify-center"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}