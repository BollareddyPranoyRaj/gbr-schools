"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "./history.module.css";

const foundersData = [
  {
    id: "founder-1",
    name: "Late Sri Padala Ammi Reddy",
    role: "Founder President",
    description: "Anaparthi Educational Society and GBR Educational Institutions",
    images: [
      "https://res.cloudinary.com/dkoxrayf2/image/upload/v1786185985/ammi_reddy-1_rhmhtt.jpg",
      "https://res.cloudinary.com/dkoxrayf2/image/upload/v1786186033/ammi-reddy-2_bu9oit.jpg"
    ]
  },
  {
    id: "founder-2",
    name: "Late Sri Goluguri Bapi Raju",
    role: "Founder & Former Secretary",
    description: "GBR Educational Institutions and Former Secretary & Correspondent",
    images: [
      "https://res.cloudinary.com/dkoxrayf2/image/upload/v1786169181/ChatGPT_Image_Aug_8_2026_11_35_20_AM_dlid0o.png",
      "https://res.cloudinary.com/dkoxrayf2/image/upload/v1786168923/ChatGPT_Image_Aug_8_2026_11_30_43_AM_ramdyj.png",
      "https://res.cloudinary.com/dkoxrayf2/image/upload/v1785169612/SCANNED_OLD_PHOTOS-10_icezdn.jpg"
    ]
  },
  {
    id: "founder-3",
    name: "Sri Tetali Adi Reddy (Kondababu)",
    role: "Secretary & Correspondent",
    description: "GBR Educational Institutions",
    images: [
      "https://res.cloudinary.com/dkoxrayf2/image/upload/v1786168937/ChatGPT_Image_Aug_8_2026_11_31_00_AM_gufsoa.png",
      "https://res.cloudinary.com/dkoxrayf2/image/upload/v1786168937/ChatGPT_Image_Aug_8_2026_11_30_55_AM_nqcqe9.png",
      "https://res.cloudinary.com/dkoxrayf2/image/upload/v1786168931/ChatGPT_Image_Aug_8_2026_11_31_08_AM_qb44bm.png"
    ]
  },
  // {
  //   id: "founder-4",
  //   name: "Sri Bollareddy Ratna Reddy",
  //   role: "Former President & Advisor",
  //   description: "Anaparthi Educational Society and GBR Educational Institutions",
  //   images: [
  //     "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  //     "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop"
  //   ]
  // }
];

// Reusable Slideshow Component
function ImageSlideshow({ images, altText }: { images: string[]; altText: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 
    
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className={styles.imageContainer}>
      {images.map((src, index) => {
        // Fast-loading optimized image URL trick (only applies if it's a Cloudinary URL)
        let isCloudinary = false;
        try {
          const hostname = new URL(src).hostname.toLowerCase();
          isCloudinary = hostname === "cloudinary.com" || hostname.endsWith(".cloudinary.com");
        } catch {
          isCloudinary = false;
        }
        const fastLoadingSrc = isCloudinary ? src.replace('/upload/', '/upload/q_auto,f_auto,w_800/') : src;
        
        return (
          <Image
            key={`${src}-${index}`}
            src={fastLoadingSrc}
            alt={`${altText} photo ${index + 1}`}
            fill
            priority={index === 0}
            className={`${styles.slideImage} ${index === currentIndex ? styles.slideActive : ""}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        );
      })}
    </div>
  );
}

// Scroll Animation Component
function RevealOnScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove(styles.revealHidden);
          entry.target.classList.add(styles.revealVisible);
          observer.unobserve(entry.target); 
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.revealHidden}>
      {children}
    </div>
  );
}

export default function HistoryPage() {
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  const handleMobilePrev = () => {
    setActiveMobileIndex((prev) => (prev - 1 + foundersData.length) % foundersData.length);
  };

  const handleMobileNext = () => {
    setActiveMobileIndex((prev) => (prev + 1) % foundersData.length);
  };

  return (
    <main className="min-h-screen bg-background pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <RevealOnScroll>
          <div className="max-w-3xl border-b border-gray-200 pb-8 mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">Our Heritage</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-primary sm:text-5xl">The Founders & Leadership</h1>
            <p className="mt-4 text-base leading-7 text-text-muted sm:text-lg">
              Meet the educational visionaries whose dedication, passion, and foresight laid the foundation for the educational excellence we stand upon today.
            </p>
          </div>
        </RevealOnScroll>

      </div>

      {/* TWO-TONE BLUE BACKGROUND ZONE */}
      <div className="relative mt-20">
        {/* Deep blue bottom band */}
        <div className="absolute inset-x-0 bottom-0 top-32 bg-primary" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          
          {/* DESKTOP VIEW: Grid of all 4 founders */}
          <div className="hidden lg:grid grid-cols-4 gap-8">
            {foundersData.map((founder) => (
              <RevealOnScroll key={founder.id}>
                <div className="flex flex-col h-full group">
                  {/* Photo Container */}
                  <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden shadow-lg border border-border/10 bg-surface">
                    <ImageSlideshow images={founder.images} altText={founder.name} />
                  </div>
                  {/* Name and Role Details */}
                  <div className="pt-6 pb-8 text-left space-y-2 select-none min-h-[140px] flex flex-col justify-start">
                    <h3 className="text-lg font-bold text-white tracking-tight sm:text-xl line-clamp-2">
                      {founder.name}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-accent">
                      {founder.role}
                    </p>
                    <p className="text-xs text-blue-100/70 leading-relaxed font-medium line-clamp-3">
                      {founder.description}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* MOBILE/TABLET VIEW: Carousel with Arrow Buttons */}
          <div className="block lg:hidden max-w-sm mx-auto overflow-hidden">
            
            {/* Sliding Track Wrapper */}
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeMobileIndex * 100}%)` }}
              >
                {foundersData.map((founder) => (
                  <div key={founder.id} className="w-full flex-shrink-0 px-10 flex flex-col">
                    {/* Photo Container */}
                    <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden shadow-lg border border-border/10 bg-surface">
                      <ImageSlideshow images={founder.images} altText={founder.name} />
                    </div>
                    {/* Name and Role Details */}
                    <div className="pt-6 pb-4 text-left space-y-2 select-none flex flex-col justify-start">
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {founder.name}
                      </h3>
                      <p className="text-xs font-bold uppercase tracking-wider text-accent">
                        {founder.role}
                      </p>
                      <p className="text-sm text-blue-100/70 leading-relaxed font-medium">
                        {founder.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-3 pt-2 pb-8 px-10">
              <button 
                type="button" 
                onClick={handleMobilePrev}
                aria-label="Previous leadership card"
                className="grid h-10 w-10 place-items-center rounded bg-white border border-border text-primary hover:bg-surface-alt transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                type="button" 
                onClick={handleMobileNext}
                aria-label="Next leadership card"
                className="grid h-10 w-10 place-items-center rounded bg-white border border-border text-primary hover:bg-surface-alt transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}