import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E.M.S Campus | GBR Group of Schools",
  description: "Rooted in a 40-year legacy, the GBR E.M.S Campus offers expansive grounds, natural ventilation, and a vibrant, culturally rich student life.",
};

export default function StandardCampusPage() {
  const specialFeatures = [
    "1:30 teacher-student ratio",
    "Exclusive campus for Nursery to U.K.G. Kids",
    "Abacus training for primary",
    "Regular Parent-Teacher Meetings",
    "VI-IX IIT Foundation Programme along with SSC",
    "CCTV Monitoring",
    "Hand writing classes",
    "Every day Games period",
    "Weekend activities",
    "Special focus on law of English and many more...",
    "Student App Management",
    "Special focus on academically low Performers by adopting Students.",
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* 1. HERITAGE & SCALE HERO SECTION */}
      <section className="relative w-full min-h-[85vh] lg:h-[80vh] lg:min-h-[600px] flex items-center justify-center text-center py-24 lg:py-0">
        {/* Background Image */}
        <Image
          src="https://res.cloudinary.com/dkoxrayf2/image/upload/f_auto,q_auto,w_1920,c_scale/v1786197181/WhatsApp_Image_2026-08-08_at_19.20.55_kxfrm3.jpg" 
          alt="GBR E.M.S Campus Grounds"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Clean gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/35" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent bg-black/40 border border-accent/20 px-4 py-1.5 rounded-full backdrop-blur-sm">
              The Heart of GBR Schools
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-white bg-primary/80 border border-primary/20 px-4 py-1.5 rounded-full backdrop-blur-sm">
              Class: NUR to X (NON AC)
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight mb-6 [text-wrap:balance]">
            Rooted in Tradition. <br /> Focused on the Future.
          </h1>
          <p className="text-base sm:text-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Spacious, vibrant, and rich in history. The E.M.S Campus provides a holistic, active environment where academic excellence meets traditional values.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <Link
              href="/admissions"
              className="bg-accent text-white text-center font-semibold px-8 py-4 rounded-[var(--radius-sm)] hover:bg-accent/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary w-full sm:w-auto shadow-lg"
            >
              Apply for E.M. School
            </Link>
            <Link
              href="/transport"
              className="bg-white/10 border border-white/20 text-white text-center font-semibold px-8 py-4 rounded-[var(--radius-sm)] hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white w-full sm:w-auto backdrop-blur-sm"
            >
              Explore Bus Routes
            </Link>
          </div>
        </div>
      </section>

      {/* 2. 40-YEAR LEGACY BANNER */}
      <section className="bg-white py-16 border-b border-border relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="py-4 md:py-0">
              <h3 className="text-5xl font-bold text-primary mb-2 tabular-nums">40+</h3>
              <p className="text-sm font-semibold text-text-muted uppercase tracking-widest">Years of Excellence</p>
            </div>
            <div className="py-4 md:py-0">
              <h3 className="text-5xl font-bold text-primary mb-2 tabular-nums">10k+</h3>
              <p className="text-sm font-semibold text-text-muted uppercase tracking-widest">Alumni Worldwide</p>
            </div>
            <div className="py-4 md:py-0">
              <h3 className="text-5xl font-bold text-primary mb-2 tabular-nums">100%</h3>
              <p className="text-sm font-semibold text-text-muted uppercase tracking-widest">Dedication to Growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CURRICULUM SECTION (NEW) */}
      <section className="py-24 bg-surface-alt border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-3">Curriculum Focus</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6 [text-wrap:balance]">
            Igniting Unique Talents & Skills
          </h2>
          <p className="text-lg text-text-muted leading-relaxed max-w-4xl mx-auto mb-16">
            Specially designed to focus on igniting the unique talents and skills of the students at very early stages &amp; instill in them a habit of enhancement in &quot;LSRW&quot; Skills which develop from a young stage.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pre-KG */}
            <div className="bg-white rounded-xl p-8 border border-border shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold text-xl mb-6">
                Pre-KG
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Early Years</h3>
              <p className="text-text-muted font-medium text-center">
                Fun Based Integrated Curriculum
              </p>
            </div>

            {/* I to V */}
            <div className="bg-white rounded-xl p-8 border border-border shadow-sm flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold text-xl mb-6">
                I - V
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Primary</h3>
              <p className="text-text-muted font-medium text-center">
                Comprehensive Evaluation Based Integrated Curriculum
              </p>
            </div>

            {/* VI to X */}
            <div className="bg-white rounded-xl p-8 border border-border shadow-sm flex flex-col items-center relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold uppercase px-3 py-1 rounded-bl-lg">
                SSC Based
              </div>
              <div className="h-16 w-16 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl mb-6">
                VI - X
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">High School</h3>
              <p className="text-text-muted font-medium text-center mb-3">
                SSC Based Integrated Curriculum
              </p>
              <p className="text-sm text-text-main font-semibold bg-surface px-4 py-2 rounded-full w-full">
                IIT Foundation Programme
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE NATURAL ENVIRONMENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-24 border-b border-border">
        
        {/* Block 1: Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 lg:pr-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6 [text-wrap:balance]">
              Naturally Bright & Spacious
            </h2>
            <p className="text-lg text-text-muted leading-relaxed mb-6">
              Our standard campus classrooms are architecturally designed to maximize cross-ventilation and natural sunlight. This open, airy environment connects students to the natural world and promotes an energetic, alert atmosphere for learning.
            </p>
            <ul className="space-y-3 text-text-muted">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent" /> CCTV Monitoring for safety
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent" /> Exclusive campus for Nursery to U.K.G. Kids
              </li>
            </ul>
          </div>
          <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-lg overflow-hidden border border-border">
            <Image
              src="https://res.cloudinary.com/dkoxrayf2/image/upload/f_auto,q_auto,w_800,c_scale/v1786197178/WhatsApp_Image_2026-08-08_at_19.20.40_nek0hp.jpg"
              alt="Airy naturally ventilated classroom"
              fill
              className="object-cover transition-opacity duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Block 2: Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border">
            <Image
              src="https://res.cloudinary.com/dkoxrayf2/image/upload/f_auto,q_auto,w_800,c_scale/v1786197481/ChatGPT_Image_Aug_8_2026_07_26_28_PM_q6ycej.png"
              alt="Students performing science experiments in laboratory"
              fill
              className="object-cover transition-opacity duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="lg:pl-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6 [text-wrap:balance]">
              Practical & Experiential Learning
            </h2>
            <p className="text-lg text-text-muted leading-relaxed mb-6">
              Theory comes to life through hands-on experimentation. Our campus features modern, fully-equipped science laboratories where students engage in practical research. Under the close guidance of our qualified science educators, students develop vital analytical, problem-solving, and scientific inquiry skills.
            </p>
            <ul className="space-y-3 text-text-muted">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent" /> Modern lab equipment and safety protocols
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent" /> Regular guided experiment periods for deep learning
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. SPECIAL FEATURES LIST (NEW) */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Special Features</h2>
            <p className="text-lg text-text-muted">
              Discover the dedicated programs and facilities that make the E.M. School experience unique.
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

      {/* 6. CALL TO ACTION */}
      <section className="py-24 bg-white border-t border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-primary mb-6 [text-wrap:balance]">
            Become Part of the Legacy
          </h2>
          <p className="text-xl text-text-muted mb-10">
            Admissions for the upcoming academic year at the GBR E.M. School are currently open for Classes NUR to X.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admissions"
              className="bg-accent text-white font-bold text-lg px-8 py-4 rounded-[var(--radius-sm)] hover:bg-accent/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Start the Admission Process
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}