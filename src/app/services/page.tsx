'use client';

import Link from 'next/link';
import { ArrowUpRight, ArrowLeft, Zap, Video, Code2, Sparkles, TrendingUp, Film, Palette, ExternalLink, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const serviceCards = [
    {
      id: 'video-motion',
      num: '01',
      category: 'VIDEO & MOTION',
      title: 'Video Editing & Motion Design',
      client: 'AIKODX CREATIVE STUDIO',
      icon: Video,
      gradient: 'from-orange-600 via-amber-600 to-indigo-900',
      summary:
        'Post-production for campaigns, product launches, and everyday content — high-energy pacing, 2D/3D motion graphics, color grading, and sound design.',
      techStack: ['Short-Form Reels', 'Brand Films', 'Motion Graphics', 'Sound Design', 'Color Grading'],
      results: [
        { metric: '100%', label: 'Custom Motion Pacing' },
        { metric: '4K', label: 'Multi-Format Export' },
        { metric: '<24h', label: 'Turnaround Available' },
      ],
    },
    {
      id: 'web-app',
      num: '02',
      category: 'ENGINEERING',
      title: 'Web & Mobile App Development',
      client: 'AIKODX TECH LABS',
      icon: Code2,
      gradient: 'from-[#6a57fa] via-indigo-600 to-slate-900',
      summary:
        'Scalable Next.js web applications, mobile apps, and custom software systems engineered for sub-second load times, SEO dominance, and high conversion.',
      techStack: ['Next.js 15', 'TypeScript', 'React Native', 'API Microservices', 'Tailwind CSS'],
      results: [
        { metric: '<0.5s', label: 'Sub-Second Speed' },
        { metric: '100%', label: 'Mobile Responsive' },
        { metric: '99.9%', label: 'Architecture Uptime' },
      ],
    },
    {
      id: 'brand-systems',
      num: '03',
      category: 'BRAND IDENTITY',
      title: 'Omnichannel Brand & Design Systems',
      client: 'AIKODX DESIGN SYSTEM',
      icon: Sparkles,
      gradient: 'from-purple-600 via-indigo-700 to-slate-900',
      summary:
        'Comprehensive brand strategy, visual direction, and interactive component libraries engineered for memorable brand presence across digital & physical touchpoints.',
      techStack: ['Visual Identity', 'Component Libraries', 'Design Systems', 'Typography', 'Color Scales'],
      results: [
        { metric: 'Complete', label: 'Design Guidelines' },
        { metric: '100+', label: 'Figma Tokens' },
        { metric: 'Vector', label: 'Production Ready' },
      ],
    },
    {
      id: 'performance-growth',
      num: '04',
      category: 'GROWTH',
      title: 'Performance Marketing & Funnels',
      client: 'AIKODX GROWTH ENGINE',
      icon: TrendingUp,
      gradient: 'from-amber-600 via-amber-700 to-slate-900',
      summary:
        'Data-driven growth campaigns, ad funnel architecture, and conversion rate optimization that lower customer acquisition cost and scale monthly recurring revenue.',
      techStack: ['Paid Acquisition', 'Funnel Architecture', 'A/B Testing', 'Analytics Tracking', 'Retargeting'],
      results: [
        { metric: '3.2x', label: 'Avg Conversion Uplift' },
        { metric: '-40%', label: 'Acquisition Cost (CAC)' },
        { metric: 'Real-Time', label: 'Funnel Attribution' },
      ],
    },
    {
      id: 'ugc-creator',
      num: '05',
      category: 'CREATOR CONTENT',
      title: 'UGC Reels & Creator Content Engines',
      client: 'AIKODX MEDIA LAB',
      icon: Film,
      gradient: 'from-blue-600 via-indigo-800 to-slate-900',
      summary:
        'High-performing short-form video content, UGC hook scripts, and creator sourcing designed for viral social reach on Instagram Reels and TikTok.',
      techStack: ['Creator Sourcing', 'Hook Scripting', 'Reel Editing', 'Ad Variants', 'Social Growth'],
      results: [
        { metric: '50+', label: 'Ad Video Variants' },
        { metric: '10M+', label: 'Viral Impressions' },
        { metric: 'Done-For-You', label: 'Creator Management' },
      ],
    },
    {
      id: 'logo-design',
      num: '06',
      category: 'DESIGN',
      title: 'Logo Systems & Brand Identity',
      client: 'AIKODX BRAND STUDIO',
      icon: Palette,
      gradient: 'from-pink-600 via-rose-700 to-slate-900',
      summary:
        'Distinct visual logo systems and responsive branding designed to perform seamlessly from an app icon to a physical storefront.',
      techStack: ['Logo System', 'Brand Guidelines', 'Responsive Logos', 'Social Kits', 'Export Assets'],
      results: [
        { metric: 'Full', label: 'SVG & Vector Assets' },
        { metric: 'Responsive', label: 'Icon Scale' },
        { metric: 'Print & Web', label: 'Production Ready' },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)] pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6a57fa]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-[var(--text-secondary)] hover:text-[#6a57fa] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Section Header */}
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6a57fa]/10 text-[#6a57fa] border border-[#6a57fa]/30 text-xs font-black uppercase tracking-widest shadow-sm">
            <Zap className="w-3.5 h-3.5 text-[#6a57fa]" />
            STUDIO CAPABILITIES &amp; SERVICES
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display text-[var(--text-primary)] uppercase tracking-tight leading-tight">
            ENGINEERED FOR SCALE
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] font-medium max-w-2xl mx-auto leading-relaxed">
            Six specialized capabilities, one engineering team, and the same standard of execution across all of them.
          </p>
        </div>

        {/* Stacked Cards Deck Container (Identical to Homepage Work Deck) */}
        <div className="relative flex flex-col gap-10 sm:gap-14 pb-12">
          {serviceCards.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                style={{ top: `${90 + index * 24}px` }}
                className="sticky rounded-[2rem] sm:rounded-[2.5rem] border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 overflow-hidden group hover:border-[#6a57fa]/40"
              >
                {/* Background Ambient Radial Glow */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#6a57fa]/5 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                  
                  {/* LEFT COLUMN: Visual Preview Container (5 Cols) */}
                  <div className="lg:col-span-5 relative">
                    <div className={`relative rounded-2xl overflow-hidden aspect-[4/3] w-full bg-gradient-to-br ${service.gradient} border border-slate-200/80 dark:border-white/10 shadow-lg group-hover:shadow-2xl transition-all duration-500 flex flex-col justify-between p-6 sm:p-8`}>
                      
                      {/* Gradient Ambient Overlay */}
                      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] pointer-events-none" />

                      {/* Top Badges */}
                      <div className="relative z-10 flex items-center justify-between gap-2 flex-wrap">
                        <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-extrabold text-white border border-white/20 uppercase tracking-wider">
                          {service.category}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-[#6a57fa] text-[10px] font-black text-white shadow-md border border-white/30 uppercase tracking-widest">
                          {service.num} / 06
                        </span>
                      </div>

                      {/* Center Icon Graphic */}
                      <div className="relative z-10 my-auto py-4 flex flex-col items-center justify-center text-center space-y-3">
                        <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-xs font-mono font-bold tracking-widest text-white/90 uppercase">
                          {service.category}
                        </span>
                      </div>

                      {/* Bottom Client Tag */}
                      <div className="relative z-10">
                        <span className="text-[11px] font-black uppercase tracking-widest text-amber-300 drop-shadow-md">
                          {service.client}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT COLUMN: Content & Details (7 Cols) */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-black tracking-widest text-[#6a57fa] uppercase font-mono">
                          {service.category}
                        </span>
                        <span className="text-xs text-[var(--text-secondary)] font-mono">• {service.num} — 06</span>
                      </div>

                      {/* Service Title */}
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display text-[var(--text-primary)] leading-snug group-hover:text-[#6a57fa] transition-colors">
                        {service.title}
                      </h2>
                    </div>

                    {/* Summary Description */}
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-medium leading-relaxed">
                      {service.summary}
                    </p>

                    {/* Tech / Feature Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {service.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-[11px] font-bold text-[var(--text-secondary)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Key Metrics / Deliverables Strip */}
                    <div className="pt-4 border-t border-[var(--border)] grid grid-cols-3 gap-3">
                      {service.results.map((res, idx) => (
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

                    {/* Action Buttons */}
                    <div className="pt-2 flex items-center gap-4 flex-wrap">
                      <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#6a57fa] hover:bg-[#5844f7] text-white font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all hover:scale-105"
                      >
                        <span>Start A Project</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>

                      <Link
                        href="/#contact"
                        className="inline-flex items-center gap-1.5 text-xs font-black text-[#6a57fa] hover:text-[#5844f7] transition-colors cursor-pointer group/link"
                      >
                        <span>View Scope &amp; Details</span>
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
              We review your technical requirements and deliver a scope-led proposal within 24 hours.
            </p>
          </div>
          <Link
            href="/#contact"
            className="px-8 py-3.5 rounded-xl bg-[#6a57fa] text-white hover:bg-[#5844f7] text-xs font-black uppercase tracking-wider transition-all shrink-0 flex items-center gap-2 shadow-lg hover:scale-105"
          >
            <span>Get Started</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </main>
  );
}
