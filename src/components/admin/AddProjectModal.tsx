'use client';

import React, { useState } from 'react';
import { ClientProject } from '@/lib/adminData';

interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (newProject: ClientProject) => void;
}

export function AddProjectModal({ isOpen, onClose, onAdd }: AddProjectModalProps) {
  const [name, setName] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [serviceCategory, setServiceCategory] = useState<'Web Development' | 'Branding' | 'AI Automation' | 'Full Digital Package'>('Web Development');
  const [budget, setBudget] = useState('$15,000');
  const [liveUrl, setLiveUrl] = useState('');
  const [domainName, setDomainName] = useState('');
  const [hostingProvider, setHostingProvider] = useState('Vercel');
  const [domainExpiryDate, setDomainExpiryDate] = useState('2027-09-22');
  const [hostingExpiryDate, setHostingExpiryDate] = useState('2027-09-22');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProj: ClientProject = {
      id: `proj-${Date.now()}`,
      name: name || 'New Client Project',
      clientName: clientName || 'Client Name',
      clientEmail: clientEmail || 'client@example.com',
      serviceCategory,
      status: 'In Development',
      budget,
      liveUrl: liveUrl || 'https://example.com',
      domainName: domainName || 'example.com',
      hostingProvider,
      domainExpiryDate,
      hostingExpiryDate,
      notes: 'New project initialized via Admin Portal.',
      customFields: [],
      createdAt: new Date().toISOString().split('T')[0],
    };

    onAdd(newProj);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#141518] border border-[#222429] rounded-2xl p-6 shadow-2xl text-white">
        <div className="flex items-center justify-between pb-3 border-b border-[#222429]">
          <h2 className="text-lg font-bold font-display text-white">Create New Client Project</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-3 font-sans">
          <div>
            <label className="block text-xs font-bold text-gray-400 mb-1">Project Name</label>
            <input
              type="text"
              required
              placeholder="e.g. Apex Global Logistics Portal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 bg-[#0B0C0E] border border-[#222429] rounded-lg text-sm text-white focus:border-[#a3e635] focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-gray-400 mb-1">Client Name</label>
              <input
                type="text"
                required
                placeholder="Apex Corp"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full px-3 py-2 bg-[#0B0C0E] border border-[#222429] rounded-lg text-sm text-white focus:border-[#a3e635] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 mb-1">Client Email</label>
              <input
                type="email"
                placeholder="contact@apex.com"
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                className="w-full px-3 py-2 bg-[#0B0C0E] border border-[#222429] rounded-lg text-sm text-white focus:border-[#a3e635] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-gray-400 mb-1">Domain Name</label>
              <input
                type="text"
                placeholder="apexgloballogistics.org"
                value={domainName}
                onChange={(e) => setDomainName(e.target.value)}
                className="w-full px-3 py-2 bg-[#0B0C0E] border border-[#222429] rounded-lg text-sm text-white focus:border-[#a3e635] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 mb-1">Domain Expiry Date</label>
              <input
                type="date"
                value={domainExpiryDate}
                onChange={(e) => setDomainExpiryDate(e.target.value)}
                className="w-full px-3 py-2 bg-[#0B0C0E] border border-[#222429] rounded-lg text-sm text-white focus:border-[#a3e635] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-gray-400 mb-1">Hosting Provider</label>
              <input
                type="text"
                value={hostingProvider}
                onChange={(e) => setHostingProvider(e.target.value)}
                className="w-full px-3 py-2 bg-[#0B0C0E] border border-[#222429] rounded-lg text-sm text-white focus:border-[#a3e635] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 mb-1">Live URL (Redirect)</label>
              <input
                type="text"
                placeholder="https://apexgloballogistics.org"
                value={liveUrl}
                onChange={(e) => setLiveUrl(e.target.value)}
                className="w-full px-3 py-2 bg-[#0B0C0E] border border-[#222429] rounded-lg text-sm text-white focus:border-[#a3e635] focus:outline-none"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-[#222429]">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold text-gray-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-xs font-extrabold rounded-lg bg-[#a3e635] text-black hover:bg-[#8ee01d]"
            >
              + Create Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
