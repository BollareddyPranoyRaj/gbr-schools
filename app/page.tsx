'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { schoolData } from './lib/schoolData';

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
];

const VIDEO_POSTER_URL = "https://res.cloudinary.com/dkoxrayf2/video/upload/so_2,f_auto,q_auto/v1784303212/GBR_HomePage_umgwxo.jpg";
const VIDEO_SRC_URL = "https://res.cloudinary.com/dkoxrayf2/video/upload/f_auto,q_auto/v1784303212/GBR_HomePage_umgwxo.mp4";

function HeroVideo() {
  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!playing || !videoRef.current) return;
    const video = videoRef.current;

    if (paused) {
      video.pause();
      return;
    }

    const tryPlay = () => {
      video.play().catch(() => {});
    };

    if (video.readyState >= 2) {
      tryPlay();
    } else {
      video.addEventListener("canplay", tryPlay, { once: true });
      return () => video.removeEventListener("canplay", tryPlay);
    }
  }, [playing, paused]);

  const handleStartPlay = () => {
    setPlaying(true);
    setPaused(false);
  };

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
        setPaused(false);
      } else {
        videoRef.current.pause();
        setPaused(true);
      }
    }
  };

  const handleEnded = () => {
    setPlaying(false);
    setPaused(false);
  };

  if (!playing) {
    return (
      <div className="relative w-full h-full overflow-hidden bg-surface">
        <img
          src={VIDEO_POSTER_URL}
          alt="GBR Schools hero preview"
          className="absolute inset-0 h-full w-full object-cover object-[20%_center]"
        />
        <button
          onClick={handleStartPlay}
          aria-label="Play video"
          className="absolute inset-0 z-10 flex items-center justify-center group"
        >
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition-all group-hover:bg-black/60 group-hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 ml-1">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </span>
        </button>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[40vh] overflow-hidden bg-surface">
      <video
        ref={videoRef}
        muted // We keep this attribute so auto-play works in browsers, but no UI is shown
        playsInline
        onEnded={handleEnded}
        onClick={handleTogglePlay}
        className="absolute inset-0 h-full w-full object-cover object-[20%_center] cursor-pointer"
      >
        <source src={VIDEO_SRC_URL} type="video/mp4" />
      </video>

      {/* Central Play Button (Only shows when paused) */}
      {paused && (
        <button
          onClick={handleTogglePlay}
          aria-label="Resume video"
          className="absolute inset-0 z-10 flex items-center justify-center group"
        >
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition-all group-hover:bg-black/60 group-hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 ml-1">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col bg-background">
      {/* Hero Section */}
      <section className="w-full flex flex-col lg:grid lg:grid-cols-12 min-h-0">
        
        {/* TEXT SIDE */}
        <div className="w-full lg:col-span-5 flex flex-col justify-center items-start text-left px-6 sm:px-12 lg:px-20 py-16 lg:py-24 xl:py-32 order-2 lg:order-1 border-b lg:border-b-0 border-border">
          <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-[3.6rem] font-bold text-primary mb-6">
            Welcome to <span className="text-accent">GBR Schools</span>
          </h1>
          <p className="text-base lg:text-lg text-text-muted font-normal mb-10 leading-relaxed max-w-md">
            {schoolData.about.vision}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full xl:w-auto">
            <Link 
              href="/ac-campus" 
              className="px-6 py-3.5 bg-primary text-white rounded-[var(--radius-sm)] font-medium hover:bg-primary/90 transition-colors w-full sm:w-auto text-center min-h-[48px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Explore A.C. Campus
            </Link>
            <Link 
              href="/standard-campus" 
              className="px-6 py-3.5 bg-white border border-border text-primary rounded-[var(--radius-sm)] font-medium hover:border-primary/30 hover:bg-surface transition-colors w-full sm:w-auto text-center min-h-[48px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Explore E.M.S Campus
            </Link>
          </div>
        </div>

        {/* VIDEO SIDE */}
        <div className="order-1 lg:order-2 w-full lg:col-span-7 h-[45vh] lg:h-auto border-l-0 lg:border-l border-border relative">
          <HeroVideo />
        </div>
      </section>

      {/* Unified Navigation Grid */}
      <section className="w-full bg-surface section-spacing border-t border-border relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-14 text-center sm:text-left max-w-2xl">
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-primary">Explore GBR Schools</h2>
            <p className="mt-4 text-text-muted text-base sm:text-lg leading-relaxed">
              Find everything you need, from admissions and academics to the latest campus updates, all in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {menuSections.map((link, index) => {
              const isFirst = index === 0;
              const isLast = index === menuSections.length - 1;
              const spanClasses = (isFirst || isLast) ? 'lg:col-span-2' : '';

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group flex flex-col p-7 sm:p-8 bg-background border border-border rounded-lg hover:border-primary/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${spanClasses}`}
                >
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mt-auto">
                    {link.description}
                  </p>
                </Link>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}