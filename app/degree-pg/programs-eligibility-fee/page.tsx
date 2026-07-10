// app/degree-pg/page.tsx
import React from 'react';
import { Briefcase, GraduationCap, Monitor, BookOpen, Users, Trophy } from 'lucide-react';
import Link from 'next/link';

const programsData = [
  { level: 'PG', name: 'MCA (Master of Computer Applications)', duration: '2 Years', eligibility: 'Graduation with 50% + APICET', fee: 'INR 35,000' },
  { level: 'PG', name: 'MBA (Master of Business Administration)', duration: '2 Years', eligibility: 'Graduation with 50% + APICET', fee: 'INR 70,000' },
  { level: 'PG', name: 'M.Sc (Chemistry / Computer Science)', duration: '2 Years', eligibility: 'B.Sc with AP PGCET', fee: 'Contact Office' },
  { level: 'UG', name: 'B.Sc (Mathematics, Physics, Chemistry)', duration: '3 Years', eligibility: 'Intermediate (MPC / Vocational)', fee: 'Contact Office' },
  { level: 'UG', name: 'B.Com', duration: '3 Years', eligibility: 'Intermediate passed', fee: 'Contact Office' },
  { level: 'UG', name: 'B.A', duration: '3 Years', eligibility: 'Intermediate passed', fee: 'Contact Office' },
  { level: 'Education', name: 'B.Ed (Bachelor of Education)', duration: '2 Years', eligibility: 'Degree passed with APEDCET qualification', fee: 'As per Govt norms' },
  { level: 'Education', name: 'D.Ed (Diploma in Education)', duration: '2 Years', eligibility: 'Intermediate passed', fee: 'As per Govt norms' },
];

export const metadata = {
  title: 'Degree & PG College | Programs, Fees & Placements',
  description: 'Complete academic offerings, placements, and infrastructure for GBR Degree & PG College.',
};

export default function DegreePGPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] pb-20">
      
      {/* 1. Hero Section */}
      <div className="bg-[#0B2046] text-white py-24 px-6 md:px-12 text-center relative overflow-hidden border-b-[6px] border-amber-500">
        <div className="relative z-10">
          <div className="w-16 h-16 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-purple-400/30">
            <GraduationCap size={32} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-serif max-w-4xl mx-auto leading-tight">
            Degree & PG College
          </h1>
          <p className="text-purple-300 mt-4 text-xl font-medium tracking-wide uppercase">
            UG • PG • Teacher Education
          </p>
          <p className="text-white/80 mt-4 text-lg max-w-2xl mx-auto font-light">
            Bridging the gap between academic excellence and industry readiness with top-tier infrastructure and elite campus placements.
          </p>
        </div>
      </div>

      {/* 2. Principal's Message */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
          <div className="w-40 h-40 rounded-full bg-gray-200 overflow-hidden shrink-0 border-4 border-purple-500 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Dr. T. Ramachandra - Principal" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#0B2046] font-serif mb-2">Dr. T. Ramachandra</h2>
            <p className="text-purple-600 text-lg font-semibold mb-4">Principal, Degree & PG College</p>
            <p className="text-gray-600 leading-relaxed italic text-lg">
              &ldquo;Higher education is not just about acquiring a degree; it is about forging a career. Our curriculum, combined with advanced laboratories and a dedicated placement cell, ensures that every student who walks out of these gates is a professional ready to lead in the corporate and scientific world.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* 3. Placements & Top Recruiters */}
      <section className="bg-white py-20 px-6 md:px-12 border-y border-gray-100 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2046] font-serif mb-4">Training & Placement Cell</h2>
          <p className="text-gray-500 mb-12 max-w-2xl mx-auto">Consistently securing high-paying roles for our graduates in leading MNCs through dedicated campus recruitment drives.</p>
          
          {/* Placement Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
              <h3 className="text-4xl font-bold text-purple-700 font-serif mb-2">12 LPA</h3>
              <p className="text-gray-700 font-medium">Highest Package Offered</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
              <h3 className="text-4xl font-bold text-amber-700 font-serif mb-2">350+</h3>
              <p className="text-gray-700 font-medium">Students Placed Last Year</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <h3 className="text-4xl font-bold text-blue-700 font-serif mb-2">40+</h3>
              <p className="text-gray-700 font-medium">Visiting Companies</p>
            </div>
          </div>

          {/* Recruiter Logos (CSS Grid Text Placeholders - Replace with actual images later) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-70">
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-xl border border-gray-200 font-bold text-xl text-gray-400">TCS</div>
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-xl border border-gray-200 font-bold text-xl text-gray-400">Infosys</div>
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-xl border border-gray-200 font-bold text-xl text-gray-400">Wipro</div>
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-xl border border-gray-200 font-bold text-xl text-gray-400">Tech Mahindra</div>
          </div>
        </div>
      </section>

      {/* 4. Programs, Eligibility & Fees Table */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-20">
        <div className="border-b border-gray-200 pb-6 mb-10 text-center md:text-left">
          <h2 className="text-[#0B2046] text-3xl font-bold font-serif">Programs, Eligibility & Fees</h2>
          <p className="text-gray-600 mt-2">Comprehensive course details across GBR Higher Education & Professional Streams.</p>
        </div>
        <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-[#0B2046] text-white">
                  <th className="p-5 font-semibold text-sm tracking-wider uppercase">Level</th>
                  <th className="p-5 font-semibold text-sm tracking-wider uppercase">Program / Course Name</th>
                  <th className="p-5 font-semibold text-sm tracking-wider uppercase">Duration</th>
                  <th className="p-5 font-semibold text-sm tracking-wider uppercase">Eligibility Criteria</th>
                  <th className="p-5 font-semibold text-sm tracking-wider uppercase">Fee Structure</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {programsData.map((course, idx) => (
                  <tr key={idx} className="hover:bg-purple-50/50 transition-colors">
                    <td className="p-5 font-medium text-xs">
                      <span className={`px-3 py-1 rounded-full uppercase font-bold text-[10px] tracking-wider ${
                        course.level === 'PG' ? 'bg-purple-100 text-purple-700' :
                        course.level === 'UG' ? 'bg-blue-100 text-blue-700' :
                        'bg-emerald-100 text-emerald-700'
                      }`}>
                        {course.level}
                      </span>
                    </td>
                    <td className="p-5 font-semibold text-gray-900">{course.name}</td>
                    <td className="p-5 text-gray-600 font-medium">{course.duration}</td>
                    <td className="p-5 text-gray-600 text-sm">{course.eligibility}</td>
                    <td className="p-5 text-gray-700 font-semibold">{course.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Infrastructure & Campus Life (Cinematic Grid) */}
      <section className="bg-gray-50 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B2046] font-serif mb-4">Advanced Infrastructure</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Equipped with modern laboratories and vast knowledge centers for research and professional development.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[900px] md:h-[600px]">
            
            {/* Computer / MCA Labs */}
            <div className="relative group overflow-hidden rounded-2xl md:col-span-2 md:row-span-2 shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Computer Labs" 
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2046]/90 via-[#0B2046]/30 to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />
              <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition duration-500">
                <Monitor className="text-white mb-3" size={32} />
                <h3 className="text-2xl font-bold text-white font-serif mb-2">High-Tech IT Labs</h3>
                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition duration-500 delay-100">
                  Fully equipped programming and software development labs tailored for MCA and Computer Science students.
                </p>
              </div>
            </div>

            {/* Central Library */}
            <div className="relative group overflow-hidden rounded-2xl md:col-span-2 shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Central Library" 
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2046]/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition duration-500">
                <BookOpen className="text-white mb-2" size={24} />
                <h3 className="text-xl font-bold text-white font-serif mb-1">Central Digital Library</h3>
                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition duration-500 delay-100 line-clamp-2">
                  Access thousands of international journals, research papers, and core academic texts.
                </p>
              </div>
            </div>

            {/* Chemistry / Science Labs */}
            <div className="relative group overflow-hidden rounded-2xl shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Science Labs" 
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2046]/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />
              <div className="absolute bottom-0 left-0 p-5 translate-y-4 group-hover:translate-y-0 transition duration-500">
                <h3 className="text-lg font-bold text-white font-serif mb-1">M.Sc Chemistry Labs</h3>
                <p className="text-white/80 text-xs opacity-0 group-hover:opacity-100 transition duration-500 delay-100">
                  Advanced analytical instruments and research facilities.
                </p>
              </div>
            </div>

            {/* Seminar Hall */}
            <div className="relative group overflow-hidden rounded-2xl shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Seminar Hall" 
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2046]/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />
              <div className="absolute bottom-0 left-0 p-5 translate-y-4 group-hover:translate-y-0 transition duration-500">
                <h3 className="text-lg font-bold text-white font-serif mb-1">Seminar Halls</h3>
                <p className="text-white/80 text-xs opacity-0 group-hover:opacity-100 transition duration-500 delay-100">
                  Spacious venues for MBA presentations, guest lectures, and campus drives.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      
    </main>
  );
}
