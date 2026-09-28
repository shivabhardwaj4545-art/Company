'use client';

import { usePathname } from 'next/navigation';
import { MessageCircle } from 'lucide-react';

const PHONE_NUMBER = '918445178177';

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
      aria-label="Chat with us on WhatsApp"
      data-cursor="hover"
      className="fixed bottom-6 right-6 z-[9999] flex items-center gap-2.5 px-4.5 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-xs sm:text-sm shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.6)] border border-white/20 transition-all duration-300 transform hover:scale-105 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
    >
      <div className="relative flex items-center justify-center">
        {/* Subtle pulsing background ring */}
        <span className="absolute -inset-1 rounded-full bg-white opacity-40 animate-ping motion-reduce:animate-none pointer-events-none" />
        
        {/* WhatsApp Icon */}
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-[#25D366] relative z-10" />

        {/* Small online green notification dot */}
        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5 z-20">
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-200 border border-white" />
        </span>
      </div>

      <span className="font-extrabold tracking-wider uppercase text-xs sm:text-sm text-white">
        WhatsApp
      </span>
    </a>
  );
}
