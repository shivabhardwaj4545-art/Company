'use client';

import { 
  Trophy, 
  ExternalLink, 
  Monitor, 
  ShieldCheck, 
  TrendingUp, 
  Zap, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';

export function FeaturedWorkSection() {
  return (
    <section id="featured-work" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Section Header */}
      <div className="space-y-2">
        <span className="text-xs font-black tracking-widest text-[#6a57fa] uppercase flex items-center gap-2">
          <Trophy className="w-4 h-4 text-[#6a57fa]" /> FLAGSHIP PLATFORM SPOTLIGHT
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-[var(--text-primary)] uppercase tracking-tight leading-none">
          OUR FEATURED WORK<span className="text-[#6a57fa]">.</span>
        </h2>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-medium max-w-xl">
          An in-depth showcase of our flagship AI hospitality platform built for scale.
        </p>
      </div>

      {/* Featured Showcase Card (Theme Adaptive: Light/Dark Responsive) */}
      <div className="card-popout relative rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-10 overflow-hidden shadow-xl space-y-8">
        
        {/* Decorative Ambient Gradient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6a57fa]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Main Details (7 Cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-[#6a57fa]/10 text-[#6a57fa] text-xs font-extrabold tracking-wider uppercase border border-[#6a57fa]/20 font-mono">
                AI-POWERED QR RESTAURANT PLATFORM
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-extrabold tracking-wider uppercase border border-emerald-500/20">
                LIVE IN PRODUCTION
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-[var(--text-primary)] tracking-tight leading-tight">
              EzRestero — Scan. Order. Enjoy.
            </h3>

            <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-medium leading-relaxed max-w-2xl">
              The complete QR-based restaurant ordering &amp; management SaaS platform. Customers scan table QR codes, browse interactive menus, order, and track dishes live — all without downloading an app. Restauration teams receive instant WebSocket orders, AI upsell recommendations, and real-time kitchen analytics.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://ezrestro.online/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#6a57fa] hover:bg-[#5844f7] text-white text-xs font-black uppercase tracking-wider flex items-center gap-2.5 shadow-lg shadow-[#6a57fa]/20 transition-all hover:scale-105"
              >
                <Monitor className="w-4 h-4" />
                <span>Launch Live Preview</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <a
                href="https://ezrestro.online/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] hover:border-[#6a57fa] text-[var(--text-primary)] text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all"
              >
                <span>Visit ezrestro.online</span>
              </a>
            </div>
          </div>

          {/* Right Project Dossier Card (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6 space-y-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
                <span className="text-[11px] font-extrabold tracking-widest text-[var(--text-secondary)] uppercase font-mono">
                  PROJECT DOSSIER
                </span>
                <span className="px-2.5 py-0.5 rounded bg-[#6a57fa]/10 text-[10px] font-black tracking-widest text-[#6a57fa] uppercase font-mono border border-[#6a57fa]/20">
                  EZRESTRO_OS
                </span>
              </div>

              <div className="space-y-3 text-xs font-mono">
                <div className="flex justify-between items-center text-[var(--text-secondary)]">
                  <span>Client Partner</span>
                  <span className="font-bold text-[var(--text-primary)] font-sans text-right">EzRestero Hospitality Tech</span>
                </div>
                <div className="flex justify-between items-center text-[var(--text-secondary)]">
                  <span>Core Tech Stack</span>
                  <span className="font-bold text-[var(--text-primary)] font-sans text-right">Next.js 15, Socket.IO, Gemini AI</span>
                </div>
                <div className="flex justify-between items-center text-[var(--text-secondary)]">
                  <span>Deployment</span>
                  <span className="font-bold text-[var(--text-primary)] font-sans text-right">Zero-App Web Platform</span>
                </div>
                <div className="flex justify-between items-center text-[var(--text-secondary)]">
                  <span>Studio Role</span>
                  <span className="font-bold text-[var(--text-primary)] font-sans text-right">Full-Stack Architecture &amp; UI</span>
                </div>
              </div>

              {/* Audit Score Box */}
              <div className="pt-2">
                <div className="rounded-xl border border-[#6a57fa]/20 bg-[#6a57fa]/5 p-3.5 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#6a57fa] shrink-0" />
                  <div>
                    <div className="text-[10px] font-black tracking-widest text-[var(--text-secondary)] uppercase font-mono">
                      AUDIT &amp; SYNC SCORE
                    </div>
                    <div className="text-xs font-bold text-[var(--text-primary)]">
                      100% PWA • Sub-50ms WebSocket Sync
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 4 Performance Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10 pt-4 border-t border-[var(--border)]">
          {/* Card 1 */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4 space-y-2">
            <div className="flex items-center justify-between text-[var(--text-secondary)]">
              <span className="text-[10px] font-black tracking-widest uppercase font-mono">VOLUME GROWTH</span>
              <TrendingUp className="w-3.5 h-3.5 text-[#6a57fa]" />
            </div>
            <div className="text-2xl sm:text-3xl font-black font-display text-[#6a57fa]">+340%</div>
            <div className="text-[10px] text-[var(--text-secondary)] font-bold truncate">Quarterly Order GMV Velocity</div>
            <div className="w-full h-1 bg-[var(--border)] rounded-full overflow-hidden">
              <div className="h-full bg-[#6a57fa] w-[85%]" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4 space-y-2">
            <div className="flex items-center justify-between text-[var(--text-secondary)]">
              <span className="text-[10px] font-black tracking-widest uppercase font-mono">REALTIME LATENCY</span>
              <Zap className="w-3.5 h-3.5 text-[#6a57fa]" />
            </div>
            <div className="text-2xl sm:text-3xl font-black font-display text-[#6a57fa]">&lt;38ms</div>
            <div className="text-[10px] text-[var(--text-secondary)] font-bold truncate">P99 KDS Kitchen Display Paint</div>
            <div className="w-full h-1 bg-[var(--border)] rounded-full overflow-hidden">
              <div className="h-full bg-[#6a57fa] w-[95%]" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4 space-y-2">
            <div className="flex items-center justify-between text-[var(--text-secondary)]">
              <span className="text-[10px] font-black tracking-widest uppercase font-mono">ORDER ACCURACY</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-[#6a57fa]" />
            </div>
            <div className="text-2xl sm:text-3xl font-black font-display text-[#6a57fa]">99.8%</div>
            <div className="text-[10px] text-[var(--text-secondary)] font-bold truncate">Zero lost table tickets</div>
            <div className="w-full h-1 bg-[var(--border)] rounded-full overflow-hidden">
              <div className="h-full bg-[#6a57fa] w-[98%]" />
            </div>
          </div>

          {/* Card 4 */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4 space-y-2">
            <div className="flex items-center justify-between text-[var(--text-secondary)]">
              <span className="text-[10px] font-black tracking-widest uppercase font-mono">TABLE TURNAROUND</span>
              <Clock className="w-3.5 h-3.5 text-[#6a57fa]" />
            </div>
            <div className="text-2xl sm:text-3xl font-black font-display text-[#6a57fa]">30% Faster</div>
            <div className="text-[10px] text-[var(--text-secondary)] font-bold truncate">Direct customer-to-kitchen flow</div>
            <div className="w-full h-1 bg-[var(--border)] rounded-full overflow-hidden">
              <div className="h-full bg-[#6a57fa] w-[90%]" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
