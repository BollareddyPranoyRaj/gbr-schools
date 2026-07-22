// app/admissions/page.tsx
"use client";

import React, { useState } from 'react';

export default function AdmissionsPage() {
  // State to track which accordion section is currently open
  const [openSection, setOpenSection] = useState<string | null>('admission');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight mb-4">
            Admissions & Fee Policy
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Everything you need to know about joining GBR Schools, including fee structures and administrative guidelines.
          </p>
        </div>

        {/* --- ACCORDION 1: Admission Guidelines --- */}
        <AccordionSection
          title="Admission Guidelines"
          icon="🎓"
          iconBg="bg-primary/10"
          iconColor="text-primary"
          isOpen={openSection === 'admission'}
          onToggle={() => toggleSection('admission')}
        >
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1 text-lg">♦</span>
              <span className="leading-relaxed">Admissions depend strictly on available vacancies, and all decisions are final.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1 text-lg">♦</span>
              <span className="leading-relaxed">School management holds the final right to admit or retain any student.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1 text-lg">♦</span>
              <span className="leading-relaxed">Admission is confirmed only upon payment of a strictly non-refundable admission fee.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1 text-lg">♦</span>
              <span className="leading-relaxed">For Standard I, students must be at least 5.5 years old by August 31st of the admission year.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1 text-lg">♦</span>
              <span className="leading-relaxed">New students must submit an official Municipal Birth Certificate to verify their age.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1 text-lg">♦</span>
              <span className="leading-relaxed">Please submit the original previous report card along with one clear photocopy.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1 text-lg">♦</span>
              <span className="leading-relaxed">Out-of-state Transfer Certificates must be countersigned by that state's Education Inspector.</span>
            </li>
          </ul>
        </AccordionSection>

        {/* --- ACCORDION 2: School Fees & Fee Policy --- */}
        <AccordionSection
          title="School Fees & Fee Policy"
          icon="💳"
          iconBg="bg-green-100"
          iconColor="text-green-600"
          isOpen={openSection === 'fees'}
          onToggle={() => toggleSection('fees')}
        >
          <div className="space-y-8">
            <ol className="list-decimal list-inside space-y-2 text-gray-700 font-medium">
              <li>Parents are Instructed to pay the school fee without Late.</li>
              <li>After due date, school fees will be collected at school office along with fine amount in favour of <strong className="text-primary">"GBR EDUCATIONAL INSTITUTIONS"</strong></li>
            </ol>

            <div className="overflow-hidden rounded-xl border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-center text-sm md:text-base bg-white">
                  <thead>
                    <tr className="bg-gray-50 font-bold text-primary border-b border-gray-200">
                      <th className="border-r border-gray-200 p-4" rowSpan={2}>CAMPUS</th>
                      <th className="border-r border-gray-200 p-4" colSpan={3}>TUITION FEE</th>
                      <th className="p-4" colSpan={2}>TRANSPORT FEE SCHEDULE</th>
                    </tr>
                    <tr className="bg-gray-100 font-semibold text-primary text-xs md:text-sm border-b border-gray-200">
                      <th className="border-r border-gray-200 p-3">1st INSTALLMENT</th>
                      <th className="border-r border-gray-200 p-3">2nd INSTALLMENT</th>
                      <th className="border-r border-gray-200 p-3">3rd INSTALLMENT</th>
                      <th className="border-r border-gray-200 p-3">1st INSTALLMENT</th>
                      <th className="p-3">2nd INSTALLMENT</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 font-medium divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="border-r border-gray-200 p-4 font-bold text-[#b91c1c]">E.M.S</td>
                      <td className="border-r border-gray-200 p-4">
                        <span className="block text-base font-bold text-gray-900">40%</span>
                        <span className="text-xs text-gray-500">(JUN 1st to 10th)</span>
                      </td>
                      <td className="border-r border-gray-200 p-4">
                        <span className="block text-base font-bold text-gray-900">30%</span>
                        <span className="text-xs text-gray-500">(SEPT 1st to 10th)</span>
                      </td>
                      <td className="border-r border-gray-200 p-4">
                        <span className="block text-base font-bold text-gray-900">30%</span>
                        <span className="text-xs text-gray-500">(DEC 1st to 10th)</span>
                      </td>
                      <td className="border-r border-gray-200 p-4">
                        <span className="block text-base font-bold text-gray-900">50%</span>
                        <span className="text-xs text-gray-500">(JUN 1st to 10th)</span>
                      </td>
                      <td className="p-4">
                        <span className="block text-base font-bold text-gray-900">50%</span>
                        <span className="text-xs text-gray-500">(SEP 1st to 10th)</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="border-r border-gray-200 p-4 font-bold text-[#b91c1c]">A.C. CAMPUS</td>
                      <td className="border-r border-gray-200 p-4">
                        <span className="block text-base font-bold text-gray-900">50%</span>
                        <span className="text-xs text-gray-500">(JUN 1st to 10th)</span>
                      </td>
                      <td className="border-r border-gray-200 p-4">
                        <span className="block text-base font-bold text-gray-900">50%</span>
                        <span className="text-xs text-gray-500">(OCT 1st to 10th)</span>
                      </td>
                      <td className="border-r border-gray-200 p-4 tracking-widest text-gray-300">
                        ---------
                      </td>
                      <td className="border-r border-gray-200 p-4">
                        <span className="block text-base font-bold text-gray-900">50%</span>
                        <span className="text-xs text-gray-500">(JUN 1st to 10th)</span>
                      </td>
                      <td className="p-4">
                        <span className="block text-base font-bold text-gray-900">50%</span>
                        <span className="text-xs text-gray-500">(OCT 1st to 10th)</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-red-50/50 p-5 rounded-xl border border-red-100 shadow-sm">
              <h4 className="font-bold text-[#b91c1c] mb-3 flex items-center gap-2">
                <span className="text-xl">⚠️</span> Important Note
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 leading-relaxed">
                <li>All monetary dues related to academic & transport should be cleared on or before the due dates failing which the school management is authorised to impose a penalty of Rs.50/- per day.</li>
                <li>Payment must be made at the school premise in the form of cash.</li>
              </ol>
            </div>
          </div>
        </AccordionSection>

        {/* --- ACCORDION 3: Withdrawal --- */}
        <AccordionSection
          title="Withdrawal Policies"
          icon="🛑"
          iconBg="bg-red-100"
          iconColor="text-red-500"
          isOpen={openSection === 'withdrawal'}
          onToggle={() => toggleSection('withdrawal')}
        >
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1 text-lg">♦</span>
              <span className="leading-relaxed">One calendar week's notice is required to be given for the withdrawal of the student before the payment schedule, else fees for the month will be charged.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1 text-lg">♦</span>
              <span className="leading-relaxed">School leaving certificate will not be issued until the school dues have been paid in full.</span>
            </li>
          </ul>
        </AccordionSection>

        {/* --- ACCORDION 4: Leaving Certificate (T.C.) --- */}
        <AccordionSection
          title="Leaving Certificate (T.C.) Rules"
          icon="📜"
          iconBg="bg-[#4a7c59]/15"
          iconColor="text-[#4a7c59]"
          isOpen={openSection === 'tc'}
          onToggle={() => toggleSection('tc')}
        >
          <div className="space-y-5">
            <p className="font-bold text-[#a63a3a] bg-red-50 inline-block px-4 py-2 rounded-lg border border-red-100 text-sm">
              Parents are requested to note the following:
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="text-[#4a7c59] mr-3 mt-1 text-lg">♦</span>
                <span className="leading-relaxed">Parent / Guardian should approach the office and should fill out the T.C. form in person.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4a7c59] mr-3 mt-1 text-lg">♦</span>
                <span className="leading-relaxed">After applying for a T.C., it takes a minimum of <strong>7 working days</strong> to process.</span>
              </li>
            </ul>
          </div>
        </AccordionSection>

      </div>
    </main>
  );
}

/* --- Reusable Accordion Component --- */
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
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:border-gray-300">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors focus:outline-none"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <span className={`shrink-0 w-12 h-12 rounded-full ${iconBg} flex items-center justify-center ${iconColor} text-xl shadow-inner`}>
            {icon}
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 text-left">
            {title}
          </h2>
        </div>
        <span className={`shrink-0 ml-4 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
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