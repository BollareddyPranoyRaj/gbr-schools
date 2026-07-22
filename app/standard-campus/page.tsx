import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E.M.S. Campus | GBR Group of Schools",
  description: "Rooted in a 40-year legacy, the GBR E.M.S. Campus offers expansive grounds, natural ventilation, and a vibrant, culturally rich student life.",
};

export default function StandardCampusPage() {
  return (
    <main className="min-h-screen bg-background">
      
      {/* 1. HERITAGE & SCALE HERO SECTION */}
      <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center text-center">
        {/* Background Image */}
        <Image
          src="/ems-campus-hero.jpg" 
          alt="GBR E.M.S. Campus Grounds"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Clean gradient overlay matching AC style */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-4 drop-shadow-md">
            The Heart of GBR Schools
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
            Rooted in Tradition. <br /> Focused on the Future.
          </h1>
          <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Spacious, vibrant, and rich in history. The E.M.S. Campus provides a holistic, active environment where academic excellence meets traditional values.
          </p>
        </div>
      </section>

      {/* 2. 40-YEAR LEGACY BANNER (Now using the clean, light palette) */}
      <section className="bg-white py-16 border-b border-gray-100 shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="py-4 md:py-0">
              <h3 className="text-5xl font-extrabold text-primary mb-2">40+</h3>
              <p className="text-sm font-semibold text-text-muted uppercase tracking-widest">Years of Excellence</p>
            </div>
            <div className="py-4 md:py-0">
              <h3 className="text-5xl font-extrabold text-primary mb-2">10k+</h3>
              <p className="text-sm font-semibold text-text-muted uppercase tracking-widest">Alumni Worldwide</p>
            </div>
            <div className="py-4 md:py-0">
              <h3 className="text-5xl font-extrabold text-primary mb-2">100%</h3>
              <p className="text-sm font-semibold text-text-muted uppercase tracking-widest">Dedication to Growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE NATURAL ENVIRONMENT (Z-Pattern matching AC Campus rounded-3xl) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-24">
        
        {/* Block 1: Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 lg:pr-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              Naturally Bright & Spacious
            </h2>
            <p className="text-lg text-text-muted leading-relaxed mb-6">
              Our standard campus classrooms are architecturally designed to maximize cross-ventilation and natural sunlight. This open, airy environment connects students to the natural world and promotes an energetic, alert atmosphere for learning.
            </p>
          </div>
          <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/ems-classroom.jpg"
              alt="Airy naturally ventilated classroom"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Block 2: Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/ems-playground.jpg"
              alt="Massive outdoor sports playground"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="lg:pl-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              Room to Run, Play, and Grow
            </h2>
            <p className="text-lg text-text-muted leading-relaxed mb-6">
              Physical education and active play are foundational to the E.M.S. experience. We boast some of the largest outdoor facilities in the region, providing students with the sheer space needed for massive sports meets, daily athletics, and large-scale morning assemblies.
            </p>
          </div>
        </div>
      </section>

      {/* 4. VIBRANT STUDENT LIFE (Bento Grid matching AC Campus styles) */}
      <section className="bg-gray-50 py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">A Culture of Celebration</h2>
            <p className="text-lg text-text-muted">
              From our grand Annual Sports Meets to vibrant cultural festivals like Dussehra and Pongal, campus life here is dynamic, colorful, and highly collaborative.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
            
            {/* Cultural Events - Spans 2 columns */}
            <div className="md:col-span-2 relative rounded-3xl overflow-hidden group shadow-md">
              <Image src="/ems-culture.jpg" alt="Students celebrating cultural festivals" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Rich Cultural Heritage</h3>
                <p className="text-gray-200">Embracing our roots through grand festival celebrations and arts.</p>
              </div>
            </div>

            {/* Athletics Square */}
            <div className="relative rounded-3xl overflow-hidden group shadow-md">
              <Image src="/ems-sports.jpg" alt="Annual Sports Meet" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">Competitive Spirit</h3>
                <p className="text-white/90 text-sm">Extensive athletics programs and annual sports days.</p>
              </div>
            </div>

            {/* Community Square (Matching AC text card style) */}
            <div className="relative rounded-3xl overflow-hidden shadow-md bg-white p-8 flex flex-col justify-center border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <span className="text-accent text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Strong Community</h3>
              <p className="text-text-muted text-sm">A deeply connected network of students, parents, and seasoned faculty members.</p>
            </div>

            {/* Hands-on Learning - Spans 2 columns */}
            <div className="md:col-span-2 relative rounded-3xl overflow-hidden group shadow-md">
              <Image src="/ems-activity.jpg" alt="Hands-on learning activities" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Active, Hands-on Learning</h3>
                <p className="text-gray-200">Science fairs, field trips, and interactive outdoor education.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION (Matching AC Campus styling) */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-primary mb-6">
            Become Part of the Legacy
          </h2>
          <p className="text-xl text-text-muted mb-10">
            Join thousands of successful alumni who started their journey at the GBR E.M.S. Campus.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admissions"
              className="bg-accent text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-accent/90 hover:-translate-y-1 transition-all"
            >
              Start the Admission Process
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
