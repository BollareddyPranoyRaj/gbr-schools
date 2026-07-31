import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | GBR Group of Schools",
  description: "Get in touch with GBR Group of Schools. Find contact numbers, emails, location details for Pre-Primary, Primary, High School, and A.C. Campus, and submit a call-back request.",
};

const campusContacts = [
  {
    name: "Pre-Primary School",
    phone: "6302599212",
    displayPhone: "+91 63025 99212",
    email: "preprimary@gbrschools.edu.in",
    tagline: "Nursery, LKG & UKG Program",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200"
  },
  {
    name: "Primary School",
    phone: "9347733555",
    displayPhone: "+91 93477 33555",
    email: "primary@gbrschools.edu.in",
    tagline: "Grades 1st to 5th",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200"
  },
  {
    name: "High School",
    phone: "9963329395",
    displayPhone: "+91 99633 29395",
    email: "highschool@gbrschools.edu.in",
    tagline: "Grades 6th to 10th (State Board)",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200"
  },
  {
    name: "A.C. Campus",
    phone: "9912340922",
    displayPhone: "+91 99123 40922",
    email: "accampus@gbrschools.edu.in",
    tagline: "Air-Conditioned Digital Classes",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-200"
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      
      {/* 1. HEADER SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 pt-12 sm:pt-16">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-3">
          Get In Touch
        </p>
        <h1 className="font-serif-heading text-4xl sm:text-5xl font-bold text-primary mb-6 [text-wrap:balance]">
          Contact GBR Schools
        </h1>
        <p className="text-lg text-text-muted max-w-3xl mx-auto leading-relaxed">
          Have questions about admissions, curriculum, or school timings? Select the appropriate campus desk below or request an automated callback.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-12 items-start">
          
          {/* 2. FORM COLUMN (5 cols wide on large screens) */}
          <div className="lg:col-span-5 w-full">
            <ContactForm />
          </div>

          {/* 3. CAMPUS DIRECT LINES GRID (7 cols wide on large screens) */}
          <div className="lg:col-span-7 space-y-8 w-full">
            <div className="border-b border-border pb-4">
              <h2 className="text-2xl font-bold text-primary">Direct Department Desks</h2>
              <p className="text-sm text-text-muted mt-1">Call or email the respective program coordinator directly.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {campusContacts.map((campus) => (
                <div 
                  key={campus.name} 
                  className="bg-surface p-6 rounded-lg border border-border shadow-sm hover:shadow-md hover:border-accent/40 transition-all duration-200"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-lg text-primary">{campus.name}</h3>
                  </div>
                  <p className="text-xs text-text-muted mb-4 font-medium italic">{campus.tagline}</p>
                  
                  <div className="space-y-3 pt-3 border-t border-border/60">
                    {/* Phone Link */}
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a 
                        href={`tel:+91${campus.phone}`} 
                        className="text-sm text-primary font-semibold hover:text-accent transition-colors tabular-nums"
                      >
                        {campus.displayPhone}
                      </a>
                    </div>

                    {/* Email Link */}
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a 
                        href={`mailto:${campus.email}`} 
                        className="text-sm text-text-muted hover:text-accent transition-colors break-all"
                      >
                        {campus.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 4. GENERAL CAMPUS LOCATION & TIMINGS INFO (After grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 pt-12 border-t border-border">
          {/* Location */}
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
                Anaparthy, East Godavari, Andhra Pradesh – 533342
              </p>
            </div>
          </div>

          {/* Office Hours */}
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

        {/* 5. GOOGLE MAPS IFRAME */}
        <div className="mt-12 h-[450px] w-full bg-surface border border-border rounded-lg overflow-hidden shadow-sm relative">
          <iframe 
            src="https://maps.google.com/maps?q=GBR+Group+Of+Schools,+Rajanagaram+Road,+Anaparthy&t=&z=15&ie=UTF8&iwloc=&output=embed" 
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
  );
}