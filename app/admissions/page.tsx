// app/admissions/page.tsx

import { schoolData } from "../lib/schoolData";

export default function AdmissionsPage() {
  const { feePolicy } = schoolData;

  return (
    <main className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Admissions & Fee Policy</h1>
        <p className="text-text-muted max-w-2xl mx-auto">
          Information regarding admission procedures, fee structures for E.M.S and A.C. Campuses, and general guidelines.
        </p>
      </div>

      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-semibold text-primary mb-6 border-b border-gray-200 pb-2">E.M.S Campus Fee Schedule</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[var(--color-surface)] rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-primary mb-4">Tuition Fee</h3>
              <div className="space-y-4">
                {feePolicy.ems.tuition.map((fee, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-3 last:border-0">
                    <span className="text-text-main font-medium">{fee.installment} Installment <span className="text-text-muted font-normal">({fee.percentage})</span></span>
                    <span className="text-accent font-medium text-sm bg-accent/10 px-3 py-1 rounded-full">{fee.dates}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[var(--color-surface)] rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-primary mb-4">Transport Fee</h3>
              <div className="space-y-4">
                {feePolicy.ems.transport.map((fee, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-3 last:border-0">
                    <span className="text-text-main font-medium">{fee.installment} Installment <span className="text-text-muted font-normal">({fee.percentage})</span></span>
                    <span className="text-accent font-medium text-sm bg-accent/10 px-3 py-1 rounded-full">{fee.dates}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary mb-6 border-b border-gray-200 pb-2">A.C. Campus Fee Schedule</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[var(--color-surface)] rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-primary mb-4">Tuition Fee</h3>
              <div className="space-y-4">
                {feePolicy.acCampus.tuition.map((fee, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-3 last:border-0">
                    <span className="text-text-main font-medium">{fee.installment} Installment <span className="text-text-muted font-normal">({fee.percentage})</span></span>
                    <span className="text-accent font-medium text-sm bg-accent/10 px-3 py-1 rounded-full">{fee.dates}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[var(--color-surface)] rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-primary mb-4">Transport Fee</h3>
              <div className="space-y-4">
                {feePolicy.acCampus.transport.map((fee, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-3 last:border-0">
                    <span className="text-text-main font-medium">{fee.installment} Installment <span className="text-text-muted font-normal">({fee.percentage})</span></span>
                    <span className="text-accent font-medium text-sm bg-accent/10 px-3 py-1 rounded-full">{fee.dates}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary/5 border border-primary/20 rounded-xl p-8 mt-8">
          <h3 className="text-lg font-semibold text-primary mb-3">Important Notes</h3>
          <ul className="list-disc list-inside text-text-muted space-y-2 text-sm leading-relaxed">
            <li>All monetary dues related to academic & transport should be cleared on or before the due dates.</li>
            <li>Failing to pay on time authorizes the school management to impose a penalty of Rs.50/- per day.</li>
            <li>Payment must be made at the school premise in the form of cash.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}