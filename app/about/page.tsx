import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Target, Eye, Award, CheckCircle2, ArrowRight, Users, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { SITE_CONFIG, DIVISIONS } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "About EKOSYS CORPORATION — Engineering Excellence & Innovation",
  description:
    "Discover EKOSYS Corporation — an integrated engineering, renewable energy, architectural facade, medical technology and IT conglomerate based in Bihar, serving India.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="py-12 lg:py-16">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-navy-950 text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-light opacity-20 pointer-events-none" />
        <Container className="relative">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-green-400 font-heading">
              ABOUT OUR ENTERPRISE
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight leading-tight">
              Engineering Built on <span className="text-green-400">Integrity, Precision</span> & Future Vision.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed">
              EKOSYS Corporation was founded to solve a fundamental challenge in the infrastructure and technology industry: fragmented engineering execution. By consolidating five mission-critical engineering disciplines under one governance, we deliver unmatched quality and accountability.
            </p>
          </div>
        </Container>
      </section>

      {/* Corporate Narrative */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 text-gray-700 leading-relaxed">
              <span className="text-xs font-bold uppercase tracking-widest text-green-700">
                OUR ORIGIN & PURPOSE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 font-heading tracking-tight">
                From Hajipur to Nationwide Impact
              </h2>
              <p>
                Headquartered opposite to the Municipal Office in Hajipur, Bihar, EKOSYS Corporation was established with a clear mandate: to bring Tier-1 global engineering practices, rigorous quality controls, and transparent project management to regional and national markets.
              </p>
              <p>
                Over the years, we have scaled our operations across solar energy EPC, high-rise architectural facades, turnkey hospital installations, modern architectural planning, and enterprise digital infrastructure.
              </p>
              <p>
                Our clients include industrial corporations, commercial developers, government bodies, healthcare institutions, and discerning homeowners who require long-term durability rather than short-term shortcuts.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="text-2xl font-bold text-navy-900 font-heading">5 Divisions</div>
                  <div className="text-xs text-gray-500 mt-1">Unified Under One Brand</div>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="text-2xl font-bold text-green-700 font-heading">100% Quality</div>
                  <div className="text-xs text-gray-500 mt-1">Guaranteed Handover</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] border border-gray-100">
                <Image
                  src="/images/facade/Facade Engineering Team.webp"
                  alt="EKOSYS Engineering Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hidden sm:block">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-gold-500" />
                  <div>
                    <div className="font-bold text-navy-900 text-sm">Engineered For Longevity</div>
                    <div className="text-xs text-gray-500">25-Year Performance Standards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50/80 border-y border-gray-100">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-green-50 text-green-700 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 font-heading mb-4">
                  Our Corporate Mission
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  To engineer dependable, sustainable, and technologically advanced infrastructure solutions that empower communities, protect the environment, and accelerate regional economic prosperity through uncompromising craftsmanship.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-green-700">
                <CheckCircle2 className="w-4 h-4" />
                Zero-compromise engineering protocols
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-800 flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 font-heading mb-4">
                  Our Future Vision
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  To become Eastern India's most respected multi-disciplinary engineering conglomerate and a national benchmark for integrated solar, architectural, healthcare, and digital infrastructure delivery.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-navy-800">
                <CheckCircle2 className="w-4 h-4" />
                Continuous innovation and talent development
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Five Core Pillars */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <SectionHeading
            tag="CORPORATE ARCHITECTURE"
            title="The Five Pillars of EKOSYS"
            description="Our specialized divisions provide dedicated domain focus backed by shared corporate governance."
          />

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {DIVISIONS.map((div) => (
              <div
                key={div.id}
                className="p-8 rounded-3xl border border-gray-100 bg-white shadow-xs hover:shadow-lg transition-all"
              >
                <div className="text-xs font-bold text-green-700 tracking-wider uppercase mb-2">
                  Division {div.number}
                </div>
                <h3 className="text-xl font-bold text-navy-900 font-heading mb-3">
                  {div.brand}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {div.description}
                </p>
                <a
                  href={div.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-navy-900 hover:text-green-700 transition-colors inline-flex items-center gap-1.5"
                >
                  Visit Portal
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership & CTA */}
      <section className="py-16 bg-navy-950 text-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold font-heading">
              Partner with an Engineering Powerhouse
            </h2>
            <p className="mt-4 text-gray-300 text-sm sm:text-base">
              Whether you are planning an industrial solar installation, modern commercial facade, hospital medical wing, or IT upgrade, our directors are available for consultation.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button href="/contact" variant="accent" size="lg">
                Contact Corporate Office
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
