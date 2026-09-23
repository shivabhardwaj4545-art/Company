'use client';

import React, { useState, useEffect } from 'react';
import { ClientProject, CustomField } from '@/lib/adminData';

interface ProjectEditModalProps {
  project: ClientProject | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedProject: ClientProject) => void;
}

export function ProjectEditModal({ project, isOpen, onClose, onSave }: ProjectEditModalProps) {
  const [formData, setFormData] = useState<ClientProject | null>(null);

  useEffect(() => {
    if (project) {
      setFormData(JSON.parse(JSON.stringify(project)));
    }
  }, [project]);

  if (!isOpen || !formData) return null;

  const handleChange = (field: keyof ClientProject, value: any) => {
    setFormData((prev) => (prev ? { ...prev, [field]: value } : null));
  };

  const handleCustomFieldChange = (id: string, keyOrValue: 'key' | 'value', text: string) => {
    setFormData((prev) => {
      if (!prev) return null;
      const updatedFields = prev.customFields.map((cf) =>
        cf.id === id ? { ...cf, [keyOrValue]: text } : cf
      );
      return { ...prev, customFields: updatedFields };
    });
  };

  const addCustomField = () => {
    setFormData((prev) => {
      if (!prev) return null;
      const newField: CustomField = {
        id: `cf-${Date.now()}`,
        key: 'New Parameter',
        value: 'Value',
      };
      return { ...prev, customFields: [...prev.customFields, newField] };
    });
  };

  const removeCustomField = (id: string) => {
    setFormData((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        customFields: prev.customFields.filter((cf) => cf.id !== id),
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData) {
      onSave(formData);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#141518] border border-[#222429] rounded-2xl p-6 shadow-2xl text-white max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#222429] font-sans">
          <div>
            <span className="text-xs font-bold text-[#9d97f0] uppercase tracking-wider">
              Project Field Customizer
            </span>
            <h2 className="text-xl font-bold font-display text-white mt-0.5">
              Edit {formData.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#222429] text-gray-400 hover:text-white hover:bg-gray-800 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4 font-sans">
          {/* Main Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-400 mb-1">Project Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full px-3 py-2 bg-[#0B0C0E] border border-[#222429] rounded-lg text-sm text-white focus:border-[#5b45ff] focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 mb-1">Client Name</label>
              <input
                type="text"
                value={formData.clientName}
                onChange={(e) => handleChange('clientName', e.target.value)}
                className="w-full px-3 py-2 bg-[#0B0C0E] border border-[#222429] rounded-lg text-sm text-white focus:border-[#5b45ff] focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 mb-1">Client Email</label>
              <input
                type="email"
                value={formData.clientEmail}
                onChange={(e) => handleChange('clientEmail', e.target.value)}
                className="w-full px-3 py-2 bg-[#0B0C0E] border border-[#222429] rounded-lg text-sm text-white focus:border-[#5b45ff] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 mb-1">Service Category</label>
              <select
                value={formData.serviceCategory}
                onChange={(e) => handleChange('serviceCategory', e.target.value)}
                className="w-full px-3 py-2 bg-[#0B0C0E] border border-[#222429] rounded-lg text-sm text-white focus:border-[#5b45ff] focus:outline-none"
              >
                <option value="Web Development">Web Development</option>
                <option value="Branding">Branding</option>
                <option value="AI Automation">AI Automation</option>
                <option value="Full Digital Package">Full Digital Package</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 mb-1">Project Status</label>
              <select
                value={formData.status}
                onChange={(e) => handleChange('status', e.target.value)}
                className="w-full px-3 py-2 bg-[#0B0C0E] border border-[#222429] rounded-lg text-sm text-white focus:border-[#5b45ff] focus:outline-none"
              >
                <option value="Active">Active</option>
                <option value="In Development">In Development</option>
                <option value="Pending Renewal">Pending Renewal</option>
                <option value="Completed">Completed</option>
                <option value="On Hold">On Hold</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 mb-1">Project Budget</label>
              <input
                type="text"
                value={formData.budget}
                onChange={(e) => handleChange('budget', e.target.value)}
                className="w-full px-3 py-2 bg-[#0B0C0E] border border-[#222429] rounded-lg text-sm text-white focus:border-[#5b45ff] focus:outline-none"
              />
            </div>
          </div>

          {/* Domain & Hosting Tracking Section */}
          <div className="pt-3 border-t border-[#222429]">
            <h3 className="text-xs font-bold text-[#9d97f0] uppercase mb-3">
              Domain & Hosting Expiration Monitoring
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-400 mb-1">Domain Name</label>
                <input
                  type="text"
                  value={formData.domainName}
                  onChange={(e) => handleChange('domainName', e.target.value)}
                  className="w-full px-3 py-2 bg-[#0B0C0E] border border-[#222429] rounded-lg text-sm text-white focus:border-[#5b45ff] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 mb-1">Live URL (Redirect)</label>
                <input
                  type="text"
                  value={formData.liveUrl}
                  onChange={(e) => handleChange('liveUrl', e.target.value)}
                  className="w-full px-3 py-2 bg-[#0B0C0E] border border-[#222429] rounded-lg text-sm text-white focus:border-[#5b45ff] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 mb-1">Domain Expiration Date</label>
                <input
                  type="date"
                  value={formData.domainExpiryDate}
                  onChange={(e) => handleChange('domainExpiryDate', e.target.value)}
                  className="w-full px-3 py-2 bg-[#0B0C0E] border border-[#222429] rounded-lg text-sm text-white focus:border-[#5b45ff] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 mb-1">Hosting Provider</label>
                <input
                  type="text"
                  value={formData.hostingProvider}
                  onChange={(e) => handleChange('hostingProvider', e.target.value)}
                  className="w-full px-3 py-2 bg-[#0B0C0E] border border-[#222429] rounded-lg text-sm text-white focus:border-[#5b45ff] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 mb-1">Hosting Expiration Date</label>
                <input
                  type="date"
                  value={formData.hostingExpiryDate}
                  onChange={(e) => handleChange('hostingExpiryDate', e.target.value)}
                  className="w-full px-3 py-2 bg-[#0B0C0E] border border-[#222429] rounded-lg text-sm text-white focus:border-[#5b45ff] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Custom Metadata Fields */}
          <div className="pt-3 border-t border-[#222429]">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-bold text-[#9d97f0] uppercase">Custom Field Metadata</h3>
              <button
                type="button"
                onClick={addCustomField}
                className="px-2.5 py-1 text-xs font-bold bg-[#5b45ff]/20 text-[#9d97f0] hover:bg-[#5b45ff] hover:text-white rounded border border-[#5b45ff]/40 transition-all"
              >
                + Add Custom Field
              </button>
            </div>
            
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {formData.customFields.map((cf) => (
                <div key={cf.id} className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Field Name"
                    value={cf.key}
                    onChange={(e) => handleCustomFieldChange(cf.id, 'key', e.target.value)}
                    className="w-1/3 px-3 py-1.5 bg-[#0B0C0E] border border-[#222429] rounded text-xs text-white"
                  />
                  <input
                    type="text"
                    placeholder="Field Value"
                    value={cf.value}
                    onChange={(e) => handleCustomFieldChange(cf.id, 'value', e.target.value)}
                    className="w-2/3 px-3 py-1.5 bg-[#0B0C0E] border border-[#222429] rounded text-xs text-white"
                  />
                  <button
                    type="button"
                    onClick={() => removeCustomField(cf.id)}
                    className="p-1.5 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
              {formData.customFields.length === 0 && (
                <p className="text-xs text-gray-500 italic">No custom metadata fields added yet.</p>
              )}
            </div>
          </div>

          {/* Notes */}
          <div className="pt-2">
            <label className="block text-xs font-bold text-gray-400 mb-1">Internal Admin Notes</label>
            <textarea
              rows={3}
              value={formData.notes}
              onChange={(e) => handleChange('notes', e.target.value)}
              className="w-full px-3 py-2 bg-[#0B0C0E] border border-[#222429] rounded-lg text-sm text-white focus:border-[#5b45ff] focus:outline-none"
            />
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#222429]">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold text-gray-400 hover:text-white transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-extrabold rounded-lg bg-[#5b45ff] text-white hover:bg-[#4834e7] transition-all shadow-[0_0_15px_rgba(91,69,255,0.3)]"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
