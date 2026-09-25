'use client';

import projectsData from '@/content/projects.json';
import { ProjectItem } from '@/types/content';
import { 
  ArrowUpRight, 
  Trophy, 
  ExternalLink, 
  Monitor, 
  FileText, 
  ShieldCheck, 
  TrendingUp, 
  Zap, 
  Building2, 
  Sparkles 
} from 'lucide-react';
import Link from 'next/link';

interface WorkSectionProps {
  onOpenModal?: () => void;
}

export function WorkSection({ onOpenModal }: WorkSectionProps) {
  const allProjects = projectsData as ProjectItem[];
  // Display max 4 projects on homepage for compact layout
  const featuredProjects = allProjects.slice(0, 4);

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      
      {/* Section Title Header */}
      <div className="space-y-2">
        <span className="text-xs font-black tracking-widest text-[#6a57fa] uppercase flex items-center gap-2">
          <Trophy className="w-4 h-4 text-[#6a57fa]" /> SELECTED WORK
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-[var(--text-primary)] uppercase tracking-tight leading-none">
          BUILT BY US<span className="text-[#6a57fa]">.</span>
        </h2>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-medium max-w-xl">
          A few of the client brands and applications we design, build, and automate for.
        </p>
      </div>

      {/* Projects Grid (Compact 4 Projects) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {featuredProjects.map((project) => (
          <div
            key={project.slug}
            className="card-popout group rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden shadow-md flex flex-col justify-between"
          >
            {/* Image Container (Compact h-40 sm:h-48) */}
            <div className="relative h-40 sm:h-48 w-full overflow-hidden bg-[var(--bg)]">
              {/* eslint-disable-next-html-extension */}
              <img
                src={project.cover}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
                {project.slug === 'ezrestero' && (
                  <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 via-purple-600 to-indigo-600 text-[10px] font-black text-white shadow-md border border-white/20 flex items-center gap-1 uppercase tracking-wider">
                    ★ FEATURED WORK
                  </span>
                )}
                <span className="px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-bold text-white border border-white/20">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Details (Compact Padding p-4 sm:p-5) */}
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between gap-3 mb-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-extrabold tracking-widest text-[#6a57fa] uppercase">
                      {project.client}
                    </span>
                    {project.slug === 'ezrestero' && (
                      <span className="text-[9px] font-black text-amber-500 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/30 uppercase">
                        OUR MAIN WEBSITE
                      </span>
                    )}
                  </div>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-full border border-[var(--border)] bg-[var(--bg)] group-hover:bg-[#6a57fa] group-hover:text-white transition-colors"
                      title="Visit Website"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-display text-[var(--text-primary)] mb-1.5 group-hover:text-[#6a57fa] transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] font-medium leading-relaxed line-clamp-2">
                  {project.summary}
                </p>
              </div>

              {/* Metric Strip */}
              <div className="pt-3 border-t border-[var(--border)] space-y-3">
                <div className="grid grid-cols-3 gap-2">
                  {project.results.map((res, idx) => (
                    <div key={idx} className="text-center sm:text-left">
                      <div className="text-xs sm:text-sm font-black font-display text-[#6a57fa]">
                        {res.metric}
                      </div>
                      <div className="text-[9px] text-[var(--text-secondary)] font-bold truncate">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 rounded-lg bg-[#6a57fa] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm hover:bg-[#5844f7] transition-all"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom See All Projects Action Strip (Navigates to /work page) */}
      <div className="flex flex-col sm:flex-row items-center justify-between p-5 sm:p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] gap-4 shadow-sm">
        <div>
          <h4 className="text-base font-bold font-display text-[var(--text-primary)]">
            Looking for all client case studies &amp; SaaS platforms?
          </h4>
          <p className="text-xs text-[var(--text-secondary)] font-medium">
            Explore our complete portfolio of AI-driven web applications, e-commerce engines, and mobility platforms.
          </p>
        </div>
        <Link
          href="/work"
          className="px-6 py-3 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-[var(--text-primary)] hover:border-[#6a57fa] hover:text-[#6a57fa] text-xs font-bold uppercase tracking-wider transition-all shrink-0 flex items-center gap-2 font-display"
        >
          <span>See All Projects</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

    </section>
  );
}
