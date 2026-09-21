import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { DIVISIONS } from "@/lib/constants";

export default function CoreSolutions() {
  return (
    <section className="pt-10 sm:pt-14 lg:pt-16 pb-20 lg:pb-32 bg-white relative overflow-hidden" id="solutions">
      {/* Background blueprint subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <Container className="relative">
        <SectionHeading
          as="h1"
          tag="ENTERPRISE DIVISIONS"
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
                className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isReversed ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Visual Image Column */}
                <div
                  className={`lg:col-span-6 relative ${
                    isReversed ? "lg:col-start-7" : ""
                  }`}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[16/11] img-zoom border border-gray-100 bg-gray-50">
                    <Image
                      src={division.mainImage}
                      alt={`${division.brand} — ${division.title}`}
                      fill
                      priority={idx < 2}
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Floating pill badge */}
                    <div className="absolute top-4 left-4 bg-navy-950/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/10">
                      {division.category}
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-center ${
                    isReversed ? "lg:col-start-1" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-extrabold text-green-700 tracking-wider font-heading">
                      DIVISION {division.number}
                    </span>
                    <div className="h-px w-8 bg-gray-300" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                      {division.brand}
                    </span>
                  </div>

                  <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 tracking-tight font-heading">
                    {division.title}
                  </h2>

                  <p className="mt-4 text-base text-gray-600 leading-relaxed">
                    {division.description}
                  </p>

                  {/* Key Services Tags */}
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

                  {/* Actions */}
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <a
                      href={division.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-navy-900 hover:bg-navy-800 rounded-xl transition-all shadow-sm hover:shadow"
                    >
                      <span>{division.cta}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                    <Link
                      href={`/contact?division=${division.id}`}
                      className="text-sm font-semibold text-navy-800 hover:text-green-700 transition-colors px-3 py-2"
                    >
                      Request Technical Consultation →
                    </Link>
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
