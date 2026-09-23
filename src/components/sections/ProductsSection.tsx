'use client';

import productsData from '@/content/products.json';
import { ProductItem } from '@/types/content';
import { ArrowUpRight, ExternalLink, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function ProductsSection() {
  const products = productsData as ProductItem[];

  return (
    <section id="products" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[var(--border)]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs font-black tracking-widest text-[#857df3] uppercase flex items-center gap-2 mb-1">
            <Sparkles className="w-4 h-4 text-[#857df3]" /> PROPRIETARY TECH
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[var(--text-primary)]">
            In-House Products<span className="text-[#857df3]">.</span>
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-md">
          Tools, SaaS platforms, and automation engines built internally by our team to solve complex digital challenges.
        </p>
      </div>

      {/* 3 Columns Desktop / 1 Column Mobile Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.slug}
            className="card-popout group rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden flex flex-col justify-between"
          >
            {/* Gradient Dotted Wave Background */}
            <div className="bg-dotted-gradient" />
            <div>
              {/* Product Image Cover */}
              <div className="relative h-48 w-full overflow-hidden bg-[var(--bg)]">
                {/* eslint-disable-next-html-extension */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[var(--bg)]/90 backdrop-blur-md text-[11px] font-semibold text-[var(--accent)] border border-[var(--border)]">
                  {product.badge}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="text-2xl font-bold font-display text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs font-medium text-[var(--text-secondary)] mb-4 line-clamp-2">
                  {product.tagline}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {product.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-[var(--bg)] text-[var(--text-secondary)] border border-[var(--border)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-3 gap-2 py-3 px-4 rounded-xl bg-[var(--bg)] border border-[var(--border)] mb-6 text-center">
                  {product.metrics.map((m, idx) => (
                    <div key={idx}>
                      <div className="text-sm font-extrabold text-[var(--text-primary)] font-display">
                        {m.value}
                      </div>
                      <div className="text-[9px] text-[var(--text-secondary)] uppercase tracking-wider">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="p-6 pt-0 flex items-center justify-between gap-4">
              <Link
                href={`/products/${product.slug}`}
                data-cursor="hover"
                className="flex-1 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-xs font-bold text-[var(--text-primary)] text-center hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              >
                View Overview
              </Link>

              {product.liveUrl && (
                <a
                  href={product.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  aria-label={`Open ${product.name} live demo`}
                  className="p-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
