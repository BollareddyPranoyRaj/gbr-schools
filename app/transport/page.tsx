'use client';

import Link from 'next/link';

export default function TransportPage() {
  return (
    <div className="flex flex-col bg-background min-h-screen">
      
      {/* Hero Section */}
      <section className="w-full bg-surface border-b border-border pt-16 pb-12 sm:pt-24 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 text-primary font-semibold rounded-full text-sm sm:text-base mb-6 shadow-sm">
            <svg className="w-5 h-5 text-accent shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            Serving Anaparthy & Surrounding Regions
          </div>
          <h1 className="font-serif-heading text-4xl sm:text-5xl font-bold text-primary mb-6">
            Safe & Reliable <span className="text-accent">Transport</span>
          </h1>
          <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            With a massive 17-acre district-leading campus, GBR Group of Schools operates a comprehensive and secure fleet of buses to ensure your child’s daily commute is comfortable, safe, and strictly monitored.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Features & Guidelines */}
        <div className="lg:col-span-8 flex flex-col gap-10">
          
          {/* Features Grid */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Our Transport Highlights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="bg-surface p-6 rounded-lg border border-border shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">GPS Tracking & Security</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Every bus in our fleet is equipped with live GPS tracking systems and speed governors. Parents can monitor routes via the GBR Parent App.
                </p>
              </div>

              <div className="bg-surface p-6 rounded-lg border border-border shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Trained Staff</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Our drivers undergo rigorous background checks and regular safety training. A dedicated female attendant is present on every route for Pre-Primary kids.
                </p>
              </div>

            </div>
          </div>

          {/* Guidelines Section */}
          <div className="bg-surface p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold text-primary mb-6">Transport Guidelines for Parents</h2>
            <ul className="space-y-4 text-text-muted">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✔</span>
                <span>Students must be at their designated boarding points at least 5 minutes before the scheduled arrival time.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✔</span>
                <span>For Pre-Primary and Primary students, a parent or authorized guardian must be present at the drop-off point.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✔</span>
                <span>Route changes are not permitted without prior written approval from the transport administration department.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✔</span>
                <span>Students are required to carry their RFID ID cards daily for automated attendance logging upon boarding.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Right Column: Contact & Quick Links */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Helpdesk Card */}
          <div className="bg-primary p-8 rounded-lg text-white shadow-md">
            <h3 className="text-xl font-bold mb-4">Transport Helpdesk</h3>
            <p className="text-primary-100 text-sm mb-6 leading-relaxed">
              Have questions about routes, fees, or need to report a delay? Contact our campus administration lines directly.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <div className="flex flex-col">
                  <span className="text-xs text-primary-200 uppercase tracking-wider">A.C. & High School Admin</span>
                  <a href="tel:+919494700666" className="font-semibold hover:text-accent transition-colors">+91 94947 00666</a>
                  <a href="tel:+919912340922" className="font-semibold hover:text-accent transition-colors">+91 99123 40922</a>
                </div>
              </div>
              
              <div className="flex items-center gap-3 pt-3 border-t border-white/20">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <div className="flex flex-col">
                  <span className="text-xs text-primary-200 uppercase tracking-wider">Primary & Pre-Primary</span>
                  <a href="tel:+919912340849" className="font-semibold hover:text-accent transition-colors">+91 99123 40849</a>
                  <a href="tel:+917893507966" className="font-semibold hover:text-accent transition-colors">+91 78935 07966</a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-surface p-6 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-primary mb-4">Related Links</h3>
            <div className="flex flex-col gap-3">
              <Link href="/admissions" className="text-text-muted hover:text-accent transition-colors flex items-center gap-2 text-sm font-medium">
                <span>→</span> Transport Fee Structure
              </Link>
              <Link href="/parents" className="text-text-muted hover:text-accent transition-colors flex items-center gap-2 text-sm font-medium">
                <span>→</span> Download Parent App
              </Link>
              <Link href="/contact" className="text-text-muted hover:text-accent transition-colors flex items-center gap-2 text-sm font-medium">
                <span>→</span> View Campus Map
              </Link>
            </div>
          </div>

        </div>

      </section>
    </div>
  );
}