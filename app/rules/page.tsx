// app/rules/page.tsx

export default function RulesPage() {
  return (
    <div className="min-h-screen bg-background pt-16 sm:pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">School Rules & Guidelines</h1>
        <p className="text-text-muted max-w-2xl mx-auto text-sm">
          Comprehensive guidelines on general conduct, discipline, uniform, and transport to ensure a safe and structured environment.
        </p>
      </div>

      <div className="space-y-10">
        <section>
          <h2 className="text-lg font-semibold text-text-main mb-4 border-b border-border pb-3">General Rules</h2>
          <ul className="list-disc list-inside text-text-muted space-y-3 text-sm leading-relaxed ml-1">
            <li>Every Student is expected to carry the diary to school every day.</li>
            <li>Students are expected to move in the corridors and stairs in a disciplined manner in perfect silence.</li>
            <li>Students who commute to school by their own conveyance must be in school 15 minutes well in advance.</li>
            <li>Every student is strictly instructed to communicate in English within the school premises.</li>
            <li>Students are to refrain from bringing any sharp objects or electronic gadgets to school.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-text-main mb-4 border-b border-border pb-3">School Uniform</h2>
          <ul className="list-disc list-inside text-text-muted space-y-3 text-sm leading-relaxed ml-1">
            <li>Students are expected to come in proper and complete uniform to school at all times, even during open days.</li>
            <li>Boys will maintain short hair and girls will use hair band in case of short hair and 2 plaits with white rubber bands in case of long hair.</li>
            <li>Wearing watches is not permitted till standard VI. Fancy watches will be confiscated.</li>
            <li>Nails to be cut by both boys and girls. Girls should not apply mehandi or nail polish.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-text-main mb-4 border-b border-border pb-3">Transport Rules</h2>
          <ul className="list-disc list-inside text-text-muted space-y-3 text-sm leading-relaxed ml-1">
            <li>Parents are expected to be at the stop 10 minutes before the scheduled arrival of the bus.</li>
            <li>Bus will leave the stop at the designated time. In case a child misses the bus, parents are requested to drop the child to school.</li>
            <li>Any misbehavior or indiscipline must be reported in writing to the H.M.</li>
            <li>Parents are requested not to make any oral request to the bus drivers or attendants. Any request should be made in writing.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}