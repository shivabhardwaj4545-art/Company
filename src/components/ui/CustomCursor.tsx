'use client';

import { useEffect, useState, useRef } from 'react';

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mousePos.current = { x: event.clientX, y: event.clientY };

      const target = event.target as HTMLElement | null;
      if (
        target &&
        (target.closest('[data-cursor="hover"]') ||
          target.closest('button') ||
          target.closest('a') ||
          target.closest('input') ||
          target.closest('select') ||
          target.closest('textarea') ||
          target.closest('[role="button"]') ||
          target.closest('label') ||
          target.closest('.group') ||
          target.closest('.gradient-glow-card') ||
          target.closest('.hover-lift'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    let animationFrameId: number;

    const animateCursor = () => {
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * 0.25;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * 0.25;

      if (cursorRef.current) {
        // Precise hotspot tip alignment for 22x22 container
        cursorRef.current.style.transform = `translate3d(${currentPos.current.x - 5.5}px, ${currentPos.current.y - 3}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animateCursor);
    };

    animationFrameId = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      id="customCursor"
      className="custom-cursor"
      style={{ willChange: 'transform' }}
    >
      <div
        className={`w-full h-full transition-transform duration-150 ease-out ${
          isMouseDown ? 'scale-[0.85]' : isHovered ? 'scale-[1.2]' : 'scale-100'
        }`}
      >
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="filter drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]"
        >
          {/* Main Pure Black Pointer Arrow (#000000) */}
          <path
            d="M25 14 C23 13 20 15 21 20 L31 77 C32 84 40 87 44 81 L57 57 L82 53 C89 52 91 43 85 40 L31 14 C29 13 27 13 25 14 Z"
            fill="#000000"
            stroke={isHovered ? '#a3e635' : '#FFFFFF'}
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
