import servicesData from '@/content/services.json';
import { ServiceItem } from '@/types/content';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ArrowRight, Zap } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const services = servicesData as ServiceItem[];
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const services = servicesData as ServiceItem[];
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Back Button */}
      <Link
        href="/#services"
        className="inline-flex items-center gap-2 text-xs font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Capabilities
      </Link>

      {/* Header Info */}
      <div className="mb-12">
        <span className="text-3xl font-extrabold font-display text-[var(--accent)] tracking-tight block mb-2">
          SERVICE {service.number}
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold font-display text-[var(--text-primary)] mb-4">
          {service.title}
        </h1>
        <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl leading-relaxed">
          {service.tagline}
        </p>
      </div>

      {/* Detailed Description Box */}
      <div className="p-8 sm:p-12 rounded-3xl border border-[var(--border)] bg-[var(--surface)] mb-16 accent-glow-hover relative overflow-hidden">
        <h2 className="text-2xl font-bold font-display text-[var(--text-primary)] mb-4">
          Detailed Capabilities
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-8">
          {service.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.features.map((feat, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[var(--bg)] border border-[var(--border)] space-y-2">
              <h4 className="font-bold text-base text-[var(--text-primary)] font-display">
                {feat.title}
              </h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Deliverables Checklist */}
      <div className="p-8 rounded-3xl border border-[var(--border)] bg-[var(--surface)]/50 mb-16">
        <h3 className="text-xl font-bold font-display text-[var(--text-primary)] mb-6">
          What You Receive (Deliverables)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {service.deliverables.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-[var(--bg)] border border-[var(--border)]">
              <CheckCircle2 className="w-5 h-5 text-[var(--accent)] shrink-0" />
              <span className="text-sm font-semibold text-[var(--text-primary)]">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[var(--accent)] text-white text-center shadow-2xl">
        <h3 className="text-3xl font-extrabold font-display mb-3">
          Interested in {service.title}?
        </h3>
        <p className="text-sm text-white/80 max-w-md mx-auto mb-6">
          Let's discuss your technical requirements and build a tailored strategy.
        </p>
        <Link
          href="/#why-us"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[var(--accent)] font-bold text-sm hover:scale-105 transition-transform shadow-xl"
        >
          <span>Get Started Today</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
