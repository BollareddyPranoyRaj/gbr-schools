import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium A.C. Campus | GBR Group of Schools",
  description: "Experience a global standard of excellence with our centralized air-conditioned campus, interactive smart boards, and premium facilities.",
};

export default function ACCampusPage() {
  return (
    <main className="min-h-screen bg-background">
      
      {/* 1. EDITORIAL HERO SECTION */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-end pb-12 sm:pb-24">
        {/* Background Image - Replace src with your actual Cloudinary URL or local image */}
        <Image
          src="/ac-campus-hero.jpg" 
          alt="GBR A.C. Campus"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark gradient overlay to ensure text readability if needed */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Frosted Glass Text Card */}
          <div className="max-w-xl bg-white/85 backdrop-blur-md p-8 sm:p-12 rounded-2xl shadow-2xl border border-white/20">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-3">
              Premium Tier
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-primary leading-tight mb-6">
              A Global Standard of Excellence.
            </h1>
            <p className="text-lg text-text-muted mb-8 leading-relaxed">
              Step into a learning environment designed for ultimate focus, comfort, and technological integration. The GBR A.C. Campus redefines modern education.
            </p>
            <Link
              href="/admissions"
              className="inline-block bg-primary text-white font-semibold px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Apply for A.C. Campus
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Z-PATTERN EXPLANATION BLOCKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-24">
        
        {/* Block 1: Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/ac-classroom.jpg"
              alt="Students in AC Classroom"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="lg:pl-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
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
                <span className="w-2 h-2 rounded-full bg-accent" /> HEPA-filtered air circulation
              </li>
            </ul>
          </div>
        </div>

        {/* Block 2: Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 lg:pr-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
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
                <span className="w-2 h-2 rounded-full bg-accent" /> High-speed campus-wide WiFi
              </li>
            </ul>
          </div>
          <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/ac-smartboard.jpg"
              alt="Interactive Smart Board in use"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* 3. BENTO BOX FACILITIES GRID */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Premium Campus Facilities</h2>
            <p className="text-lg text-text-muted">
              Every inch of the A.C. Campus is optimized for a superior educational experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
            
            {/* Large Feature - Spans 2 columns on tablet/desktop */}
            <div className="md:col-span-2 relative rounded-3xl overflow-hidden group shadow-md">
              <Image src="/facilities-labs.jpg" alt="Advanced Labs" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Advanced Science & Tech Labs</h3>
                <p className="text-gray-200">Fully equipped for modern curriculum demands.</p>
              </div>
            </div>

            {/* Standard Square */}
            <div className="relative rounded-3xl overflow-hidden group shadow-md bg-white p-8 flex flex-col justify-center border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                {/* SVG Icon Placeholder */}
                <span className="text-accent text-2xl">❄️</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">100% Centralized A/C</h3>
              <p className="text-text-muted text-sm">Quiet, efficient cooling throughout all halls and classrooms.</p>
            </div>

            {/* Standard Square */}
            <div className="relative rounded-3xl overflow-hidden group shadow-md bg-primary p-8 flex flex-col justify-center text-white">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🪑</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Ergonomic Seating</h3>
              <p className="text-primary-foreground text-sm">Premium furniture designed for posture and long-term comfort.</p>
            </div>

            {/* Wide Feature - Spans 2 columns */}
            <div className="md:col-span-2 relative rounded-3xl overflow-hidden group shadow-md">
              <Image src="/facilities-library.jpg" alt="Premium Library" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Digital Library & Resource Center</h3>
                <p className="text-gray-200">A quiet, premium space for research and collaboration.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-primary mb-6">
            Ready to secure their future?
          </h2>
          <p className="text-xl text-text-muted mb-10">
            Admissions for the upcoming academic year at the GBR A.C. Campus are currently open. Seats are highly limited.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admissions"
              className="bg-accent text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-accent/90 hover:-translate-y-1 transition-all"
            >
              Begin Application
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
