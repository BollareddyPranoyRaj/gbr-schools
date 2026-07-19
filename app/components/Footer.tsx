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
      { href: "/facilities", label: "Facilities" },
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
      { href: "/calendar", label: "Calendar" },
      { href: "/rules", label: "School Rules" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-surface)] border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          <div className="md:col-span-2">
            <span className="text-primary font-bold text-2xl tracking-wider block mb-4">
              GBR <span className="text-accent">SCHOOLS</span>
            </span>
            <p className="text-text-muted text-sm leading-relaxed max-w-sm">
              Building the base of a future India right from the first step the child takes to school and carries on till he passes out of its corridors.
            </p>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-primary tracking-wider uppercase mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-text-muted hover:text-accent transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} GBR Schools. All rights reserved.
          </p>
          <div className="mt-4 flex gap-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-text-muted hover:text-accent transition-colors">Privacy</Link>
            <Link href="/terms" className="text-sm text-text-muted hover:text-accent transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
