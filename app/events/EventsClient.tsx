"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { CldImage } from "next-cloudinary";
import styles from "./events.module.css";

// Export the type so the Parent page.tsx can import and use it
export type SchoolEvent = {
  id: string;
  title: string;
  description: string;
  images: string[];
  duration: number;
  reverse?: boolean;
};

type ModalState = {
  eventIndex: number;
};

const cloudinaryConfig = {
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? "dkoxrayf2",
  },
};

export default function EventsClient({ eventsData }: { eventsData: SchoolEvent[] }) {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [hoveredEventIndex, setHoveredEventIndex] = useState<number | null>(null);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const [modalState, setModalState] = useState<ModalState | null>(null);

  const sortedEvents = useMemo(
    () =>
      eventsData
        .map((event) => ({ ...event, images: Array.from(new Set(event.images)) }))
        .sort((a, b) => b.images.length - a.images.length),
    [eventsData],
  );

  const activeModalEvent = modalState ? sortedEvents[modalState.eventIndex] : null;

  const handleClose = useCallback(() => {
    setHoveredEventIndex(null);
    setHoveredCardIndex(null);
    setModalState(null);
  }, []);

  const openModal = useCallback((eventIndex: number, cardIndex: number) => {
    setActiveCardIndex(cardIndex);
    setModalState({ eventIndex });
  }, []);

  useEffect(() => {
    if (!modalState) {
      return;
    }

    const cardCount = sortedEvents[modalState.eventIndex]?.images.length ?? 0;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }

      if (event.key === "ArrowLeft") {
        if (cardCount > 0) {
          setActiveCardIndex((current) => (current - 1 + cardCount) % cardCount);
        }
      }

      if (event.key === "ArrowRight") {
        if (cardCount > 0) {
          setActiveCardIndex((current) => (current + 1) % cardCount);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleClose, modalState, sortedEvents]);

  function goToNextCard() {
    if (!activeModalEvent) {
      return;
    }

    setActiveCardIndex((current) => (current + 1) % activeModalEvent.images.length);
  }

  function goToPreviousCard() {
    if (!activeModalEvent) {
      return;
    }

    setActiveCardIndex((current) => (current - 1 + activeModalEvent.images.length) % activeModalEvent.images.length);
  }

  return (
    <main id="events" className={`${styles.section} min-h-screen bg-background pt-28 pb-16`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl border-b border-gray-200 pb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">Events</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-primary sm:text-5xl">School Events in Motion</h1>
          <p className="mt-4 text-base leading-7 text-text-muted sm:text-lg">
            Distinct school events are presented one after another, each with its own animated image carousel and an emphasis on the moment that mattered most.
          </p>
        </div>

        <div className="mt-12 space-y-16">
          {sortedEvents.map((event, eventIndex) => {
            return (
              <section
                key={event.id}
                id={event.id}
                className={styles.eventRow}
                data-hovering={hoveredEventIndex === eventIndex && hoveredCardIndex !== null ? "true" : "false"}
                onMouseLeave={() => {
                  setHoveredEventIndex(null);
                  setHoveredCardIndex(null);
                }}
              >
                <div className="mb-6 flex flex-col gap-3 rounded-3xl border border-gray-200 bg-[var(--color-surface)]/80 p-6 shadow-[0_10px_30px_rgba(17,24,39,0.04)] backdrop-blur-sm sm:p-8">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <h2 className="text-2xl font-semibold text-primary sm:text-3xl">{event.title}</h2>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-text-muted">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      GBR Schools event story
                    </div>
                  </div>
                  <p className="max-w-3xl text-sm leading-7 text-text-muted sm:text-base">{event.description}</p>
                </div>

                <div className="w-full relative">
                  <div
                    className="flex flex-row overflow-x-auto snap-x snap-mandatory gap-6 scroll-smooth pb-4 scrollbar-hide"
                    aria-label={`${event.title} image carousel`}
                  >
                    {event.images.map((src, index) => {
                      const realIndex = index;
                      const isActiveHover = hoveredEventIndex === eventIndex && hoveredCardIndex === realIndex;
                      return (
                        <article
                          key={`${event.id}-${src}-${index}`}
                          className={
                            "w-[320px] md:w-[360px] h-[240px] flex-shrink-0 snap-start rounded-2xl overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
                          }
                          data-active={isActiveHover ? "true" : "false"}
                          onPointerEnter={(pointerEvent) => {
                            if (pointerEvent.pointerType !== "mouse") {
                              return;
                            }

                            setHoveredEventIndex(eventIndex);
                            setHoveredCardIndex(realIndex);
                          }}
                          onPointerLeave={() => {
                            if (hoveredEventIndex === eventIndex && hoveredCardIndex === realIndex && !modalState) {
                              setHoveredEventIndex(null);
                              setHoveredCardIndex(null);
                            }
                          }}
                          onClick={() => openModal(eventIndex, realIndex)}
                        >
                          <div className="w-full h-full relative">
                            <CldImage
                              src={src}
                              config={cloudinaryConfig}
                              alt={event.title}
                              fill
                              sizes="(max-width: 640px) 20rem, (max-width: 1024px) 24rem, 20rem"
                              className="object-cover"
                              loading="lazy"
                            />
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      {modalState && activeModalEvent && (
        <div
          className="fixed inset-x-0 bottom-0 top-[7.5rem] z-50 flex items-center justify-center bg-black/90 px-4 py-6 sm:top-[8rem]"
          role="presentation"
          onClick={handleClose}
        >
          <div
            className="w-full max-w-6xl"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeModalEvent.title} image viewer`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative mx-auto flex h-[calc(100vh-11rem)] max-h-[760px] min-h-[320px] w-full items-center justify-center">
              <CldImage
                src={activeModalEvent.images[activeCardIndex]}
                config={cloudinaryConfig}
                alt={activeModalEvent.title}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />

              <button type="button" className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/35 text-3xl leading-none text-white backdrop-blur transition hover:bg-black/55" onClick={handleClose} aria-label="Close modal">
                <span>×</span>
              </button>

              <button type="button" className="absolute left-4 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur transition hover:bg-black/55" onClick={goToPreviousCard} aria-label="Previous image">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <button type="button" className="absolute right-4 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur transition hover:bg-black/55" onClick={goToNextCard} aria-label="Next image">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
