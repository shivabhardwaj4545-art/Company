'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialEmail?: string;
}

export interface CountryCode {
  code: string;
  name: string;
  dialCode: string;
  flag: string;
  placeholder: string;
  length: number;
}

export const COUNTRY_CODES: CountryCode[] = [
  { code: 'IN', name: 'India', dialCode: '+91', flag: '🇮🇳', placeholder: '98765 43210', length: 10 },
  { code: 'US', name: 'United States', dialCode: '+1', flag: '🇺🇸', placeholder: '(555) 000-0000', length: 10 },
  { code: 'GB', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧', placeholder: '7911 123456', length: 10 },
  { code: 'AE', name: 'United Arab Emirates', dialCode: '+971', flag: '🇦🇪', placeholder: '50 123 4567', length: 9 },
  { code: 'SA', name: 'Saudi Arabia', dialCode: '+966', flag: '🇸🇦', placeholder: '50 123 4567', length: 9 },
  { code: 'CA', name: 'Canada', dialCode: '+1', flag: '🇨🇦', placeholder: '(555) 000-0000', length: 10 },
  { code: 'AU', name: 'Australia', dialCode: '+61', flag: '🇦🇺', placeholder: '412 345 678', length: 9 },
  { code: 'SG', name: 'Singapore', dialCode: '+65', flag: '🇸🇬', placeholder: '8123 4567', length: 8 },
  { code: 'DE', name: 'Germany', dialCode: '+49', flag: '🇩🇪', placeholder: '151 2345678', length: 10 },
];

export function ProjectModal({ isOpen, onClose, initialEmail }: ProjectModalProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(COUNTRY_CODES[0]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: initialEmail || '',
    projectType: 'web-development',
    budgetRange: '$5k - $10k',
    details: '',
  });

  useEffect(() => {
    if (initialEmail && isOpen) {
      setFormData((prev) => ({ ...prev, email: initialEmail }));
    }
  }, [initialEmail, isOpen]);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = e.target.value.replace(/\D/g, '');
    const trimmed = digitsOnly.slice(0, selectedCountry.length);
    setFormData({ ...formData, phone: trimmed });
    if (errors.phone) setErrors({ ...errors, phone: '' });
  };

  const handleNext = () => {
    if (step === 1) {
      if (!formData.name.trim()) {
        setErrors({ name: 'Please enter your name' });
        return;
      }
      setErrors({});
    }

    if (step === 2) {
      if (!formData.email.trim() || !formData.email.includes('@')) {
        setErrors({ email: 'Please enter a valid email address' });
        return;
      }
      if (!formData.phone.trim()) {
        setErrors({ phone: 'Please enter your phone / WhatsApp number' });
        return;
      }
      setErrors({});
    }

    if (step < 4) {
      setStep((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const fullPhone = `${selectedCountry.dialCode} ${formData.phone}`;
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          countryCode: selectedCountry.dialCode,
          fullPhone,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error('Lead submission failed:', err);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setStep(1);
    setSubmitted(false);
    setSelectedCountry(COUNTRY_CODES[0]);
    setFormData({
      name: '',
      phone: '',
      email: '',
      projectType: 'web-development',
      budgetRange: '$5k - $10k',
      details: '',
    });
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-lg rounded-[32px] border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 shadow-2xl shadow-[#6a57fa]/10 overflow-hidden text-[var(--text-primary)]"
      >
        {/* Background Ambient Radial Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#6a57fa]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={resetForm}
          className="absolute top-6 right-6 w-9 h-9 rounded-full border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[#6a57fa] hover:bg-[#6a57fa]/10 transition-colors flex items-center justify-center z-20"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div className="flex flex-col space-y-5">
            {/* Top Step Header */}
            <div>
              <div className="text-xs font-mono font-black text-[#6a57fa] tracking-widest uppercase mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#6a57fa]" /> STEP {step} OF 4
              </div>

              <h2 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-[var(--text-primary)] leading-tight">
                {step === 1 && 'WHAT SHOULD WE CALL YOU?'}
                {step === 2 && 'WHERE CAN WE REACH YOU?'}
                {step === 3 && 'WHAT ARE WE BUILDING?'}
                {step === 4 && 'BUDGET & PROJECT VISION'}
              </h2>

              <p className="text-xs sm:text-sm font-medium text-[var(--text-secondary)] mt-1">
                {step === 1 && 'First name is plenty.'}
                {step === 2 && 'We will send a quick response within 2 hours.'}
                {step === 3 && 'Select your primary goal.'}
                {step === 4 && 'Share your estimated budget and goals.'}
              </p>
            </div>

            {/* Step Body Content */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.15 }}
                >
                  {/* Step 1: Name */}
                  {step === 1 && (
                    <div className="space-y-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: '' });
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              handleNext();
                            }
                          }}
                          className="w-full px-5 py-4 rounded-2xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] font-semibold text-sm placeholder:text-[var(--text-secondary)]/60 focus:outline-none focus:border-[#6a57fa] focus:ring-2 focus:ring-[#6a57fa]/20 transition-colors"
                        />
                        {errors.name && <p className="text-xs font-bold text-red-500 mt-1.5">{errors.name}</p>}
                      </div>
                    </div>
                  )}

                  {/* Step 2: Email & Phone */}
                  {step === 2 && (
                    <div className="space-y-3.5">
                      <div>
                        <input
                          type="email"
                          placeholder="Your email address"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: '' });
                          }}
                          className="w-full px-5 py-3.5 rounded-2xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] font-semibold text-sm placeholder:text-[var(--text-secondary)]/60 focus:outline-none focus:border-[#6a57fa] focus:ring-2 focus:ring-[#6a57fa]/20 transition-colors"
                        />
                        {errors.email && <p className="text-xs font-bold text-red-500 mt-1">{errors.email}</p>}
                      </div>

                      <div className="flex gap-2">
                        <select
                          value={selectedCountry.code}
                          onChange={(e) => {
                            const found = COUNTRY_CODES.find((c) => c.code === e.target.value);
                            if (found) setSelectedCountry(found);
                          }}
                          className="px-3 py-3.5 rounded-2xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] font-bold text-xs focus:outline-none focus:border-[#6a57fa] cursor-pointer"
                        >
                          {COUNTRY_CODES.map((item) => (
                            <option key={item.code} value={item.code}>
                              {item.flag} {item.dialCode}
                            </option>
                          ))}
                        </select>
                        <input
                          type="tel"
                          placeholder={selectedCountry.placeholder}
                          value={formData.phone}
                          maxLength={selectedCountry.length}
                          onChange={handlePhoneChange}
                          className="flex-1 px-5 py-3.5 rounded-2xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] font-semibold text-sm focus:outline-none focus:border-[#6a57fa] focus:ring-2 focus:ring-[#6a57fa]/20 transition-colors"
                        />
                      </div>
                      {errors.phone && <p className="text-xs font-bold text-red-500 mt-1">{errors.phone}</p>}
                    </div>
                  )}

                  {/* Step 3: Project Type */}
                  {step === 3 && (
                    <div className="space-y-2.5">
                      {[
                        { id: 'web-development', label: 'Web & Mobile Apps', desc: 'Next.js, React & Enterprise SaaS' },
                        { id: 'branding', label: 'Brand & Visual Systems', desc: 'Logos, Identity Systems & Component Specs' },
                        { id: 'ai-automation', label: 'AI & Automation Workflows', desc: 'LLM Agents, Bots & Cloud Pipelines' },
                      ].map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type.id })}
                          className={`w-full p-4 rounded-2xl border text-left transition-all ${
                            formData.projectType === type.id
                              ? 'border-[#6a57fa] bg-[#6a57fa]/10 text-[var(--text-primary)] ring-1 ring-[#6a57fa]'
                              : 'border-[var(--border)] bg-[var(--bg)] text-[var(--text-secondary)] hover:border-[#6a57fa]/50'
                          }`}
                        >
                          <div className="font-black text-sm uppercase text-[var(--text-primary)]">{type.label}</div>
                          <div className="text-xs text-[var(--text-secondary)] font-medium mt-0.5">{type.desc}</div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Step 4: Budget & Details */}
                  {step === 4 && (
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-2">
                        {['<$5k', '$5k - $10k', '$10k+'].map((range) => (
                          <button
                            key={range}
                            type="button"
                            onClick={() => setFormData({ ...formData, budgetRange: range })}
                            className={`py-2.5 px-3 rounded-xl border font-black text-xs transition-all ${
                              formData.budgetRange === range
                                ? 'bg-[#6a57fa] text-white border-[#6a57fa] shadow-md'
                                : 'bg-[var(--bg)] text-[var(--text-secondary)] border-[var(--border)] hover:border-[#6a57fa]'
                            }`}
                          >
                            {range}
                          </button>
                        ))}
                      </div>

                      <textarea
                        rows={3}
                        placeholder="Briefly describe what you want to build..."
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-2xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] font-semibold text-xs resize-none focus:outline-none focus:border-[#6a57fa] focus:ring-2 focus:ring-[#6a57fa]/20 transition-colors"
                      />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Actions & Step Indicators */}
            <div className="pt-2 space-y-4">
              <div className="flex items-center gap-3">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-5 py-3.5 rounded-full border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] hover:border-[#6a57fa] font-black text-xs uppercase transition-colors"
                  >
                    BACK
                  </button>
                )}
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={loading}
                  className="flex-1 py-4 rounded-full bg-[#6a57fa] hover:bg-[#5844f7] text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-[#6a57fa]/25 hover:scale-[1.01] transition-all disabled:opacity-50"
                >
                  {loading ? 'SENDING...' : step === 4 ? 'SUBMIT REQUEST' : 'NEXT'}
                </button>
              </div>

              {/* Bottom Step Indicator Dots */}
              <div className="flex justify-center items-center gap-2">
                {[1, 2, 3, 4].map((s) => (
                  <div
                    key={s}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      s === step ? 'w-8 bg-[#6a57fa]' : 'w-4 bg-[var(--border)]'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Submission Success State */
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#6a57fa]/10 text-[#6a57fa] border border-[#6a57fa] flex items-center justify-center shadow-lg shadow-[#6a57fa]/20">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black font-display uppercase tracking-tight text-[var(--text-primary)]">
              REQUEST CONFIRMED!
            </h3>
            <p className="text-xs sm:text-sm font-medium text-[var(--text-secondary)] max-w-sm mx-auto">
              Thank you {formData.name}! Your request has been recorded. Our team will reach out to <strong>{formData.email || formData.phone}</strong> shortly.
            </p>
            <button
              onClick={resetForm}
              className="px-8 py-3.5 rounded-full bg-[#6a57fa] hover:bg-[#5844f7] text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-[#6a57fa]/20"
            >
              CLOSE WINDOW
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
