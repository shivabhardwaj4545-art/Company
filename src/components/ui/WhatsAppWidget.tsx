'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { 
  MessageCircle, 
  X, 
  Send, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  Bot,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  options?: string[];
  showHandoff?: boolean;
}

const PHONE_NUMBER = '918445178177';

const WhatsAppLogoSVG = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.886-9.885 9.886m0-18c-6.52 0-11.82 5.301-11.824 11.824 0 2.085.544 4.121 1.578 5.912l-1.677 6.126 6.269-1.644c1.73.943 3.682 1.442 5.65 1.443h.005c6.52 0 11.824-5.302 11.828-11.826 0-3.16-1.23-6.13-3.465-8.367a11.755 11.755 0 00-8.364-3.468" />
  </svg>
);

// Generate contextual pre-filled text based on current route and user interaction
const getPrefilledText = (path: string, userQuery?: string) => {
  let baseMsg = "Hi AiKodX team! I'd like to discuss a project with your studio.";
  
  if (path.startsWith('/products/ezrestero')) {
    baseMsg = "Hi AiKodX team! I'd like a live demo & pricing info for EzRestero platform.";
  } else if (path.startsWith('/products')) {
    baseMsg = "Hi AiKodX team! I'm interested in learning more about your SaaS products.";
  } else if (path.includes('web-development')) {
    baseMsg = "Hi AiKodX team! I'm inquiring about high-performance web development.";
  } else if (path.includes('branding-identity')) {
    baseMsg = "Hi AiKodX team! I'm interested in brand identity & design services.";
  } else if (path.includes('ai-automation')) {
    baseMsg = "Hi AiKodX team! I'd like to automate our business workflows with AI agents.";
  } else if (path.startsWith('/services')) {
    baseMsg = "Hi AiKodX team! I'm interested in your digital studio services.";
  } else if (path.startsWith('/work')) {
    baseMsg = "Hi AiKodX team! I saw your portfolio work and want to discuss a custom build.";
  }

  if (userQuery && userQuery.trim()) {
    baseMsg += ` (Inquiry: "${userQuery.trim()}")`;
  }

  return encodeURIComponent(baseMsg);
};

// Analytics event logger helper
const trackEvent = (eventName: string, payload?: Record<string, unknown>) => {
  try {
    if (typeof window !== 'undefined') {
      const event = new CustomEvent(eventName, { detail: payload });
      window.dispatchEvent(event);
      if ((window as any).dataLayer) {
        (window as any).dataLayer.push({ event: eventName, ...payload });
      }
      console.log(`[WhatsAppWidget Analytics] ${eventName}`, payload);
    }
  } catch {
    // Ignore error silently
  }
};

export function WhatsAppWidget() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const [showNudge, setShowNudge] = useState(false);
  const [nudgeDismissed, setNudgeDismissed] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [exchangeCount, setExchangeCount] = useState(0);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'bot',
      text: "Hey there! 👋 Welcome to aiKODX. How can we elevate your digital presence or product today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      options: ['Web Development', 'Branding & Identity', 'AI Automation', 'Product Demo']
    }
  ]);

  // Auto-scroll to bottom of messages container
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  // Nudge logic: 6s delay or 65% scroll depth
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const dismissed = sessionStorage.getItem('aikodx_wa_nudge_dismissed');
    if (dismissed === 'true') {
      setNudgeDismissed(true);
      return;
    }

    const timer = setTimeout(() => {
      if (!hasInteracted && !isOpen) {
        setShowNudge(true);
      }
    }, 6000);

    const handleScroll = () => {
      if (hasInteracted || isOpen || nudgeDismissed) return;
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent >= 65) {
        setShowNudge(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasInteracted, isOpen, nudgeDismissed]);

  const handleDismissNudge = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowNudge(false);
    setNudgeDismissed(true);
    sessionStorage.setItem('aikodx_wa_nudge_dismissed', 'true');
    trackEvent('whatsapp_nudge_dismissed', { route: pathname });
  };

  const handleToggleWidget = () => {
    if (!isOpen) {
      setIsOpen(true);
      setHasInteracted(true);
      setUnreadCount(0);
      setShowNudge(false);
      sessionStorage.setItem('aikodx_wa_nudge_dismissed', 'true');
      trackEvent('whatsapp_widget_opened', { route: pathname });
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    } else {
      setIsOpen(false);
      trackEvent('whatsapp_widget_closed', { route: pathname });
    }
  };

  const handleQuickReply = (optionText: string) => {
    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: optionText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);
    trackEvent('whatsapp_quick_reply_clicked', { option: optionText, route: pathname });

    const nextCount = exchangeCount + 1;
    setExchangeCount(nextCount);

    setTimeout(() => {
      let botReplyText = "";
      let showHandoff = false;

      switch (optionText) {
        case 'Web Development':
          botReplyText = "We engineer high-performance Next.js web applications, headless commerce & landing pages built for 99+ Lighthouse speed and maximum conversion! 🚀";
          break;
        case 'Branding & Identity':
          botReplyText = "From iconic logo design to full design systems, we craft memorable, Gen-Z styled visual brand identities.";
          break;
        case 'AI Automation':
          botReplyText = "We build custom AI agents, automated lead qualification pipelines, and 24/7 business workflow automations.";
          break;
        case 'Product Demo':
          botReplyText = "We'd love to give you a live demo of our SaaS platforms like EzRestero! Let's connect you directly with our product team on WhatsApp.";
          showHandoff = true;
          break;
        default:
          botReplyText = "Got it! Our studio team is ready to assist you with your project.";
      }

      if (nextCount >= 2) {
        showHandoff = true;
      }

      const botMsg: ChatMessage = {
        id: `msg-${Date.now() + 1}`,
        sender: 'bot',
        text: botReplyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        showHandoff: showHandoff
      };

      setIsTyping(false);
      setMessages((prev) => [...prev, botMsg]);
    }, 750);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    setInput('');

    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: userText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);
    trackEvent('whatsapp_message_sent', { text: userText, route: pathname });

    const nextCount = exchangeCount + 1;
    setExchangeCount(nextCount);

    setTimeout(() => {
      const botMsg: ChatMessage = {
        id: `msg-${Date.now() + 1}`,
        sender: 'bot',
        text: "Thanks for reaching out! To discuss exact timelines, specs, or custom pricing, let's jump straight onto a direct WhatsApp chat with our core team.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        showHandoff: true
      };
      setIsTyping(false);
      setMessages((prev) => [...prev, botMsg]);
    }, 850);
  };

  const getWhatsAppHandoffUrl = (customUserQuery?: string) => {
    const encodedText = getPrefilledText(pathname, customUserQuery);
    return `https://wa.me/${PHONE_NUMBER}?text=${encodedText}`;
  };

  const handleHandoffClick = (queryText?: string) => {
    trackEvent('whatsapp_handoff_clicked', { route: pathname, query: queryText });
    window.open(getWhatsAppHandoffUrl(queryText), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-5 right-5 z-[9999] flex flex-col items-end select-none pointer-events-none">
      
      {/* Nudge Prompt Speech Bubble */}
      {showNudge && !isOpen && (
        <div 
          className="pointer-events-auto mb-3 max-w-[280px] p-3.5 rounded-2xl bg-[#0d0c1a]/95 text-white border border-[#7c6cf0]/40 shadow-2xl backdrop-blur-xl relative animate-in fade-in slide-in-from-bottom-2 duration-300 motion-reduce:animate-none group cursor-pointer"
          onClick={handleToggleWidget}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleToggleWidget()}
        >
          <button
            onClick={handleDismissNudge}
            aria-label="Dismiss message prompt"
            className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#7c6cf0]"
          >
            <X className="w-3 h-3" />
          </button>
          
          <div className="flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#7c6cf0] to-[#b18cf5] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="text-xs font-semibold leading-snug text-slate-100 font-body">
                Got questions? Chat with us on WhatsApp — usually instant.
              </p>
              <div className="mt-1.5 flex items-center gap-1 text-[10px] font-bold text-[#b18cf5] group-hover:underline">
                <span>Start conversation</span>
                <ChevronRight className="w-3 h-3" />
              </div>
            </div>
          </div>
          
          {/* Speech bubble indicator tail */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#0d0c1a] border-b border-r border-[#7c6cf0]/40 transform rotate-45" />
        </div>
      )}

      {/* Main Glassmorphic Chat Panel */}
      <div 
        role="dialog"
        aria-label="aiKODX WhatsApp Studio Chat"
        className={`pointer-events-auto mb-3 w-[calc(100vw-2.5rem)] sm:w-[380px] h-[520px] max-h-[82vh] rounded-3xl bg-[#0d0c1a]/95 text-white border border-[#7c6cf0]/30 shadow-[0_20px_50px_rgba(13,12,26,0.8)] backdrop-blur-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${
          isOpen 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 translate-y-4 pointer-events-none absolute'
        }`}
      >
        {/* Header Bar */}
        <div className="p-4 bg-gradient-to-r from-[#14132a] via-[#1c1a3a] to-[#262150] border-b border-[#7c6cf0]/20 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#7c6cf0] to-[#b18cf5] p-0.5 shadow-md flex items-center justify-center">
                <div className="w-full h-full bg-[#0d0c1a] rounded-[14px] flex items-center justify-center text-white">
                  <Bot className="w-5 h-5 text-[#b18cf5]" />
                </div>
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-[#0d0c1a] rounded-full animate-pulse motion-reduce:animate-none" />
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-display font-bold text-sm tracking-tight text-white">
                  aiKODX Studio
                </h3>
                <span className="px-1.5 py-0.5 rounded bg-[#7c6cf0]/20 text-[#b18cf5] text-[9px] font-black uppercase tracking-wider">
                  AI + Human
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium leading-none mt-0.5">
                Typically replies in minutes • Online
              </p>
            </div>
          </div>

          <button
            onClick={handleToggleWidget}
            aria-label="Close chat window"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#7c6cf0]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Log Message Scroll Container */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3.5 no-scrollbar font-body">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] p-3.5 rounded-2xl text-xs sm:text-sm font-medium leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-r from-[#7c6cf0] to-[#8777ff] text-white rounded-br-none shadow-md'
                    : 'bg-[#14132a] text-slate-100 border border-[#7c6cf0]/20 rounded-bl-none shadow-inner'
                }`}
              >
                {msg.text}
              </div>

              {/* Time Label */}
              <span className="text-[10px] text-slate-500 mt-1 px-1">
                {msg.time}
              </span>

              {/* Quick Reply Chips (Only on bot messages if options provided) */}
              {msg.options && (
                <div className="mt-3 flex flex-wrap gap-1.5 max-w-[95%]">
                  {msg.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleQuickReply(opt)}
                      className="px-3 py-1.5 rounded-xl bg-[#7c6cf0]/15 hover:bg-[#7c6cf0]/30 text-[#b18cf5] hover:text-white border border-[#7c6cf0]/30 text-xs font-bold transition-all hover:scale-105 active:scale-95 text-left focus:outline-none focus:ring-2 focus:ring-[#7c6cf0]"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}

              {/* Direct WhatsApp Handoff CTA Card */}
              {msg.showHandoff && (
                <div className="mt-3 w-full max-w-[90%] p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-200 text-xs space-y-2.5">
                  <div className="flex items-center gap-2 font-bold text-emerald-400">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Direct Studio Handoff Ready</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    Connect directly with an aiKODX founder/engineer on WhatsApp to get instant project proposals & demos.
                  </p>
                  <button
                    onClick={() => handleHandoffClick(msg.text)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30 transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                    <span>Continue on WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-center gap-2 text-slate-400 text-xs bg-[#14132a] p-3 rounded-2xl rounded-bl-none border border-[#7c6cf0]/20 w-max">
              <span className="text-[11px] font-semibold text-slate-400">aiKODX is typing</span>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-[#b18cf5] rounded-full animate-bounce motion-reduce:animate-none" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 bg-[#b18cf5] rounded-full animate-bounce motion-reduce:animate-none" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 bg-[#b18cf5] rounded-full animate-bounce motion-reduce:animate-none" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar Footer */}
        <form onSubmit={handleSendMessage} className="p-3 bg-[#14132a]/90 border-t border-[#7c6cf0]/20 flex items-center gap-2 shrink-0">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything or request a demo..."
            className="flex-1 px-4 py-2.5 rounded-xl bg-[#0d0c1a] border border-[#7c6cf0]/30 text-white placeholder:text-slate-500 text-xs font-medium focus:outline-none focus:border-[#7c6cf0] transition-colors"
          />
          
          <button
            type="submit"
            disabled={!input.trim()}
            aria-label="Send message"
            className="p-2.5 rounded-xl bg-[#7c6cf0] hover:bg-[#6a57fa] disabled:opacity-40 disabled:hover:bg-[#7c6cf0] text-white transition-all shrink-0 focus:outline-none focus:ring-2 focus:ring-[#7c6cf0]"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

        {/* Quick direct WhatsApp link footer */}
        <div className="px-4 py-2 bg-[#0d0c1a] border-t border-[#7c6cf0]/10 flex items-center justify-between text-[10px] text-slate-400">
          <span className="flex items-center gap-1 font-medium">
            Powered by <strong className="text-white font-bold">aiKODX API</strong>
          </span>
          <a
            href={getWhatsAppHandoffUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('whatsapp_footer_direct_clicked', { route: pathname })}
            className="text-[#b18cf5] hover:text-white font-bold flex items-center gap-1 hover:underline focus:outline-none"
          >
            <span>Open wa.me</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Floating Circular Launcher Button */}
      <button
        onClick={handleToggleWidget}
        aria-label={isOpen ? "Close WhatsApp Chat" : "Open WhatsApp Chat"}
        aria-expanded={isOpen}
        className="pointer-events-auto relative w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.6)] transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50 group"
      >
        {/* Subtle pulsing background ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping motion-reduce:animate-none pointer-events-none" />

        {/* Icon toggle (WhatsApp icon when closed, X icon when open) */}
        <div className="relative z-10">
          {isOpen ? (
            <X className="w-7 h-7 text-white transition-transform duration-200 transform rotate-0 group-hover:rotate-90" />
          ) : (
            <WhatsAppLogoSVG className="w-7 h-7 text-white" />
          )}
        </div>

        {/* Unread count red badge (1) */}
        {!isOpen && unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-rose-500 text-white font-black text-[11px] border-2 border-[#0d0c1a] flex items-center justify-center shadow-md animate-bounce motion-reduce:animate-none z-20">
            {unreadCount}
          </span>
        )}
      </button>

    </div>
  );
}
