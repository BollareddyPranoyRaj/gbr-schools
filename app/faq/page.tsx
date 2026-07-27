// app/faq/page.tsx

export default function FAQPage() {
  const faqs = [
    {
      question: "What are the school timings?",
      answer: "Nursery runs from 9.00 am to 12.00 pm. Pre-Primary & Primary runs from 9.00 am to 4.10 pm. High School operates from 8.00 am to 5.30 pm."
    },
    {
      question: "What is the difference between the A.C. Campus and E.M.S Campus?",
      answer: "The A.C. Campus offers a fully air-conditioned environment designed for optimal comfort. The E.M.S Campus features expansive green spaces and natural ventilation. Both campuses share the same rigorous academic curriculum and teaching standards."
    },
    {
      question: "How can I track my child's academic progress?",
      answer: "Parents can use the GBR APP to monitor their child's academic progress in real-time, including classwork, project submissions, attendance, and report cards."
    },
    {
      question: "Are there any specific uniform guidelines?",
      answer: "Yes. Students must wear proper and complete uniforms every day. Boys must maintain short hair, and girls must tie long hair in two plaits with white rubber bands. Fancy watches and nail polish are strictly prohibited."
    },
    {
      question: "Does the school provide transport facilities?",
      answer: "Yes, we provide secure bus transport. Parents can track the school bus in real-time via GPS through the GBR APP. Bus fees are typically paid in two installments (June and Sept/Oct depending on the campus)."
    },
    {
      question: "When can parents meet the teachers or the Dean?",
      answer: "Parents can meet the Dean from Monday to Saturday between 10.30 AM and 12.00 PM by prior appointment only. Teacher meetings for Nursery to Class X are held on the 2nd Saturday of every month from 9.00 am to 12.00 pm."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-16 sm:pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h1>
        <p className="text-text-muted max-w-2xl mx-auto">
          Find quick answers to common questions about admissions, academics, and school policies.
        </p>
      </div>

      <div className="divide-y divide-border">
        {faqs.map((faq, index) => (
          <div key={index} className="py-6">
            <h3 className="text-base font-semibold text-text-main mb-2">{faq.question}</h3>
            <p className="text-text-muted leading-relaxed text-sm">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
