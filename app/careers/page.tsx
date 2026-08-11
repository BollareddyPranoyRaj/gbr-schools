// app/careers/page.tsx
'use client';

import React, { useState, useRef } from 'react';

interface Vacancy {
  id: string;
  title: string;
  category: 'teaching' | 'admin' | 'support';
  qualification: string;
  experience: string;
  description: string;
  responsibilities: string[];
}

const VACANCIES: Vacancy[] = [
  {
    id: 'tgt-math',
    title: 'TGT Mathematics Teacher',
    category: 'teaching',
    qualification: 'B.Sc / M.Sc in Mathematics & B.Ed',
    experience: '2+ Years of teaching experience in CBSE / ICSE board preferred',
    description: 'We are looking for an enthusiastic and knowledgeable teacher to teach secondary level students and build logical thinking capabilities.',
    responsibilities: [
      'Deliver lessons in line with CBSE curriculum guidelines.',
      'Assess student progress and support low performers.',
      'Organize math workshops and interactive quizzes.'
    ]
  },
  {
    id: 'pgt-physics',
    title: 'PGT Physics Teacher',
    category: 'teaching',
    qualification: 'M.Sc in Physics & B.Ed',
    experience: '3+ Years of senior secondary level teaching experience',
    description: 'Responsible for imparting high-level theoretical and practical physics knowledge to senior high students, helping them prepare for entrance examinations.',
    responsibilities: [
      'Conduct regular laboratory experiments.',
      'Prepare students for board exams and IIT-JEE orientation.',
      'Provide career counseling in scientific disciplines.'
    ]
  },
  {
    id: 'pre-primary-teacher',
    title: 'Mother Teacher (Pre-Primary)',
    category: 'teaching',
    qualification: 'PPT / NTT (Nursery Teacher Training) or Montessori Certification',
    experience: '1+ Years of nursery/kindergarten teaching experience',
    description: 'Create a warm, playful, and engaging learning atmosphere for early education (Nursery to UKG) kids on our campus.',
    responsibilities: [
      'Encourage fun-oriented and interactive play-based learning.',
      'Monitor child safety and physical development milestones.',
      'Maintain continuous communication with parents.'
    ]
  },
  {
    id: 'office-coordinator',
    title: 'Office Coordinator / Front Desk Executive',
    category: 'admin',
    qualification: 'Any Graduate with excellent communication in English & Telugu',
    experience: '2+ Years in school operations or front desk hospitality',
    description: 'Be the welcoming face of GBR Schools. Handle visitor inquiries, coordinate front desk communications, and manage digital parent files.',
    responsibilities: [
      'Manage school calls, emails, and visitor registrations.',
      'Provide basic details of admissions process to prospective parents.',
      'Coordinate between academic departments and management.'
    ]
  },
  {
    id: 'lab-assistant',
    title: 'Science Laboratory Assistant',
    category: 'support',
    qualification: 'B.Sc in Chemistry/Physics/Biology',
    experience: '1+ Years in lab management or academic support',
    description: 'Ensure the smooth functioning, safety, and inventory of school science laboratories under the instruction of the science department.',
    responsibilities: [
      'Prepare laboratory apparatus and chemical solutions before sessions.',
      'Verify adherence to safety protocols during experiments.',
      'Track laboratory inventory and order equipment replacements.'
    ]
  }
];

export default function CareersPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'teaching' | 'admin' | 'support'>('all');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    qualification: '',
    resumeLink: '',
    coverLetter: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const formRef = useRef<HTMLDivElement>(null);

  const filteredVacancies = selectedCategory === 'all' 
    ? VACANCIES 
    : VACANCIES.filter(v => v.category === selectedCategory);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleApplyNowClick = (positionTitle: string) => {
    setFormData(prev => ({ ...prev, position: positionTitle }));
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.position || !formData.qualification.trim()) {
      setError('Please fill in all required fields marked with an asterisk (*).');
      return;
    }

    // Phone Validation
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const dataObj = new FormData();
      // NOTE: Replace this access_key with the Web3Forms key registered to hrteamschoolteachers@gmail.com
      dataObj.append("access_key", "bebc200d-e240-46c1-ba1d-266c6783d270");
      dataObj.append("subject", `New Job Application: ${formData.position} - ${formData.name}`);
      dataObj.append("from_name", "GBR Careers Portal");
      dataObj.append("to_email", "hrteamschoolteachers@gmail.com");
      dataObj.append("name", formData.name);
      dataObj.append("email", formData.email);
      dataObj.append("phone", formData.phone);
      dataObj.append("position_applied", formData.position);
      dataObj.append("years_experience", formData.experience || "Not provided");
      dataObj.append("qualification", formData.qualification);
      dataObj.append("resume_link", formData.resumeLink || "Not provided (HR to request)");
      dataObj.append("cover_letter", formData.coverLetter || "No cover letter provided");

      console.log("Submitting career application data to Web3Forms...");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: dataObj
      });

      const result = await response.json();
      console.log("Web3Forms Career API response:", result);

      if (result.success) {
        setIsSuccess(true);
      } else {
        setError(result.message || "Failed to submit job application. Please try again.");
      }
    } catch {
      setError("Failed to connect to submission server. Please verify your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      qualification: '',
      resumeLink: '',
      coverLetter: ''
    });
    setIsSuccess(false);
    setError('');
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      
      {/* 1. HERO HEADER */}
      <section className="bg-surface py-16 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent bg-accent/10 px-3 py-1 rounded-full">
            Join GBR Schools
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-primary tracking-tight [text-wrap:balance]">
            Shape the Future of Education
          </h1>
          <p className="text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
            Inspire the next generation. Join our team of dedicated educators, innovators, and administrative professionals who are committed to academic excellence and nurturing holistic character.
          </p>
        </div>
      </section>

      {/* 2. CORE CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Job Openings (8 Columns on Large Screens) */}
        <div className="lg:col-span-8 space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-border pb-6">
            <h2 className="text-2xl font-bold text-primary">Current Vacancies</h2>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {(['all', 'teaching', 'admin', 'support'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full transition-all border ${
                    selectedCategory === cat 
                      ? 'bg-primary border-primary text-white' 
                      : 'bg-white border-border text-text-muted hover:bg-surface'
                  }`}
                >
                  {cat === 'all' ? 'All Roles' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Vacancy Cards */}
          {filteredVacancies.length > 0 ? (
            <div className="space-y-6">
              {filteredVacancies.map((vacancy) => (
                <div key={vacancy.id} className="bg-white p-6 sm:p-8 rounded-xl border border-border shadow-sm flex flex-col justify-between hover:border-primary/20 transition-all space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap justify-between items-start gap-3">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                          {vacancy.category}
                        </span>
                        <h3 className="text-xl font-bold text-primary mt-2">{vacancy.title}</h3>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                      {vacancy.description}
                    </p>

                    {/* Requirements details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-surface p-4 rounded-lg border border-border text-xs sm:text-sm">
                      <div>
                        <p className="text-text-muted font-semibold">Qualification Required</p>
                        <p className="text-primary font-medium mt-0.5">{vacancy.qualification}</p>
                      </div>
                      <div>
                        <p className="text-text-muted font-semibold">Experience</p>
                        <p className="text-primary font-medium mt-0.5">{vacancy.experience}</p>
                      </div>
                    </div>

                    {/* Key Responsibilities */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-bold text-primary">Key Responsibilities:</h4>
                      <ul className="list-disc pl-5 text-xs sm:text-sm text-text-muted space-y-1">
                        {vacancy.responsibilities.map((resp, i) => (
                          <li key={i}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border flex justify-end">
                    <button
                      onClick={() => handleApplyNowClick(vacancy.title)}
                      className="bg-primary text-white text-sm font-semibold px-6 py-2.5 rounded hover:bg-primary/95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      Apply for this Role
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white p-12 text-center rounded-xl border border-border shadow-sm">
              <p className="text-text-muted text-lg">No positions match the selected filter category at the moment.</p>
              <button 
                onClick={() => setSelectedCategory('all')}
                className="text-primary font-bold mt-2 hover:underline"
              >
                View all vacancies
              </button>
            </div>
          )}
        </div>

        {/* Right Column: Application Form (4 Columns on Large Screens) */}
        <div ref={formRef} className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-border shadow-md space-y-6">
            
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-primary">Job Application</h2>
              <p className="text-xs text-text-muted">
                Complete the details below to submit your profile to our HR team.
              </p>
            </div>

            {isSuccess ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto text-3xl">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-primary">Application Submitted!</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Thank you for applying. Your application was successfully delivered to our recruitment team. We will review your profile and reach out soon.
                </p>
                <button
                  onClick={handleReset}
                  className="w-full bg-primary text-white font-semibold py-3 rounded hover:bg-primary/95 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs sm:text-sm">
                    {error}
                  </div>
                )}

                {/* Name */}
                <div className="space-y-1 text-left">
                  <label htmlFor="name" className="block text-xs font-bold text-primary uppercase">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 border border-border rounded focus:outline-none focus:border-primary text-sm bg-surface"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1 text-left">
                  <label htmlFor="email" className="block text-xs font-bold text-primary uppercase">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 border border-border rounded focus:outline-none focus:border-primary text-sm bg-surface"
                    placeholder="name@example.com"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1 text-left">
                  <label htmlFor="phone" className="block text-xs font-bold text-primary uppercase">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 border border-border rounded focus:outline-none focus:border-primary text-sm bg-surface"
                    placeholder="10-digit mobile number"
                  />
                </div>

                {/* Position Applied For */}
                <div className="space-y-1 text-left">
                  <label htmlFor="position" className="block text-xs font-bold text-primary uppercase">Position Applied For *</label>
                  <select
                    id="position"
                    name="position"
                    required
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 border border-border rounded focus:outline-none focus:border-primary text-sm bg-surface"
                  >
                    <option value="" disabled>Select a vacancy</option>
                    <option value="TGT Mathematics Teacher">TGT Mathematics Teacher</option>
                    <option value="PGT Physics Teacher">PGT Physics Teacher</option>
                    <option value="Mother Teacher (Pre-Primary)">Mother Teacher (Pre-Primary)</option>
                    <option value="Office Coordinator / Front Desk">Office Coordinator / Front Desk</option>
                    <option value="Science Laboratory Assistant">Science Laboratory Assistant</option>
                    <option value="General Application / Other">Other / General Application</option>
                  </select>
                </div>

                {/* Highest Qualification */}
                <div className="space-y-1 text-left">
                  <label htmlFor="qualification" className="block text-xs font-bold text-primary uppercase">Highest Qualification *</label>
                  <input
                    type="text"
                    id="qualification"
                    name="qualification"
                    required
                    value={formData.qualification}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 border border-border rounded focus:outline-none focus:border-primary text-sm bg-surface"
                    placeholder="e.g., M.Sc in Mathematics, B.Ed"
                  />
                </div>

                {/* Experience */}
                <div className="space-y-1 text-left">
                  <label htmlFor="experience" className="block text-xs font-bold text-primary uppercase">Total Experience</label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 border border-border rounded focus:outline-none focus:border-primary text-sm bg-surface"
                  >
                    <option value="">Select experience level</option>
                    <option value="Fresh Graduate">Fresh Graduate / No Experience</option>
                    <option value="1-2 Years">1 - 2 Years</option>
                    <option value="3-5 Years">3 - 5 Years</option>
                    <option value="5+ Years">5+ Years</option>
                  </select>
                </div>

                {/* Resume Link */}
                <div className="space-y-1 text-left">
                  <label htmlFor="resumeLink" className="block text-xs font-bold text-primary uppercase flex justify-between">
                    <span>Resume Share Link</span>
                    <span className="text-[10px] text-text-muted font-normal lowercase">(Google Drive, Dropbox)</span>
                  </label>
                  <input
                    type="url"
                    id="resumeLink"
                    name="resumeLink"
                    value={formData.resumeLink}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 border border-border rounded focus:outline-none focus:border-primary text-sm bg-surface"
                    placeholder="https://drive.google.com/..."
                  />
                </div>

                {/* Cover Letter */}
                <div className="space-y-1 text-left">
                  <label htmlFor="coverLetter" className="block text-xs font-bold text-primary uppercase">Message / Cover Letter</label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    rows={4}
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 border border-border rounded focus:outline-none focus:border-primary text-sm bg-surface resize-none"
                    placeholder="Tell us briefly about your motivation..."
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent text-white font-bold py-3.5 rounded hover:bg-accent/95 transition-colors disabled:opacity-50 min-h-[44px] flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </button>
              </form>
            )}

          </div>
        </div>

      </div>

    </div>
  );
}