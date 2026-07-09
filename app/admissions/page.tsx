// app/admissions/page.tsx
import React from 'react';
import { Phone, Mail, MapPin, CheckCircle2, FileText } from 'lucide-react';

const admissionSteps = [
  { step: '01', title: 'Obtain Application', desc: 'Collect the physical application form from the GBR Campus Administrative Office in Anaparthi.' },
  { step: '02', title: 'Submit Documentation', desc: 'Submit the filled form along with required academic transcripts, transfer certificates (TC), and passport photos.' },
  { step: '03', title: 'Verification & Interview', desc: 'Attend the document verification session. School and Intermediate streams may require a brief interaction/interview.' },
  { step: '04', title: 'Seat Allotment', desc: 'Once verified, secure your seat allocation by confirming eligibility under respective state board or university counseling guidelines (APICET/APEDCET).' }
];

export const metadata = {
  title: 'Admissions Guidelines 2026-2027 | GBR Institutions',
  description: 'Step-by-step admission procedure, required documents, and contact details for GBR Schools, Junior College, Degree, PG, and Teacher Education.',
};

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        
        {/* Page Header */}
        <div className="border-b border-gray-200 pb-6 mb-12">
          <h1 className="text-[#0B2046] text-4xl font-bold font-serif">Admission Guidelines</h1>
          <p className="text-gray-600 mt-2 text-lg">Secure your future. Follow our streamlined offline admission workflow.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left/Center: Steps Grid */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-[#0B2046] text-2xl font-bold font-serif mb-4 flex items-center gap-2">
              <FileText className="text-amber-500" />
              The Admission Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {admissionSteps.map((step, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative overflow-hidden">
                  <span className="absolute top-2 right-4 text-4xl font-black text-gray-100 select-none">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-2 flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-emerald-600" />
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* Required Documents Section */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm mt-8">
              <h3 className="text-xl font-bold text-[#0B2046] font-serif mb-4">Mandatory Documents Checklist</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
                <li className="flex items-center gap-2">✔ SSC / 10th Class Marks Memo</li>
                <li className="flex items-center gap-2">✔ Intermediate Marks Memo (For Degree/Ed)</li>
                <li className="flex items-center gap-2">✔ Degree Consolidated Marks Memo (For PG/B.Ed)</li>
                <li className="flex items-center gap-2">✔ Transfer Certificate (TC) & Study Certificates</li>
                <li className="flex items-center gap-2">✔ APICET / APEDCET Rank Card (If Applicable)</li>
                <li className="flex items-center gap-2">✔ 4 Recent Passport Size Photographs</li>
              </ul>
            </div>
          </div>

          {/* Right Sidebar: Administrative Office Contact */}
          <div className="bg-[#0B2046] text-white p-8 rounded-xl shadow-lg space-y-6 lg:sticky lg:top-24">
            <div>
              <h3 className="text-xl font-bold font-serif text-amber-400">Admissions Helpdesk</h3>
              <p className="text-white/80 text-sm mt-1">Reach out directly to our administrative block for seat availability and application processing.</p>
            </div>

            <div className="space-y-4 border-t border-white/10 pt-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="text-amber-400 shrink-0 mt-1" size={18} />
                <div>
                  <span className="block font-semibold">Central Admin Office</span>
                  <span className="text-white/70">GBR Campus, Main Road, Anaparthi, East Godavari, AP - 533342</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-amber-400 shrink-0" size={18} />
                <div>
                  <span className="block font-semibold">Phone Networks</span>
                  <span className="text-white/70">+91 8857 22xxxx, 23xxxx</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-amber-400 shrink-0" size={18} />
                <div>
                  <span className="block font-semibold">Email Directory</span>
                  <span className="text-white/70">admissions@gbr.edu.in</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-4 rounded-lg border border-white/10 text-xs text-center text-white/80">
              Office Hours: Monday - Saturday <br /> 09:00 AM to 05:00 PM
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}