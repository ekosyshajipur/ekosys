"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Tag } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { FEATURED_PROJECTS } from "@/lib/constants";

const CATEGORIES = ["All", "Solar", "Facade", "Architecture", "Healthcare", "IT Infrastructure"];

export default function FeaturedProjects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((p) => p.category === filter);

  return (
    <section className="py-20 lg:py-32 bg-white relative" id="projects-preview">
      <Container>
        <SectionHeading
          tag="PORTFOLIO & CAPABILITIES"
          title="Featured Projects & Infrastructure Deliverables"
          description="A glimpse into landmark installations, specialized equipment commissioning, and architectural solutions executed by our teams."
        />

        {/* Filter Pills */}
        <div className="mt-12 flex items-center justify-start sm:justify-center overflow-x-auto pb-4 gap-2 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                filter === cat
                  ? "bg-green-700 text-white shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="group rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 bg-navy-950/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md border border-white/10">
                    {project.type}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                    <span className="font-semibold text-green-700">{project.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />
                      {project.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-navy-900 group-hover:text-green-700 transition-colors font-heading mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-600 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-gray-50 flex items-center justify-between">
                <Link
                  href="/contact"
                  className="text-xs font-bold text-navy-900 group-hover:text-green-700 transition-colors inline-flex items-center gap-1"
                >
                  Consult on Similar Project
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy-900 hover:bg-navy-800 text-white rounded-xl text-sm font-semibold transition-all shadow-sm"
          >
            <span>View Full Project Showcase</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
