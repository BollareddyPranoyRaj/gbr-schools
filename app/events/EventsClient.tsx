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
    <div id="events" className={`${styles.section} min-h-screen bg-background pt-16 sm:pt-20 pb-16`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl border-b border-border pb-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Events</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">School Events in Motion</h1>
          <p className="mt-3 text-base text-text-muted">
            Distinct school events are presented with their dedicated image carousels highlighting our campus milestones.
          </p>
        </div>

        <div className="mt-10 space-y-12">
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
                <div className="mb-6 flex flex-col gap-3 rounded-lg border border-border bg-surface p-6 sm:p-8">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-primary sm:text-2xl">{event.title}</h2>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-text-muted">
                      <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                      GBR Event
                    </div>
                  </div>
                  <p className="max-w-3xl text-sm leading-relaxed text-text-muted">{event.description}</p>
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
                            "w-[320px] md:w-[360px] h-[240px] flex-shrink-0 snap-start rounded-lg overflow-hidden cursor-pointer border border-border transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                          }
                          tabIndex={0}
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
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              openModal(eventIndex, realIndex);
                            }
                          }}
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
                              quality="auto"
                              format="auto"
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
          className="fixed inset-0 z-[9999] w-screen h-screen flex items-center justify-center bg-black/95 backdrop-blur-sm"
          role="presentation"
          onClick={handleClose}
        >
          <div
            className="w-full max-w-5xl"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeModalEvent.title} image viewer`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative mx-auto flex h-[calc(100vh-10rem)] max-h-[720px] min-h-[300px] w-full items-center justify-center">
              <CldImage
                src={activeModalEvent.images[activeCardIndex]}
                config={cloudinaryConfig}
                alt={activeModalEvent.title}
                fill
                sizes="100vw"
                className="object-contain"
                priority
                quality="auto"
                format="auto"
              />

              <button type="button" className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/40 text-2xl leading-none text-white transition hover:bg-black/70 focus-visible:ring-2 focus-visible:ring-white" onClick={handleClose} aria-label="Close modal">
                <span>×</span>
              </button>

              <button type="button" className="absolute left-4 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/40 text-white transition hover:bg-black/70 focus-visible:ring-2 focus-visible:ring-white" onClick={goToPreviousCard} aria-label="Previous image">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <button type="button" className="absolute right-4 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/40 text-white transition hover:bg-black/70 focus-visible:ring-2 focus-visible:ring-white" onClick={goToNextCard} aria-label="Next image">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
