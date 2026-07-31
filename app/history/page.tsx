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
      "https://res.cloudinary.com/dkoxrayf2/image/upload/v1785169485/SCANNED_OLD_PHOTOS-12_r5gidf.jpg",
      "https://res.cloudinary.com/dkoxrayf2/image/upload/v1785169499/SCANNED_OLD_PHOTOS-06_ymyrar.jpg",
      "https://res.cloudinary.com/dkoxrayf2/image/upload/v1785169538/SCANNED_OLD_PHOTOS-23_oi6s5k.jpg",
      "https://res.cloudinary.com/dkoxrayf2/image/upload/v1785169612/SCANNED_OLD_PHOTOS-10_icezdn.jpg"
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
      "https://res.cloudinary.com/dkoxrayf2/image/upload/v1785169575/SCANNED_OLD_PHOTOS-40_w6qdsj.jpg",
      "https://res.cloudinary.com/dkoxrayf2/image/upload/v1785169541/SCANNED_OLD_PHOTOS-28_x0kc9h.jpg"
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
        // Fast-loading optimized image URL
        const fastLoadingSrc = src.replace('/upload/', '/upload/q_auto,f_auto,w_800/');
        
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
              Meet the three visionaries whose dedication, passion, and foresight laid the foundation for the educational excellence we stand upon today.
            </p>
          </div>
        </RevealOnScroll>

        {/* REDUCED VERTICAL SPACING: Changed space-y-40 to space-y-20 */}
        <div className="space-y-20 lg:space-y-24">
          {foundersData.map((founder, index) => {
            const isImageLeft = index % 2 !== 0;

            return (
              <RevealOnScroll key={founder.id}>
                {/* 
                  REDUCED HORIZONTAL SPACING: 
                  Removed lg:justify-between, changed gap to lg:gap-12 
                  to pull the text and image closer together 
                */}
                <section className={`flex flex-col gap-10 lg:items-center lg:justify-center lg:gap-12 ${isImageLeft ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                  
                  {/* TEXT CONTAINER: Kept concise so lines don't stretch too long */}
                  <div className="w-full lg:w-1/2 space-y-6 max-w-xl">
                    <div>
                      <h2 className="text-3xl font-bold text-primary sm:text-4xl">{founder.name}</h2>
                      <p className="mt-2 text-lg font-medium text-accent">{founder.role}</p>
                    </div>
                    
                    <div className="space-y-4">
                      {founder.insights.map((insight, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-surface)] border border-gray-200 shadow-sm text-accent text-xs">
                            ✓
                          </span>
                          <p className="text-base leading-7 text-text-muted">{insight}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 
                    IMAGE CONTAINER: Increased max-w to lg, adjusted height 
                    to balance with the text section beautifully 
                  */}
                  <div className="w-full lg:w-1/2 relative h-[350px] sm:h-[450px] max-w-lg mx-auto rounded-3xl overflow-hidden border border-gray-100 bg-gray-50 shadow-[0_10px_40px_rgba(17,24,39,0.06)]">
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