'use client';

import Link from 'next/link';
import { ArrowUpRight, Zap, Heart } from 'lucide-react';

interface FooterProps {
  onOpenModal: () => void;
}

export function Footer({ onOpenModal }: FooterProps) {
  return (
    <footer className="border-t-2 border-black bg-[var(--surface)] pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--accent)]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Large Final CTA Banner */}
        <div className="rounded-3xl border-2 border-black bg-[var(--bg)] p-8 sm:p-14 mb-16 text-center relative overflow-hidden shadow-[6px_6px_0px_#000]">
          <div className="max-w-3xl mx-auto">
            <span className="text-xs font-black tracking-widest text-[#a3e635] uppercase mb-3 inline-block">
              READY TO SCALE YOUR BRAND?
            </span>
            <h2 className="text-4xl sm:text-6xl font-black font-display text-[var(--text-primary)] leading-tight mb-6 uppercase">
              Let's build something extraordinary together<span className="text-[#a3e635]">.</span>
            </h2>
            <p className="text-sm sm:text-lg text-[var(--text-secondary)] mb-8 max-w-xl mx-auto font-medium">
              Book a call or complete our quick 4-step project inquiry to get a detailed proposal &amp; architecture plan within 24 hours.
            </p>
            <button
              onClick={onOpenModal}
              type="button"
              data-cursor="hover"
              className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[#a3e635] text-black text-base font-black shadow-[4px_4px_0px_#000] border-2 border-black hover:bg-[#b5f540] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all uppercase tracking-wide"
            >
              <span>Start a Project Today</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Footer Navigation & Brand Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b-2 border-black">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2" data-cursor="hover">
              <div className="w-9 h-9 rounded-xl bg-[#a3e635] text-black flex items-center justify-center font-black text-base border-2 border-black shadow-[2px_2px_0px_#000]">
                <Zap className="w-5 h-5 fill-black" />
              </div>
              <span className="font-display font-black text-2xl tracking-tight text-[var(--text-primary)] uppercase">
                KodX<span className="text-[#a3e635]">.</span>
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
              <li><Link href="/services/web-development" className="hover:text-[#a3e635] transition-colors">Web Development</Link></li>
              <li><Link href="/services/branding-identity" className="hover:text-[#a3e635] transition-colors">Branding &amp; Identity</Link></li>
              <li><Link href="/services/ai-automation" className="hover:text-[#a3e635] transition-colors">AI Automation</Link></li>
            </ul>
          </div>

          {/* In-House Products */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-[var(--text-primary)] mb-4 font-display">
              Products
            </h4>
            <ul className="space-y-2.5 text-xs text-[var(--text-secondary)] font-medium">
              <li><Link href="/products/nexus-flow" className="hover:text-[#a3e635] transition-colors">NexusFlow AI</Link></li>
              <li><Link href="/products/canvas-craft" className="hover:text-[#a3e635] transition-colors">CanvasCraft Studio</Link></li>
              <li><Link href="/products/hyper-metric" className="hover:text-[#a3e635] transition-colors">HyperMetric Analytics</Link></li>
            </ul>
          </div>

          {/* Contact / Office */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-[var(--text-primary)] mb-4 font-display">
              Connect
            </h4>
            <ul className="space-y-2.5 text-xs text-[var(--text-secondary)] font-medium">
              <li>hello@kodx.studio</li>
              <li><strong>Direct Phone:</strong> +91 8445178177</li>
              <li>San Francisco, CA &amp; London, UK</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--text-secondary)] font-semibold gap-4">
          <div>
            © {new Date().getFullYear()} KodX Studio. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#a3e635] fill-[#a3e635] inline" />
            <span>using Next.js &amp; KodX Design System.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
