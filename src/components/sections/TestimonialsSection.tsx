'use client';

import testimonialsData from '@/content/testimonials.json';
import { TestimonialItem } from '@/types/content';
import { MessageSquareQuote, CheckCircle2, MessageCircle, Share2, Globe } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = testimonialsData as TestimonialItem[];
  const marqueeTestimonials = [...testimonials, ...testimonials];

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'WhatsApp':
        return <MessageCircle className="w-4 h-4 text-emerald-400" />;
      case 'Instagram':
        return <Share2 className="w-4 h-4 text-pink-400" />;
      case 'LinkedIn':
        return <Globe className="w-4 h-4 text-blue-400" />;
      case 'Twitter':
        return <Share2 className="w-4 h-4 text-sky-400" />;
      default:
        return <MessageCircle className="w-4 h-4 text-[var(--accent)]" />;
    }
  };

  return (
    <section className="py-24 border-t border-[var(--border)] overflow-hidden bg-noise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-black tracking-widest text-[#5b45ff] uppercase flex items-center gap-2 mb-1">
              <MessageSquareQuote className="w-4 h-4 text-[#5b45ff]" /> SOCIAL PROOF &amp; RECEIPTS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[var(--text-primary)]">
              Straight From the DMs<span className="text-[var(--accent)]">.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-md">
            Unfiltered feedback from founders, product leads, and executives we have collaborated with. Hover to pause.
          </p>
        </div>
      </div>

      {/* Auto-Scrolling Infinite Review Track (No Scrollbar) */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right Gradient Fades */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[var(--bg)] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[var(--bg)] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex gap-6 no-scrollbar py-4 px-4 select-none">
          {marqueeTestimonials.map((t, idx) => (
            <div
              key={`${t.id}-${idx}`}
              data-cursor="hover"
              className="card-popout w-[340px] sm:w-[380px] shrink-0 p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] flex flex-col justify-between overflow-hidden"
            >
              {/* Gradient Dotted Wave Background */}
              <div className="bg-dotted-gradient" />
              <div>
                {/* Header: Platform & Verified Badge */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-[var(--border)]">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-[var(--bg)] border border-[var(--border)]">
                      {getPlatformIcon(t.platform)}
                    </div>
                    <span className="text-xs font-semibold text-[var(--text-secondary)]">
                      {t.platform} DM
                    </span>
                  </div>
                  {t.verified && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-bold border border-emerald-500/20">
                      <CheckCircle2 className="w-3 h-3" /> Verified Client
                    </span>
                  )}
                </div>

                {/* Message Quote */}
                <p className="text-sm text-[var(--text-primary)] leading-relaxed italic mb-6">
                  "{t.message}"
                </p>
              </div>

              <div>
                {/* Metric Highlight Tag if present */}
                {t.metricHighlight && (
                  <div className="inline-block mb-4 px-3 py-1 rounded-lg bg-[var(--accent-glow)] text-[var(--accent)] font-bold text-xs border border-[var(--accent)]/30">
                    ⚡ {t.metricHighlight}
                  </div>
                )}

                {/* User Bio Footer */}
                <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)]">
                  {/* eslint-disable-next-html-extension */}
                  <img
                    src={t.avatar}
                    alt={t.clientName}
                    className="w-10 h-10 rounded-full object-cover border border-[var(--border)]"
                  />
                  <div>
                    <div className="font-bold text-sm text-[var(--text-primary)] font-display leading-none mb-1">
                      {t.clientName}
                    </div>
                    <div className="text-xs text-[var(--text-secondary)]">
                      {t.role}, {t.company} <span className="opacity-60">({t.clientHandle})</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
