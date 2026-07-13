'use client';

import React, { useState, useEffect } from 'react';
import { History, Target, Eye, Award, Users } from 'lucide-react';

// NOTE: Metadata must be moved to a separate layout.tsx or server component when using 'use client'
// export const metadata = {
//   title: 'About GBR Institutions | Legacy Since 1979',
//   description: 'Learn about the history, vision, and mission of GBR Educational Institutions in Anaparthi.',
// };

const leadershipMessages = [
  {
    quote: "Education is not merely about accumulating facts; it is about building character. At GBR, we don't just prepare students for exams; we prepare them for life. We are committed to maintaining a campus where tradition meets modern innovation.",
    author: "Management Committee, GBR Institutions"
  },
  {
    quote: "Our ultimate goal has always been to bring accessible, world-class educational infrastructure to the rural and semi-urban students, transforming them into global leaders of tomorrow.",
    author: "Late Sri Goluguri Bapi Raju Reddy"
  },
  {
    quote: "We continuously adapt to the modern educational landscape while keeping our roots firmly grounded in discipline, cultural values, and uncompromising academic standards.",
    author: "Sri Tetali Adi Reddy (Kondababu)"
  }
];

export default function AboutPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % leadershipMessages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#F8F9FA] pb-16">
      {/* Hero Section */}
      <div className="bg-[#0B2046] text-white py-20 px-6 md:px-12 text-center border-b-[6px] border-amber-500">
        <h1 className="text-4xl md:text-5xl font-bold font-serif max-w-4xl mx-auto leading-tight">
          A Legacy of Educational Excellence
        </h1>
        <p className="text-white/80 mt-4 text-lg max-w-2xl mx-auto font-light">
          Empowering the youth of Anaparthi and beyond since 1979 through uncompromising academic standards and holistic development.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        
        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400 opacity-5 rounded-bl-full"></div>
            <Eye className="text-amber-500 mb-6" size={40} />
            <h2 className="text-3xl font-bold text-[#0B2046] font-serif mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              To be a premier educational hub that nurtures intellectual curiosity, moral integrity, and professional competence, transforming rural and semi-urban students into global leaders.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400 opacity-5 rounded-bl-full"></div>
            <Target className="text-blue-500 mb-6" size={40} />
            <h2 className="text-3xl font-bold text-[#0B2046] font-serif mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              To provide accessible, high-quality education across all levels—from early childhood to postgraduate studies—while instilling discipline, cultural values, and a lifelong love for learning.
            </p>
          </div>
        </div>

        {/* Founders & Key Architects Section - Alternating Layout */}
        <div className="mb-24">
          <div className="text-center mb-16 flex flex-col items-center">
            <Users className="text-amber-500 mb-4" size={40} />
            <h2 className="text-3xl font-bold text-[#0B2046] font-serif">The Architects of Our Legacy</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-lg">
              The vision, struggle, and dedication of our core founding members built the enduring foundation of GBR Educational Institutions.
            </p>
          </div>

          <div className="space-y-12">
            
            {/* 1. Founder (Photo Left) */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row hover:shadow-md transition">
              <div className="w-full md:w-1/3 aspect-square bg-amber-50 flex items-center justify-center shrink-0 border-b md:border-b-0 md:border-r border-gray-100">
                <span className="text-8xl font-serif font-bold text-amber-200">G</span>
              </div>
              <div className="w-full md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="font-bold text-[#0B2046] text-3xl font-serif mb-2">Late Sri Goluguri Bapi Raju Reddy</h3>
                <p className="text-amber-600 text-sm uppercase tracking-widest font-bold mb-6">The Founder</p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  The visionary who laid the original foundation. His lifelong dedication to accessible education continues to be the guiding light for all our institutions.
                </p>
              </div>
            </div>

            {/* 2. Correspondent (Photo Right) */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row-reverse hover:shadow-md transition">
              <div className="w-full md:w-1/3 aspect-square bg-blue-50 flex items-center justify-center shrink-0 border-b md:border-b-0 md:border-l border-gray-100">
                <span className="text-8xl font-serif font-bold text-blue-200">T</span>
              </div>
              <div className="w-full md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="font-bold text-[#0B2046] text-3xl font-serif mb-2">Sri Tetali Adi Reddy (Kondababu)</h3>
                <p className="text-blue-600 text-sm uppercase tracking-widest font-bold mb-6">Correspondent</p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Actively managing and guiding the institution&apos;s current growth, ensuring the founder&apos;s vision thrives and adapts in the modern educational landscape.
                </p>
              </div>
            </div>

            {/* 3. Director (Photo Left) */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row hover:shadow-md transition">
              <div className="w-full md:w-1/3 aspect-square bg-emerald-50 flex items-center justify-center shrink-0 border-b md:border-b-0 md:border-r border-gray-100">
                <span className="text-8xl font-serif font-bold text-emerald-200">B</span>
              </div>
              {/* <div className="w-full md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="font-bold text-[#0B2046] text-3xl font-serif mb-2">Sri Bollareddy Ratna Reddy</h3>
                <p className="text-emerald-600 text-sm uppercase tracking-widest font-bold mb-6">Director & 1st Degree Principal</p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  The driving force behind elevating GBR to a Degree College. His relentless push for higher education successfully shaped our academic structure.
                </p>
              </div> */}
            </div>

            {/* 4. Key Architect (Photo Right) */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row-reverse hover:shadow-md transition">
              <div className="w-full md:w-1/3 aspect-square bg-purple-50 flex items-center justify-center shrink-0 border-b md:border-b-0 md:border-l border-gray-100">
                <span className="text-8xl font-serif font-bold text-purple-200">A</span>
              </div>
              <div className="w-full md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="font-bold text-[#0B2046] text-3xl font-serif mb-2">Sri Ammi Reddy</h3>
                <p className="text-purple-600 text-sm uppercase tracking-widest font-bold mb-6">Key Architect</p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Fought tirelessly alongside the founder to secure the necessary government permissions and approvals, legally making this institution a reality.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* History / The Trust Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col md:flex-row mb-20">
          <div className="md:w-1/2 bg-gray-50 p-12 flex flex-col justify-center border-r border-gray-100">
            <History className="text-[#0B2046] mb-6" size={40} />
            <h2 className="text-3xl font-bold text-[#0B2046] font-serif mb-4">The GBR Trust</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Established in 1979, the GBR Educational Trust was founded with a singular, noble objective: to bring world-class educational infrastructure to the Godavari districts. 
            </p>
            <p className="text-gray-600 leading-relaxed">
              What started as a single school has blossomed into a comprehensive multi-institution campus. Today, we manage state-of-the-art English Medium Schools, a competitive Junior College, a comprehensive Degree & PG College, and an NCTE-approved College of Education.
            </p>
          </div>
          <div className="md:w-1/2 p-12 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 font-serif mb-6">Milestones</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="font-bold text-amber-500 text-xl w-16 shrink-0">1979</span>
                <div>
                  <h4 className="font-bold text-gray-900">Foundation</h4>
                  <p className="text-sm text-gray-500">The trust is established and the first school opens its doors.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-amber-500 text-xl w-16 shrink-0">1995</span>
                <div>
                  <h4 className="font-bold text-gray-900">Higher Education Expansion</h4>
                  <p className="text-sm text-gray-500">Inauguration of the Degree and Junior college blocks.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-amber-500 text-xl w-16 shrink-0">2010</span>
                <div>
                  <h4 className="font-bold text-gray-900">Professional Courses</h4>
                  <p className="text-sm text-gray-500">Introduction of PG courses (MCA/MBA) and B.Ed programs.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Leadership / Founder Message Slider */}
        <div className="text-center max-w-3xl mx-auto">
          <Award className="mx-auto text-amber-500 mb-6" size={48} />
          <h2 className="text-3xl font-bold text-[#0B2046] font-serif mb-6">Leadership Message</h2>
          
          <div className="relative overflow-hidden w-full h-[220px] md:h-[180px]">
            <div 
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {leadershipMessages.map((msg, idx) => (
                <div key={idx} className="w-full shrink-0 px-4 flex flex-col justify-center h-full">
                  <blockquote className="text-xl text-gray-700 italic leading-relaxed mb-6">
                    &ldquo;{msg.quote}&rdquo;
                  </blockquote>
                  <p className="font-bold text-gray-900 uppercase tracking-widest text-sm">— {msg.author}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {leadershipMessages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'bg-amber-500 w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}