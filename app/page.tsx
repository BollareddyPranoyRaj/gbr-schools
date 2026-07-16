// app/page.tsx

import Link from 'next/link';
import { schoolData } from './lib/schoolData';
import HeroVideo from './components/HeroVideo';

const sectionLinks = [
  { href: "/about", title: "About GBR", description: "Learn about our school legacy and vision." },
  { href: "/leadership", title: "Leadership", description: "Meet the team guiding school growth." },
  { href: "/facilities", title: "Facilities", description: "Explore labs, transport, library, and sports spaces." },
  { href: "/student-life", title: "Student Life", description: "See co-curricular activities and house culture." },
  { href: "/gallery", title: "Gallery", description: "Browse campus and activity highlights." },
  { href: "/news", title: "Updates", description: "Read school news and announcements." },
  { href: "/notices", title: "Notices", description: "Check important circulars and dates." },
  { href: "/calendar", title: "Calendar", description: "View the academic calendar." },
  { href: "/alumni", title: "Alumni", description: "Connect with the GBR alumni network." },
  { href: "/careers", title: "Careers", description: "Find open roles at GBR Schools." },
  { href: "/faq", title: "FAQ", description: "Get answers to common parent questions." },
  { href: "/contact", title: "Contact", description: "Reach the school office and admissions team." },
];

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      {/* Hero Section */}
      <div className="relative flex-grow flex flex-col items-center justify-center overflow-hidden w-full min-h-[85vh]">
        {/* Placeholder for Campus Image/Video - Currently a soft, premium blue gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 z-0"></div>
        
        {/* Subtle grid texture for a modern feel without being dark */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:32px_32px] z-0"></div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-16">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 tracking-tight">
            Welcome to <span className="text-accent">GBR Schools</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-muted mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            {schoolData.about.vision}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
            <Link href="/ac-campus" className="px-8 py-3.5 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto text-center">
              Explore A.C. Campus
            </Link>
            <Link href="/standard-campus" className="px-8 py-3.5 bg-white border border-primary text-primary rounded-md font-medium hover:bg-primary/5 transition-all shadow-sm hover:shadow-md w-full sm:w-auto text-center">
              Explore E.M.S Campus
            </Link>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full bg-white py-24 border-t border-gray-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <HeroVideo />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/admissions" className="group p-8 bg-[var(--color-surface)] border border-gray-200 rounded-xl hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">Admissions</h3>
              <p className="text-text-muted text-sm leading-relaxed">View our fee policy and admission procedures.</p>
            </Link>
            
            <Link href="/academics" className="group p-8 bg-[var(--color-surface)] border border-gray-200 rounded-xl hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">Academics</h3>
              <p className="text-text-muted text-sm leading-relaxed">Explore school timings, vision, and award systems.</p>
            </Link>
            
            <Link href="/parents" className="group p-8 bg-[var(--color-surface)] border border-gray-200 rounded-xl hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">Parent Portal</h3>
              <p className="text-text-muted text-sm leading-relaxed">Discover the features of the GBR Parent App.</p>
            </Link>
            
            <Link href="/rules" className="group p-8 bg-[var(--color-surface)] border border-gray-200 rounded-xl hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">Guidelines</h3>
              <p className="text-text-muted text-sm leading-relaxed">Read our transport, uniform, and general rules.</p>
            </Link>
          </div>

          <div className="mt-20">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-primary">Explore Every Section</h2>
              <p className="mt-2 max-w-2xl text-text-muted">
                Every public page in the app is linked here so families can reach the full GBR Schools experience from the homepage.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sectionLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:border-primary/30 hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold text-primary group-hover:text-accent">{link.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{link.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
