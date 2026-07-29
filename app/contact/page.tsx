import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | GBR Group of Schools",
  description: "Get in touch with GBR Group of Schools. Find our campus location in Anaparthy, contact numbers, and admission inquiry details.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      
      {/* 1. HEADER SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 pt-12 sm:pt-16">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-3">
          Get In Touch
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6 [text-wrap:balance]">
          Visit Our Campus
        </h1>
        <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
          Whether you are looking to enroll your child, take a campus tour, or simply have a few questions, our administrative team is ready to help.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          
          {/* 2. CONTACT INFORMATION CARDS */}
          <div className="flex flex-col gap-6">
            
            {/* Address Card */}
            <div className="bg-surface p-8 rounded-lg border border-border flex items-start gap-5">
              <div className="bg-primary/10 p-3 rounded-full shrink-0 text-primary">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Campus Location</h3>
                <p className="text-text-muted leading-relaxed">
                  GBR Group of Schools<br />
                  Rajanagaram Road, Duppalapudi<br />
                  Anaparthy, Andhra Pradesh 533342
                </p>
              </div>
            </div>

            {/* Phone Numbers Card */}
            <div className="bg-surface p-8 rounded-lg border border-border flex items-start gap-5">
              <div className="bg-primary/10 p-3 rounded-full shrink-0 text-primary">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Direct Lines</h3>
                <div className="space-y-1">
                  <a href="tel:+917893507966" className="block text-text-muted hover:text-accent transition-colors font-medium tabular-nums">+91 78935 07966</a>
                  <a href="tel:+919912340849" className="block text-text-muted hover:text-accent transition-colors font-medium tabular-nums">+91 99123 40849</a>
                  <a href="tel:+919494700666" className="block text-text-muted hover:text-accent transition-colors font-medium tabular-nums">+91 94947 00666</a>
                  <a href="tel:+919912340922" className="block text-text-muted hover:text-accent transition-colors font-medium tabular-nums">+91 99123 40922</a>
                </div>
              </div>
            </div>

            {/* Office Hours Card */}
            <div className="bg-surface p-8 rounded-lg border border-border flex items-start gap-5">
              <div className="bg-primary/10 p-3 rounded-full shrink-0 text-primary">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Office Hours</h3>
                <p className="text-text-muted leading-relaxed">
                  Monday - Saturday: 9:00 AM to 5:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
            
          </div>

          {/* 3. FREE GOOGLE MAPS iFRAME */}
          <div className="h-full min-h-[400px] w-full bg-surface border border-border rounded-lg overflow-hidden shadow-sm relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15277.632230419266!2d81.99616!3d16.9296562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3782e20b3017a5%3A0x67393246ebc6df7c!2sAnaparthy%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="GBR Schools Location Map"
            />
          </div>

        </div>
      </div>
    </div>
  );
}