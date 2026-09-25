'use client';

import { useState } from 'react';
import { Sparkles, ChevronRight, Check, Rocket, CheckCircle2, TrendingUp, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenModal: (initialEmail?: string) => void;
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
        onOpenModal(email);
      }, 600);
    }
  };

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center pt-36 sm:pt-40 pb-24 px-4 sm:px-6 lg:px-12 overflow-visible border-b border-[var(--border)] bg-[var(--bg)]"
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
              INTELLIGENT DIGITAL AGENCY
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
                onClick={scrollToServices}
                data-cursor="hover"
                className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#6a57fa] hover:text-[#8777ff] transition-colors cursor-pointer"
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
          {/* RIGHT COLUMN: MULTI-LAYERED OVERLAPPING INTERACTIVE UI SHOWCASE           */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6 relative pt-8 lg:pt-0">
            {/* Background Ambient Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#6a57fa]/20 blur-3xl rounded-full pointer-events-none" />

            {/* BASE FOUNDERS PHOTO CONTAINER (NO OUTER FRAME BORDER) */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] w-full shadow-2xl bg-neutral-950 z-10 border border-black/10">
              {/* eslint-disable-next-html-extension */}
              <img
                src="/hero-founders.jpg"
                alt="aiKODX Studio Founders Collaborating on Project"
                className="w-full h-full object-cover block filter brightness-[0.97] contrast-[1.02]"
              />
              {/* Subtle Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
            </div>

            {/* ===================================================================== */}
            {/* OVERLAPPING FLOATING CARD 1: TOP PILL (Productivity Metric)            */}
            {/* ===================================================================== */}
            <div className="absolute -top-5 sm:-top-7 left-4 sm:left-10 z-30 transition-transform duration-300 hover:scale-105">
              <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-gradient-to-r from-[#6a57fa] via-[#7463fa] to-[#5844f7] text-white text-xs sm:text-sm font-extrabold shadow-xl shadow-[#6a57fa]/40 border border-white/30 backdrop-blur-md">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-3.5 h-3.5 text-white" />
                </div>
                <span>Your team's productivity is up by <strong className="text-amber-300 font-black">42%</strong> this week</span>
              </div>
            </div>

            {/* ===================================================================== */}
            {/* OVERLAPPING FLOATING CARD 2: TOP LEFT NOTIFICATION (ProjectPlus)      */}
            {/* ===================================================================== */}
            <div className="absolute top-6 sm:top-8 -left-3 sm:-left-10 z-30 max-w-[260px] sm:max-w-[310px] transition-all duration-300 hover:-translate-y-1">
              <div className="p-3.5 sm:p-4.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xl shadow-slate-900/20 backdrop-blur-xl">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#6a57fa] flex items-center justify-center text-white font-black text-sm shrink-0 shadow-md shadow-[#6a57fa]/30">
                    P
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-slate-900">ProjectPlus</span>
                    </div>
                    <p className="text-[11px] font-extrabold text-slate-800 leading-snug">
                      Project 'Website Redesign' is on track! 🎉
                    </p>
                    <p className="text-[10px] text-slate-500 font-medium">
                      All tasks are completed. Great work team! →
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ===================================================================== */}
            {/* OVERLAPPING FLOATING CARD 3: BOTTOM LEFT (Get Started Onboarding)     */}
            {/* ===================================================================== */}
            <div className="absolute -bottom-6 sm:-bottom-10 -left-4 sm:-left-12 z-30 max-w-[250px] sm:max-w-[300px] transition-all duration-300 hover:-translate-y-1.5">
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xl shadow-slate-900/25 space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#6a57fa]/10 flex items-center justify-center text-[#6a57fa]">
                    <Rocket className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-900 leading-none">Get started</h4>
                    <p className="text-[9px] text-slate-500 font-medium mt-0.5">
                      Complete these steps to set up your workspace.
                    </p>
                  </div>
                </div>

                {/* Checklist */}
                <div className="space-y-1.5 text-[10px] font-bold">
                  <div className="flex items-center gap-2 text-slate-400 line-through">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#6a57fa] shrink-0 fill-[#6a57fa]" />
                    <span>Create your project</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 line-through">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#6a57fa] shrink-0 fill-[#6a57fa]" />
                    <span>Invite your team</span>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-[#6a57fa]/10 text-[#6a57fa] border border-[#6a57fa]/20 font-extrabold">
                    <div className="w-3 h-3 rounded-full border border-[#6a57fa] shrink-0" />
                    <span>Add your first task</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenModal()}
                  className="w-full py-2 rounded-xl bg-[#6a57fa] text-white text-[10px] font-black uppercase tracking-wider flex items-center justify-center gap-1 hover:bg-[#5844f7] transition-all shadow-md shadow-[#6a57fa]/20"
                >
                  <span>Get started</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* ===================================================================== */}
            {/* OVERLAPPING FLOATING CARD 4: BOTTOM RIGHT (Welcome to ProjectPlus)    */}
            {/* ===================================================================== */}
            <div className="absolute -bottom-8 sm:-bottom-12 -right-3 sm:-right-8 z-30 max-w-[250px] sm:max-w-[290px] transition-all duration-300 hover:-translate-y-1.5">
              <div className="rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-2xl shadow-slate-900/30">
                {/* Purple Banner Header */}
                <div className="p-3.5 bg-gradient-to-r from-[#6a57fa] to-[#5844f7] text-white relative">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white font-black text-xs border border-white/30 shadow-md">
                      P
                    </div>
                    <div>
                      <div className="text-[9px] uppercase font-bold text-purple-200 tracking-wider">Welcome to</div>
                      <div className="text-xs font-black font-display text-white leading-tight">ProjectPlus</div>
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-3.5 space-y-2.5">
                  <p className="text-[10px] text-slate-600 font-medium leading-relaxed">
                    Let's turn your ideas into action. Manage projects, track progress and achieve more — together.
                  </p>
                  <a
                    href="#services"
                    onClick={scrollToServices}
                    data-cursor="hover"
                    className="w-full py-2 rounded-xl bg-[#6a57fa] text-white text-[10px] font-black uppercase tracking-wider flex items-center justify-center gap-1 hover:bg-[#5844f7] transition-all shadow-md shadow-[#6a57fa]/20 cursor-pointer"
                  >
                    <span>Take a tour →</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}


