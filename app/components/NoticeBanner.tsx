// app/components/NoticeBanner.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function NoticeBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-primary text-white px-4 py-2 flex items-center justify-between z-50 relative">
      <div className="flex-1 text-center text-sm font-medium">
        <span className="bg-accent text-primary text-xs font-bold px-2 py-0.5 rounded mr-2 uppercase tracking-wide">Update</span>
        Admissions for the Academic Year 2026-2027 are now open!{' '}
        <Link href="/apply" className="underline hover:text-accent transition-colors ml-1">
          Apply Now
        </Link>
      </div>
      <button 
        onClick={() => setIsVisible(false)}
        className="text-white hover:text-accent focus:outline-none ml-4"
        aria-label="Dismiss banner"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}