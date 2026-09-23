'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  ClientProject,
  ClientRequest,
  initialProjects,
  initialRequests,
  initialActivityLogs,
  getDaysUntilExpiry,
  getExpiryBadge,
} from '@/lib/adminData';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { DirectRedirectButton } from '@/components/admin/DirectRedirectButton';
import { ProjectEditModal } from '@/components/admin/ProjectEditModal';
import { AddProjectModal } from '@/components/admin/AddProjectModal';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const isAuth = localStorage.getItem('kodx_admin_auth') === 'true';
    if (!isAuth) {
      router.push('/kx-control-857df3/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const [activeTab, setActiveTab] = useState<'overview' | 'projects' | 'domains' | 'requests'>('overview');
  const [projects, setProjects] = useState<ClientProject[]>(initialProjects);
  const [requests, setRequests] = useState<ClientRequest[]>(initialRequests);
  const [editingProject, setEditingProject] = useState<ClientProject | null>(null);
  const [isAddProjectOpen, setIsAddProjectOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [domainFilter, setDomainFilter] = useState<'all' | 'expiring' | 'critical'>('all');

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-[#0B0C0E] flex items-center justify-center text-white font-mono text-xs">
        Verifying security clearance...
      </div>
    );
  }

  // Filter projects by search
  const filteredProjects = projects.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.domainName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.hostingProvider.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter domains by status
  const expiringDomains = projects.filter((p) => {
    const days = Math.min(getDaysUntilExpiry(p.domainExpiryDate), getDaysUntilExpiry(p.hostingExpiryDate));
    return days <= 30 && days >= 0;
  });

  const criticalDomains = projects.filter((p) => {
    const days = Math.min(getDaysUntilExpiry(p.domainExpiryDate), getDaysUntilExpiry(p.hostingExpiryDate));
    return days <= 10;
  });

  const domainTrackerItems = filteredProjects.filter((p) => {
    if (domainFilter === 'expiring') return expiringDomains.some((ep) => ep.id === p.id);
    if (domainFilter === 'critical') return criticalDomains.some((cp) => cp.id === p.id);
    return true;
  });

  // Project update handlers
  const handleSaveProject = (updatedProject: ClientProject) => {
    setProjects((prev) => prev.map((p) => (p.id === updatedProject.id ? updatedProject : p)));
    setEditingProject(null);
  };

  const handleAddProject = (newProj: ClientProject) => {
    setProjects((prev) => [newProj, ...prev]);
    setIsAddProjectOpen(false);
  };

  const handleRenewDomain = (id: string) => {
    setProjects((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          const dDate = new Date(p.domainExpiryDate);
          dDate.setFullYear(dDate.getFullYear() + 1);
          const hDate = new Date(p.hostingExpiryDate);
          hDate.setFullYear(hDate.getFullYear() + 1);

          return {
            ...p,
            domainExpiryDate: dDate.toISOString().split('T')[0],
            hostingExpiryDate: hDate.toISOString().split('T')[0],
            status: 'Active',
          };
        }
        return p;
      })
    );
  };

  const handleUpdateRequestStatus = (id: string, newStatus: ClientRequest['status']) => {
    setRequests((prev) => prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r)));
  };

  const handleConvertRequestToProject = (req: ClientRequest) => {
    const newProj: ClientProject = {
      id: `proj-${Date.now()}`,
      name: `${req.clientName}'s Project`,
      clientName: req.clientName,
      clientEmail: req.clientEmail,
      serviceCategory: 'Full Digital Package',
      status: 'Active',
      budget: req.estimatedBudget,
      liveUrl: 'https://preview.kodx.studio',
      domainName: `${req.clientName.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`,
      hostingProvider: 'Hostinger VPS (KVM 2)',
      domainExpiryDate: '2027-09-23',
      hostingExpiryDate: '2027-09-23',
      notes: `Converted from lead request: "${req.message}"`,
      customFields: [{ id: 'cf-auto', key: 'Lead Source', value: 'Inbound Portal Form' }],
      createdAt: new Date().toISOString().split('T')[0],
    };
    setProjects((prev) => [newProj, ...prev]);
    handleUpdateRequestStatus(req.id, 'Approved');
  };

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-white flex flex-col md:flex-row font-body relative overflow-x-hidden">
      {/* Background Accent Glow Blobs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-[#857df3]/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-[#9d97f0]/10 blur-[140px] pointer-events-none rounded-full" />

      {/* ADMIN SIDEBAR */}
      <AdminSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        pendingRequestsCount={requests.length}
        expiringDomainsCount={expiringDomains.length}
      />

      {/* MAIN CONTENT WORKSPACE */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto w-full">
        {/* HEADER BAR */}
        <AdminHeader
          onOpenAddProject={() => setIsAddProjectOpen(true)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* STATS OVERVIEW CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-[#141518] border border-[#222429] shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-mono text-gray-400">Total Active Projects</p>
              <h3 className="text-2xl font-bold font-display text-white mt-1">{projects.length}</h3>
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#857df3]/10 text-[#857df3] flex items-center justify-center font-bold">
              ⚡
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#141518] border border-[#222429] shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-mono text-gray-400">Expiring Domains (&lt;30d)</p>
              <h3 className="text-2xl font-bold font-display text-yellow-400 mt-1">{expiringDomains.length}</h3>
            </div>
            <div className="w-10 h-10 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center font-bold">
              ⏳
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#141518] border border-[#222429] shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-mono text-gray-400">Critical Hostings (&lt;10d)</p>
              <h3 className="text-2xl font-bold font-display text-red-400 mt-1">{criticalDomains.length}</h3>
            </div>
            <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center font-bold">
              🚨
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#141518] border border-[#222429] shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-mono text-gray-400">Client Lead Inquiries</p>
              <h3 className="text-2xl font-bold font-display text-emerald-400 mt-1">{requests.length}</h3>
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
              📩
            </div>
          </div>
        </div>

        {/* DYNAMIC TAB WORKSPACE */}
        <div className="pt-2">
          {/* TAB 1: OVERVIEW & HEALTH MONITOR */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Critical Alerts Banner */}
              {criticalDomains.length > 0 && (
                <div className="lg:col-span-12 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-300 flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-red-500 animate-ping" />
                    <div>
                      <h4 className="font-bold text-xs font-mono text-white">
                        CRITICAL DOMAIN / HOSTING RENEWAL REQUIRED ({criticalDomains.length} ITEMS)
                      </h4>
                      <p className="text-[11px] text-red-300">
                        {criticalDomains.map((d) => d.domainName).join(', ')} require instant renewal before service degradation.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveTab('domains')}
                    className="px-3.5 py-1.5 rounded-xl bg-red-500 text-white font-mono font-bold text-xs hover:bg-red-600 transition-colors"
                  >
                    Resolve Renewals →
                  </button>
                </div>
              )}

              {/* Projects Overview List */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold font-display text-white">Managed Client Infrastructure</h2>
                  <span className="text-xs font-mono text-gray-400">Showing {filteredProjects.length} Systems</span>
                </div>

                <div className="space-y-3">
                  {filteredProjects.slice(0, 5).map((p) => {
                    const daysLeft = getDaysUntilExpiry(p.domainExpiryDate);
                    const badge = getExpiryBadge(daysLeft);

                    return (
                      <div
                        key={p.id}
                        className="p-4 rounded-2xl bg-[#141518] border border-[#222429] hover:border-[#857df3]/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold text-sm text-white font-display">{p.name}</h3>
                            <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#222429] text-gray-300">
                              {p.serviceCategory}
                            </span>
                          </div>
                          <p className="text-xs font-mono text-gray-400">
                            Domain: <span className="text-white font-semibold">{p.domainName}</span> | Host: {p.hostingProvider}
                          </p>
                        </div>

                        <div className="flex items-center gap-3 shrink-0">
                          <span className={`px-2.5 py-1 text-[10px] font-mono font-bold rounded-md border ${badge.color}`}>
                            {badge.label}
                          </span>
                          <DirectRedirectButton url={p.liveUrl} label="Direct Redirect" variant="secondary" />
                          <button
                            onClick={() => setEditingProject(p)}
                            className="p-2 rounded-lg bg-[#222429] text-gray-300 hover:text-white hover:bg-gray-700 transition-all"
                            title="Edit Parameters"
                          >
                            ✏️
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Activity Log & System Stream */}
              <div className="lg:col-span-4 space-y-4">
                <h2 className="text-lg font-bold font-display text-white">System Activity Audit Log</h2>
                <div className="p-4 rounded-2xl bg-[#141518] border border-[#222429] space-y-4">
                  <div className="space-y-3">
                    {initialActivityLogs.map((log) => (
                      <div key={log.id} className="p-3 rounded-xl bg-[#0B0C0E] border border-[#222429] space-y-1">
                        <div className="flex items-center justify-between text-[11px] font-mono">
                          <span
                            className={
                              log.severity === 'alert'
                                ? 'text-red-400 font-bold'
                                : log.severity === 'success'
                                ? 'text-emerald-400 font-bold'
                                : 'text-[#9d97f0]'
                            }
                          >
                            [{log.category.toUpperCase()}]
                          </span>
                          <span className="text-gray-500">{log.timestamp}</span>
                        </div>
                        <h4 className="text-xs font-bold text-white leading-snug">{log.title}</h4>
                        <p className="text-[11px] text-gray-400 leading-tight">{log.description}</p>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveTab('domains')}
                    className="w-full mt-4 py-2 text-xs font-mono font-bold rounded-xl bg-[#222429] text-[#9d97f0] hover:bg-[#857df3] hover:text-white transition-all"
                  >
                    View All Domains →
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PROJECTS & FIELD CUSTOMIZER */}
          {activeTab === 'projects' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold font-display text-white">Client Projects Management</h2>
                  <p className="text-xs text-gray-400">
                    Customize project parameters, edit metadata fields, and launch live site redirects.
                  </p>
                </div>
                <button
                  onClick={() => setIsAddProjectOpen(true)}
                  className="px-4 py-2 rounded-xl bg-[#857df3] text-white font-mono font-bold text-xs hover:bg-[#7268ea] transition-all flex items-center gap-1.5"
                >
                  + Add Project
                </button>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProjects.map((p) => {
                  const daysLeft = getDaysUntilExpiry(p.domainExpiryDate);
                  const badge = getExpiryBadge(daysLeft);

                  return (
                    <div
                      key={p.id}
                      className="p-5 rounded-2xl bg-[#141518] border border-[#222429] hover:border-[#857df3]/50 transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-3">
                          <div>
                            <span className="text-[10px] font-mono text-[#9d97f0] uppercase tracking-wider">
                              {p.serviceCategory}
                            </span>
                            <h3 className="font-bold text-base text-white font-display group-hover:text-[#9d97f0] transition-colors">
                              {p.name}
                            </h3>
                            <p className="text-xs text-gray-400">{p.clientName}</p>
                          </div>
                          <span
                            className={`px-2 py-0.5 text-[10px] font-mono font-bold rounded border ${
                              p.status === 'Active'
                                ? 'bg-[#857df3]/10 text-[#9d97f0] border-[#857df3]/30'
                                : 'bg-blue-500/10 text-blue-400 border-blue-500/30'
                            }`}
                          >
                            {p.status}
                          </span>
                        </div>

                        {/* Domain & Hosting Card Pill */}
                        <div className="p-3 rounded-xl bg-[#0B0C0E] border border-[#222429] mb-4 space-y-1.5">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-mono text-gray-400">Domain:</span>
                            <span className="font-bold text-white">{p.domainName}</span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-mono text-gray-400">Hosting:</span>
                            <span className="text-gray-300">{p.hostingProvider}</span>
                          </div>
                          <div className="flex items-center justify-between text-xs pt-1 border-t border-[#222429]">
                            <span className="font-mono text-gray-400">Expiry:</span>
                            <span className={`px-1.5 py-0.5 text-[10px] font-mono font-bold rounded ${badge.color}`}>
                              {badge.label}
                            </span>
                          </div>
                        </div>

                        {/* Custom Metadata Fields count */}
                        {p.customFields.length > 0 && (
                          <div className="flex items-center gap-1.5 flex-wrap mb-4">
                            {p.customFields.map((cf) => (
                              <span
                                key={cf.id}
                                className="px-2 py-0.5 text-[10px] font-mono bg-[#222429] text-gray-300 rounded border border-gray-800"
                              >
                                {cf.key}: {cf.value}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Card Action Controls */}
                      <div className="flex items-center justify-between pt-3 border-t border-[#222429] gap-2">
                        {/* Direct Redirect Option Button */}
                        <DirectRedirectButton url={p.liveUrl} label="Direct Redirect" variant="primary" />

                        {/* Edit Fields Button */}
                        <button
                          onClick={() => setEditingProject(p)}
                          className="px-3 py-1.5 text-xs font-mono font-semibold rounded-lg bg-[#222429] text-gray-300 hover:text-white hover:bg-gray-700 transition-all flex items-center gap-1"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                          <span>Edit Fields</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: DOMAIN & HOSTING EXPIRATION MONITOR */}
          {activeTab === 'domains' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold font-display text-white">
                    Domain & Hosting Expiration Monitor
                  </h2>
                  <p className="text-xs text-gray-400">
                    Real-time domain expiration dates, SSL health, hosting accounts, and direct site redirects.
                  </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex items-center gap-2 p-1 rounded-xl bg-[#141518] border border-[#222429]">
                  <button
                    onClick={() => setDomainFilter('all')}
                    className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${
                      domainFilter === 'all'
                        ? 'bg-[#857df3] text-white font-bold'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    All ({projects.length})
                  </button>
                  <button
                    onClick={() => setDomainFilter('expiring')}
                    className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${
                      domainFilter === 'expiring'
                        ? 'bg-yellow-500 text-black font-bold'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Expiring &lt;30d ({expiringDomains.length})
                  </button>
                  <button
                    onClick={() => setDomainFilter('critical')}
                    className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${
                      domainFilter === 'critical'
                        ? 'bg-red-500 text-white font-bold'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Critical &lt;10d ({criticalDomains.length})
                  </button>
                </div>
              </div>

              {/* Expiration Monitor Table */}
              <div className="rounded-2xl bg-[#141518] border border-[#222429] overflow-x-auto">
                <table className="w-full text-left text-xs text-gray-300">
                  <thead className="bg-[#0B0C0E] text-gray-400 font-mono text-[11px] uppercase border-b border-[#222429]">
                    <tr>
                      <th className="p-4">Domain Name</th>
                      <th className="p-4">Client Project</th>
                      <th className="p-4">Hosting Provider</th>
                      <th className="p-4">Domain Expiry</th>
                      <th className="p-4">Hosting Expiry</th>
                      <th className="p-4 text-center">Status</th>
                      <th className="p-4 text-right">Actions / Direct Redirect</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#222429]">
                    {domainTrackerItems.map((p) => {
                      const dDays = getDaysUntilExpiry(p.domainExpiryDate);
                      const hDays = getDaysUntilExpiry(p.hostingExpiryDate);
                      const badge = getExpiryBadge(Math.min(dDays, hDays));

                      return (
                        <tr key={p.id} className="hover:bg-[#0B0C0E]/50 transition-colors">
                          <td className="p-4 font-bold text-white font-mono">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-[#857df3]" />
                              {p.domainName}
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="font-bold text-white">{p.name}</div>
                            <div className="text-[10px] text-gray-500">{p.clientName}</div>
                          </td>
                          <td className="p-4 font-mono text-gray-300">{p.hostingProvider}</td>
                          <td className="p-4 font-mono">
                            <div className="text-white">{p.domainExpiryDate}</div>
                            <div className="text-[10px] text-gray-400">{dDays} days left</div>
                          </td>
                          <td className="p-4 font-mono">
                            <div className="text-white">{p.hostingExpiryDate}</div>
                            <div className="text-[10px] text-gray-400">{hDays} days left</div>
                          </td>
                          <td className="p-4 text-center">
                            <span className={`px-2.5 py-1 text-[10px] font-mono font-bold rounded-md border ${badge.color}`}>
                              {badge.label}
                            </span>
                          </td>
                          <td className="p-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => handleRenewDomain(p.id)}
                                className="px-3 py-1.5 rounded-lg bg-[#857df3]/15 text-[#9d97f0] border border-[#857df3]/30 hover:bg-[#857df3] hover:text-white font-bold text-xs transition-all"
                                title="Renew domain & hosting for +1 year"
                              >
                                ⚡ Renew (+1 Yr)
                              </button>
                              <DirectRedirectButton url={p.liveUrl} label="Direct Redirect" variant="primary" />
                              <button
                                onClick={() => setEditingProject(p)}
                                className="p-2 rounded-lg bg-[#222429] text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
                                title="Edit Expiration Dates"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: CLIENT REQUESTS INBOX */}
          {activeTab === 'requests' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold font-display text-white">Client Requests & Lead Submissions</h2>
                  <p className="text-xs text-gray-400">
                    Review inquiries from prospective clients and convert them directly into active projects.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {requests.map((req) => (
                  <div
                    key={req.id}
                    className="p-5 rounded-2xl bg-[#141518] border border-[#222429] hover:border-[#857df3]/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <h3 className="font-bold text-sm text-white font-display">{req.clientName}</h3>
                        <span className="text-xs font-mono text-gray-400">&lt;{req.clientEmail}&gt;</span>
                        <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#857df3]/10 text-[#9d97f0] border border-[#857df3]/30">
                          {req.status}
                        </span>
                      </div>
                      <p className="text-xs font-mono text-[#9d97f0]">
                        Service: {req.serviceRequested} | Est. Budget: {req.estimatedBudget}
                      </p>
                      <p className="text-xs text-gray-300 pt-1">"{req.message}"</p>
                      <span className="text-[10px] font-mono text-gray-500 block">Submitted: {req.submittedAt}</span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {req.status !== 'Approved' && (
                        <button
                          onClick={() => handleConvertRequestToProject(req)}
                          className="px-3.5 py-1.5 text-xs font-mono font-bold rounded-lg bg-[#857df3] text-white hover:bg-[#7268ea] transition-all"
                        >
                          + Convert to Project
                        </button>
                      )}
                      <button
                        onClick={() => handleUpdateRequestStatus(req.id, 'Archived')}
                        className="px-3 py-1.5 text-xs font-mono rounded-lg bg-[#222429] text-gray-400 hover:text-white transition-all"
                      >
                        Archive
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* EDIT PROJECT MODAL */}
      {editingProject && (
        <ProjectEditModal
          project={editingProject}
          isOpen={!!editingProject}
          onClose={() => setEditingProject(null)}
          onSave={handleSaveProject}
        />
      )}

      {/* ADD PROJECT MODAL */}
      {isAddProjectOpen && (
        <AddProjectModal
          isOpen={isAddProjectOpen}
          onClose={() => setIsAddProjectOpen(false)}
          onAdd={handleAddProject}
        />
      )}
    </div>
  );
}
