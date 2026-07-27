'use client';

import { useState, useEffect } from 'react';

const HERO_TEXTS = [
  "Nurturing Minds from Nursery to 10th Grade",
  "World-Class Fully Air-Conditioned Campus",
  "Expansive Green Spaces & Modern Labs",
  "Empowering the Leaders of Tomorrow"
];

export default function HeroVideo() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % HERO_TEXTS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden bg-primary">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover opacity-60 pointer-events-none"
      >
        <source src="https://res.cloudinary.com/demo/video/upload/v1689798418/samples/sea-turtle.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay to ensure text readability while matching brand color */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-primary/10 mix-blend-multiply" />
      <div className="absolute inset-0 bg-primary/20" />

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12 z-10">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent drop-shadow-sm">
          GBR Learning Focus
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white transition-opacity duration-500 ease-in-out leading-tight max-w-xl text-balance">
          {HERO_TEXTS[index]}
        </h2>
      </div>
    </div>
  );
}
