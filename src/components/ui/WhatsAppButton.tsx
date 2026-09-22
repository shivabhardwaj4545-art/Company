'use client';

import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const phoneNumber = '918445178177';
  const message = encodeURIComponent('Hi NEXUS Digital Studio! I want to start a project with your team.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      data-cursor="hover"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-white font-extrabold text-xs sm:text-sm shadow-[4px_4px_0px_#000] border-2 border-black hover:scale-105 transition-all duration-300 group"
    >
      <div className="relative">
        <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-200"></span>
        </span>
      </div>
      <span className="font-extrabold tracking-wider uppercase text-xs">WhatsApp</span>
    </a>
  );
}
