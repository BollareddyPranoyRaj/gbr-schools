// app/components/Footer.tsx

import Link from 'next/link';

const footerSections = [
  {
    title: "School",
    links: [
      { href: "/about", label: "About" },
      { href: "/leadership", label: "Leadership" },
      { href: "/academics", label: "Academics" },
      { href: "/admissions", label: "Admissions" },
    ],
  },
  {
    title: "Campuses",
    links: [
      { href: "/ac-campus", label: "A.C. Campus" },
      { href: "/standard-campus", label: "E.M.S Campus" },
      { href: "/events", label: "Events" },
    ],
  },
  {
    title: "Community",
    links: [
      { href: "/student-life", label: "Student Life" },
      { href: "/parents", label: "Parent Portal" },
      { href: "/alumni", label: "Alumni" },
      { href: "/careers", label: "Careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/news", label: "Updates" },
      { href: "/notices", label: "Notices" },
      { href: "/rules", label: "School Rules" },
      { href: "/faq", label: "FAQ" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-gray-300 mt-auto border-t border-border">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          
          {/* Branding & Contact */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <Link href="/" className="inline-block">
                <span className="text-white font-bold text-2xl tracking-widest block">
                  GBR <span className="text-accent">SCHOOLS</span>
                </span>
              </Link>
              <div className="w-8 h-[2px] bg-accent mt-3" aria-hidden="true" />
            </div>

            {/* Contact Details */}
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-accent mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=GBR%20Group%20of%20Schools%20Anaparthi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-relaxed hover:text-white transition-colors"
                  aria-label="View GBR Schools location on Google Maps"
                >
                  GBR Group of Schools, Anaparthi,<br />
                  East Godavari, Andhra Pradesh – 533342
                </a>
              </li>

              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.864-1.051l-3.219-.536a2.25 2.25 0 00-2.15.586l-1.92 1.92A14.92 14.92 0 016.75 4.92l1.92-1.92c.42-.42.64-1.004.586-2.15l-.536-3.219C8.647 3.351 8.197 3 7.681 3H6.25A2.25 2.25 0 004 5.25z" />
                </svg>
                <a href="tel:+919295099992" className="text-sm hover:text-white transition-colors tabular-nums" aria-label="Call GBR Schools">
                  +91 92950 99992
                </a>
              </li>

              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:info@gbrschools.edu.in" className="text-sm hover:text-white transition-colors" aria-label="Email GBR Schools">
                  info@gbrschools.edu.in
                </a>
              </li>
            </ul>
          </div>

          {/* Link Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} GBR Schools. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}