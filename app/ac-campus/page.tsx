'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, MonitorPlay, Wind, Shield, Fingerprint, Award } from 'lucide-react';

const topScorers = [
  { name: "A. Venkat", marks: "598/600", badge: "State Topper", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { name: "M. Deepika", marks: "595/600", badge: "District 1st", img: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { name: "K. Rohan", marks: "592/600", badge: "School Topper", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { name: "S. Priya", marks: "589/600", badge: "Math Perfect", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
];

export default function ACCampusPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.max(1, topScorers.length - 2));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden pb-24">
      
      {/* Hero */}
      <section className="relative w-full h-[70vh] flex items-center justify-center bg-[#0B2046]">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="AC Smart Classroom" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2046] via-[#0B2046]/70 to-transparent z-10" />

        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center mt-20">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest text-white uppercase mb-6 backdrop-blur-sm">
            <Sparkles size={14} className="text-red-400" /> Premium Learning Environment
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-serif tracking-tight leading-none uppercase mb-6 text-white">
            The AC Campus
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            A sanctuary of focus. 100% climate-controlled, dust-free smart classrooms engineered for digital immersion and absolute comfort from Nursery through 10th Grade.
          </p>
        </div>
      </section>

      {/* Board Toppers */}
      <section className="py-24 relative z-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-red-600 uppercase tracking-widest text-xs font-black block mb-2">Academic Excellence</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif uppercase tracking-tight text-[#0B2046]">10th Board Top Scorers</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Elite results forged in a highly focused, climate-controlled environment.</p>
          </div>

          <div className="relative w-full overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out gap-6"
              style={{ transform: `translateX(calc(-${currentIndex * (100 / 3)}% - ${currentIndex * 1.5}rem))` }}
            >
              {topScorers.map((student, idx) => (
                <div key={idx} className="w-full md:w-[calc(33.333%-1rem)] shrink-0 bg-white border border-gray-100 shadow-lg rounded-3xl p-8 text-center hover:-translate-y-1 transition duration-300">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gray-50 mb-6 overflow-hidden border-2 border-red-100 p-1">
                    <img src={student.img} alt={student.name} className="w-full h-full object-cover rounded-full" />
                  </div>
                  <h4 className="font-bold text-2xl font-serif text-[#0B2046] uppercase tracking-tight mb-2">{student.name}</h4>
                  <p className="font-black text-3xl mb-4 text-[#0B2046]">{student.marks}</p>
                  <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 px-4 py-1.5 rounded-full text-xs font-bold text-red-600 uppercase tracking-wider">
                    <Award size={14} /> {student.badge}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="text-center mb-16">
          <span className="text-red-600 uppercase tracking-widest text-xs font-black block mb-2">Infrastructure</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif uppercase tracking-tight text-[#0B2046]">Engineered for Focus</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-gray-100 shadow-sm p-8 rounded-2xl hover:shadow-lg transition duration-300">
            <Wind className="text-red-600 mb-6" size={36} />
            <h3 className="text-xl font-bold uppercase tracking-tight mb-3 text-[#0B2046]">Climate Control</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Advanced air conditioning ensures students remain comfortable and focused, completely shielded from extreme summer heat.</p>
          </div>
          
          <div className="bg-white border border-gray-100 shadow-sm p-8 rounded-2xl hover:shadow-lg transition duration-300">
            <Shield className="text-[#0B2046] mb-6" size={36} />
            <h3 className="text-xl font-bold uppercase tracking-tight mb-3 text-[#0B2046]">Dust-Free Zones</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Sealed environments drastically reduce allergens and dust, providing a pristine, healthy space for daily learning.</p>
          </div>

          <div className="bg-white border border-gray-100 shadow-sm p-8 rounded-2xl hover:shadow-lg transition duration-300">
            <MonitorPlay className="text-red-600 mb-6" size={36} />
            <h3 className="text-xl font-bold uppercase tracking-tight mb-3 text-[#0B2046]">Digital Boards</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Every classroom is equipped with interactive smart panels, transforming traditional lessons into high-engagement visual experiences.</p>
          </div>

          <div className="bg-white border border-gray-100 shadow-sm p-8 rounded-2xl hover:shadow-lg transition duration-300">
            <Fingerprint className="text-[#0B2046] mb-6" size={36} />
            <h3 className="text-xl font-bold uppercase tracking-tight mb-3 text-[#0B2046]">Secure Access</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Enhanced internal monitoring and dedicated campus blocks ensure a highly secure, controlled environment for all age groups.</p>
          </div>
        </div>
      </section>

    </main>
  );
}