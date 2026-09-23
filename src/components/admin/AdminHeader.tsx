'use client';

import React from 'react';

interface AdminHeaderProps {
  onOpenAddProject: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export function AdminHeader({ onOpenAddProject, searchQuery, setSearchQuery }: AdminHeaderProps) {
  return (
    <header className="w-full bg-[#141518]/90 backdrop-blur-md border-b border-[#222429] px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 sticky top-0 z-40 font-sans">
      {/* Search Input */}
      <div className="relative w-full md:w-96">
        <svg
          className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search projects, domains, clients, leads..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-[#0B0C0E] border border-[#222429] rounded-xl text-xs font-semibold text-white placeholder-gray-500 focus:border-[#857df3] focus:outline-none transition-all"
        />
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
        {/* System Status Pill */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B0C0E] border border-[#222429]">
          <span className="w-2 h-2 rounded-full bg-[#857df3] animate-pulse" />
          <span className="text-xs font-bold text-gray-300">Live Server Monitor</span>
        </div>

        {/* Action Button */}
        <button
          onClick={onOpenAddProject}
          className="px-5 py-2.5 rounded-xl bg-[#857df3] text-white font-extrabold text-xs hover:bg-[#7269e8] transition-all shadow-[0_0_20px_rgba(133,125,243,0.3)] flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span>Add New Project</span>
        </button>
      </div>
    </header>
  );
}
