'use client';

import React from 'react';

interface DirectRedirectButtonProps {
  url: string;
  label?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'iconOnly';
  className?: string;
}

export function DirectRedirectButton({
  url,
  label = 'Redirect to Live Site',
  variant = 'primary',
  className = '',
}: DirectRedirectButtonProps) {
  const handleRedirect = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!url) return;
    
    // Ensure protocol
    let formattedUrl = url.trim();
    if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
      formattedUrl = `https://${formattedUrl}`;
    }
    
    window.open(formattedUrl, '_blank', 'noopener,noreferrer');
  };

  if (variant === 'iconOnly') {
    return (
      <button
        onClick={handleRedirect}
        title={`Direct Redirect to ${url}`}
        className={`p-2 rounded-lg bg-[#5b45ff]/10 hover:bg-[#5b45ff] text-[#9d97f0] hover:text-white border border-[#5b45ff]/30 transition-all group ${className}`}
      >
        <svg
          className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </button>
    );
  }

  if (variant === 'outline') {
    return (
      <button
        onClick={handleRedirect}
        className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg border border-[#5b45ff]/40 text-[#9d97f0] hover:bg-[#5b45ff]/10 transition-all ${className}`}
      >
        <span>{label}</span>
        <svg
          className="w-3.5 h-3.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </button>
    );
  }

  return (
    <button
      onClick={handleRedirect}
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold rounded-lg bg-[#5b45ff] text-white hover:bg-[#4834e7] transition-all shadow-[0_0_15px_rgba(91,69,255,0.3)] ${className}`}
    >
      <span>{label}</span>
      <svg
        className="w-3.5 h-3.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </button>
  );
}
