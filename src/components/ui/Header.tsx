'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Zap } from 'lucide-react';

import { Logo } from './Logo';

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
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/work' },
    { name: 'Why Us', href: '/why-us' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[var(--bg)]/95 backdrop-blur-md border-b border-[var(--border)] ${
        scrolled
          ? 'py-3.5 shadow-md'
          : 'py-4 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - aiKODX */}
        <Link href="/" className="flex items-center gap-2.5 group select-none" data-cursor="hover">
          <Logo theme="auto" size="md" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              data-cursor="hover"
              className="text-sm font-extrabold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors relative py-1 uppercase tracking-wider"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Actions: Start a Project CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenModal}
            type="button"
            data-cursor="hover"
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#6a57fa] text-white text-xs font-black shadow-md hover:shadow-lg hover:bg-[#5844f7] transition-all uppercase tracking-wider"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="p-2 rounded-xl border border-[var(--border)] text-[var(--text-primary)] bg-[var(--surface)] shadow-sm"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[var(--border)] bg-[var(--surface)] px-4 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-black text-[var(--text-primary)] py-1 uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 border-t border-[var(--border)]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal();
              }}
              className="w-full py-3 rounded-full bg-[#6a57fa] text-white text-center font-black text-sm uppercase tracking-wider shadow-md hover:bg-[#5844f7]"
            >
              Start a Project
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
