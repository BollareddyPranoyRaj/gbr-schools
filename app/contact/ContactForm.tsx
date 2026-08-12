// app/contact/ContactForm.tsx
"use client";

import { useState } from 'react';

type CourseType = 'Pre-Primary School' | 'Primary School' | 'High School' | 'A.C Campus';

interface FormData {
  name: string;
  phone: string;
  course: CourseType | '';
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    course: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!formData.phone.trim()) {
      setError('Please enter your phone number.');
      return;
    }
    // Check if phone number is numeric and has reasonable length
    const cleanPhone = formData.phone.replace(/[^0-9+]/g, '');
    if (cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }
    if (!formData.course) {
      setError('Please select a course / school program.');
      return;
    }

    setIsSubmitting(true);
    setError('');
    
    try {
      const formDataObj = new FormData();
      formDataObj.append("access_key", "2915ca6b-7152-436c-979a-e8a5a13baada");
      formDataObj.append("subject", `New Callback Request: ${formData.name}`);
      formDataObj.append("name", formData.name);
      formDataObj.append("phone", formData.phone);
      formDataObj.append("course", formData.course);
      formDataObj.append("message", formData.message || "No specific message provided");

      console.log("Submitting form data to Web3Forms...", Object.fromEntries(formDataObj.entries()));

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj
      });
      
      const data = await response.json();
      console.log("Web3Forms API response:", data);

      if (data.success) {
        setIsSuccess(true);
      } else {
        setError(data.message || "Failed to submit callback request.");
      }
    } catch (err) {
      setError('Failed to connect to submission server. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      course: '',
      message: ''
    });
    setIsSuccess(false);
    setError('');
  };

  if (isSuccess) {
    return (
      <div className="bg-surface border border-border p-8 rounded-lg text-center shadow-sm max-w-xl mx-auto transition-all duration-300">
        <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
          <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-primary mb-3">Callback Requested!</h3>
        <p className="text-text-muted mb-4 leading-relaxed">
          Thank you, <strong className="text-primary">{formData.name}</strong>. We have registered your request for <strong className="text-primary">{formData.course}</strong>.
        </p>
        <div className="bg-white p-4 rounded border border-border inline-block mb-6">
          <p className="text-sm text-text-muted">
            We will contact you shortly at: <strong className="text-primary tabular-nums font-mono">{formData.phone}</strong>
          </p>
        </div>
        <div>
          <button 
            onClick={handleReset} 
            className="text-sm font-semibold text-accent hover:text-primary transition-colors underline cursor-pointer"
          >
            Submit another callback request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface p-8 rounded-lg border border-border shadow-sm max-w-xl mx-auto">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-primary">Request a Call Back</h3>
        <p className="text-sm text-text-muted mt-2">
          Fill in your details and select a school program. Our counselor will get in touch with you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name input */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-semibold text-primary">
            Student / Parent Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter full name"
            required
            className="w-full px-4 py-3 bg-white border border-border rounded focus-visible:outline-none focus-visible:border-primary/50 text-sm placeholder:text-gray-400 transition-colors"
          />
        </div>

        {/* Phone input */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-sm font-semibold text-primary">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="10-digit mobile number"
            required
            className="w-full px-4 py-3 bg-white border border-border rounded focus-visible:outline-none focus-visible:border-primary/50 text-sm placeholder:text-gray-400 transition-colors"
          />
        </div>

        {/* Course / Program Dropdown */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="course" className="text-sm font-semibold text-primary">
            Select Course / Program <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white border border-border rounded focus-visible:outline-none focus-visible:border-primary/50 text-sm text-primary appearance-none cursor-pointer transition-colors"
            >
              <option value="" disabled className="text-gray-400">Choose a school program...</option>
              <option value="Pre-Primary School">Pre-Primary School</option>
              <option value="Primary School">Primary School</option>
              <option value="High School">High School</option>
              <option value="A.C Campus">A.C Campus</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-primary">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Optional Message */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-sm font-semibold text-primary">
            Message / Specific Inquiry <span className="text-xs text-text-muted font-normal">(Optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your requirements..."
            rows={3}
            className="w-full px-4 py-3 bg-white border border-border rounded focus-visible:outline-none focus-visible:border-primary/50 text-sm placeholder:text-gray-400 transition-colors resize-none"
          />
        </div>

        {/* Error message */}
        {error && (
          <div className="text-red-600 text-sm font-semibold bg-red-50 p-3 rounded border border-red-200">
            {error}
          </div>
        )}

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 bg-primary text-white rounded font-semibold text-sm hover:bg-primary/95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 flex items-center justify-center cursor-pointer shadow-sm disabled:opacity-75 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Submitting Request...
            </>
          ) : 'Submit Callback Request'}
        </button>
      </form>
    </div>
  );
}
