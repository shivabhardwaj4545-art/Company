'use client';

import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  vx: number;
  vy: number;
  shape: 'square' | 'circle' | 'diamond';
  rotation: number;
  rotationSpeed: number;
}

interface ClickRing {
  id: number;
  x: number;
  y: number;
}

export function ClickBubbles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [rings, setRings] = useState<ClickRing[]>([]);

  useEffect(() => {
    const colors = ['#5b45ff', '#9d97f0', '#000000', '#7965ff', '#4834e7'];

    const handleClick = (e: MouseEvent) => {
      const clickX = e.clientX;
      const clickY = e.clientY;

      // 1. Add expanding ring
      const newRing: ClickRing = {
        id: Date.now() + Math.random(),
        x: clickX,
        y: clickY,
      };
      setRings((prev) => [...prev.slice(-5), newRing]);

      // Remove ring after animation
      setTimeout(() => {
        setRings((prev) => prev.filter((r) => r.id !== newRing.id));
      }, 600);

      // 2. Add confetti explosion particles (Matching Screenshots 2 & 3)
      const newParticles: Particle[] = [];
      const count = 18;

      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
        const speed = 4 + Math.random() * 7;
        const shapes: ('square' | 'circle' | 'diamond')[] = ['square', 'circle', 'diamond'];

        newParticles.push({
          id: Date.now() + i + Math.random(),
          x: clickX,
          y: clickY,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 4 + Math.random() * 8,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1.5,
          shape: shapes[Math.floor(Math.random() * shapes.length)],
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 15,
        });
      }

      setParticles((prev) => [...prev.slice(-40), ...newParticles]);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    if (particles.length === 0) return;

    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.22, // gravity
            vx: p.vx * 0.96, // air resistance
            size: Math.max(0, p.size - 0.2),
            rotation: p.rotation + p.rotationSpeed,
          }))
          .filter((p) => p.size > 0.4)
      );
    }, 16);

    return () => clearInterval(interval);
  }, [particles]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Expanding Ring Effect */}
      {rings.map((ring) => (
        <div
          key={ring.id}
          className="absolute rounded-full border-2 border-[#5b45ff]/50 animate-[ping_0.5s_cubic-bezier(0,0,0.2,1)_forwards]"
          style={{
            left: `${ring.x}px`,
            top: `${ring.y}px`,
            width: '75px',
            height: '75px',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      {/* Confetti Explosion Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          aria-hidden="true"
          className="absolute shadow-sm"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            borderRadius: p.shape === 'circle' ? '50%' : p.shape === 'diamond' ? '2px' : '1px',
            transform: `translate(-50%, -50%) rotate(${p.rotation}deg) ${
              p.shape === 'diamond' ? 'skew(15deg, 15deg)' : ''
            }`,
            opacity: Math.min(1, p.size / 4),
          }}
        />
      ))}
    </div>
  );
}
