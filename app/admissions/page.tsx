'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';

export default function AdmissionsPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // We will connect this to your email backend later!
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans pb-24">
      
      {/* Hero Header */}
      <div className="bg-[#0B2046] text-white py-20 px-6 md:px-12 text-center border-b-[6px] border-red-600">
        <h1 className="text-4xl md:text-5xl font-black font-serif uppercase tracking-tight mb-4">
          Admissions Open
        </h1>
        <p className="text-white/80 max-w-2xl mx-auto text-lg">
          Secure your child's future at GBR Schools. Fill out the inquiry form below, and our admissions team will contact you shortly.
        </p>
      </div>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left Side: Contact Information */}
          <div className="w-full lg:w-1/3 bg-[#0B2046] p-10 md:p-14 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 rounded-full filter blur-[100px] opacity-20 pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold font-serif uppercase tracking-tight mb-2">Get in Touch</h2>
              <p className="text-white/70 mb-10 text-sm">We are here to answer all your questions regarding the admission process, campus facilities, and transport routes.</p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-wider text-sm mb-1">Campus Address</h4>
                    <p className="text-white/80 text-sm leading-relaxed">GBR Educational Institutions,<br/>Anaparthi, East Godavari District,<br/>Andhra Pradesh, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-wider text-sm mb-1">Admissions Helpdesk</h4>
                    <p className="text-white/80 text-sm leading-relaxed">+91 98765 43210<br/>+91 98765 43211</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-wider text-sm mb-1">Email Us</h4>
                    <p className="text-white/80 text-sm leading-relaxed">admissions@gbrschools.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="w-full lg:w-2/3 p-10 md:p-14">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in fade-in zoom-in duration-500">
                <CheckCircle2 size={80} className="text-green-500 mb-6" />
                <h2 className="text-3xl font-bold font-serif text-[#0B2046] mb-4">Inquiry Received!</h2>
                <p className="text-gray-500 max-w-md">Thank you for choosing GBR Schools. Our admissions counselor will call you within 24 hours with further details.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-red-600 font-bold uppercase text-sm hover:underline"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold font-serif text-[#0B2046] uppercase tracking-tight mb-8">Student Inquiry Form</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0B2046] uppercase tracking-wider">Parent/Guardian Name *</label>
                    <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0B2046] uppercase tracking-wider">Student Name *</label>
                    <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition" placeholder="Jane Doe" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0B2046] uppercase tracking-wider">Phone Number *</label>
                    <input required type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition" placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0B2046] uppercase tracking-wider">Email Address</label>
                    <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition" placeholder="email@example.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0B2046] uppercase tracking-wider">Campus Preference *</label>
                    <select required className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition text-gray-700">
                      <option value="">Select a Campus...</option>
                      <option value="ac">The AC Campus</option>
                      <option value="standard">The Standard Campus</option>
                      <option value="undecided">Not Sure Yet</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0B2046] uppercase tracking-wider">Grade Seeking *</label>
                    <select required className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition text-gray-700">
                      <option value="">Select a Grade...</option>
                      <option value="nursery">Nursery / LKG / UKG</option>
                      <option value="1-5">Grades 1 to 5</option>
                      <option value="6-8">Grades 6 to 8</option>
                      <option value="9-10">Grades 9 & 10</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0B2046] uppercase tracking-wider">Additional Questions (Optional)</label>
                  <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition resize-none" placeholder="Let us know if you need transport details or have specific queries..."></textarea>
                </div>

                <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition duration-300 shadow-lg shadow-red-600/20 tracking-widest uppercase flex items-center justify-center gap-2 group">
                  Submit Inquiry <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </main>
  );
}