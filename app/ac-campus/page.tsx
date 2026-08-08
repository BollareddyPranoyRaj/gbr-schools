import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium A.C. Campus | GBR Group of Schools",
  description: "Experience a global standard of excellence with our centralized air-conditioned campus, interactive smart boards, and premium facilities.",
};

export default function ACCampusPage() {
  const specialFeatures = [
    "1:20 teacher student ratio",
    "Digital class rooms with interactive panel board teaching",
    "Regular monitoring on home work",
    "Special coaching on competitive Examinations",
    "Abacus and Vedic math training",
    "Weekend activities for improving child's skill",
    "Regular Parent-Teacher Meetings",
    "VI-IX IIT Orientation Programme",
    "AC Class Rooms with CC TV monitoring",
    "Exclusive language labs and seminars",
    "Special drive on Text book Reading",
    "Hand Writing Classes and many more...",
    "Student App Management",
    "Special focus on academically low Performers by adopting Students.",
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* 1. EDITORIAL HERO SECTION */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-end pb-12 sm:pb-24">
        <Image
          src="/ac-campus-hero.jpg" 
          alt="GBR A.C. Campus"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl bg-white/95 backdrop-blur-md p-8 sm:p-12 rounded-lg border border-border shadow-2xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent bg-accent/10 px-3 py-1 rounded-full">
                Premium Tier
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-primary bg-primary/10 px-3 py-1 rounded-full">
                Class: NUR to X (AC)
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-primary leading-tight mb-6 [text-wrap:balance]">
              A Global Standard of Excellence.
            </h1>
            <p className="text-lg text-text-muted mb-8 leading-relaxed">
              Step into a learning environment designed for ultimate focus, comfort, and technological integration. The GBR A.C. Campus redefines modern education.
            </p>
            <Link
              href="/admissions"
              className="inline-block bg-primary text-white font-semibold px-8 py-4 rounded-[var(--radius-sm)] hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Apply for A.C. Campus
            </Link>
          </div>
        </div>
      </section>

      {/* 2. CURRICULUM SECTION (NEW) */}
      <section className="py-24 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-3">Academic Structure</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6 [text-wrap:balance]">
            CBSE Based Integrated Pattern
          </h2>
          <p className="text-lg text-text-muted leading-relaxed max-w-4xl mx-auto mb-16">
            Uniquely designed to foster students&apos; enquiry skills, intra-disciplinary connections, communicative abilities, and self-learning skills—everything required for the 21st-century globalized world of work and life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pre-KG */}
            <div className="bg-white rounded-xl p-8 border border-border shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold text-xl mb-6">
                Pre-KG
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Early Years</h3>
              <p className="text-text-muted font-medium text-center">
                Fun Oriented Integrated Curriculum
              </p>
            </div>

            {/* I to V */}
            <div className="bg-white rounded-xl p-8 border border-border shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold text-xl mb-6">
                I to V
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Primary</h3>
              <p className="text-text-muted font-medium text-center">
                CBSE Based Integrated Curriculum
              </p>
            </div>

            {/* VI to X */}
            <div className="bg-white rounded-xl p-8 border border-border shadow-sm flex flex-col items-center relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold uppercase px-3 py-1 rounded-bl-lg">
                IIT Orientation
              </div>
              <div className="h-16 w-16 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl mb-6">
                VI-X
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">High School</h3>
              <p className="text-text-muted font-medium text-center mb-3">
                SSC + CBSE + ICSE Integration
              </p>
              <p className="text-sm text-text-main font-semibold bg-surface-alt px-4 py-2 rounded-full w-full">
                Integrated IIT Orientation Programme
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Z-PATTERN EXPLANATION BLOCKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-24 border-b border-border">
        
        {/* Block 1: Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border">
            <Image
              src="https://res.cloudinary.com/dkoxrayf2/image/upload/f_auto,q_auto,w_800,c_scale/v1786197264/ChatGPT_Image_Aug_8_2026_07_23_21_PM_pqxxhl.png"
              alt="Students in AC Classroom"
              fill
              className="object-cover transition-opacity duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="lg:pl-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6 [text-wrap:balance]">
              Climate-Controlled Focus
            </h2>
            <p className="text-lg text-text-muted leading-relaxed mb-6">
              Research shows that temperature plays a critical role in cognitive function. Our completely centralized air-conditioned campus ensures that students remain comfortable, focused, and energized regardless of the weather outside.
            </p>
            <ul className="space-y-3 text-text-muted">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent" /> Consistent 22-24°C environment
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent" /> CC TV monitoring in all AC rooms
              </li>
            </ul>
          </div>
        </div>

        {/* Block 2: Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 lg:pr-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6 [text-wrap:balance]">
              Technologically Immersive
            </h2>
            <p className="text-lg text-text-muted leading-relaxed mb-6">
              We have replaced traditional chalkboards with state-of-the-art interactive smart boards in every single A.C. classroom. This allows our educators to bring complex concepts to life through 3D models, rich media, and instant internet access.
            </p>
            <ul className="space-y-3 text-text-muted">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent" /> Interactive touchscreen boards
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent" /> Exclusive language labs and seminars
              </li>
            </ul>
          </div>
          <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-lg overflow-hidden border border-border">
            <Image
              src="/ac-smartboard.jpg"
              alt="Interactive Smart Board in use"
              fill
              className="object-cover transition-opacity duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* 4. SPECIAL FEATURES LIST (NEW) */}
      <section className="py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Special Features</h2>
            <p className="text-lg text-text-muted">
              The A.C. Campus provides comprehensive support, tools, and training to ensure every student succeeds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
            {specialFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-lg border border-border shadow-sm">
                <div className="shrink-0 mt-1">
                  <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-text-main font-medium text-sm leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-24 bg-white border-t border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-primary mb-6 [text-wrap:balance]">
            Ready to secure their future?
          </h2>
          <p className="text-xl text-text-muted mb-10">
            Admissions for the upcoming academic year at the GBR A.C. Campus are currently open for Classes NUR to X. Seats are highly limited.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admissions"
              className="bg-accent text-white font-bold text-lg px-8 py-4 rounded-[var(--radius-sm)] hover:bg-accent/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Begin Application
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}