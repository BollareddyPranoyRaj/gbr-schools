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
    <div className="relative w-full overflow-hidden rounded-lg border border-primary/10 bg-primary px-6 py-10 shadow-sm">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="absolute -right-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-accent/25 blur-3xl" />

      <div className="relative z-10 max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
          GBR Learning Focus
        </p>
        <h2 className="text-3xl font-bold text-white transition-all duration-500 ease-in-out md:text-5xl">
          {HERO_TEXTS[index]}
        </h2>
      </div>
    </div>
  );
}
