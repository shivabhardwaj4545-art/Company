import projectsData from '@/content/projects.json';
import { ProjectItem } from '@/types/content';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Trophy, ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'All Projects & Client Case Studies | AiKodX',
  description: 'Explore our full portfolio of AI-powered SaaS platforms, luxury D2C e-commerce engines, and mobility networks.',
};

export default function AllProjectsPage() {
  const projects = projectsData as ProjectItem[];

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-bold text-[var(--text-secondary)] hover:text-[#6a57fa] transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>

      {/* Header Info */}
      <div className="space-y-3">
        <span className="text-xs font-black tracking-widest text-[#6a57fa] uppercase flex items-center gap-2">
          <Trophy className="w-4 h-4 text-[#6a57fa]" /> COMPLETE PORTFOLIO
        </span>
        <h1 className="text-4xl sm:text-6xl font-black font-display text-[var(--text-primary)] uppercase tracking-tight leading-tight">
          All Projects &amp; Case Studies<span className="text-[#6a57fa]">.</span>
        </h1>
        <p className="text-base sm:text-lg text-[var(--text-secondary)] font-medium max-w-2xl leading-relaxed">
          Explore our full suite of custom AI web applications, e-commerce engines, restaurant management systems, and mobility platforms engineered by AiKodX.
        </p>
      </div>

      {/* All Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="card-popout group rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden shadow-md flex flex-col justify-between"
          >
            {/* Image Container (Compact h-48 sm:h-56) */}
            <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-[var(--bg)]">
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
                <span className="px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-[11px] font-bold text-white border border-white/20">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Details (Compact Padding p-5 sm:p-6) */}
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between gap-3 mb-1.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[11px] font-extrabold tracking-widest text-[#6a57fa] uppercase">
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

                <h2 className="text-xl sm:text-2xl font-bold font-display text-[var(--text-primary)] mb-2 group-hover:text-[#6a57fa] transition-colors leading-snug">
                  {project.title}
                </h2>
                <p className="text-xs text-[var(--text-secondary)] font-medium leading-relaxed line-clamp-3">
                  {project.summary}
                </p>
              </div>

              {/* Metric Strip */}
              <div className="pt-3 border-t border-[var(--border)] space-y-3">
                <div className="grid grid-cols-3 gap-2">
                  {project.results.map((res, idx) => (
                    <div key={idx} className="text-center sm:text-left">
                      <div className="text-sm font-black font-display text-[#6a57fa]">
                        {res.metric}
                      </div>
                      <div className="text-[10px] text-[var(--text-secondary)] font-bold truncate">
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
                    className="w-full py-2.5 px-4 rounded-xl bg-[#6a57fa] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm hover:bg-[#5844f7] transition-all"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* YOUR BRAND HERE Card */}
        <div className="card-popout rounded-2xl border-2 border-dashed border-[#6a57fa]/40 bg-[var(--surface)] p-6 sm:p-8 flex flex-col items-center justify-center text-center space-y-4 min-h-[340px] group hover:border-[#6a57fa] transition-all">
          <div className="w-14 h-14 rounded-full bg-[#6a57fa]/10 flex items-center justify-center text-[#6a57fa] text-2xl font-black shadow-md shadow-[#6a57fa]/20 group-hover:scale-110 transition-transform">
            ✱
          </div>
          <div className="space-y-1.5">
            <h3 className="text-xl sm:text-3xl font-black font-display text-[var(--text-primary)] tracking-tight">
              YOUR BRAND HERE
            </h3>
            <p className="text-xs text-[var(--text-secondary)] font-medium max-w-xs mx-auto leading-relaxed">
              This spot isn't taken yet. Move fast to build your Next.js application, D2C store, or AI system.
            </p>
          </div>
          <Link
            href="/#contact"
            className="px-6 py-3 rounded-lg bg-[#6a57fa] text-white text-xs font-extrabold uppercase tracking-widest shadow-md hover:scale-105 hover:bg-[#5844f7] transition-all"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </div>
  );
}
