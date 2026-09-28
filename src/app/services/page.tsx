import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, Code2, Bot, Smartphone, Sparkles, Zap } from 'lucide-react';

export const metadata = {
  title: 'Our Services | AiKodX - Digital Agency & AI Studio',
  description: 'Explore AiKodX engineering services: Web Application Development, AI Automation & Agents, Custom Software, and Brand Identity.',
};

export default function ServicesPage() {
  const serviceList = [
    {
      id: 'web-development',
      title: 'Web & Platform Development',
      tagline: 'High-performance web applications built for speed, scale, and seamless UX.',
      icon: Code2,
      badge: 'Core Service',
      features: [
        'Next.js & React Enterprise Architecture',
        'Sub-second page load optimization',
        'Custom CMS & Headless integration',
        'API Integration & Microservices',
      ],
      description: 'We engineer robust, scalable web platforms that turn visitors into customers. From SaaS dashboards to complex corporate ecosystems.',
    },
    {
      id: 'ai-automation',
      title: 'AI Automation & Custom Agents',
      tagline: 'Automate repetitive workflows and deploy intelligent AI agents for your business.',
      icon: Bot,
      badge: 'Popular',
      features: [
        'Custom LLM Fine-tuning & RAG Pipelines',
        'Intelligent Customer Support Chatbots',
        'Automated Document Processing & Extraction',
        'Autonomous Multi-Agent Workflows',
      ],
      description: 'Supercharge operational efficiency by embedding artificial intelligence directly into your existing business logic.',
    },
    {
      id: 'branding-identity',
      title: 'Brand Strategy & Visual Identity',
      tagline: 'Crafting distinct, modern brand identities that stand out in crowded markets.',
      icon: Sparkles,
      badge: 'Design',
      features: [
        'Comprehensive Brand Guidelines & Typography',
        'Interactive Design Systems & Component Libraries',
        'Logo Design & Vector Assets',
        'UX/UI Design & Interactive Prototypes',
      ],
      description: 'We shape brands that communicate value immediately. Premium aesthetic execution paired with conversion-focused UX.',
    },
    {
      id: 'mobile-apps',
      title: 'Cross-Platform Mobile Apps',
      tagline: 'Native performance mobile applications for iOS & Android with shared codebases.',
      icon: Smartphone,
      badge: 'Mobile',
      features: [
        'React Native & Flutter Development',
        'Offline-first Data Synchronization',
        'Push Notifications & In-App Purchases',
        'App Store & Play Store Deployment',
      ],
      description: 'Deliver crisp, fluid mobile experiences directly into your users’ hands with zero compromise on speed.',
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)] pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6a57fa]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[var(--border)] text-[#6a57fa] text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
            <Zap className="w-3.5 h-3.5 text-[#6a57fa]" />
            <span>Capabilities &amp; Solutions</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight leading-tight text-[var(--text-primary)]">
            Services Built for <span className="text-[#6a57fa]">Scale &amp; Precision.</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed font-medium">
            We partner with ambitious teams to architect custom web applications, AI automation pipelines, and scalable digital products.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceList.map((service) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id}
                className="p-8 sm:p-10 rounded-3xl bg-white border border-[var(--border)] hover:border-[#6a57fa] transition-all duration-300 group flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-xl"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-[#6a57fa]/10 border border-[#6a57fa]/30 flex items-center justify-center text-[#6a57fa] group-hover:bg-[#6a57fa] group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[var(--surface-secondary)] border border-[var(--border)] text-xs font-mono font-bold text-[#6a57fa]">
                      {service.badge}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black font-display text-[var(--text-primary)] group-hover:text-[#6a57fa] transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-[var(--text-secondary)] text-sm font-medium mt-2 leading-relaxed">
                      {service.tagline}
                    </p>
                  </div>

                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed border-t border-[var(--border)] pt-4 font-medium">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 pt-2">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-[var(--text-primary)] font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-[#6a57fa] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#6a57fa] hover:bg-[#5844f7] text-white font-black text-xs uppercase tracking-wider transition-all duration-300 group/btn shadow-md hover:scale-105"
                  >
                    <span>Explore Service Details</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="p-10 sm:p-14 rounded-3xl bg-white border border-[var(--border)] text-center space-y-6 relative overflow-hidden shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-black font-display text-[var(--text-primary)]">
            Have a custom requirement or project brief?
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Our engineering leaders evaluate your technical requirements and deliver a scope-led proposal within 24 hours.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#6a57fa] hover:bg-[#5844f7] text-white font-black text-xs uppercase tracking-wider transition-all shadow-xl hover:scale-105"
            >
              <span>Get Scope-Led Proposal</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
