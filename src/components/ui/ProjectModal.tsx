'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft, CheckCircle2, Sparkles, Send } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const COUNTRY_CODES = [
  { code: '+91', country: 'IN', flag: '🇮🇳', name: 'India', digits: 10 },
  { code: '+1', country: 'US', flag: '🇺🇸', name: 'United States', digits: 10 },
  { code: '+44', country: 'GB', flag: '🇬🇧', name: 'United Kingdom', digits: 11 },
  { code: '+971', country: 'AE', flag: '🇦🇪', name: 'UAE', digits: 9 },
  { code: '+1', country: 'CA', flag: '🇨🇦', name: 'Canada', digits: 10 },
  { code: '+61', country: 'AU', flag: '🇦🇺', name: 'Australia', digits: 9 },
  { code: '+65', country: 'SG', flag: '🇸🇬', name: 'Singapore', digits: 8 },
  { code: '+49', country: 'DE', flag: '🇩🇪', name: 'Germany', digits: 11 },
];

export function ProjectModal({ isOpen, onClose }: ProjectModalProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0]); // Default India +91
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
    // Limit length strictly to country max digits
    const trimmed = digitsOnly.slice(0, selectedCountry.digits);
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
      if (formData.phone.length < selectedCountry.digits) {
        setErrors({
          phone: `Please enter a valid ${selectedCountry.digits}-digit phone number for ${selectedCountry.name}`,
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
      const fullPhone = `${selectedCountry.code} ${formData.phone}`;
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          countryCode: selectedCountry.code,
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
          <>
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
                            value={selectedCountry.code + '_' + selectedCountry.country}
                            onChange={(e) => {
                              const [code, country] = e.target.value.split('_');
                              const found = COUNTRY_CODES.find(
                                (c) => c.code === code && c.country === country
                              );
                              if (found) {
                                setSelectedCountry(found);
                                setFormData((prev) => ({
                                  ...prev,
                                  phone: prev.phone.slice(0, found.digits),
                                }));
                              }
                            }}
                            className="px-3 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] font-semibold text-xs focus:outline-none focus:border-[var(--accent)] cursor-pointer shrink-0"
                          >
                            {COUNTRY_CODES.map((item, idx) => (
                              <option key={idx} value={item.code + '_' + item.country}>
                                {item.flag} {item.code} ({item.country})
                              </option>
                            ))}
                          </select>

                          {/* Numeric Only Input with Length Restriction */}
                          <input
                            type="tel"
                            placeholder={`e.g. ${'9'.repeat(selectedCountry.digits)}`}
                            value={formData.phone}
                            maxLength={selectedCountry.digits}
                            onChange={handlePhoneChange}
                            className="flex-1 px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] font-semibold focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] tracking-wider"
                          />
                        </div>

                        {/* Helper info & validation message */}
                        <div className="flex items-center justify-between mt-1.5 text-[11px] text-[var(--text-secondary)]">
                          <span>
                            {selectedCountry.flag} {selectedCountry.name} ({selectedCountry.code}) — Exactly {selectedCountry.digits} digits required
                          </span>
                          <span className="font-bold text-[var(--accent)]">
                            {formData.phone.length} / {selectedCountry.digits}
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
          </>
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
              Thank you {formData.name}! Your request has been recorded and an email notification has been sent. Our team will reach out to <strong>{selectedCountry.code} {formData.phone}</strong> shortly.
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
