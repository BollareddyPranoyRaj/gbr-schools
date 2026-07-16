// app/academics/page.tsx

import { schoolData } from "../lib/schoolData";

export default function AcademicsPage() {
  const { about, timings, awards } = schoolData;

  return (
    <main className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Academics & School Life</h1>
        <p className="text-text-muted max-w-2xl mx-auto">
          Discover our vision, daily schedules, and the award systems designed to nurture and motivate our students.
        </p>
      </div>

      <div className="space-y-16">
        <section className="bg-[var(--color-surface)] border border-gray-200 rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-primary mb-6 border-b border-gray-200 pb-2">About Us</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-accent mb-2">Our Vision</h3>
              <p className="text-text-main leading-relaxed">{about.vision}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-accent mb-2">Our Mission</h3>
              <p className="text-text-main leading-relaxed">{about.mission}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-accent mb-2">Our Aim</h3>
              <ul className="list-disc list-inside text-text-main space-y-2">
                {about.aim.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-6 border-b border-gray-200 pb-2">School Timings & Hours</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[var(--color-surface)] rounded-xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-4">Class Timings</h3>
              <ul className="space-y-3">
                <li className="flex justify-between border-b border-gray-100 pb-3">
                  <span className="text-text-main font-medium">Nursery (EMS)</span>
                  <span className="text-accent font-medium bg-accent/10 px-3 py-1 rounded-full text-sm">{timings.nursery}</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 pb-3">
                  <span className="text-text-main font-medium">Pre-Primary & Primary</span>
                  <span className="text-accent font-medium bg-accent/10 px-3 py-1 rounded-full text-sm">{timings.prePrimaryAndPrimary}</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 pb-3">
                  <span className="text-text-main font-medium">High School</span>
                  <span className="text-accent font-medium bg-accent/10 px-3 py-1 rounded-full text-sm">{timings.highSchool}</span>
                </li>
              </ul>
            </div>
            <div className="bg-[var(--color-surface)] rounded-xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-primary mb-4">Meeting Hours</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex flex-col border-b border-gray-100 pb-3">
                  <span className="text-text-main font-medium mb-1">Office Hours</span>
                  <span className="text-text-muted">{timings.officeHours}</span>
                </li>
                <li className="flex flex-col border-b border-gray-100 pb-3">
                  <span className="text-text-main font-medium mb-1">Meeting the Dean</span>
                  <span className="text-text-muted">{timings.meetingDean}</span>
                </li>
                <li className="flex flex-col border-b border-gray-100 pb-3">
                  <span className="text-text-main font-medium mb-1">Meeting the Teacher</span>
                  <span className="text-text-muted">{timings.meetingTeacher}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-6 border-b border-gray-200 pb-2">Path to Success (Awards)</h2>
          <div className="bg-[var(--color-surface)] border border-gray-200 rounded-xl p-8 shadow-sm">
            <p className="text-text-muted mb-6">
              For students from grades 1-5, the following award categories are in place to encourage positive behavior and academic excellence:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {awards.map((award, index) => {
                const [title, description] = award.split(" - ");
                return (
                  <div key={index} className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-primary font-semibold mb-1">{title}</h4>
                    <p className="text-sm text-text-muted">{description || "Awarded for exceptional performance."}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}