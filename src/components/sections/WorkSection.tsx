'use client';

import projectsData from '@/content/projects.json';
import { ProjectItem } from '@/types/content';
import { Trophy, ArrowUpRight } from 'lucide-react';
import { Work3DCarousel } from '@/components/ui/Work3DCarousel';

interface WorkSectionProps {
  onOpenModal?: () => void;
}

export function WorkSection({ onOpenModal }: WorkSectionProps) {
  const allProjects = projectsData as ProjectItem[];

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

      {/* 3D Coverflow Work Carousel (Matching Screenshot 2) */}
      <Work3DCarousel projects={allProjects} onOpenModal={onOpenModal} />

      {/* Bottom Callout Banner */}
      <div className="flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 rounded-3xl border border-[var(--border)] bg-[var(--surface)] gap-6 shadow-md mt-12">
        <div className="space-y-1">
          <h4 className="text-lg sm:text-xl font-bold font-display text-[var(--text-primary)]">
            Ready to build your next custom web application or AI platform?
          </h4>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-medium">
            We turn complex business ideas into high-converting digital products.
          </p>
        </div>
        <button
          onClick={onOpenModal}
          className="px-8 py-3.5 rounded-xl bg-[#6a57fa] text-white hover:bg-[#5844f7] text-xs font-black uppercase tracking-wider transition-all shrink-0 flex items-center gap-2 shadow-lg hover:scale-105"
        >
          <span>Start a Project</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

    </section>
  );
}
