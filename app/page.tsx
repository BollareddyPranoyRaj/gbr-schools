import React from 'react';
import { ArrowRight, GraduationCap, School, BookOpen, Users, HeartPulse, Baby, Briefcase } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-900">
      
      {/* 1. Cinematic Hero Section */}
      <section className="relative w-full h-[85vh] overflow-hidden bg-[#0B2046]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-60"
        >
          <source 
            src="https://www.w3schools.com/html/mov_bbb.mp4" 
            type="video/mp4" 
          />
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 via-[#0B2046]/40 to-[#0B2046] z-10" />

        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-center px-6 pb-20">
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold font-serif max-w-5xl tracking-tight leading-none">
            Empowering Generations <br />Through Quality Education
          </h1>
          <p className="text-white/90 text-lg md:text-2xl mt-6 font-light max-w-2xl">
            From Playschool AC Classrooms to Advanced Postgraduate & Nursing Tracks.
          </p>
        </div>
      </section>

      {/* 2. Core Institutions Grid */}
      <section className="relative z-30 max-w-7xl mx-auto px-6 -mt-28 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <Link href="/schools" className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 group hover:-translate-y-1 transition duration-300 flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                <Baby size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-serif">GBR Schools</h3>
              <p className="text-gray-500 text-sm mt-2">Playschool, Primary & High School. Featuring state-of-the-art AC and traditional Non-AC campuses.</p>
            </div>
            <span className="text-sm font-semibold text-blue-600 inline-flex items-center gap-1 mt-4">
              Explore Schools <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
            </span>
          </Link>

          <Link href="/junior-college" className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 group hover:-translate-y-1 transition duration-300 flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center mb-5 group-hover:bg-amber-600 group-hover:text-white transition duration-300">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-serif">Junior College</h3>
              <p className="text-gray-500 text-sm mt-2">Premium Intermediate education (MPC, BiPC, CEC) with integrated competitive coaching.</p>
            </div>
            <span className="text-sm font-semibold text-amber-600 inline-flex items-center gap-1 mt-4">
              Explore Intermediate <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
            </span>
          </Link>

          <Link href="/degree-pg/programs-eligibility-fee" className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 group hover:-translate-y-1 transition duration-300 flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-5 group-hover:bg-purple-600 group-hover:text-white transition duration-300">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-serif">Degree College</h3>
              <p className="text-gray-500 text-sm mt-2">Comprehensive Undergraduate programs (B.Sc, B.Com, B.A) preparing students for modern careers.</p>
            </div>
            <span className="text-sm font-semibold text-purple-600 inline-flex items-center gap-1 mt-4">
              Explore UG Programs <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
            </span>
          </Link>

          <Link href="/degree-pg/programs-eligibility-fee" className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 group hover:-translate-y-1 transition duration-300 flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-5 group-hover:bg-indigo-600 group-hover:text-white transition duration-300">
                <Briefcase size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-serif">PG College</h3>
              <p className="text-gray-500 text-sm mt-2">Advanced Postgraduate professional tracks including MBA, MCA, and M.Sc.</p>
            </div>
            <span className="text-sm font-semibold text-indigo-600 inline-flex items-center gap-1 mt-4">
              Explore PG Tracks <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
            </span>
          </Link>

          <Link href="/teacher-education" className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 group hover:-translate-y-1 transition duration-300 flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white transition duration-300">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-serif">Teacher Education</h3>
              <p className="text-gray-500 text-sm mt-2">NCTE-Approved professional B.Ed and D.Ed training courses with in-house practice teaching.</p>
            </div>
            <span className="text-sm font-semibold text-emerald-600 inline-flex items-center gap-1 mt-4">
              Explore Education <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
            </span>
          </Link>

          <Link href="/nursing" className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 group hover:-translate-y-1 transition duration-300 flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-lg flex items-center justify-center mb-5 group-hover:bg-rose-600 group-hover:text-white transition duration-300">
                <HeartPulse size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-serif">Nursing College</h3>
              <p className="text-gray-500 text-sm mt-2">Top-tier healthcare education and clinical training for the next generation of nursing professionals.</p>
            </div>
            <span className="text-sm font-semibold text-rose-600 inline-flex items-center gap-1 mt-4">
              Explore Nursing <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
            </span>
          </Link>

        </div>
      </section>

      {/* 3. Global Stats */}
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
            <span className="block text-4xl md:text-5xl font-bold text-[#0B2046] font-serif">6+</span>
            <span className="block text-gray-500 text-sm mt-1 uppercase tracking-wider">Core Institutions</span>
          </div>
        </div>
      </section>

      {/* 4. Transport CTA Highlight */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="bg-gradient-to-r from-[#0B2046] to-blue-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-xl">
          <div className="text-white mb-6 md:mb-0 md:max-w-xl">
            <h2 className="text-3xl font-bold font-serif mb-3">Extensive Transport Network</h2>
            <p className="text-blue-100 text-lg">
              Safe, daily commutes covering Rajahmundry, Anaparthi, and 40+ surrounding villages with a dedicated fleet.
            </p>
          </div>
          <Link 
            href="/transport" 
            className="shrink-0 bg-amber-500 text-[#0B2046] px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-400 transition shadow-lg flex items-center gap-2"
          >
            View All Routes <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </main>
  );
}