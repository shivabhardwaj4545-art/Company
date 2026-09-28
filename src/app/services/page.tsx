'use client';

import Link from 'next/link';
import { ArrowUpRight, ExternalLink, ArrowRight, ArrowLeft, Zap } from 'lucide-react';

export default function ServicesPage() {
  const serviceCards = [
    {
      slug: 'video-motion',
      num: '01',
      category: 'VIDEO & MOTION',
      tag: '★ POPULAR',
      client: 'AIKODX MEDIA STUDIO',
      year: '2026',
      title: 'Video Editing & Motion Design',
      summary:
        'Post-production for campaigns, launches and everyday content — you supply the footage, we deliver the cut.',
      cover: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop',
      deliverables: ['Short-form Reels', 'Motion Graphics', 'Brand Films', 'Sound Design', 'Colour Grading'],
      metrics: [
        { metric: '10M+', label: 'Views Delivered' },
        { metric: '48hr', label: 'Turnaround' },
        { metric: '4K', label: 'Master Exports' },
      ],
    },
    {
      slug: 'web-app-dev',
      num: '02',
      category: 'WEB & APP DEVELOPMENT',
      tag: '★ FLAGSHIP',
      client: 'AIKODX ENGINEERING',
      year: '2026',
      title: 'Web & Platform Development',
      summary:
        'Scalable Next.js web applications, mobile apps, and custom software systems engineered for high performance and growth.',
      cover: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
      deliverables: ['Next.js Enterprise', 'React Native', 'API Integrations', 'Sub-second Speed', 'Headless CMS'],
      metrics: [
        { metric: '< 0.5s', label: 'Page Load' },
        { metric: '99.9%', label: 'System Uptime' },
        { metric: '100%', label: 'SEO Score' },
      ],
    },
    {
      slug: 'brand-presence',
      num: '03',
      category: 'BRAND & SOCIAL SYSTEMS',
      tag: 'DESIGN SYSTEM',
      client: 'AIKODX BRAND LABS',
      year: '2026',
      title: 'Brand Presence & Social Systems',
      summary:
        'Comprehensive brand strategy, visual direction, and cohesive design systems engineered for omni-channel presence.',
      cover: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800&auto=format&fit=crop',
      deliverables: ['Visual Direction', 'Design System', 'Social Media Kits', 'Typography', 'Asset Guidelines'],
      metrics: [
        { metric: '3x', label: 'Brand Retention' },
        { metric: '100%', label: 'Cohesive Assets' },
        { metric: 'Global', label: 'Design Standard' },
      ],
    },
    {
      slug: 'performance-marketing',
      num: '04',
      category: 'PERFORMANCE MARKETING',
      tag: 'DATA DRIVEN',
      client: 'AIKODX GROWTH ENGINE',
      year: '2026',
      title: 'Performance Marketing & Funnels',
      summary:
        'Data-driven growth campaigns, ad funnel architecture, and conversion rate optimization that lower CAC and increase LTV.',
      cover: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
      deliverables: ['Paid Acquisition', 'Funnel Build', 'Attribution Setup', 'Retargeting', 'ROAS Optimization'],
      metrics: [
        { metric: '4.2x', label: 'Average ROAS' },
        { metric: '35%', label: 'CAC Reduction' },
        { metric: '2.5x', label: 'Conversion Lift' },
      ],
    },
    {
      slug: 'ugc-creators',
      num: '05',
      category: 'UGC & CREATOR WORK',
      tag: 'VIRAL REACH',
      client: 'AIKODX CREATOR NETWORK',
      year: '2026',
      title: 'UGC Reels & Creator Collaborations',
      summary:
        'High-performing short-form video content, UGC reel concepts, and creator management for viral social reach.',
      cover: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
      deliverables: ['Creator Sourcing', 'Hook Scripts', 'High-Volume Reels', 'Ad Variants', 'Viral Angles'],
      metrics: [
        { metric: '5M+', label: 'Organic Reach' },
        { metric: '100+', label: 'Active Creators' },
        { metric: '8%', label: 'Avg Engagement' },
      ],
    },
    {
      slug: 'logo-identity',
      num: '06',
      category: 'IDENTITY & DESIGN',
      tag: 'CORE BRAND',
      client: 'AIKODX DESIGN STUDIO',
      year: '2026',
      title: 'Logo & Visual Brand Identity',
      summary:
        'Distinct visual identities designed to work seamlessly from an app icon to a storefront.',
      cover: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop',
      deliverables: ['Research & Direction', 'Logo System', 'Color Language', 'Vector Assets', 'Brand Guidelines'],
      metrics: [
        { metric: '100%', label: 'Vector Precision' },
        { metric: 'Multi', label: 'Platform Ready' },
        { metric: '4k', label: 'Export Quality' },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)] pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6a57fa]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-[var(--text-secondary)] hover:text-[#6a57fa] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Page Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6a57fa]/10 text-[#6a57fa] border border-[#6a57fa]/30 text-xs font-black uppercase tracking-widest shadow-sm">
            <Zap className="w-3.5 h-3.5 text-[#6a57fa]" />
            OUR CAPABILITIES &amp; SERVICES
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display text-[var(--text-primary)] uppercase tracking-tight leading-tight">
            Six Services. <span className="text-[#6a57fa]">One Studio.</span>
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] font-medium max-w-2xl mx-auto leading-relaxed">
            Six services, one team, and the same high engineering standard across all of them. We scope the work honestly to deliver maximum speed and scale.
          </p>
        </div>

        {/* STACKED SERVICE CARDS DECK (Matching Homepage Work Cards Deck Exactly) */}
        <div className="relative flex flex-col gap-10 sm:gap-14 pb-12">
          {serviceCards.map((svc, index) => {
            return (
              <div
                key={svc.slug}
                style={{ top: `${90 + index * 24}px` }}
                className="sticky rounded-[2rem] sm:rounded-[2.5rem] border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 overflow-hidden group hover:border-[#6a57fa]/40"
              >
                {/* Background Ambient Radial Glow */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#6a57fa]/5 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                  
                  {/* LEFT COLUMN: Image & Visual Badges (5 Cols) */}
                  <div className="lg:col-span-5 relative">
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full bg-slate-950 border border-slate-200/80 dark:border-white/10 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                      {/* eslint-disable-next-html-extension */}
                      <img
                        src={svc.cover}
                        alt={svc.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.97]"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

                      {/* Top Badges */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 flex-wrap z-10">
                        <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-extrabold text-white border border-white/20 uppercase tracking-wider">
                          {svc.category}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-indigo-600 text-[10px] font-black text-white shadow-md border border-white/30 uppercase tracking-widest">
                          {svc.tag}
                        </span>
                      </div>

                      {/* Bottom Client Tag */}
                      <div className="absolute bottom-3.5 left-3.5 z-10">
                        <span className="text-[11px] font-black uppercase tracking-widest text-amber-300 drop-shadow-md">
                          {svc.client}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT COLUMN: Content & Details (7 Cols) */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-black tracking-widest text-[#6a57fa] uppercase font-mono">
                          {svc.num} / {svc.category}
                        </span>
                        <span className="text-xs text-[var(--text-secondary)] font-mono">• {svc.year}</span>
                      </div>

                      {/* Service Title */}
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display text-[var(--text-primary)] leading-snug group-hover:text-[#6a57fa] transition-colors">
                        {svc.title}
                      </h3>
                    </div>

                    {/* Summary Description */}
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-medium leading-relaxed">
                      {svc.summary}
                    </p>

                    {/* Deliverable Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {svc.deliverables.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-[11px] font-bold text-[var(--text-secondary)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* Key Metrics Strip */}
                    <div className="pt-4 border-t border-[var(--border)] grid grid-cols-3 gap-3">
                      {svc.metrics.map((res, idx) => (
                        <div key={idx} className="space-y-0.5">
                          <div className="text-base sm:text-xl font-black font-display text-[#6a57fa]">
                            {res.metric}
                          </div>
                          <div className="text-[10px] sm:text-xs text-[var(--text-secondary)] font-bold truncate">
                            {res.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="pt-2 flex items-center gap-4 flex-wrap">
                      <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#6a57fa] hover:bg-[#5844f7] text-white font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all hover:scale-105"
                      >
                        <span>Get Scope-Led Proposal</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>

                      <Link
                        href="/#contact"
                        className="inline-flex items-center gap-1.5 text-xs font-black text-[#6a57fa] hover:text-[#5844f7] transition-colors cursor-pointer group/link"
                      >
                        <span>Discuss Service Requirements</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 rounded-3xl border border-[var(--border)] bg-[var(--surface)] gap-6 shadow-md">
          <div className="space-y-1">
            <h4 className="text-lg sm:text-xl font-bold font-display text-[var(--text-primary)]">
              Ready to scope your next custom web application or AI platform?
            </h4>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-medium">
              We review your requirements and provide an honest scope-led roadmap within 24 hours.
            </p>
          </div>
          <Link
            href="/#contact"
            className="px-8 py-3.5 rounded-xl bg-[#6a57fa] text-white hover:bg-[#5844f7] text-xs font-black uppercase tracking-wider transition-all shrink-0 flex items-center gap-2 shadow-lg hover:scale-105"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </main>
  );
}
