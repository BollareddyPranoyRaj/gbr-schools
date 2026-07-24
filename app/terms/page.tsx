// app/terms/page.tsx

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background pt-16 sm:pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Terms and Conditions</h1>
        <p className="text-text-muted text-sm">Last updated: July 2026</p>
      </div>

      <div className="space-y-8 text-sm leading-relaxed text-text-muted">
        <section>
          <h2 className="text-lg font-semibold text-text-main mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing and using the GBR Group of Schools website and the GBR Parent App, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-text-main mb-3">2. School Policies and Conduct</h2>
          <p>
            Enrollment at GBR Schools implies acceptance of all school rules, regulations, and disciplinary procedures as outlined in the student diary and the Rules & Guidelines page. The school management reserves the right to amend these rules to maintain discipline and the academic integrity of the institution.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-text-main mb-3">3. Fee Payment Policy</h2>
          <p className="mb-2">Parents and guardians must adhere strictly to the fee payment schedules:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Tuition and transport fees must be paid on or before the specified due dates.</li>
            <li>A late penalty of Rs.50/- per day will be imposed for delayed payments.</li>
            <li>Fees once paid are strictly non-refundable under any circumstances.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-text-main mb-3">4. Intellectual Property</h2>
          <p>
            All content on this website, including but not limited to text, graphics, logos, and images, is the property of GBR Group of Schools and is protected by applicable copyright and trademark laws.
          </p>
        </section>
      </div>
    </div>
  );
}