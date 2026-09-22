"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown, Phone, MessageCircle } from "lucide-react";
import MegaMenu from "./MegaMenu";
import MobileDrawer from "./MobileDrawer";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mega menu on route change
  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 pt-2.5 sm:pt-3.5 px-3 sm:px-6 md:px-8 pointer-events-none transition-all duration-300"
        role="banner"
      >
        <div className="max-w-7xl mx-auto pointer-events-auto">
          <nav
            className={`flex items-center justify-between px-3.5 sm:px-5 md:px-6 py-2 md:py-2.5 bg-white/95 backdrop-blur-md rounded-2xl md:rounded-full border border-slate-200/90 shadow-md md:shadow-lg shadow-black/[0.04] transition-all duration-300 ${
              scrolled ? "shadow-xl border-slate-300/80 bg-white" : ""
            }`}
            role="navigation"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link
              href="/"
              className="relative flex-shrink-0 flex items-center pr-2"
              aria-label="EKOSYS Corporation - Home"
            >
              <Image
                src="/images/Logo.webp"
                alt="EKOSYS Corporation"
                width={175}
                height={48}
                className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-all duration-300"
                priority
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {NAV_LINKS.map((link) => {
                if (link.isMega) {
                  return (
                    <div key={link.label} className="relative">
                      <button
                        type="button"
                        onClick={() => setMegaOpen(!megaOpen)}
                        onMouseEnter={() => setMegaOpen(true)}
                        className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-all rounded-full ${
                          megaOpen
                            ? "bg-slate-100 text-navy-950 font-bold"
                            : "text-slate-700 hover:text-navy-950 hover:bg-slate-100/70"
                        }`}
                        aria-expanded={megaOpen}
                        aria-haspopup="true"
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            megaOpen ? "rotate-180 text-green-700" : "text-slate-500"
                          }`}
                        />
                      </button>
                    </div>
                  );
                }

                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname === link.href || pathname?.startsWith(link.href + "/");

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-4 py-2 text-sm font-semibold transition-all rounded-full ${
                      isActive
                        ? "bg-[#EDF5F8] text-navy-950 font-bold shadow-xs"
                        : "text-slate-700 hover:text-navy-950 hover:bg-slate-100/70"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Desktop Action Buttons: Call now + WhatsApp */}
            <div className="hidden lg:flex items-center gap-2.5">
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#0A192F] hover:bg-[#152a4a] shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                id="nav-cta-call"
                aria-label="Call now"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call now</span>
              </a>

              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                id="nav-cta-whatsapp"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-white text-white" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile Actions: Call, WhatsApp & Hamburger */}
            <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-[#0A192F] text-white hover:bg-[#152a4a] transition-all flex items-center gap-1.5 shadow-xs"
                aria-label="Call now"
              >
                <Phone className="w-3.5 h-3.5 text-white" />
                <span className="hidden sm:inline text-xs font-semibold">Call</span>
              </a>

              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all flex items-center gap-1.5 shadow-xs"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white text-white" />
                <span className="hidden sm:inline text-xs font-bold">WhatsApp</span>
              </a>

              <button
                className="p-2 text-navy-900 hover:bg-slate-100 rounded-full transition-colors ml-0.5"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                aria-expanded={mobileOpen}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </nav>

          {/* Mega Menu (Floating Dropdown) */}
          {megaOpen && (
            <MegaMenu
              onClose={() => setMegaOpen(false)}
              onMouseLeave={() => setMegaOpen(false)}
            />
          )}
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      {/* Spacer for fixed floating navbar */}
      <div className="h-20 md:h-24" />
    </>
  );
}
