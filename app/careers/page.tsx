// app/careers/page.tsx
'use client';

import React, { useState } from 'react';

export default function CareersPage() {
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
    <div className="min-h-screen bg-background pb-16">
      
      {/* 1. HERO HEADER */}
      <section className="bg-surface py-16 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent bg-accent/10 px-3 py-1 rounded-full">
            GBR Careers
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-primary tracking-tight [text-wrap:balance]">
            Join Our Team
          </h1>
          <p className="text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
            Inspire the next generation. Complete the application form below to submit your credentials directly to our recruitment team.
          </p>
        </div>
      </section>

      {/* 2. CENTERED FORM CONTAINER */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white p-6 sm:p-10 rounded-xl border border-border shadow-md space-y-8">
          
          <div className="space-y-2 text-center pb-4 border-b border-border">
            <h2 className="text-2xl font-bold text-primary">Job Application Form</h2>
            <p className="text-sm text-text-muted">
              Please fill out all the details accurately. Our HR team will follow up via email.
            </p>
          </div>

          {isSuccess ? (
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto text-3xl font-bold">
                ✓
              </div>
              <h3 className="text-xl font-bold text-primary">Application Submitted!</h3>
              <p className="text-base text-text-muted leading-relaxed">
                Thank you for applying to GBR Group of Schools. Your application has been successfully delivered. Our recruitment team will review your qualifications and contact you soon.
              </p>
              <button
                onClick={handleReset}
                className="w-full bg-primary text-white font-semibold py-3.5 rounded hover:bg-primary/95 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary min-h-[44px]"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                  {error}
                </div>
              )}

              {/* Name */}
              <div className="space-y-1.5 text-left">
                <label htmlFor="name" className="block text-xs font-bold text-primary uppercase tracking-wider">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:border-primary text-sm bg-surface"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="email" className="block text-xs font-bold text-primary uppercase tracking-wider">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:border-primary text-sm bg-surface"
                    placeholder="name@example.com"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="phone" className="block text-xs font-bold text-primary uppercase tracking-wider">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:border-primary text-sm bg-surface"
                    placeholder="10-digit mobile number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Position Applied For */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="position" className="block text-xs font-bold text-primary uppercase tracking-wider">Position Applied For *</label>
                  <select
                    id="position"
                    name="position"
                    required
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:border-primary text-sm bg-surface"
                  >
                    <option value="" disabled>Select a position</option>
                    <option value="Teaching Staff (TGT/PGT)">Teaching Staff (TGT/PGT)</option>
                    <option value="Pre-Primary Teacher">Pre-Primary Teacher</option>
                    <option value="Administrative Staff">Administrative Staff</option>
                    <option value="Support Staff">Support Staff</option>
                    <option value="Other / General Application">Other / General Application</option>
                  </select>
                </div>

                {/* Highest Qualification */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="qualification" className="block text-xs font-bold text-primary uppercase tracking-wider">Highest Qualification *</label>
                  <input
                    type="text"
                    id="qualification"
                    name="qualification"
                    required
                    value={formData.qualification}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:border-primary text-sm bg-surface"
                    placeholder="e.g., M.Sc, B.Ed, M.A"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Experience */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="experience" className="block text-xs font-bold text-primary uppercase tracking-wider">Total Experience</label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:border-primary text-sm bg-surface"
                  >
                    <option value="">Select experience level</option>
                    <option value="Fresh Graduate">Fresh Graduate / No Experience</option>
                    <option value="1-2 Years">1 - 2 Years</option>
                    <option value="3-5 Years">3 - 5 Years</option>
                    <option value="5+ Years">5+ Years</option>
                  </select>
                </div>

                {/* Resume Link */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="resumeLink" className="block text-xs font-bold text-primary uppercase tracking-wider flex justify-between">
                    <span>Resume Link</span>
                    <span className="text-[10px] text-text-muted font-normal lowercase">(Google Drive, Dropbox)</span>
                  </label>
                  <input
                    type="url"
                    id="resumeLink"
                    name="resumeLink"
                    value={formData.resumeLink}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:border-primary text-sm bg-surface"
                    placeholder="https://drive.google.com/..."
                  />
                </div>
              </div>

              {/* Cover Letter */}
              <div className="space-y-1.5 text-left">
                <label htmlFor="coverLetter" className="block text-xs font-bold text-primary uppercase tracking-wider">Message / Cover Letter</label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  rows={4}
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:border-primary text-sm bg-surface resize-none"
                  placeholder="Tell us briefly about your motivation..."
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-white font-bold py-4 rounded hover:bg-accent/95 transition-colors disabled:opacity-50 min-h-[44px] flex items-center justify-center gap-2"
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
  );
}