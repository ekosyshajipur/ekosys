import SeoPageLayout from "../components/SeoPageLayout";

const benefits = [
  "Reduce solar installation cost",
  "Lower monthly electricity bills",
  "Promote renewable energy usage",
  "Increase long-term financial savings",
  "Support environmentally friendly energy solutions",
  "Encourage energy independence",
  "Improve return on solar investment",
  "Affordable rooftop solar installation for homes",
];

const reasons = [
  "Professional rooftop solar installation team",
  "Government subsidy guidance and support",
  "Affordable solar system solutions",
  "Customized residential solar systems",
  "Quality solar panels and modern technology",
  "Fast installation and technical support",
  "Reliable maintenance and after-sales service",
];

const processSteps = [
  "Site inspection and electricity usage analysis",
  "Selection of suitable rooftop solar system",
  "System design and quotation preparation",
  "Guidance for subsidy eligibility and documents",
  "Solar panel and inverter installation",
  "Testing and safety verification",
  "Subsidy application assistance",
  "Final activation and support services",
];

const moreLinks = [
  { label: "Best Solar Installation Services in Bihar", to: "/solar-installation-bihar" },
  { label: "Rooftop Solar Solutions in Bihar", to: "/rooftop-solar-bihar" },
  { label: "Residential Solar Systems in Bihar", to: "/residential-solar-bihar" },
  { label: "Industrial Solar Installation Services", to: "/industrial-solar-bihar" },
  { label: "Solar Maintenance Services", to: "/solar-maintenance" },
];

const faqs = [
  { q: "What is solar subsidy?", a: "Solar subsidy is financial assistance provided under government schemes to reduce the cost of rooftop solar installation for eligible customers." },
  { q: "Who can apply for rooftop solar subsidy in Bihar?", a: "Residential homeowners installing approved rooftop solar systems are generally eligible for subsidy benefits under government programs." },
  { q: "Can commercial and industrial users get subsidy?", a: "Subsidy policies may vary depending on government guidelines and specific schemes. Residential systems are usually prioritized." },
  { q: "How much subsidy can I get for rooftop solar?", a: "Subsidy amounts depend on system capacity, government rules and approved solar schemes available at the time of installation." },
  { q: "Does Ekosys help with subsidy application?", a: "Yes, Ekosys provides guidance and support for subsidy eligibility, required documents and application processes." },
  { q: "Is rooftop solar profitable after subsidy?", a: "Yes, subsidy support helps reduce installation costs and improves long-term savings from reduced electricity bills." },
  { q: "What documents are required for subsidy application?", a: "Required documents may include identity proof, electricity bill, property details and bank account information depending on scheme requirements." },
  { q: "How long does subsidy approval take?", a: "Approval timelines vary depending on government processes and application verification procedures." },
  { q: "Does Ekosys provide rooftop solar installation services?", a: "Yes, Ekosys provides complete rooftop solar installation services along with subsidy support across Bihar." },
  { q: "Which areas does Ekosys serve?", a: "Ekosys provides rooftop solar installation and subsidy guidance services across Bihar including Vaishali, Hajipur and nearby regions." },
];

function SolarSubsidyBihar() {
  return (
    <SeoPageLayout
      metaTitle="Solar Subsidy in Bihar | Government Rooftop Solar Scheme | Ekosys"
      metaDescription="Get complete information about solar subsidy in Bihar with Ekosys. Learn about government rooftop solar schemes, subsidy eligibility, application process, benefits and residential solar installation support."
      metaKeywords="solar subsidy Bihar, rooftop solar subsidy Bihar, government solar scheme Bihar, PM Surya Ghar Yojana Bihar, solar subsidy for home Bihar, rooftop solar subsidy India, residential solar subsidy, solar installation subsidy Bihar, solar company Bihar, rooftop solar scheme, solar subsidy Vaishali, Ekosys solar subsidy support"
      pageTitle="Solar Subsidy in Bihar"
      descriptionParagraphs={[
        "Ekosys provides complete guidance and support for rooftop solar subsidy in Bihar. Government solar subsidy schemes help residential customers reduce solar installation costs and encourage the use of clean renewable energy.",
        "Rooftop solar systems are becoming increasingly popular in Bihar because they help reduce electricity bills and provide long-term energy savings. Government subsidy programs make solar installation more affordable for homeowners and residential users.",
        "Our expert team helps customers understand subsidy eligibility, application procedures, required documents and rooftop solar system installation processes. Ekosys provides professional support for residential rooftop solar projects across Bihar including Vaishali and Hajipur regions.",
        "We help customers choose the best rooftop solar systems according to their electricity requirements and budget while maximizing subsidy benefits under approved government solar schemes."
      ]}
      heroImage="/images/services/subsidy.png"
      benefits={benefits}
      reasons={reasons}
      processSteps={processSteps}
      faqs={faqs}
      moreLinks={moreLinks}
    />
  );
}

export default SolarSubsidyBihar;