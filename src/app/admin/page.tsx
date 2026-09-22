'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  ClientProject,
  ClientRequest,
  ActivityLog,
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
      router.push('/admin/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const [activeTab, setActiveTab] = useState<'overview' | 'projects' | 'domains' | 'requests'>('overview');
  const [projects, setProjects] = useState<ClientProject[]>(initialProjects);
  const [requests, setRequests] = useState<ClientRequest[]>(initialRequests);
  const [activityLogs, setActivityLogs] = useState<ActivityLog[]>(initialActivityLogs);
  const [searchQuery, setSearchQuery] = useState('');
  const [editingProject, setEditingProject] = useState<ClientProject | null>(null);
  const [isAddProjectOpen, setIsAddProjectOpen] = useState(false);
  const [domainFilter, setDomainFilter] = useState<'all' | 'expiring' | 'critical'>('all');

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-[#0B0C0E] text-white flex items-center justify-center font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 border-2 border-[#a3e635] border-t-transparent rounded-full animate-spin" />
          <span>Verifying Admin Session...</span>
        </div>
      </div>
    );
  }

  // Calculated metrics
  const expiringDomains = projects.filter(
    (p) => getDaysUntilExpiry(p.domainExpiryDate) <= 30 || getDaysUntilExpiry(p.hostingExpiryDate) <= 30
  );
  const criticalDomains = projects.filter(
    (p) => getDaysUntilExpiry(p.domainExpiryDate) <= 10 || getDaysUntilExpiry(p.hostingExpiryDate) <= 10
  );
  const pendingRequests = requests.filter((r) => r.status === 'Pending Review');

  // Filter projects by search query
  const filteredProjects = projects.filter((p) => {
    const q = searchQuery.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.clientName.toLowerCase().includes(q) ||
      p.domainName.toLowerCase().includes(q) ||
      p.serviceCategory.toLowerCase().includes(q) ||
      p.hostingProvider.toLowerCase().includes(q)
    );
  });

  // Filter domain tracker items
  const domainTrackerItems = projects.filter((p) => {
    const dDays = getDaysUntilExpiry(p.domainExpiryDate);
    const hDays = getDaysUntilExpiry(p.hostingExpiryDate);
    const minDays = Math.min(dDays, hDays);

    if (domainFilter === 'expiring') return minDays <= 30;
    if (domainFilter === 'critical') return minDays <= 10;
    return true;
  });

  // Project handlers
  const handleSaveProject = (updated: ClientProject) => {
    setProjects((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
    setActivityLogs((prev) => [
      {
        id: `act-${Date.now()}`,
        title: 'Project Fields Updated',
        description: `Customized parameters for ${updated.name}.`,
        category: 'Project',
        timestamp: 'Just now',
        severity: 'success',
      },
      ...prev,
    ]);
  };

  const handleAddProject = (newProj: ClientProject) => {
    setProjects((prev) => [newProj, ...prev]);
    setActivityLogs((prev) => [
      {
        id: `act-${Date.now()}`,
        title: 'New Project Initialized',
        description: `${newProj.name} created for ${newProj.clientName}.`,
        category: 'Project',
        timestamp: 'Just now',
        severity: 'success',
      },
      ...prev,
    ]);
  };

  const handleUpdateRequestStatus = (id: string, newStatus: ClientRequest['status']) => {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
    );
  };

  const handleConvertRequestToProject = (req: ClientRequest) => {
    const newProj: ClientProject = {
      id: `proj-${Date.now()}`,
      name: `${req.clientName} Project`,
      clientName: req.clientName,
      clientEmail: req.clientEmail,
      serviceCategory: 'Web Development',
      status: 'In Development',
      budget: req.estimatedBudget,
      liveUrl: `https://${req.clientName.toLowerCase().replace(/\s+/g, '')}.com`,
      domainName: `${req.clientName.toLowerCase().replace(/\s+/g, '')}.com`,
      hostingProvider: 'Vercel Pro',
      domainExpiryDate: '2027-09-22',
      hostingExpiryDate: '2027-09-22',
      notes: req.message,
      customFields: [],
      createdAt: new Date().toISOString().split('T')[0],
    };
    handleAddProject(newProj);
    handleUpdateRequestStatus(req.id, 'Approved');
  };

  const handleRenewDomain = (projectId: string) => {
    setProjects((prev) =>
      prev.map((p) => {
        if (p.id === projectId) {
          const currentExp = new Date(p.domainExpiryDate);
          currentExp.setFullYear(currentExp.getFullYear() + 1);
          const newExpDate = currentExp.toISOString().split('T')[0];
          return {
            ...p,
            domainExpiryDate: newExpDate,
            hostingExpiryDate: newExpDate,
            status: 'Active',
          };
        }
        return p;
      })
    );
    const targetProj = projects.find((p) => p.id === projectId);
    setActivityLogs((prev) => [
      {
        id: `act-${Date.now()}`,
        title: 'Domain & Hosting Renewed',
        description: `${targetProj?.domainName || 'Domain'} renewed for +1 year.`,
        category: 'Domain',
        timestamp: 'Just now',
        severity: 'success',
      },
      ...prev,
    ]);
  };

  return (
    <div className="min-[#0B0C0E] bg-[#0B0C0E] text-white min-h-screen flex flex-col md:flex-row font-body">
      {/* Sidebar */}
      <AdminSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        pendingRequestsCount={pendingRequests.length}
        expiringDomainsCount={expiringDomains.length}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <AdminHeader
          onOpenAddProject={() => setIsAddProjectOpen(true)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <main className="p-6 flex-1 space-y-6 overflow-y-auto">
          {/* TAB 1: EXECUTIVE OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Expiring Alert Banner if Critical */}
              {criticalDomains.length > 0 && (
                <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded-xl bg-red-500/20 text-red-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </span>
                    <div>
                      <h4 className="font-bold text-sm text-red-300">
                        {criticalDomains.length} Domain / Hosting Expirations Urgent Action Required!
                      </h4>
                      <p className="text-xs text-red-400/80">
                        Domain renewal required within 10 days to prevent site downtime.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveTab('domains')}
                    className="px-3.5 py-1.5 rounded-lg bg-red-500 text-white font-mono font-bold text-xs hover:bg-red-600 transition-all"
                  >
                    View Domain Expiration Monitor
                  </button>
                </div>
              )}

              {/* KPI Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-sans">
                <div className="p-5 rounded-2xl bg-[#141518] border border-[#222429]">
                  <div className="flex items-center justify-between text-gray-400 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider">Active Projects</span>
                    <span className="p-2 rounded-lg bg-[#a3e635]/10 text-[#a3e635]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </span>
                  </div>
                  <div className="text-2xl font-bold font-display text-white">{projects.length}</div>
                  <span className="text-[11px] font-semibold text-gray-400 mt-1 block">5 Active Client Portals</span>
                </div>

                <div className="p-5 rounded-2xl bg-[#141518] border border-[#222429]">
                  <div className="flex items-center justify-between text-gray-400 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider">Domains Expiring</span>
                    <span className="p-2 rounded-lg bg-yellow-500/10 text-yellow-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                  </div>
                  <div className="text-2xl font-bold font-display text-white">{expiringDomains.length}</div>
                  <span className="text-[11px] font-semibold text-yellow-400 mt-1 block">Requires Renewal &lt; 30d</span>
                </div>

                <div className="p-5 rounded-2xl bg-[#141518] border border-[#222429]">
                  <div className="flex items-center justify-between text-gray-400 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider">Pending Leads</span>
                    <span className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                  </div>
                  <div className="text-2xl font-bold font-display text-white">{pendingRequests.length}</div>
                  <span className="text-[11px] font-semibold text-gray-400 mt-1 block">Inquiries Awaiting Review</span>
                </div>

                <div className="p-5 rounded-2xl bg-[#141518] border border-[#222429]">
                  <div className="flex items-center justify-between text-gray-400 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider">Monthly Revenue</span>
                    <span className="p-2 rounded-lg bg-[#a3e635]/10 text-[#a3e635]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                  </div>
                  <div className="text-2xl font-bold font-display text-white">$141,000</div>
                  <span className="text-[11px] font-bold text-[#a3e635] mt-1 block">+24% vs Last Month</span>
                </div>
              </div>

              {/* Activity Log Feed & Quick Project Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Live Activity Feed */}
                <div className="lg:col-span-2 p-6 rounded-2xl bg-[#141518] border border-[#222429]">
                  <div className="flex items-center justify-between mb-4 border-b border-[#222429] pb-3">
                    <h3 className="font-bold text-base text-white font-display flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#a3e635]" />
                      Real-Time System Activity Feed
                    </h3>
                    <span className="text-xs font-mono text-gray-400">Live Audit Stream</span>
                  </div>

                  <div className="space-y-3">
                    {activityLogs.map((log) => (
                      <div
                        key={log.id}
                        className="p-3.5 rounded-xl bg-[#0B0C0E] border border-[#222429] flex items-start justify-between gap-3 hover:border-[#a3e635]/40 transition-all"
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                              log.severity === 'alert'
                                ? 'bg-red-400 animate-pulse'
                                : log.severity === 'success'
                                ? 'bg-[#a3e635]'
                                : 'bg-blue-400'
                            }`}
                          />
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="text-xs font-bold text-white">{log.title}</h4>
                              <span className="px-1.5 py-0.5 text-[9px] font-mono rounded bg-[#222429] text-gray-300">
                                {log.category}
                              </span>
                            </div>
                            <p className="text-xs text-gray-400 mt-0.5">{log.description}</p>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-gray-500 whitespace-nowrap">
                          {log.timestamp}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Expiration Status Widget */}
                <div className="p-6 rounded-2xl bg-[#141518] border border-[#222429] flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-base text-white font-display mb-1">Domain Health Overview</h3>
                    <p className="text-xs text-gray-400 mb-4">Domain & Hosting Expirations Tracking</p>

                    <div className="space-y-3">
                      {projects.slice(0, 4).map((p) => {
                        const daysLeft = getDaysUntilExpiry(p.domainExpiryDate);
                        const badge = getExpiryBadge(daysLeft);
                        return (
                          <div
                            key={p.id}
                            className="p-3 rounded-xl bg-[#0B0C0E] border border-[#222429] flex items-center justify-between"
                          >
                            <div>
                              <h5 className="text-xs font-bold text-white">{p.domainName}</h5>
                              <span className="text-[10px] font-mono text-gray-400">{p.clientName}</span>
                            </div>
                            <span className={`px-2 py-0.5 text-[10px] font-mono font-bold rounded ${badge.color}`}>
                              {daysLeft}d left
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveTab('domains')}
                    className="w-full mt-4 py-2 text-xs font-mono font-bold rounded-xl bg-[#222429] text-[#a3e635] hover:bg-[#a3e635] hover:text-black transition-all"
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
                  className="px-4 py-2 rounded-xl bg-[#a3e635] text-black font-mono font-bold text-xs hover:bg-[#8ee01d] transition-all flex items-center gap-1.5"
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
                      className="p-5 rounded-2xl bg-[#141518] border border-[#222429] hover:border-[#a3e635]/50 transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-3">
                          <div>
                            <span className="text-[10px] font-mono text-[#a3e635] uppercase tracking-wider">
                              {p.serviceCategory}
                            </span>
                            <h3 className="font-bold text-base text-white font-display group-hover:text-[#a3e635] transition-colors">
                              {p.name}
                            </h3>
                            <p className="text-xs text-gray-400">{p.clientName}</p>
                          </div>
                          <span
                            className={`px-2 py-0.5 text-[10px] font-mono font-bold rounded border ${
                              p.status === 'Active'
                                ? 'bg-[#a3e635]/10 text-[#a3e635] border-[#a3e635]/30'
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
                        ? 'bg-[#a3e635] text-black font-bold'
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
                              <span className="w-2 h-2 rounded-full bg-[#a3e635]" />
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
                                className="px-3 py-1.5 rounded-lg bg-[#a3e635]/15 text-[#a3e635] border border-[#a3e635]/30 hover:bg-[#a3e635] hover:text-black font-bold text-xs transition-all"
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
                    className="p-5 rounded-2xl bg-[#141518] border border-[#222429] hover:border-[#a3e635]/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <h3 className="font-bold text-sm text-white font-display">{req.clientName}</h3>
                        <span className="text-xs font-mono text-gray-400">&lt;{req.clientEmail}&gt;</span>
                        <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#a3e635]/10 text-[#a3e635] border border-[#a3e635]/30">
                          {req.status}
                        </span>
                      </div>
                      <p className="text-xs font-mono text-[#a3e635]">
                        Service: {req.serviceRequested} | Est. Budget: {req.estimatedBudget}
                      </p>
                      <p className="text-xs text-gray-300 pt-1">"{req.message}"</p>
                      <span className="text-[10px] font-mono text-gray-500 block">Submitted: {req.submittedAt}</span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {req.status !== 'Approved' && (
                        <button
                          onClick={() => handleConvertRequestToProject(req)}
                          className="px-3.5 py-1.5 text-xs font-mono font-bold rounded-lg bg-[#a3e635] text-black hover:bg-[#8ee01d] transition-all"
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
        </main>
      </div>

      {/* Modals */}
      <ProjectEditModal
        project={editingProject}
        isOpen={!!editingProject}
        onClose={() => setEditingProject(null)}
        onSave={handleSaveProject}
      />

      <AddProjectModal
        isOpen={isAddProjectOpen}
        onClose={() => setIsAddProjectOpen(false)}
        onAdd={handleAddProject}
      />
    </div>
  );
}
