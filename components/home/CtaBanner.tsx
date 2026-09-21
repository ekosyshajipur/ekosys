import Link from "next/link";
import { Phone, MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import { SITE_CONFIG } from "@/lib/constants";

export default function CtaBanner() {
  return (
    <section className="py-20 lg:py-24 bg-navy-950 text-white relative overflow-hidden">
      {/* Visual accents */}
      <div className="absolute inset-0 bg-grid-light opacity-15 pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-green-600/10 blur-3xl pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gold-600/10 blur-3xl pointer-events-none" />

      <Container className="relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-950/80 border border-green-800 text-green-400 text-xs font-semibold tracking-wider uppercase mb-6">
            <ShieldCheck className="w-3.5 h-3.5" />
            ENTERPRISE & GOVERNMENT GRADE PARTNERSHIP
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight leading-tight">
            Ready to Engineer Your Next <span className="text-green-400">Milestone Project?</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Connect with our senior engineering directors for solar EPC, architectural facades, medical technology turnkey procurement, or IT infrastructure.
          </p>

          {/* Action Row */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-green-700 hover:bg-green-600 text-white font-bold text-sm transition-all shadow-lg hover:shadow-green-900/40 hover:-translate-y-0.5"
            >
              <span>Schedule Technical Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm transition-all shadow-md hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat via WhatsApp</span>
            </a>

            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-navy-900 hover:bg-navy-800 border border-navy-700 text-white font-bold text-sm transition-all hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              <span>{SITE_CONFIG.phone}</span>
            </a>
          </div>

          <p className="mt-8 text-xs text-gray-400 font-medium">
            Immediate response for RFP submissions, architectural tenders, and institutional inquiries.
          </p>
        </div>
      </Container>
    </section>
  );
}
