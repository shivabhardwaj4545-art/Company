'use client';

import Link from 'next/link';
import { ArrowUpRight, Phone, Mail, MapPin, Sparkles } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onOpenModal?: () => void;
}

export function Footer({ onOpenModal }: FooterProps) {
  return (
    <footer 
      id="contact" 
      className="bg-[#0b0a16] text-white border-t border-[#7c6cf0]/20 rounded-t-[2.5rem] sm:rounded-t-[3.5rem] relative overflow-hidden pt-16 sm:pt-24 pb-8"
    >
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#6a57fa]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8777ff]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Navigation & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          
          {/* COLUMN 1: BRAND LOGO & CTA (5 Cols) */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="inline-block group select-none" data-cursor="hover">
              <Logo theme="dark" size="lg" />
            </Link>

            <div className="space-y-4 pt-2">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight leading-tight">
                Do you like <br />what you see?
              </h3>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                <button
                  onClick={() => {
                    if (onOpenModal) onOpenModal();
                    else if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('open-project-modal'));
                  }}
                  type="button"
                  data-cursor="hover"
                  className="px-7 py-3.5 rounded-full bg-white text-[#0b0a16] font-black text-xs uppercase tracking-wider hover:bg-slate-100 transition-all flex items-center gap-2 shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>Start a project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <div className="text-xs text-slate-400 font-medium">
                  <span className="font-bold text-white block">Scope-led proposals</span>
                  Built around your brief
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 2: EXPLORE NAVIGATION (3.5 Cols) */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-sm font-black tracking-widest text-[#b18cf5] uppercase font-mono block">
              EXPLORE
            </span>
            <ul className="space-y-3.5 text-sm font-semibold text-slate-200">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">Work</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/why-us" className="hover:text-white transition-colors">Why Choose Us</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Studio</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">FAQs</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: GET IN TOUCH (3.5 Cols) */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-sm font-black tracking-widest text-[#b18cf5] uppercase font-mono block">
              GET IN TOUCH
            </span>
            
            <div className="space-y-4 text-sm font-semibold text-slate-200">
              <a href="tel:+918445178177" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[#b18cf5] shrink-0" />
                <span>+91 8445178177</span>
              </a>

              <a href="mailto:ssharma636076@gmail.com" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[#b18cf5] shrink-0" />
                <span className="truncate">ssharma636076@gmail.com</span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-[#b18cf5] shrink-0 mt-0.5" />
                <span>AiKodX Studio<br />Dehradun, Uttarakhand, India</span>
              </div>

              <div className="pt-2">
                <span className="text-xs font-black text-[#b18cf5] tracking-widest uppercase font-mono block">
                  aikodx.com
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM UTILITY FOOTER BAR */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono font-medium gap-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span>© AiKodX Agency {new Date().getFullYear()}</span>
            <span>|</span>
            <span>Dehradun, Uttarakhand, India</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Web Development &amp; AI Studio</span>
            <span>|</span>
            <span>All Rights Reserved</span>
            <span>|</span>
            <Link href="/faq" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
