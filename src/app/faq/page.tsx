import Link from 'next/link';
import { ArrowUpRight, HelpCircle, MessageSquare } from 'lucide-react';
import faqData from '@/content/faqs.json';

export const metadata = {
  title: 'Frequently Asked Questions | AiKodX Studio',
  description: 'Find answers to common questions regarding AiKodX development timelines, project scoping, IP ownership, and AI integration.',
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)] pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 right-1/3 w-[600px] h-[600px] bg-[#6a57fa]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-16">
        
        {/* Page Hero Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[var(--border)] text-[#6a57fa] text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-[#6a57fa]" />
            <span>Questions &amp; Answers</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight leading-tight text-[var(--text-primary)]">
            Everything You Need <br />
            <span className="text-[#6a57fa]">
              To Know.
            </span>
          </h1>
          <p className="text-[var(--text-secondary)] text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            Got questions about project scoping, pricing models, source code ownership, or AI capabilities? We have answers.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqData.map((item, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-3xl bg-white border border-[var(--border)] space-y-4 hover:border-[#6a57fa] transition-colors shadow-sm"
            >
              <h3 className="text-xl sm:text-2xl font-black font-display text-[var(--text-primary)] flex items-center justify-between gap-4">
                <span>{item.question}</span>
                <span className="w-8 h-8 rounded-full bg-[var(--surface-secondary)] border border-[var(--border)] flex items-center justify-center text-[#6a57fa] shrink-0 text-sm font-mono font-bold">
                  0{idx + 1}
                </span>
              </h3>
              <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed font-medium pt-2 border-t border-[var(--border)]">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Support CTA */}
        <div className="p-10 rounded-3xl bg-white border border-[var(--border)] text-center space-y-6 shadow-lg">
          <h2 className="text-3xl font-black font-display text-[var(--text-primary)]">
            Have a question not answered here?
          </h2>
          <p className="text-[var(--text-secondary)] text-sm font-medium">
            Contact our founders directly or send your project details through our brief form.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#6a57fa] hover:bg-[#5844f7] text-white font-black text-xs uppercase tracking-wider transition-all shadow-xl hover:scale-105"
            >
              <span>Submit Project Brief</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/918445178177?text=Hi%20AiKodX%20Studio!%20I%20have%20a%20question%20regarding..."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs uppercase tracking-wider transition-all shadow-xl hover:scale-105"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us Directly</span>
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
