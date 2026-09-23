'use client';

import projectsData from '@/content/projects.json';
import { ProjectItem } from '@/types/content';
import { ArrowUpRight, Trophy, Terminal, ShieldCheck, TrendingUp, Zap, Building2, Sparkles, FileText, Monitor } from 'lucide-react';
import Link from 'next/link';

export function WorkSection() {
  const projects = projectsData as ProjectItem[];
  const featuredProject = projects[0]; // AuroraPay
  const otherProjects = projects.slice(1);

  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Section Title Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-black tracking-widest text-[#5b45ff] uppercase flex items-center gap-2 mb-1">
            <Trophy className="w-4 h-4 text-[#5b45ff]" /> CLIENT CASE STUDIES
          </span>
          <h2 className="text-4xl sm:text-6xl font-black font-display text-[var(--text-primary)] uppercase tracking-tight">
            FEATURED WORK<span className="text-[#5b45ff]">.</span>
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] font-medium max-w-md">
          A selection of recent digital platforms, branding overhauls, and AI workflows delivered for ambitious companies.
        </p>
      </div>

      {/* ========================================================================= */}
      {/* DARK TECH CASE STUDY & METRICS CONSOLE                                     */}
      {/* ========================================================================= */}
      <div className="card-popout rounded-3xl border border-white/10 bg-[#0B0C0E] text-white p-6 sm:p-10 shadow-2xl overflow-hidden font-sans">
        {/* Gradient Dotted Wave Background */}
        <div className="bg-dotted-gradient" />
        
        {/* Top Status Header Line */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10 text-xs font-mono font-bold tracking-wider text-gray-400">
          <div className="flex items-center gap-3">
            <span className="text-[#5b45ff] uppercase">← SELECTED WORK</span>
            <span className="text-gray-600">|</span>
            <span className="text-gray-300">INDEX 01</span>
            <span className="text-gray-600">|</span>
            <span className="text-white font-extrabold uppercase tracking-widest">AETHER / AURORA FINANCE</span>
          </div>
          <div className="flex items-center gap-2 text-[#5b45ff]">
            <span className="w-2 h-2 rounded-full bg-[#5b45ff] animate-pulse" />
            <span className="uppercase tracking-widest text-[11px]">SERIES A DEPLOYED • Q1 PRODUCTION</span>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-12">
          
          {/* Left Column (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="text-xs font-black tracking-widest text-[#5b45ff] uppercase font-mono">
              FINTECH PLATFORM &amp; ALGORITHMIC SETTLEMENT
            </div>

            <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display text-white leading-[1.05] tracking-tight">
              Aurora Finance: Algorithmic Yield Console &amp; WebGL Depth Engine
            </h3>

            <p className="text-sm sm:text-base text-gray-300 font-medium leading-relaxed max-w-2xl">
              How KodX architected a sub-40ms execution UI, GPU-accelerated liquidity surface, and unified brand identity resulting in +340% GMV expansion at Series A.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href={`/work/${featuredProject.slug}`}
                data-cursor="hover"
                className="px-6 py-3.5 rounded-xl bg-[#5b45ff] text-white font-black text-xs uppercase tracking-wider border border-black shadow-[3px_3px_0px_#000] hover:bg-[#4834e7] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all flex items-center gap-2"
              >
                <Monitor className="w-4 h-4 text-white" />
                <span>Launch Console Preview</span>
              </Link>

              <Link
                href={`/work/${featuredProject.slug}`}
                data-cursor="hover"
                className="px-6 py-3.5 rounded-xl bg-[#18181B] text-gray-200 font-black text-xs uppercase tracking-wider border border-white/10 hover:border-white/30 hover:text-white transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#5b45ff]" />
                <span>Read Architectural Blueprint</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Project Dossier Card */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl bg-[#141518] border border-white/10 p-5 sm:p-6 space-y-4 font-mono text-xs shadow-md">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="font-black text-gray-400 tracking-widest text-[11px] uppercase">PROJECT DOSSIER</span>
                <span className="px-2 py-0.5 rounded bg-white/10 text-white text-[10px] font-bold">SPRINT_6W</span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <span className="text-gray-400">Client Partner</span>
                  <span className="text-white font-bold text-right">Aurora Protocol (SF &amp; Zug)</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-gray-400">Scope &amp; Stack</span>
                  <span className="text-white font-bold text-right">Next.js 15, WebGL, Rust/WASM</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-gray-400">Deployment Phase</span>
                  <span className="text-white font-bold text-right">Mainnet Series A Flagship</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-gray-400">Studio Role</span>
                  <span className="text-white font-bold text-right">Full Engineering &amp; UX Arch</span>
                </div>
              </div>

              {/* Audit Badge */}
              <div className="pt-2">
                <div className="p-3 rounded-xl bg-[#090A0C] border border-white/10 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#5b45ff] shrink-0" />
                  <div>
                    <div className="text-[10px] uppercase font-bold text-gray-400">AUDIT SCORE</div>
                    <div className="text-xs font-black text-white font-display">100% PWA • 0 Drop Latency</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom 4 Metric Cards Grid with Glow Accent Lines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1 */}
          <div className="rounded-2xl bg-[#141518] border border-white/10 p-5 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between text-[11px] font-mono font-bold text-gray-400 mb-2">
                <span>VOLUME GROWTH</span>
                <TrendingUp className="w-4 h-4 text-[#5b45ff]" />
              </div>
              <div className="text-3xl sm:text-4xl font-black font-display text-white tracking-tight">
                +340%
              </div>
              <p className="text-[11px] text-gray-400 font-medium mt-1">
                Quarterly GMV Velocity post-launch
              </p>
            </div>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-[85%] bg-[#5b45ff]" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl bg-[#141518] border border-white/10 p-5 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between text-[11px] font-mono font-bold text-gray-400 mb-2">
                <span>DOM-BYPASS LATENCY</span>
                <Zap className="w-4 h-4 text-[#9d97f0]" />
              </div>
              <div className="text-3xl sm:text-4xl font-black font-display text-white tracking-tight">
                &lt;38ms
              </div>
              <p className="text-[11px] text-gray-400 font-medium mt-1">
                P99 Orderbook &amp; depth frame paint
              </p>
            </div>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-[95%] bg-[#9d97f0]" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl bg-[#141518] border border-white/10 p-5 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between text-[11px] font-mono font-bold text-gray-400 mb-2">
                <span>LIQUIDITY HANDLED</span>
                <Building2 className="w-4 h-4 text-[#5b45ff]" />
              </div>
              <div className="text-3xl sm:text-4xl font-black font-display text-white tracking-tight">
                $12M+
              </div>
              <p className="text-[11px] text-gray-400 font-medium mt-1">
                Cumulative volume settled natively
              </p>
            </div>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-[90%] bg-[#5b45ff]" />
            </div>
          </div>

          {/* Card 4 */}
          <div className="rounded-2xl bg-[#141518] border border-white/10 p-5 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between text-[11px] font-mono font-bold text-gray-400 mb-2">
                <span>RENDER INTEGRITY</span>
                <Sparkles className="w-4 h-4 text-[#5b45ff]" />
              </div>
              <div className="text-3xl sm:text-4xl font-black font-display text-white tracking-tight">
                100%
              </div>
              <p className="text-[11px] text-gray-400 font-medium mt-1">
                Zero dropped frames sustained @ 60fps
              </p>
            </div>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-full bg-[#5b45ff]" />
            </div>
          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* SECONDARY CLIENT CASE STUDIES GRID                                       */}
      {/* ========================================================================= */}
      <div className="space-y-6">
        <h3 className="text-xl sm:text-2xl font-black font-display text-[var(--text-primary)] uppercase tracking-wide">
          More Selected Projects<span className="text-[#5b45ff]">.</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              data-cursor="hover"
              className="card-popout group rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden shadow-md flex flex-col justify-between"
            >
              {/* Gradient Dotted Wave Background */}
              <div className="bg-dotted-gradient" />
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[var(--bg)]">
                {/* eslint-disable-next-html-extension */}
                <img
                  src={project.cover}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-xs font-bold text-white border border-white/20">
                    {project.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#5b45ff] text-xs font-black text-white border border-black">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span className="text-xs font-extrabold tracking-widest text-[#5b45ff] uppercase">
                    {project.client}
                  </span>
                  <div className="p-2 rounded-full border border-[var(--border)] bg-[var(--bg)] group-hover:bg-[#5b45ff] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <h4 className="text-2xl font-black font-display text-[var(--text-primary)] mb-3 group-hover:text-[#5b45ff] transition-colors">
                  {project.title}
                </h4>
                <p className="text-xs text-[var(--text-secondary)] font-medium leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Metric Strip */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-[var(--border)]">
                  {project.results.map((res, idx) => (
                    <div key={idx} className="flex items-baseline gap-2">
                      <span className="text-lg font-black font-display text-[#5b45ff]">
                        {res.metric}
                      </span>
                      <span className="text-[11px] text-[var(--text-secondary)] font-bold">
                        {res.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </section>
  );
}

