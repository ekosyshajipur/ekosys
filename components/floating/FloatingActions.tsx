"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function FloatingActions() {
  const [mounted, setMounted] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!mounted) {
    return null;
  }

  return (
    <div
      suppressHydrationWarning
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none"
    >
      {/* WhatsApp Action */}
      <a
        href={SITE_CONFIG.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with EKOSYS on WhatsApp"
        className="pointer-events-auto group relative flex items-center justify-center w-13 h-13 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="sr-only">WhatsApp</span>
        {/* Tooltip */}
        <span className="absolute right-full mr-3 whitespace-nowrap bg-navy-900 text-white text-xs font-medium py-1.5 px-3 rounded-lg shadow-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150">
          WhatsApp Us
        </span>
      </a>

      {/* Phone Call Action */}
      <a
        href={`tel:${SITE_CONFIG.phoneClean}`}
        aria-label="Call EKOSYS Corporation"
        className="pointer-events-auto group relative flex items-center justify-center w-13 h-13 rounded-full bg-navy-800 text-white shadow-lg hover:bg-navy-900 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <Phone className="w-5 h-5" />
        <span className="sr-only">Call</span>
        {/* Tooltip */}
        <span className="absolute right-full mr-3 whitespace-nowrap bg-navy-900 text-white text-xs font-medium py-1.5 px-3 rounded-lg shadow-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150">
          Call +91 76 44 86 80 86
        </span>
      </a>

      {/* Back to top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="pointer-events-auto group relative flex items-center justify-center w-10 h-10 rounded-full bg-white/90 border border-gray-200 text-navy-800 shadow-md hover:bg-white hover:border-gray-300 transition-all duration-150"
        >
          <ArrowUp className="w-4 h-4" />
          <span className="sr-only">Back to top</span>
        </button>
      )}
    </div>
  );
}
