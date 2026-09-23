'use client';

import { useState } from 'react';
import { Sparkles, ChevronRight, Check, CreditCard, Bell, Shield, ArrowUpRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenModal: () => void;
}

export function HeroSection({ onOpenModal }: HeroSectionProps) {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onOpenModal();
      }, 1000);
    }
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center pt-36 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-12 overflow-visible border-b border-[var(--border)] bg-[var(--bg)]"
    >


      {/* Ambient Glow Blobs in Purple/Indigo */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-[#6a57fa]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#8777ff]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: TITLE, SUBTITLE, EMAIL FORM, CONSENT                         */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Top Eyebrow Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6a57fa]/10 text-[#6a57fa] border border-[#6a57fa]/30 text-xs font-black uppercase tracking-widest shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#6a57fa]" />
              INTELLIGENT DIGITAL STUDIO
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-black font-display text-[var(--text-primary)] leading-[1.06] tracking-tight uppercase">
              BUILD THE <br className="hidden sm:inline" />FUTURE OF YOUR BUSINESS.
            </h1>

            {/* Paragraph Subtext */}
            <p className="text-base sm:text-lg text-[var(--text-secondary)] font-medium leading-relaxed max-w-xl">
              Turn ideas into digital experiences, products, and systems designed to grow with you.
            </p>

            {/* Product Tour Link */}
            <div className="pt-1">
              <a
                href="#services"
                data-cursor="hover"
                className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#6a57fa] hover:text-[#8777ff] transition-colors"
              >
                <span>TAKE A PRODUCT TOUR</span>
                <ChevronRight className="w-4 h-4 text-[#6a57fa]" />
              </a>
            </div>

            {/* Email Form input & button */}
            <form onSubmit={handleSubmit} className="pt-2 space-y-3 max-w-lg">
              <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="What's your business email?"
                  required
                  className="flex-1 px-4 py-3.5 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-xs font-bold text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:border-[#6a57fa] transition-colors shadow-sm"
                />
                <button
                  type="submit"
                  data-cursor="hover"
                  className="px-8 py-3.5 rounded-xl bg-[#6a57fa] text-white font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg hover:bg-[#5844f7] transition-all shrink-0 flex items-center justify-center gap-2"
                >
                  {submitted ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>SENT!</span>
                    </>
                  ) : (
                    <span>GET STARTED</span>
                  )}
                </button>
              </div>

              {/* Consent checkbox */}
              <label className="flex items-start gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 rounded border-[var(--border)] text-[#6a57fa] focus:ring-0 accent-[#6a57fa]"
                />
                <span className="text-[11px] text-[var(--text-secondary)] font-medium leading-tight">
                  I consent to receiving project proposals and updates from AiKodX. I can unsubscribe any time.
                </span>
              </label>
            </form>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: UI SHOWCASE FRAME (FOUNDERS & PRODUCTIVITY OVERLAY)         */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6 relative pt-4 lg:pt-0 flex items-center justify-center">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-[#6a57fa]/20 blur-3xl rounded-full pointer-events-none" />

            {/* Clean Rounded Showcase Image with rounded-3xl border radius */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/20 hover:scale-[1.01] transition-transform duration-500">
              {/* eslint-disable-next-html-extension */}
              <img
                src="/hero-showcase.png"
                alt="aiKODX Studio Founders & Workspace Platform Showcase"
                className="w-full h-auto max-w-full object-cover block"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


