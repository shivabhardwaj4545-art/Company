import projectsData from '@/content/projects.json';
import { ProjectItem } from '@/types/content';
import Link from 'next/link';
import { ArrowLeft, Trophy, Sparkles, Layers, ShieldCheck, Palette, ExternalLink, Asterisk } from 'lucide-react';
import { Work3DCarousel } from '@/components/ui/Work3DCarousel';
import { Logo } from '@/components/ui/Logo';

export const metadata = {
  title: 'All Projects & Your Brand Showcase | AiKodX',
  description: 'Explore our full portfolio of AI-powered SaaS platforms, luxury D2C e-commerce engines, and brand identity systems.',
};

export default function AllProjectsPage() {
  const projects = projectsData as ProjectItem[];

  return (
    <>
      <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">


        {/* Header Info */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6a57fa]/10 text-[#6a57fa] border border-[#6a57fa]/30 text-xs font-black uppercase tracking-widest shadow-sm">
            <Trophy className="w-4 h-4 text-[#6a57fa]" /> ALL PROJECTS &amp; BRAND SHOWCASE
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display text-[var(--text-primary)] uppercase tracking-tight leading-tight">
            Our Works &amp; Brand Systems
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] font-medium max-w-2xl leading-relaxed">
            Discover our complete lineup of custom web applications, AI platforms, luxury e-commerce engines, and signature brand identity frameworks engineered by AiKodX.
          </p>
        </div>

        {/* 3D Coverflow Interactive Carousel Showcase */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-black font-display text-[var(--text-primary)] uppercase tracking-tight flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#6a57fa]" /> Interactive 3D Showcase
            </h2>
            <span className="text-xs font-bold text-[var(--text-secondary)]">Click card or arrows to rotate</span>
          </div>
          <div className="py-6 rounded-3xl bg-[var(--surface-secondary)]/60 border border-[var(--border)] p-4 sm:p-8">
            <Work3DCarousel projects={projects} showSeeAll={false} />
          </div>
        </div>

        {/* Brand & Identity System Showcase Banner */}
        <div className="p-8 sm:p-12 rounded-3xl border border-[#6a57fa]/30 bg-gradient-to-br from-[#6a57fa]/10 via-[var(--surface)] to-[var(--surface-secondary)] relative overflow-hidden space-y-8 shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#6a57fa]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6a57fa]/20 text-[#6a57fa] text-xs font-black uppercase tracking-widest">
                <Palette className="w-3.5 h-3.5" /> BRAND ENGINE &amp; DESIGN SYSTEM
              </div>
              <h2 className="text-3xl sm:text-5xl font-black font-display text-[var(--text-primary)] uppercase tracking-tight leading-tight">
                Your Brand. Built for Scale &amp; Impact.
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] font-medium leading-relaxed">
                At AiKodX, we don't just build code — we craft unforgettable brand identities. From responsive vector logo suites and custom color tokens to scalable Tailwind UI components and brand guidelines, we elevate your studio's visual footprint.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)] space-y-1">
                  <div className="text-xl font-black text-[#6a57fa]">Vector Logos</div>
                  <div className="text-xs text-[var(--text-secondary)] font-medium">SVG, PNG &amp; Icon Suites</div>
                </div>
                <div className="p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)] space-y-1">
                  <div className="text-xl font-black text-[#6a57fa]">Design Tokens</div>
                  <div className="text-xs text-[var(--text-secondary)] font-medium">Tailwind CSS &amp; Color Specs</div>
                </div>
                <div className="p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)] space-y-1">
                  <div className="text-xl font-black text-[#6a57fa]">Multi-Theme</div>
                  <div className="text-xs text-[var(--text-secondary)] font-medium">Dark &amp; Light Mode Specs</div>
                </div>
              </div>
            </div>

            {/* Brand Logo & Visual Card */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-2xl bg-slate-950 border border-white/10 text-white space-y-6 shadow-2xl relative">
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/10 text-[10px] font-mono uppercase text-white/70">
                Brand Mark v2.0
              </div>
              <Logo theme="dark" size="lg" />
              <div className="text-center space-y-1">
                <div className="text-lg font-black font-display tracking-wide">AiKodX Innovation Studio</div>
                <div className="text-xs text-slate-400 font-mono">Premium AI &amp; Web Software Agency</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}


