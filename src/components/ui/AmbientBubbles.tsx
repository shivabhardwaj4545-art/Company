'use client';

import { useEffect, useState } from 'react';

interface Bubble {
  id: number;
  left: number;
  top: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

export function AmbientBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const colors = [
      '#857df3', // Soft Purple
      '#9d97f0', // Soft Lavender
      '#38BDF8', // Sky Blue
      '#EC4899', // Pink
      '#857df3', // Soft Purple
      '#A855F7', // Purple
    ];

    const generatedBubbles: Bubble[] = [];
    const count = 16;

    for (let i = 0; i < count; i++) {
      generatedBubbles.push({
        id: i,
        left: Math.random() * 95,
        top: Math.random() * 90,
        size: 8 + Math.random() * 18,
        color: colors[i % colors.length],
        duration: 8 + Math.random() * 12,
        delay: Math.random() * 5,
      });
    }

    setBubbles(generatedBubbles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none opacity-80">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="absolute rounded-full shadow-sm animate-pulse"
          style={{
            left: `${b.left}%`,
            top: `${b.top}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            backgroundColor: b.color,
            boxShadow: `0 0 12px ${b.color}40`,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
