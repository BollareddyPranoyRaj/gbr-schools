// app/components/Navbar.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/ac-campus", label: "A.C. Campus" },
  { href: "/standard-campus", label: "E.M.S Campus" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
  { href: "/events", label: "Events" },
  { href: "/alumni", label: "Alumni" },
  { href: "/parents", label: "Parent Portal" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className="w-full z-50 bg-white/95 backdrop-blur-sm border-b border-border"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* BRANDING */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="/gbr-trans-logo.png" 
                alt="GBR Group of Schools logo" 
                width={40} 
                height={40} 
                className="object-contain"
                priority
              />
              <span className="text-primary font-bold text-lg tracking-wider">
                GBR <span className="text-accent">SCHOOLS</span>
              </span>
            </Link>
          </div>
          
          {/* DESKTOP MENU */}
          <div className="hidden xl:block">
            <div className="ml-6 flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-text-muted hover:text-primary transition-colors px-3 py-2 text-[13px] font-medium uppercase tracking-[0.04em] whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* MOBILE HAMBURGER */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-muted hover:text-primary p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
        <div className="xl:hidden border-b border-border bg-white">
          <div className="grid grid-cols-1 gap-0 px-2 pt-2 pb-3 sm:grid-cols-2 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-text-muted hover:text-primary hover:bg-surface block px-4 py-3 text-base font-medium min-h-[44px] flex items-center transition-colors"
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