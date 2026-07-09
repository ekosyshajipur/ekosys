import SeoPageLayout from "../../components/SeoPageLayout";

const benefits = [
  "Rapid on-site installation with unitized systems",
  "Superior thermal and acoustic insulation",
  "Excellent resistance to wind and water infiltration",
  "Accommodates building sway and seismic movement",
  "Highly customizable design options",
  "Reduces overall building weight",
  "Improves energy efficiency of the structure"
];

const reasons = [
  "Expertise in both unitized and stick-built curtain walls",
  "Precision factory fabrication for unitized panels",
  "High-quality weather sealing and gaskets",
  "Experienced installation teams for high-rise projects",
  "Compliance with stringent architectural standards",
  "End-to-end project management and execution"
];

const processSteps = [
  "Architectural design and system selection",
  "Detailed structural and thermal analysis",
  "Factory fabrication of unitized panels (if applicable)",
  "Installation of anchoring systems to the building slab",
  "Hoisting and fixing of curtain wall panels/mullions",
  "Integration of glass or opaque infill panels",
  "Application of perimeter weather sealing",
  "Final inspection and quality testing"
];

const moreLinks = [
  { label: "Facade Engineering Hub", to: "/facade" },
  { label: "Structural Glazing", to: "/facade/structural-glazing" },
  { label: "ACP Cladding Services", to: "/facade/acp-cladding" },
  { label: "Glass Facade Solutions", to: "/facade/glass-facade" },
];

const faqs = [
  { q: "What is a curtain wall system?", a: "A curtain wall is a non-structural outer covering of a building, usually made of an aluminium frame filled with glass, designed to keep the weather out and the occupants in without carrying any of the building's dead load." },
  { q: "What is the difference between unitized and stick-built curtain walls?", a: "Unitized systems are pre-assembled in the factory and installed on-site quickly as large panels. Stick-built systems are assembled piece-by-piece on-site, which takes longer but offers more on-site flexibility." },
  { q: "Do curtain walls provide good insulation?", a: "Yes, modern curtain wall systems use thermal breaks and double or triple glazing to provide excellent thermal insulation and energy efficiency." },
  { q: "Are curtain walls suitable for high-rise buildings?", a: "Absolutely. Curtain walls are specifically designed for high-rise buildings to accommodate structural deflections, wind loads, and seismic forces." },
];

function CurtainWalls() {
  return (
    <SeoPageLayout
      metaTitle="Curtain Wall Systems in Bihar | Unitized & Stick-Built | Ekosys"
      metaDescription="Ekosys engineers high-performance curtain wall systems in Bihar. We offer unitized and stick-built curtain walls for superior weather resistance and commercial building aesthetics."
      metaKeywords="curtain wall systems Bihar, unitized curtain wall, stick-built curtain wall, commercial building facade, aluminium curtain wall, Ekosys facade"
      pageTitle="Curtain Wall Systems in Bihar"
      descriptionParagraphs={[
        "Ekosys engineers and installs high-performance curtain wall systems for commercial and high-rise buildings across Bihar. A curtain wall is a premier facade solution that provides a lightweight, non-load-bearing exterior envelope, offering exceptional weather protection and striking architectural beauty.",
        "We specialize in both unitized and stick-built curtain wall systems. Unitized systems are factory-assembled and glazed for maximum quality control and rapid on-site installation, making them ideal for large-scale projects. Stick-built systems are assembled on-site, offering flexibility for complex or smaller architectural designs.",
        "Our curtain wall solutions are designed to accommodate structural deflections, wind loads, and thermal expansion while maintaining superior air and water tightness. We incorporate advanced thermal breaks and high-performance glazing to optimize the building's energy efficiency.",
        "Partner with Ekosys for reliable, precision-engineered curtain wall installations that elevate the visual appeal and sustainability of your commercial property."
      ]}
      heroImage="/images/facade.webp"
      benefits={benefits}
      reasons={reasons}
      processSteps={processSteps}
      faqs={faqs}
      moreLinks={moreLinks}
      canonicalUrl="https://ekosys.in/facade/curtain-walls"
      serviceName="Curtain Wall Systems"
    />
  );
}

export default CurtainWalls;
