'use client';

import { useState } from 'react';
import { Header } from '@/components/ui/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { WhatWeDoSection } from '@/components/sections/WhatWeDoSection';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { WorkSection } from '@/components/sections/WorkSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { TrustBar } from '@/components/sections/TrustBar';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { FoundersSection } from '@/components/sections/FoundersSection';
import { Footer } from '@/components/ui/Footer';
import { ProjectModal } from '@/components/ui/ProjectModal';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)] relative">
      {/* Sticky Header */}
      <Header onOpenModal={handleOpenModal} />

      {/* Hero Section */}
      <HeroSection onOpenModal={handleOpenModal} />

      {/* What We Do Section (Scratch-to-reveal) */}
      <WhatWeDoSection />

      {/* In-House Products Section */}
      <ProductsSection />

      {/* Client Work & Case Studies */}
      <WorkSection />

      {/* Social Proof & Testimonials Scroller */}
      <TestimonialsSection />

      {/* Infinite Client Logo Trust Marquee */}
      <TrustBar />

      {/* Differentiators / Why Us */}
      <WhyUsSection />

      {/* Frequently Asked Questions */}
      <FAQSection />

      {/* Team / Founders Section */}
      <FoundersSection />

      {/* Footer & Final Call to Action */}
      <Footer onOpenModal={handleOpenModal} />

      {/* 4-Step Project Inquiry Lead Modal */}
      <ProjectModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </main>
  );
}
