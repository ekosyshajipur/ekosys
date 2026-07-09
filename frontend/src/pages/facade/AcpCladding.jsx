import SeoPageLayout from "../../components/SeoPageLayout";

const benefits = [
  "Enhances building aesthetics with modern finishes",
  "High durability and weather resistance",
  "Lightweight and easy to install",
  "Excellent flatness and rigidity",
  "Available in a wide range of colors and textures",
  "Fire-retardant (FR) core options available for safety",
  "Low maintenance and easy to clean",
  "Cost-effective exterior renovation solution"
];

const reasons = [
  "Use of premium quality Aluminium Composite Panels",
  "Precision routing and folding for seamless joints",
  "Strong aluminium substructure for secure mounting",
  "Expert installation ensuring perfect alignment",
  "Experience in both commercial and retail facades",
  "Strict adherence to safety and fire regulations"
];

const processSteps = [
  "Site measurement and facade design planning",
  "Selection of ACP sheets (color, finish, FR grade)",
  "Installation of aluminium framework on the building",
  "Precision routing, grooving, and cutting of ACP panels",
  "Fixing ACP panels to the framework",
  "Application of weather-resistant silicone sealants in joints",
  "Removal of protective masking film",
  "Final inspection and cleaning"
];

const moreLinks = [
  { label: "Facade Engineering Hub", to: "/facade" },
  { label: "Structural Glazing", to: "/facade/structural-glazing" },
  { label: "Curtain Wall Systems", to: "/facade/curtain-walls" },
  { label: "Aluminium Facade", to: "/facade/aluminium-facade" },
];

const faqs = [
  { q: "What is ACP Cladding?", a: "ACP (Aluminium Composite Panel) cladding involves covering a building's exterior with panels made of two thin aluminium sheets bonded to a non-aluminium core, providing a sleek, modern finish." },
  { q: "Is ACP cladding safe against fire?", a: "Ekosys highly recommends and installs Fire-Retardant (FR) grade ACP panels for commercial buildings to ensure compliance with fire safety regulations." },
  { q: "How long does ACP cladding last?", a: "High-quality ACP cladding can last 10 to 15 years or more, retaining its color and structural integrity, provided it is installed correctly and maintained." },
  { q: "Can ACP be used for interior design?", a: "Yes, while primarily used for exteriors, ACP is also popular for interior wall paneling, false ceilings, and signage due to its versatility and finish options." },
];

function AcpCladding() {
  return (
    <SeoPageLayout
      metaTitle="ACP Cladding Services in Bihar | Commercial Facade Design | Ekosys"
      metaDescription="Upgrade your building's exterior with Ekosys's premium ACP cladding services in Bihar. Durable, weather-resistant, and modern facade designs for commercial properties."
      metaKeywords="ACP cladding Bihar, aluminium composite panel installation, exterior cladding Bihar, commercial facade design, ACP work Hajipur, Ekosys facade"
      pageTitle="ACP Cladding Services in Bihar"
      descriptionParagraphs={[
        "Ekosys provides professional ACP (Aluminium Composite Panel) cladding services across Bihar, offering a modern, sleek, and durable exterior finish for commercial, retail, and corporate buildings.",
        "ACP cladding is one of the most popular facade materials globally due to its exceptional flatness, lightweight nature, and versatility. It consists of two aluminium sheets bonded to a thermoplastic or fire-retardant core, providing an incredibly strong yet flexible material that can be shaped to fit complex architectural designs.",
        "Our team ensures precision at every step, from the installation of the sturdy aluminium substructure to the flawless routing and fixing of the ACP panels. We offer a vast array of colors, metallic finishes, and wood or stone textures, allowing you to achieve the exact aesthetic you desire for your brand's physical presence.",
        "For safety and compliance, Ekosys strongly advocates for the use of Fire-Retardant (FR) grade ACP panels in commercial applications, ensuring your building looks spectacular while prioritizing occupant safety."
      ]}
      heroImage="/images/facade.webp"
      benefits={benefits}
      reasons={reasons}
      processSteps={processSteps}
      faqs={faqs}
      moreLinks={moreLinks}
      canonicalUrl="https://ekosys.in/facade/acp-cladding"
      serviceName="ACP Cladding Services"
    />
  );
}

export default AcpCladding;
