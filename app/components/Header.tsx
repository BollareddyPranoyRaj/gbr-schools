"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Schools", href: "/schools" },
    { name: "Junior College", href: "/junior-college" },
    { name: "Degree & PG", href: "/degree-pg/programs-eligibility-fee" },
    { name: "B.Ed / D.Ed", href: "/teacher-education" },
    { name: "Nursing", href: "/nursing" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="px-6 md:px-12 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition cursor-pointer shrink-0">
          <div className="w-10 h-10 bg-[#0B2046] flex items-center justify-center rounded text-amber-400 font-bold text-xl font-serif">
            G
          </div>
          <div className="hidden md:block">
            <span className="text-[#0B2046] font-bold text-lg block tracking-tight font-serif">GBR INSTITUTIONS</span>
            <span className="text-gray-500 text-xs block -mt-1 tracking-widest uppercase">Legacy Since 1979</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-[13px] xl:text-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name}
                href={link.href} 
                className={`transition whitespace-nowrap ${
                  isActive 
                    ? "text-[#0B2046] font-bold border-b-2 border-amber-500 pb-1" 
                    : "text-gray-700 font-medium hover:text-[#0B2046]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Button */}
        <div className="hidden lg:block shrink-0 ml-4">
          <Link href="/admissions" className="bg-[#0B2046] text-white px-5 py-2.5 rounded text-sm font-semibold hover:bg-opacity-90 transition shadow-sm">
            Enquire Now
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="lg:hidden text-[#0B2046] p-2 hover:bg-gray-100 rounded transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl py-4 px-6 flex flex-col gap-4 z-50">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name}
                href={link.href} 
                className={`transition ${
                  isActive 
                    ? "text-[#0B2046] font-bold border-l-4 border-amber-500 pl-2" 
                    : "text-gray-700 font-medium hover:text-[#0B2046]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <Link href="/admissions" className="bg-[#0B2046] text-white px-5 py-3 rounded text-sm font-semibold text-center mt-2 shadow-sm" onClick={() => setIsOpen(false)}>
            Enquire Now
          </Link>
        </div>
      )}
    </header>
  );
}