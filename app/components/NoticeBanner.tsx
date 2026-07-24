// app/components/NoticeBanner.tsx
import Link from 'next/link';

export default function NoticeBanner() {
  return (
    <div
      className="flex items-center justify-between h-9 bg-primary text-white px-4 sm:px-6 lg:px-8 text-sm"
      role="banner"
      aria-label="Admissions announcement"
    >
      <p className="text-xs sm:text-sm font-medium tracking-wide truncate mr-4">
        Admissions for 2026–2027 are now open.
      </p>

      <Link
        href="/apply"
        className="shrink-0 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent hover:text-white transition-colors"
      >
        Apply Now
        <svg
          className="w-3.5 h-3.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}