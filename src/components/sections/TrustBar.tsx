'use client';

export function TrustBar() {
  const applicationPlatforms = [
    { name: 'EZRESTRO', code: 'EZRESTRO.ONLINE', category: 'AI RESTAURANT SAAS' },
    { name: 'MSG', code: 'MSG_PLATFORM', category: 'LUXURY E-COMMERCE' },
    { name: 'AI KODX STUDIO', code: 'AIKODX_STUDIO', category: 'GEMINI 2.0 AI APP' },
    { name: 'READYGO MOBILITY', code: 'READYGO.NETWORK', category: 'RIDE SHARING NETWORK' },
    { name: 'DROPIZI COURIER', code: 'DROPIZI_EXPRESS', category: 'HUB PARCEL LOGISTICS' },
    { name: 'GEMINI 2.0 FLASH', code: 'GEMINI_AI_FLASH', category: 'LLM INTELLIGENCE' },
    { name: 'NEXT.JS 15 SAAS', code: 'NEXTJS_15_ENGINE', category: 'APP ROUTER OS' },
    { name: 'SOCKET.IO REALTIME', code: 'SOCKET.IO_SYNC', category: 'SUB-50MS WEBSOCKETS' },
  ];

  // Duplicate for infinite continuous loop
  const marqueeItems = [...applicationPlatforms, ...applicationPlatforms];

  return (
    <div className="py-10 border-t border-b border-[var(--border)] bg-[var(--surface)]/60 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#6a57fa] flex items-center justify-center gap-2">
          <span>POWERING OUR CLIENT PLATFORMS &amp; SAAS ECOSYSTEMS</span>
        </span>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Left/Right Fading Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[var(--bg)] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[var(--bg)] to-transparent z-10 pointer-events-none" />

        {/* Marquee Track (Moving in Opposite Direction) */}
        <div className="animate-marquee-reverse py-2 flex items-center gap-10 sm:gap-16">
          {marqueeItems.map((item, index) => (
            <div
              key={index}
              data-cursor="hover"
              className="flex items-center gap-3 shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer group"
            >
              <div className="flex flex-col">
                <span className="font-display text-lg sm:text-xl font-black tracking-wider text-[var(--text-primary)] group-hover:text-[#6a57fa] transition-colors">
                  {item.code}
                </span>
                <span className="text-[9px] font-mono font-extrabold text-[#6a57fa] uppercase tracking-widest">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
