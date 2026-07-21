"use client";

import { useRouter, usePathname } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();

  // If the user is on the home page, hide the back button
  if (pathname === "/") return null;

  return (
    <button
      onClick={() => router.back()}
      /* 
        Changed to top-left positioning. 
        top-[120px] ensures it clears your sticky navbar and notice banner. 
        You can adjust the 120px value if your header is taller or shorter! 
      */
      className="fixed top-[120px] left-4 sm:left-8 z-40 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white text-primary rounded-full shadow-md hover:bg-gray-50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 border border-gray-200"
      aria-label="Go back to previous page"
      title="Go Back"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5 sm:h-6 sm:w-6" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
}