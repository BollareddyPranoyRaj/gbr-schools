"use client";

import { useRouter, usePathname } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();

  // Hide on the home page
  if (pathname === "/") return null;

  return (
    <button
      onClick={() => router.back()}
      className="fixed top-[108px] left-4 sm:left-6 z-40 flex items-center justify-center w-11 h-11 bg-white text-text-muted rounded-[var(--radius-md)] border border-border hover:text-primary hover:border-primary/30 transition-colors"
      aria-label="Go back to previous page"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        strokeWidth={2}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
}