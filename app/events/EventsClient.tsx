"use client";

import { useCallback, useEffect, useState } from "react";
import { CldImage } from "next-cloudinary";
import styles from "./events.module.css";

type SchoolEvent = {
  id: string;
  title: string;
  description: string;
  images: string[];
  duration: number;
  reverse?: boolean;
};

type ModalState = {
  eventIndex: number;
  cardIndex: number;
  rect: DOMRect;
  status: "opening" | "open" | "closing";
};

const eventsData: SchoolEvent[] = [
  {
    id: "parents-activity",
    title: "Parents Activity Day",
    description: "Engaging workshops and collaborative activities bringing our school community and parents together.",
    images: ["school-website/events/parentsactivity/parentsactivity-01", "school-website/events/parentsactivity/parentsactivity-02"],
    duration: 34,
  },
  {
    id: "40-years-celebration",
    title: "40 Years Celebration",
    description: "Honoring four decades of educational excellence and historic milestones.",
    images: ["school-website/events/40yearcelb/40yearcelb-01", "school-website/events/40yearcelb/40yearcelb-02"],
    duration: 38,
    reverse: true,
  },
  {
    id: "christmas",
    title: "Christmas Celebration",
    description: "Spreading holiday cheer with festive carols, decorations, and seasonal performances.",
    images: ["school-website/events/chirstmas/chirstmas-01", "school-website/events/chirstmas/chirstmas-02"],
    duration: 36,
  },
  {
    id: "dussehra",
    title: "Dussehra Festival",
    description: "Celebrating traditional cultural heritages and seasonal festive rituals.",
    images: ["school-website/events/dusheera/dusheera-01", "school-website/events/dusheera/dusheera-02"],
    duration: 32,
  },
  {
    id: "field-trip",
    title: "Educational Field Trip",
    description: "Experiential learning journeys outside the classroom boundaries.",
    images: ["school-website/events/fieldtrip/fieldtrip-01"],
    duration: 30,
    reverse: true,
  },
  {
    id: "fruit-day",
    title: "Fruit Day Celebration",
    description: "Promoting healthy habits and learning about nature's vibrant nutrition.",
    images: ["school-website/events/fruitday/fruitday-01"],
    duration: 30,
  },
  {
    id: "graduation-day",
    title: "Graduation Day",
    description: "Celebrating the hard work, milestones, and bright futures of our graduating students.",
    images: ["school-website/events/graduationday/graduationday-01"],
    duration: 32,
  },
  {
    id: "pongal",
    title: "Pongal Festival",
    description: "Embracing seasonal harvest traditions with joy, community, and gratitude.",
    images: ["school-website/events/pongal/pongal-01"],
    duration: 30,
    reverse: true,
  },
  {
    id: "rainbow-kids",
    title: "Rainbow Kids Activities",
    description: "Fun, colorful, and creative developmental activities for our early learners.",
    images: ["school-website/events/rainbowkids/rainbowkids-01"],
    duration: 30,
  },
  {
    id: "science-odyssey",
    title: "Science Odyssey Exhibit",
    description: "Showcasing student curiosity, innovative projects, and scientific discoveries.",
    images: ["school-website/events/science%20odyssey/science%20odyssey-01"],
    duration: 34,
  },
  {
    id: "sports-day",
    title: "Annual Sports Meet",
    description: "Celebrating teamwork, athletic dedication, and competitive school spirit.",
    images: ["school-website/events/sportsday/sportsday-01"],
    duration: 38,
    reverse: true,
  },
];

const cloudinaryConfig = {
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? "dkoxrayf2",
  },
};

export default function EventsClient() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [hoveredEventIndex, setHoveredEventIndex] = useState<number | null>(null);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const [modalState, setModalState] = useState<ModalState | null>(null);

  const activeModalEvent = modalState ? eventsData[modalState.eventIndex] : null;

  const handleClose = useCallback(() => {
    if (!modalState || modalState.status === "closing") {
      return;
    }

    setHoveredEventIndex(null);
    setHoveredCardIndex(null);
    setModalState((current) => (current ? { ...current, status: "closing" } : current));
    window.setTimeout(() => {
      setModalState(null);
    }, 400);
  }, [modalState]);

  const openModal = useCallback(
    (eventIndex: number, cardIndex: number, cardElement: HTMLElement) => {
      const rect = cardElement.getBoundingClientRect();
      setActiveCardIndex(cardIndex);
      setModalState({
        eventIndex,
        cardIndex,
        rect,
        status: "opening",
      });

      window.requestAnimationFrame(() => {
        setModalState((current) => (current ? { ...current, status: "open" } : current));
      });
    },
    [],
  );

  useEffect(() => {
    if (!modalState) {
      return;
    }

    const cardCount = eventsData[modalState.eventIndex].images.length;

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
  }, [handleClose, modalState]);

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
          {eventsData.map((event, eventIndex) => {
            const loopCards = [...event.images, ...event.images];

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

                <div className={styles.trackWindow}>
                  <div
                    className={styles.marquee}
                    style={{
                      ["--scroll-duration" as string]: `${event.duration}s`,
                      animationDirection: event.reverse ? "reverse" : "normal",
                    }}
                    aria-label={`${event.title} image carousel`}
                  >
                    {loopCards.map((src, index) => {
                      const realIndex = index % event.images.length;
                      const isActiveHover = hoveredEventIndex === eventIndex && hoveredCardIndex === realIndex;
                      return (
                        <article
                          key={`${event.id}-${src}-${index}`}
                          className={styles.card}
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
                          onClick={(clickEvent) => openModal(eventIndex, realIndex, clickEvent.currentTarget)}
                        >
                          <div className={styles.imageFrame}>
                            <CldImage
                              src={src}
                              config={cloudinaryConfig}
                              alt={event.title}
                              fill
                              sizes="(max-width: 640px) 20rem, (max-width: 1024px) 24rem, 20rem"
                              className={styles.thumbnail}
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
          className={`${styles.modalShell} ${modalState.status === "closing" ? styles.modalShellClosing : ""}`}
          role="presentation"
          onClick={handleClose}
        >
          <div className={`${styles.modalBackdrop} ${modalState.status === "opening" || modalState.status === "open" ? styles.modalBackdropOpen : ""}`} />

          <div
            className={`${styles.modalStage} ${modalState.status === "opening" ? styles.modalStageOpening : ""} ${modalState.status === "open" ? styles.modalStageOpen : ""} ${modalState.status === "closing" ? styles.modalStageClosing : ""}`}
            role="dialog"
            aria-modal="true"
            aria-label={`${activeModalEvent.title} image viewer`}
            onClick={(event) => event.stopPropagation()}
            style={{
              top: modalState.rect.top,
              left: modalState.rect.left,
              width: modalState.rect.width,
              height: modalState.rect.height,
            }}
          >
            <button type="button" className={styles.closeButton} onClick={handleClose} aria-label="Close modal">
              <span>×</span>
            </button>

            <button type="button" className={`${styles.navButton} ${styles.navButtonLeft}`} onClick={goToPreviousCard} aria-label="Previous image">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button type="button" className={`${styles.navButton} ${styles.navButtonRight}`} onClick={goToNextCard} aria-label="Next image">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>

            <div
              className={styles.modalContent}
            >
                <div className={styles.modalImageWrap}>
                  {activeModalEvent.images.map((src, index) => {
                    if (index !== activeCardIndex) {
                      return null;
                    }

                    return (
                      <div key={`${activeModalEvent.id}-${src}`} className={styles.modalImageFrame}>
                      <CldImage
                          src={src}
                          config={cloudinaryConfig}
                          alt={activeModalEvent.title}
                          fill
                          sizes="100vw"
                          className={styles.modalImage}
                          priority
                      />
                    </div>
                    );
                  })}
              </div>

              <div className={styles.modalCaption}>
                <p className={styles.modalEyebrow}>{activeModalEvent.title}</p>
                <p className="mt-3 text-sm leading-7 text-text-muted sm:text-base">{activeModalEvent.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}