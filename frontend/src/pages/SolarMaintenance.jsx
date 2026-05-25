import SeoPageLayout from "../components/SeoPageLayout";

const benefits = [
  "Improve solar panel efficiency",
  "Increase electricity generation",
  "Reduce power loss caused by dust and dirt",
  "Extend solar system lifespan",
  "Prevent technical issues and damage",
  "Maintain inverter performance",
  "Improve overall system safety",
  "Reduce long-term repair costs",
];

const reasons = [
  "Experienced solar maintenance team",
  "Professional panel cleaning services",
  "Affordable maintenance packages",
  "Quick troubleshooting and repair support",
  "Regular system inspection and monitoring",
  "Residential and industrial maintenance services",
  "Reliable technical support across Bihar",
];

const processSteps = [
  "Solar panel inspection and performance analysis",
  "Dust and dirt cleaning process",
  "Inverter inspection and testing",
  "Wiring and connection verification",
  "System monitoring and troubleshooting",
  "Repair and replacement support if required",
  "Safety checks and testing",
  "Final performance optimization",
];

const moreLinks = [
  { label: "Best Solar Installation Services in Bihar", to: "/solar-installation-bihar" },
  { label: "Rooftop Solar Solutions in Bihar", to: "/rooftop-solar-bihar" },
  { label: "Residential Solar Systems in Bihar", to: "/residential-solar-bihar" },
  { label: "Industrial Solar Installation Services", to: "/industrial-solar-bihar" },
  { label: "Learn About Solar Subsidy in Bihar", to: "/solar-subsidy-bihar" },
];

const faqs = [
  { q: "Why is solar maintenance important?", a: "Solar maintenance helps improve energy generation, maintain system efficiency and prevent long-term technical issues." },
  { q: "How often should solar panels be cleaned?", a: "Solar panels should generally be cleaned every few months depending on dust levels, pollution and weather conditions." },
  { q: "Does dust affect solar panel performance?", a: "Yes, dust and dirt can reduce sunlight absorption and decrease solar panel efficiency significantly." },
  { q: "What services are included in solar maintenance?", a: "Solar maintenance services include panel cleaning, inverter checks, wiring inspection, troubleshooting, repair and performance monitoring." },
  { q: "Can solar maintenance increase electricity generation?", a: "Yes, regular cleaning and maintenance help improve solar panel efficiency and electricity production." },
  { q: "Does Ekosys provide industrial solar maintenance services?", a: "Yes, Ekosys provides maintenance services for residential, commercial and industrial solar systems across Bihar." },
  { q: "What happens if solar panels are not maintained?", a: "Lack of maintenance can reduce energy generation, damage components and lower overall solar system performance." },
  { q: "Does Ekosys provide inverter repair support?", a: "Yes, we provide inverter inspection, troubleshooting and repair services for solar power systems." },
  { q: "Which areas does Ekosys serve?", a: "Ekosys provides solar maintenance services across Bihar including Vaishali, Hajipur and nearby regions." },
];

function SolarMaintenance() {
  return (
    <SeoPageLayout
      metaTitle="Solar Maintenance Services in Bihar | Solar Panel Cleaning & Repair | Ekosys"
      metaDescription="Ekosys provides professional solar maintenance services in Bihar including solar panel cleaning, system inspection, inverter support, repair services and performance optimization for residential and industrial solar systems."
      metaKeywords="solar maintenance Bihar, solar panel cleaning Bihar, solar repair services, rooftop solar maintenance, inverter maintenance Bihar, solar AMC services, industrial solar maintenance, residential solar maintenance, solar service company Bihar, solar cleaning services Vaishali, solar maintenance Hajipur, Ekosys solar services"
      pageTitle="Solar Maintenance Services in Bihar"
      descriptionParagraphs={[
        "Ekosys provides professional solar maintenance services in Bihar for residential homes, offices, commercial buildings and industrial solar systems. Regular solar maintenance is important for improving system performance, increasing energy generation and ensuring long-term reliability.",
        "Solar panels continuously face dust, dirt, weather exposure and environmental conditions which can reduce energy efficiency over time. Proper solar panel cleaning and system maintenance help maximize power generation and reduce performance loss.",
        "Our experienced solar maintenance team provides complete support including solar panel cleaning, inverter inspection, wiring checks, system monitoring, troubleshooting and repair services. We use professional tools and modern techniques to maintain high solar system efficiency.",
        "Ekosys provides affordable solar maintenance solutions for rooftop solar systems, industrial solar projects and commercial solar power installations across Bihar including Vaishali and Hajipur regions."
      ]}
      heroImage="/images/services/maintenance.png"
      benefits={benefits}
      reasons={reasons}
      processSteps={processSteps}
      faqs={faqs}
      moreLinks={moreLinks}
    />
  );
}

export default SolarMaintenance;