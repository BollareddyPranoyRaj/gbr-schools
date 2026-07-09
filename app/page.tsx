import React from 'react';
import { ArrowRight, Calendar, GraduationCap, School, BookOpen, Users } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-900">
      {/* 1. Global Announcement Ticker */}
      <div className="bg-[#0B2046] text-white py-2 px-4 text-center text-sm font-medium border-b border-white/10">
        <span className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          Admissions Open for Academic Year 2026-2027 — Secure Your Seat Today
        </span>
      </div>

      {/* 2. Global Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 px-6 md:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#0B2046] flex items-center justify-center rounded text-amber-400 font-bold text-xl font-serif">
            G
          </div>
          <div>
            <span className="text-[#0B2046] font-bold text-lg block tracking-tight font-serif">GBR INSTITUTIONS</span>
            <span className="text-gray-500 text-xs block -mt-1 tracking-widest uppercase">Legacy Since 1979</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="/schools" className="hover:text-[#0B2046] transition">Our Schools</a>
          <a href="/junior-college" className="hover:text-[#0B2046] transition">Junior College</a>
          <a href="/degree-pg/programs-eligibility-fee" className="hover:text-[#0B2046] transition">Programs & Fees</a>
          <a href="/academic-calendar" className="hover:text-[#0B2046] transition">Academic Calendar</a>
          <a href="/admissions" className="hover:text-[#0B2046] transition text-[#0B2046] font-semibold">Admissions</a>
        </nav>

        <a href="/admissions" className="bg-[#0B2046] text-white px-5 py-2.5 rounded text-sm font-semibold hover:bg-opacity-90 transition shadow-sm">
          Enquire Now
        </a>
      </header>

      {/* 3. Immersive Hero Stage with Background Video Layout */}
      <section className="relative w-full h-[85vh] overflow-hidden bg-[#0B2046]">
        {/* HTML5 Full-Bleed High-Quality Streaming Video Engine */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-60"
        >
          <source 
            src="https://gbr-bucket.s3.amazonaws.com/hero-loop.mp4" 
            type="video/mp4" 
          />
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/30 via-transparent to-[#0B2046]/90 z-10" />

        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-center px-6 pb-20">
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold font-serif max-w-5xl tracking-tight leading-none">
            Empowering Generations <br />Through Quality Education
          </h1>
          <p className="text-white/90 text-lg md:text-2xl mt-6 font-light max-w-2xl">
            From Early Childhood AC Classrooms to Advanced Postgraduate Engineering & Teacher Training Tracks.
          </p>
        </div>
      </section>

      {/* 4. Strategic Institutional Entry Points (Segmented Cards Layout) */}
      <section className="relative z-30 max-w-7xl mx-auto px-6 -mt-28 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <a href="/schools" className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 group hover:-translate-y-1 transition duration-300 flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="w-12 h-12 bg-blue-50 text-[#0B2046] rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#0B2046] group-hover:text-white transition duration-300">
                <School size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-serif">GBR Schools</h3>
              <p className="text-gray-500 text-sm mt-2">Premium Child-Centric AC & Non-AC Schooling streams.</p>
            </div>
            <span className="text-sm font-semibold text-[#0B2046] inline-flex items-center gap-1 mt-4">
              Explore Schools <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
            </span>
          </a>

          <a href="/junior-college" className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 group hover:-translate-y-1 transition duration-300 flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center mb-5 group-hover:bg-amber-600 group-hover:text-white transition duration-300">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-serif">Junior College</h3>
              <p className="text-gray-500 text-sm mt-2">Intermediate MPC, BiPC, and CEC specialized streams.</p>
            </div>
            <span className="text-sm font-semibold text-amber-600 inline-flex items-center gap-1 mt-4">
              Explore Intermediate <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
            </span>
          </a>

          <a href="/degree-pg/programs-eligibility-fee" className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 group hover:-translate-y-1 transition duration-300 flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-5 group-hover:bg-purple-600 group-hover:text-white transition duration-300">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-serif">Degree & PG College</h3>
              <p className="text-gray-500 text-sm mt-2">Undergraduate Programs & Advanced PG Tracks (MCA, MBA).</p>
            </div>
            <span className="text-sm font-semibold text-purple-600 inline-flex items-center gap-1 mt-4">
              Explore Higher Ed <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
            </span>
          </a>

          <a href="/teacher-education" className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 group hover:-translate-y-1 transition duration-300 flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white transition duration-300">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-serif">Teacher Education</h3>
              <p className="text-gray-500 text-sm mt-2">NCTE-Approved Professional B.Ed and D.Ed training courses.</p>
            </div>
            <span className="text-sm font-semibold text-emerald-600 inline-flex items-center gap-1 mt-4">
              Explore Programs <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
            </span>
          </a>

        </div>
      </section>

      {/* 5. Core Operational Metrics Grid Layout */}
      <section className="bg-gray-50 border-y border-gray-100 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <span className="block text-4xl md:text-5xl font-bold text-[#0B2046] font-serif">45+</span>
            <span className="block text-gray-500 text-sm mt-1 uppercase tracking-wider">Years Legacy</span>
          </div>
          <div>
            <span className="block text-4xl md:text-5xl font-bold text-[#0B2046] font-serif">10,000+</span>
            <span className="block text-gray-500 text-sm mt-1 uppercase tracking-wider">Alumni Base</span>
          </div>
          <div>
            <span className="block text-4xl md:text-5xl font-bold text-[#0B2046] font-serif">100%</span>
            <span className="block text-gray-500 text-sm mt-1 uppercase tracking-wider">Placement Support</span>
          </div>
          <div>
            <span className="block text-4xl md:text-5xl font-bold text-[#0B2046] font-serif">NCTE</span>
            <span className="block text-gray-500 text-sm mt-1 uppercase tracking-wider">Approved Courses</span>
          </div>
        </div>
      </section>
    </main>
  );
}