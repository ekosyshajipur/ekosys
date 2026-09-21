"use client";

import { useState } from "react";
import Image from "next/image";
import { Sun, Building2, HeartPulse, Compass, Monitor, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { DIVISIONS } from "@/lib/constants";

const ICON_MAP = {
  solar: Sun,
  facade: Building2,
  medtech: HeartPulse,
  designlab: Compass,
  itsolutions: Monitor,
};

export default function SolutionSelector() {
  const [activeTab, setActiveTab] = useState(DIVISIONS[0].id);
  const activeDivision = DIVISIONS.find((d) => d.id === activeTab) || DIVISIONS[0];
  const ActiveIcon = ICON_MAP[activeDivision.id as keyof typeof ICON_MAP] || Sun;

  return (
    <section className="py-20 lg:py-28 bg-gray-50 relative border-y border-gray-100" id="selector">
      <Container>
        <SectionHeading
          tag="INTERACTIVE EXPLORER"
          title="Explore Our Engineering Capabilities"
          description="Switch between divisions to discover specialized technologies, project applications, and domain equipment."
        />

        {/* Tab Navigation */}
        <div className="mt-12 flex items-center justify-start sm:justify-center overflow-x-auto pb-4 gap-2 no-scrollbar">
          {DIVISIONS.map((div) => {
            const Icon = ICON_MAP[div.id as keyof typeof ICON_MAP] || Sun;
            const isActive = div.id === activeTab;
            return (
              <button
                key={div.id}
                onClick={() => setActiveTab(div.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-semibold whitespace-nowrap transition-all duration-200 border ${
                  isActive
                    ? "bg-navy-900 text-white border-navy-900 shadow-md scale-[1.02]"
                    : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:text-navy-900"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-green-400" : "text-gray-400"}`} />
                <span>{div.brand.replace("EKOSYS ", "")}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Panel */}
        <div className="mt-8 bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-gray-200/80 shadow-sm">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Info */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-lg uppercase tracking-wider mb-4">
                  <ActiveIcon className="w-3.5 h-3.5" />
                  {activeDivision.category}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 font-heading">
                  {activeDivision.title}
                </h3>
                <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                  {activeDivision.description}
                </p>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                    Key Deliverables & Services
                  </h4>
                  <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-gray-700">
                    {activeDivision.services.map((srv) => (
                      <li key={srv} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                        <span>{srv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href={activeDivision.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-700 hover:bg-green-800 text-white rounded-xl font-semibold text-sm transition-all shadow-sm"
                >
                  <span>Visit {activeDivision.brand} Portal</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Gallery Showcase */}
            <div className="lg:col-span-7 space-y-4">
              {/* Primary Selected Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-gray-100 shadow-md">
                <Image
                  src={activeDivision.images[0]}
                  alt={`${activeDivision.brand} Primary`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md text-white text-xs font-medium">
                  Flagship Deployment
                </div>
              </div>

              {/* 4 Thumbnails / Sub-images */}
              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                {activeDivision.images.slice(1, 5).map((imgUrl, i) => (
                  <div
                    key={imgUrl}
                    className="relative rounded-xl overflow-hidden aspect-video border border-gray-100 bg-gray-100 shadow-xs group"
                  >
                    <Image
                      src={imgUrl}
                      alt={`${activeDivision.brand} thumbnail ${i + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="150px"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
