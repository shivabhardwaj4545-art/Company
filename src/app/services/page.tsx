'use client';

import Link from 'next/link';
import { ArrowUpRight, ArrowLeft, Zap } from 'lucide-react';

export default function ServicesPage() {
  const servicesList = [
    {
      num: '01',
      tag: 'VIDEO',
      title: 'VIDEO EDITING & MOTION DESIGN',
      summary:
        'Post-production for campaigns, launches and everyday content — you supply the footage, we deliver the cut.',
      deliverables: [
        'Edit direction, structure and pacing',
        'Short-form reels, ads and social edits',
        'Brand films, explainers and launch videos',
        'Motion graphics, captions, sound design and colour',
      ],
    },
    {
      num: '02',
      tag: 'BUILD',
      title: 'WEB & APP DEVELOPMENT',
      summary:
        'Scalable Next.js web applications, mobile apps, and custom software systems engineered for high performance and growth.',
      deliverables: [
        'Next.js enterprise architecture & microservices',
        'Cross-platform iOS & Android mobile applications',
        'Sub-second page load performance & SEO optimization',
        'Scalable API integrations & custom admin dashboards',
      ],
    },
    {
      num: '03',
      tag: 'BRAND',
      title: 'BRAND PRESENCE & SOCIAL SYSTEMS',
      summary:
        'Comprehensive brand strategy, visual direction, and cohesive design systems engineered for omni-channel presence.',
      deliverables: [
        'Omnichannel visual direction & brand strategy',
        'Interactive design systems & component libraries',
        'Social media content kits & brand templates',
        'Typography, color scales & asset guidelines',
      ],
    },
    {
      num: '04',
      tag: 'GROWTH',
      title: 'PERFORMANCE MARKETING',
      summary:
        'Data-driven growth campaigns, ad funnel architecture, and conversion rate optimization that lower CAC and increase LTV.',
      deliverables: [
        'Paid acquisition setup & creative ad testing',
        'High-converting landing page design & funnel build',
        'Analytics tracking, pixel setup & attribution',
        'Retargeting strategy & email marketing workflows',
      ],
    },
    {
      num: '05',
      tag: 'CONTENT',
      title: 'UGC REELS & CREATOR COLLABORATIONS',
      summary:
        'High-performing short-form video content, UGC reel concepts, and creator management for viral social reach.',
      deliverables: [
        'Creator sourcing & collaboration management',
        'UGC hook scripts & visual storyboard direction',
        'High-volume short-form reel editing for IG & TikTok',
        'Ad-variant generation for campaign scaling',
      ],
    },
    {
      num: '06',
      tag: 'DESIGN',
      title: 'LOGO & BRAND IDENTITY',
      summary: 'Distinct visual identities designed to work from an app icon to a storefront.',
      deliverables: [
        'Research and visual direction',
        'Logo system and responsive variations',
        'Colour, typography and supporting graphic language',
        'Usage guidelines and production-ready assets',
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)] pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6a57fa]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-[var(--text-secondary)] hover:text-[#6a57fa] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* HERO SECTION */}
        <div className="space-y-6 pt-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6a57fa]/10 text-[#6a57fa] border border-[#6a57fa]/30 text-xs font-black uppercase tracking-widest shadow-sm">
            <Zap className="w-3.5 h-3.5 text-[#6a57fa]" />
            CAPABILITIES &amp; SOLUTIONS
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display text-[var(--text-primary)] uppercase tracking-tight leading-[1.05]">
            Let’s build the next one <br className="hidden sm:inline" />
            <span className="text-[#6a57fa]">together.</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-2">
            <Link
              href="/#contact"
              className="px-8 py-3.5 rounded-xl bg-[#6a57fa] text-white text-xs font-black uppercase tracking-wider shadow-lg hover:bg-[#5844f7] hover:scale-105 transition-all flex items-center gap-2"
            >
              <span>Connect with us</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <p className="text-[var(--text-secondary)] text-xs sm:text-sm font-mono font-medium">
              Tell us the goal. We will tell you what it actually needs.
            </p>
          </div>
        </div>

        {/* MARQUEE & QUOTE OVERVIEW BLOCK */}
        <div className="rounded-3xl bg-[var(--surface)] border border-[var(--border)] p-6 sm:p-10 lg:p-12 space-y-10 shadow-md">
          
          {/* Running Service Ticker */}
          <div className="overflow-hidden border-b border-[var(--border)] pb-6 whitespace-nowrap">
            <div className="inline-flex items-center gap-6 text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[var(--text-secondary)] uppercase">
              <span>VIDEO &amp; MOTION</span>
              <span className="text-[#6a57fa]">•</span>
              <span>WEB &amp; APP DEVELOPMENT</span>
              <span className="text-[#6a57fa]">•</span>
              <span>BRAND &amp; SOCIAL SYSTEMS</span>
              <span className="text-[#6a57fa]">•</span>
              <span>PERFORMANCE MARKETING</span>
              <span className="text-[#6a57fa]">•</span>
              <span>UGC &amp; CREATOR WORK</span>
              <span className="text-[#6a57fa]">•</span>
              <span>IDENTITY &amp; DESIGN</span>
            </div>
          </div>

          {/* Quote Left + 6 Services Overview Grid Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Quote */}
            <div className="lg:col-span-6 space-y-6">
              <blockquote className="text-xl sm:text-3xl font-bold font-display text-[var(--text-primary)] leading-tight">
                “Six services, one team, and the same standard across all of them. We would rather scope the work honestly than sell you a package you do not need.”
              </blockquote>
              
              <div className="flex items-center gap-3 pt-2">
                <div className="w-1 h-8 bg-[#6a57fa] rounded-full" />
                <div>
                  <div className="text-xs font-mono font-black text-[#6a57fa] uppercase tracking-widest">
                    AIKODX STUDIO
                  </div>
                  <div className="text-[11px] font-mono text-[var(--text-secondary)]">
                    Creative, product &amp; growth team
                  </div>
                </div>
              </div>
            </div>

            {/* Right 6 Services Grid (3 cols x 2 rows) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              {servicesList.map((svc) => (
                <div key={svc.num} className="space-y-1.5 border-l border-[var(--border)] pl-4 py-1">
                  <div className="text-[10px] font-mono text-[#6a57fa] font-bold">{svc.num}</div>
                  <div className="text-base font-black font-display text-[var(--text-primary)]">{svc.tag}</div>
                  <div className="text-[11px] font-mono text-[var(--text-secondary)] line-clamp-2">{svc.title}</div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* 6 STACKED SERVICE CARDS (Matching Homepage Work Stacked Deck) */}
        <div className="relative flex flex-col gap-10 sm:gap-14 pb-12">
          {servicesList.map((svc, index) => (
            <div
              key={svc.num}
              style={{ top: `${90 + index * 24}px` }}
              className="sticky rounded-[2rem] sm:rounded-[2.5rem] border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 overflow-hidden group hover:border-[#6a57fa]/40"
            >
              {/* Background Ambient Radial Glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#6a57fa]/5 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
                
                {/* LEFT COLUMN: Title & Summary (6 Cols) */}
                <div className="lg:col-span-6 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-[#6a57fa]/10 text-[#6a57fa] border border-[#6a57fa]/30 text-xs font-mono font-black uppercase tracking-widest">
                      {svc.num} / {svc.tag}
                    </span>
                    <span className="text-xs text-[var(--text-secondary)] font-mono font-bold">• {svc.num} — 06</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display text-[var(--text-primary)] leading-snug group-hover:text-[#6a57fa] transition-colors">
                    {svc.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-medium leading-relaxed">
                    {svc.summary}
                  </p>

                  <div className="pt-2">
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#6a57fa] hover:bg-[#5844f7] text-white font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all hover:scale-105"
                    >
                      <span>View More Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* RIGHT COLUMN: What You Get List (6 Cols) */}
                <div className="lg:col-span-6 space-y-4 lg:border-l lg:border-[var(--border)] lg:pl-8">
                  <div className="text-xs font-mono font-black uppercase tracking-widest text-[#6a57fa]">
                    WHAT YOU GET
                  </div>
                  <div className="space-y-3 pt-1">
                    {svc.deliverables.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-3 border-b border-[var(--border)] pb-3">
                        <span className="text-xs font-mono font-black text-[#6a57fa] pt-0.5">
                          0{itemIdx + 1}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CALLOUT BANNER (Matching Homepage) */}
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
