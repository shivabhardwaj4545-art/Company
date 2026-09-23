'use client';

import React from 'react';

interface AdminSidebarProps {
  activeTab: 'overview' | 'projects' | 'domains' | 'requests';
  setActiveTab: (tab: 'overview' | 'projects' | 'domains' | 'requests') => void;
  pendingRequestsCount: number;
  expiringDomainsCount: number;
}

export function AdminSidebar({
  activeTab,
  setActiveTab,
  pendingRequestsCount,
  expiringDomainsCount,
}: AdminSidebarProps) {
  const menuItems = [
    {
      id: 'overview',
      label: 'Executive Overview',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
      badge: null,
    },
    {
      id: 'projects',
      label: 'Projects & Customizer',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      badge: null,
    },
    {
      id: 'domains',
      label: 'Domain & Hosting Monitor',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      badge: expiringDomainsCount > 0 ? { text: expiringDomainsCount, color: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' } : null,
    },
    {
      id: 'requests',
      label: 'Client Requests Inbox',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
      ),
      badge: pendingRequestsCount > 0 ? { text: pendingRequestsCount, color: 'bg-[#857df3]/20 text-[#9d97f0] border border-[#857df3]/40' } : null,
    },
  ];

  return (
    <aside className="w-full md:w-72 bg-[#141518] border-b md:border-b-0 md:border-r border-[#222429] p-5 flex flex-col justify-between shrink-0 font-sans">
      <div>
        {/* Brand Header */}
        <div className="flex items-center gap-3 px-2 py-3 mb-6 border-b border-[#222429]">
          <div>
            <h1 className="font-black font-display text-xl leading-none">
              <span className="text-white">ai</span>
              <span className="text-[#6a57fa]">KODX</span>
            </h1>
            <span className="text-[11px] font-semibold text-[#8777ff] uppercase tracking-wider block mt-1">
              Admin Portal v2.4
            </span>
          </div>
        </div>

        {/* Menu Navigation */}
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as any)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-[#857df3] text-white shadow-[0_0_20px_rgba(133,125,243,0.25)]'
                    : 'text-gray-300 hover:text-white hover:bg-[#222429]'
                }`}
              >
                <div className="flex items-center gap-3 shrink-0">
                  {item.icon}
                  <span className="whitespace-nowrap">{item.label}</span>
                </div>

                {item.badge && (
                  <span className={`px-2 py-0.5 text-[10px] font-extrabold rounded-full shrink-0 ${item.badge.color}`}>
                    {item.badge.text}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Exit & Logout Footer */}
      <div className="pt-5 border-t border-[#222429] mt-8 space-y-2">
        <a
          href="/"
          className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold text-gray-300 hover:text-white hover:bg-[#222429] transition-all"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Exit to Main Site</span>
        </a>

        <button
          onClick={() => {
            localStorage.removeItem('kodx_admin_auth');
            window.location.href = '/kx-control-857df3/login';
          }}
          className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span>Logout Admin</span>
        </button>
      </div>
    </aside>
  );
}
