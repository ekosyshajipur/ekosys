import { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, Award, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Introduction from "@/components/home/Introduction";
import SolutionSelector from "@/components/home/SolutionSelector";
import WhyEkosys from "@/components/home/WhyEkosys";
import { generatePageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "About EKOSYS CORPORATION — Engineering Excellence & Innovation",
  description:
    "Discover EKOSYS Corporation — an integrated engineering, renewable energy, architectural facade, medical technology and IT conglomerate based in Bihar, serving India.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="py-6 lg:py-10">
      {/* 01. Hero Header */}
      <section className="relative overflow-hidden bg-[#F4F7F9] text-navy-900 py-20 lg:py-28 border-b border-navy-200">
        <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
        <Container className="relative">
          <div className="max-w-3xl">
            <span className="divi-badge text-green-700 border-green-500/25 bg-green-50 mb-4">
              ABOUT OUR ENTERPRISE
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight leading-tight text-navy-900">
              Engineering Built on <span className="text-green-700">Integrity, Precision</span> & Future Vision.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-navy-700 leading-relaxed">
              EKOSYS Corporation was founded to solve a fundamental challenge in the infrastructure and technology industry: fragmented engineering execution. By consolidating five mission-critical engineering disciplines under one corporate governance, we deliver unmatched quality and accountability.
            </p>
          </div>
        </Container>
      </section>

      {/* 02. Corporate Narrative */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 text-gray-700 leading-relaxed">
              <span className="divi-badge">
                OUR ORIGIN & PURPOSE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 font-heading tracking-tight">
                From Hajipur to Nationwide Impact
              </h2>
              <p>
                Headquartered opposite to the Municipal Office in Hajipur, Bihar, EKOSYS Corporation was established with a clear mandate: to bring Tier-1 global engineering practices, rigorous quality controls, and transparent project management to regional and national infrastructure projects.
              </p>
              <p>
                Over the years, we have scaled our operations across solar energy EPC, high-rise architectural facades, turnkey hospital medical technology installations, modern residential and commercial architecture, and enterprise digital infrastructure.
              </p>
              <p>
                Our clients include industrial corporations, commercial developers, government bodies, healthcare institutions, and discerning property owners who prioritize long-term durability and engineering excellence.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="divi-card p-5">
                  <div className="text-2xl font-bold text-navy-900 font-heading">5 Divisions</div>
                  <div className="text-xs text-gray-500 mt-1">Unified Under One Governance</div>
                </div>
                <div className="divi-card p-5">
                  <div className="text-2xl font-bold text-green-700 font-heading">100% Quality</div>
                  <div className="text-xs text-gray-500 mt-1">Guaranteed Project Handover</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] border border-gray-100">
                <Image
                  src="/images/facade/about_company.png"
                  alt="EKOSYS Corporate Infrastructure & Engineering"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden sm:block">
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

      {/* 03. Mission & Vision */}
      <section className="py-20 bg-gray-50/80 border-y border-gray-100">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="divi-card p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-700 flex items-center justify-center mb-6 shadow-xs">
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

            <div className="divi-card p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-navy-50 text-navy-800 flex items-center justify-center mb-6 shadow-xs">
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

      {/* 04. Moved Section 1: An Integrated Ecosystem of Engineering & Innovation */}
      <Introduction />

      {/* 05. Moved Section 2: Explore Our Engineering Capabilities */}
      <SolutionSelector />

      {/* 06. Moved Section 3: Why Leading Enterprises & Institutions Choose EKOSYS */}
      <WhyEkosys />

      {/* 07. Leadership & CTA */}
      <section className="py-20 bg-[#F4F7F9] text-navy-900 relative overflow-hidden border-t border-navy-200">
        <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
        <Container className="relative">
          <div className="text-center max-w-2xl mx-auto">
            <span className="divi-badge text-gold-700 border-gold-500/25 bg-gold-50 mb-4">
              COLLABORATE WITH EKOSYS
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold font-heading text-navy-900">
              Partner with an Engineering Powerhouse
            </h2>
            <p className="mt-4 text-navy-700 text-sm sm:text-base leading-relaxed">
              Whether you are planning an industrial solar installation, modern commercial facade, hospital medical wing, or IT upgrade, our directors are available for consultation.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button href="/contact" variant="accent" size="lg" arrow>
                Contact Corporate Office
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
