import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUpRight, ShieldCheck, Heart } from "lucide-react";
import Container from "@/components/ui/Container";
import { SITE_CONFIG, DIVISIONS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-gray-300 relative overflow-hidden" role="contentinfo">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-light opacity-30 pointer-events-none" />

      {/* Main Footer Content */}
      <div className="relative border-b border-navy-800/80 py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Column (Col 1-4) */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <Link href="/" className="inline-block" aria-label="EKOSYS Corporation">
                  <Image
                    src="/images/webLogo.webp"
                    alt="EKOSYS Corporation"
                    width={180}
                    height={48}
                    className="h-10 w-auto brightness-0 invert opacity-95 mb-6"
                  />
                </Link>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
                  EKOSYS Corporation is a multi-disciplinary engineering and technology conglomerate delivering end-to-end solutions across renewable energy, facade engineering, healthcare technology, architecture, and IT infrastructure.
                </p>
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-green-400 uppercase">
                  <ShieldCheck className="w-4 h-4 text-green-400" />
                  Engineering the Future with Integrity
                </div>
              </div>

              {/* Contact Snapshot */}
              <div className="mt-8 pt-6 border-t border-navy-800/60 space-y-3 text-xs text-gray-400">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <span>{SITE_CONFIG.address.full}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-green-400 shrink-0" />
                  <a href={`tel:${SITE_CONFIG.phoneClean}`} className="hover:text-white transition-colors">
                    {SITE_CONFIG.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-navy-300 shrink-0" />
                  <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-colors">
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Division Links (Col 5-8) */}
            <div className="lg:col-span-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-6 font-heading">
                Engineering Divisions
              </h3>
              <ul className="space-y-4 text-sm">
                {DIVISIONS.map((div) => (
                  <li key={div.id}>
                    <a
                      href={div.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start justify-between py-1 text-gray-300 hover:text-white transition-colors"
                    >
                      <div>
                        <span className="font-semibold text-white group-hover:text-green-400 transition-colors block">
                          {div.brand}
                        </span>
                        <span className="text-xs text-gray-400">
                          {div.category} • {div.services.slice(0, 3).join(", ")}
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-green-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all mt-1" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links & Corporate (Col 9-10) */}
            <div className="lg:col-span-2">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-6 font-heading">
                Company
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About EKOSYS
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-white transition-colors">
                    Projects & Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="hover:text-white transition-colors">
                    Engineering Insights
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Corporate Contact
                  </Link>
                </li>
                <li>
                  <a
                    href={SITE_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    WhatsApp Support
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Headquarters / Region (Col 11-12) */}
            <div className="lg:col-span-2">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-6 font-heading">
                Headquarters
              </h3>
              <div className="text-sm space-y-2 text-gray-400">
                <p className="font-semibold text-white">EKOSYS Corporate Office</p>
                <p>Opposite to Municipal Office</p>
                <p>Hajipur, Vaishali</p>
                <p>Bihar - 844101, India</p>
                <div className="pt-4">
                  <span className="inline-block px-2.5 py-1 text-[11px] font-semibold tracking-wider text-green-400 bg-green-950/80 border border-green-800/60 rounded">
                    OPERATIONAL PAN-INDIA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="relative py-6 bg-navy-950 text-xs text-gray-400">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/about" className="hover:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/about" className="hover:text-gray-300 transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="hover:text-gray-300 transition-colors">
                Legal & Compliance
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
