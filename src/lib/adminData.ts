export interface CustomField {
  id: string;
  key: string;
  value: string;
}

export interface ClientProject {
  id: string;
  name: string;
  clientName: string;
  clientEmail: string;
  serviceCategory: 'Web Development' | 'Branding' | 'AI Automation' | 'Full Digital Package';
  status: 'Active' | 'In Development' | 'Pending Renewal' | 'Completed' | 'On Hold';
  budget: string;
  liveUrl: string;
  domainName: string;
  hostingProvider: string;
  domainExpiryDate: string; // YYYY-MM-DD
  hostingExpiryDate: string; // YYYY-MM-DD
  notes: string;
  customFields: CustomField[];
  createdAt: string;
}

export interface ClientRequest {
  id: string;
  clientName: string;
  clientEmail: string;
  serviceRequested: string;
  estimatedBudget: string;
  message: string;
  status: 'Pending Review' | 'In Discussion' | 'Approved' | 'Archived';
  submittedAt: string;
}

export interface ActivityLog {
  id: string;
  title: string;
  description: string;
  category: 'Project' | 'Domain' | 'Hosting' | 'Lead' | 'System';
  timestamp: string;
  severity: 'info' | 'warning' | 'success' | 'alert';
}

export const initialProjects: ClientProject[] = [
  {
    id: 'proj-ezrestero',
    name: 'EZ-Restaurant AI-Powered QR SaaS',
    clientName: 'EZRestro Hospitality Tech',
    clientEmail: 'contact@ezrestro.online',
    serviceCategory: 'Web Development',
    status: 'Active',
    budget: '$32,000',
    liveUrl: 'https://ezrestro.online/',
    domainName: 'ezrestro.online',
    hostingProvider: 'Render / Railway Monorepo',
    domainExpiryDate: '2027-08-15',
    hostingExpiryDate: '2027-08-15',
    notes: 'Scan. Order. Enjoy. AI-Powered QR Restaurant Management & KDS SaaS Platform.',
    customFields: [
      { id: 'cf-ez-1', key: 'POS Terminal Sync', value: 'WebSocket Realtime Active' },
      { id: 'cf-ez-2', key: 'Hosting Node', value: 'Ubuntu 24.04 LTS' },
    ],
    createdAt: '2026-02-10',
  },
  {
    id: 'proj-msg',
    name: 'MSG Ethnic Fashion OS',
    clientName: 'MSG Fashion House',
    clientEmail: 'contact@msg-53do.onrender.com',
    serviceCategory: 'Web Development',
    status: 'Active',
    budget: '$42,500',
    liveUrl: 'https://msg-53do.onrender.com/',
    domainName: 'msg-53do.onrender.com',
    hostingProvider: 'Render Cloud (SQLite WAL Engine)',
    domainExpiryDate: '2027-09-10',
    hostingExpiryDate: '2027-09-10',
    notes: 'Full-stack luxury ethnic wear storefront & Merchant Operating System with local reserve-in-store and real-time analytics.',
    customFields: [
      { id: 'cf-msg-1', key: 'E-Commerce Storefront', value: 'Headless Next.js + WhatsApp Checkout' },
    ],
    createdAt: '2026-03-01',
  },
  {
    id: 'proj-ai-studio',
    name: 'AI Studio (Gemini 2.0 Flash Tool)',
    clientName: 'AiKodX Innovation Labs',
    clientEmail: 'contact@ai-studio.onrender.com',
    serviceCategory: 'AI Automation',
    status: 'Active',
    budget: '$28,000',
    liveUrl: 'https://ai-tool-lac.vercel.app/',
    domainName: 'ai-tool-lac.vercel.app',
    hostingProvider: 'Vercel / Vite React 19 Engine',
    domainExpiryDate: '2027-12-01',
    hostingExpiryDate: '2027-12-01',
    notes: 'Accelerate Innovation with Gemini 2.0 Flash Powered Intelligence & Workspace.',
    customFields: [
      { id: 'cf-ai-1', key: 'LLM Model Pipeline', value: 'Google Gemini 2.0 Flash' },
      { id: 'cf-ai-2', key: 'UI Engine', value: 'React 19 + Vite 7 + Tailwind v4' },
    ],
    createdAt: '2026-03-15',
  },
  {
    id: 'proj-readygo',
    name: 'ReadyGo Ride Sharing & Hub Platform',
    clientName: 'ReadyGo Mobility Network',
    clientEmail: 'contact@shivasharma12.github.io',
    serviceCategory: 'Web Development',
    status: 'Active',
    budget: '$22,000',
    liveUrl: 'https://shivasharma12.github.io/readygo/',
    domainName: 'shivasharma12.github.io/readygo',
    hostingProvider: 'GitHub Pages & MySQL Cloud',
    domainExpiryDate: '2028-01-01',
    hostingExpiryDate: '2028-01-01',
    notes: 'Intercity Ride Sharing & 50km Proximity Hub Matching Platform.',
    customFields: [
      { id: 'cf-rg-1', key: 'Geofence Algorithm', value: '50km Radius Hub Constraint' },
      { id: 'cf-rg-2', key: 'Database System', value: 'MySQL (readygo DB)' },
    ],
    createdAt: '2026-03-20',
  },
  {
    id: 'proj-dropizi',
    name: 'Dropizi Courier & Logistics Engine',
    clientName: 'Dropizi Express Global Logistics',
    clientEmail: 'contact@courier-web-1.onrender.com',
    serviceCategory: 'Web Development',
    status: 'Active',
    budget: '$55,000',
    liveUrl: 'https://courier-web-1.onrender.com/',
    domainName: 'courier-web-1.onrender.com',
    hostingProvider: 'Render Cloud Deployment',
    domainExpiryDate: '2028-02-15',
    hostingExpiryDate: '2028-02-15',
    notes: 'Hub-Based Parcel Delivery & Dispatch Management SaaS System.',
    customFields: [
      { id: 'cf-drp-1', key: 'Hub Geofencing', value: '50km Proximity Routing Engine' },
      { id: 'cf-drp-2', key: 'Realtime Layer', value: 'Socket.IO WebSockets Active' },
    ],
    createdAt: '2026-03-22',
  },
];

export const initialRequests: ClientRequest[] = [
  {
    id: 'req-101',
    clientName: 'Kavita Sharma',
    clientEmail: 'kavita@nexus-healthcare.in',
    serviceRequested: 'AI Automation & Custom Web App',
    estimatedBudget: '$30,000 - $50,000',
    message: 'We need an automated patient intake pipeline and Next.js patient dashboard.',
    status: 'Pending Review',
    submittedAt: '2026-09-22 09:14 AM',
  },
  {
    id: 'req-102',
    clientName: 'Marcus Vance',
    clientEmail: 'marcus@vancecapital.co',
    serviceRequested: 'Branding & Web Development',
    estimatedBudget: '$20,000 - $35,000',
    message: 'Rebranding venture capital website with neo-brutalist studio aesthetic.',
    status: 'In Discussion',
    submittedAt: '2026-09-21 04:45 PM',
  },
  {
    id: 'req-103',
    clientName: 'Elena Rostova',
    clientEmail: 'elena@cyberpulse.io',
    serviceRequested: 'Full Digital Package',
    estimatedBudget: '$60,000+',
    message: 'Comprehensive launch strategy, brand guidelines, and high-frequency trading UI.',
    status: 'Pending Review',
    submittedAt: '2026-09-20 11:30 AM',
  },
];

export const initialActivityLogs: ActivityLog[] = [
  {
    id: 'act-1',
    title: 'Domain Expiration Warning',
    description: 'apexgloballogistics.org domain expires in 5 days (2026-09-27). Renewal required.',
    category: 'Domain',
    timestamp: '10 minutes ago',
    severity: 'alert',
  },
  {
    id: 'act-2',
    title: 'New Client Project Inquiry Received',
    description: 'Kavita Sharma submitted a new inquiry for AI Automation ($30k-$50k).',
    category: 'Lead',
    timestamp: '2 hours ago',
    severity: 'info',
  },
  {
    id: 'act-3',
    title: 'Project Custom Fields Updated',
    description: 'Aurora Financial Portal SLA Support parameters modified by Admin.',
    category: 'Project',
    timestamp: '5 hours ago',
    severity: 'success',
  },
  {
    id: 'act-4',
    title: 'Hosting Health Check Completed',
    description: 'Vercel, Cloudflare, and Netlify hosting servers verified 100% operational.',
    category: 'Hosting',
    timestamp: '1 day ago',
    severity: 'info',
  },
];

// Helper to calculate days remaining until expiry
export function getDaysUntilExpiry(expiryDateStr: string): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const expiry = new Date(expiryDateStr);
  expiry.setHours(0, 0, 0, 0);
  const diffTime = expiry.getTime() - today.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

export function getExpiryBadge(daysLeft: number) {
  if (daysLeft < 0) {
    return { label: `EXPIRED (${Math.abs(daysLeft)}d ago)`, color: 'bg-red-500/20 text-red-400 border-red-500/40' };
  }
  if (daysLeft <= 10) {
    return { label: `CRITICAL (${daysLeft} days left)`, color: 'bg-red-500/20 text-red-400 border-red-500/40 animate-pulse' };
  }
  if (daysLeft <= 30) {
    return { label: `Expiring Soon (${daysLeft} days)`, color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40' };
  }
  return { label: `Healthy (${daysLeft} days)`, color: 'bg-[#857df3]/10 text-[#857df3] border-[#857df3]/30' };
}
