'use client';

import { BookOpen, ArrowUpRight, Clock, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function BlogSection() {
  const articles = [
    {
      slug: 'nextjs-15-performance',
      title: 'Building High-Velocity Next.js 15 Web Apps with Sub-50ms Latency',
      excerpt: 'How we leverage Turbopack, React 19 Server Components, and edge caching to achieve 99+ Lighthouse performance scores for modern brands.',
      category: 'Engineering',
      date: 'Sep 24, 2026',
      readTime: '5 min read',
      cover: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      author: 'AiKodX Tech Lead'
    },
    {
      slug: 'autonomous-ai-agents-sales',
      title: 'How Autonomous AI Agents Are Replacing Traditional Lead Forms in 2026',
      excerpt: 'Static contact forms lose up to 60% of interested buyers. Discover how instant WhatsApp AI qualification pipelines turn traffic into warm calls.',
      category: 'AI Automation',
      date: 'Sep 20, 2026',
      readTime: '4 min read',
      cover: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      author: 'AiKodX AI Specialist'
    },
    {
      slug: 'gen-z-brand-systems',
      title: 'The Death of Generic Web Design: Crafting Gen-Z Brand Systems That Convert',
      excerpt: 'Why minimalist template designs fail to capture attention today, and how bold typography, glassmorphism, and micro-interactions elevate brand value.',
      category: 'Branding & UI',
      date: 'Sep 15, 2026',
      readTime: '6 min read',
      cover: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
      author: 'AiKodX Creative Director'
    }
  ];

  return (
    <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 border-t border-[var(--border)]">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div className="space-y-2">
          <span className="text-xs font-black tracking-widest text-[#6a57fa] uppercase flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#6a57fa]" /> LATEST INSIGHTS &amp; BLOG
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-[var(--text-primary)] uppercase tracking-tight leading-none">
            THOUGHTS &amp; ARTICLES
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-medium max-w-xl">
            Deep dives into modern web engineering, AI workflow automation, and brand strategy from our studio team.
          </p>
        </div>

        <div className="shrink-0">
          <span className="px-4 py-2 rounded-full bg-[#6a57fa]/10 text-[#6a57fa] border border-[#6a57fa]/20 text-xs font-bold uppercase tracking-wider font-mono">
            UPDATED WEEKLY
          </span>
        </div>
      </div>

      {/* Articles Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <article
            key={article.slug}
            className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:border-[#6a57fa]/40"
          >
            {/* Image Banner */}
            <div className="relative h-48 w-full overflow-hidden bg-[var(--bg)]">
              {/* eslint-disable-next-html-extension */}
              <img
                src={article.cover}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-extrabold text-white border border-white/20 uppercase tracking-wider">
                  {article.category}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-[11px] text-[var(--text-secondary)] font-medium font-mono">
                  <span>{article.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#6a57fa]" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-display text-[var(--text-primary)] group-hover:text-[#6a57fa] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-[var(--text-secondary)] font-medium leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              {/* Author & Read Link */}
              <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between">
                <span className="text-[11px] font-bold text-[var(--text-secondary)] font-mono">
                  By {article.author}
                </span>
                <span className="text-xs font-black uppercase text-[#6a57fa] group-hover:translate-x-1 transition-transform flex items-center gap-1 font-display">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
