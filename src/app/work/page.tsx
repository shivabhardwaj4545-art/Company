import projectsData from '@/content/projects.json';
import { ProjectItem } from '@/types/content';
import Link from 'next/link';
import { ArrowLeft, Trophy } from 'lucide-react';
import { Work3DCarousel } from '@/components/ui/Work3DCarousel';

export const metadata = {
  title: 'All Projects & Client Case Studies | AiKodX',
  description: 'Explore our full portfolio of AI-powered SaaS platforms, luxury D2C e-commerce engines, and mobility networks.',
};

export default function AllProjectsPage() {
  const projects = projectsData as ProjectItem[];

  return (
    <>
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
            All Projects &amp; Case Studies
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] font-medium max-w-2xl leading-relaxed">
            Explore our full suite of custom AI web applications, e-commerce engines, restaurant management systems, and mobility platforms engineered by AiKodX.
          </p>
        </div>

        {/* 3D Coverflow Interactive Carousel Showcase */}
        <div className="py-6 rounded-3xl bg-[var(--surface-secondary)]/60 border border-[var(--border)] p-4 sm:p-8">
          <Work3DCarousel projects={projects} />
        </div>
      </div>
    </>
  );
}

