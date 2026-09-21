import { Shield, Layers, Globe, Target, Award, HeartHandshake } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { WHY_EKOSYS } from "@/lib/constants";

const ICON_MAP = {
  Shield,
  Layers,
  Globe,
  Target,
  Award,
  HeartHandshake,
};

export default function WhyEkosys() {
  return (
    <section className="py-20 lg:py-32 bg-white relative" id="why-ekosys">
      <Container>
        <SectionHeading
          tag="THE EKOSYS ADVANTAGE"
          title="Why Leading Enterprises & Institutions Choose EKOSYS"
          description="Built on engineering rigor, transparent project governance, and an unwavering commitment to long-term lifecycle performance."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_EKOSYS.map((item) => {
            const Icon = ICON_MAP[item.icon as keyof typeof ICON_MAP] || Shield;
            return (
              <div
                key={item.title}
                className="p-8 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-700 flex items-center justify-center mb-6 group-hover:bg-green-700 group-hover:text-white transition-colors">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3 font-heading">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Corporate Certification Bar */}
        <div className="mt-16 border-t border-gray-100 pt-10 flex flex-wrap items-center justify-between gap-6 text-xs text-gray-500 font-medium">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span>ISO 9001:2015 Quality Frameworks</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span>MNRE / State Discom Approved Solar EPC</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span>ASTM & BIS Compliant Facade Standards</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span>Certified Biomedical & IT Engineers</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
