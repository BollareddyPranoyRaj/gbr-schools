// app/page.tsx
'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { schoolData } from './lib/schoolData';

// The new, streamlined 10-item menu replacing the old 14+ redundant links
const menuSections = [
  { href: "/about", title: "About GBR", description: "Learn about our legacy, vision, and meet the leadership team." },
  { href: "/ac-campus", title: "A.C. Campus", description: "Explore the modern facilities and vibrant student life at our A.C. Campus." },
  { href: "/standard-campus", title: "E.M.S. Campus", description: "Discover the rich heritage and academic excellence of our E.M.S. Campus." },
  { href: "/academics", title: "Academics", description: "Explore school timings, curriculum, and award systems." },
  { href: "/admissions", title: "Admissions & FAQ", description: "View fee policy, admission procedures, and common parent questions." },
  { href: "/notices", title: "Notice Board", description: "Check important circulars, latest news, and the academic calendar." },
  { href: "/events", title: "Events", description: "Browse campus celebrations and animated event highlights." },
  { href: "/parents", title: "Parent Portal", description: "Access the GBR Parent App, transport guidelines, and uniform rules." },
  { href: "/alumni", title: "Alumni", description: "Connect with the global GBR alumni network." },
  { href: "/careers", title: "Careers", description: "Find open teaching and administrative roles at GBR Schools." },
  { href: "/contact", title: "Contact", description: "Reach the school office and admissions team." },
];

function HeroVideo() {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover object-[20%_center]"
      >
        <source src="https://res.cloudinary.com/dkoxrayf2/video/upload/v1784303212/GBR_HomePage_umgwxo.mp4" type="video/mp4" />
      </video>

      {/* Mute toggle */}
      <button
        onClick={toggleMute}
        aria-label={muted ? 'Unmute video' : 'Mute video'}
        className="absolute bottom-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
      >
        {muted ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 003.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
          </svg>
        )}
      </button>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      {/* Hero Section */}
      <div className="w-full flex flex-col lg:flex-row items-center min-h-[68vh] lg:h-[68vh]">

        {/* TEXT SIDE */}
        <div className="w-full lg:w-[42%] lg:flex-none flex flex-col justify-center items-start text-left px-8 lg:px-20 py-10 lg:py-0 order-2 lg:order-1">
          <h1 className="text-3xl sm:text-5xl lg:text-[3.6rem] lg:leading-[1.05] font-bold text-primary mb-4 sm:mb-5 tracking-tight">
            Welcome to <span className="text-accent">GBR Schools</span>
          </h1>
          <p className="text-base lg:text-lg text-text-muted font-medium mb-6 lg:mb-8 leading-relaxed max-w-md">
            {schoolData.about.vision}
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 w-full sm:w-auto">
            <Link href="/ac-campus" className="px-6 py-3 sm:py-3.5 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto text-center text-sm sm:text-base">
              Explore A.C. Campus
            </Link>
            <Link href="/standard-campus" className="px-6 py-3 sm:py-3.5 bg-white border border-primary text-primary rounded-md font-medium hover:bg-primary/5 transition-all shadow-sm hover:shadow-md w-full sm:w-auto text-center text-sm sm:text-base">
              Explore E.M.S Campus
            </Link>
          </div>
        </div>

        {/* VIDEO SIDE */}
        <div className="order-1 lg:order-2 w-full lg:w-[58%] lg:flex-none h-[45vh] lg:h-full">
          <HeroVideo />
        </div>
      </div>

      {/* Gradient strip under hero */}
      <div className="w-full h-1.5 flex">
        <div className="flex-1 bg-primary"></div>
        <div className="flex-1 bg-accent"></div>
        <div className="flex-1 bg-primary/70"></div>
      </div>

      {/* Unified Navigation Grid */}
      <div className="w-full bg-white py-16 sm:py-24 border-t border-gray-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10 text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">Explore GBR Schools</h2>
            <p className="mt-4 max-w-2xl text-text-muted text-base sm:text-lg mx-auto sm:mx-0">
              Find everything you need, from admissions and academics to the latest campus updates, all in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {menuSections.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex flex-col p-6 sm:p-8 bg-[var(--color-surface)] border border-gray-200 rounded-xl hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-primary mb-2 sm:mb-3 group-hover:text-accent transition-colors">
                  {link.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}