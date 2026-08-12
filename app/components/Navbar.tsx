// app/components/Navbar.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface LinkItem {
  href: string;
  label: string;
}

interface DropdownItem {
  type: 'dropdown';
  label: string;
  links: LinkItem[];
}

interface DirectLinkItem {
  type: 'link';
  href: string;
  label: string;
}

type NavItem = DirectLinkItem | DropdownItem;

const navItems: NavItem[] = [
  { type: 'link', href: '/', label: 'Home' },
  {
    type: 'dropdown',
    label: 'About Us',
    links: [
      { href: '/about', label: 'About GBR' },
      { href: '/history', label: 'Our History' },
      { href: '/careers', label: 'Careers' },
      { href: '/faq', label: 'FAQ' }
    ]
  },
  {
    type: 'dropdown',
    label: 'Campuses',
    links: [
      { href: '/ac-campus', label: 'A.C Campus' },
      { href: '/standard-campus', label: 'E.M.S Campus' }
    ]
  },
  { type: 'link', href: '/academics', label: 'Academics' },
  {
    type: 'dropdown',
    label: 'Admissions',
    links: [
      { href: '/admissions', label: 'Admissions & Fees' },
      { href: '/transport', label: 'School Transport' },
      { href: '/parents', label: 'Parent Portal' }
    ]
  },
  {
    type: 'dropdown',
    label: 'Community',
    links: [
      { href: '/events', label: 'Events' },
      { href: '/alumni', label: 'Alumni' }
    ]
  }
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close dropdowns and mobile menu on route changes (during rendering)
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  }

  const toggleMobileDropdown = (label: string) => {
    setOpenMobileDropdown(openMobileDropdown === label ? null : label);
  };

  return (
    <nav
      className="w-full fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm"
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
          <div className="hidden xl:flex items-center gap-6">
            <div className="flex items-center gap-1">
              {navItems.map((item, index) => {
                if (item.type === 'link') {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-text-muted hover:text-primary transition-colors px-3 py-2 text-[13px] font-semibold uppercase tracking-[0.04em] whitespace-nowrap"
                    >
                      {item.label}
                    </Link>
                  );
                }

                // Dropdown Menu Item
                const isOpen = activeDropdown === item.label;
                return (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className="text-text-muted hover:text-primary flex items-center gap-1.5 px-3 py-2 text-[13px] font-semibold uppercase tracking-[0.04em] whitespace-nowrap focus-visible:outline-none"
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                    >
                      <span>{item.label}</span>
                      <svg 
                        className={`w-3.5 h-3.5 transform transition-transform duration-200 ${isOpen ? 'rotate-180 text-primary' : 'text-text-muted/65'}`} 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Floating dropdown options */}
                    <div
                      className={`absolute left-0 mt-1 w-48 rounded-md bg-white border border-border shadow-lg py-1.5 z-50 transform origin-top transition-all duration-200 ${
                        isOpen 
                          ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' 
                          : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                      }`}
                    >
                      {item.links.map((link) => {
                        const isHash = link.href.includes('#');
                        const linkClass = "block px-4 py-2.5 text-[13px] font-medium text-text-muted hover:text-primary hover:bg-surface transition-colors";
                        
                        if (isHash) {
                          return (
                            <a
                              key={link.href}
                              href={link.href}
                              className={linkClass}
                              onClick={() => setActiveDropdown(null)}
                            >
                              {link.label}
                            </a>
                          );
                        }

                        return (
                          <Link
                            key={link.href}
                            href={link.href}
                            className={linkClass}
                            onClick={() => setActiveDropdown(null)}
                          >
                            {link.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* CONTACT CTA BUTTON */}
            <Link 
              href="/contact" 
              className="bg-primary text-white hover:bg-primary/90 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-[var(--radius-sm)] transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Contact Us
            </Link>
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
        <div className="xl:hidden border-b border-border bg-white max-h-[85vh] overflow-y-auto">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navItems.map((item, index) => {
              if (item.type === 'link') {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-text-muted hover:text-primary hover:bg-surface block px-4 py-3 text-base font-medium min-h-[44px] flex items-center transition-colors rounded"
                  >
                    {item.label}
                  </Link>
                );
              }

              // Mobile Expandable Dropdown
              const isExpanded = openMobileDropdown === item.label;
              return (
                <div key={index} className="border-b border-border/40 pb-1">
                  <button
                    onClick={() => toggleMobileDropdown(item.label)}
                    className="w-full flex justify-between items-center text-text-muted hover:text-primary px-4 py-3 text-base font-medium min-h-[44px] transition-colors rounded"
                    aria-expanded={isExpanded}
                  >
                    <span>{item.label}</span>
                    <svg 
                      className={`w-4 h-4 transform transition-transform duration-200 ${isExpanded ? 'rotate-180 text-primary' : 'text-text-muted'}`} 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <div 
                    className={`pl-6 overflow-hidden transition-all duration-300 ease-in-out ${
                      isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
                  >
                    {item.links.map((link) => {
                      const isHash = link.href.includes('#');
                      const linkClass = "block text-text-muted hover:text-primary py-2.5 text-sm font-semibold transition-colors";
                      
                      if (isHash) {
                        return (
                          <a
                            key={link.href}
                            href={link.href}
                            className={linkClass}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {link.label}
                          </a>
                        );
                      }

                      return (
                        <Link 
                          key={link.href} 
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={linkClass}
                        >
                          {link.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            
            {/* Mobile Contact Link */}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-primary text-white text-center block px-4 py-3 text-base font-semibold rounded mx-2 mt-4 min-h-[44px] hover:bg-primary/95 transition-colors shadow-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}