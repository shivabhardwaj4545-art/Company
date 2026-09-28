'use client';

import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, Zap, Award, Users, Lock } from 'lucide-react';


export default function WhyUsPage() {
  const pillars = [
    {
      title: 'Full Intellectual Property (IP) Ownership',
      description: 'You retain 100% full ownership of all source code, design files, schemas, and AI models built during your project.',
      icon: Lock,
    },
    {
      title: '2x Faster Delivery Timelines',
      description: 'By leveraging our internal AI-assisted developer tools and component primitives, we ship production-grade platforms in weeks, not months.',
      icon: Zap,
    },
    {
      title: 'Enterprise-Grade Security & SLA',
      description: 'ISO-compliant security practices, automated security scanning, and 99.8% uptime SLAs baked directly into every project deployment.',
      icon: ShieldCheck,
    },
    {
      title: 'Direct Founder & Senior Dev Access',
      description: 'No bloated middle management. You communicate directly with lead architects and founders in shared Slack/Discord channels.',
      icon: Users,
    },
  ];

  const stats = [
    { label: 'Successful Projects Shipped', value: '45+' },
    { label: 'Client Retention Rate', value: '98%' },
    { label: 'Average Delivery Time', value: '3 Weeks' },
    { label: 'Global Client Ratings', value: '4.9/5' },
  ];

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)] pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[#6a57fa]/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-20">
        
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[var(--border)] text-[#6a57fa] text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
            <Award className="w-3.5 h-3.5 text-[#6a57fa]" />
            <span>The AiKodX Difference</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight leading-tight text-[var(--text-primary)]">
            Why High-Growth Teams <br />
            <span className="text-[#6a57fa]">
              Partner With Us.
            </span>
          </h1>
          <p className="text-[var(--text-secondary)] text-base sm:text-lg font-medium leading-relaxed">
            We don’t just write code — we build scalable software systems and AI automation workflows designed to drive measurable business outcomes.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl bg-white border border-[var(--border)] text-center shadow-sm">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-2">
              <div className="text-3xl sm:text-5xl font-black font-display text-[#6a57fa] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[var(--text-secondary)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-3xl bg-white border border-[var(--border)] hover:border-[#6a57fa] transition-all duration-300 space-y-4 shadow-sm hover:shadow-xl"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#6a57fa]/10 border border-[#6a57fa]/30 flex items-center justify-center text-[#6a57fa]">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black font-display text-[var(--text-primary)]">
                  {pillar.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed font-medium">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[var(--border)] space-y-8 shadow-sm">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black font-display text-[var(--text-primary)]">Traditional Agencies vs. AiKodX Studio</h2>
            <p className="text-[var(--text-secondary)] text-sm font-medium">See how we compare against bloated legacy software consultancies.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--border)] text-xs font-mono font-bold uppercase text-[var(--text-secondary)]">
                  <th className="py-4 px-4">Feature / Metric</th>
                  <th className="py-4 px-4 text-slate-500">Traditional Agency</th>
                  <th className="py-4 px-4 text-[#6a57fa] font-black">AiKodX Studio</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)] font-medium text-[var(--text-primary)]">
                <tr>
                  <td className="py-4 px-4 font-bold text-[var(--text-primary)]">Development Pace</td>
                  <td className="py-4 px-4 text-[var(--text-secondary)]">3 to 6 months</td>
                  <td className="py-4 px-4 text-[#6a57fa] font-black">2 to 4 weeks</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[var(--text-primary)]">AI Native Workflows</td>
                  <td className="py-4 px-4 text-[var(--text-secondary)]">Basic or None</td>
                  <td className="py-4 px-4 text-[#6a57fa] font-black">Integrated in core architecture</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[var(--text-primary)]">Communication</td>
                  <td className="py-4 px-4 text-[var(--text-secondary)]">Account managers &amp; weekly calls</td>
                  <td className="py-4 px-4 text-[#6a57fa] font-black">Direct Slack channel with Dev Leads</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[var(--text-primary)]">Pricing Model</td>
                  <td className="py-4 px-4 text-[var(--text-secondary)]">Unpredictable hourly billing</td>
                  <td className="py-4 px-4 text-[#6a57fa] font-black">Transparent fixed-scope proposals</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6 pt-4">
          <h2 className="text-3xl sm:text-4xl font-black font-display text-[var(--text-primary)]">
            Ready to experience the difference?
          </h2>
          <div>
            <button
              onClick={() => {
                if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('open-project-modal'));
              }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#6a57fa] hover:bg-[#5844f7] text-white font-black text-xs uppercase tracking-wider transition-all shadow-xl hover:scale-105 cursor-pointer"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}
