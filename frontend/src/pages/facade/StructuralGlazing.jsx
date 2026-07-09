import SeoPageLayout from "../../components/SeoPageLayout";

const benefits = [
  "Seamless, all-glass modern aesthetic",
  "Maximum natural light penetration",
  "Excellent thermal insulation properties",
  "Superior weather and water resistance",
  "Reduced structural weight compared to masonry",
  "Highly durable and low maintenance",
  "Increased commercial property value",
  "Enhanced acoustic insulation"
];

const reasons = [
  "Expert structural engineers for safe installation",
  "Use of high-grade silicone sealants and toughened glass",
  "Custom designs tailored to architectural requirements",
  "Adherence to national building safety codes",
  "Proven track record in commercial projects",
  "Timely execution and professional project management",
];

const processSteps = [
  "Detailed site survey and architectural review",
  "Structural load and wind pressure analysis",
  "Selection of glass and framing materials",
  "Installation of aluminium support structure",
  "Application of structural silicone sealant",
  "Precision placement of glass panels",
  "Curing and weatherproofing",
  "Final safety inspection and handover"
];

const moreLinks = [
  { label: "Facade Engineering Hub", to: "/facade" },
  { label: "Curtain Wall Systems", to: "/facade/curtain-walls" },
  { label: "ACP Cladding Services", to: "/facade/acp-cladding" },
  { label: "Glass Facade Solutions", to: "/facade/glass-facade" },
];

const faqs = [
  { q: "What is structural glazing?", a: "Structural glazing is a system where glass panels are bonded to a building's structural framing using high-strength silicone sealants, creating a continuous, frameless glass exterior." },
  { q: "Is structural glazing safe for high-rise buildings?", a: "Yes, when engineered and installed correctly by experts like Ekosys, structural glazing is highly safe and designed to withstand significant wind loads and environmental stress." },
  { q: "How long does the structural silicone sealant last?", a: "High-quality structural silicone sealants used in modern glazing systems can last for 20 to 30 years or more with proper application and maintenance." },
  { q: "Can structural glazing improve energy efficiency?", a: "Yes, by using double-glazed or low-E glass in the structural glazing system, buildings can significantly reduce heat transfer and lower air conditioning costs." },
];

function StructuralGlazing() {
  return (
    <SeoPageLayout
      metaTitle="Structural Glazing Services in Bihar | Frameless Glass Facades | Ekosys"
      metaDescription="Ekosys provides premium structural glazing services in Bihar. Enhance your commercial building with modern, frameless glass facades that offer superior aesthetics and performance."
      metaKeywords="structural glazing Bihar, frameless glass facade, silicone structural glazing, commercial glass exterior, Ekosys facade engineering, structural glazing Hajipur"
      pageTitle="Structural Glazing Services in Bihar"
      descriptionParagraphs={[
        "Transform your commercial building with Ekosys's premium structural glazing services in Bihar. Structural glazing creates a sleek, seamless, and all-glass exterior that defines modern corporate architecture while providing excellent structural integrity.",
        "Unlike traditional framing systems where metal is visible on the outside, structural glazing uses high-performance silicone sealants to bond glass panels directly to the building's aluminium framework. This results in a stunning, flush exterior surface that maximizes natural light and minimizes visual interruptions.",
        "Our expert facade engineering team ensures that every structural glazing project is meticulously planned and executed. We conduct rigorous wind load and structural analyses to guarantee the safety, durability, and weather resistance of the facade under all environmental conditions.",
        "Ideal for office complexes, shopping malls, and high-rise commercial buildings, our structural glazing solutions provide unmatched architectural elegance, energy efficiency, and long-term performance."
      ]}
      heroImage="/images/facade.webp"
      benefits={benefits}
      reasons={reasons}
      processSteps={processSteps}
      faqs={faqs}
      moreLinks={moreLinks}
      canonicalUrl="https://ekosys.in/facade/structural-glazing"
      serviceName="Structural Glazing"
    />
  );
}

export default StructuralGlazing;
