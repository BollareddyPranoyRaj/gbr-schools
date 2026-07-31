// app/transport/page.tsx
import Link from 'next/link';

export const metadata = {
  title: 'School Transport & Bus Services | GBR Schools',
  description: 'Learn about GBR Group of Schools transport facilities, including safety guidelines, GPS tracking, and route policies.',
};

export default function TransportPage() {
  const safetyFeatures = [
    {
      title: "Real-Time GPS Tracking",
      description: "Monitor your child's school bus location in real-time through the integrated GBR Parent App.",
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Lady Attendants On-Board",
      description: "Every bus is staffed with a female helper/attendant to assist students during boarding and alighting.",
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "CCTV Surveillance",
      description: "Buses are equipped with surveillance cameras to ensure student safety and behavior monitoring.",
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Speed Governors",
      description: "Strict speed limit restriction devices are installed to prevent overspeeding in compliance with regulations.",
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  const guidelines = [
    {
      heading: "Bus Stop Conduct",
      rules: [
        "Students must be present at their designated bus stop at least 5 minutes prior to the scheduled pick-up time.",
        "Students should wait in an orderly queue away from the edge of the road.",
        "Parents are requested to receive primary and pre-primary students at their stops. If not present, the child will be returned to the campus for safety."
      ]
    },
    {
      heading: "Boarding & In-Transit Rules",
      rules: [
        "Students must occupy their assigned seats immediately after boarding and remain seated at all times when the bus is in motion.",
        "Strict discipline and moderate voice levels should be maintained to avoid distracting the driver.",
        "Eating or drinking (except water) is prohibited inside the school transport."
      ]
    },
    {
      heading: "Route Allocations & Changes",
      rules: [
        "Bus routes are optimized for maximum safety and convenience. Door-to-door drops are not guaranteed in narrow lanes.",
        "Any request for a temporary or permanent change in the bus route must be submitted in writing to the transport office.",
        "Bus passes must be carried daily and presented to the attendant upon request."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block py-1 px-3.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest">
            Safe Commute
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-5xl font-bold text-primary">
            School Transport Services
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            GBR Group of Schools operates a modern, well-supervised fleet of buses ensuring a secure, hassle-free daily commute for our students across the region.
          </p>
        </div>

        {/* Safety & Comfort Features Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">Safety & Surveillance First</h2>
            <p className="mt-2 text-text-muted">Equipped with modern technology and staff to ensure peaceful transits.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyFeatures.map((feat, index) => (
              <div key={index} className="bg-surface border border-border p-6 rounded-xl space-y-4 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  {feat.icon}
                </div>
                <h3 className="font-bold text-text-main text-lg">{feat.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Guidelines Accordion/Grid */}
        <div className="bg-surface border border-border rounded-xl p-8 lg:p-12 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl font-bold text-primary">Transport Guidelines & Policies</h2>
            <p className="text-sm text-text-muted">Strict adherence to these rules is mandatory for security and timing efficiency.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {guidelines.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-lg font-bold text-primary border-b border-border pb-2">{section.heading}</h3>
                <ul className="space-y-3">
                  {section.rules.map((rule, rIdx) => (
                    <li key={rIdx} className="text-sm text-text-muted flex gap-2.5 leading-relaxed">
                      <span className="text-accent shrink-0 font-bold">•</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Redirection Callout */}
        <div className="text-center bg-surface border border-border p-8 rounded-xl max-w-4xl mx-auto space-y-6">
          <h3 className="text-xl font-bold text-primary">Need to request a route change or inquire about transport fees?</h3>
          <p className="text-text-muted max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Our dedicated transport desk coordinates route maps, timing schedules, and campus-specific bus fees. Reach out to coordinate with our transport administrator.
          </p>
          <div className="flex justify-center">
            <Link 
              href="/contact" 
              className="bg-primary text-white hover:bg-primary/95 text-sm font-semibold uppercase tracking-wider px-6 py-3 rounded-[var(--radius-sm)] transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Contact Transport Desk
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
