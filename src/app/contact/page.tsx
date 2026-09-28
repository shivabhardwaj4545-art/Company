'use client';

import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle, 
  CheckCircle2, 
  Clock, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building2
} from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Web Development',
    budget: '$1,000 - $5,000',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMsg('Please fill in your name, email, and phone number.');
      return;
    }

    setSubmitting(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          services: [formData.projectType],
          budget: formData.budget,
          message: formData.message || 'Direct inquiry from /contact page'
        })
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setErrorMsg('Something went wrong. Please try again or reach out on WhatsApp.');
      }
    } catch {
      setErrorMsg('Network error. Please try sending via WhatsApp directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Top Header Banner */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6a57fa]/10 text-[#6a57fa] border border-[#6a57fa]/30 text-xs font-black uppercase tracking-widest shadow-sm">
          <MessageCircle className="w-3.5 h-3.5 text-[#6a57fa]" />
          GET IN TOUCH • GUARANTEED &lt; 2 HOUR RESPONSE
        </div>

        <h1 className="text-4xl sm:text-6xl font-black font-display text-[var(--text-primary)] uppercase tracking-tight leading-tight">
          Let's Build Something Extraordinary Together.
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-secondary)] font-medium leading-relaxed">
          Have a web application, D2C brand, or AI automation project in mind? Complete the brief below or connect directly with our studio leads.
        </p>
      </div>

      {/* Main 2-Column Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* LEFT COLUMN: Direct Channels & Studio Dossier (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 space-y-6 shadow-lg">
            <h3 className="text-xl font-bold font-display text-[var(--text-primary)]">
              Direct Contact Channels
            </h3>

            <div className="space-y-4 text-sm font-medium">
              
              {/* Phone / WhatsApp */}
              <a
                href="https://wa.me/918445178177?text=Hi%20AiKodX!%20I%20have%20a%20project%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3.5 p-4 rounded-2xl bg-[var(--bg)] border border-[var(--border)] hover:border-[#25D366] transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-extrabold uppercase text-[var(--text-secondary)]">
                    Direct Phone / WhatsApp
                  </div>
                  <div className="text-base font-bold text-[var(--text-primary)]">
                    +91 8445178177
                  </div>
                  <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold mt-0.5 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Instant WhatsApp Available
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:ssharma636076@gmail.com"
                className="flex items-start gap-3.5 p-4 rounded-2xl bg-[var(--bg)] border border-[var(--border)] hover:border-[#6a57fa] transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#6a57fa]/10 text-[#6a57fa] flex items-center justify-center shrink-0 group-hover:bg-[#6a57fa] group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-extrabold uppercase text-[var(--text-secondary)]">
                    Official Studio Email
                  </div>
                  <div className="text-sm sm:text-base font-bold text-[var(--text-primary)] truncate">
                    ssharma636076@gmail.com
                  </div>
                  <div className="text-[11px] text-[var(--text-secondary)] font-medium mt-0.5">
                    Replies within 2 hours
                  </div>
                </div>
              </a>

              {/* Studio HQ Location */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[var(--bg)] border border-[var(--border)]">
                <div className="w-10 h-10 rounded-xl bg-[#6a57fa]/10 text-[#6a57fa] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-extrabold uppercase text-[var(--text-secondary)]">
                    Studio Headquarters
                  </div>
                  <div className="text-sm font-bold text-[var(--text-primary)]">
                    AiKodX Studio
                  </div>
                  <div className="text-xs text-[var(--text-secondary)] font-medium mt-0.5">
                    Dehradun, Uttarakhand, India
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* SLA Response Guarantee Box */}
          <div className="rounded-3xl border border-[#6a57fa]/30 bg-[#6a57fa]/5 p-6 space-y-3">
            <div className="flex items-center gap-2 text-[#6a57fa] font-black text-xs uppercase tracking-wider font-mono">
              <ShieldCheck className="w-4 h-4" />
              <span>Studio SLA Guarantee</span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] font-medium leading-relaxed">
              Every inquiry receives a tailored technical architecture proposal and estimate within 24 hours. No generic auto-replies.
            </p>
          </div>

        </div>

        {/* RIGHT COLUMN: Interactive Project Inquiry Form (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-10 shadow-xl space-y-6">
            
            <div>
              <h2 className="text-2xl sm:text-3xl font-black font-display text-[var(--text-primary)]">
                Project Inquiry Brief
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-medium mt-1">
                Tell us about your project requirements and expected timeline.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500 text-white mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-display text-[var(--text-primary)]">
                  Inquiry Received!
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[var(--text-primary)]">{formData.name}</strong>. Our lead engineer will review your project brief and reach out to <strong className="text-[#6a57fa]">{formData.email}</strong> within 2 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-xs font-bold text-[var(--text-primary)] hover:border-[#6a57fa] transition-colors"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {errorMsg && (
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs font-bold">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-xs font-bold text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:border-[#6a57fa] transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rahul@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-xs font-bold text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:border-[#6a57fa] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-xs font-bold text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:border-[#6a57fa] transition-colors"
                    />
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono">
                      Required Capability
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-xs font-bold text-[var(--text-primary)] focus:outline-none focus:border-[#6a57fa] transition-colors"
                    >
                      <option value="Web Development">Next.js Web Development</option>
                      <option value="Branding & Identity">Branding &amp; Visual Identity</option>
                      <option value="AI Automation">AI Agent &amp; Workflow Automation</option>
                      <option value="EzRestero Demo">EzRestero SaaS Demo &amp; Setup</option>
                      <option value="Full Custom Platform">Full-Stack Custom Platform</option>
                    </select>
                  </div>
                </div>

                {/* Budget Range */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono">
                    Estimated Budget Range
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['$1,000 - $3,000', '$3,000 - $7,000', '$7,000+'].map((range) => (
                      <button
                        key={range}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget: range })}
                        className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border ${
                          formData.budget === range
                            ? 'bg-[#6a57fa] text-white border-[#6a57fa] shadow-md'
                            : 'bg-[var(--bg)] text-[var(--text-secondary)] border-[var(--border)] hover:border-[#6a57fa]'
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message / Brief */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider font-mono">
                    Project Overview / Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your goals, features needed, or desired launch timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-xs font-bold text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:border-[#6a57fa] transition-colors"
                  />
                </div>

                {/* Submit CTA Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-xl bg-[#6a57fa] hover:bg-[#5844f7] disabled:opacity-50 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-[#6a57fa]/20 transition-all flex items-center justify-center gap-2 hover:scale-[1.01]"
                >
                  {submitting ? (
                    <span>DISPATCHING BRIEF...</span>
                  ) : (
                    <>
                      <span>SUBMIT PROJECT BRIEF</span>
                      <Send className="w-4 h-4" />
                    </>
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
