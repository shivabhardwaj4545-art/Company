'use client';

import Link from 'next/link';
import { ArrowUpRight, Zap, Heart } from 'lucide-react';

interface FooterProps {
  onOpenModal: () => void;
}

export function Footer({ onOpenModal }: FooterProps) {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--accent)]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Large Final CTA Banner */}
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg)] p-8 sm:p-14 mb-16 text-center relative overflow-hidden shadow-xl">
          <div className="max-w-3xl mx-auto">
            <span className="text-xs font-black tracking-widest text-[#6a57fa] uppercase mb-3 inline-block">
              READY TO SCALE YOUR BRAND?
            </span>
            <h2 className="text-4xl sm:text-6xl font-black font-display text-[var(--text-primary)] leading-tight mb-6 uppercase">
              Let's build something extraordinary together<span className="text-[#6a57fa]">.</span>
            </h2>
            <p className="text-sm sm:text-lg text-[var(--text-secondary)] mb-8 max-w-xl mx-auto font-medium">
              Book a call or complete our quick 4-step project inquiry to get a detailed proposal &amp; architecture plan within 24 hours.
            </p>
            <button
              onClick={onOpenModal}
              type="button"
              data-cursor="hover"
              className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[#6a57fa] text-white text-base font-black shadow-md hover:shadow-lg hover:bg-[#5844f7] transition-all uppercase tracking-wide"
            >
              <span>Start a Project Today</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Footer Navigation & Brand Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[var(--border)]">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex flex-col" data-cursor="hover">
              <span className="font-display font-black text-2xl tracking-tight">
                <span className="text-[var(--text-primary)]">ai</span>
                <span className="text-[#6a57fa]">KODX</span>
                <span className="text-[#6a57fa]">.</span>
              </span>
              <span className="text-[10px] tracking-widest text-[var(--text-secondary)] uppercase font-bold -mt-1">
                smarter by design
              </span>
            </Link>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-medium">
              High-performance web apps, iconic branding systems, and autonomous AI lead engines.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-[var(--text-primary)] mb-4 font-display">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[var(--text-secondary)] font-medium">
              <li><Link href="/services/web-development" className="hover:text-[#857df3] transition-colors">Web Development</Link></li>
              <li><Link href="/services/branding-identity" className="hover:text-[#857df3] transition-colors">Branding &amp; Identity</Link></li>
              <li><Link href="/services/ai-automation" className="hover:text-[#857df3] transition-colors">AI Automation</Link></li>
            </ul>
          </div>

          {/* In-House Products */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-[var(--text-primary)] mb-4 font-display">
              Products
            </h4>
            <ul className="space-y-2.5 text-xs text-[var(--text-secondary)] font-medium">
              <li><Link href="/products/ezrestero" className="hover:text-[#857df3] transition-colors">EZ-Restaurant SaaS</Link></li>
              <li><Link href="/products/msg-platform" className="hover:text-[#857df3] transition-colors">MSG (Ethnic Fashion)</Link></li>
              <li><Link href="/products/ai-studio" className="hover:text-[#857df3] transition-colors">AI Studio (Gemini 2.0)</Link></li>
              <li><Link href="/products/readygo" className="hover:text-[#857df3] transition-colors">ReadyGo Ride Sharing</Link></li>
              <li><Link href="/products/dropizi-courier" className="hover:text-[#857df3] transition-colors">Dropizi Courier</Link></li>
            </ul>
          </div>

          {/* Contact / Office */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-[var(--text-primary)] mb-4 font-display">
              Connect
            </h4>
            <ul className="space-y-2.5 text-xs text-[var(--text-secondary)] font-medium">
              <li>ssharma636076@gmail.com</li>
              <li><strong>Direct Phone:</strong> +91 8445178177</li>
              <li>Dehradun, Uttarakhand, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--text-secondary)] font-semibold gap-4">
          <div>
            © {new Date().getFullYear()} AiKodX. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
