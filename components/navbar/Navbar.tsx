"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import MegaMenu from "./MegaMenu";
import MobileDrawer from "./MobileDrawer";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
            : "bg-white py-3 md:py-4"
        }`}
        role="banner"
      >
        <Container>
          <nav
            className="flex items-center justify-between"
            role="navigation"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link href="/" className="relative flex-shrink-0" aria-label="EKOSYS Corporation - Home">
              <Image
                src="/images/Logo.webp"
                alt="EKOSYS Corporation"
                width={180}
                height={50}
                className={`transition-all duration-300 w-auto ${
                  scrolled ? "h-9 md:h-10" : "h-10 md:h-12"
                }`}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) =>
                link.isMega ? (
                  <div key={link.label} className="relative">
                    <button
                      onClick={() => setMegaOpen(!megaOpen)}
                      onMouseEnter={() => setMegaOpen(true)}
                      className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-navy-800 hover:text-green-700 transition-colors rounded-lg hover:bg-gray-50"
                      aria-expanded={megaOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          megaOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-navy-800 hover:text-green-700 transition-colors rounded-lg hover:bg-gray-50"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button
                href="/contact"
                variant="primary"
                size="sm"
                id="nav-cta-desktop"
              >
                Talk to an Expert
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-navy-900 hover:bg-gray-50 rounded-xl transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </nav>
        </Container>

        {/* Mega Menu */}
        {megaOpen && (
          <MegaMenu
            onClose={() => setMegaOpen(false)}
            onMouseLeave={() => setMegaOpen(false)}
          />
        )}
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20" />
    </>
  );
}
