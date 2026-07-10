// app/academic-calendar/page.tsx
"use client";

import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';

const calendarData = {
  schools: [
    { event: 'Academic Year Begins', date: 'June 12, 2026' },
    { event: 'Quarterly Examinations', date: 'September 15 - 24, 2026' },
    { event: 'Dasara Vacation', date: 'October 1 - 10, 2026' },
    { event: 'Half-Yearly Examinations', date: 'December 28 - January 6, 2027' },
    { event: 'Sankranti Vacation', date: 'January 10 - 18, 2027' },
    { event: 'Annual Examinations', date: 'April 10 - 22, 2027' },
  ],
  degreePG: [
    { event: 'Odd Semester Commencement', date: 'July 1, 2026' },
    { event: 'Mid-Term Examinations I', date: 'August 20 - 25, 2026' },
    { event: 'Mid-Term Examinations II', date: 'October 25 - 30, 2026' },
    { event: 'Odd Semester Final Exams', date: 'November 15 - 30, 2026' },
    { event: 'Even Semester Commencement', date: 'December 15, 2026' },
    { event: 'Even Semester Final Exams', date: 'April 15 - 30, 2027' },
  ],
  teacherEducation: [
    { event: 'B.Ed & D.Ed Admissions Close', date: 'August 30, 2026' },
    { event: 'Orientation & Classes Begin', date: 'September 5, 2026' },
    { event: 'School Internship Phase I', date: 'November 1 - 30, 2026' },
    { event: 'Semester I Practicals', date: 'January 20 - 30, 2027' },
    { event: 'Semester I Theory Exams', date: 'February 5 - 15, 2027' },
    { event: 'School Internship Phase II', date: 'March 1 - April 15, 2027' },
  ]
};

type TabType = 'schools' | 'degreePG' | 'teacherEducation';

export default function AcademicCalendarPage() {
  const [activeTab, setActiveTab] = useState<TabType>('schools');

  return (
    <main className="min-h-screen bg-[#F8F9FA] py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="border-b border-gray-200 pb-6 mb-10">
          <h1 className="text-[#0B2046] text-4xl font-bold font-serif flex items-center gap-3">
            <CalendarIcon size={36} className="text-amber-500" />
            Academic Calendar 2026-2027
          </h1>
        </div>

        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 pb-4">
          <button
            onClick={() => setActiveTab('schools')}
            className={`px-6 py-2.5 rounded-t-lg font-medium text-sm transition-colors ${
              activeTab === 'schools'
                ? 'bg-[#0B2046] text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 border-b-0'
            }`}
          >
            GBR Schools
          </button>
          <button
            onClick={() => setActiveTab('degreePG')}
            className={`px-6 py-2.5 rounded-t-lg font-medium text-sm transition-colors ${
              activeTab === 'degreePG'
                ? 'bg-[#0B2046] text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 border-b-0'
            }`}
          >
            Degree & PG College
          </button>
          <button
            onClick={() => setActiveTab('teacherEducation')}
            className={`px-6 py-2.5 rounded-t-lg font-medium text-sm transition-colors ${
              activeTab === 'teacherEducation'
                ? 'bg-[#0B2046] text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 border-b-0'
            }`}
          >
            Teacher Education (B.Ed/D.Ed)
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 bg-[#0B2046]/5 border-b border-gray-100 flex items-center gap-2">
            <Clock size={20} className="text-[#0B2046]" />
            <h2 className="text-[#0B2046] font-semibold text-lg uppercase tracking-wide">
              {activeTab === 'schools' && 'School Academic Schedule'}
              {activeTab === 'degreePG' && 'Higher Education Semester Schedule'}
              {activeTab === 'teacherEducation' && 'Teacher Training Schedule'}
            </h2>
          </div>
          
          <div className="divide-y divide-gray-100">
            {calendarData[activeTab].map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-5 hover:bg-gray-50 transition-colors">
                <span className="font-medium text-gray-900 text-lg md:w-1/2">{item.event}</span>
                <span className="text-gray-600 bg-gray-100 px-4 py-1.5 rounded text-sm md:w-1/3 mt-3 md:mt-0 whitespace-nowrap inline-block text-center border border-gray-200">
                  {item.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
