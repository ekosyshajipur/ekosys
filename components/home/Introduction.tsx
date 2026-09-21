import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { CheckCircle2, ShieldCheck, Zap, Compass, Cpu, HeartPulse } from "lucide-react";

export default function Introduction() {
  const capabilities = [
    {
      title: "Renewable Energy Systems",
      desc: "Grid-tied, hybrid, and industrial solar installations delivering sustainable power.",
      icon: Zap,
      color: "text-green-600 bg-green-50",
    },
    {
      title: "Architectural Facades",
      desc: "High-performance unitized curtain walls, structural glazing, and architectural cladding.",
      icon: Compass,
      color: "text-navy-600 bg-navy-50",
    },
    {
      title: "Medical Technology",
      desc: "Comprehensive hospital engineering, surgical OT setups, and diagnostic instrumentation.",
      icon: HeartPulse,
      color: "text-blue-600 bg-blue-50",
    },
    {
      title: "Electronics & IT Infrastructure",
      desc: "Enterprise compute hardware, secure networking, CCTV, and mission-critical AMC services.",
      icon: Cpu,
      color: "text-indigo-600 bg-indigo-50",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gray-50/70 relative border-b border-gray-100" id="about-preview">
      <Container>
        <SectionHeading
          tag="CORPORATE PROFILE"
          title="An Integrated Ecosystem of Engineering & Innovation"
          description="EKOSYS Corporation combines visionary architecture, sustainable energy, precision medical technologies, and enterprise IT infrastructure under a single standard of excellence."
        />

        {/* Narrative Split */}
        <div className="mt-16 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 text-gray-600 leading-relaxed text-base sm:text-lg">
            <p>
              Headquartered in Hajipur, Bihar, and engineered to serve nationwide projects, <strong>EKOSYS Corporation</strong> addresses complex infrastructure demands by merging multi-disciplinary technical expertise with disciplined execution.
            </p>
            <p>
              Rather than managing fragmented vendors across power, architectural building envelopes, healthcare setups, and digital technology, our clients collaborate with a singular corporate partner dedicated to quality, safety, and operational longevity.
            </p>
            <div className="pt-2 space-y-3 font-medium text-navy-900">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                <span>End-to-end design, procurement, structural engineering & turnkey execution</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                <span>Strict regulatory compliance, BIS/ISO certifications, and safety standards</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                <span>Direct lifetime engineering assistance, warranty coverage, and regional AMC support</span>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${cap.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-navy-900 mb-2 font-heading">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-normal">
                    {cap.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Corporate Metrics Bar */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 bg-navy-950 rounded-3xl text-white">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-green-400 font-heading">5</div>
            <div className="mt-1 text-xs sm:text-sm text-gray-400 font-medium">Core Divisions</div>
          </div>
          <div className="text-center border-l border-navy-800">
            <div className="text-3xl sm:text-4xl font-extrabold text-gold-400 font-heading">25+ Yrs</div>
            <div className="mt-1 text-xs sm:text-sm text-gray-400 font-medium">Solar Warranty Performance</div>
          </div>
          <div className="text-center border-l border-navy-800">
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading">100%</div>
            <div className="mt-1 text-xs sm:text-sm text-gray-400 font-medium">Turnkey Responsibility</div>
          </div>
          <div className="text-center border-l border-navy-800">
            <div className="text-3xl sm:text-4xl font-extrabold text-green-400 font-heading">Pan-India</div>
            <div className="mt-1 text-xs sm:text-sm text-gray-400 font-medium">Project Delivery Network</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
