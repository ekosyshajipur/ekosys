import SeoPageLayout from "../components/SeoPageLayout";

const highlights = [
  { title: "Home energy savings", text: "Reduce household electricity expenses with a rooftop solar system optimized for your family." },
  { title: "Subsidy assistance", text: "We guide homeowners through PM Surya Ghar subsidy eligibility and claim processing." },
  { title: "Fast installation", text: "Professional teams install your residential solar system quickly and cleanly." },
  { title: "24/7 support", text: "Local maintenance and service support keeps your home solar system running reliably." },
];

const benefits = [
  "Reduce monthly electricity bills",
  "Generate clean renewable energy",
  "Increase property value",
  "Low maintenance requirements",
  "Enhanced home energy independence",
  "Government subsidy support available",
  "Ideal for homes and apartments",
  "Clean power with minimal environmental impact",
];

const reasons = [
  "Experienced residential solar installation team",
  "Personalized solar design for homes",
  "Transparent pricing and quality products",
  "Government subsidy and net metering guidance",
  "Prompt installation and after-sales service",
  "Reliable cleaning and maintenance support",
  "Modern inverter and panel technology",
];

const processSteps = [
  "Home energy requirement assessment",
  "Roof condition and sunlight analysis",
  "Customized residential solar system design",
  "Selection of rooftop solar panels and inverter",
  "Professional mounting structure installation",
  "Panel installation and electrical setup",
  "System testing and safety certification",
  "Final activation and handover with support",
];

const moreLinks = [
  { label: "Rooftop Solar Solutions in Bihar", to: "/rooftop-solar-bihar" },
  { label: "Best Solar Installation Services in Bihar", to: "/solar-installation-bihar" },
  { label: "Learn About Solar Subsidy in Bihar", to: "/solar-subsidy-bihar" },
  { label: "Industrial Solar Installation Services", to: "/industrial-solar-bihar" },
  { label: "Solar Maintenance Services", to: "/solar-maintenance" },
];

const faqs = [
  { q: "What is a residential solar system?", a: "A residential solar system is a rooftop solar setup installed on homes or apartments to generate electricity from sunlight." },
  { q: "Is residential solar suitable for Bihar homes?", a: "Yes, Bihar receives ample sunlight most of the year, making residential solar highly effective and reliable." },
  { q: "How much can I save with home solar?", a: "Savings depend on home energy use and system size, but residential solar can reduce electricity bills significantly." },
  { q: "Can I get subsidy for home solar through Ekosys?", a: "Yes, Ekosys assists homeowners with government subsidy applications and claims for solar installations." },
  { q: "How often does a home solar system need maintenance?", a: "Residential solar systems require minimal maintenance, with periodic cleaning and checks for peak performance." },
  { q: "Can residential solar work during power cuts?", a: "Standard on-grid systems shut off during power cuts. We also offer hybrid and battery-backed options for backup power." },
  { q: "Does Ekosys provide after-sales support?", a: "Yes, we provide local maintenance, monitoring and service support for residential solar customers across Bihar." },
];

function ResidentialSolarBihar() {
  return (
    <SeoPageLayout
      metaTitle="Residential Solar Installation in Bihar | Home Solar Systems | Ekosys"
      metaDescription="Ekosys provides residential solar installation services in Bihar for homes and apartments. Get affordable rooftop solar systems, subsidy support and reliable renewable energy solutions."
      metaKeywords="residential solar Bihar, home solar installation Bihar, rooftop solar for home Bihar, solar panels for home Bihar, residential rooftop solar, solar company Bihar, solar installation Vaishali, solar company Hajipur, home solar systems, solar subsidy Bihar, renewable energy Bihar, Ekosys solar solutions"
      pageTitle="Residential Solar Installation in Bihar"
      descriptionParagraphs={[
        "Ekosys provides professional residential solar installation services in Bihar for homes, apartments and residential buildings. Our home solar systems help families reduce electricity bills and switch to clean renewable energy solutions.",
        "We design residential solar systems that fit your budget and roof type, while maximizing energy generation and long-term savings."
      ]}
      heroImage="/images/services/residential.png"
      highlights={highlights}
      benefits={benefits}
      reasons={reasons}
      processSteps={processSteps}
      faqs={faqs}
      moreLinks={moreLinks}
    />
  );
}

export default ResidentialSolarBihar;
