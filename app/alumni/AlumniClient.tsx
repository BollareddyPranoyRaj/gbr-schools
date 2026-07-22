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
    <main className="min-h-screen w-full bg-background">
      <div className="w-full bg-gradient-to-r from-blue-900 to-blue-800 px-6 py-20 text-white md:px-12 lg:px-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-amber-400">GBR Alumni Community</p>
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">Our Legacy, Our Pride</h1>
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-blue-100 md:text-xl">
            From our classrooms to communities across the world, GBR alumni carry forward a shared spirit of learning, leadership, and service.
          </p>
          <button type="button" onClick={() => setIsJoinFormOpen(true)} className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-8 py-3 font-bold text-blue-950 transition-colors duration-300 hover:bg-amber-500">
            Join the Alumni Network <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <section aria-label="GBR alumni gallery">
        <div className="mx-auto mb-10 max-w-7xl px-4 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">GBR alumni</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Legacy, Our Pride</h1>
        </div>

        <div className="relative flex w-full flex-row gap-6 overflow-x-auto scroll-smooth pb-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {alumniProfiles.map((profile, index) => (
            <button
              key={profile.imageId}
              type="button"
              onClick={() => setSelectedImageIndex(index)}
              className="w-[220px] shrink-0 snap-start overflow-hidden rounded-2xl bg-white shadow-md transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4 md:w-[250px]"
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
              <span className="block bg-primary/90 p-3 text-left text-white">
                <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-accent">Alumni voice</span>
                <span className="mt-1 block text-xs leading-5">“{profile.voice}”</span>
              </span>
            </button>
          ))}
        </div>
      </section>

      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" role="presentation" onClick={closeViewer}>
          <div
            className="relative h-[85vh] w-full max-w-5xl"
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
              className="object-contain"
              priority
              quality="auto"
              format="auto"
            />

            <button type="button" className="absolute right-0 top-0 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/35 text-3xl leading-none text-white transition hover:bg-black/55 focus:outline-none focus:ring-2 focus:ring-white" onClick={closeViewer} aria-label="Close image viewer">
              <span>×</span>
            </button>

            <button type="button" className="absolute left-0 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/35 text-white transition hover:bg-black/55 focus:outline-none focus:ring-2 focus:ring-white" onClick={showPreviousImage} aria-label="Previous image">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button type="button" className="absolute right-0 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/35 text-white transition hover:bg-black/55 focus:outline-none focus:ring-2 focus:ring-white" onClick={showNextImage} aria-label="Next image">
              <svg className="h-5 w-5" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {isJoinFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" role="presentation" onClick={closeJoinForm}>
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8" role="dialog" aria-modal="true" aria-label="Join the alumni network" onClick={(event) => event.stopPropagation()}>
            <button type="button" onClick={closeJoinForm} aria-label="Close alumni registration form" className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full text-2xl text-text-muted transition hover:bg-primary/5 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary">×</button>

            {isSubmitted ? (
              <div className="py-10 text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-2xl text-primary">✓</div>
                <h2 className="mt-5 text-2xl font-bold text-primary">Thank you for joining us</h2>
                <p className="mt-3 text-text-muted">Your alumni details have been recorded. Our team will be in touch soon.</p>
                <button type="button" onClick={closeJoinForm} className="mt-7 rounded-md bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary/90">Done</button>
              </div>
            ) : (
              <>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">GBR Alumni Community</p>
                <h2 className="mt-3 text-2xl font-bold text-primary sm:text-3xl">Join the Alumni Network</h2>
                <p className="mt-3 max-w-xl text-text-muted">Share your latest details so we can celebrate your journey and keep you connected with the GBR community.</p>

                <form className="mt-7 grid gap-5 sm:grid-cols-2" onSubmit={handleJoinSubmit}>
                  <label className="sm:col-span-2">
                    <span className="mb-2 block text-sm font-semibold text-primary">Profile photo</span>
                    <input type="file" accept="image/*" required onChange={(event) => setPhotoName(event.target.files?.[0]?.name ?? "")} className="block w-full rounded-md border border-gray-300 bg-background px-3 py-2 text-sm text-text-muted file:mr-4 file:rounded-md file:border-0 file:bg-primary file:px-4 file:py-2 file:font-semibold file:text-white hover:file:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20" />
                    {photoName && <span className="mt-2 block text-xs text-text-muted">Selected: {photoName}</span>}
                  </label>

                  <label>
                    <span className="mb-2 block text-sm font-semibold text-primary">Full name</span>
                    <input type="text" name="name" required placeholder="Your full name" className="w-full rounded-md border border-gray-300 bg-background px-4 py-3 text-text-main outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
                  </label>
                  <label>
                    <span className="mb-2 block text-sm font-semibold text-primary">Graduating year</span>
                    <input type="number" name="graduatingYear" required min="1950" max="2100" placeholder="e.g. 2015" className="w-full rounded-md border border-gray-300 bg-background px-4 py-3 text-text-main outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
                  </label>
                  <label>
                    <span className="mb-2 block text-sm font-semibold text-primary">Current position</span>
                    <input type="text" name="position" required placeholder="e.g. Software Engineer" className="w-full rounded-md border border-gray-300 bg-background px-4 py-3 text-text-main outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
                  </label>
                  <label>
                    <span className="mb-2 block text-sm font-semibold text-primary">Place</span>
                    <input type="text" name="place" required placeholder="City, country" className="w-full rounded-md border border-gray-300 bg-background px-4 py-3 text-text-main outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
                  </label>
                  <label className="sm:col-span-2">
                    <span className="mb-2 block text-sm font-semibold text-primary">Email address</span>
                    <input type="email" name="email" required placeholder="you@example.com" className="w-full rounded-md border border-gray-300 bg-background px-4 py-3 text-text-main outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
                  </label>
                  <button type="submit" className="sm:col-span-2 rounded-md bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Submit alumni details</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
