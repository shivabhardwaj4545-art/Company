'use client';

import { useRef, useState, useEffect } from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark' | 'auto';
  className?: string;
}

export function Logo({ size = 'md', theme = 'auto', className = '' }: LogoProps) {
  const topRef = useRef<HTMLDivElement>(null);
  const [topWidth, setTopWidth] = useState<number | null>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (topRef.current) {
        const width = topRef.current.getBoundingClientRect().width;
        if (width > 0) {
          setTopWidth(width);
        }
      }
    };

    updateWidth();
    if (document.fonts) {
      document.fonts.ready.then(updateWidth);
    }
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const isSm = size === 'sm';
  const isLg = size === 'lg';

  const titleSize = isSm 
    ? 'text-xl' 
    : isLg 
    ? 'text-3xl sm:text-4xl' 
    : 'text-2xl sm:text-3xl';

  const subtitleSize = isSm
    ? 'text-[7.5px]'
    : isLg
    ? 'text-[11px] sm:text-[12px]'
    : 'text-[9px] sm:text-[10px]';

  // ai is black (#000000) on light bg, white (#ffffff) on dark bg; KODX is #6a57fa / #8777ff
  const aiTextColor = theme === 'dark' 
    ? 'text-white' 
    : theme === 'light' 
    ? 'text-black' 
    : 'text-current';

  const kodxTextColor = theme === 'dark' 
    ? 'text-[#8777ff]' 
    : theme === 'light' 
    ? 'text-[#6a57fa]' 
    : 'text-[#6a57fa] dark:text-[#8777ff]';

  const subtitleColor = theme === 'dark'
    ? 'text-slate-200'
    : 'text-[#2b354f]';

  const letters = 'SMARTER BY DESIGN'.split('');

  return (
    <div className={`inline-flex flex-col select-none group ${className}`}>
      {/* Top Line: ai (black) + KODX (#6a57fa) */}
      <div 
        ref={topRef}
        className={`font-display font-black ${titleSize} tracking-tight leading-none whitespace-nowrap flex items-center`}
      >
        <span className={aiTextColor}>ai</span>
        <span className={kodxTextColor}>KODX</span>
      </div>

      {/* Bottom Line: SMARTER BY DESIGN (Flush justified right & left under aiKODX) */}
      <div 
        className={`font-black uppercase ${subtitleSize} leading-none mt-1 ${subtitleColor} whitespace-nowrap flex justify-between items-center`}
        style={{ width: topWidth ? `${topWidth}px` : '100%' }}
      >
        {letters.map((char, index) => (
          <span key={index} className="inline-block">
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
    </div>
  );
}


