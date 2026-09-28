'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export interface ServiceItemData {
  num: string;
  tag: string;
  title: string;
  summary: string;
  deliverables: string[];
  slug?: string;
  linkHref?: string;
}

export const defaultServicesList: ServiceItemData[] = [
  {
    num: '01',
    tag: 'VIDEO',
    title: 'VIDEO EDITING & MOTION DESIGN',
    summary:
      'Post-production for campaigns, launches and everyday content — you supply the footage, we deliver the cut.',
    deliverables: [
      'Edit direction, structure and pacing',
      'Short-form reels, ads and social edits',
      'Brand films, explainers and launch videos',
      'Motion graphics, captions, sound design and colour',
    ],
    slug: 'video-editing-motion-design',
  },
  {
    num: '02',
    tag: 'BUILD',
    title: 'WEB & PRODUCT ENGINEERING',
    summary:
      'End-to-end application development, custom web platforms, mobile apps, and scalable software systems engineered for high performance and growth.',
    deliverables: [
      'Custom Next.js & React enterprise architecture',
      'End-to-end web & mobile application development',
      'Sub-second page load performance & technical SEO',
      'Scalable API integrations & custom admin dashboards',
    ],
    slug: 'web-development',
  },
  {
    num: '03',
    tag: 'BRAND',
    title: 'BRAND PRESENCE & SOCIAL SYSTEMS',
    summary:
      'Comprehensive brand strategy, visual direction, and cohesive design systems engineered for omni-channel presence.',
    deliverables: [
      'Omnichannel visual direction & brand strategy',
      'Interactive design systems & component libraries',
      'Social media content kits & brand templates',
      'Typography, color scales & asset guidelines',
    ],
    slug: 'brand-presence-social-systems',
  },
  {
    num: '04',
    tag: 'GROWTH',
    title: 'PERFORMANCE MARKETING',
    summary:
      'Data-driven growth campaigns, ad funnel architecture, and conversion rate optimization that lower CAC and increase LTV.',
    deliverables: [
      'Paid acquisition setup & creative ad testing',
      'High-converting landing page design & funnel build',
      'Analytics tracking, pixel setup & attribution',
      'Retargeting strategy & email marketing workflows',
    ],
    slug: 'performance-marketing',
  },
  {
    num: '05',
    tag: 'CONTENT',
    title: 'UGC REELS & CREATOR COLLABORATIONS',
    summary:
      'High-performing short-form video content, UGC reel concepts, and creator management for viral social reach.',
    deliverables: [
      'Creator sourcing & collaboration management',
      'UGC hook scripts & visual storyboard direction',
      'High-volume short-form reel editing for IG & TikTok',
      'Ad-variant generation for campaign scaling',
    ],
    slug: 'ugc-reels-creator-collaborations',
  },
  {
    num: '06',
    tag: 'DESIGN',
    title: 'LOGO & BRAND IDENTITY',
    summary: 'Distinct visual identities designed to work from an app icon to a storefront.',
    deliverables: [
      'Research and visual direction',
      'Logo system and responsive variations',
      'Colour, typography and supporting graphic language',
      'Usage guidelines and production-ready assets',
    ],
    slug: 'branding-identity',
  },
];

interface StackedServiceCardsProps {
  services?: ServiceItemData[];
  cards?: any[];
  className?: string;
}

export function StackedServiceCards({
  services = defaultServicesList,
  className = '',
}: StackedServiceCardsProps) {
  return (
    <>
      <style jsx global>{`
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip: rect(0 0 0 0);
        }
        .stack {
          --top: 85px;
          --offset: 18px;
          padding: 0 0 80px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .card {
          position: sticky;
          top: calc(var(--top) + var(--i) * var(--offset));
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 36px;
          align-items: start;
          min-height: 360px;
          margin-bottom: 24px;
          padding: 36px 44px;
          background: var(--surface, #fff);
          border: 1px solid var(--border, #b8c2ff);
          border-radius: 32px;
          box-shadow: 0 -10px 40px rgba(80, 80, 200, 0.08);
          overflow: hidden;
        }
        .card-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
        }
        .tag-badge {
          font: 700 12px/1.4 ui-monospace, monospace;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #6a57fa;
          background: rgba(106, 87, 250, 0.08);
          border: 1px solid rgba(106, 87, 250, 0.25);
          padding: 4px 14px;
          border-radius: 9999px;
        }
        .card-title {
          font-size: clamp(20px, 2.2vw, 30px);
          line-height: 1.15;
          margin: 6px 0 2px;
          font-family: var(--font-display, sans-serif);
          font-weight: 900;
          color: var(--text-primary, #000);
          text-transform: uppercase;
          letter-spacing: -0.02em;
        }
        .card-desc {
          font-size: 13px;
          line-height: 1.6;
          color: var(--text-secondary, #3b4566);
          margin-bottom: 12px;
          font-weight: 500;
          max-width: 480px;
        }
        .card-right {
          border-left: 1px solid var(--border, #b8c2ff);
          padding-left: 36px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .what-you-get-title {
          font: 800 11px/1.4 ui-monospace, monospace;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #6a57fa;
        }
        .deliverable-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          border-bottom: 1px solid var(--border, #b8c2ff);
          padding-bottom: 10px;
          font-size: 13px;
          font-weight: 600;
          color: var(--text-primary, #000);
          line-height: 1.35;
        }
        .deliverable-item:last-child {
          border-bottom: none;
        }
        .deliverable-num {
          font-family: ui-monospace, monospace;
          font-size: 12px;
          font-weight: 800;
          color: #6a57fa;
          margin-top: 1px;
          flex-shrink: 0;
        }
        @media (max-width: 768px) {
          .card {
            grid-template-columns: 1fr;
            padding: 24px;
            border-radius: 24px;
            min-height: 340px;
            gap: 24px;
            margin-bottom: 16px;
          }
          .card-right {
            border-left: none;
            padding-left: 0;
            padding-top: 16px;
            border-top: 1px solid var(--border, #b8c2ff);
          }
          .stack {
            --top: 20px;
            --offset: 14px;
          }
        }
        @media (prefers-reduced-motion: no-preference) {
          @supports (animation-timeline: view()) {
            .card {
              animation: shrink linear both;
              animation-timeline: view();
              animation-range: exit-crossing 0% exit-crossing 100%;
            }
            @keyframes shrink {
              to {
                transform: scale(0.95);
              }
            }
          }
        }
      `}</style>

      <section className={`stack ${className}`} aria-labelledby="services-title">
        <h1 id="services-title" className="sr-only">
          Our Services
        </h1>
        {services.map((svc, index) => (
          <article
            key={svc.num || index}
            className="card"
            style={{ '--i': index } as React.CSSProperties}
          >
            {/* Left Column: Service Info */}
            <div className="card-left">
              <span className="tag-badge">
                {svc.num} / {svc.tag || 'SERVICE'}
              </span>
              <Link href={svc.linkHref || (svc.slug ? `/services/${svc.slug}` : '/services')} className="group/title">
                <h2 className="card-title group-hover/title:text-[#6a57fa] transition-colors">{svc.title}</h2>
              </Link>
              <p className="card-desc">{svc.summary}</p>
              <div>
                <Link
                  href={svc.linkHref || (svc.slug ? `/services/${svc.slug}` : '/services')}
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#6a57fa] hover:bg-[#5844f7] text-white font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all hover:scale-105 group/btn"
                >
                  <span>View More Details</span>
                  <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-[#6a57fa] transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Column: Deliverables */}
            <div className="card-right">
              <span className="what-you-get-title">WHAT YOU GET</span>
              <div className="space-y-2.5">
                {svc.deliverables.map((item, itemIdx) => (
                  <div key={itemIdx} className="deliverable-item">
                    <span className="deliverable-num">0{itemIdx + 1}</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
