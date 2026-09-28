import Link from 'next/link';
import { ArrowUpRight, BookOpen, Clock, Tag, Sparkles, User } from 'lucide-react';

export const metadata = {
  title: 'Blog & Engineering Insights | AiKodX Studio',
  description: 'Deep dives on Next.js 16, AI Automation, Autonomous Agents, and Enterprise Product Architecture from AiKodX Studio engineers.',
};

export default function BlogPage() {
  const articles = [
    {
      slug: 'how-ai-automation-reduces-operational-costs',
      title: 'How Autonomous AI Agents Reduce Operational Costs by 40%',
      excerpt: 'Discover how modern enterprises integrate custom LLM agents and automated document processing pipelines directly into their core software.',
      date: 'Sep 24, 2026',
      readTime: '6 min read',
      category: 'AI & Automation',
      author: 'Shivam Bharadwaj',
    },
    {
      slug: 'nextjs-16-turbopack-performance-optimization',
      title: 'Building Sub-Second Web Platforms with Next.js 16 & Turbopack',
      excerpt: 'A comprehensive technical blueprint on server components, static route generation, and dynamic hydration strategies for maximum conversion.',
      date: 'Sep 18, 2026',
      readTime: '8 min read',
      category: 'Engineering',
      author: 'AiKodX Tech Team',
    },
    {
      slug: 'design-systems-that-scale-from-startup-to-unicorn',
      title: 'Designing Component Systems that Scale from MVP to Unicorn',
      excerpt: 'Why hardcoding CSS utility classes creates tech debt, and how structured token-based design systems streamline UI consistency.',
      date: 'Sep 10, 2026',
      readTime: '5 min read',
      category: 'UI/UX Design',
      author: 'Design Guild Lead',
    },
    {
      slug: 'securing-custom-llm-rag-pipelines',
      title: 'Securing RAG Pipelines & Proprietary Data in Custom AI Agents',
      excerpt: 'Best practices for vector database encryption, tenant isolation, and audit logging when deploying enterprise LLM workflows.',
      date: 'Aug 29, 2026',
      readTime: '9 min read',
      category: 'AI & Security',
      author: 'Shivam Bharadwaj',
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)] pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#6a57fa]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[var(--border)] text-[#6a57fa] text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-[#6a57fa]" />
            <span>Studio Insights &amp; Articles</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight leading-tight text-[var(--text-primary)]">
            Engineering Insights &amp; <br />
            <span className="text-[#6a57fa]">
              AI Trends.
            </span>
          </h1>
          <p className="text-[var(--text-secondary)] text-base sm:text-lg font-medium leading-relaxed">
            Practical knowledge, architecture blueprints, and AI implementation guides written directly by our builders.
          </p>
        </div>

        {/* Featured Article Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[var(--border)] hover:border-[#6a57fa] transition-all duration-300 group space-y-6 shadow-sm hover:shadow-xl">
          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="px-3 py-1 rounded-full bg-[#6a57fa] text-white font-bold uppercase tracking-wider">
              Featured Story
            </span>
            <span className="text-[var(--text-secondary)] font-semibold">{articles[0].date}</span>
            <span className="text-slate-400">•</span>
            <span className="text-[var(--text-secondary)] font-semibold">{articles[0].readTime}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black font-display text-[var(--text-primary)] group-hover:text-[#6a57fa] transition-colors leading-tight">
            {articles[0].title}
          </h2>

          <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed font-medium max-w-3xl">
            {articles[0].excerpt}
          </p>

          <div className="pt-2 flex items-center justify-between border-t border-[var(--border)]">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[var(--text-secondary)]">
              <User className="w-3.5 h-3.5 text-[#6a57fa]" />
              <span>By {articles[0].author}</span>
            </div>

            <Link
              href={`/contact`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#6a57fa] hover:bg-[#5844f7] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md hover:scale-105"
            >
              <span>Read Article</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.slice(1).map((art, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-3xl bg-white border border-[var(--border)] hover:border-[#6a57fa] transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-sm hover:shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-0.5 rounded-full bg-[var(--surface-secondary)] border border-[var(--border)] text-[#6a57fa] font-bold">
                    {art.category}
                  </span>
                  <span className="text-[var(--text-secondary)] font-semibold">{art.readTime}</span>
                </div>

                <h3 className="text-xl font-black font-display text-[var(--text-primary)] group-hover:text-[#6a57fa] transition-colors leading-snug">
                  {art.title}
                </h3>

                <p className="text-[var(--text-secondary)] text-xs sm:text-sm leading-relaxed font-medium">
                  {art.excerpt}
                </p>
              </div>

              <div className="border-t border-[var(--border)] pt-4 flex items-center justify-between text-xs font-mono font-semibold text-[var(--text-secondary)]">
                <span>{art.date}</span>
                <Link href="/contact" className="hover:text-[#6a57fa] transition-colors flex items-center gap-1 font-bold text-[#6a57fa]">
                  <span>Read</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="p-10 rounded-3xl bg-white border border-[var(--border)] text-center space-y-6 shadow-sm">
          <h2 className="text-3xl sm:text-4xl font-black font-display text-[var(--text-primary)]">
            Have a project idea or technical inquiry?
          </h2>
          <p className="text-[var(--text-secondary)] text-sm font-medium max-w-xl mx-auto">
            Discuss your app architecture or AI automation workflow directly with our lead engineers.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#6a57fa] hover:bg-[#5844f7] text-white font-black text-xs uppercase tracking-wider transition-all shadow-xl hover:scale-105"
            >
              <span>Schedule Strategy Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
