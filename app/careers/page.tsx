// app/careers/page.tsx

export default function CareersPage() {
  const openings = [
    {
      title: "Primary School Teacher (English)",
      type: "Full-Time",
      experience: "2-4 Years",
      campus: "E.M.S Campus"
    },
    {
      title: "High School Mathematics Educator",
      type: "Full-Time",
      experience: "5+ Years",
      campus: "A.C. Campus"
    },
    {
      title: "Physical Education Instructor",
      type: "Full-Time",
      experience: "1-3 Years",
      campus: "Both Campuses"
    }
  ];

  return (
    <main className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">Careers at GBR</h1>
        <p className="text-text-muted max-w-2xl mx-auto">
          Join our passionate team of educators and staff dedicated to shaping the leaders of tomorrow.
        </p>
      </div>

      <div className="bg-[var(--color-surface)] border border-gray-200 rounded-xl p-8 mb-12 shadow-sm">
        <h2 className="text-2xl font-semibold text-primary mb-4">Why Work With Us?</h2>
        <ul className="list-disc list-inside text-text-muted space-y-3 text-sm leading-relaxed">
          <li>A collaborative, stress-free, and supportive work environment.</li>
          <li>Continuous professional development and training workshops.</li>
          <li>Competitive remuneration and benefits packages.</li>
          <li>Access to state-of-the-art teaching aids and infrastructure.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-primary mb-6">Current Openings</h2>
      <div className="space-y-4">
        {openings.map((job, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-primary/30 transition-colors">
            <div>
              <h3 className="text-lg font-semibold text-primary">{job.title}</h3>
              <div className="flex flex-wrap gap-3 mt-2">
                <span className="text-xs font-medium bg-gray-100 text-text-muted px-2 py-1 rounded-md">{job.type}</span>
                <span className="text-xs font-medium bg-gray-100 text-text-muted px-2 py-1 rounded-md">{job.experience}</span>
                <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-md">{job.campus}</span>
              </div>
            </div>
            <button className="px-6 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors shrink-0">
              Apply Now
            </button>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center text-sm text-text-muted">
        Don&apos;t see a position that matches your skills? Send your resume to <a href="mailto:careers@gbrschools.edu.in" className="text-primary font-medium hover:underline">careers@gbrschools.edu.in</a>
      </div>
    </main>
  );
}
