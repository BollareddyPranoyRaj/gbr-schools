import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | GBR Group of Schools",
  description: "Get in touch with GBR Group of Schools. Find contact numbers, emails, location details for Pre-Primary, Primary, High School, and A.C Campus, and submit a call-back request.",
};

const campusContacts = [
  {
    name: "Pre-Primary School",
    phone: "6302599212",
    displayPhone: "+91 63025 99212",
    tagline: "Nursery, LKG & UKG Program"
  },
  {
    name: "Primary School",
    phone: "9347733555",
    displayPhone: "+91 93477 33555",
    tagline: "Grades 1st to 5th"
  },
  {
    name: "High School",
    phone: "9963329395",
    displayPhone: "+91 99633 29395",
    tagline: "Grades 6th to 10th (State Board)"
  },
  {
    name: "A.C Campus",
    phone: "9912340922",
    displayPhone: "+91 99123 40922",
    tagline: "Air-Conditioned Digital Classes"
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pb-16">
      
      {/* 1. HEADER SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 pt-10 sm:pt-12">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-3">
          Get In Touch
        </p>
        <h1 className="font-serif-heading text-4xl sm:text-5xl font-bold text-primary mb-6 [text-wrap:balance]">
          Contact GBR Schools
        </h1>
        <p className="text-lg text-text-muted max-w-3xl mx-auto leading-relaxed">
          Have questions about admissions, curriculum, or school timings? Reach out directly using our official contacts or request an automated callback.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-12 items-start">
          
          {/* 2. FORM COLUMN */}
          <div className="lg:col-span-5 w-full">
            <ContactForm />
          </div>

          {/* 3. CONSOLIDATED CONTACT DIRECTORY CARD */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-surface p-6 sm:p-8 rounded-xl border border-border shadow-sm space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-2">Contact Details</h2>
                <p className="text-sm text-text-muted">
                  Send a general email inquiry or dial the respective department coordinator directly.
                </p>
              </div>

              {/* General Email Channel */}
              <div className="bg-white p-5 rounded-lg border border-border flex items-center gap-4 hover:border-primary/20 transition-all">
                <div className="bg-primary/5 p-3.5 rounded-full text-accent shrink-0 border border-primary/10">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">General Email Inquiry</p>
                  <a 
                    href="mailto:emschool@gbrcolleges.com" 
                    className="text-base sm:text-lg font-bold text-primary hover:text-accent transition-colors break-all mt-0.5 block"
                  >
                    emschool@gbrcolleges.com
                  </a>
                </div>
              </div>

              {/* Direct Phone Lines Directory */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted">Direct Campus Phones</h3>
                <div className="divide-y divide-border border border-border bg-white rounded-lg overflow-hidden">
                  {campusContacts.map((campus) => (
                    <div key={campus.name} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-surface transition-colors">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2.5">
                          <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                            campus.name === 'Pre-Primary School' ? 'bg-amber-400' :
                            campus.name === 'Primary School' ? 'bg-emerald-400' :
                            campus.name === 'High School' ? 'bg-blue-400' : 'bg-purple-400'
                          }`} />
                          <h4 className="font-bold text-primary text-sm sm:text-base leading-tight">{campus.name}</h4>
                        </div>
                        <p className="text-xs text-text-muted font-medium pl-5">{campus.tagline}</p>
                      </div>
                      
                      <div className="flex items-center gap-3 pl-5 sm:pl-0">
                        <div className="w-8 h-8 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center text-accent shrink-0">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <a 
                          href={`tel:+91${campus.phone}`} 
                          className="text-sm sm:text-base font-bold text-primary hover:text-accent transition-colors tabular-nums"
                        >
                          {campus.displayPhone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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