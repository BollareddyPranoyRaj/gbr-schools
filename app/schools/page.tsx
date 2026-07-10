// app/schools/page.tsx
import React from 'react';
import { Snowflake, Sun, Bus, ShieldCheck, BookOpen, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'GBR English Medium Schools (AC & Non-AC) | Anaparthi',
  description: 'Premium early childhood and secondary education at GBR Schools. Offering State-of-the-art AC Campuses, dedicated transport, and child-centric learning.',
};

export default function SchoolsPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] pb-16">
      <div className="bg-[#0B2046] text-white py-20 px-6 md:px-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-serif max-w-4xl mx-auto leading-tight">
          GBR English Medium Schools
        </h1>
        <p className="text-white/80 mt-4 text-lg max-w-2xl mx-auto font-light">
          Nurturing young minds with a perfect blend of academics, discipline, and modern infrastructure. Select a campus below to explore.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <Link href="/schools/ac-campus" className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 flex flex-col items-center text-center group hover:-translate-y-2 hover:shadow-2xl transition duration-300 cursor-pointer">
            <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-white transition duration-300">
              <Snowflake size={32} />
            </div>
            <h2 className="text-2xl font-bold text-[#0B2046] font-serif">AC Campus</h2>
            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
              Fully air-conditioned classrooms designed to provide a comfortable, dust-free, and focused learning environment for primary and secondary students, ensuring peak concentration during peak summer months.
            </p>
            <div className="mt-8 flex items-center gap-2 text-blue-600 font-bold">
              Explore AC Campus <ArrowRight className="group-hover:translate-x-1 transition" size={20} />
            </div>
          </Link>

          <Link href="/schools/standard-campus" className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 flex flex-col items-center text-center group hover:-translate-y-2 hover:shadow-2xl transition duration-300 cursor-pointer">
            <div className="w-16 h-16 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition duration-300">
              <Sun size={32} />
            </div>
            <h2 className="text-2xl font-bold text-[#0B2046] font-serif">Standard Campus</h2>
            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
              Our traditional, highly ventilated campus focusing on rigorous academic standards, discipline, and holistic development. Features expansive open areas, natural lighting, and dedicated sports facilities.
            </p>
            <div className="mt-8 flex items-center gap-2 text-amber-600 font-bold">
              Explore Standard Campus <ArrowRight className="group-hover:translate-x-1 transition" size={20} />
            </div>
          </Link>
          
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-[#0B2046] font-serif mb-8 text-center">Shared Campus Infrastructure</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm text-center">
              <Bus className="mx-auto text-amber-500 mb-4" size={28} />
              <h4 className="font-semibold text-gray-900">Extensive Transport</h4>
              <p className="text-xs text-gray-500 mt-2">Dedicated fleet covering Rajahmundry, Anaparthi, and 40+ surrounding villages safely.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm text-center">
              <ShieldCheck className="mx-auto text-emerald-500 mb-4" size={28} />
              <h4 className="font-semibold text-gray-900">Secure Environment</h4>
              <p className="text-xs text-gray-500 mt-2">24/7 CCTV surveillance and restricted campus entry for ultimate student safety.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm text-center">
              <BookOpen className="mx-auto text-purple-500 mb-4" size={28} />
              <h4 className="font-semibold text-gray-900">Digital Library</h4>
              <p className="text-xs text-gray-500 mt-2">Access to thousands of curated physical books and digital learning modules.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm text-center">
              <Users className="mx-auto text-blue-500 mb-4" size={28} />
              <h4 className="font-semibold text-gray-900">Expert Faculty</h4>
              <p className="text-xs text-gray-500 mt-2">Highly experienced teaching staff focused on foundational conceptual clarity.</p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
