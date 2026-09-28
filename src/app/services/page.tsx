'use client';

import Link from 'next/link';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';

export default function ServicesPage() {
  const servicesList = [
    {
      num: '01',
      tag: 'VIDEO',
      title: 'VIDEO EDITING & MOTION DESIGN',
      summary:
        'Post-production for campaigns, launches and everyday content — you supply the footage, we deliver the cut.',
      bgColor: 'bg-[#e26242]',
      textColor: 'text-slate-950',
      pillColor: 'border-slate-950/40 text-slate-950 hover:bg-slate-950 hover:text-white',
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
      bgColor: 'bg-[#5844f7]',
      textColor: 'text-white',
      pillColor: 'border-white/40 text-white hover:bg-white hover:text-slate-950',
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
      bgColor: 'bg-[#0d9488]',
      textColor: 'text-white',
      pillColor: 'border-white/40 text-white hover:bg-white hover:text-slate-950',
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
      bgColor: 'bg-[#d97706]',
      textColor: 'text-slate-950',
      pillColor: 'border-slate-950/40 text-slate-950 hover:bg-slate-950 hover:text-white',
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
      bgColor: 'bg-[#2563eb]',
      textColor: 'text-white',
      pillColor: 'border-white/40 text-white hover:bg-white hover:text-slate-950',
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
      bgColor: 'bg-[#e07b93]',
      textColor: 'text-slate-950',
      pillColor: 'border-slate-950/40 text-slate-950 hover:bg-slate-950 hover:text-white',
      deliverables: [
        'Research and visual direction',
        'Logo system and responsive variations',
        'Colour, typography and supporting graphic language',
        'Usage guidelines and production-ready assets',
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#070709] text-white pt-28 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-[#e26242] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* HERO SECTION (Screenshot 1) */}
        <div className="space-y-8 pt-4">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black font-display text-white uppercase tracking-tight leading-[0.95]">
            Let’s build the next one <br className="hidden sm:inline" />
            together.
          </h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-2">
            <Link
              href="/#contact"
              className="px-8 py-4 rounded-full bg-[#e26242] text-slate-950 text-sm font-black uppercase tracking-wider shadow-lg hover:bg-[#d55232] hover:scale-105 transition-all flex items-center gap-2"
            >
              <span>Connect with us</span>
              <div className="w-6 h-6 rounded-full bg-slate-950/20 flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 text-slate-950" />
              </div>
            </Link>
            <p className="text-slate-400 text-xs sm:text-sm font-mono font-medium">
              Tell us the goal. We will tell you what it actually needs.
            </p>
          </div>
        </div>

        {/* MARQUEE & QUOTE OVERVIEW BLOCK (Screenshot 2) */}
        <div className="rounded-3xl bg-[#0e0e12] border border-white/10 p-6 sm:p-10 lg:p-12 space-y-10">
          
          {/* Running Service Ticker */}
          <div className="overflow-hidden border-b border-white/10 pb-6 whitespace-nowrap">
            <div className="inline-flex items-center gap-6 text-[10px] sm:text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
              <span>VIDEO &amp; MOTION</span>
              <span className="text-[#e26242]">•</span>
              <span>WEB &amp; APP DEVELOPMENT</span>
              <span className="text-[#e26242]">•</span>
              <span>BRAND &amp; SOCIAL SYSTEMS</span>
              <span className="text-[#e26242]">•</span>
              <span>PERFORMANCE MARKETING</span>
              <span className="text-[#e26242]">•</span>
              <span>UGC &amp; CREATOR WORK</span>
              <span className="text-[#e26242]">•</span>
              <span>IDENTITY &amp; DESIGN</span>
            </div>
          </div>

          {/* Quote Left + 6 Services Overview Grid Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Quote */}
            <div className="lg:col-span-6 space-y-6">
              <blockquote className="text-xl sm:text-3xl lg:text-4xl font-bold font-display text-white leading-tight">
                “Six services, one team, and the same standard across all of them. We would rather scope the work honestly than sell you a package you do not need.”
              </blockquote>
              
              <div className="flex items-center gap-3 pt-2">
                <div className="w-1 h-8 bg-[#e26242] rounded-full" />
                <div>
                  <div className="text-xs font-mono font-black text-white uppercase tracking-widest">
                    AIKODX STUDIO
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">
                    Creative, product &amp; growth team
                  </div>
                </div>
              </div>
            </div>

            {/* Right 6 Services Grid (3 cols x 2 rows) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              {servicesList.map((svc) => (
                <div key={svc.num} className="space-y-1.5 border-l border-white/10 pl-4 py-1">
                  <div className="text-[10px] font-mono text-slate-500 font-bold">{svc.num}</div>
                  <div className="text-base font-black font-display text-white">{svc.tag}</div>
                  <div className="text-[11px] font-mono text-slate-400 line-clamp-2">{svc.title}</div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* 6 STACKED DETAILED SERVICE CARDS (Screenshots 3 & 4) */}
        <div className="space-y-8 pt-6">
          {servicesList.map((svc, idx) => (
            <div
              key={svc.num}
              style={{ top: `${100 + idx * 20}px` }}
              className={`sticky rounded-[28px] sm:rounded-[36px] ${svc.bgColor} ${svc.textColor} p-6 sm:p-10 lg:p-12 shadow-2xl transition-all duration-500 overflow-hidden border border-black/10`}
            >
              {/* Card Top Bar */}
              <div className="flex items-center justify-between border-b border-current/20 pb-4 mb-8 text-xs font-mono font-bold tracking-widest uppercase opacity-80">
                <span>{svc.num} / {svc.tag}</span>
                <span>{svc.num} — 06</span>
              </div>

              {/* Card Inner Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
                {/* Left Column: Title & Summary */}
                <div className="lg:col-span-6 space-y-6">
                  <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight leading-tight">
                    {svc.title}
                  </h2>
                  <p className="text-sm sm:text-base font-medium opacity-90 leading-relaxed max-w-lg">
                    {svc.summary}
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/#contact"
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 ${svc.pillColor} text-xs font-black uppercase tracking-wider transition-all shadow-md group`}
                    >
                      <span>View more details</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Right Column: What You Get List */}
                <div className="lg:col-span-6 space-y-4 lg:border-l lg:border-current/20 lg:pl-8">
                  <div className="text-xs font-mono font-extrabold uppercase tracking-widest opacity-75 mb-2">
                    WHAT YOU GET
                  </div>
                  <div className="space-y-3">
                    {svc.deliverables.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-4 border-b border-current/15 pb-3">
                        <span className="text-xs font-mono font-bold opacity-60 pt-0.5">
                          0{itemIdx + 1}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold leading-snug">
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

        {/* BOTTOM CONNECT BANNER */}
        <div className="rounded-3xl bg-[#0e0e12] border border-white/10 p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white uppercase tracking-tight">
            Ready to scope your next build?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-medium leading-relaxed">
            We review your requirements and provide an honest scope-led roadmap within 24 hours.
          </p>
          <div className="pt-2">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2.5 px-10 py-4 rounded-full bg-[#e26242] text-slate-950 text-sm font-black uppercase tracking-wider shadow-xl hover:bg-[#d55232] hover:scale-105 transition-all"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-5 h-5 text-slate-950" />
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
