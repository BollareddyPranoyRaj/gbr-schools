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
    <div className="min-h-screen bg-background pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-2">
        
        {/* Page Header */}
        <div className="text-center mb-12 pt-16 sm:pt-20">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4 [text-wrap:balance]">
            Admissions & Fee Policy
          </h1>
          <p className="text-base text-text-muted max-w-2xl mx-auto">
            Everything you need to know about joining GBR Schools, including fee structures and administrative guidelines.
          </p>
        </div>

        {/* --- ACCORDION 1: Admission Guidelines --- */}
        <AccordionSection
          id="admission"
          title="Admission Guidelines"
          isOpen={openSection === 'admission'}
          onToggle={() => toggleSection('admission')}
        >
          <ul className="space-y-4 text-text-muted list-disc pl-5">
            <li className="leading-relaxed">Admissions depend strictly on available vacancies, and all decisions are final.</li>
            <li className="leading-relaxed">School management holds the final right to admit or retain any student.</li>
            <li className="leading-relaxed">Admission is confirmed only upon payment of a strictly non-refundable admission fee.</li>
            <li className="leading-relaxed">For Standard I, students must be at least 5.5 years old by August 31st of the admission year.</li>
            <li className="leading-relaxed">New students must submit an official Municipal Birth Certificate to verify their age.</li>
            <li className="leading-relaxed">Please submit the original previous report card along with one clear photocopy.</li>
            <li className="leading-relaxed">Out-of-state Transfer Certificates must be countersigned by that state's Education Inspector.</li>
          </ul>
        </AccordionSection>

        {/* --- ACCORDION 2: School Fees & Fee Policy --- */}
        <AccordionSection
          id="fees"
          title="School Fees & Fee Policy"
          isOpen={openSection === 'fees'}
          onToggle={() => toggleSection('fees')}
        >
          <div className="space-y-8">
            <ol className="list-decimal list-inside space-y-2 text-text-main font-medium">
              <li>Parents are Instructed to pay the school fee without Late.</li>
              <li>After due date, school fees will be collected at school office along with fine amount in favour of <strong className="text-primary">"GBR EDUCATIONAL INSTITUTIONS"</strong></li>
            </ol>

            <div className="overflow-hidden rounded-lg border border-border">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-center text-sm md:text-base bg-background">
                  <thead>
                    <tr className="bg-surface-alt font-bold text-primary border-b border-border">
                      <th className="border-r border-border p-4" rowSpan={2}>CAMPUS</th>
                      <th className="border-r border-border p-4" colSpan={3}>TUITION FEE</th>
                      <th className="p-4" colSpan={2}>TRANSPORT FEE SCHEDULE</th>
                    </tr>
                    <tr className="bg-surface font-semibold text-primary text-xs md:text-sm border-b border-border">
                      <th className="border-r border-border p-3">1st INSTALLMENT</th>
                      <th className="border-r border-border p-3">2nd INSTALLMENT</th>
                      <th className="border-r border-border p-3">3rd INSTALLMENT</th>
                      <th className="border-r border-border p-3">1st INSTALLMENT</th>
                      <th className="p-3">2nd INSTALLMENT</th>
                    </tr>
                  </thead>
                  <tbody className="text-text-muted font-medium divide-y divide-border">
                    <tr className="hover:bg-surface-alt transition-colors">
                      <td className="border-r border-border p-4 font-bold text-red-700">E.M.S</td>
                      <td className="border-r border-border p-4 tabular-nums">
                        <span className="block text-base font-bold text-text-main">40%</span>
                        <span className="text-xs text-text-muted">(JUN 1st to 10th)</span>
                      </td>
                      <td className="border-r border-border p-4 tabular-nums">
                        <span className="block text-base font-bold text-text-main">30%</span>
                        <span className="text-xs text-text-muted">(SEPT 1st to 10th)</span>
                      </td>
                      <td className="border-r border-border p-4 tabular-nums">
                        <span className="block text-base font-bold text-text-main">30%</span>
                        <span className="text-xs text-text-muted">(DEC 1st to 10th)</span>
                      </td>
                      <td className="border-r border-border p-4 tabular-nums">
                        <span className="block text-base font-bold text-text-main">50%</span>
                        <span className="text-xs text-text-muted">(JUN 1st to 10th)</span>
                      </td>
                      <td className="p-4 tabular-nums">
                        <span className="block text-base font-bold text-text-main">50%</span>
                        <span className="text-xs text-text-muted">(SEP 1st to 10th)</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-alt transition-colors">
                      <td className="border-r border-border p-4 font-bold text-red-700">A.C. CAMPUS</td>
                      <td className="border-r border-border p-4 tabular-nums">
                        <span className="block text-base font-bold text-text-main">50%</span>
                        <span className="text-xs text-text-muted">(JUN 1st to 10th)</span>
                      </td>
                      <td className="border-r border-border p-4 tabular-nums">
                        <span className="block text-base font-bold text-text-main">50%</span>
                        <span className="text-xs text-text-muted">(OCT 1st to 10th)</span>
                      </td>
                      <td className="border-r border-border p-4 tracking-widest text-text-muted opacity-50 tabular-nums">
                        ---------
                      </td>
                      <td className="border-r border-border p-4 tabular-nums">
                        <span className="block text-base font-bold text-text-main">50%</span>
                        <span className="text-xs text-text-muted">(JUN 1st to 10th)</span>
                      </td>
                      <td className="p-4 tabular-nums">
                        <span className="block text-base font-bold text-text-main">50%</span>
                        <span className="text-xs text-text-muted">(OCT 1st to 10th)</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-red-50 p-5 rounded-lg border border-red-200">
              <h4 className="font-bold text-red-700 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Important Note
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-sm text-text-main leading-relaxed tabular-nums">
                <li>All monetary dues related to academic & transport should be cleared on or before the due dates failing which the school management is authorised to impose a penalty of Rs.50/- per day.</li>
                <li>Payment must be made at the school premise in the form of cash.</li>
              </ol>
            </div>
          </div>
        </AccordionSection>

        {/* --- ACCORDION 3: Withdrawal --- */}
        <AccordionSection
          id="withdrawal"
          title="Withdrawal Policies"
          isOpen={openSection === 'withdrawal'}
          onToggle={() => toggleSection('withdrawal')}
        >
          <ul className="space-y-4 text-text-muted list-disc pl-5">
            <li className="leading-relaxed">One calendar week's notice is required to be given for the withdrawal of the student before the payment schedule, else fees for the month will be charged.</li>
            <li className="leading-relaxed">School leaving certificate will not be issued until the school dues have been paid in full.</li>
          </ul>
        </AccordionSection>

        {/* --- ACCORDION 4: Leaving Certificate (T.C.) --- */}
        <AccordionSection
          id="tc"
          title="Leaving Certificate (T.C.) Rules"
          isOpen={openSection === 'tc'}
          onToggle={() => toggleSection('tc')}
        >
          <div className="space-y-5">
            <p className="font-bold text-red-700 bg-red-50 inline-block px-4 py-2 rounded-lg border border-red-200 text-sm">
              Parents are requested to note the following:
            </p>
            <ul className="space-y-4 text-text-muted list-disc pl-5">
              <li className="leading-relaxed">Parent / Guardian should approach the office and should fill out the T.C. form in person.</li>
              <li className="leading-relaxed">After applying for a T.C., it takes a minimum of <strong className="tabular-nums">7 working days</strong> to process.</li>
            </ul>
          </div>
        </AccordionSection>

      </div>
    </div>
  );
}

/* --- Reusable Accordion Component --- */
function AccordionSection({ 
  id,
  title, 
  children, 
  isOpen, 
  onToggle 
}: { 
  id: string;
  title: string; 
  children: React.ReactNode; 
  isOpen: boolean; 
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border">
      <button
        id={`accordion-btn-${id}`}
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between hover:bg-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        aria-expanded={isOpen}
        aria-controls={`accordion-panel-${id}`}
      >
        <h2 className="text-lg font-semibold text-text-main text-left">
          {title}
        </h2>
        <span className={`shrink-0 ml-4 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      
      {/* Animated Dropdown Body using CSS Grid */}
      <div 
        id={`accordion-panel-${id}`}
        role="region"
        aria-labelledby={`accordion-btn-${id}`}
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div className="pb-6 pt-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}