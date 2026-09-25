export interface ServiceItem {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  icon: string;
  color: 'blue' | 'purple' | 'emerald';
  features: { title: string; desc: string }[];
  deliverables: string[];
}

export interface ProductItem {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  badge: string;
  metrics: { label: string; value: string }[];
  liveUrl?: string;
  techStack: string[];
  keyFeatures: string[];
}

export interface ProjectItem {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  cover: string;
  summary: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  gallery: string[];
  techStack: string[];
  liveUrl?: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  clientHandle: string;
  role: string;
  company: string;
  avatar: string;
  platform: 'Instagram' | 'WhatsApp' | 'LinkedIn' | 'Twitter';
  followers?: string;
  message: string;
  metricHighlight?: string;
  verified: boolean;
}

export interface FounderItem {
  id: string;
  name: string;
  role: string;
  initials: string;
  bio: string;
  avatar: string;
  avatarStyle?: React.CSSProperties;
  socials: { twitter?: string; linkedin?: string; github?: string };
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
