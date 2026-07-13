// app/about/page.tsx
import React from 'react';
import { History, Target, Eye, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About GBR Schools | Legacy Since 1979',
  description: 'Learn about the history, vision, and mission of GBR Schools.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden pb-24">
      
      <section className="relative w-full h-[60vh] flex items-center justify-center bg-[#0B2046]">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="GBR Heritage" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2046] via-[#0B2046]/80 to-transparent z-10" />

        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest text-white uppercase mb-6 backdrop-blur-sm">
            <History size={14} className="text-red-400" /> Established 1979
          </div>
          <h1 className="text-4xl md:text-6xl font-black font-serif tracking-tight leading-none uppercase mb-6 text-white">
            A Legacy of <br />
            <span className="text-red-500">
              Educational Excellence
            </span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Empowering the youth of Anaparthi and beyond for over four decades through uncompromising academic standards and holistic character development.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-gray-50 border border-gray-100 p-10 md:p-14 rounded-3xl relative overflow-hidden group hover:-translate-y-1 transition duration-500 shadow-sm hover:shadow-lg">
            <div className="absolute top-0 right-0 w-48 h-48 bg-red-50 rounded-bl-full opacity-50 group-hover:scale-110 transition duration-500"></div>
            <Eye className="text-red-600 mb-8 relative z-10" size={48} />
            <h2 className="text-3xl font-bold font-serif uppercase tracking-tight mb-4 text-[#0B2046] relative z-10">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed text-lg relative z-10">
              To be a premier educational hub that nurtures intellectual curiosity, moral integrity, and absolute competence, transforming rural and semi-urban students into unstoppable global leaders.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-100 p-10 md:p-14 rounded-3xl relative overflow-hidden group hover:-translate-y-1 transition duration-500 shadow-sm hover:shadow-lg">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50 rounded-bl-full opacity-50 group-hover:scale-110 transition duration-500"></div>
            <Target className="text-[#0B2046] mb-8 relative z-10" size={48} />
            <h2 className="text-3xl font-bold font-serif uppercase tracking-tight mb-4 text-[#0B2046] relative z-10">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed text-lg relative z-10">
              To provide highly accessible, world-class education from Nursery to 10th grade while instilling fierce discipline, deep cultural values, and an enduring love for continuous learning.
            </p>
          </div>
          
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="text-center mb-16">
          <span className="text-red-600 uppercase tracking-widest text-xs font-black block mb-2">Leadership</span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif uppercase tracking-tight text-[#0B2046]">Architects of Our Legacy</h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">The vision, struggle, and dedication of our core founding members built the enduring foundation of GBR Schools.</p>
        </div>

        <div className="space-y-8">
          <div className="bg-white border border-gray-100 shadow-xl shadow-gray-100/50 rounded-3xl overflow-hidden flex flex-col md:flex-row group">
            <div className="w-full md:w-1/3 aspect-square bg-[#0B2046] flex items-center justify-center shrink-0 border-b md:border-b-0 md:border-r border-gray-100 relative overflow-hidden">
              <span className="text-8xl font-serif font-black text-white/10 group-hover:text-red-500/20 transition duration-500">G</span>
            </div>
            <div className="w-full md:w-2/3 p-10 md:p-14 flex flex-col justify-center relative bg-gray-50/50">
              <h3 className="text-3xl md:text-4xl font-bold font-serif uppercase tracking-tight mb-2 text-[#0B2046]">Late Sri Goluguri Bapi Raju Reddy</h3>
              <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-6">The Visionary Founder</p>
              <p className="text-gray-600 text-lg leading-relaxed">
                The visionary who laid the original foundation. His lifelong dedication to accessible, high-quality education continues to be the guiding light for every classroom on our campus.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-100 shadow-xl shadow-gray-100/50 rounded-3xl overflow-hidden flex flex-col md:flex-row-reverse group">
            <div className="w-full md:w-1/3 aspect-square bg-gray-100 flex items-center justify-center shrink-0 border-b md:border-b-0 md:border-l border-gray-200 relative overflow-hidden">
              <span className="text-8xl font-serif font-black text-[#0B2046]/10 group-hover:text-[#0B2046]/20 transition duration-500">T</span>
            </div>
            <div className="w-full md:w-2/3 p-10 md:p-14 flex flex-col justify-center relative bg-white">
              <h3 className="text-3xl md:text-4xl font-bold font-serif uppercase tracking-tight mb-2 text-[#0B2046]">Sri Tetali Adi Reddy (Kondababu)</h3>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-6">Correspondent</p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Actively managing and guiding the institution&apos;s massive current growth, ensuring the founder&apos;s vision thrives and continually adapts to the modern technological landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        <div className="bg-[#0B2046] rounded-3xl p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-64 h-64 bg-white opacity-5 rounded-full filter blur-3xl pointer-events-none"></div>
          <h2 className="text-3xl font-bold font-serif uppercase tracking-tight mb-4 relative z-10 text-white">Become Part of the Legacy</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto relative z-10">
            Admissions for the upcoming academic year are currently open for Nursery through 10th Grade across both campuses.
          </p>
          <Link 
            href="/admissions" 
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition duration-300 shadow-xl shadow-red-900/50 tracking-wide relative z-10"
          >
            Apply Now <ChevronRight size={18} />
          </Link>
        </div>
      </section>

    </main>
  );
}