'use client';

import { useEffect, useRef, useState } from 'react';
import { Eye } from 'lucide-react';

interface ScratchCardProps {
  children: React.ReactNode;
}

export function ScratchCard({ children }: ScratchCardProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isScratched, setIsScratched] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scratchedPercent, setScratchedPercent] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile || isScratched) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = container.clientWidth;
    const height = container.clientHeight;
    canvas.width = width;
    canvas.height = height;

    // Draw vibrant orange background with diagonal stripe pattern
    ctx.fillStyle = '#FF4500';
    ctx.fillRect(0, 0, width, height);

    // Draw 45-degree diagonal stripe pattern overlay
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.08)';
    ctx.lineWidth = 14;
    for (let i = -height; i < width + height; i += 28) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i + height, height);
      ctx.stroke();
    }

    // Draw Main Bold White Headline "SCRATCH ME"
    ctx.font = '900 48px "Clash Display", sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.fillText('SCRATCH ME', width / 2, height / 2 - 25);

    // Draw Subtext "TO SEE WHAT WE DO"
    ctx.font = '800 20px "General Sans", sans-serif';
    ctx.fillStyle = '#FFC700';
    ctx.fillText('TO SEE WHAT WE DO', width / 2, height / 2 + 15);

    // Draw Black Pill Badge "SWIPE HERE — FINGER OR MOUSE"
    const pillWidth = 260;
    const pillHeight = 32;
    const pillX = width / 2 - pillWidth / 2;
    const pillY = height / 2 + 38;

    ctx.fillStyle = '#0F0F10';
    ctx.beginPath();
    ctx.roundRect(pillX, pillY, pillWidth, pillHeight, 16);
    ctx.fill();

    ctx.font = '800 11px "General Sans", sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText('SWIPE HERE — FINGER OR MOUSE', width / 2, pillY + 20);

    let isDrawing = false;

    const scratch = (x: number, y: number) => {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, 45, 0, Math.PI * 2);
      ctx.fill();
      checkScratchPercentage();
    };

    const checkScratchPercentage = () => {
      try {
        const imageData = ctx.getImageData(0, 0, width, height);
        const pixels = imageData.data;
        let transparentPixels = 0;
        for (let i = 3; i < pixels.length; i += 16) {
          if (pixels[i] === 0) transparentPixels++;
        }
        const totalSampled = pixels.length / 16;
        const percent = Math.round((transparentPixels / totalSampled) * 100);
        setScratchedPercent(percent);

        // Auto-reveal when scratched approx 6-7%
        if (percent >= 6) {
          setIsScratched(true);
        }
      } catch (e) {
        // Fallback
      }
    };

    const getCoords = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      if ('touches' in e && e.touches.length > 0) {
        return {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
        };
      }
      if ('clientX' in e) {
        return {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };
      }
      return { x: 0, y: 0 };
    };

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      isDrawing = true;
      const { x, y } = getCoords(e);
      scratch(x, y);
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDrawing) return;
      const { x, y } = getCoords(e);
      scratch(x, y);
    };

    const handlePointerUp = () => {
      isDrawing = false;
      // Also check on mouse release if user scratched a bit
      checkScratchPercentage();
    };

    canvas.addEventListener('mousedown', handlePointerDown);
    canvas.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);

    canvas.addEventListener('touchstart', handlePointerDown);
    canvas.addEventListener('touchmove', handlePointerMove);
    window.addEventListener('touchend', handlePointerUp);

    return () => {
      canvas.removeEventListener('mousedown', handlePointerDown);
      canvas.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      canvas.removeEventListener('touchstart', handlePointerDown);
      canvas.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handlePointerUp);
    };
  }, [isMobile, isScratched]);

  if (isMobile) {
    return <div>{children}</div>;
  }

  return (
    <div
      ref={containerRef}
      className="relative rounded-2xl border border-[var(--border)] shadow-xl overflow-hidden group bg-[var(--surface)]"
    >
      {/* Revealed content under canvas */}
      <div className="w-full">{children}</div>

      {/* Scratch canvas cover */}
      {!isScratched && (
        <div className="absolute inset-0 z-20 transition-opacity duration-700">
          <canvas
            ref={canvasRef}
            data-cursor="hover"
            className="w-full h-full cursor-pointer"
          />
          <div className="absolute bottom-4 right-4 z-30 flex items-center gap-3 pointer-events-auto">
            <button
              onClick={() => setIsScratched(true)}
              type="button"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white font-extrabold text-xs shadow-md border border-white/20 hover:bg-[#FFC700] hover:text-black transition-colors"
            >
              <Eye className="w-3.5 h-3.5" /> REVEAL ALL ({scratchedPercent}%)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
