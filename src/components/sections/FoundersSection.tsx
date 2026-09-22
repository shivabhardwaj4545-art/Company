'use client';

import foundersData from '@/content/founders.json';
import { FounderItem } from '@/types/content';
import { Users, Globe, Code2, Share2 } from 'lucide-react';

export function FoundersSection() {
  const founders = foundersData as FounderItem[];

  return (
    <section id="founders" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[var(--border)]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <span className="text-xs font-black tracking-widest text-[#A3E635] uppercase flex items-center gap-2 mb-1">
            <Users className="w-4 h-4 text-[#A3E635]" /> LEADERSHIP &amp; VISION
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[var(--text-primary)]">
            Meet the Founders<span className="text-[var(--accent)]">.</span>
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-md">
          Hands-on technical leadership bringing together silicon valley engineering rigor and high-end design craftsmanship.
        </p>
      </div>

      {/* Two-Column Founder Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {founders.map((founder) => (
          <div
            key={founder.id}
            className="group relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 accent-glow-hover flex flex-col sm:flex-row items-center sm:items-start gap-6 overflow-hidden"
          >
            {/* Founder Avatar & Initials Badge */}
            <div className="relative shrink-0">
              {/* eslint-disable-next-html-extension */}
              <img
                src={founder.avatar}
                alt={founder.name}
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover border border-[var(--border)] shadow-md group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-2 -right-2 px-2.5 py-1 rounded-lg bg-[var(--accent)] text-white text-xs font-black font-display shadow-md">
                {founder.initials}
              </div>
            </div>

            {/* Bio & Socials */}
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-2xl font-bold font-display text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                {founder.name}
              </h3>
              <p className="text-xs font-semibold text-[var(--accent)] uppercase tracking-wider mb-3">
                {founder.role}
              </p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                {founder.bio}
              </p>

              {/* Social Links */}
              <div className="flex items-center justify-center sm:justify-start gap-3">
                {founder.socials.twitter && (
                  <a
                    href={founder.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    aria-label={`${founder.name} Twitter profile`}
                    className="p-2 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                  </a>
                )}
                {founder.socials.linkedin && (
                  <a
                    href={founder.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    aria-label={`${founder.name} LinkedIn profile`}
                    className="p-2 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                  </a>
                )}
                {founder.socials.github && (
                  <a
                    href={founder.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    aria-label={`${founder.name} GitHub profile`}
                    className="p-2 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
                  >
                    <Code2 className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
