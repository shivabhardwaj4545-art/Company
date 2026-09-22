'use client';

import servicesData from '@/content/services.json';
import { ServiceItem } from '@/types/content';
import { ArrowUpRight, CheckCircle2, Code2, Palette, Bot } from 'lucide-react';
import Link from 'next/link';

export function WhatWeDoSection() {
  const services = servicesData as ServiceItem[];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-[#a3e635]" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-[#FFC700]" />;
      case 'Bot':
        return <Bot className="w-6 h-6 text-[#a3e635]" />;
      default:
        return <Code2 className="w-6 h-6 text-[#a3e635]" />;
    }
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-black tracking-widest text-[#a3e635] uppercase block mb-1">
            THREE THINGS. DONE RIGHT.
          </span>
          <h2 className="text-4xl sm:text-6xl font-black font-display text-[var(--text-primary)] uppercase tracking-tight">
            WHAT WE DO<span className="text-[#a3e635]">.</span>
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] font-medium max-w-md">
          High-performance web engineering, iconic brand systems, and 24/7 AI automation workflows.
        </p>
      </div>

      {/* CORE 3 SERVICES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.slug}
            className="card-popout p-6 sm:p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-md flex flex-col justify-between group overflow-hidden"
          >
            {/* Gradient Dotted Wave Background */}
            <div className="bg-dotted-gradient" />
            <div>
              {/* Number & Icon */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-4xl font-black font-display text-[#a3e635] tracking-tight">
                  {service.number}
                </span>
                <div className="p-3 rounded-xl bg-[var(--bg)] border border-[var(--border)] shadow-sm">
                  {getIcon(service.icon)}
                </div>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-2xl font-black font-display text-[var(--text-primary)] mb-3 uppercase group-hover:text-[#a3e635] transition-colors">
                {service.title}
              </h3>
              <p className="text-xs font-medium text-[var(--text-secondary)] mb-6 leading-relaxed">
                {service.tagline}
              </p>

              {/* Bullets List */}
              <ul className="space-y-3 mb-8">
                {service.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[var(--text-primary)] font-bold">
                    <CheckCircle2 className="w-4 h-4 text-[#a3e635] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Detail Link */}
            <Link
              href={`/services/${service.slug}`}
              data-cursor="hover"
              className="inline-flex items-center justify-between w-full pt-4 border-t border-[var(--border)] text-xs font-black text-[var(--text-primary)] group-hover:text-[#a3e635] transition-colors uppercase tracking-wider"
            >
              <span>EXPLORE SERVICE</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}


