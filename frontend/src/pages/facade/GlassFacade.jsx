import SeoPageLayout from "../../components/SeoPageLayout";

const benefits = [
  "Unobstructed views and maximum natural daylight",
  "High visual impact for modern architectural designs",
  "Available in tinted, reflective, and Low-E options",
  "Improves occupant well-being through daylighting",
  "Strong and secure with toughened/laminated glass",
  "Can be combined with spider glazing or tension cables",
  "Highly resistant to environmental degradation"
];

const reasons = [
  "Specialists in advanced glass engineering and installation",
  "Partnerships with top glass manufacturers for premium quality",
  "Expertise in complex geometries and large-span glazing",
  "Strict safety protocols for glass handling and hoisting",
  "Comprehensive structural calculations for wind and dead loads",
  "Customized solutions for both commercial and luxury residential projects"
];

const processSteps = [
  "Architectural concept and feasibility study",
  "Selection of glass type (Low-E, laminated, tempered, etc.)",
  "Engineering design of the supporting structure (steel/spider/fin)",
  "Erection of the structural support system",
  "Careful hoisting and positioning of glass panels",
  "Fixing glass using specialized hardware (rotels/spiders)",
  "Application of structural weather seals",
  "Final safety audit and cleaning"
];

const moreLinks = [
  { label: "Facade Engineering Hub", to: "/facade" },
  { label: "Structural Glazing", to: "/facade/structural-glazing" },
  { label: "Curtain Wall Systems", to: "/facade/curtain-walls" },
  { label: "Aluminium Facade", to: "/facade/aluminium-facade" },
];

const faqs = [
  { q: "What types of glass are used in facades?", a: "Common types include toughened (tempered) glass for strength, laminated glass for safety, and Low-E (low emissivity) or reflective glass for thermal insulation and solar control." },
  { q: "Is a glass facade safe during an earthquake or high winds?", a: "Yes, when engineered properly. The supporting structures and glazing systems are designed to accommodate building sway and withstand high wind pressures specific to the region's climate data." },
  { q: "What is spider glazing?", a: "Spider glazing is a type of glass facade where glass panels are connected using stainless steel 'spider' fittings rather than continuous aluminium frames, offering an highly transparent, frameless look." },
  { q: "How do you control heat in a building with a glass facade?", a: "Heat is controlled by using high-performance Low-E or solar-control glass, double glazed units (DGUs), and integrating shading devices into the facade design." },
];

function GlassFacade() {
  return (
    <SeoPageLayout
      metaTitle="Custom Glass Facade Engineering in Bihar | Ekosys"
      metaDescription="Ekosys engineers stunning custom glass facades for commercial buildings in Bihar. We specialize in point-supported glazing, spider glazing, and high-performance glass."
      metaKeywords="glass facade Bihar, spider glazing installation, commercial glass exterior, architectural glass Bihar, toughened glass facade, Ekosys facade engineering"
      pageTitle="Custom Glass Facade Engineering in Bihar"
      descriptionParagraphs={[
        "A well-engineered glass facade defines modern architectural elegance. Ekosys specializes in the design, engineering, and installation of custom glass facades for commercial, institutional, and luxury residential buildings across Bihar.",
        "We offer a variety of sophisticated glass facade systems, including point-supported spider glazing, tension cable systems, and frameless structural glass fins. These systems provide maximum transparency and natural light, creating visually striking exteriors that make a powerful statement.",
        "Beyond aesthetics, we prioritize performance and safety. We work with high-performance glass types—such as Low-E, double-glazed units (DGU), and laminated safety glass—to ensure optimal thermal insulation, acoustic control, and structural integrity against wind and impact loads.",
        "From intricate structural calculations to the delicate hoisting and precise fixing of massive glass panels, the Ekosys engineering team handles every aspect of your custom glass facade project with unmatched expertise."
      ]}
      heroImage="/images/facade.webp"
      benefits={benefits}
      reasons={reasons}
      processSteps={processSteps}
      faqs={faqs}
      moreLinks={moreLinks}
      canonicalUrl="https://ekosys.in/facade/glass-facade"
      serviceName="Custom Glass Facade Engineering"
    />
  );
}

export default GlassFacade;
