"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "./history.module.css";

const foundersData = [
  {
    id: "founder-1",
    name: "Sri G. B. Ramakrishna",
    role: "Visionary & Lead Founder",
    insights: [
      "Founded the institution with a vision to bring world-class education to the local community.",
      "Believed that true education goes beyond textbooks, emphasizing character building and ethical leadership.",
      "Spearheaded the initial campus construction, working side-by-side with the architects to design spaces that inspire creativity."
    ],
    images: [
      "https://res.cloudinary.com/dkoxrayf2/image/upload/v1786169181/ChatGPT_Image_Aug_8_2026_11_35_20_AM_dlid0o.png",
      "https://res.cloudinary.com/dkoxrayf2/image/upload/v1786168923/ChatGPT_Image_Aug_8_2026_11_30_43_AM_ramdyj.png"
    ]
  },
  {
    id: "founder-2",
    name: "Smt. G. Lakshmi",
    role: "Co-Founder & Academic Director",
    insights: [
      "Pioneered the school's innovative curriculum, integrating modern technology with traditional values.",
      "Dedicated her life to teacher training, ensuring every educator possessed the passion to ignite student potential.",
      "Created the foundational arts and culture programs that the GBR Group of Schools is known for today."
    ],
    images: [
      "https://res.cloudinary.com/dkoxrayf2/image/upload/v1786168937/ChatGPT_Image_Aug_8_2026_11_31_00_AM_gufsoa.png",
      "https://res.cloudinary.com/dkoxrayf2/image/upload/v1786168937/ChatGPT_Image_Aug_8_2026_11_30_55_AM_nqcqe9.png",
      "https://res.cloudinary.com/dkoxrayf2/image/upload/v1786168931/ChatGPT_Image_Aug_8_2026_11_31_08_AM_qb44bm.png"
    ]
  },
  {
    id: "founder-3",
    name: "Dr. K. V. Narayana",
    role: "Co-Founder & Philanthropist",
    insights: [
      "Instrumental in securing the financial backing to establish the school's state-of-the-art science laboratories.",
      "Established the school's first scholarship program, ensuring no brilliant mind was left behind due to financial constraints.",
      "A constant presence on campus, known for his personal mentorship of senior students during their critical exam years."
    ],
    images: [
      "https://res.cloudinary.com/dkoxrayf2/image/upload/v1785169675/SCANNED_OLD_PHOTOS-27_hxeitx.jpg",
      "https://res.cloudinary.com/dkoxrayf2/image/upload/v1785169631/SCANNED_OLD_PHOTOS-49_cwn7fd.jpg",
      "https://res.cloudinary.com/dkoxrayf2/image/upload/v1785169498/SCANNED_OLD_PHOTOS-15_gscpai.jpg",
      "https://res.cloudinary.com/dkoxrayf2/image/upload/v1785169479/SCANNED_OLD_PHOTOS-11_xl2doe.jpg"
    ]
  },
  {
    id: "founder-4",
    name: "Name of 4th Founder",
    role: "Their Role / Title",
    insights: [
      "First key insight or achievement about this founder.",
      "Second key insight or achievement about this founder.",
      "Third key insight or achievement about this founder."
    ],
    images: [
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop", 
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
    ]
  }
];

// Reusable Slideshow Component
function ImageSlideshow({ images, altText }: { images: string[]; altText: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500); 
    
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className={styles.imageContainer}>
      {images.map((src, index) => {
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
  return (
    <main className={`${styles.section} min-h-screen bg-background pt-28 pb-20`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <RevealOnScroll>
          <div className="max-w-3xl border-b border-gray-200 pb-10 mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">Our Heritage</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-primary sm:text-5xl">The Founders of GBR</h1>
            <p className="mt-4 text-base leading-7 text-text-muted sm:text-lg">
              Meet the visionaries whose dedication, passion, and foresight laid the foundation for the educational excellence we stand upon today.
            </p>
          </div>
        </RevealOnScroll>

        <div className="space-y-20 lg:space-y-24">
          {foundersData.map((founder, index) => {
            const isImageLeft = index % 2 !== 0;

            return (
              <RevealOnScroll key={founder.id}>
                {/* 
                  LAYOUT FIX: Changed gap and justify settings to balance the widths 
                  Mobile uses flex-col-reverse so images appear before text
                */}
                <section className={`flex flex-col-reverse gap-8 lg:items-center lg:justify-between lg:gap-16 ${isImageLeft ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                  
                  {/* TEXT CONTAINER: Given slightly more width (lg:w-7/12) to reduce vertical space */}
                  <div className="w-full lg:w-7/12 space-y-8 max-w-2xl">
                    <div className="px-2">
                      <h2 className="text-3xl font-bold text-primary sm:text-4xl">{founder.name}</h2>
                      <p className="mt-2 text-lg font-medium text-accent">{founder.role}</p>
                    </div>
                    
                    <div className="space-y-2">
                      {founder.insights.map((insight, i) => (
                        /* INTERACTIVE HOVER EFFECT: Turns bullet points into subtle hover cards */
                        <div 
                          key={i} 
                          className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-blue-900/5 border border-transparent hover:border-gray-100 transition-all duration-300 cursor-default"
                        >
                          {/* CHECKMARK: Scales up and changes color on hover */}
                          <span className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-surface)] border border-gray-200 shadow-sm text-accent text-sm group-hover:bg-accent group-hover:text-white group-hover:scale-110 group-hover:border-accent transition-all duration-300">
                            ✓
                          </span>
                          {/* TEXT: Darkens slightly on hover */}
                          <p className="text-base leading-7 text-text-muted group-hover:text-primary transition-colors duration-300">
                            {insight}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 
                    IMAGE CONTAINER: Reduced max width (lg:w-5/12) and reduced height to perfectly 
                    match the height of the text block next to it 
                  */}
                  <div className="w-full lg:w-5/12 relative h-[320px] sm:h-[400px] max-w-md mx-auto rounded-3xl overflow-hidden border border-gray-100 bg-gray-50 shadow-[0_10px_40px_rgba(17,24,39,0.06)] group hover:shadow-[0_20px_50px_rgba(17,24,39,0.12)] transition-all duration-500">
                    <ImageSlideshow images={founder.images} altText={founder.name} />
                  </div>

                </section>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </main>
  );
}