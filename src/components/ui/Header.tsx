'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, ArrowUpRight, Zap } from 'lucide-react';

interface HeaderProps {
  onOpenModal: () => void;
}

export function Header({ onOpenModal }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Work', href: '#work' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'About', href: '#founders' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-[var(--bg)]/95 backdrop-blur-md border-b-2 border-black shadow-md'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - KodX */}
        <Link href="/" className="flex items-center gap-2.5 group" data-cursor="hover">
          <div className="w-10 h-10 rounded-xl bg-[#a3e635] text-black flex items-center justify-center font-black text-xl border-2 border-black shadow-[2px_2px_0px_#000] group-hover:scale-105 transition-transform">
            <Zap className="w-5 h-5 fill-black" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black text-2xl tracking-tight text-[var(--text-primary)] uppercase">
              KodX<span className="text-[#a3e635]">.</span>
            </span>
            <span className="text-[10px] tracking-widest text-[var(--text-secondary)] uppercase -mt-1 font-bold">
              Digital Studio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              data-cursor="hover"
              className="text-sm font-extrabold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors relative py-1 uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions: Theme Toggle + Start a Project CTA */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={onOpenModal}
            type="button"
            data-cursor="hover"
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#a3e635] text-black text-xs font-black shadow-[3px_3px_0px_#000] border-2 border-black hover:bg-[#b5f540] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all uppercase tracking-wider"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="p-2 rounded-xl border-2 border-black text-[var(--text-primary)] bg-[var(--surface)] shadow-[2px_2px_0px_#000]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b-2 border-black bg-[var(--surface)] px-4 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-black text-[var(--text-primary)] py-1 uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t-2 border-black">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal();
              }}
              className="w-full py-3 rounded-full bg-[#a3e635] text-black text-center font-black text-sm uppercase tracking-wider shadow-[3px_3px_0px_#000] border-2 border-black"
            >
              Start a Project
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
