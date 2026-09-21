import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowUpRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { generatePageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Engineering Projects & Portfolio — EKOSYS CORPORATION",
  description:
    "Explore featured engineering deliverables across solar power plants, architectural curtain walls, hospital installations, residential societies, and IT systems.",
  path: "/projects",
});

const ALL_PROJECTS = [
  {
    title: "MW-Scale Industrial Solar EPC",
    category: "Solar EPC",
    location: "Industrial Zone, Bihar",
    image: "/images/solar/Solar-Industrial-Image.webp",
    description: "Turnkey rooftop and ground-mounted solar power setup reducing commercial grid reliance by 65% with tier-1 bifacial panels.",
    highlights: ["1.2 MW Peak Capacity", "Tier-1 Mono PERC Modules", "Zero-Export Grid Compliance"],
  },
  {
    title: "High-Rise Commercial Curtain Wall System",
    category: "Architectural Facade",
    location: "Corporate Hub, India",
    image: "/images/facade/Curtain-Wall-Image.webp",
    description: "Unitized double-glazed facade system designed for acoustic isolation, solar heat reduction, and structural wind resistance.",
    highlights: ["Unitized Glazing", "DGU Low-E Glass", "Wind Load Tested to 2.5 kPa"],
  },
  {
    title: "Multi-Specialty Hospital Equipment & OT Setup",
    category: "Medical Technology",
    location: "Healthcare Facility, Bihar",
    image: "/images/medTech/Operation-Theatre-Image.webp",
    description: "Complete modular operation theatre commissioning including surgical lighting, anesthesia workstations, and medical gas pipeline systems.",
    highlights: ["NABH Compliant Standards", "HEPA Filtration Setup", "Diagnostic Systems Integration"],
  },
  {
    title: "Luxury Residential Society Master Planning",
    category: "Architecture & Design",
    location: "Vaishali Region, Bihar",
    image: "/images/DesignLab/Residential-Society-Image.webp",
    description: "Integrated residential community blueprinting encompassing eco-villas, modern landscaping, drainage networks, and solar lighting.",
    highlights: ["Master Plan & 3D Renders", "Sustainable Water & Power", "Vastu-Compliant Layouts"],
  },
  {
    title: "Corporate Campus Network & IT Infrastructure",
    category: "IT Solutions",
    location: "Enterprise Office, Bihar",
    image: "/images/ITSolutions/Networking-Solutions-Image.webp",
    description: "Enterprise structured cabling, server racks, managed firewall routing, and CCTV surveillance backbone.",
    highlights: ["Cat6A Structured Cabling", "High-Availability Server Setup", "Biometric & Surveillance Integration"],
  },
  {
    title: "Institutional Rooftop Solar Installation",
    category: "Solar EPC",
    location: "Educational Institution, Bihar",
    image: "/images/solar/Solar-Installation.webp",
    description: "Grid-interactive solar rooftop engineering with remote telemetry and real-time generation monitoring dashboard.",
    highlights: ["Net Metering Synchronization", "Custom Aluminium Mounting", "25-Year Performance Guarantee"],
  },
  {
    title: "Modern Architectural Villa Elevation & Interiors",
    category: "Architecture & Design",
    location: "Hajipur, Bihar",
    image: "/images/DesignLab/Villa-Design-Image.webp",
    description: "Contemporary bespoke residence incorporating natural illumination, double-height living spaces, and energy-efficient building envelope.",
    highlights: ["3D Architectural Visualization", "Structural Stability Blueprint", "Interior Space Maximization"],
  },
  {
    title: "Advanced Medical Laboratory Suite",
    category: "Medical Technology",
    location: "Pathology Center, Bihar",
    image: "/images/medTech/Laboratory-Equipment-Image.webp",
    description: "Full supply and calibration of clinical analyzers, centrifuges, autoclaves, and temperature-controlled sample storage units.",
    highlights: ["Precision Calibration", "Annual Maintenance Contract", "Biomedical Engineer Oversight"],
  },
  {
    title: "Commercial Structural Glazing & ACP Cladding",
    category: "Architectural Facade",
    location: "Retail Commercial Plaza, Bihar",
    image: "/images/facade/Structural-Glazing-Image.webp",
    description: "Sleek frameless glass facade paired with fire-retardant ACP cladding for a high-traffic retail development.",
    highlights: ["Grade A2 Fire-Rated ACP", "Spider Glazing Assembly", "Weather-Sealed Silicon Joints"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="py-12 lg:py-16">
      {/* Header */}
      <section className="bg-navy-950 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-light opacity-20 pointer-events-none" />
        <Container className="relative">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-green-400 font-heading">
              PROVEN ENGINEERING EXCELLENCE
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight leading-tight">
              Featured Deliverables & <span className="text-green-400">Landmark Projects</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed">
              Explore how EKOSYS Corporation translates complex technical requirements into operational realities across Bihar and India.
            </p>
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ALL_PROJECTS.map((proj) => (
              <div
                key={proj.title}
                className="rounded-3xl border border-gray-100 bg-white shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4 bg-navy-950/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md border border-white/10">
                      {proj.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2">
                      <MapPin className="w-3.5 h-3.5 text-green-600" />
                      <span>{proj.location}</span>
                    </div>

                    <h3 className="text-xl font-bold text-navy-900 group-hover:text-green-700 transition-colors font-heading mb-3">
                      {proj.title}
                    </h3>

                    <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                      {proj.description}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-gray-100">
                      {proj.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <Link
                    href="/contact"
                    className="w-full py-3 px-4 rounded-xl bg-gray-50 hover:bg-green-50 text-navy-900 hover:text-green-700 border border-gray-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Request Engineering Proposal</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 font-heading">
              Have a Project in Mind?
            </h2>
            <p className="mt-3 text-gray-600 text-sm">
              Our engineering team conducts feasibility reviews, structural site assessments, and cost estimations for private and institutional clients.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-green-700 hover:bg-green-800 text-white rounded-xl text-sm font-semibold transition-all shadow-sm"
              >
                <span>Consult With Our Project Directors</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
