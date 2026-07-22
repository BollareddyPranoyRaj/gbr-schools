// app/privacy/page.tsx

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Privacy Policy</h1>
        <p className="text-text-muted">Last updated: July 2026</p>
      </div>

      <div className="bg-[var(--color-surface)] border border-gray-200 rounded-xl p-8 md:p-12 shadow-sm space-y-8 text-sm leading-relaxed text-text-muted">
        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">1. Introduction</h2>
          <p>
            GBR Group of Schools (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting the privacy and security of our students, parents, and staff. This Privacy Policy explains how we collect, use, and safeguard personal information collected through our website and the GBR Parent App.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">2. Information We Collect</h2>
          <p className="mb-2">We may collect the following types of information:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li><strong>Personal Identification Information:</strong> Names, dates of birth, residential addresses, and contact details of students and parents.</li>
            <li><strong>Academic Records:</strong> Grades, attendance records, and disciplinary history.</li>
            <li><strong>Digital Data:</strong> IP addresses, browser types, and usage data when interacting with our digital platforms.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">3. How We Use Your Information</h2>
          <p className="mb-2">The information we collect is used strictly for educational and administrative purposes, including:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Processing admissions and managing student enrollment.</li>
            <li>Communicating important updates, circulars, and academic progress to parents.</li>
            <li>Providing secure transportation services (e.g., GPS tracking on school buses).</li>
            <li>Improving our curriculum, website, and app functionality.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">4. Data Sharing and Security</h2>
          <p>
            We do not sell, trade, or rent personal identification information to third parties. Data may only be shared with trusted third-party service providers (such as app developers or transport management) strictly under confidentiality agreements to facilitate school operations. We implement robust physical and digital security measures to protect against unauthorized access or disclosure.
          </p>
        </section>

      </div>
    </main>
  );
}
