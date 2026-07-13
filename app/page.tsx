import React from 'react';
import { ArrowRight, ShieldCheck, Bus, Award, Sparkles, Building2, Compass } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">
      
      {/* 1. Cinematic Video Hero */}
      <section className="relative w-full h-[85vh] flex items-center justify-center bg-[#0B2046]">
        <div className="absolute inset-0 z-0 opacity-50">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Gradient Mask for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B2046]/80 via-[#0B2046]/50 to-[#0B2046]/90 z-10" />

        <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest text-white uppercase mb-6 backdrop-blur-sm shadow-sm">
            <Sparkles size={14} className="text-red-500" /> Shaping Futures Since 1979
          </div>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black font-serif tracking-tight leading-none text-white uppercase">
            The Standard of <br />
            <span className="text-red-500">
              Modern Education
            </span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl mt-8 max-w-2xl mx-auto font-light leading-relaxed">
            A comprehensive Nursery to 10th-grade ecosystem offering parents the ultimate choice: premium climate-controlled digital spaces or sprawling, traditional environments.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions" className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition duration-300 shadow-xl shadow-red-600/20 tracking-wide flex items-center justify-center gap-2 group">
              Begin Online Inquiry <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
            </Link>
            <Link href="/about" className="bg-white hover:bg-gray-50 text-[#0B2046] font-bold px-8 py-4 rounded-lg transition duration-300 tracking-wide flex items-center justify-center shadow-lg">
              Our Foundational History
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Dual Campus Separation Split Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 relative z-20">
        <div className="text-center mb-16">
          <span className="text-red-600 uppercase tracking-widest text-xs font-black block mb-2">The Ultimate Choice</span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif uppercase tracking-tight text-[#0B2046]">Two Distinct Campuses</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-lg">Both offering complete Nursery to 10th-grade academics, tailored to your preferred educational lifestyle.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* AC Campus Card */}
          <div className="bg-white border border-gray-100 shadow-2xl shadow-gray-200/50 rounded-3xl p-8 md:p-12 flex flex-col justify-between hover:-translate-y-2 transition duration-500 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50 rounded-bl-full opacity-50 group-hover:scale-110 transition duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-8 border border-red-100 shadow-sm">
                <Sparkles size={32} />
              </div>
              <h3 className="text-3xl font-bold font-serif mb-2 uppercase tracking-tight text-[#0B2046]">The AC Campus</h3>
              <p className="text-red-600 text-sm font-bold uppercase tracking-widest mb-6 border-b border-gray-100 pb-4">Nursery to 10th Grade</p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                A pristine, completely climate-controlled interactive environment. Safeguarded from extreme heat and external dust, prioritizing absolute focus and digital integration.
              </p>
              <ul className="space-y-4 text-sm text-gray-700 mb-8 font-medium">
                <li className="flex items-center gap-3"><ShieldCheck className="text-red-600 shrink-0" size={20} /> 100% Dust-Free Smart Classrooms</li>
                <li className="flex items-center gap-3"><ShieldCheck className="text-red-600 shrink-0" size={20} /> Premium Climate Control</li>
                <li className="flex items-center gap-3"><ShieldCheck className="text-red-600 shrink-0" size={20} /> Advanced Digital Learning Integration</li>
              </ul>
            </div>
            <Link href="/ac-campus" className="inline-flex items-center gap-2 font-bold text-[#0B2046] hover:text-red-600 transition group/link relative z-10">
              Explore AC Campus <ArrowRight size={18} className="group-hover/link:translate-x-1 transition" />
            </Link>
          </div>

          {/* Standard Campus Card */}
          <div className="bg-white border border-gray-100 shadow-2xl shadow-gray-200/50 rounded-3xl p-8 md:p-12 flex flex-col justify-between hover:-translate-y-2 transition duration-500 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-50 rounded-bl-full opacity-50 group-hover:scale-110 transition duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#0B2046]/5 text-[#0B2046] rounded-2xl flex items-center justify-center mb-8 border border-[#0B2046]/10 shadow-sm">
                <Building2 size={32} />
              </div>
              <h3 className="text-3xl font-bold font-serif mb-2 uppercase tracking-tight text-[#0B2046]">The Standard Campus</h3>
              <p className="text-red-600 text-sm font-bold uppercase tracking-widest mb-6 border-b border-gray-100 pb-4">Nursery to 10th Grade</p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                A monumental physical layout geared towards massive sports grounds, high-ventilation corridors, and an unyielding foundation of traditional Gurukul discipline.
              </p>
              <ul className="space-y-4 text-sm text-gray-700 mb-8 font-medium">
                <li className="flex items-center gap-3"><ShieldCheck className="text-red-600 shrink-0" size={20} /> Highly Ventilated Open Architecture</li>
                <li className="flex items-center gap-3"><ShieldCheck className="text-red-600 shrink-0" size={20} /> Sprawling Athletic Grounds & Courts</li>
                <li className="flex items-center gap-3"><ShieldCheck className="text-red-600 shrink-0" size={20} /> Ironclad Behavioral Discipline</li>
              </ul>
            </div>
            <Link href="/standard-campus" className="inline-flex items-center gap-2 font-bold text-[#0B2046] hover:text-red-600 transition group/link relative z-10">
              Explore Standard Campus <ArrowRight size={18} className="group-hover/link:translate-x-1 transition" />
            </Link>
          </div>

        </div>
      </section>

      {/* 3. High-Contrast Premium White Section for Hard Statistics */}
      <section className="bg-gray-50 py-24 px-6 md:px-12 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center border-b border-gray-200 pb-16">
            <div>
              <span className="block text-5xl md:text-7xl font-black font-serif tracking-tight text-red-600">45+</span>
              <span className="block text-[#0B2046] font-bold text-xs md:text-sm uppercase tracking-widest mt-3">Years Legacy</span>
            </div>
            <div>
              <span className="block text-5xl md:text-7xl font-black font-serif tracking-tight text-[#0B2046]">10K+</span>
              <span className="block text-[#0B2046] font-bold text-xs md:text-sm uppercase tracking-widest mt-3">Alumni Network</span>
            </div>
            <div>
              <span className="block text-5xl md:text-7xl font-black font-serif tracking-tight text-red-600">100%</span>
              <span className="block text-[#0B2046] font-bold text-xs md:text-sm uppercase tracking-widest mt-3">Board Pass Rate</span>
            </div>
            <div>
              <span className="block text-5xl md:text-7xl font-black font-serif tracking-tight text-[#0B2046]">40+</span>
              <span className="block text-[#0B2046] font-bold text-xs md:text-sm uppercase tracking-widest mt-3">Villages Covered</span>
            </div>
          </div>

          {/* Quick Advantage Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                <Award size={24} />
              </div>
              <div>
                <h4 className="font-bold text-xl uppercase tracking-tight font-serif text-[#0B2046] mb-2">Unparalleled Track Record</h4>
                <p className="text-gray-600 text-sm leading-relaxed">GBR continues to capture top board marks inside East Godavari districts year after year through pure systematic execution.</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-[#0B2046] flex items-center justify-center shrink-0">
                <Compass size={24} />
              </div>
              <div>
                <h4 className="font-bold text-xl uppercase tracking-tight font-serif text-[#0B2046] mb-2">Holistic Blueprint</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Physical education matches mental discipline. We cultivate strong minds housed in exceptionally resilient bodies.</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-xl uppercase tracking-tight font-serif text-[#0B2046] mb-2">Ironclad Discipline</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Punctuality, profound mutual respect, and focused behavioral frameworks form the core foundation of our daily operations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Strategic Logistical Infrastructure Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="bg-[#0B2046] rounded-3xl p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full filter blur-3xl pointer-events-none"></div>
          
          <div className="max-w-xl relative z-10">
            <div className="inline-flex items-center gap-2 text-red-400 font-bold uppercase tracking-widest text-xs mb-4">
              <Bus size={16} /> Logistical Superiority
            </div>
            <h3 className="text-3xl md:text-5xl font-bold font-serif uppercase tracking-tight text-white mb-4">
              Massive Transport Grid
            </h3>
            <p className="text-white/80 text-lg leading-relaxed">
              Serving Rajahmundry, Anaparthi, and 40+ surrounding rural hubs with an extensive, highly optimized institutional transport fleet.
            </p>
          </div>
          
          <Link 
            href="/transport" 
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-5 rounded-xl transition shadow-xl shadow-red-900/50 flex items-center gap-3 tracking-wide text-lg uppercase shrink-0 relative z-10"
          >
            Review Village Routes <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </main>
  );
}