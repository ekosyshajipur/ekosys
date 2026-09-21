import CoreSolutions from "@/components/home/CoreSolutions";
import Hero from "@/components/hero/Hero";
import Introduction from "@/components/home/Introduction";
import SolutionSelector from "@/components/home/SolutionSelector";
import WhyEkosys from "@/components/home/WhyEkosys";
import Industries from "@/components/home/Industries";
import EngineeringProcess from "@/components/home/EngineeringProcess";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import BlogPreview from "@/components/home/BlogPreview";
import CtaBanner from "@/components/home/CtaBanner";
import ContactPreview from "@/components/home/ContactPreview";

export default function Home() {
  return (
    <>
      {/* 01. Five Specialized Engineering Divisions (Top Section) */}
      <CoreSolutions />

      {/* 02. Corporate Flagship Narrative & Hero Statement */}
      <Hero />

      {/* 03. Corporate Profile, Ecosystem & Metrics */}
      <Introduction />

      {/* 04. Interactive Division & Gallery Explorer */}
      <SolutionSelector />

      {/* 05. Why Choose EKOSYS */}
      <WhyEkosys />

      {/* 06. Cross-Sector Industry Impact */}
      <Industries />

      {/* 07. Engineering Methodology & Lifecycle */}
      <EngineeringProcess />

      {/* 08. Featured Projects Showcase */}
      <FeaturedProjects />

      {/* 09. Latest Insights & Technical Guides */}
      <BlogPreview />

      {/* 10. High-Conversion CTA Banner */}
      <CtaBanner />

      {/* 11. Quick Engineering Enquiry & Headquarters */}
      <ContactPreview />
    </>
  );
}
