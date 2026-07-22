// app/parents/page.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link'; 

export default function ParentPortalPage() {
  // State for the accordion dropdowns
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const benefits = [
    {
      title: "Real-Time Communication",
      desc: "Stay informed with instant updates on announcements, circulars, homework, and school activities – all in one app."
    },
    {
      title: "Academic Tracking",
      desc: "Easily monitor your child's academic progress, including classwork, homework, project submissions, exam schedules, and report cards."
    },
    {
      title: "Digital Fee Management",
      desc: "View fee details and receive timely reminders for hassle-free payments."
    },
    {
      title: "Attendance Updates",
      desc: "Track your child's daily attendance and get notified of any absences or late arrivals."
    },
    {
      title: "Transport Tracking",
      desc: "Access transport details and track your child's school bus through GPS for added peace of mind."
    },
    {
      title: "Digital Diary",
      desc: "Receive regular diary updates from teachers, keeping you involved in your child's daily learning and behavior."
    },
    {
      title: "Centralized Information",
      desc: "All essential school information is stored in one place – making it easy to access and stay organized."
    },
    {
      title: "Time-Saving & Convenient",
      desc: "No need to call the school or wait for PTMs to stay updated. GBR makes school-parent communication efficient and hassle-free."
    },
    {
      title: "Better Involvement",
      desc: "Enables parents to be more actively engaged in their child's school life, helping build a stronger home-school partnership."
    }
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Hero Section (Left outside of dropdowns as requested) */}
        <div className="text-center bg-white rounded-3xl p-8 sm:p-16 border border-gray-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -ml-20 -mb-20"></div>
          
          <div className="relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-wide mb-6">
              GBR GROUP OF SCHOOLS APP
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
              Your Child's Education, <br className="hidden sm:block" />
              <span className="text-primary">At Your Fingertips</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Our dedicated app ensures smooth, real-time communication with the school, offering a single platform to stay updated on your child's academic progress and daily activities.
            </p>
            
            {/* App Store Download Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://apps.apple.com/in/app/gbr-group-of-schools/id6746750509" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-xl transition-all shadow-md w-full sm:w-auto justify-center"
              >
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.365 14.161c-.015-3.084 2.502-4.551 2.613-4.622-1.423-2.083-3.627-2.368-4.417-2.404-1.87-.194-3.655 1.096-4.619 1.096-.962 0-2.433-1.077-3.979-1.047-2.02.03-3.882 1.173-4.922 2.99-2.098 3.638-.538 9.027 1.503 11.975 1.001 1.442 2.176 3.056 3.738 2.998 1.498-.06 2.062-.971 3.864-.971 1.794 0 2.31.971 3.893.942 1.611-.03 2.615-1.468 3.593-2.909 1.134-1.656 1.6-3.262 1.624-3.344-.037-.015-3.04-1.168-3.056-4.646zm-2.853-6.284c.823-1.002 1.38-2.392 1.228-3.784-1.18.048-2.637.788-3.486 1.785-.758.882-1.426 2.3-1.246 3.674 1.32.102 2.684-.666 3.504-1.675z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-wider leading-none mb-1 text-gray-300">Download on the</p>
                  <p className="text-base font-bold leading-none">App Store</p>
                </div>
              </a>
              
              <a 
                href="https://play.google.com/store/apps/details?id=com.mcb.gbrgroupofschools&pcampaignid=web_share" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-xl transition-all shadow-md w-full sm:w-auto justify-center"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#4caf50" d="M3.1 2.2L16.2 12 3.1 21.8c-.1 0-.1 0-.1-.1V2.3c0-.1 0-.1.1-.1z"/>
                  <path fill="#ffeb3b" d="M16.2 12l4.8-3.7-2.6-1.5L16.2 12zm0 0l2.2 5.2 2.6-1.5-4.8-3.7z"/>
                  <path fill="#f44336" d="M3.1 2.2l15.3 6.1-2.2 3.7L3.1 2.2z"/>
                  <path fill="#2196f3" d="M3.1 21.8l13.1-9.8 2.2 3.7-15.3 6.1z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-wider leading-none mb-1 text-gray-300">Get it on</p>
                  <p className="text-base font-bold leading-none">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Dropdown Sections Wrapper */}
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* --- ACCORDION 1: Benefits --- */}
          <AccordionSection
            title="Benefits for Parents & Schools"
            icon="🌟"
            iconBg="bg-yellow-100"
            iconColor="text-yellow-600"
            isOpen={openSection === 'benefits'}
            onToggle={() => toggleSection('benefits')}
          >
            <p className="text-gray-600 mb-8 leading-relaxed">
              We encourage all parents to download the GBR App to stay connected, informed, and actively engaged throughout the academic year.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-sm text-primary">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{benefit.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AccordionSection>

          {/* --- ACCORDION 2: Uniform Guidelines --- */}
          <AccordionSection
            title="Uniform Guidelines"
            icon="👔"
            iconBg="bg-blue-100"
            iconColor="text-blue-600"
            isOpen={openSection === 'uniform'}
            onToggle={() => toggleSection('uniform')}
          >
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Students are expected to wear the prescribed school uniform with pride. Cleanliness and neat presentation are strictly observed.
            </p>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 text-lg">✔</span>
                <span><strong>Regular Days (Mon, Tue, Thu, Fri):</strong> Standard school uniform with polished black shoes and school ID card.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 text-lg">✔</span>
                <span><strong>Sports Days (Wed & Sat):</strong> Assigned house color t-shirt, track pants, and white sports shoes.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 text-lg">✔</span>
                <span><strong>Winter Wear:</strong> Only the official school-issued sweater/blazer is permitted inside the campus.</span>
              </li>
            </ul>
          </AccordionSection>

          {/* --- ACCORDION 3: Transport Policies --- */}
          <AccordionSection
            title="Transport Policies"
            icon="🚌"
            iconBg="bg-orange-100"
            iconColor="text-orange-600"
            isOpen={openSection === 'transport'}
            onToggle={() => toggleSection('transport')}
          >
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              The school operates a fleet of buses strictly adhering to safety norms. Parents must coordinate with the transport desk for route allocations.
            </p>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 text-lg">✔</span>
                <span><strong>Punctuality:</strong> Students must be at their designated pick-up points 5 minutes before the scheduled arrival time.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 text-lg">✔</span>
                <span><strong>Route Changes:</strong> Any request for a temporary or permanent change in the bus route must be submitted in writing to the transport office.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 text-lg">✔</span>
                <span><strong>Tracking:</strong> Real-time bus tracking is available directly through the GBR Parent App.</span>
              </li>
            </ul>
          </AccordionSection>

          {/* --- ACCORDION 4: Comprehensive Rulebook --- */}
          <AccordionSection
            title="Comprehensive Rulebook"
            icon="📖"
            iconBg="bg-gray-100"
            iconColor="text-gray-700"
            isOpen={openSection === 'rulebook'}
            onToggle={() => toggleSection('rulebook')}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-gray-50 p-6 rounded-xl border border-gray-200">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Download the Full Rulebook</h3>
                <p className="text-gray-600 text-sm">Access the complete PDF covering our code of conduct, leave policies, and disciplinary protocols.</p>
              </div>
              <Link
                href="/assets/gbr-rulebook.pdf"
                target="_blank"
                className="whitespace-nowrap px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-sm"
              >
                Download PDF
              </Link>
            </div>
          </AccordionSection>

        </div>
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