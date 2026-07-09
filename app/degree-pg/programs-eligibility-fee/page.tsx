// app/degree-pg/programs-eligibility-fee/page.tsx
import React from 'react';

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
  title: 'Programs, Eligibility & Fee Structure | GBR Institutions',
  description: 'Explore the complete academic offerings, eligibility criteria, and fee structures for GBR Degree, PG, and Teacher Education colleges.',
};

export default function ProgramsFeePage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="border-b border-gray-200 pb-6 mb-12">
          <h1 className="text-[#0B2046] text-4xl font-bold font-serif">Programs, Eligibility & Fees</h1>
          <p className="text-gray-600 mt-2 text-lg">Comprehensive course details across GBR Higher Education & Professional Streams.</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0B2046] text-white">
                  <th className="p-4 font-semibold text-sm tracking-wider uppercase">Level</th>
                  <th className="p-4 font-semibold text-sm tracking-wider uppercase">Program / Course Name</th>
                  <th className="p-4 font-semibold text-sm tracking-wider uppercase">Duration</th>
                  <th className="p-4 font-semibold text-sm tracking-wider uppercase">Eligibility Criteria</th>
                  <th className="p-4 font-semibold text-sm tracking-wider uppercase">Fee Structure</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {programsData.map((course, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/70 transition-colors">
                    <td className="p-4 font-medium text-xs"><span className="bg-gray-100 text-[#0B2046] px-2.5 py-1 rounded-full uppercase">{course.level}</span></td>
                    <td className="p-4 font-semibold text-gray-900">{course.name}</td>
                    <td className="p-4 text-gray-600">{course.duration}</td>
                    <td className="p-4 text-gray-600 text-sm max-w-xs">{course.eligibility}</td>
                    <td className="p-4 text-gray-700 font-medium">{course.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}