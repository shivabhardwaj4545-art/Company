import projectsData from '@/content/projects.json';
import { ProjectItem } from '@/types/content';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Trophy, CheckCircle2 } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = projectsData as ProjectItem[];
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const projects = projectsData as ProjectItem[];
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Back Button */}
      <Link
        href="/#work"
        className="inline-flex items-center gap-2 text-xs font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Featured Work
      </Link>

      {/* Header Info */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-3 py-1 rounded-full bg-[var(--accent-glow)] text-[var(--accent)] font-semibold text-xs border border-[var(--accent)]/30">
            {project.category}
          </span>
          <span className="text-xs text-[var(--text-secondary)] font-medium">
            Client: <strong className="text-[var(--text-primary)]">{project.client}</strong> ({project.year})
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold font-display text-[var(--text-primary)] mb-4 leading-tight">
          {project.title}
        </h1>
        <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl leading-relaxed">
          {project.summary}
        </p>
      </div>

      {/* Cover Image */}
      <div className="relative rounded-3xl border border-[var(--border)] overflow-hidden bg-[var(--surface)] mb-16 shadow-2xl">
        {/* eslint-disable-next-html-extension */}
        <img
          src={project.cover}
          alt={project.title}
          className="w-full h-80 sm:h-[500px] object-cover"
        />
      </div>

      {/* Results Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)] mb-16 relative overflow-hidden">
        {project.results.map((res, idx) => (
          <div key={idx} className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold font-display text-[var(--accent)] mb-1">
              {res.metric}
            </div>
            <div className="text-xs uppercase tracking-wider font-semibold text-[var(--text-secondary)]">
              {res.label}
            </div>
          </div>
        ))}
      </div>

      {/* Narrative Section: Challenge & Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/50 space-y-4">
          <h3 className="text-xl font-bold font-display text-[var(--text-primary)] flex items-center gap-2">
            The Challenge
          </h3>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            {project.challenge}
          </p>
        </div>

        <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/50 space-y-4">
          <h3 className="text-xl font-bold font-display text-[var(--text-primary)] flex items-center gap-2">
            Our Solution
          </h3>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            {project.solution}
          </p>
        </div>
      </div>

      {/* Tech Stack & Live Link */}
      <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-3">
            Technologies & Tools Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-[var(--bg)] text-xs font-semibold text-[var(--text-primary)] border border-[var(--border)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent)] text-white text-xs font-bold shadow-lg shadow-[var(--accent-glow)] hover:opacity-95 transition-all shrink-0"
          >
            <span>Visit Live Project</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}
