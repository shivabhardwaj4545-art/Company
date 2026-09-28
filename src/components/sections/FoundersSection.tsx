'use client';

import foundersData from '@/content/founders.json';
import { FounderItem } from '@/types/content';
import { ArrowUpRight } from 'lucide-react';

const InstagramIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function FoundersSection() {
  const founders = foundersData as FounderItem[];

  return (
    <section id="founders" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[var(--border)]">
      {/* Section Header */}
      <div className="mb-12">
        <span className="text-xs sm:text-sm font-black tracking-widest text-[#ff4d00] uppercase block mb-1">
          THE HUMANS BEHIND THE JUGAAD
        </span>
        <h2 className="text-4xl sm:text-6xl font-black font-display text-[var(--text-primary)] uppercase tracking-tight leading-none mb-2">
          FOUNDERS
        </h2>
        <p className="text-base sm:text-lg text-[var(--text-secondary)] font-bold">
          Two people. Four eye bags. Infinite jugaad.
        </p>
      </div>

      {/* Two-Column Founder Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {founders.map((founder) => (
          <div
            key={founder.id}
            className="rounded-[28px] border-2 border-black bg-white overflow-hidden shadow-[8px_8px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[12px_12px_0px_#000000] transition-all duration-300 flex flex-col"
          >
            {/* Top Portrait Block */}
            <div
              className="relative h-72 sm:h-96 w-full flex items-center justify-center overflow-hidden select-none border-b-2 border-black"
              style={{ backgroundColor: founder.bgColor || '#f5c518' }}
            >
              {/* Massive Center Watermark Initials */}
              <span
                className="text-8xl sm:text-[140px] font-black font-display tracking-tighter leading-none select-none pointer-events-none"
                style={{ color: founder.watermarkColor || 'rgba(0, 0, 0, 0.25)' }}
              >
                {founder.initials}
              </span>

              {/* Floating Pill Badge over image bottom-left */}
              <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 z-10 px-4 py-1.5 rounded-full bg-white border-2 border-black text-[10px] sm:text-[11px] font-black uppercase text-black tracking-wider shadow-[2px_2px_0px_#000000]">
                {founder.role}
              </div>
            </div>

            {/* Bottom White Container */}
            <div className="p-6 sm:p-8 bg-white space-y-5 flex-1 flex flex-col justify-between">
              <div>
                {/* Founder Name */}
                <h3 className="text-2xl sm:text-3xl font-black font-display text-black tracking-tight uppercase leading-none mb-4">
                  {founder.name}
                </h3>

                {/* Social Links Row */}
                <div className="flex items-center gap-2.5 mb-6">
                  {founder.socials.instagram && (
                    <a
                      href={founder.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border-2 border-black bg-white text-[11px] font-black uppercase text-black hover:bg-slate-100 shadow-[2px_2px_0px_#000000] transition-all"
                    >
                      <InstagramIcon className="w-3.5 h-3.5 text-black" />
                      <span>INSTAGRAM</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-black" />
                    </a>
                  )}
                  {founder.socials.linkedin && (
                    <a
                      href={founder.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border-2 border-black bg-white text-[11px] font-black uppercase text-black hover:bg-slate-100 shadow-[2px_2px_0px_#000000] transition-all"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5 text-black" />
                      <span>LINKEDIN</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-black" />
                    </a>
                  )}
                </div>

                {/* 100% Verified Facts Header */}
                <div className="pt-4 border-t border-slate-200">
                  <div className="text-[11px] font-black uppercase tracking-wider text-[#ff4d00] mb-3">
                    100% VERIFIED FACTS
                  </div>

                  {/* Bulleted Facts List */}
                  <div className="space-y-2.5">
                    {founder.verifiedFacts?.map((fact, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-black text-slate-900 uppercase tracking-tight leading-snug">
                        <span className="text-[#ff4d00] font-black text-sm shrink-0 mt-[-1px]">*</span>
                        <span>{fact}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
