import SeoPageLayout from "../../components/SeoPageLayout";

const benefits = [
  "Enhance building aesthetics and property value",
  "Improve energy efficiency and thermal insulation",
  "Protect against harsh weather conditions",
  "Reduce noise pollution in commercial spaces",
  "Ensure long-term structural durability",
  "Modernize outdated building exteriors",
  "Maximize natural light penetration",
  "Customizable designs for unique architectural needs"
];

const reasons = [
  "15+ years of experience in facade engineering",
  "Premium quality materials (glass, aluminium, ACP)",
  "Expert structural engineers and installation teams",
  "Strict adherence to safety and building codes",
  "Timely project completion and handover",
  "End-to-end service from design to installation",
  "Competitive pricing for commercial projects",
];

const processSteps = [
  "Initial consultation and site survey",
  "Architectural design and material selection",
  "Structural load and wind analysis",
  "Custom fabrication of facade elements",
  "Safe and precise on-site installation",
  "Weatherproofing and sealing",
  "Final inspection and quality assurance",
  "Ongoing maintenance and support"
];

const moreLinks = [
  { label: "Structural Glazing", to: "/facade/structural-glazing" },
  { label: "Curtain Walls", to: "/facade/curtain-walls" },
  { label: "ACP Cladding", to: "/facade/acp-cladding" },
  { label: "Glass Facade", to: "/facade/glass-facade" },
  { label: "Aluminium Facade", to: "/facade/aluminium-facade" },
];

const faqs = [
  { q: "What is architectural facade engineering?", a: "Facade engineering involves the design, fabrication, and installation of the exterior envelope of a building, including structural glazing, curtain walls, and cladding, to enhance aesthetics and performance." },
  { q: "Which areas in Bihar do you provide facade services?", a: "We provide premium facade engineering services across major cities in Bihar, including Patna, Hajipur, Muzaffarpur, and Darbhanga." },
  { q: "Why is structural glazing important for commercial buildings?", a: "Structural glazing provides a sleek, modern, all-glass look while improving natural lighting and thermal efficiency, making it highly desirable for corporate offices and malls." },
  { q: "How long does a typical facade installation take?", a: "The timeline depends on the project size and complexity, ranging from a few weeks for small commercial setups to several months for large high-rise buildings." },
  { q: "Do you offer maintenance services for existing facades?", a: "Yes, Ekosys offers comprehensive facade maintenance, including cleaning, resealing, and repairs to ensure your building's exterior remains safe and visually appealing." },
];

function FacadeHub() {
  return (
    <SeoPageLayout
      metaTitle="Architectural Facade Engineering in Bihar | Structural Glazing | Ekosys"
      metaDescription="Ekosys is Bihar's top architectural facade engineering company. We specialize in structural glazing, curtain walls, ACP cladding, and glass facades for commercial buildings."
      metaKeywords="facade engineering Bihar, structural glazing Patna, curtain wall installation Bihar, ACP cladding Bihar, glass facade Hajipur, commercial building exterior, Ekosys facade"
      pageTitle="Architectural Facade Engineering in Bihar"
      descriptionParagraphs={[
        "Ekosys provides premium architectural facade engineering services across Bihar. We specialize in transforming the exteriors of commercial, corporate, and institutional buildings with state-of-the-art structural glazing, curtain walls, ACP cladding, and custom glass solutions.",
        "A well-designed building envelope not only defines the aesthetic identity of a structure but also plays a crucial role in its energy efficiency, weather resistance, and overall durability. Our expert engineering team ensures that every facade we build meets the highest standards of safety, functionality, and visual appeal.",
        "From initial architectural consultation and structural analysis to custom fabrication and precise on-site installation, Ekosys offers end-to-end facade solutions. We use premium materials and modern engineering techniques to deliver flawless exteriors that stand the test of time.",
        "Whether you are constructing a new high-rise office or renovating an existing commercial building, our facade engineering services provide the perfect blend of architectural beauty and structural integrity."
      ]}
      heroImage="/images/facade.webp"
      benefits={benefits}
      reasons={reasons}
      processSteps={processSteps}
      faqs={faqs}
      moreLinks={moreLinks}
      canonicalUrl="https://ekosys.in/facade"
      serviceName="Architectural Facade Engineering"
    />
  );
}

export default FacadeHub;
