import { Search, PenTool, Cog, Rocket, Headphones } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/lib/constants";

const ICON_MAP = {
  Search,
  PenTool,
  Cog,
  Rocket,
  Headphones,
};

export default function EngineeringProcess() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50/60 relative border-b border-gray-100" id="process">
      <Container>
        <SectionHeading
          tag="EXECUTION FRAMEWORK"
          title="The EKOSYS Engineering Methodology"
          description="A systematic 5-stage lifecycle ensuring timeline predictability, structural reliability, and cost-efficient outcomes."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = ICON_MAP[step.icon as keyof typeof ICON_MAP] || Cog;
            return (
              <div
                key={step.number}
                className="relative bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between h-full"
              >
                {/* Step indicator header */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black text-green-700/60 font-heading">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-700">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-navy-900 mb-2 font-heading">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-semibold tracking-wider text-gray-400 uppercase">
                  <span>Stage {idx + 1} of 5</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
