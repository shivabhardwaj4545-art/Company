'use client';

import foundersData from '@/content/founders.json';
import { FounderItem } from '@/types/content';
import { Users } from 'lucide-react';

const InstagramIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export function FoundersSection() {
  const founders = foundersData as FounderItem[];

  return (
    <section id="founders" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[var(--border)] scroll-mt-28">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <span className="text-xs font-black tracking-widest text-[#6a57fa] uppercase flex items-center gap-2 mb-1">
            <Users className="w-4 h-4 text-[#6a57fa]" /> LEADERSHIP &amp; VISION
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[var(--text-primary)]">
            Meet the Founders
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-md font-medium">
          Hands-on technical leadership bringing together silicon valley engineering rigor and high-end design craftsmanship.
        </p>
      </div>

      {/* Two-Column Founder Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {founders.map((founder) => (
          <div
            key={founder.id}
            className="card-popout group rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 overflow-hidden shadow-sm hover:shadow-xl transition-all h-full"
          >
            {/* Founder Initials Badge */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#6a57fa]/15 border border-[#6a57fa]/30 text-[#6a57fa] text-xl sm:text-2xl font-black font-display flex items-center justify-center shrink-0 shadow-md">
              {founder.initials}
            </div>

            {/* Bio & Socials */}
            <div className="flex-1 flex flex-col justify-between h-full text-center sm:text-left">
              <div>
                <h3 className="text-2xl font-bold font-display text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                  {founder.name}
                </h3>
                <p className="text-xs font-semibold text-[var(--accent)] uppercase tracking-wider mb-3">
                  {founder.role}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-medium">
                  {founder.bio}
                </p>
              </div>

              {/* Social Links Pills: Instagram & LinkedIn Only - Pinned to bottom for alignment */}
              <div className="mt-auto pt-6 flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                {founder.socials.instagram && (
                  <a
                    href={founder.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="px-3.5 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface-secondary)] text-xs font-black text-[#6a57fa] hover:bg-[#6a57fa] hover:text-white transition-all inline-flex items-center gap-1.5 uppercase"
                  >
                    <InstagramIcon />
                    <span>INSTAGRAM ↗</span>
                  </a>
                )}
                {founder.socials.linkedin && (
                  <a
                    href={founder.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="px-3.5 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface-secondary)] text-xs font-black text-[#6a57fa] hover:bg-[#6a57fa] hover:text-white transition-all inline-flex items-center gap-1.5 uppercase"
                  >
                    <LinkedinIcon />
                    <span>LINKEDIN ↗</span>
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
