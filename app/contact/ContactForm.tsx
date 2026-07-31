// app/contact/ContactForm.tsx
"use client";

import { useState, useEffect, useRef } from 'react';
import { auth } from '../lib/firebase';
import { RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult } from 'firebase/auth';

type CourseType = 'Pre-Primary School' | 'Primary School' | 'High School' | 'A.C. Campus';

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
  
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<1 | 2 | 3>(1); // 1: Info, 2: OTP, 3: Success
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [error, setError] = useState('');
  
  // Timer for Resend OTP
  const [timer, setTimer] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Clean up reCAPTCHA verifier on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if ((window as any).recaptchaVerifier) {
        try {
          (window as any).recaptchaVerifier.clear();
          (window as any).recaptchaVerifier = null;
        } catch (e) {
          console.error("Error clearing recaptcha", e);
        }
      }
    };
  }, []);

  // Handle countdown timer
  useEffect(() => {
    if (timer > 0) {
      timerRef.current = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timer]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
  };

  const setupRecaptcha = () => {
    if ((window as any).recaptchaVerifier) {
      return;
    }
    
    try {
      (window as any).recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
        callback: () => {
          // reCAPTCHA solved, proceed with sign-in.
        },
        'expired-callback': () => {
          setError('reCAPTCHA expired. Please try again.');
        }
      });
    } catch (err: any) {
      console.error("Failed to initialize recaptcha", err);
      setError('Google reCAPTCHA initialization failed. Please reload the page.');
    }
  };

  const formatPhoneNumber = (phoneNum: string): string => {
    // Remove all non-digits
    const clean = phoneNum.replace(/\D/g, '');
    
    // Check if it's already in international format
    if (phoneNum.startsWith('+')) {
      return phoneNum;
    }
    
    // If standard 10 digit Indian number, append +91
    if (clean.length === 10) {
      return `+91${clean}`;
    }
    
    // If 12 digits starting with 91, prepend +
    if (clean.length === 12 && clean.startsWith('91')) {
      return `+${clean}`;
    }
    
    return `+${clean}`;
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validations
    if (!formData.name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!formData.phone.trim()) {
      setError('Please enter your phone number.');
      return;
    }
    
    const formattedPhone = formatPhoneNumber(formData.phone);
    if (!formattedPhone || formattedPhone.length < 10) {
      setError('Please enter a valid phone number.');
      return;
    }
    
    if (!formData.course) {
      setError('Please select a course / school program.');
      return;
    }

    setIsSendingOtp(true);

    try {
      setupRecaptcha();
      const appVerifier = (window as any).recaptchaVerifier;
      
      const confirmation = await signInWithPhoneNumber(auth, formattedPhone, appVerifier);
      setConfirmationResult(confirmation);
      setStep(2);
      setTimer(60); // Start 60s cooldown
    } catch (err: any) {
      console.error("Error during signInWithPhoneNumber", err);
      // Reset reCAPTCHA if it failed
      if ((window as any).recaptchaVerifier) {
        try {
          (window as any).recaptchaVerifier.clear();
          (window as any).recaptchaVerifier = null;
        } catch (e) {}
      }
      
      if (err.code === 'auth/invalid-phone-number') {
        setError('The phone number entered is invalid. Please double-check.');
      } else if (err.code === 'auth/too-many-requests') {
        setError('Too many OTP requests have been sent. Please try again later.');
      } else {
        setError(err.message || 'Failed to send verification SMS. Please try again.');
      }
    } finally {
      setIsSendingOtp(false);
    }
  };

  const handleResendOtp = async () => {
    if (timer > 0) return;
    setError('');
    setIsSendingOtp(true);

    const formattedPhone = formatPhoneNumber(formData.phone);

    try {
      setupRecaptcha();
      const appVerifier = (window as any).recaptchaVerifier;
      const confirmation = await signInWithPhoneNumber(auth, formattedPhone, appVerifier);
      setConfirmationResult(confirmation);
      setTimer(60);
    } catch (err: any) {
      console.error("Error during resend", err);
      setError('Failed to resend code. Please try again.');
    } finally {
      setIsSendingOtp(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!otp.trim()) {
      setError('Please enter the verification code.');
      return;
    }
    if (otp.length !== 6) {
      setError('The verification code must be exactly 6 digits.');
      return;
    }

    setIsVerifyingOtp(true);

    try {
      if (confirmationResult) {
        await confirmationResult.confirm(otp);
        // Authentication successful, advance to step 3 (Success Screen)
        setStep(3);
      } else {
        setError('Verification session expired. Please request another code.');
        setStep(1);
      }
    } catch (err: any) {
      console.error("Error verifying OTP code", err);
      if (err.code === 'auth/invalid-verification-code') {
        setError('Invalid OTP code. Please double-check and try again.');
      } else {
        setError('Verification failed. The OTP code is incorrect or expired.');
      }
    } finally {
      setIsVerifyingOtp(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      course: '',
      message: ''
    });
    setOtp('');
    setConfirmationResult(null);
    setStep(1);
    setError('');
  };

  // Step 3: Success Screen
  if (step === 3) {
    return (
      <div className="bg-surface border border-border p-8 rounded-lg text-center shadow-sm max-w-xl mx-auto transition-all duration-300">
        <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
          <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-primary mb-3">Verification Successful!</h3>
        <p className="text-text-muted mb-4 leading-relaxed">
          Thank you, <strong className="text-primary">{formData.name}</strong>. Your callback request for <strong className="text-primary">{formData.course}</strong> has been successfully registered.
        </p>
        <div className="bg-white p-4 rounded border border-border inline-block mb-6">
          <p className="text-sm text-text-muted">
            Our counselor will call you shortly at: <strong className="text-primary tabular-nums font-mono">{formatPhoneNumber(formData.phone)}</strong>
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

  // Step 2: OTP Verification Screen
  if (step === 2) {
    return (
      <div className="bg-surface p-8 rounded-lg border border-border shadow-sm max-w-xl mx-auto">
        <div className="mb-6">
          <button 
            onClick={() => { setStep(1); setError(''); }} 
            className="text-xs font-semibold text-accent hover:text-primary transition-colors flex items-center gap-1.5 mb-3"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
            Edit Phone Number
          </button>
          <h3 className="text-2xl font-bold text-primary">Verify OTP Code</h3>
          <p className="text-sm text-text-muted mt-2">
            A 6-digit SMS verification code has been sent to <strong className="text-primary tabular-nums">{formatPhoneNumber(formData.phone)}</strong>. Please enter it below.
          </p>
        </div>

        <form onSubmit={handleVerifyOtp} className="space-y-5">
          {/* OTP Code input */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="otp" className="text-sm font-semibold text-primary">
              Verification Code (OTP) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="otp"
              name="otp"
              maxLength={6}
              value={otp}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, '');
                setOtp(val);
                if (error) setError('');
              }}
              placeholder="e.g. 123456"
              required
              autoFocus
              className="w-full px-4 py-3.5 bg-white border border-border rounded focus-visible:outline-none focus-visible:border-primary/50 text-center text-lg font-mono tracking-[0.4em] placeholder:text-gray-300 placeholder:tracking-normal placeholder:font-sans transition-colors"
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
            disabled={isVerifyingOtp}
            className="w-full py-3.5 bg-primary text-white rounded font-semibold text-sm hover:bg-primary/95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 flex items-center justify-center cursor-pointer shadow-sm disabled:opacity-75 disabled:cursor-not-allowed"
          >
            {isVerifyingOtp ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4} />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Verifying OTP...
              </>
            ) : 'Verify & Submit Callback'}
          </button>

          {/* Timer and Resend option */}
          <div className="text-center pt-2">
            {timer > 0 ? (
              <p className="text-xs text-text-muted">
                Resend code in <strong className="text-primary tabular-nums font-mono">{timer}s</strong>
              </p>
            ) : (
              <button
                type="button"
                onClick={handleResendOtp}
                disabled={isSendingOtp}
                className="text-xs font-bold text-accent hover:text-primary transition-colors underline cursor-pointer"
              >
                {isSendingOtp ? 'Sending...' : 'Resend Verification Code'}
              </button>
            )}
          </div>
        </form>
      </div>
    );
  }

  // Step 1: Form details input
  return (
    <div className="bg-surface p-8 rounded-lg border border-border shadow-sm max-w-xl mx-auto">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-primary">Request a Call Back</h3>
        <p className="text-sm text-text-muted mt-2">
          Verify your mobile number via OTP to register your counselor callback inquiry.
        </p>
      </div>

      <form onSubmit={handleSendOtp} className="space-y-5">
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
            Mobile Number <span className="text-red-500">*</span>
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
              <option value="A.C. Campus">A.C. Campus</option>
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
          disabled={isSendingOtp}
          className="w-full py-3.5 bg-primary text-white rounded font-semibold text-sm hover:bg-primary/95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 flex items-center justify-center cursor-pointer shadow-sm disabled:opacity-75 disabled:cursor-not-allowed"
        >
          {isSendingOtp ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Sending verification SMS...
            </>
          ) : 'Verify Mobile & Submit'}
        </button>
      </form>

      {/* Container for invisible Google Recaptcha verification */}
      <div id="recaptcha-container" className="hidden"></div>
    </div>
  );
}
