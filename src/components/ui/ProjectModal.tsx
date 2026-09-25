'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft, CheckCircle2, Sparkles, Send } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
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
  // Frequently used
  { code: 'IN', name: 'India', dialCode: '+91', flag: '🇮🇳', placeholder: '98765 43210', length: 10 },
  { code: 'US', name: 'United States', dialCode: '+1', flag: '🇺🇸', placeholder: '(555) 000-0000', length: 10 },
  { code: 'GB', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧', placeholder: '7911 123456', length: 10 },
  { code: 'AE', name: 'United Arab Emirates', dialCode: '+971', flag: '🇦🇪', placeholder: '50 123 4567', length: 9 },
  { code: 'SA', name: 'Saudi Arabia', dialCode: '+966', flag: '🇸🇦', placeholder: '50 123 4567', length: 9 },
  { code: 'CA', name: 'Canada', dialCode: '+1', flag: '🇨🇦', placeholder: '(555) 000-0000', length: 10 },
  { code: 'AU', name: 'Australia', dialCode: '+61', flag: '🇦🇺', placeholder: '412 345 678', length: 9 },
  { code: 'SG', name: 'Singapore', dialCode: '+65', flag: '🇸🇬', placeholder: '8123 4567', length: 8 },
  { code: 'DE', name: 'Germany', dialCode: '+49', flag: '🇩🇪', placeholder: '151 2345678', length: 10 },
  { code: 'FR', name: 'France', dialCode: '+33', flag: '🇫🇷', placeholder: '6 12 34 56 78', length: 9 },
  { code: 'NZ', name: 'New Zealand', dialCode: '+64', flag: '🇳🇿', placeholder: '21 123 4567', length: 9 },
  { code: 'QA', name: 'Qatar', dialCode: '+974', flag: '🇶🇦', placeholder: '3312 3456', length: 8 },
  { code: 'KW', name: 'Kuwait', dialCode: '+965', flag: '🇰🇼', placeholder: '9123 4567', length: 8 },
  { code: 'OM', name: 'Oman', dialCode: '+968', flag: '🇴🇲', placeholder: '9123 4567', length: 8 },
  { code: 'BH', name: 'Bahrain', dialCode: '+973', flag: '🇧🇭', placeholder: '3612 3456', length: 8 },
  { code: 'BD', name: 'Bangladesh', dialCode: '+880', flag: '🇧🇩', placeholder: '1712 345678', length: 10 },
  { code: 'NP', name: 'Nepal', dialCode: '+977', flag: '🇳🇵', placeholder: '9812 345678', length: 10 },
  { code: 'LK', name: 'Sri Lanka', dialCode: '+94', flag: '🇱🇰', placeholder: '71 234 5678', length: 9 },
  { code: 'MY', name: 'Malaysia', dialCode: '+60', flag: '🇲🇾', placeholder: '12 345 6789', length: 9 },
  { code: 'PH', name: 'Philippines', dialCode: '+63', flag: '🇵🇭', placeholder: '917 123 4567', length: 10 },
  { code: 'ID', name: 'Indonesia', dialCode: '+62', flag: '🇮🇩', placeholder: '812 3456 7890', length: 10 },
  { code: 'PK', name: 'Pakistan', dialCode: '+92', flag: '🇵🇰', placeholder: '300 1234567', length: 10 },
  { code: 'ZA', name: 'South Africa', dialCode: '+27', flag: '🇿🇦', placeholder: '82 123 4567', length: 9 },
  { code: 'NG', name: 'Nigeria', dialCode: '+234', flag: '🇳🇬', placeholder: '802 123 4567', length: 10 },
  { code: 'KE', name: 'Kenya', dialCode: '+254', flag: '🇰🇪', placeholder: '712 345678', length: 9 },
  { code: 'JP', name: 'Japan', dialCode: '+81', flag: '🇯🇵', placeholder: '90 1234 5678', length: 10 },
  { code: 'CN', name: 'China', dialCode: '+86', flag: '🇨🇳', placeholder: '138 1234 5678', length: 11 },
  { code: 'KR', name: 'South Korea', dialCode: '+82', flag: '🇰🇷', placeholder: '10 1234 5678', length: 10 },
  { code: 'IT', name: 'Italy', dialCode: '+39', flag: '🇮🇹', placeholder: '312 345 6789', length: 10 },
  { code: 'ES', name: 'Spain', dialCode: '+34', flag: '🇪🇸', placeholder: '612 34 56 78', length: 9 },
  { code: 'NL', name: 'Netherlands', dialCode: '+31', flag: '🇳🇱', placeholder: '6 12345678', length: 9 },
  { code: 'CH', name: 'Switzerland', dialCode: '+41', flag: '🇨🇭', placeholder: '78 123 45 67', length: 9 },
  { code: 'SE', name: 'Sweden', dialCode: '+46', flag: '🇸🇪', placeholder: '70 123 45 67', length: 9 },
  { code: 'NO', name: 'Norway', dialCode: '+47', flag: '🇳🇴', placeholder: '412 34 567', length: 8 },
  { code: 'DK', name: 'Denmark', dialCode: '+45', flag: '🇩🇰', placeholder: '20 12 34 56', length: 8 },
  { code: 'IE', name: 'Ireland', dialCode: '+353', flag: '🇮🇪', placeholder: '85 123 4567', length: 9 },
  { code: 'BR', name: 'Brazil', dialCode: '+55', flag: '🇧🇷', placeholder: '11 91234 5678', length: 11 }
];

export function ProjectModal({ isOpen, onClose }: ProjectModalProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(COUNTRY_CODES[0]); // Default India +91
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'web-development',
    budgetRange: '$5k - $10k',
    details: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Restrict strictly to numeric digits only
    const digitsOnly = e.target.value.replace(/\D/g, '');
    // Limit length strictly to country max length
    const trimmed = digitsOnly.slice(0, selectedCountry.length);
    setFormData({ ...formData, phone: trimmed });
    if (errors.phone) setErrors({ ...errors, phone: '' });
  };

  const handleNext = () => {
    if (step === 1) {
      if (!formData.name.trim()) {
        setErrors({ name: 'Please enter your full name' });
        return;
      }
      if (!formData.email.trim() || !formData.email.includes('@')) {
        setErrors({ email: 'Please enter a valid email address' });
        return;
      }
      setErrors({});
    }

    if (step === 2) {
      if (!formData.phone.trim()) {
        setErrors({ phone: 'Please enter your phone / WhatsApp number' });
        return;
      }
      if (formData.phone.length < selectedCountry.length) {
        setErrors({
          phone: `Please enter a valid ${selectedCountry.length}-digit phone number for ${selectedCountry.name}`,
        });
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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleNext();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-xl rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 shadow-2xl overflow-hidden"
      >
        {/* Accent Glow Overlay */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-[var(--accent)]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={resetForm}
          className="absolute top-5 right-5 p-2 rounded-full border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)] transition-colors"
          data-cursor="hover"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header & Step Dots */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2 text-xs font-semibold tracking-wider text-[var(--accent)] uppercase">
                <Sparkles className="w-3.5 h-3.5" /> Start a Project — Step {step} of 4
              </div>
              <h3 className="text-2xl font-bold font-display text-[var(--text-primary)]">
                {step === 1 && "What's your contact info?"}
                {step === 2 && 'Phone / WhatsApp Number'}
                {step === 3 && 'What type of project is this?'}
                {step === 4 && 'Project details & budget'}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mt-1">
                {step === 1 && 'Tell us who we will be collaborating with.'}
                {step === 2 && 'We will send a quick WhatsApp or phone response.'}
                {step === 3 && 'Select your core focus area so we align the right team.'}
                {step === 4 && 'Share your vision, budget, and desired timeline.'}
              </p>

              {/* Progress Dots */}
              <div className="flex gap-2 mt-4">
                {[1, 2, 3, 4].map((s) => (
                  <div
                    key={s}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      s === step
                        ? 'w-8 bg-[var(--accent)]'
                        : s < step
                        ? 'w-4 bg-[var(--accent)]/50'
                        : 'w-4 bg-[var(--border)]'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Step Body */}
            <div className="min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Step 1: Name & Email */}
                  {step === 1 && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1 uppercase tracking-wider">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Rohan Mehta"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: '' });
                          }}
                          onKeyDown={handleKeyDown}
                          className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                        />
                        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1 uppercase tracking-wider">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          placeholder="rohan@company.com"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: '' });
                          }}
                          onKeyDown={handleKeyDown}
                          className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                        />
                        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                      </div>
                    </div>
                  )}

                  {/* Step 2: Phone with Country Code Selector & Digit Limit */}
                  {step === 2 && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1 uppercase tracking-wider">
                          Phone / WhatsApp Number *
                        </label>
                        <div className="flex gap-2.5">
                          {/* Country Code Dropdown */}
                          <select
                            value={selectedCountry.code}
                            onChange={(e) => {
                              const found = COUNTRY_CODES.find((c) => c.code === e.target.value);
                              if (found) {
                                setSelectedCountry(found);
                                setFormData((prev) => ({
                                  ...prev,
                                  phone: prev.phone.slice(0, found.length),
                                }));
                              }
                            }}
                            className="px-3 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] font-semibold text-xs focus:outline-none focus:border-[var(--accent)] cursor-pointer shrink-0 max-w-[150px]"
                          >
                            {COUNTRY_CODES.map((item) => (
                              <option key={item.code} value={item.code}>
                                {item.flag} {item.dialCode} ({item.code})
                              </option>
                            ))}
                          </select>

                          {/* Numeric Only Input with Length Restriction & Dynamic Placeholder */}
                          <input
                            type="tel"
                            placeholder={selectedCountry.placeholder}
                            value={formData.phone}
                            maxLength={selectedCountry.length}
                            onChange={handlePhoneChange}
                            onKeyDown={handleKeyDown}
                            className="flex-1 px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] font-semibold focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] tracking-wider"
                          />
                        </div>

                        {/* Helper info & validation message */}
                        <div className="flex items-center justify-between mt-1.5 text-[11px] text-[var(--text-secondary)]">
                          <span>
                            {selectedCountry.flag} {selectedCountry.name} ({selectedCountry.dialCode}) — Exactly {selectedCountry.length} digits required
                          </span>
                          <span className="font-bold text-[var(--accent)]">
                            {formData.phone.length} / {selectedCountry.length}
                          </span>
                        </div>
                        {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                      </div>
                    </div>
                  )}

                  {/* Step 3: Project Type */}
                  {step === 3 && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { id: 'web-development', label: 'Web Dev', desc: 'Next.js, Apps & SaaS' },
                        { id: 'branding', label: 'Branding', desc: 'Logos, Identity & Specs' },
                        { id: 'ai-automation', label: 'AI Automation', desc: 'Bots, Workflows & LLMs' },
                      ].map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type.id })}
                          data-cursor="hover"
                          className={`p-4 rounded-xl border text-left transition-all ${
                            formData.projectType === type.id
                              ? 'border-[var(--accent)] bg-[var(--accent-glow)] text-[var(--text-primary)] ring-1 ring-[var(--accent)]'
                              : 'border-[var(--border)] bg-[var(--bg)] text-[var(--text-secondary)] hover:border-[var(--text-secondary)]'
                          }`}
                        >
                          <div className="font-semibold text-sm text-[var(--text-primary)] mb-1">
                            {type.label}
                          </div>
                          <div className="text-xs text-[var(--text-secondary)]">{type.desc}</div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Step 4: Budget & Details */}
                  {step === 4 && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1 uppercase tracking-wider">
                          Estimated Budget
                        </label>
                        <select
                          value={formData.budgetRange}
                          onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                          onKeyDown={handleKeyDown}
                          className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)]"
                        >
                          <option value="<$5k">&lt; $5,000</option>
                          <option value="$5k - $10k">$5,000 - $10,000</option>
                          <option value="$10k - $25k">$10,000 - $25,000</option>
                          <option value="$25k+">$25,000+</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1 uppercase tracking-wider">
                          Project Summary / Goals
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Briefly describe what you want to build..."
                          value={formData.details}
                          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
                              e.preventDefault();
                              handleNext();
                            }
                          }}
                          className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] resize-none"
                        />
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Modal Controls */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-[var(--border)]">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  data-cursor="hover"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              ) : (
                <div />
              )}

              <button
                type="button"
                onClick={handleNext}
                disabled={loading}
                data-cursor="hover"
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[var(--accent)] text-white text-sm font-semibold hover:opacity-90 shadow-lg shadow-[var(--accent-glow)] transition-all disabled:opacity-50"
              >
                {loading ? (
                  'Sending & Notifying...'
                ) : step === 4 ? (
                  <>
                    Submit Project Request <Send className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Next Step <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        ) : (
          /* Submission Success State */
          <div className="py-8 text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--accent-glow)] text-[var(--accent)] flex items-center justify-center border border-[var(--accent)]"
            >
              <CheckCircle2 className="w-8 h-8" />
            </motion.div>
            <h3 className="text-2xl font-bold text-[var(--text-primary)] font-display mb-2">
              Project Request Received &amp; Confirmed!
            </h3>
            <p className="text-sm text-[var(--text-secondary)] max-w-sm mx-auto mb-6">
              Thank you {formData.name}! Your request has been recorded and an email notification has been sent. Our team will reach out to <strong>{selectedCountry.dialCode} {formData.phone}</strong> shortly.
            </p>
            <button
              onClick={resetForm}
              data-cursor="hover"
              className="px-6 py-2.5 rounded-xl bg-[var(--accent)] text-white font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Close Window
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
