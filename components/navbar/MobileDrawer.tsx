"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Sun, Building2, HeartPulse, Compass, Monitor, Phone, Mail, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { NAV_LINKS, DIVISIONS, SITE_CONFIG } from "@/lib/constants";

const divisionIcons = [Sun, Building2, HeartPulse, Compass, Monitor];

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      // Focus trap
      drawerRef.current?.focus();
    }
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-navy-950/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 bottom-0 z-[70] w-full max-w-[400px] bg-white shadow-2xl transform transition-transform duration-300 ease-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        tabIndex={-1}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <Image
            src="/images/Logo.webp"
            alt="EKOSYS"
            width={140}
            height={40}
            className="h-9 w-auto"
          />
          <button
            onClick={onClose}
            className="p-2 text-navy-900 hover:bg-gray-50 rounded-xl transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="p-5">
          <nav className="space-y-1">
            {NAV_LINKS.filter((l) => !l.isMega).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={onClose}
                className="flex items-center justify-between px-4 py-3 text-base font-medium text-navy-900 hover:bg-gray-50 rounded-xl transition-colors"
              >
                {link.label}
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </Link>
            ))}
          </nav>

          {/* Solutions */}
          <div className="mt-6">
            <h3 className="section-number px-4 mb-3">Solutions</h3>
            <div className="space-y-1">
              {DIVISIONS.map((division, index) => {
                const Icon = divisionIcons[index];
                return (
                  <Link
                    key={division.id}
                    href={division.link}
                    onClick={onClose}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors"
                  >
                    <div className={`p-2 rounded-lg ${division.iconBg}`}>
                      <Icon className="w-4 h-4 text-green-700" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy-900">
                        {division.category}
                      </p>
                      <p className="text-xs text-gray-500">
                        {division.subdomain}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="flex items-center gap-3 px-4 py-2 text-sm text-navy-800"
            >
              <Phone className="w-4 h-4 text-green-700" />
              {SITE_CONFIG.phone}
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-3 px-4 py-2 text-sm text-navy-800"
            >
              <Mail className="w-4 h-4 text-green-700" />
              {SITE_CONFIG.email}
            </a>
          </div>

          {/* CTA */}
          <div className="mt-6">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full"
              arrow
            >
              Talk to an Expert
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
