import SeoPageLayout from "../components/SeoPageLayout";

const benefits = [
  "Reduce monthly electricity bills",
  "Environment friendly renewable energy",
  "Low maintenance cost",
  "Long-lasting solar panel systems",
  "Government subsidy support available",
  "Increase property value",
  "Reliable power generation",
  "Suitable for homes and industries",
];

const reasons = [
  "Experienced solar installation team",
  "Affordable pricing and quality products",
  "Government subsidy assistance",
  "Residential and industrial solar solutions",
  "Fast installation and technical support",
  "Customized rooftop solar systems",
  "Reliable maintenance services",
];

const processSteps = [
  "Site inspection and energy analysis",
  "Solar system planning and design",
  "Selection of solar panels and inverter",
  "Installation of mounting structure",
  "Solar panel and inverter setup",
  "Testing and safety verification",
  "Final system activation",
  "Maintenance and after-sales support",
];

const moreLinks = [
  { label: "Learn about Solar Subsidy in Bihar", to: "/solar-subsidy-bihar" },
  { label: "Rooftop Solar Solutions in Bihar", to: "/rooftop-solar-bihar" },
  { label: "Industrial Solar Installation Services", to: "/industrial-solar-bihar" },
  { label: "Solar Maintenance Services", to: "/solar-maintenance" },
];

const faqs = [
  { q: "What is the cost of solar installation in Bihar?", a: "Solar installation cost depends on system size, panel quality, inverter type and electricity consumption. Residential solar systems are generally more affordable and provide long-term savings." },
  { q: "Can I get government subsidy for rooftop solar?", a: "Yes, eligible customers can receive government subsidy benefits for rooftop solar installation under approved solar schemes." },
  { q: "How much electricity can solar panels generate?", a: "Solar energy generation depends on system size, sunlight exposure and panel efficiency. Properly installed systems can significantly reduce electricity bills." },
  { q: "Are solar panels suitable for homes in Bihar?", a: "Yes, rooftop solar systems are highly suitable for residential homes in Bihar because of good sunlight availability throughout the year." },
  { q: "How long do solar panels last?", a: "Most high-quality solar panels last for 20 to 25 years with proper maintenance and regular cleaning." },
  { q: "Does Ekosys provide maintenance services?", a: "Yes, Ekosys provides solar maintenance, panel cleaning, technical support and performance optimization services." },
  { q: "What is the difference between on-grid and off-grid solar systems?", a: "On-grid systems are connected to the electricity grid while off-grid systems use batteries for power storage and backup." },
  { q: "Is rooftop solar profitable for businesses?", a: "Yes, businesses can save a significant amount on electricity costs and achieve long-term financial benefits with industrial solar systems." },
  { q: "Which areas does Ekosys serve?", a: "Ekosys provides solar installation services across Bihar including Vaishali, Hajipur and nearby regions." },
];

function SolarInstallationBihar() {
  return (
    <SeoPageLayout
      metaTitle="Best Solar Installation in Bihar | Rooftop Solar Company | Ekosys"
      metaDescription="Ekosys provides the best solar installation services in Bihar including rooftop solar systems, residential solar panels, industrial solar projects, solar maintenance and government subsidy support."
      metaKeywords="solar installation in Bihar, rooftop solar Bihar, solar company in Bihar, best solar company in Vaishali, residential solar Bihar, industrial solar installation, solar subsidy Bihar, rooftop solar installation, renewable energy Bihar, Ekosys solar solutions"
      pageTitle="Best Solar Installation in Bihar"
      descriptionParagraphs={[
        "Ekosys is one of the leading solar installation companies in Bihar providing high-quality rooftop solar systems, residential solar panels, industrial solar projects and renewable energy solutions. We help homes, businesses and industries reduce electricity costs with efficient and affordable solar energy systems.",
        "Our expert team provides complete solar installation services including site inspection, solar panel setup, inverter installation, maintenance support and government subsidy guidance. We use advanced technology and premium solar products to ensure long-term performance and maximum energy savings.",
        "Solar energy is becoming one of the best investments for homes and businesses in Bihar. With increasing electricity bills and growing demand for clean energy, rooftop solar systems provide an excellent solution for reducing monthly expenses and supporting sustainable development."
      ]}
      heroImage="/images/services/commercial.png"
      benefits={benefits}
      reasons={reasons}
      processSteps={processSteps}
      faqs={faqs}
      moreLinks={moreLinks}
    />
  );
}

export default SolarInstallationBihar;
