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
  const [muted, setMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  if (!playing) {
    return (
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={VIDEO_POSTER_URL}
          alt="GBR Schools hero preview"
          className="absolute inset-0 h-full w-full object-cover object-[20%_center]"
        />
        <button
          onClick={handleStartPlay}
          aria-label="Play video"
          className="absolute inset-0 z-10 flex items-center justify-center"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/60 hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 ml-1">
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
        muted={muted}
        playsInline
        onEnded={handleEnded}
        onClick={handleTogglePlay}
        className="absolute inset-0 h-full w-full object-cover object-[20%_center] cursor-pointer"
      >
        <source src={VIDEO_SRC_URL} type="video/mp4" />
      </video>

      {/* Media Controls (WCAG 2.2 AA compliant for auto-playing media) */}
      <div className="absolute bottom-4 right-4 z-10 flex items-center gap-3">
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
              <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
            </svg>
          )}
        </button>
        <button
          onClick={toggleMute}
          aria-label={muted ? 'Unmute video' : 'Mute video'}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
        >
          {muted ? (
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 003.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
              </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            </svg>
          )}
        </button>
      </div>
      {paused && (
        <button
          onClick={handleTogglePlay}
          aria-label="Resume video"
          className="absolute inset-0 z-10 flex items-center justify-center"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/60 hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 ml-1">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </span>
        </button>
      )}

      {/* Mute toggle */}
      <button
        onClick={(e) => { e.stopPropagation(); toggleMute(); }}
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
              // Create a bento-style balanced grid by spanning the first and last items
              // on 3-col and 4-col layouts to ensure no orphaned empty spaces at the bottom.
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