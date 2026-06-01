import SeoPageLayout from "../components/SeoPageLayout";

const benefits = [
  "Reduce industrial electricity expenses",
  "Generate clean renewable energy",
  "Lower operational costs",
  "Improve long-term business savings",
  "Low maintenance requirements",
  "Reliable daytime electricity generation",
  "Support sustainable business operations",
  "Increase energy independence",
];

const reasons = [
  "Experienced industrial solar installation team",
  "Customized solar solutions for industries",
  "Affordable pricing and quality products",
  "Advanced solar technology and efficient systems",
  "Fast installation and technical support",
  "Reliable maintenance and monitoring services",
  "Professional project planning and execution",
];

const processSteps = [
  "Site inspection and roof analysis",
  "Industrial energy requirement assessment",
  "Customized solar system design",
  "Selection of solar panels and inverter",
  "Installation of mounting structures",
  "Solar panel and inverter setup",
  "Testing and safety verification",
  "System activation and maintenance support",
];

const moreLinks = [
  { label: "Best Solar Installation Services in Bihar", to: "/solar-installation-bihar" },
  { label: "Rooftop Solar Solutions in Bihar", to: "/rooftop-solar-bihar" },
  { label: "Residential Solar Systems in Bihar", to: "/residential-solar-bihar" },
  { label: "Learn About Solar Subsidy in Bihar", to: "/solar-subsidy-bihar" },
  { label: "Solar Maintenance Services", to: "/solar-maintenance" },
];

const faqs = [
  { q: "What is an industrial solar system?", a: "An industrial solar system is a large-scale solar power setup used by factories, warehouses and commercial businesses to generate electricity using solar energy." },
  { q: "Why should industries install solar systems?", a: "Industrial solar systems help businesses reduce electricity costs, improve energy efficiency and support sustainable operations." },
  { q: "Can industrial solar reduce operational costs?", a: "Yes, industrial solar systems can significantly reduce monthly electricity expenses and provide long-term financial savings." },
  { q: "Is industrial rooftop solar suitable in Bihar?", a: "Yes, Bihar receives sufficient sunlight making industrial rooftop solar systems highly effective for factories and commercial buildings." },
  { q: "How long do industrial solar panels last?", a: "High-quality industrial solar panels generally last for 20 to 25 years with proper maintenance and cleaning." },
  { q: "Does industrial solar require maintenance?", a: "Industrial solar systems require periodic maintenance including panel cleaning, inspections and performance monitoring." },
  { q: "Can industries get subsidy for solar installation?", a: "Some government schemes and financing options may be available for industrial solar projects depending on eligibility and regulations." },
  { q: "Does Ekosys provide industrial solar maintenance services?", a: "Yes, Ekosys provides industrial solar maintenance, monitoring and technical support services across Bihar." },
  { q: "Which industries can use solar energy systems?", a: "Solar systems are suitable for factories, warehouses, offices, manufacturing units, commercial buildings and various industrial operations." },
  { q: "Which areas does Ekosys serve?", a: "Ekosys provides industrial solar installation services across Bihar including Vaishali, Hajipur and nearby regions." },
];

function IndustrialSolarBihar() {
  return (
    <SeoPageLayout
      metaTitle="Industrial Solar Installation in Bihar | Commercial Solar Solutions | Ekosys"
      metaDescription="Ekosys provides industrial solar installation services in Bihar for factories, warehouses, offices and commercial buildings. Get high-efficiency solar systems, energy savings and subsidy support."
      metaKeywords="industrial solar Bihar, industrial solar installation Bihar, commercial solar Bihar, factory solar installation, warehouse solar system Bihar, industrial rooftop solar, solar company Bihar, solar installation Hajipur, solar solutions Vaishali, industrial renewable energy Bihar, commercial rooftop solar, Ekosys solar solutions"
      pageTitle="Industrial Solar Installation in Bihar"
      descriptionParagraphs={[
        "Ekosys provides professional industrial solar installation services in Bihar for factories, warehouses, manufacturing units, offices and commercial buildings. Our industrial solar systems help businesses reduce electricity costs and improve energy efficiency with clean renewable energy solutions.",
        "Industrial electricity consumption is usually very high, making solar energy one of the best long-term investments for businesses. Industrial rooftop solar systems help companies lower operational expenses and reduce dependence on traditional power sources.",
        "Our expert team provides complete industrial solar solutions including site inspection, energy analysis, customized system design, solar panel installation, inverter setup, testing and maintenance support. We use high-quality solar panels and advanced technology to ensure maximum power generation and reliable performance.",
        "Ekosys helps industries and commercial businesses adopt sustainable energy solutions while improving long-term profitability. We also provide assistance for government solar subsidy and solar financing guidance where applicable."
      ]}
      heroImage="/images/services/industrial.png"
      benefits={benefits}
      reasons={reasons}
      processSteps={processSteps}
      faqs={faqs}
      moreLinks={moreLinks}
    />
  );
}

export default IndustrialSolarBihar;
