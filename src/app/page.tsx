'use client';

import { HeroSection } from '@/components/sections/HeroSection';
import { WhatWeDoSection } from '@/components/sections/WhatWeDoSection';
import { WorkSection } from '@/components/sections/WorkSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { TrustBar } from '@/components/sections/TrustBar';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { BlogSection } from '@/components/sections/BlogSection';
import { FoundersSection } from '@/components/sections/FoundersSection';

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <HeroSection />

      {/* What We Do Section (Scratch-to-reveal) */}
      <WhatWeDoSection />

      {/* Client Work & Case Studies */}
      <WorkSection />

      {/* Social Proof & Testimonials Scroller */}
      <TestimonialsSection />

      {/* Infinite Client Logo Trust Marquee */}
      <TrustBar />

      {/* Differentiators / Why Us */}
      <WhyUsSection />

      {/* Blog & Articles Section */}
      <BlogSection />

      {/* Frequently Asked Questions */}
      <FAQSection />

      {/* Team / Founders Section */}
      <FoundersSection />
    </div>
  );
}
