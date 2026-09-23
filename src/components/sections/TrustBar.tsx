'use client';

export function TrustBar() {
  const logos = [
    { name: 'AURORA PAY', code: 'AURORA//PAY' },
    { name: 'LUXE WEAR', code: 'LUXE.WEAR' },
    { name: 'SYNAPSE AI', code: 'SYNAPSE_AI' },
    { name: 'PULSE MEDIA', code: 'PULSE::MEDIA' },
    { name: 'HYPER METRIC', code: 'HYPER.METRIC' },
    { name: 'AIKODX FLOW', code: 'AIKODX.FLOW' },
    { name: 'VERTEX LABS', code: 'VERTEX_LABS' },
    { name: 'QUANTUM HQ', code: 'QUANTUM//HQ' },
  ];

  // Duplicate for infinite continuous loop
  const marqueeLogos = [...logos, ...logos];

  return (
    <div className="py-12 border-t border-b border-[var(--border)] bg-[var(--surface)]/50 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--text-secondary)]">
          TRUSTED BY HIGH-GROWTH STARTUPS & ENTERPRISES GLOBALLY
        </span>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Left/Right Fading Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[var(--bg)] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[var(--bg)] to-transparent z-10 pointer-events-none" />

        {/* Marquee Track (Moving in Opposite Direction) */}
        <div className="animate-marquee-reverse py-3 flex items-center gap-12 sm:gap-20">
          {marqueeLogos.map((logo, index) => (
            <div
              key={index}
              data-cursor="hover"
              className="flex items-center gap-3 shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            >
              <span className="font-display text-xl sm:text-2xl font-black tracking-widest text-[var(--text-primary)]">
                {logo.code}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
