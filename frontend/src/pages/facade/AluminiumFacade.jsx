import SeoPageLayout from "../../components/SeoPageLayout";

const benefits = [
  "Extremely lightweight compared to steel framing",
  "High strength-to-weight ratio for large spans",
  "Naturally corrosion resistant and long-lasting",
  "Can be extruded into complex architectural shapes",
  "Excellent platform for thermal break technology",
  "Requires minimal maintenance over its lifespan",
  "100% recyclable, supporting green building standards",
  "Available in anodized and powder-coated finishes"
];

const reasons = [
  "Expertise in custom aluminium extrusion profiles",
  "Precision fabrication in controlled environments",
  "Integration with high-performance glazing systems",
  "Use of polyamide thermal breaks for energy efficiency",
  "Stringent quality control and surface finishing",
  "Experienced engineers for structural design"
];

const processSteps = [
  "Architectural design and profile specification",
  "Structural calculations and wind load analysis",
  "Selection of surface finish (anodized/powder coated)",
  "Factory extrusion and precision cutting of profiles",
  "Assembly of frames and integration of thermal breaks",
  "On-site erection of the aluminium framework",
  "Integration of glass or solid infill panels",
  "Final inspection and quality assurance"
];

const moreLinks = [
  { label: "Facade Engineering Hub", to: "/facade" },
  { label: "Curtain Wall Systems", to: "/facade/curtain-walls" },
  { label: "ACP Cladding Services", to: "/facade/acp-cladding" },
  { label: "Glass Facade Solutions", to: "/facade/glass-facade" },
];

const faqs = [
  { q: "Why is aluminium preferred for building facades?", a: "Aluminium is preferred because it is lightweight, highly durable, corrosion-resistant, and can easily be formed into complex profiles required for modern architectural designs." },
  { q: "What is a thermal break in an aluminium facade?", a: "A thermal break is a non-conductive material (like polyamide) placed between the interior and exterior aluminium profiles to prevent heat transfer, drastically improving the building's energy efficiency." },
  { q: "Can aluminium facades be colored?", a: "Yes, aluminium can be powder-coated in almost any color or anodized to provide a durable, metallic finish that resists fading and weathering." },
  { q: "How long does an aluminium facade last?", a: "A well-designed and properly maintained aluminium facade can easily last 30 to 50 years, often outlasting other exterior components of the building." },
];

function AluminiumFacade() {
  return (
    <SeoPageLayout
      metaTitle="Aluminium Facade Engineering in Bihar | Ekosys"
      metaDescription="Ekosys provides expert aluminium facade engineering in Bihar. Lightweight, durable, and energy-efficient aluminium systems for commercial and high-rise buildings."
      metaKeywords="aluminium facade Bihar, aluminium glazing systems, thermal break aluminium, commercial exterior framework, Ekosys facade, building envelope Bihar"
      pageTitle="Aluminium Facade Engineering in Bihar"
      descriptionParagraphs={[
        "Aluminium is the backbone of modern architectural facades. Ekosys provides expert aluminium facade engineering services in Bihar, delivering lightweight, durable, and highly customizable exterior systems for commercial, retail, and high-rise buildings.",
        "Our aluminium facade systems utilize precision-engineered extrusion profiles that offer exceptional structural strength while significantly reducing the dead load on the building structure. Aluminium's natural resistance to corrosion ensures a long-lasting, low-maintenance exterior that withstands harsh weather conditions.",
        "To maximize energy efficiency, we integrate advanced thermal break technology into our aluminium systems. By insulating the interior framing from the exterior elements, we prevent thermal bridging, reducing heating and cooling costs and improving interior comfort.",
        "Available in a vast array of powder-coated and anodized finishes, our aluminium facades offer architects and developers the freedom to create striking, sustainable, and high-performance building envelopes."
      ]}
      heroImage="/images/facade.webp"
      benefits={benefits}
      reasons={reasons}
      processSteps={processSteps}
      faqs={faqs}
      moreLinks={moreLinks}
      canonicalUrl="https://ekosys.in/facade/aluminium-facade"
      serviceName="Aluminium Facade Engineering"
    />
  );
}

export default AluminiumFacade;
