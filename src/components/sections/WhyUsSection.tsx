'use client';

import { Zap, ShieldCheck, Rocket, Code2 } from 'lucide-react';

export function WhyUsSection() {
  const pillars = [
    {
      icon: <Zap className="w-6 h-6 text-[var(--accent)]" />,
      title: 'Sub-Second Speed Standard',
      desc: 'We engineer web apps to load in under 500ms globally. Lightning speed improves SEO rankings and drastically boosts conversion rates.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-purple-400" />,
      title: 'Dark & Light Theme Supremacy',
      desc: 'Class-based dark/light theme systems built using CSS variables, preventing flash-of-unstyled-theme and honoring user preference.',
    },
    {
      icon: <Rocket className="w-6 h-6 text-emerald-400" />,
      title: 'Autonomous AI Lead Capture',
      desc: 'Every lead from your website is qualified instantly via AI agents and routed directly into WhatsApp Cloud API and your CRM.',
    },
    {
      icon: <Code2 className="w-6 h-6 text-amber-400" />,
      title: 'Production-Grade Next.js Codebase',
      desc: 'No fragile site builders or bloated dependencies. Clean, modular React and Tailwind CSS built for enterprise longevity.',
    },
  ];

  return (
    <section id="why-us" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[var(--border)]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <span className="text-xs font-black tracking-widest text-[#A3E635] uppercase mb-1 flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#A3E635]" /> WHY CHOOSE KODX
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[var(--text-primary)]">
            Built Different<span className="text-[var(--accent)]">.</span>
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-md">
          How we help high-growth startups and visionary brands outpace traditional market competitors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pillars.map((pillar, idx) => (
          <div
            key={idx}
            className="card-popout p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] flex items-start gap-5 overflow-hidden"
          >
            {/* Gradient Dotted Wave Background */}
            <div className="bg-dotted-gradient" />
            <div className="p-3.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] shrink-0">
              {pillar.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold font-display text-[var(--text-primary)] mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
