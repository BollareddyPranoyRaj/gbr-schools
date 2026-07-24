"use client";

import { type FormEvent, useCallback, useEffect, useState } from "react";
import { CldImage } from "next-cloudinary";

const alumniVoices = [
  "GBR taught me to dream with confidence and lead with kindness.",
  "The lessons I carry most are curiosity, courage, and compassion.",
  "Every teacher helped me believe that my goals were within reach.",
  "The friendships made here remain one of my life's greatest strengths.",
  "GBR gave me a foundation that continues to guide every decision.",
  "I learned that success means growing while lifting others with you.",
  "The values I found in these classrooms continue to shape my journey.",
  "My school years taught me to turn every challenge into an opportunity.",
  "I am proud to carry GBR's spirit of learning wherever I go.",
];

const alumniProfiles = [
  "Old_Students_JPG-01_kly2aq", "Old_Students_JPG-02_ooopmo", "Old_Students_JPG-03_hq7c9f", "Old_Students_JPG-04_fe0xg6", "Old_Students_JPG-05_l96buu",
  "Old_Students_JPG-06_wtmvxs", "Old_Students_JPG-07_txig6n", "Old_Students_JPG-08_vcnme7", "Old_Students_JPG-09_dhx2s2", "Old_Students_JPG-10_waubpi",
  "Old_Students_JPG-11_jxavbw", "Old_Students_JPG-12_oivapm", "Old_Students_JPG-13_tdx40v", "Old_Students_JPG-14_iqjprw", "Old_Students_JPG-15_tajub3",
  "Old_Students_JPG-16_hi0rbi", "Old_Students_JPG-17_scirfq", "Old_Students_JPG-18_vt8lsu", "Old_Students_JPG-19_aupxpl", "Old_Students_JPG-20_flpdny",
  "Old_Students_JPG-21_eybl0a", "Old_Students_JPG-22_qg9ckz", "Old_Students_JPG-23_txzpw9", "Old_Students_JPG-24_imdbij", "Old_Students_JPG-25_qbaljy",
  "Old_Students_JPG-26_ltgwmh", "Old_Students_JPG-27_urmtfh", "Old_Students_JPG-28_dijvrv", "Old_Students_JPG-29_onyo4e", "Old_Students_JPG-30_ivfndt",
  "Old_Students_JPG-31_tb8gm7", "Old_Students_JPG-32_jpfrau", "Old_Students_JPG-33_xmsacz", "Old_Students_JPG-34_fblnq5", "Old_Students_JPG-35_ruylt4",
  "Old_Students_JPG-36_pvyyhl", "Old_Students_JPG-37_fz8k4p", "Old_Students_JPG-38_wm77ow", "Old_Students_JPG-39_a5qi7p", "Old_Students_JPG-40_hixkhs",
  "Old_Students_JPG-41_f6fc5f", "Old_Students_JPG-42_h3oyvj", "Old_Students_JPG-43_hb6gsg", "Old_Students_JPG-44_thtv16", "Old_Students_JPG-45_krssqa",
].map((imageId, index) => ({ imageId, voice: alumniVoices[index % alumniVoices.length] }));

export default function AlumniClient() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isJoinFormOpen, setIsJoinFormOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [photoName, setPhotoName] = useState("");

  const closeViewer = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  const closeJoinForm = useCallback(() => {
    setIsJoinFormOpen(false);
    setIsSubmitted(false);
    setPhotoName("");
  }, []);

  const handleJoinSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  const showPreviousImage = useCallback(() => {
    setSelectedImageIndex((currentIndex) =>
      currentIndex === null ? null : (currentIndex - 1 + alumniProfiles.length) % alumniProfiles.length,
    );
  }, []);

  const showNextImage = useCallback(() => {
    setSelectedImageIndex((currentIndex) =>
      currentIndex === null ? null : (currentIndex + 1) % alumniProfiles.length,
    );
  }, []);

  useEffect(() => {
    if (selectedImageIndex === null && !isJoinFormOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (selectedImageIndex !== null) {
          closeViewer();
        } else {
          closeJoinForm();
        }
      }

      if (selectedImageIndex !== null && event.key === "ArrowLeft") {
        showPreviousImage();
      }

      if (selectedImageIndex !== null && event.key === "ArrowRight") {
        showNextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [closeJoinForm, closeViewer, isJoinFormOpen, selectedImageIndex, showNextImage, showPreviousImage]);

  return (
    <div className="min-h-screen w-full bg-background">
      <div className="w-full bg-primary px-6 py-16 text-white md:px-12 lg:px-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">GBR Alumni Community</p>
          <h1 className="mb-5 text-4xl font-bold tracking-tight md:text-5xl">Celebrating Our Alumni</h1>
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-gray-200 md:text-lg">
            From our classrooms to communities across the world, GBR alumni carry forward a shared spirit of learning, leadership, and service.
          </p>
          <button
            type="button"
            onClick={() => setIsJoinFormOpen(true)}
            className="inline-flex items-center gap-2 rounded-[var(--radius-sm)] bg-accent px-6 py-3 font-semibold text-primary transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[44px]"
          >
            Join the Alumni Network <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-label="GBR alumni gallery">
        <div className="relative flex w-full flex-row gap-6 overflow-x-auto scroll-smooth pb-6 snap-x snap-mandatory scrollbar-hide">
          {alumniProfiles.map((profile, index) => (
            <button
              key={profile.imageId}
              type="button"
              onClick={() => setSelectedImageIndex(index)}
              className="w-[220px] shrink-0 snap-start overflow-hidden rounded-lg bg-white border border-border transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:w-[250px]"
              aria-label={`Open alumni graphic ${index + 1}`}
            >
              <CldImage
                src={profile.imageId}
                alt={`GBR alumni graphic ${index + 1}`}
                width={600}
                height={800}
                sizes="(max-width: 768px) 20rem, 22.5rem"
                className="block h-[150px] w-full object-cover md:h-[170px]"
                quality="auto"
                format="auto"
              />
              <span className="block bg-surface p-4 text-left border-t border-border">
                <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-accent">Alumni voice</span>
                <span className="mt-1 block text-xs leading-relaxed text-text-muted">“{profile.voice}”</span>
              </span>
            </button>
          ))}
        </div>
      </section>

      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" role="presentation" onClick={closeViewer}>
          <div
            className="relative flex h-[85vh] w-full max-w-5xl items-center justify-center mx-auto"
            role="dialog"
            aria-modal="true"
            aria-label={`Alumni graphic ${selectedImageIndex + 1} viewer`}
            onClick={(event) => event.stopPropagation()}
          >
            <CldImage
              src={alumniProfiles[selectedImageIndex].imageId}
              alt={`GBR alumni graphic ${selectedImageIndex + 1}`}
              fill
              sizes="100vw"
              className="h-full w-full object-contain"
              priority
              quality="auto"
              format="auto"
            />

            <button type="button" className="absolute right-0 top-0 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/40 text-2xl leading-none text-white transition hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white" onClick={closeViewer} aria-label="Close image viewer">
              <span>×</span>
            </button>

            <button type="button" className="absolute left-0 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/40 text-white transition hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white" onClick={showPreviousImage} aria-label="Previous image">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button type="button" className="absolute right-0 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/40 text-white transition hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white" onClick={showNextImage} aria-label="Next image">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {isJoinFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm md:p-6" role="presentation" onClick={closeJoinForm}>
          <div className="relative flex max-h-[90vh] w-full max-w-lg flex-col overflow-y-auto rounded-lg bg-white p-6 border border-border md:p-8" role="dialog" aria-modal="true" aria-label="Join the alumni network" onClick={(event) => event.stopPropagation()}>
            <button type="button" onClick={closeJoinForm} aria-label="Close alumni registration form" className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-md text-2xl leading-none text-text-muted transition hover:text-text-main focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">×</button>

            {isSubmitted ? (
              <div className="py-10 text-center">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-xl font-bold text-primary">✓</div>
                <h2 className="mt-5 text-xl font-bold text-primary">Thank you for joining us</h2>
                <p className="mt-3 text-sm text-text-muted">Your alumni details have been recorded. Our team will be in touch soon.</p>
                <button type="button" onClick={closeJoinForm} className="mt-6 rounded-[var(--radius-sm)] bg-primary px-6 py-2.5 font-semibold text-white transition-colors hover:bg-primary/90 min-h-[44px]">Done</button>
              </div>
            ) : (
              <div>
                <div className="pb-4 pr-8">
                  <h2 className="text-xl font-bold text-primary">Join the Alumni Network</h2>
                  <p className="mt-2 text-xs leading-relaxed text-text-muted">Share your details so we can celebrate your journey and keep you connected with the GBR community.</p>
                </div>

                <form className="flex flex-col gap-4" onSubmit={handleJoinSubmit}>
                  <label>
                    <span className="mb-1 block text-xs font-semibold text-primary">Profile photo</span>
                    <input type="file" accept="image/*" required onChange={(event) => setPhotoName(event.target.files?.[0]?.name ?? "")} className="block w-full rounded-[var(--radius-sm)] border border-border bg-background px-3 py-1.5 text-xs text-text-muted file:mr-3 file:rounded-[var(--radius-sm)] file:border-0 file:bg-primary file:px-3 file:py-1.5 file:font-semibold file:text-white hover:file:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20" />
                    {photoName && <span className="mt-1 block text-xs text-text-muted">Selected: {photoName}</span>}
                  </label>

                  <label>
                    <span className="mb-1 block text-xs font-semibold text-primary">Full name</span>
                    <input type="text" name="name" required placeholder="Your full name" className="w-full rounded-[var(--radius-sm)] border border-border bg-background px-3 py-2 text-sm text-text-main outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
                  </label>
                  <label>
                    <span className="mb-1 block text-xs font-semibold text-primary">Graduating year</span>
                    <input type="number" name="graduatingYear" required min="1950" max="2100" placeholder="e.g. 2015" className="w-full rounded-[var(--radius-sm)] border border-border bg-background px-3 py-2 text-sm text-text-main outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 tabular-nums" />
                  </label>
                  <label>
                    <span className="mb-1 block text-xs font-semibold text-primary">Current position</span>
                    <input type="text" name="position" required placeholder="e.g. Software Engineer" className="w-full rounded-[var(--radius-sm)] border border-border bg-background px-3 py-2 text-sm text-text-main outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
                  </label>
                  <label>
                    <span className="mb-1 block text-xs font-semibold text-primary">Place</span>
                    <input type="text" name="place" required placeholder="City, country" className="w-full rounded-[var(--radius-sm)] border border-border bg-background px-3 py-2 text-sm text-text-main outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
                  </label>
                  <label>
                    <span className="mb-1 block text-xs font-semibold text-primary">Email address</span>
                    <input type="email" name="email" required placeholder="you@example.com" className="w-full rounded-[var(--radius-sm)] border border-border bg-background px-3 py-2 text-sm text-text-main outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
                  </label>
                  <div className="border-t border-border pt-4">
                    <button type="submit" className="w-full rounded-[var(--radius-sm)] bg-primary px-6 py-2.5 font-semibold text-white transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary min-h-[44px]">Submit alumni details</button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
