'use client';

import { usePathname } from 'next/navigation';

const PHONE_NUMBER = '918445178177';

const WhatsAppLogoSVG = ({ className = 'w-7 h-7' }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 2a13.9 13.9 0 0 0-12 20.9L2 30l7.3-1.9A13.9 13.9 0 1 0 16 2zm0 25.5a11.5 11.5 0 0 1-5.9-1.6l-.4-.2-4.4 1.1 1.2-4.3-.3-.4A11.6 11.6 0 1 1 16 27.5zm6.3-8.6c-.3-.2-2-1-2.3-1.1-.3-.1-.5-.2-.7.2-.2.3-.8 1.1-1 1.3-.2.2-.4.2-.7.1a8.9 8.9 0 0 1-2.6-1.6 9.8 9.8 0 0 1-1.8-2.3c-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.4.1-.6s-.7-1.7-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.9 1.2 3.4 1.4 3.6c.2.2 2.4 3.7 5.8 5.2.8.3 1.4.5 1.9.7 1 .3 1.9.3 2.6.2.8-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.1-.2-.3-.3-.6-.5z"/>
  </svg>
);

export function WhatsAppButton() {
  const pathname = usePathname();

  // Generate contextual pre-filled WhatsApp message based on current page route
  const getContextualMessage = () => {
    if (pathname.includes('ezrestero')) {
      return 'Hi AiKodX Studio! I am interested in a live demo & pricing for EzRestero.';
    }
    if (pathname.includes('web-development')) {
      return 'Hi AiKodX Studio! I have a web development project inquiry.';
    }
    if (pathname.includes('branding-identity')) {
      return 'Hi AiKodX Studio! I want to discuss branding & visual identity design.';
    }
    if (pathname.includes('ai-automation')) {
      return 'Hi AiKodX Studio! I want to automate our business workflows using AI.';
    }
    if (pathname.startsWith('/products')) {
      return 'Hi AiKodX Studio! I want to learn more about your SaaS products.';
    }
    if (pathname.startsWith('/work')) {
      return 'Hi AiKodX Studio! I saw your portfolio work and want to start a project with your team.';
    }
    return 'Hi AiKodX Digital Studio! I want to start a project with your team.';
  };

  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(getContextualMessage())}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat directly on WhatsApp"
      data-cursor="hover"
      className="fixed bottom-6 right-6 z-[9999] w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.65)] border border-white/20 transition-all duration-300 transform hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-[#25D366]/50 cursor-pointer"
    >
      {/* Subtle pulsing background glow ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping motion-reduce:animate-none pointer-events-none" />

      {/* Crisp Official White WhatsApp Logo SVG */}
      <WhatsAppLogoSVG className="w-7 h-7 sm:w-8 sm:h-8 text-white relative z-10 drop-shadow-sm transition-transform group-hover:scale-105" />
    </a>
  );
}
