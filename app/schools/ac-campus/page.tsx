// app/schools/ac-campus/page.tsx
import React from 'react';
import { Snowflake, CheckCircle2, MonitorPlay, Wind, Users } from 'lucide-react';

export const metadata = {
  title: 'AC Campus | GBR English Medium Schools',
  description: 'Fully air-conditioned, premium primary education campus at GBR Schools.',
};

export default function ACCampusPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] pb-20">
      {/* Hero Section */}
      <div className="bg-[#0B2046] text-white py-24 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="relative z-10">
          <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-blue-400/30">
            <Snowflake size={32} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-serif max-w-4xl mx-auto leading-tight">
            The AC Campus
          </h1>
          <p className="text-blue-200 mt-4 text-xl font-medium tracking-wide">
            Premium Primary Education
          </p>
          <p className="text-white/80 mt-4 text-lg max-w-2xl mx-auto font-light">
            A climate-controlled, dust-free ecosystem designed specifically to maximize focus, comfort, and cognitive development for our youngest learners.
          </p>
        </div>
      </div>

      {/* Leadership Section */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 mb-20">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
          <div className="w-40 h-40 rounded-full bg-gray-200 overflow-hidden shrink-0 border-4 border-blue-500 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Mrs. Lakshmi V. - Headmistress" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#0B2046] font-serif mb-2">Mrs. Lakshmi V.</h2>
            <p className="text-blue-600 text-lg font-semibold mb-4">Headmistress, AC Campus</p>
            <p className="text-gray-600 leading-relaxed italic text-lg">
              &ldquo;In their formative years, children require an environment that is not just educational, but deeply nurturing and highly comfortable. Our AC Campus is meticulously designed to remove physical distractions like heat and dust, allowing our students&apos; natural curiosity and brilliance to take center stage.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition duration-300">
            <Wind className="mx-auto text-blue-500 mb-4" size={36} />
            <h3 className="text-xl font-bold text-[#0B2046] mb-3">100% Climate Controlled</h3>
            <p className="text-gray-500 text-sm">Centralized air-conditioning ensures a consistent, cool, and dust-free atmosphere throughout the academic year.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition duration-300">
            <MonitorPlay className="mx-auto text-blue-500 mb-4" size={36} />
            <h3 className="text-xl font-bold text-[#0B2046] mb-3">Smart Classrooms</h3>
            <p className="text-gray-500 text-sm">Every classroom is equipped with interactive digital boards and multimedia learning tools for visual education.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition duration-300">
            <Users className="mx-auto text-blue-500 mb-4" size={36} />
            <h3 className="text-xl font-bold text-[#0B2046] mb-3">Restricted Batch Sizes</h3>
            <p className="text-gray-500 text-sm">Strictly limited student-to-teacher ratios ensure every child receives personalized attention and care.</p>
          </div>
        </div>
      </section>

      {/* Visual Showcase (Cinematic Grid) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2046] font-serif mb-4">Inside the AC Campus</h2>
          <p className="text-gray-500">A visual tour of our premium primary facilities.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[900px] md:h-[600px]">
          
          {/* Main Classroom Focus */}
          <div className="relative group overflow-hidden rounded-2xl md:col-span-2 md:row-span-2 shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Interactive Learning" 
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2046]/90 via-[#0B2046]/30 to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />
            <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition duration-500">
              <h3 className="text-2xl font-bold text-white font-serif mb-2">Engaging Smart Classes</h3>
              <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition duration-500 delay-100">
                Highly visual, interactive sessions that make complex concepts easy and fun for early learners.
              </p>
            </div>
          </div>

          {/* Activity Room */}
          <div className="relative group overflow-hidden rounded-2xl md:col-span-2 shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Activity Zones" 
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2046]/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />
            <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition duration-500">
              <h3 className="text-xl font-bold text-white font-serif mb-1">Indoor Activity Zones</h3>
              <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition duration-500 delay-100 line-clamp-2">
                Climate-controlled play areas ensuring physical activity continues regardless of outside weather.
              </p>
            </div>
          </div>

          {/* Teacher Interaction */}
          <div className="relative group overflow-hidden rounded-2xl shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Teacher Interaction" 
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2046]/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />
            <div className="absolute bottom-0 left-0 p-5 translate-y-4 group-hover:translate-y-0 transition duration-500">
              <h3 className="text-lg font-bold text-white font-serif mb-1">Personal Care</h3>
              <p className="text-white/80 text-xs opacity-0 group-hover:opacity-100 transition duration-500 delay-100">
                Dedicated attention to individual cognitive growth.
              </p>
            </div>
          </div>

          {/* Modern Infrastructure */}
          <div className="relative group overflow-hidden rounded-2xl shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1620325867502-221ddb5faa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Modern Infrastructure" 
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2046]/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />
            <div className="absolute bottom-0 left-0 p-5 translate-y-4 group-hover:translate-y-0 transition duration-500">
              <h3 className="text-lg font-bold text-white font-serif mb-1">Premium Seating</h3>
              <p className="text-white/80 text-xs opacity-0 group-hover:opacity-100 transition duration-500 delay-100">
                Ergonomic, modern furniture for growing children.
              </p>
            </div>
          </div>

        </div>
      </section>
      
    </main>
  );
}
