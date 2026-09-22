import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUpRight, ShieldCheck, Navigation } from "lucide-react";
import Container from "@/components/ui/Container";
import { SITE_CONFIG, DIVISIONS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "EKOSYS Corporate Office Opposite to Municipal Office Hajipur Vaishali Bihar 844101"
  )}`;

  return (
    <footer className="bg-[#F5F8FA] text-navy-900 relative overflow-hidden border-t border-navy-200" role="contentinfo">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      {/* Main Footer Content */}
      <div className="relative border-b border-navy-200/80 py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Brand Column (Col 1-4) */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                {/* Fixed Logo in Clean White Divi Container */}
                <Link href="/" className="inline-block mb-6" aria-label="EKOSYS Corporation">
                  <div className="bg-white px-4 py-2.5 rounded-2xl shadow-sm inline-flex items-center hover:opacity-95 transition-opacity border border-navy-200">
                    <Image
                      src="/images/Logo.webp"
                      alt="EKOSYS Corporation"
                      width={160}
                      height={46}
                      className="h-9 w-auto object-contain"
                      priority
                    />
                  </div>
                </Link>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-sm">
                  EKOSYS Corporation is a multi-disciplinary engineering and technology conglomerate delivering end-to-end solutions across renewable energy, facade engineering, healthcare technology, architecture, and IT infrastructure.
                </p>
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-green-700 uppercase">
                  <ShieldCheck className="w-4 h-4 text-green-700" />
                  Engineering the Future with Integrity
                </div>
              </div>

              {/* Contact Snapshot */}
              <div className="mt-8 pt-6 border-t border-navy-200/80 space-y-3 text-xs text-navy-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <span className="font-medium text-navy-800 leading-relaxed">{SITE_CONFIG.address.full}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-green-700 shrink-0" />
                  <a href={`tel:${SITE_CONFIG.phoneClean}`} className="font-semibold text-navy-800 hover:text-green-700 transition-colors">
                    {SITE_CONFIG.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-navy-700 shrink-0" />
                  <a href={`mailto:${SITE_CONFIG.email}`} className="font-semibold text-navy-800 hover:text-green-700 transition-colors break-all">
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Division Links (Col 5-7) */}
            <div className="lg:col-span-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gold-600 mb-6 font-heading">
                Engineering Divisions
              </h3>
              <ul className="space-y-4 text-sm">
                {DIVISIONS.map((div) => (
                  <li key={div.id}>
                    <a
                      href={div.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start justify-between py-1 text-navy-700 hover:text-green-700 transition-colors"
                    >
                      <div>
                        <span className="font-semibold text-navy-900 group-hover:text-green-700 transition-colors block">
                          {div.brand}
                        </span>
                        <span className="text-xs text-gray-500">
                          {div.category}
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-green-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all mt-1" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links & Corporate (Col 8-9) */}
            <div className="lg:col-span-2">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gold-600 mb-6 font-heading">
                Company
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/about" className="hover:text-green-700 transition-colors">
                    About EKOSYS
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="hover:text-green-700 transition-colors">
                    Engineering Insights
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-green-700 transition-colors">
                    Corporate Contact
                  </Link>
                </li>
                <li>
                  <a
                    href={SITE_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-700 transition-colors inline-flex items-center gap-1.5"
                  >
                    WhatsApp Support
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Office Location Interactive Map Column (Col 10-12) */}
            <div className="lg:col-span-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gold-600 mb-6 font-heading flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold-500" />
                Office
              </h3>

              <div className="group relative rounded-2xl overflow-hidden border border-navy-200 bg-white shadow-sm">
                <iframe
                  title="EKOSYS Corporate Office Location Map"
                  src="https://maps.google.com/maps?q=Opposite+to+Municipal+Office,+Hajipur,+Vaishali,+Bihar+844101&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="160"
                  style={{ border: 0, filter: "contrast(1.05) saturate(1.1)" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full opacity-90 group-hover:opacity-100 transition-opacity"
                />

                <div className="p-3.5 bg-white/95 border-t border-navy-200">
                  <p className="text-xs font-bold text-navy-900 flex items-center gap-1">
                    <span>EKOSYS Corporate Office</span>
                  </p>
                  <p className="text-[11px] text-gray-600 mt-0.5 line-clamp-1">
                    Opposite to Municipal Office, Hajipur, Bihar
                  </p>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2.5 inline-flex items-center justify-center gap-1.5 w-full py-1.5 px-3 rounded-full text-xs font-bold text-white bg-green-700 hover:bg-green-600 transition-all shadow-xs"
                  >
                    <Navigation className="w-3 h-3" />
                    <span>Get Directions on Google Maps</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="mt-3">
                <span className="inline-block px-2.5 py-1 text-[11px] font-semibold tracking-wider text-green-700 bg-green-50 border border-green-200 rounded-full">
                  OPERATIONAL PAN-INDIA
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="relative py-6 bg-white text-xs text-navy-700 border-t border-navy-200">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/about" className="hover:text-green-700 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/about" className="hover:text-green-700 transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="hover:text-green-700 transition-colors">
                Legal & Compliance
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
