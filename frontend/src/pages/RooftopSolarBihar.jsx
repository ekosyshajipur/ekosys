import SeoPageLayout from "../components/SeoPageLayout";

const highlights = [
  { title: "Lower monthly bills", text: "Cut electricity costs with rooftop solar generation for homes, offices and shops." },
  { title: "Full subsidy support", text: "We handle PM Surya Ghar and government subsidy paperwork end-to-end." },
  { title: "Quality installation", text: "Certified engineers install durable solar modules and inverters with precision." },
  { title: "Local Bihar expertise", text: "We know local regulations, weather and grid requirements across Bihar." },
];

const benefits = [
  "Reduce monthly electricity bills",
  "Generate clean renewable energy",
  "Low maintenance requirements",
  "Increase property value",
  "Long-lasting solar panel systems",
  "Government subsidy support available",
  "Suitable for homes, shops and offices",
  "Reliable power generation during daytime",
];

const reasons = [
  "Professional rooftop solar installation team",
  "Affordable pricing and quality products",
  "Government subsidy guidance",
  "Residential and commercial system designs",
  "Fast installation and technical support",
  "Reliable maintenance and monitoring services",
  "Modern and efficient solar technology",
];

const processSteps = [
  "Site inspection and roof analysis",
  "Solar energy requirement calculation",
  "Customized rooftop solar system design",
  "Selection of solar panels and inverter",
  "Installation of mounting structure",
  "Solar panel and inverter setup",
  "System testing and safety verification",
  "Final activation and maintenance support",
];

const moreLinks = [
  { label: "Best Solar Installation Services in Bihar", to: "/solar-installation-bihar" },
  { label: "Learn About Solar Subsidy in Bihar", to: "/solar-subsidy-bihar" },
  { label: "Residential Solar Systems in Bihar", to: "/residential-solar-bihar" },
  { label: "Industrial Solar Installation Services", to: "/industrial-solar-bihar" },
  { label: "Solar Maintenance Services", to: "/solar-maintenance" },
];

const faqs = [
  { q: "What is a rooftop solar system?", a: "A rooftop solar system is a solar power setup installed on the roof of homes, offices or commercial buildings to generate electricity using sunlight." },
  { q: "Is rooftop solar suitable for homes in Bihar?", a: "Yes, Bihar receives sufficient sunlight throughout the year, making rooftop solar systems highly effective for residential homes and businesses." },
  { q: "How much electricity bill can I save with rooftop solar?", a: "Savings depend on system size and electricity usage, but rooftop solar systems can significantly reduce monthly electricity costs." },
  { q: "Can I get government subsidy for rooftop solar installation?", a: "Yes, eligible customers can receive government subsidy benefits for rooftop solar systems under approved solar energy schemes." },
  { q: "How long do rooftop solar panels last?", a: "High-quality rooftop solar panels generally last for 20 to 25 years with proper maintenance and cleaning." },
  { q: "Does rooftop solar require regular maintenance?", a: "Rooftop solar systems require minimal maintenance. Regular cleaning and periodic inspections help maintain efficiency." },
  { q: "Can rooftop solar work during power cuts?", a: "Standard on-grid solar systems shut down during power cuts for safety reasons. Off-grid and hybrid systems can provide backup power with batteries." },
  { q: "Does Ekosys provide installation and maintenance support?", a: "Yes, Ekosys provides complete rooftop solar installation, maintenance, cleaning and technical support services across Bihar." },
  { q: "Which areas does Ekosys serve?", a: "Ekosys provides rooftop solar installation services across Bihar including Vaishali, Hajipur and nearby regions." },
];

function RooftopSolarBihar() {
  return (
    <SeoPageLayout
      metaTitle="Rooftop Solar Installation in Bihar | Best Rooftop Solar Company | Ekosys"
      metaDescription="Ekosys provides professional rooftop solar installation services in Bihar for homes, offices and industries. Get affordable rooftop solar systems, subsidy support and renewable energy solutions."
      metaKeywords="rooftop solar Bihar, rooftop solar installation Bihar, rooftop solar company Bihar, solar panels for home Bihar, rooftop solar Vaishali, solar company Hajipur, residential rooftop solar, commercial rooftop solar, solar subsidy Bihar, rooftop solar solutions, Ekosys solar"
      pageTitle="Rooftop Solar Installation in Bihar"
      descriptionParagraphs={[
        "Ekosys provides advanced rooftop solar installation services in Bihar for homes, offices and industries. Our rooftop solar systems help customers reduce electricity bills and switch to clean renewable energy solutions.",
        "Rooftop solar is a smart long-term investment in Bihar. It delivers reliable generation, lower utility costs, attractive subsidy access and durable performance with minimal upkeep."
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

export default RooftopSolarBihar;
