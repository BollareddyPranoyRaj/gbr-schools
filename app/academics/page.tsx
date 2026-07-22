// app/academics/page.tsx
"use client";

import React, { useState } from 'react';

const festivals = [
  { date: "26.06.2026", day: "Fri", name: "Muharram" },
  { date: "15.08.2026", day: "Sat", name: "Independence Day" },
  { date: "25.08.2026", day: "Tue", name: "Eid-E-Milad" },
  { date: "04.09.2026", day: "Fri", name: "Janmastami" },
  { date: "14.09.2026", day: "Mon", name: "Ganesh Chaturthi" },
  { date: "02.10.2026", day: "Fri", name: "Gandhi Jayanthi" },
  { date: "19.10.2026", day: "Mon", name: "Durgastami" },
  { date: "20.10.2026", day: "Tue", name: "Vijaya Dashami" },
  { date: "08.11.2026", day: "Sun", name: "Deepavali" },
  { date: "25.12.2026", day: "Fri", name: "Christmas Day" },
  { date: "15.01.2027", day: "Fri", name: "Pongal" },
  { date: "16.01.2027", day: "Sat", name: "Kanuma Panduga" },
  { date: "26.01.2027", day: "Tue", name: "Republic Day" },
  { date: "06.03.2027", day: "Sat", name: "Maha Shivaratri" },
  { date: "09.03.2027", day: "Tue", name: "Idul Fitr" },
  { date: "22.03.2027", day: "Mon", name: "Holi" },
  { date: "26.03.2027", day: "Fri", name: "Good Friday" },
  { date: "05.04.2027", day: "Mon", name: "Babu Jagjivan Ram Jayanti" },
  { date: "07.04.2027", day: "Wed", name: "Ugadi" },
  { date: "14.04.2027", day: "Wed", name: "Dr Ambedkar Jayanti" },
  { date: "15.04.2027", day: "Thu", name: "Sri Rama Navami" },
];

export default function AcademicsAndLifePage() {
  // State to track which accordion section is currently open
  const [openSection, setOpenSection] = useState<string | null>('calendar');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-4">
            Academics & School Life
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Comprehensive guidelines, schedules, and award systems designed to nurture holistic development and academic excellence.
          </p>
        </div>

        {/* --- ACCORDION 1: Academic Calendar --- */}
        <AccordionSection
          title="Academic Calendar"
          icon="📅"
          iconBg="bg-accent/15"
          iconColor="text-accent"
          isOpen={openSection === 'calendar'}
          onToggle={() => toggleSection('calendar')}
        >
          <p className="mb-6 text-sm leading-relaxed text-text-muted">
            List of festivals and holidays for the academic year 2026-2027.
          </p>
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <div className="overflow-x-auto max-h-[400px] overflow-y-auto">
              <table className="w-full min-w-[520px] border-collapse text-left relative">
                <thead className="sticky top-0 z-10 bg-gray-50 border-b border-gray-200 shadow-sm">
                  <tr>
                    <th className="w-1/4 px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Date</th>
                    <th className="w-1/4 px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Day</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Festival / Holiday</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {festivals.map((festival) => {
                    const isWeekend = festival.day === "Sun";
                    return (
                      <tr key={`${festival.date}-${festival.name}`} className="transition-colors hover:bg-blue-50/50">
                        <td className="px-6 py-4">
                          <span className="tabular-nums text-base font-semibold text-gray-900">{festival.date}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-bold uppercase tracking-wide ${
                            isWeekend ? "border-red-100 bg-red-50 text-red-600" : "border-gray-200 bg-gray-100 text-gray-600"
                          }`}>
                            {festival.day}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="font-medium text-gray-900">{festival.name}</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </AccordionSection>

        {/* --- ACCORDION 2: Timings --- */}
        <AccordionSection
          title="School Timings & Appointments"
          icon="🕒"
          iconBg="bg-primary/10"
          iconColor="text-primary"
          isOpen={openSection === 'timings'}
          onToggle={() => toggleSection('timings')}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-[#b8860b] flex items-center gap-2">Class Timings</h3>
              <div className="space-y-3">
                <TimingCard label="Nursery (EMS)" time="9:00 AM – 12:00 PM" />
                <TimingCard label="Pre-Primary & Primary (EMS & AC)" time="9:00 AM – 4:10 PM" />
                <TimingCard label="High School (EMS & AC)" time="8:00 AM – 5:30 PM" />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-[#b8860b] flex items-center gap-2">Office & Meetings</h3>
              <div className="space-y-3">
                <TimingCard label="School Office Hours" subtext="Monday to Saturday" time="9:00 AM – 5:00 PM" />
                <TimingCard label="Meeting the Dean" subtext="Monday to Saturday (Prior Appt.)" time="10:30 AM – 12:00 PM" />
                <TimingCard label="Meeting the Teacher" subtext="2nd Saturday of the month" time="9:00 AM – 12:00 PM" />
              </div>
            </div>
          </div>
        </AccordionSection>

        {/* --- ACCORDION 3: Assessment --- */}
        <AccordionSection
          title="Assessment & Promotion"
          icon="📝"
          iconBg="bg-blue-100"
          iconColor="text-blue-600"
          isOpen={openSection === 'assessment'}
          onToggle={() => toggleSection('assessment')}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <RuleItem text="Promotions are granted on the basis of the whole year's work. The final examination is not a promotion examination; regular attendance and steady work are crucial." />
              <RuleItem text="Four Formative Assessments and two Summative Assessments are conducted throughout the year." />
            </div>
            <div className="space-y-4">
              <RuleItem text="Pupils absent for an examination without a significant reason will be marked absent and will not be re-examined." />
              <RuleItem text="All promotions and detentions are decided after careful consideration, and the Principal's decision is final and binding." />
              <RuleItem text="Use of unfair means during tests will be dealt with severely." isWarning />
            </div>
          </div>
        </AccordionSection>

        {/* --- ACCORDION 4: Awards --- */}
        <AccordionSection
          title="Path to Success: Award System"
          icon="🏆"
          iconBg="bg-yellow-100"
          iconColor="text-yellow-600"
          isOpen={openSection === 'awards'}
          onToggle={() => toggleSection('awards')}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-[#789c4a]/5 rounded-xl p-6 border border-[#789c4a]/20">
              <h3 className="font-bold text-xl mb-6 text-[#5b7a35]">Grades 1 - 5</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <AwardBadge title="Star of the Month" desc="Performed well overall." />
                <AwardBadge title="Sweet Kid Award" desc="Nice to everyone." />
                <AwardBadge title="Good Samaritan" desc="Helpful to teachers/peers." />
                <AwardBadge title="Sunshine Kid" desc="Always bright and cheerful." />
                <AwardBadge title="Hang in There" desc="Doing better / improving." />
                <AwardBadge title="High Academic" desc="Academic excellence." />
              </div>
            </div>
            <div className="bg-[#e6c755]/10 rounded-xl p-6 border border-[#e6c755]/30">
              <h3 className="font-bold text-xl mb-6 text-[#9a8020]">Grades 6 - 9</h3>
              <div className="space-y-4">
                <AwardRow title="Leadership Award" desc="Good motivator, empowers others to achieve goals." />
                <AwardRow title="Interpersonal Sensitivity" desc="Sensitive to needs of others, works well with teams." />
                <AwardRow title="Quality Orientation" desc="Meticulous approach, ensures quality standards are met." />
                <AwardRow title="Action Orientation" desc="Initiates projects and is always ready to make decisions." />
              </div>
            </div>
          </div>
        </AccordionSection>

        {/* --- ACCORDION 5: Rules & Guidelines --- */}
        <AccordionSection
          title="Guidelines, Uniform & Parent Info"
          icon="📖"
          iconBg="bg-purple-100"
          iconColor="text-purple-600"
          isOpen={openSection === 'rules'}
          onToggle={() => toggleSection('rules')}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="text-base font-bold text-gray-900 mb-3 border-b pb-2">General Discipline</h3>
              <ul className="space-y-2.5 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-primary">•</span> Carry the school diary every day.</li>
                <li className="flex gap-2"><span className="text-primary">•</span> Move in corridors in perfect silence.</li>
                <li className="flex gap-2"><span className="text-primary">•</span> Communicate strictly in <strong>ENGLISH</strong>.</li>
                <li className="flex gap-2"><span className="text-primary">•</span> Arrive 15 mins early if using own transport.</li>
                <li className="flex gap-2"><span className="text-primary">•</span> No sharp objects or electronic gadgets.</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="text-base font-bold text-gray-900 mb-3 border-b pb-2">Uniform & Leaves</h3>
              <ul className="space-y-2.5 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-primary">•</span> Proper, clean uniform is mandatory.</li>
                <li className="flex gap-2"><span className="text-primary">•</span> Boys: short hair. Girls: 2 plaits.</li>
                <li className="flex gap-2"><span className="text-primary">•</span> No fancy watches, ornaments, or polish.</li>
                <li className="flex gap-2"><span className="text-primary">•</span> <strong>75% attendance</strong> for promotion.</li>
                <li className="flex gap-2"><span className="text-primary">•</span> Prior permission for personal leaves.</li>
              </ul>
            </div>

            <div className="bg-primary text-white rounded-xl p-5 flex flex-col justify-center">
              <h3 className="text-base font-bold mb-3 flex items-center gap-2">👨‍👩‍👧‍👦 Recommendation</h3>
              <p className="text-sm text-white/90 mb-3 leading-relaxed">
                The calendar serves as a vital bridge between teachers, students, and parents. Please review it regularly.
              </p>
              <p className="text-sm text-white/90 leading-relaxed">
                We encourage you to foster English conversation at home to support your child's growth.
              </p>
            </div>
          </div>
        </AccordionSection>

      </div>
    </main>
  );
}

/* --- Reusable UI Components for this page --- */

// The New Accordion Wrapper Component
function AccordionSection({ 
  title, 
  icon, 
  iconBg, 
  iconColor, 
  children, 
  isOpen, 
  onToggle 
}: { 
  title: string; 
  icon: string; 
  iconBg: string; 
  iconColor: string; 
  children: React.ReactNode; 
  isOpen: boolean; 
  onToggle: () => void;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors focus:outline-none"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <span className={`shrink-0 w-10 h-10 rounded-full ${iconBg} flex items-center justify-center ${iconColor} text-lg`}>
            {icon}
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 text-left">
            {title}
          </h2>
        </div>
        <span className={`shrink-0 ml-4 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      
      {/* Animated Dropdown Body using CSS Grid */}
      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pt-2 sm:px-8 sm:pb-8 sm:pt-4 border-t border-gray-100">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// Existing Smaller Components
function TimingCard({ label, subtext, time }: { label: string; subtext?: string; time: string }) {
  return (
    <div className="flex flex-col xl:flex-row xl:items-center justify-between p-4 bg-white border border-gray-200 shadow-sm rounded-xl">
      <div className="mb-2 xl:mb-0 pr-4">
        <p className="font-semibold text-gray-800">{label}</p>
        {subtext && <p className="text-xs text-gray-500 mt-0.5">{subtext}</p>}
      </div>
      <div className="shrink-0">
        <span className="inline-block px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-sm font-bold text-primary">
          {time}
        </span>
      </div>
    </div>
  );
}

function RuleItem({ text, isWarning = false }: { text: string; isWarning?: boolean }) {
  return (
    <div className="flex gap-3 items-start">
      <div className={`mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs ${isWarning ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
        {isWarning ? '!' : '✓'}
      </div>
      <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
    </div>
  );
}

function AwardBadge({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
      <p className="font-bold text-gray-800 text-sm mb-1">{title}</p>
      <p className="text-xs text-gray-500 leading-snug">{desc}</p>
    </div>
  );
}

function AwardRow({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-2 sm:gap-4 sm:items-center">
      <span className="font-bold text-gray-800 text-sm whitespace-nowrap min-w-[160px]">{title}</span>
      <span className="text-sm text-gray-600">{desc}</span>
    </div>
  );
}