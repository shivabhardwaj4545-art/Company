import Link from 'next/link';
import { ArrowUpRight, Users, Target, Compass } from 'lucide-react';
import foundersData from '@/content/founders.json';
import { FounderItem } from '@/types/content';

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

const GithubIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

export const metadata = {
  title: 'About Us | AiKodX Studio Founders & Mission',
  description: 'Learn about AiKodX Studio, our founders Shiva Sharma & Bittu Verma, and our mission to build high-performance web products and AI solutions.',
};

export default function AboutPage() {
  const founders = foundersData as FounderItem[];

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)] pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#6a57fa]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-20">
        
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[var(--border)] text-[#6a57fa] text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
            <Users className="w-3.5 h-3.5 text-[#6a57fa]" />
            <span>Studio Story &amp; Leadership</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight leading-tight text-[var(--text-primary)]">
            Architecting the Future of <br />
            <span className="text-[#6a57fa]">
              Software &amp; AI Products.
            </span>
          </h1>
          <p className="text-[var(--text-secondary)] text-base sm:text-lg font-medium leading-relaxed">
            AiKodX was founded with a single mission: to fuse bold UI design with enterprise engineering and custom AI automation.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[var(--border)] space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-[#6a57fa]/10 border border-[#6a57fa]/30 flex items-center justify-center text-[#6a57fa]">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-display text-[var(--text-primary)]">Our Mission</h2>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed font-medium">
              To eliminate technical friction for founders and businesses by engineering robust, high-converting digital products and autonomous AI agent pipelines.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[var(--border)] space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-[#6a57fa]/10 border border-[#6a57fa]/30 flex items-center justify-center text-[#6a57fa]">
              <Compass className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-display text-[var(--text-primary)]">Our Vision</h2>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed font-medium">
              To become the global benchmark for modern software studios — where intelligent code, speed, and elevated aesthetic design come together seamlessly.
            </p>
          </div>
        </div>

        {/* Neobrutalist Leadership Showcase (Shiva Sharma & Bittu Verma) */}
        <div className="space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-black tracking-widest text-[#FF4500] uppercase block">
              THE HUMANS BEHIND THE JUGAAD
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-display text-black uppercase tracking-tight">
              FOUNDERS
            </h2>
            <p className="text-sm sm:text-base text-slate-700 font-semibold font-sans">
              Two people. Four eye bags. Infinite jugaad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {founders.map((founder) => (
              <div
                key={founder.id}
                className="rounded-[28px] border-2 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
              >
                {/* Top Colored Box with Monogram Initials & Slanted Badge */}
                <div
                  className={`h-64 sm:h-72 border-b-2 border-black flex items-center justify-center relative p-6 ${
                    founder.bgColor === '#FACC15' ? 'bg-[#FACC15]' : 'bg-[#FF4500]'
                  }`}
                >
                  <span
                    className={`text-[110px] sm:text-[145px] font-black font-display leading-none select-none tracking-tighter ${
                      founder.bgColor === '#FACC15' ? 'text-[#B48000]/40' : 'text-[#7A1C00]/30'
                    }`}
                  >
                    {founder.initials}
                  </span>

                  <div className="absolute -bottom-4 left-6 sm:left-8 transform -rotate-1 z-10 px-4 py-1.5 rounded-full bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-[10px] sm:text-xs font-black uppercase tracking-wider text-black">
                    {founder.badgeRole}
                  </div>
                </div>

                {/* Bottom White Box (Name, Social Pills, Verified Facts) */}
                <div className="pt-8 pb-8 px-6 sm:px-8 space-y-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="text-2xl sm:text-3xl font-black font-display text-black uppercase tracking-tight">
                      {founder.name}
                    </h3>

                    <div className="flex flex-wrap items-center gap-2.5">
                      {founder.socials.instagram && (
                        <a
                          href={founder.socials.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor="hover"
                          className="px-3.5 py-1.5 rounded-full border border-black text-xs font-black text-black hover:bg-black hover:text-white transition-colors inline-flex items-center gap-1.5 uppercase"
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
                          className="px-3.5 py-1.5 rounded-full border border-black text-xs font-black text-black hover:bg-black hover:text-white transition-colors inline-flex items-center gap-1.5 uppercase"
                        >
                          <LinkedinIcon />
                          <span>LINKEDIN ↗</span>
                        </a>
                      )}
                      {founder.socials.github && (
                        <a
                          href={founder.socials.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor="hover"
                          className="px-3.5 py-1.5 rounded-full border border-black text-xs font-black text-black hover:bg-black hover:text-white transition-colors inline-flex items-center gap-1.5 uppercase"
                        >
                          <GithubIcon />
                          <span>GITHUB ↗</span>
                        </a>
                      )}
                    </div>

                    <div className="pt-2 space-y-2">
                      <div className="text-[11px] font-mono font-black uppercase tracking-widest text-[#FF4500]">
                        100% VERIFIED FACTS
                      </div>
                      <div className="border-t border-slate-200" />
                      <ul className="space-y-2.5 text-xs font-mono font-bold text-slate-900 uppercase tracking-tight pt-1">
                        {founder.verifiedFacts.map((fact, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 leading-snug">
                            <span className="text-[#FF4500] font-black text-sm select-none shrink-0">*</span>
                            <span>{fact}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Studio Values */}
        <div className="p-10 rounded-3xl bg-white border border-[var(--border)] space-y-8 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-black font-display text-center text-[var(--text-primary)]">Core Studio Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-[var(--surface-secondary)] border border-[var(--border)] space-y-2">
              <h3 className="text-lg font-black font-display text-[#6a57fa]">Speed as a Feature</h3>
              <p className="text-xs text-[var(--text-secondary)] font-medium">Fast software and rapid product iteration outpace complex enterprise inertia.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[var(--surface-secondary)] border border-[var(--border)] space-y-2">
              <h3 className="text-lg font-black font-display text-[#6a57fa]">Zero Compromise UX</h3>
              <p className="text-xs text-[var(--text-secondary)] font-medium">Every interface we design is built to wow users and eliminate friction.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[var(--surface-secondary)] border border-[var(--border)] space-y-2">
              <h3 className="text-lg font-black font-display text-[#6a57fa]">Radical Transparency</h3>
              <p className="text-xs text-[var(--text-secondary)] font-medium">Direct access, clear pricing, and continuous live updates on your codebase.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6 pt-4">
          <h2 className="text-3xl sm:text-4xl font-black font-display text-[var(--text-primary)]">
            Want to build something extraordinary together?
          </h2>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#6a57fa] hover:bg-[#5844f7] text-white font-black text-xs uppercase tracking-wider transition-all shadow-xl hover:scale-105"
            >
              <span>Talk to Founders</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
