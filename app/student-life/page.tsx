import Link from 'next/link';

export default function StudentLifePage() {
  return (
    <div className="min-h-[80vh] bg-background flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-3">Student Life</h1>
        <p className="text-text-muted mb-8 text-sm leading-relaxed">
          This page is under development. Discover the vibrant co-curricular activities, clubs, and campus culture at GBR Schools.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-[var(--radius-sm)] hover:bg-primary/90 transition-colors min-h-[44px]"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}