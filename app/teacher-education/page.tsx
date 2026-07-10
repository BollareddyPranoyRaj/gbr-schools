// app/teacher-education/page.tsx
import React from 'react';
import { BookOpen, Users, Award, Briefcase, FileCheck, Target } from 'lucide-react';

export const metadata = {
  title: 'GBR College of Education | B.Ed & D.Ed',
  description: 'NCTE-approved teacher training programs in Anaparthi. We shape the educators of tomorrow through comprehensive theory and practical school internships.',
};

export default function TeacherEducationPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] pb-16">
      <div className="bg-[#0B2046] text-white py-20 px-6 md:px-12 text-center border-b-[6px] border-emerald-500">
        <h1 className="text-4xl md:text-5xl font-bold font-serif max-w-4xl mx-auto leading-tight flex flex-col items-center gap-4">
          <BookOpen size={48} className="text-emerald-400" />
          GBR College of Education
        </h1>
        <p className="text-white/80 mt-4 text-lg max-w-2xl mx-auto font-light">
          Approved by NCTE & Affiliated to Adikavi Nannaya University. 
          Building the nation&apos;s future by training exceptional educators.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        
        {/* Verification Block */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-16 flex items-center gap-4 justify-center md:justify-start">
          <FileCheck className="text-emerald-600 shrink-0" size={32} />
          <div>
            <h3 className="font-bold text-gray-900">NCTE Approved Institution</h3>
            <p className="text-sm text-gray-700 mt-1">Our programs strictly adhere to the guidelines set by the National Council for Teacher Education.</p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0B2046] font-serif">Programs Offered</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Comprehensive training frameworks balancing academic theory with mandatory, supervised classroom practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* B.Ed Block */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg transition">
            <div className="bg-emerald-600 p-6 text-white text-center">
              <h3 className="text-3xl font-bold font-serif">B.Ed</h3>
              <p className="text-emerald-100 text-sm mt-1 uppercase tracking-wider font-semibold">Bachelor of Education</p>
            </div>
            <div className="p-8">
              <div className="flex justify-between border-b border-gray-100 pb-4 mb-4 text-sm">
                <span className="text-gray-500">Duration</span>
                <span className="font-semibold text-gray-900">2 Years (4 Semesters)</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-4 mb-4 text-sm">
                <span className="text-gray-500">Intake Capacity</span>
                <span className="font-semibold text-gray-900">100 Seats</span>
              </div>
              <div className="flex flex-col gap-2 border-b border-gray-100 pb-4 mb-6 text-sm">
                <span className="text-gray-500">Eligibility</span>
                <span className="font-semibold text-gray-900">Undergraduate Degree (B.Sc, B.Com, B.A) + AP EDCET Rank</span>
              </div>
              
              <h4 className="font-bold text-[#0B2046] mb-3 flex items-center gap-2">
                <Target size={18} className="text-emerald-500" />
                Core Methodologies Offered
              </h4>
              <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                <li className="bg-gray-50 p-2 rounded">Mathematics</li>
                <li className="bg-gray-50 p-2 rounded">Physical Science</li>
                <li className="bg-gray-50 p-2 rounded">Biological Science</li>
                <li className="bg-gray-50 p-2 rounded">Social Studies</li>
                <li className="bg-gray-50 p-2 rounded">English</li>
                <li className="bg-gray-50 p-2 rounded">Telugu</li>
              </ul>
            </div>
          </div>

          {/* D.Ed Block */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg transition">
            <div className="bg-[#0B2046] p-6 text-white text-center">
              <h3 className="text-3xl font-bold font-serif">D.Ed</h3>
              <p className="text-blue-100 text-sm mt-1 uppercase tracking-wider font-semibold">Diploma in Education</p>
            </div>
            <div className="p-8">
              <div className="flex justify-between border-b border-gray-100 pb-4 mb-4 text-sm">
                <span className="text-gray-500">Duration</span>
                <span className="font-semibold text-gray-900">2 Years</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-4 mb-4 text-sm">
                <span className="text-gray-500">Intake Capacity</span>
                <span className="font-semibold text-gray-900">50 Seats</span>
              </div>
              <div className="flex flex-col gap-2 border-b border-gray-100 pb-4 mb-6 text-sm">
                <span className="text-gray-500">Eligibility</span>
                <span className="font-semibold text-gray-900">Intermediate (10+2) Pass + AP DEECET Rank</span>
              </div>
              
              <h4 className="font-bold text-[#0B2046] mb-3 flex items-center gap-2">
                <Target size={18} className="text-[#0B2046]" />
                Training Focus
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-4 rounded border border-gray-100">
                Specialized pedagogical training designed exclusively for handling primary level students (Classes I to V). Focuses on child psychology, early childhood care, and foundational literacy and numeracy (FLN).
              </p>
            </div>
          </div>

        </div>

        {/* The Practical Advantage */}
        <div className="mt-16 bg-white p-8 md:p-12 rounded-2xl border border-gray-100 shadow-sm text-center">
          <Award className="mx-auto text-amber-500 mb-4" size={40} />
          <h3 className="text-2xl font-bold text-[#0B2046] font-serif mb-4">The Practice-Teaching Advantage</h3>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Unlike standalone education colleges, GBR trainees have direct access to our own GBR English Medium Schools located within the same trust ecosystem. This provides our B.Ed and D.Ed students with immediate, high-quality practical exposure, observation hours, and seamless internship placements in real, functioning AC and Non-AC classrooms.
          </p>
          <div className="mt-8 flex justify-center gap-4">
             <div className="bg-gray-50 px-6 py-3 rounded text-sm font-semibold text-[#0B2046] border border-gray-200">
               In-house Micro Teaching
             </div>
             <div className="bg-gray-50 px-6 py-3 rounded text-sm font-semibold text-[#0B2046] border border-gray-200">
               Guaranteed Internships
             </div>
          </div>
        </div>

      </div>
    </main>
  );
}
