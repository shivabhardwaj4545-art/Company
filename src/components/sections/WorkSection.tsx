'use client';

import projectsData from '@/content/projects.json';
import { ProjectItem } from '@/types/content';
import { Trophy, ArrowUpRight, ExternalLink, ArrowRight, Asterisk } from 'lucide-react';
import Link from 'next/link';

import { Work3DCarousel } from '@/components/ui/Work3DCarousel';

interface WorkSectionProps {
  onOpenModal?: () => void;
}

export function WorkSection({ onOpenModal }: WorkSectionProps) {
  const allProjects = (projectsData as ProjectItem[]).filter(
    (p) => !p.isYourBrandCard && p.slug !== 'your-brand-here'
  );

  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 scroll-mt-28">
      
      {/* Section Title Header */}
      <div className="space-y-3 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6a57fa]/10 text-[#6a57fa] border border-[#6a57fa]/30 text-xs font-black uppercase tracking-widest shadow-sm">
          <Trophy className="w-3.5 h-3.5 text-[#6a57fa]" />
          SELECTED WORK &amp; CASE STUDIES
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display text-[var(--text-primary)] uppercase tracking-tight leading-tight">
          BUILT BY OUR STUDIO
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] font-medium max-w-2xl mx-auto leading-relaxed">
          Explore our flagship client builds, custom SaaS platforms, and digital products engineered for high velocity and scale.
        </p>
      </div>

      {/* Stacked Cards Deck Container */}
      <div className="relative flex flex-col gap-10 sm:gap-14 pb-8">
        {allProjects.map((project, index) => {
          return (
            <div
              key={project.slug}
              style={{ top: `${75 + index * 16}px` }}
              className="sticky rounded-2xl sm:rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6 lg:p-7 shadow-[0_15px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.4)] transition-all duration-500 overflow-hidden group hover:border-[#6a57fa]/40"
            >
              {/* Background Ambient Radial Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#6a57fa]/5 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
                
                {/* LEFT COLUMN: Image & Visual Badge (5 Cols) */}
                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[16/10] w-full bg-slate-950 border border-slate-200/80 dark:border-white/10 shadow-md group-hover:shadow-xl transition-all duration-500">
                    {/* eslint-disable-next-html-extension */}
                    {project.cover ? (
                      <img
                        src={project.cover}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.97]"
                      />
                    ) : null}
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 flex-wrap z-10">
                      <span className="px-2.5 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-extrabold text-white border border-white/20 uppercase tracking-wider">
                        {project.category}
                      </span>
                      {project.slug === 'ezrestero' && (
                        <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-indigo-600 text-[10px] font-black text-white shadow-md border border-white/30 uppercase tracking-widest">
                          ★ FLAGSHIP
                        </span>
                      )}
                    </div>

                    {/* Bottom Client Tag */}
                    <div className="absolute bottom-3 left-3 z-10">
                      <span className="text-[10px] font-black uppercase tracking-widest text-amber-300 drop-shadow-md">
                        {project.client}
                      </span>
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN: Content & Details (7 Cols) */}
                <div className="lg:col-span-7 space-y-3.5">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-black tracking-widest text-[#6a57fa] uppercase font-mono">
                        {project.category}
                      </span>
                      <span className="text-[11px] text-[var(--text-secondary)] font-mono">• {project.year}</span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-xl sm:text-2xl font-black font-display text-[var(--text-primary)] leading-tight group-hover:text-[#6a57fa] transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Summary Description - Compact line clamp */}
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-medium leading-relaxed line-clamp-2">
                    {project.summary}
                  </p>

                  {/* Key Metrics Strip */}
                  <div className="pt-3 border-t border-[var(--border)] grid grid-cols-3 gap-2">
                    {project.results.map((res, idx) => (
                      <div key={idx} className="space-y-0.5">
                        <div className="text-sm sm:text-lg font-black font-display text-[#6a57fa]">
                          {res.metric}
                        </div>
                        <div className="text-[10px] sm:text-[11px] text-[var(--text-secondary)] font-bold truncate">
                          {res.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action Link / Buttons */}
                  <div className="pt-1 flex items-center gap-3 flex-wrap">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#6a57fa] hover:bg-[#5844f7] text-white font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all hover:scale-105"
                      >
                        <span>Visit Live Platform</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-black text-[#6a57fa] hover:text-[#5844f7] transition-colors cursor-pointer group/link"
                    >
                      <span>See full case study</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>

                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* SEE ALL WORKS CTA Button */}
      <div className="flex justify-center pt-2 pb-6">
        <Link
          href="/work"
          className="px-10 py-4 rounded-full bg-white border-2 border-slate-300 text-black text-sm sm:text-base font-black uppercase tracking-wider shadow-xl hover:bg-slate-50 hover:border-[#6a57fa] hover:text-[#6a57fa] hover:scale-105 transition-all flex items-center gap-2.5 group"
        >
          <span>See All Works</span>
          <ArrowUpRight className="w-5 h-5 text-[#6a57fa] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

      {/* Bottom Callout Banner */}
      <div className="flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 rounded-3xl border border-[var(--border)] bg-[var(--surface)] gap-6 shadow-md">
        <div className="space-y-1">
          <h4 className="text-lg sm:text-xl font-bold font-display text-[var(--text-primary)]">
            Ready to build your next custom web application or AI platform?
          </h4>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-medium">
            We turn complex business ideas into high-converting digital products.
          </p>
        </div>
        <button
          onClick={() => {
            if (onOpenModal) onOpenModal();
            else if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('open-project-modal'));
          }}
          className="px-8 py-3.5 rounded-xl bg-[#6a57fa] text-white hover:bg-[#5844f7] text-xs font-black uppercase tracking-wider transition-all shrink-0 flex items-center gap-2 shadow-lg hover:scale-105 cursor-pointer"
        >
          <span>Start a Project</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

    </section>
  );
}

