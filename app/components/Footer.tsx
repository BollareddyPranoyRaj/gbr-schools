// app/components/Footer.tsx

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-surface)] border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-primary font-bold text-2xl tracking-wider block mb-4">
              GBR <span className="text-accent">SCHOOLS</span>
            </span>
            <p className="text-text-muted text-sm leading-relaxed max-w-sm">
              Building the base of a future India right from the first step the child takes to school and carries on till he passes out of its corridors.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-primary tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/admissions" className="text-sm text-text-muted hover:text-accent transition-colors">Admissions</Link>
              </li>
              <li>
                <Link href="/academics" className="text-sm text-text-muted hover:text-accent transition-colors">Academics</Link>
              </li>
              <li>
                <Link href="/parents" className="text-sm text-text-muted hover:text-accent transition-colors">Parent Portal</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-primary tracking-wider uppercase mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/rules" className="text-sm text-text-muted hover:text-accent transition-colors">School Rules</Link>
              </li>
              <li>
                <Link href="/calendar" className="text-sm text-text-muted hover:text-accent transition-colors">Academic Calendar</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} GBR Schools. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}   