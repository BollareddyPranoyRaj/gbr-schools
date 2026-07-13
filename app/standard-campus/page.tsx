// app/standard-campus/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Trophy, Shield, Wind, Award, Activity } from 'lucide-react';

const topScorers = [
  { name: "A. Venkat", marks: "598/600", badge: "State Topper", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { name: "M. Deepika", marks: "595/600", badge: "District 1st", img: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { name: "K. Rohan", marks: "592/600", badge: "School Topper", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { name: "S. Priya", marks: "589/600", badge: "Math Perfect", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { name: "V. Karthik", marks: "588/600", badge: "Science Perfect", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { name: "R. Anjali", marks: "585/600", badge: "Top 1%", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { name: "P. Tarun", marks: "584/600", badge: "Top 1%", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { name: "N. Sowmya", marks: "582/600", badge: "Top 1%", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
];

export default function StandardCampusPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.max(1, topScorers.length - 2));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden pb-24">
      
      {/* 1. Cinematic Hero Section */}
      <section className="relative w-full h-[75vh] flex items-center justify-center bg-[#0B2046]">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1544252874-51e88e3914a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Sprawling Campus Grounds" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2046] via-[#0B2046]/70 to-transparent z-10" />

        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center mt-20">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest text-white uppercase mb-6 backdrop-blur-sm">
            <Activity size={14} className="text-red-400" /> Open Architecture & Athletics
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-serif tracking-tight leading-none uppercase mb-6 text-white">
            The Standard Campus
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            A monumental physical layout tailored for Nursery to 10th Grade. Designed for high ventilation, massive sports grounds, and an unyielding foundation of Gurukul discipline.
          </p>
        </div>
      </section>

      {/* 2. Board Toppers (Auto-Scrolling) */}
      <section className="py-24 relative z-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-red-600 uppercase tracking-widest text-xs font-black block mb-2">Unmatched Results</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif uppercase tracking-tight text-[#0B2046]">10th Board Top Scorers</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Setting elite academic benchmarks across the Godavari districts year after year.</p>
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

      {/* 3. Core Principles */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-100 shadow-sm p-10 rounded-3xl hover:shadow-lg transition duration-300 group">
            <Wind className="text-red-600 mb-6 group-hover:scale-110 transition duration-300" size={40} />
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 font-serif text-[#0B2046]">Highly Ventilated</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Spacious, open-air corridor designs that ensure constant fresh air circulation, abundant natural sunlight, and boundless energy.</p>
          </div>
          
          <div className="bg-white border border-gray-100 shadow-sm p-10 rounded-3xl hover:shadow-lg transition duration-300 group">
            <Trophy className="text-[#0B2046] mb-6 group-hover:scale-110 transition duration-300" size={40} />
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 font-serif text-[#0B2046]">Massive Playgrounds</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Extensive outdoor facilities dedicated to cricket, volleyball, football, and daily physical conditioning routines.</p>
          </div>

          <div className="bg-white border border-gray-100 shadow-sm p-10 rounded-3xl hover:shadow-lg transition duration-300 group">
            <Shield className="text-red-600 mb-6 group-hover:scale-110 transition duration-300" size={40} />
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 font-serif text-[#0B2046]">Gurukul Discipline</h3>
            <p className="text-gray-600 text-sm leading-relaxed">A strictly structured environment focusing heavily on punctuality, profound respect, character architecture, and extreme academic rigor.</p>
          </div>
        </div>
      </section>

      {/* 4. Infrastructure Visual Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif uppercase tracking-tight text-[#0B2046]">Campus Infrastructure</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="group relative overflow-hidden rounded-3xl shadow-md h-80">
            <img 
              src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Cricket Ground" 
              className="w-full h-full object-cover transition duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2046]/90 via-[#0B2046]/20 to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />
            <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition duration-500">
              <h3 className="text-2xl font-bold text-white font-serif uppercase tracking-tight mb-1">Cricket Ground</h3>
              <p className="text-red-400 text-xs font-bold uppercase tracking-widest">Tournament Grade</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl shadow-md h-80">
            <img 
              src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Volleyball Court" 
              className="w-full h-full object-cover transition duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2046]/90 via-[#0B2046]/20 to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />
            <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition duration-500">
              <h3 className="text-2xl font-bold text-white font-serif uppercase tracking-tight mb-1">Volleyball Court</h3>
              <p className="text-red-400 text-xs font-bold uppercase tracking-widest">Professional Nets</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl shadow-md h-80">
            <img 
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Event Stage" 
              className="w-full h-full object-cover transition duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2046]/90 via-[#0B2046]/20 to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />
            <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition duration-500">
              <h3 className="text-2xl font-bold text-white font-serif uppercase tracking-tight mb-1">Open-Air Stage</h3>
              <p className="text-red-400 text-xs font-bold uppercase tracking-widest">For Cultural Fests</p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}