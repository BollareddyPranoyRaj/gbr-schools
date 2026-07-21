// app/parents/page.tsx
import React from 'react';
import Link from 'next/link'; // Added for the PDF download button

export default function ParentPortalPage() {
  const features = [
    {
      title: "Academic Management",
      icon: "📚",
      desc: "Access timetables, exam schedules, report cards, and academic plans.",
      color: "bg-blue-100 text-blue-700",
      borderColor: "border-blue-200"
    },
    {
      title: "Fee Collection",
      icon: "💳",
      desc: "View invoices and track payment history digitally.",
      color: "bg-purple-100 text-purple-700",
      borderColor: "border-purple-200"
    },
    {
      title: "Communication Tools",
      icon: "💬",
      desc: "Receive circulars, notifications, and messages instantly via the app or SMS.",
      color: "bg-green-100 text-green-700",
      borderColor: "border-green-200"
    },
    {
      title: "Transport Tracking",
      icon: "🚌",
      desc: "Monitor your child's commute with GPS-enabled school bus tracking.",
      color: "bg-orange-100 text-orange-700",
      borderColor: "border-orange-200"
    },
    {
      title: "Attendance Monitoring",
      icon: "✅",
      desc: "View daily attendance records with biometric system integration.",
      color: "bg-indigo-100 text-indigo-700",
      borderColor: "border-indigo-200"
    },
    {
      title: "Custom Reports",
      icon: "📊",
      desc: "Track progress and access school-generated academic and administrative reports.",
      color: "bg-rose-100 text-rose-700",
      borderColor: "border-rose-200"
    }
  ];

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
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Hero Section */}
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

        {/* Key Features Grid */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
            <p className="text-gray-500 mt-3">Everything you need to manage your child's school life.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5 ${feature.color} border ${feature.borderColor}`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-primary rounded-3xl p-8 sm:p-12 shadow-lg text-white">
          <div className="mb-10 sm:mb-12 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Benefits for Parents & Schools</h2>
            <p className="text-primary-foreground/80 max-w-2xl">
              We encourage all parents to download the GBR App to stay connected, informed, and actively engaged throughout the academic year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm border border-white/30 mt-1">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- MERGED GUIDELINES SECTION START --- */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">School Guidelines</h2>
            <p className="text-gray-500 mt-3">Essential rules for transport, uniforms, and daily conduct.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Uniform Rules */}
            <section className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-primary text-2xl">👔</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Uniform Guidelines</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Students are expected to wear the prescribed school uniform with pride. Cleanliness and neat presentation are strictly observed.
              </p>
              <ul className="space-y-4 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">✔</span>
                  <span><strong>Regular Days (Mon, Tue, Thu, Fri):</strong> Standard school uniform with polished black shoes and school ID card.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">✔</span>
                  <span><strong>Sports Days (Wed & Sat):</strong> Assigned house color t-shirt, track pants, and white sports shoes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">✔</span>
                  <span><strong>Winter Wear:</strong> Only the official school-issued sweater/blazer is permitted inside the campus.</span>
                </li>
              </ul>
            </section>

            {/* Transport Rules */}
            <section className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-primary text-2xl">🚌</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Transport Policies</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                The school operates a fleet of buses strictly adhering to safety norms. Parents must coordinate with the transport desk for route allocations.
              </p>
              <ul className="space-y-4 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">✔</span>
                  <span><strong>Punctuality:</strong> Students must be at their designated pick-up points 5 minutes before the scheduled arrival time.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">✔</span>
                  <span><strong>Route Changes:</strong> Any request for a temporary or permanent change in the bus route must be submitted in writing to the transport office.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">✔</span>
                  <span><strong>Tracking:</strong> Real-time bus tracking is available directly through the GBR Parent App.</span>
                </li>
              </ul>
            </section>
          </div>

          {/* General Rules Download */}
          <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Rulebook</h3>
              <p className="text-gray-600 text-sm">Download the full PDF covering the code of conduct, leave policies, and disciplinary protocols.</p>
            </div>
            <Link
              href="/assets/gbr-rulebook.pdf"
              target="_blank"
              className="whitespace-nowrap px-6 py-3 bg-gray-100 text-gray-900 font-bold rounded-xl hover:bg-gray-200 transition-colors"
            >
              Download PDF
            </Link>
          </section>
        </div>
        {/* --- MERGED GUIDELINES SECTION END --- */}

      </div>
    </main>
  );
}