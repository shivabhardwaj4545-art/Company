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
    id: 'proj-1',
    name: 'Aurora Financial Portal',
    clientName: 'Aurora Global Corp',
    clientEmail: 'tech@aurorafinance.io',
    serviceCategory: 'Web Development',
    status: 'Active',
    budget: '$34,500',
    liveUrl: 'https://aurorafinance.io',
    domainName: 'aurorafinance.io',
    hostingProvider: 'Vercel Enterprise',
    domainExpiryDate: '2026-10-15', // Healthy
    hostingExpiryDate: '2026-11-01',
    notes: 'Primary corporate portal with custom analytics dashboard.',
    customFields: [
      { id: 'cf-1', key: 'Tech Stack', value: 'Next.js 14, Tailwind CSS, PostgreSQL' },
      { id: 'cf-2', key: 'SLA Support', value: '24/7 Dedicated Support' },
    ],
    createdAt: '2025-08-12',
  },
  {
    id: 'proj-2',
    name: 'Synapse AI Enterprise',
    clientName: 'Synapse Logistics',
    clientEmail: 'ops@synapse-ai.com',
    serviceCategory: 'AI Automation',
    status: 'In Development',
    budget: '$48,000',
    liveUrl: 'https://synapse-ai.com',
    domainName: 'synapse-ai.com',
    hostingProvider: 'AWS Cloudfront / EC2',
    domainExpiryDate: '2026-10-02', // Expiring in ~10 days
    hostingExpiryDate: '2026-09-30', // Expiring in ~8 days (CRITICAL)
    notes: 'AI document parser & automated workflow engine.',
    customFields: [
      { id: 'cf-3', key: 'API Endpoint', value: 'https://api.synapse-ai.com/v1' },
      { id: 'cf-4', key: 'Model', value: 'Custom Fine-Tuned LLM' },
    ],
    createdAt: '2025-11-04',
  },
  {
    id: 'proj-3',
    name: 'NeuralPay Checkout Suite',
    clientName: 'NeuralPay Inc',
    clientEmail: 'admin@neuralpay.net',
    serviceCategory: 'Web Development',
    status: 'Active',
    budget: '$28,000',
    liveUrl: 'https://neuralpay.net',
    domainName: 'neuralpay.net',
    hostingProvider: 'Cloudflare Pages',
    domainExpiryDate: '2026-10-10', // Expiring in ~18 days (WARNING)
    hostingExpiryDate: '2027-03-15',
    notes: 'Decentralized crypto & fiat instant checkout gateway.',
    customFields: [
      { id: 'cf-5', key: 'Webhook Status', value: 'Operational' },
    ],
    createdAt: '2026-01-18',
  },
  {
    id: 'proj-4',
    name: 'Apex Global Logistics',
    clientName: 'Apex Transport Co.',
    clientEmail: 'contact@apexgloballogistics.org',
    serviceCategory: 'Branding',
    status: 'Pending Renewal',
    budget: '$18,500',
    liveUrl: 'https://apexgloballogistics.org',
    domainName: 'apexgloballogistics.org',
    hostingProvider: 'Netlify Pro',
    domainExpiryDate: '2026-09-27', // Expiring in 5 days (URGENT ALERT)
    hostingExpiryDate: '2026-09-28', // Expiring in 6 days
    notes: 'Brand guidelines, 3D asset library, and responsive marketing web app.',
    customFields: [
      { id: 'cf-6', key: 'Brand Manual', value: 'v2.4 Final Exported' },
    ],
    createdAt: '2025-06-10',
  },
  {
    id: 'proj-5',
    name: 'Vortex Quantum Cloud',
    clientName: 'Vortex Labs',
    clientEmail: 'info@vortexquantum.dev',
    serviceCategory: 'Full Digital Package',
    status: 'Completed',
    budget: '$62,000',
    liveUrl: 'https://vortexquantum.dev',
    domainName: 'vortexquantum.dev',
    hostingProvider: 'Vercel Pro',
    domainExpiryDate: '2027-05-20',
    hostingExpiryDate: '2027-05-20',
    notes: 'Quantum computing simulator and developer docs portal.',
    customFields: [],
    createdAt: '2025-03-22',
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
  return { label: `Healthy (${daysLeft} days)`, color: 'bg-[#a3e635]/10 text-[#a3e635] border-[#a3e635]/30' };
}
