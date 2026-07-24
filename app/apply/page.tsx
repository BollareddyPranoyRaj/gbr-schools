import Link from "next/link";

export default function ApplyPage() {
  return (
    <div className="min-h-[60vh] bg-background pt-16 sm:pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <h1 className="mb-4 text-3xl sm:text-4xl font-bold text-primary">Apply to GBR Schools</h1>
          <p className="mx-auto max-w-2xl text-text-muted text-sm">
            Start the admission process for A.C. Campus or E.M.S Campus. Our admissions team will guide you through documents, campus selection, and next steps.
          </p>
        </div>

        <div className="mx-auto grid max-w-xl gap-6">
          <Link
            href="/admissions"
            className="rounded-[var(--radius-md)] border border-border bg-white p-6 transition-colors hover:border-primary/30 hover:bg-surface"
          >
            <h2 className="mb-2 text-lg font-semibold text-primary">Admission Details</h2>
            <p className="text-sm leading-relaxed text-text-muted">
              Review fee policy, eligibility, and admission procedures before submitting your application.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
