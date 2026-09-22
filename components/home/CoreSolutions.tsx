import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { DIVISIONS, SITE_CONFIG } from "@/lib/constants";

export default function CoreSolutions() {
  const getWhatsAppUrl = (division: (typeof DIVISIONS)[number]) => {
    const message = `Hello EKOSYS, I am interested in ${division.brand} services for ${division.title.toLowerCase()}. Please share details about pricing, project scope, and next steps.`;
    return `${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="pt-10 sm:pt-14 lg:pt-16 pb-20 lg:pb-32 bg-white relative overflow-hidden" id="solutions">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <Container className="relative">
        <SectionHeading
          as="h1"
          title="Five Specialized Engineering Solutions"
          description="Each EKOSYS division operates with domain-specific engineering leadership while benefiting from unified corporate governance and quality assurance."
        />

        <div className="mt-14 sm:mt-16 space-y-16 lg:space-y-24">
          {DIVISIONS.map((division, idx) => {
            const isReversed = idx % 2 !== 0;
            return (
              <div
                key={division.id}
                id={division.id}
                className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-start lg:items-stretch ${
                  isReversed ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div
                  className={`lg:col-span-6 relative ${
                    isReversed ? "lg:col-start-7" : ""
                  }`}
                >
                  <a
                    href={division.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block relative rounded-[28px] overflow-hidden shadow-[0_18px_50px_rgba(10,22,40,0.10)] aspect-[16/11] lg:aspect-auto lg:h-full img-zoom border border-gray-100 bg-gray-50"
                    aria-label={`Open ${division.brand} website`}
                  >
                    <Image
                      src={division.mainImage}
                      alt={`${division.brand} — ${division.title}`}
                      fill
                      priority={idx < 2}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/45 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-navy-900 text-[11px] font-bold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full border border-navy-200 shadow-sm">
                      {division.category}
                    </div>
                  </a>
                </div>

                <div
                    className={`lg:col-span-6 flex flex-col justify-center lg:h-full ${
                    isReversed ? "lg:col-start-1" : ""
                  }`}
                >
                  <a
                    href={division.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-block"
                    aria-label={`Open ${division.brand} website`}
                  >
                    <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 tracking-tight font-heading transition-colors group-hover:text-green-700">
                      {division.title}
                    </h2>
                  </a>

                  <p className="mt-4 text-base text-gray-600 leading-relaxed">
                    {division.description}
                  </p>

                  <div className="mt-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-3">
                      Core Capabilities
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {division.services.slice(0, 7).map((srv) => (
                        <span
                          key={srv}
                          className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-gray-50 text-navy-800 border border-gray-200/70 rounded-lg hover:border-gray-300 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <a
                      href={division.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-bold text-white bg-navy-900 hover:bg-navy-800 rounded-full transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
                    >
                      <span>{division.cta}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                    <a
                      href={getWhatsAppUrl(division)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-green-700 bg-green-50 border border-green-200 hover:bg-green-100 rounded-full transition-all shadow-sm hover:shadow-md"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Inquiry</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
