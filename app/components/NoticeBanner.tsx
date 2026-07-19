// app/components/NoticeBanner.tsx
import Link from 'next/link';

export default function NoticeBanner() {
  return (
    <div className="relative flex items-center h-10 overflow-hidden bg-gradient-to-r from-blue-900 via-primary to-blue-900 border-b border-white/10 text-white z-50 shadow-md">
      
      {/* 1. Pinned 'Apply Now' Button (Always visible and clickable) */}
      <div className="absolute left-0 z-20 flex items-center h-full px-3 sm:px-4 bg-gradient-to-r from-blue-900 via-blue-900 to-transparent pr-12">
        <Link 
          href="/apply"
          className="relative flex items-center gap-1.5 px-3 py-1.5 text-[10px] sm:text-xs font-extrabold tracking-widest text-blue-900 uppercase bg-[#fbbf24] hover:bg-yellow-300 transition-all rounded-full shadow-[0_0_12px_rgba(250,204,21,0.6)] group cursor-pointer"
        >
          {/* Pulsing Dot */}
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full bg-white rounded-full opacity-75 animate-ping"></span>
            <span className="relative inline-flex w-2 h-2 bg-white rounded-full"></span>
          </span>
          Apply Now
          {/* Arrow that nudges right on hover */}
          <svg className="w-3 h-3 ml-0.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* 2. Scrolling Marquee Text */}
      <div className="flex-1 w-full overflow-hidden whitespace-nowrap pl-36 sm:pl-44">
        {/* Inline CSS for the scrolling animation */}
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(100vw); }
            100% { transform: translateX(-100%); }
          }
          .animate-scroll {
            display: inline-block;
            animation: scroll 22s linear infinite;
            will-change: transform;
          }
          /* Pauses the text when the user hovers over it */
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
        
        <div className="animate-scroll text-xs sm:text-sm font-medium tracking-wide py-2">
          Admissions for the Academic Year 2026-2027 are now open! Secure your child's future at GBR Group of Schools today.
        </div>
      </div>

    </div>
  );
}