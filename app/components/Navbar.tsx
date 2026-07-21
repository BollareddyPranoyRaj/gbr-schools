// app/components/Navbar.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// We replaced the cluttered links with our newly merged, streamlined structure!
const navLinks = [
  { href: "/about", label: "About" },
  { href: "/ac-campus", label: "A.C. Campus" },
  { href: "/standard-campus", label: "E.M.S Campus" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
  { href: "/notices", label: "Notice Board" }, // Now holds News, Circulars, & Calendar
  { href: "/events", label: "Events" },
  { href: "/parents", label: "Parent Portal" }, // Now holds App links & Guidelines
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* BRANDING SECTION WITH LOGO */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="/gbr-trans-logo.png" 
                alt="GBR Group Logo" 
                width={90} 
                height={90} 
                className="object-contain -m-8"
                priority
              />
              <span className="text-primary font-bold text-xl tracking-wider">
                GBR <span className="text-accent">SCHOOLS</span>
              </span>
            </Link>
          </div>
          
          {/* DESKTOP MENU (Hidden on small screens, shown on Extra Large 'xl') */}
          <div className="hidden xl:block">
            <div className="ml-6 flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-text-muted hover:text-primary hover:bg-primary/5 transition-colors px-2.5 py-2 rounded-md text-sm font-medium whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-muted hover:text-primary focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-gray-200">
          <div className="grid grid-cols-1 gap-1 px-2 pt-2 pb-3 sm:grid-cols-2 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-text-muted hover:text-primary hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}