'use client';

import { useState } from 'react';
import faqsData from '@/content/faqs.json';
import { FAQItem } from '@/types/content';
import { HelpCircle, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function FAQSection() {
  const faqs = faqsData as FAQItem[];
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-[var(--border)]">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="text-xs font-black tracking-widest text-[#6a57fa] uppercase inline-flex items-center gap-2 mb-2">
          <HelpCircle className="w-4 h-4 text-[#6a57fa]" /> GOT QUESTIONS?
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[var(--text-primary)]">
          Frequently Asked Queries<span className="text-[#6a57fa]">.</span>
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-3 max-w-xl mx-auto">
          Everything you need to know about our process, timelines, deliverables, and partnership model.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`card-popout rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'border-[var(--accent)] bg-[var(--surface)] shadow-lg shadow-[var(--accent-glow)]'
                  : 'border-[var(--border)] bg-[var(--surface)]/50'
              }`}
            >
              {/* Gradient Dotted Wave Background */}
              <div className="bg-dotted-gradient" />
              <button
                onClick={() => toggleFAQ(faq.id)}
                type="button"
                data-cursor="hover"
                className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="text-base sm:text-lg font-bold font-display text-[var(--text-primary)]">
                  {faq.question}
                </span>

                {/* "+" rotates to "×" (45deg rotation) on expand */}
                <div
                  className={`p-2 rounded-full border transition-all duration-300 shrink-0 ${
                    isOpen
                      ? 'bg-[var(--accent)] text-white border-[var(--accent)] rotate-45'
                      : 'border-[var(--border)] text-[var(--text-secondary)] rotate-0'
                  }`}
                >
                  <Plus className="w-5 h-5" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 text-sm text-[var(--text-secondary)] leading-relaxed border-t border-[var(--border)]/50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
