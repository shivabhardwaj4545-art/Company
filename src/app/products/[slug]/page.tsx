import productsData from '@/content/products.json';
import { ProductItem } from '@/types/content';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, CheckCircle2, Sparkles, Layers } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = productsData as ProductItem[];
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const products = productsData as ProductItem[];
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Back Button */}
      <Link
        href="/#products"
        className="inline-flex items-center gap-2 text-xs font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Products
      </Link>

      {/* Header Info */}
      <div className="mb-12">
        <span className="inline-block px-3 py-1 rounded-full bg-[var(--accent-glow)] text-[var(--accent)] font-semibold text-xs border border-[var(--accent)]/30 mb-4">
          {product.badge}
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold font-display text-[var(--text-primary)] mb-4">
          {product.name}
        </h1>
        <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl leading-relaxed">
          {product.tagline}
        </p>
      </div>

      {/* Hero Image Banner */}
      <div className="relative rounded-3xl border border-[var(--border)] overflow-hidden bg-[var(--surface)] mb-12 shadow-2xl">
        {/* eslint-disable-next-html-extension */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 sm:h-[450px] object-cover"
        />
      </div>

      {/* Specs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold font-display text-[var(--text-primary)]">
            Overview & Vision
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            {product.description}
          </p>

          <h3 className="text-xl font-bold font-display text-[var(--text-primary)] pt-4">
            Key Features & Capabilities
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {product.keyFeatures.map((feat, idx) => (
              <li
                key={idx}
                className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] flex items-start gap-3 text-xs sm:text-sm font-medium text-[var(--text-primary)]"
              >
                <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Sidebar Metrics & Tech */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
              Product Metrics
            </h4>
            <div className="space-y-3">
              {product.metrics.map((m, idx) => (
                <div key={idx} className="pb-3 border-b border-[var(--border)] last:border-0 last:pb-0">
                  <div className="text-2xl font-black font-display text-[var(--accent)]">
                    {m.value}
                  </div>
                  <div className="text-xs text-[var(--text-secondary)] font-medium">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-[var(--bg)] text-xs font-semibold text-[var(--text-primary)] border border-[var(--border)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {product.liveUrl && (
            <a
              href={product.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[var(--accent)] text-white text-sm font-bold shadow-lg shadow-[var(--accent-glow)] hover:opacity-95 transition-all"
            >
              <span>Launch Product App</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
