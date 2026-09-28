import Link from 'next/link';
import { ArrowUpRight, Users, Target, Compass, Globe, ExternalLink } from 'lucide-react';
import foundersData from '@/content/founders.json';

export const metadata = {
  title: 'About Us | AiKodX Studio Founders & Mission',
  description: 'Learn about AiKodX Studio, our founders Shivam Bharadwaj & team, and our mission to build high-performance web products and AI solutions.',
};

export default function AboutPage() {
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

        {/* Leadership Showcase (Images Removed) */}
        <div className="space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-black font-display text-[var(--text-primary)]">Meet the Leadership</h2>
            <p className="text-[var(--text-secondary)] text-sm font-medium">The builders and engineering minds driving AiKodX Studio forward.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {foundersData.map((founder) => (
              <div 
                key={founder.id}
                className="p-8 rounded-3xl bg-white border border-[var(--border)] hover:border-[#6a57fa] transition-all duration-300 space-y-6 flex flex-col justify-between shadow-sm hover:shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    {/* Clean Initials Avatar Badge (No broken images) */}
                    <div className="w-16 h-16 rounded-2xl bg-[#6a57fa] text-white flex items-center justify-center text-2xl font-black font-display shadow-md">
                      {founder.initials}
                    </div>
                    <div>
                      <h3 className="text-xl font-black font-display text-[var(--text-primary)]">{founder.name}</h3>
                      <p className="text-xs font-mono font-bold text-[#6a57fa] uppercase tracking-wider">{founder.role}</p>
                    </div>
                  </div>

                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed font-medium">
                    {founder.bio}
                  </p>
                </div>

                <div className="border-t border-[var(--border)] pt-4 flex items-center justify-between">
                  <span className="text-xs text-[var(--text-secondary)] font-mono font-semibold">AiKodX Executive Board</span>
                  <div className="flex items-center gap-3">
                    {founder.socials.linkedin && (
                      <a href={founder.socials.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-xl border border-[var(--border)] bg-[var(--surface-secondary)] text-[#6a57fa] hover:bg-[#6a57fa] hover:text-white transition-all flex items-center gap-1.5 text-xs font-mono font-bold">
                        <Globe className="w-3.5 h-3.5" />
                        <span>LinkedIn</span>
                      </a>
                    )}
                    {founder.socials.github && (
                      <a href={founder.socials.github} target="_blank" rel="noreferrer" className="p-2 rounded-xl border border-[var(--border)] bg-[var(--surface-secondary)] text-[#6a57fa] hover:bg-[#6a57fa] hover:text-white transition-all flex items-center gap-1.5 text-xs font-mono font-bold">
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                    )}
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
