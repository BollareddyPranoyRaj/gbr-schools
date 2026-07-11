'use client';

import React, { useState, useEffect } from 'react';
import { Award, Star, Quote, ChevronRight, Stethoscope, Microscope } from 'lucide-react';
import Link from 'next/link';

// NOTE: Metadata must be moved to layout.tsx or a separate server component since this is now a Client Component
// export const metadata = {
//   title: 'Junior College | GBR Educational Institutions',
//   description: 'Premium Intermediate education with integrated competitive coaching.',
// };

const rankersData = [
  {
    category: "Intermediate Board Toppers",
    color: "text-amber-400",
    students: [
      { name: "K. Srinivas", stat: "992/1000", badge: "District First", icon: Award, img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
      { name: "T. Bhavani", stat: "989/1000", badge: "State Top 10", icon: Award, img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
      { name: "V. Karthik", stat: "985/1000", badge: "College Topper", icon: Award, img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
    ]
  },
  {
    category: "JEE Main Scorers",
    color: "text-blue-400",
    students: [
      { name: "S. Aditya", stat: "99.98 Percentile", badge: "Top Scorer", icon: Star, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
      { name: "N. Pradeep", stat: "99.85 Percentile", badge: "Top Scorer", icon: Star, img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
      { name: "M. Harika", stat: "99.70 Percentile", badge: "Top Scorer", icon: Star, img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
    ]
  },
  {
    category: "AP EAPCET State Ranks",
    color: "text-emerald-400",
    students: [
      { name: "Priya Reddy", stat: "State Rank: 12", badge: "Top Category", icon: Award, img: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
      { name: "M. Harsha", stat: "State Rank: 45", badge: "Agriculture", icon: Award, img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
      { name: "K. Laya", stat: "State Rank: 89", badge: "Engineering", icon: Award, img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
    ]
  },
  {
    category: "IIT Advanced Selections",
    color: "text-purple-400",
    students: [
      { name: "Rahul Varma", stat: "AIR: 142", badge: "IIT Madras", icon: Microscope, img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
      { name: "B. Shiva", stat: "AIR: 560", badge: "IIT Bombay", icon: Microscope, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
      { name: "D. Akhil", stat: "AIR: 1024", badge: "IIT Kharagpur", icon: Microscope, img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
    ]
  },
  {
    category: "NEET Medical Achievers",
    color: "text-rose-400",
    students: [
      { name: "G. Sravya", stat: "Score: 680/720", badge: "AIIMS Seat", icon: Stethoscope, img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
      { name: "A. Meghana", stat: "Score: 665/720", badge: "Top Govt. Med", icon: Stethoscope, img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
      { name: "P. Sahithi", stat: "Score: 650/720", badge: "Top Govt. Med", icon: Stethoscope, img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
    ]
  }
];

export default function JuniorCollegePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-scroll every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % rankersData.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white pb-20">
      
      {/* 1. Cinematic Hero Section */}
      <div className="bg-[#0B2046] text-white py-24 px-6 md:px-12 text-center border-b-[6px] border-amber-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold font-serif max-w-4xl mx-auto leading-tight">
            GBR Junior College
          </h1>
          <p className="text-amber-400 mt-4 text-xl font-medium tracking-wide uppercase">
            MPC • BiPC • CEC
          </p>
          <p className="text-white/80 mt-4 text-lg max-w-2xl mx-auto font-light">
            Empowering students with integrated coaching for JEE, NEET, and EAPCET to secure top university placements.
          </p>
        </div>
      </div>

      {/* 2. The Local Leader: Principal's Message */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-lg flex flex-col md:flex-row gap-12 items-center">
          
          <div className="w-full md:w-1/3 flex flex-col items-center text-center shrink-0">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-amber-500 shadow-xl mb-6 bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Junior College Principal" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-[#0B2046] font-serif">Dr. K. Srinivasa Rao</h3>
            <p className="text-amber-600 font-semibold mt-1">Principal, Junior College</p>
            <p className="text-gray-500 text-sm mt-2">M.Sc., Ph.D. with 25+ years of academic excellence.</p>
          </div>

          <div className="w-full md:w-2/3 relative">
            <Quote className="absolute -top-6 -left-6 text-amber-200 opacity-50" size={80} />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-[#0B2046] font-serif mb-6">A Commitment to Excellence</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At GBR Junior College, we do not just prepare students for board exams; we prepare them for the most competitive entrances in the country. Our integrated coaching methodology for JEE, NEET, and EAPCET ensures that our students are always one step ahead.
                </p>
                <p>
                  With state-of-the-art laboratories, a rigorous testing schedule, and a faculty of proven experts, we have consistently produced state-topping ranks. We look forward to welcoming you to a tradition of uncompromised academic rigor and success.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. The Wall of Excellence (Auto-Scrolling Carousel) */}
      <section className="bg-[#0B2046] py-20 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-white mb-4">The Wall of Excellence</h2>
            <p className="text-amber-400 text-lg">Celebrating our top achievers across all competitive formats.</p>
          </div>

          {/* Slider Container */}
          <div className="relative w-full overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {rankersData.map((categoryGroup, idx) => (
                <div key={idx} className="w-full shrink-0 flex flex-col items-center">
                  
                  {/* Category Title */}
                  <h3 className={`text-2xl md:text-3xl font-bold font-serif mb-8 border-b border-white/20 pb-4 ${categoryGroup.color}`}>
                    {categoryGroup.category}
                  </h3>

                  {/* 3 Cards Grid for this category */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {categoryGroup.students.map((student, studentIdx) => {
                      const Icon = student.icon;
                      return (
                        <div key={studentIdx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center shadow-lg">
                          <div className={`w-24 h-24 mx-auto rounded-full bg-white mb-4 overflow-hidden border-2 border-current ${categoryGroup.color}`}>
                            <img src={student.img} alt={student.name} className="w-full h-full object-cover" />
                          </div>
                          <h4 className="font-bold text-xl font-serif text-white">{student.name}</h4>
                          <p className={`font-semibold mb-3 ${categoryGroup.color}`}>{student.stat}</p>
                          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-sm font-medium">
                            <Icon size={16} /> {student.badge}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {rankersData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? 'bg-amber-500 w-8' : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 4. Campus Life & Infrastructure (Cinematic Bento Grid) */}
      <section className="py-24 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#0B2046] mb-4">Life at GBR</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              An environment engineered for focus, growth, and holistic development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[800px] md:h-[600px]">
            
            <div className="relative group overflow-hidden rounded-2xl md:col-span-2 md:row-span-2 shadow-sm">
              <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Classroom" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2046]/90 via-[#0B2046]/40 to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />
              <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition duration-500">
                <h3 className="text-2xl font-bold text-white font-serif mb-2">Smart Classrooms</h3>
                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition duration-500 delay-100">
                  Interactive, tech-enabled learning environments designed to foster focus and drive our excellent academic results.
                </p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl md:col-span-2 shadow-sm">
              <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Study Hours" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2046]/90 via-[#0B2046]/20 to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition duration-500">
                <h3 className="text-xl font-bold text-white font-serif mb-1">Intensive Coaching</h3>
                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition duration-500 delay-100 line-clamp-2">
                  Dedicated JEE & NEET preparation hours with one-on-one expert faculty support.
                </p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-sm">
              <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Corridor" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2046]/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />
              <div className="absolute bottom-0 left-0 p-5 translate-y-4 group-hover:translate-y-0 transition duration-500">
                <h3 className="text-lg font-bold text-white font-serif mb-1">Vibrant Campus</h3>
                <p className="text-white/80 text-xs opacity-0 group-hover:opacity-100 transition duration-500 delay-100">
                  Expansive spaces for peer interaction and natural ventilation.
                </p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-sm">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Mentorship" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2046]/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />
              <div className="absolute bottom-0 left-0 p-5 translate-y-4 group-hover:translate-y-0 transition duration-500">
                <h3 className="text-lg font-bold text-white font-serif mb-1">Guided Mentorship</h3>
                <p className="text-white/80 text-xs opacity-0 group-hover:opacity-100 transition duration-500 delay-100">
                  Open-door leadership and personal academic guidance.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto text-center py-20 px-6">
        <h2 className="text-3xl font-bold text-[#0B2046] font-serif mb-6">Ready to secure your future?</h2>
        <Link href="/admissions" className="inline-flex items-center gap-2 bg-amber-500 text-[#0B2046] px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-400 transition shadow-lg">
          Apply for Junior College <ChevronRight size={20} />
        </Link>
      </section>

    </main>
  );
}