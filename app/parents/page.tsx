// app/parents/page.tsx
"use client";

import React, { useState, useId } from 'react';
import Link from 'next/link'; 

export default function ParentPortalPage() {
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
    <div className="min-h-screen bg-surface pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Hero Section */}
        <div className="text-center bg-background rounded-lg p-8 sm:p-16 border border-border relative overflow-hidden">
          
          <div className="relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-wide mb-6">
              GBR GROUP OF SCHOOLS APP
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-text-main tracking-tight mb-6 [text-wrap:balance]">
              Your Child's Education, <br className="hidden sm:block" />
              <span className="text-primary">At Your Fingertips</span>
            </h1>
            <p className="text-lg text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
              Our dedicated app ensures smooth, real-time communication with the school, offering a single platform to stay updated on your child's academic progress and daily activities.
            </p>
            
            {/* App Store Download Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://apps.apple.com/in/app/gbr-group-of-schools/id6746750509" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-black hover:bg-gray-800 text-white min-h-[44px] py-3 px-6 rounded-lg transition-all w-full sm:w-auto justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
                className="flex items-center gap-3 bg-black hover:bg-gray-800 text-white min-h-[44px] py-3 px-6 rounded-lg transition-all w-full sm:w-auto justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
        <div className="max-w-4xl mx-auto border-t border-border">
          
          <AccordionSection
            title="Benefits for Parents & Schools"
            isOpen={openSection === 'benefits'}
            onToggle={() => toggleSection('benefits')}
          >
            <p className="text-text-muted mb-8 leading-relaxed">
              We encourage all parents to download the GBR App to stay connected, informed, and actively engaged throughout the academic year.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-sm text-primary tabular-nums">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-text-main text-lg mb-1">{benefit.title}</h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AccordionSection>

          <AccordionSection
            title="Uniform Guidelines"
            isOpen={openSection === 'uniform'}
            onToggle={() => toggleSection('uniform')}
          >
            <p className="text-text-muted mb-6 text-sm leading-relaxed">
              Students are expected to wear the prescribed school uniform with pride. Cleanliness and neat presentation are strictly observed.
            </p>
            <ul className="space-y-4 text-sm text-text-muted">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span><strong>Regular Days (Mon, Tue, Thu, Fri):</strong> Standard school uniform with polished black shoes and school ID card.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span><strong>Sports Days (Wed & Sat):</strong> Assigned house color t-shirt, track pants, and white sports shoes.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span><strong>Winter Wear:</strong> Only the official school-issued sweater/blazer is permitted inside the campus.</span>
              </li>
            </ul>
          </AccordionSection>

          <AccordionSection
            title="Transport Policies"
            isOpen={openSection === 'transport'}
            onToggle={() => toggleSection('transport')}
          >
            <p className="text-text-muted mb-6 text-sm leading-relaxed">
              The school operates a fleet of buses strictly adhering to safety norms. Parents must coordinate with the transport desk for route allocations.
            </p>
            <ul className="space-y-4 text-sm text-text-muted">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span><strong>Punctuality:</strong> Students must be at their designated pick-up points 5 minutes before the scheduled arrival time.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span><strong>Route Changes:</strong> Any request for a temporary or permanent change in the bus route must be submitted in writing to the transport office.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span><strong>Tracking:</strong> Real-time bus tracking is available directly through the GBR Parent App.</span>
              </li>
            </ul>
          </AccordionSection>

          <AccordionSection
            title="Comprehensive Rulebook"
            isOpen={openSection === 'rulebook'}
            onToggle={() => toggleSection('rulebook')}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-surface-alt p-6 rounded-lg border border-border">
              <div>
                <h3 className="text-lg font-bold text-text-main mb-2">Download the Full Rulebook</h3>
                <p className="text-text-muted text-sm">Access the complete PDF covering our code of conduct, leave policies, and disciplinary protocols.</p>
              </div>
              <Link
                href="/assets/gbr-rulebook.pdf"
                target="_blank"
                className="whitespace-nowrap px-6 py-3 min-h-[44px] flex items-center justify-center bg-primary text-white rounded-[var(--radius-sm)] hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Download PDF
              </Link>
            </div>
          </AccordionSection>

        </div>
      </div>
    </div>
  );
}

function AccordionSection({ 
  title, 
  children, 
  isOpen, 
  onToggle 
}: { 
  title: string; 
  children: React.ReactNode; 
  isOpen: boolean; 
  onToggle: () => void;
}) {
  const panelId = useId();
  const buttonId = useId();

  return (
    <div className="border-b border-border">
      <button
        id={buttonId}
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between bg-transparent hover:bg-surface-alt/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <h2 className="text-lg font-semibold text-text-main text-left">
          {title}
        </h2>
        <span className={`shrink-0 ml-4 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      
      <div 
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
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