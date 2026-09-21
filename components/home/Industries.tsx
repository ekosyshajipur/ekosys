import {
  Home,
  Building2,
  Factory,
  Heart,
  Landmark,
  Building,
  Compass,
  Scale,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { INDUSTRIES } from "@/lib/constants";

const ICON_MAP = {
  Home,
  Building2,
  Factory,
  Heart,
  Landmark,
  Building,
  Compass,
  Scale,
  GraduationCap,
  Briefcase,
};

export default function Industries() {
  return (
    <section className="py-20 lg:py-28 bg-navy-950 text-white relative overflow-hidden" id="industries">
      {/* Blueprint Grid Lines */}
      <div className="absolute inset-0 bg-grid-light opacity-20 pointer-events-none" />

      <Container className="relative">
        <SectionHeading
          tag="CROSS-SECTOR IMPACT"
          title="Industries We Empower"
          description="From municipal infrastructure to private residential communities, our engineering solutions operate across critical sectors."
          light
        />

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {INDUSTRIES.map((industry) => {
            const Icon = ICON_MAP[industry.icon as keyof typeof ICON_MAP] || Building2;
            return (
              <div
                key={industry.name}
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-navy-900/60 border border-navy-800/80 hover:border-green-500/50 hover:bg-navy-900 transition-all duration-200 group text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-800 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-green-600 transition-all">
                  <Icon className="w-6 h-6 text-green-400 group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm font-semibold text-gray-200 group-hover:text-white">
                  {industry.name}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
