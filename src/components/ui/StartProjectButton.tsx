'use client';

import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

interface StartProjectButtonProps {
  label?: string;
  className?: string;
  showIcon?: boolean;
  iconType?: 'arrow-up-right' | 'arrow-right';
}

export function StartProjectButton({
  label = 'Start a Project',
  className = 'px-8 py-3.5 rounded-xl bg-[#6a57fa] text-white hover:bg-[#5844f7] text-xs font-black uppercase tracking-wider transition-all shrink-0 flex items-center gap-2 shadow-lg hover:scale-105 cursor-pointer',
  showIcon = true,
  iconType = 'arrow-up-right',
}: StartProjectButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-project-modal'));
    }
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      <span>{label}</span>
      {showIcon && (
        iconType === 'arrow-right' ? (
          <ArrowRight className="w-4 h-4" />
        ) : (
          <ArrowUpRight className="w-4 h-4" />
        )
      )}
    </button>
  );
}
