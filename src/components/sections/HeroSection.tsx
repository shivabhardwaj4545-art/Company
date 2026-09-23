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
      className="relative min-h-screen flex flex-col justify-center pt-36 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-12 overflow-visible bg-noise border-b border-[var(--border)] bg-[var(--bg)]"
    >
      {/* Background Dotted Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none bg-dotted-theme opacity-60" />

      {/* Ambient Glow Blobs in Purple/Indigo */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-[#5b45ff]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#9d97f0]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: TITLE, SUBTITLE, EMAIL FORM, CONSENT                         */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Top Eyebrow Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5b45ff]/10 text-[#5b45ff] border border-[#5b45ff]/30 text-xs font-black uppercase tracking-widest shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#5b45ff]" />
              INTELLIGENT DIGITAL STUDIO
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-black font-display text-[var(--text-primary)] leading-[1.04] tracking-tight uppercase">
              THE <span className="text-[#5b45ff]">INTELLIGENT</span> FINANCIAL &amp; WEB PLATFORM FOR <span className="text-[#5b45ff]">GLOBAL</span> BUSINESSES
            </h1>

            {/* Paragraph Subtext */}
            <p className="text-base sm:text-lg text-[var(--text-secondary)] font-medium leading-relaxed max-w-xl">
              Manage payments, custom SaaS platforms, brand assets, and spend with AI-native digital infrastructure and high-converting web software.
            </p>

            {/* Product Tour Link */}
            <div className="pt-1">
              <a
                href="#services"
                data-cursor="hover"
                className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#5b45ff] hover:text-[#9d97f0] transition-colors"
              >
                <span>TAKE A PRODUCT TOUR</span>
                <ChevronRight className="w-4 h-4 text-[#5b45ff]" />
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
                  className="flex-1 px-4 py-3.5 rounded-xl bg-[var(--surface)] border-2 border-black text-xs font-bold text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:border-[#5b45ff] transition-colors shadow-sm"
                />
                <button
                  type="submit"
                  data-cursor="hover"
                  className="px-8 py-3.5 rounded-xl bg-[#5b45ff] text-white font-black text-xs uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_#000] hover:bg-[#4834e7] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-0 active:translate-y-0 transition-all shrink-0 flex items-center justify-center gap-2"
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
                  className="mt-0.5 rounded border-black text-[#5b45ff] focus:ring-0 accent-[#5b45ff]"
                />
                <span className="text-[11px] text-[var(--text-secondary)] font-medium leading-tight">
                  I consent to receiving project proposals and updates from KodX. I can unsubscribe any time.
                </span>
              </label>
            </form>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: UI SHOWCASE FRAME                                           */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6 relative pt-4 lg:pt-0">
            
            {/* Main Device Container */}
            <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-6 shadow-xl overflow-hidden">
              <div className="absolute inset-0 pointer-events-none bg-dotted-theme opacity-40" />
              
              {/* Device Window Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border)]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#5b45ff]" />
                  <div className="w-3 h-3 rounded-full bg-[#9d97f0]" />
                  <div className="w-3 h-3 rounded-full bg-[#38BDF8]" />
                  <span className="ml-2 text-xs font-extrabold text-[var(--text-primary)] uppercase tracking-wider font-display">
                    CARD VIEW
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded-full bg-[#5b45ff]/10 text-[10px] font-bold text-[#5b45ff] border border-[#5b45ff]/30">
                    ● System Active
                  </span>
                </div>
              </div>

              {/* Dashboard Grid inside Device */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                
                {/* Physical Card Preview */}
                <div className="sm:col-span-5 p-4 rounded-xl bg-gradient-to-br from-[#1b173c] to-[#0c0a1f] border-2 border-black text-white flex flex-col justify-between h-44 shadow-md relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#5b45ff]/30 rounded-full blur-2xl group-hover:scale-125 transition-transform" />
                  
                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-xs font-black font-display tracking-widest text-[#9d97f0]">
                      KODX PHYSICAL
                    </span>
                    <CreditCard className="w-5 h-5 text-[#9d97f0]" />
                  </div>

                  <div className="space-y-1 relative z-10">
                    <div className="text-[10px] text-gray-300 font-mono tracking-widest">
                      •••• •••• •••• 8842
                    </div>
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-[9px] uppercase text-gray-400 font-bold">Studio Partner</div>
                        <div className="text-xs font-bold text-white">Alex Barker</div>
                      </div>
                      <span className="text-xs font-extrabold italic text-[#9d97f0]">VISA</span>
                    </div>
                  </div>
                </div>

                {/* Card Usage Stats */}
                <div className="sm:col-span-7 p-4 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border)] flex flex-col justify-between">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-[var(--text-primary)]">Current Month Spend</span>
                    <span className="text-xs font-extrabold text-[#5b45ff] font-display">$727.50 AUD</span>
                  </div>

                  <div className="space-y-2 text-[11px]">
                    <div className="flex justify-between text-[var(--text-secondary)] font-medium">
                      <span>Monthly</span>
                      <span className="text-[var(--text-primary)] font-bold">$27.50 AUD / $2,000.00</span>
                      <span className="text-[#5b45ff] font-bold">38.1%</span>
                    </div>
                    <div className="w-full bg-[var(--bg)] h-2 rounded-full overflow-hidden border border-black">
                      <div className="bg-[#5b45ff] h-full w-[38.1%]" />
                    </div>

                    <div className="flex justify-between text-[var(--text-secondary)] font-medium pt-1">
                      <span>Weekly</span>
                      <span className="text-[var(--text-primary)] font-bold">$307.50 AUD / $500</span>
                      <span className="text-[#9d97f0] font-bold">61.5%</span>
                    </div>
                    <div className="w-full bg-[var(--bg)] h-2 rounded-full overflow-hidden border border-black">
                      <div className="bg-[#9d97f0] h-full w-[61.5%]" />
                    </div>
                  </div>
                </div>

              </div>

              {/* Transactions Mini Table */}
              <div className="mt-4 p-3 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border)] space-y-2">
                <div className="text-[10px] font-extrabold text-[var(--text-secondary)] uppercase tracking-wider">
                  RECENT TRANSACTIONS
                </div>
                <div className="flex items-center justify-between text-xs py-1 border-b border-[var(--border)]">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-[#5b45ff]/20 text-[#5b45ff] flex items-center justify-center font-bold text-[10px]">
                      S
                    </div>
                    <span className="font-bold text-[var(--text-primary)]">Slack Technologies</span>
                  </div>
                  <span className="font-bold text-[var(--text-primary)] font-display">-$1,400.00 AUD</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-[#5b45ff]/20 text-[#5b45ff] flex items-center justify-center font-bold text-[10px]">
                      J
                    </div>
                    <span className="font-bold text-[var(--text-primary)]">Jamba Cafe Cairns</span>
                  </div>
                  <span className="font-bold text-[var(--text-primary)] font-display">-$32.50 AUD</span>
                </div>
              </div>

            </div>

            {/* Floating Cookie / Notification Toast Overlay */}
            <div className="absolute bottom-[-15px] right-[-10px] sm:right-[-20px] max-w-xs p-4 rounded-2xl bg-[#14152b] border-2 border-black shadow-hard-lg z-20 space-y-2 text-white animate-bounce-subtle">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#5b45ff] text-white shrink-0 mt-0.5">
                  <Bell className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-black font-display tracking-wide text-white uppercase">
                    EXPENSE APPROVED
                  </h4>
                  <p className="text-[10px] text-gray-300 font-medium leading-normal mt-0.5">
                    Cardholders have submitted new expenses for your real-time review.
                  </p>
                </div>
              </div>
              <div className="pt-1 flex justify-end">
                <span className="px-3 py-1 rounded-lg bg-[#5b45ff] text-white text-[10px] font-black uppercase border border-black shadow-[2px_2px_0px_#000]">
                  APPROVED (2M AGO)
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}


