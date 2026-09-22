// ═══════════════════════════════════════════════════════════
// EKOSYS CORPORATION — Brand Constants & Data
// ═══════════════════════════════════════════════════════════

export const SITE_CONFIG = {
  name: "EKOSYS CORPORATION",
  shortName: "EKOSYS",
  tagline: "Engineering the Future",
  subtitle: "An Ecosystem of Innovation",
  description:
    "Delivering world-class engineering, technology, design and infrastructure solutions across renewable energy, architectural facades, medical technology, architecture and electronics.",
  url: "https://www.ekosys.in",
  email: "ekosys.corp@gmail.com",
  phone: "+91 76 44 86 80 86",
  phoneClean: "+917644868086",
  whatsappUrl: "https://wa.me/917644868086",
  hours: {
    weekdays: "Monday – Saturday",
    time: "9:00 AM – 7:00 PM",
  },
  address: {
    line1: "Opposite to Municipal Office",
    city: "Hajipur",
    pin: "844101",
    district: "Vaishali",
    state: "Bihar",
    country: "India",
    full: "Opposite to Municipal Office, Hajipur - 844101, Vaishali, Bihar, India",
    mapQuery: "Opposite+to+Municipal+Office+Hajipur+844101+Bihar+India",
  },
} as const;

export interface NavLinkItem {
  label: string;
  href: string;
  isMega?: boolean;
}

export const NAV_LINKS: readonly NavLinkItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "#", isMega: true },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export interface Division {
  id: string;
  number: string;
  title: string;
  category: string;
  brand: string;
  description: string;
  cta: string;
  link: string;
  subdomain: string;
  mainImage: string;
  images: string[];
  services: string[];
  color: string;
  iconBg: string;
}

export const DIVISIONS: Division[] = [
  {
    id: "solar",
    number: "01",
    title: "Renewable Energy Solutions",
    category: "SOLAR EPC",
    brand: "EKOSYS Solar",
    description:
      "Complete end-to-end solar solutions for homes, businesses and industries, engineered for efficiency, reliability and long-term performance.",
    cta: "Explore Solar Services",
    link: "https://solar.ekosys.in",
    subdomain: "solar.ekosys.in",
    mainImage: "/images/solar/modern-solar-rooftop.webp",
    images: [
      "/images/solar/modern-solar-rooftop.webp",
      "/images/solar/solar-rooftop-banner.webp",
      "/images/solar/residential-solar.webp",
      "/images/solar/solar-home-hero.webp",
      "/images/solar/Solar-Industrial-Image.webp",
    ],
    services: [
      "Solar EPC",
      "Rooftop Solar",
      "Commercial Solar",
      "Industrial Solar",
      "Residential Solar",
      "Solar Installation",
      "Solar O&M",
      "Solar Consultancy",
      "Solar Project Management",
      "Energy Optimization",
    ],
    color: "green",
    iconBg: "bg-green-50",
  },
  {
    id: "facade",
    number: "02",
    title: "Premium Facade Engineering",
    category: "ARCHITECTURAL FACADE",
    brand: "EKOSYS Facade",
    description:
      "Transforming skylines with unitized curtain walls, structural glazing, ACP cladding and advanced exterior architectural systems.",
    cta: "Explore Facade Services",
    link: "https://facade.ekosys.in",
    subdomain: "facade.ekosys.in",
    mainImage: "/images/facade/CP-Facade-Image.webp",
    images: [
      "/images/facade/hero_facade.webp",
      "/images/facade/service_structural_glazing.webp",
      "/images/facade/service_acp_cladding.webp",
      "/images/facade/service_spider_glazing.webp",
      "/images/facade/service_curtain_wall.webp",
    ],
    services: [
      "Curtain Wall",
      "Unitized Facade",
      "Structural Glazing",
      "ACP Cladding",
      "Glass Facade",
      "Aluminium Facade",
      "Facade Consultancy",
      "Facade Engineering",
      "Installation",
      "Maintenance",
    ],
    color: "navy",
    iconBg: "bg-navy-50",
  },
  {
    id: "medtech",
    number: "03",
    title: "Hospital Equipment & Medical Technology",
    category: "MEDTECH",
    brand: "EKOSYS MedTech",
    description:
      "Reliable medical equipment and technology solutions designed to support modern hospitals, clinics, laboratories and healthcare facilities.",
    cta: "Explore Medical Solutions",
    link: "https://medtech.ekosys.in",
    subdomain: "medtech.ekosys.in",
    mainImage: "/images/medTech/MedTech-Main-Image.webp",
    images: [
      "/images/medTech/MedTech-Main-Image.webp",
      "/images/medTech/Operation-Theatre-Image.webp",
      "/images/medTech/Hospital-Equipment-Image.webp",
      "/images/medTech/Laboratory-Equipment-Image.webp",
      "/images/medTech/Medical Technology Engineer Image.webp",
    ],
    services: [
      "Hospital Equipment",
      "Medical Devices",
      "Laboratory Equipment",
      "OT Equipment",
      "Patient Care Equipment",
      "Diagnostic Equipment",
      "Hospital Furniture",
      "Healthcare Technology",
      "Installation",
      "Maintenance",
    ],
    color: "blue",
    iconBg: "bg-navy-50",
  },
  {
    id: "designlab",
    number: "04",
    title: "Architecture & Design",
    category: "DESIGNLAB",
    brand: "EKOSYS DesignLab",
    description:
      "From individual homes to large residential societies and commercial developments, we transform ideas into intelligent, functional and beautiful spaces.",
    cta: "Explore Architecture",
    link: "https://designlab.ekosys.in",
    subdomain: "designlab.ekosys.in",
    mainImage: "/images/DesignLab/hero_main.webp",
    images: [
      "/images/DesignLab/hero_main.webp",
      "/images/DesignLab/commercial.webp",
      "/images/DesignLab/living_room.webp",
      "/images/DesignLab/bedroom.webp",
      "/images/DesignLab/kitchen.webp",
    ],
    services: [
      "House Design",
      "Villa Design",
      "Apartment Design",
      "Society Planning",
      "Residential Planning",
      "Commercial Buildings",
      "Interior Design",
      "3D Visualization",
      "Elevation Design",
      "Landscape Design",
      "Master Planning",
      "Architectural Consultancy",
    ],
    color: "gold",
    iconBg: "bg-gold-50",
  },
  {
    id: "itsolutions",
    number: "05",
    title: "Electronics & IT Solutions",
    category: "IT SOLUTIONS",
    brand: "EKOSYS IT Solutions",
    description:
      "Complete computer, laptop, electronics and technology infrastructure solutions for individuals, businesses, institutions and enterprises.",
    cta: "Explore IT Solutions",
    link: "https://itsolution.ekosys.in",
    subdomain: "itsolution.ekosys.in",
    mainImage: "/images/ITSolutions/IT-Solutions-Main-Image.webp",
    images: [
      "/images/ITSolutions/IT-Solutions-Main-Image.webp",
      "/images/ITSolutions/Networking-Solutions-Image.webp",
      "/images/ITSolutions/Computer-Laptop-Image.webp",
      "/images/ITSolutions/IT-Support-Engineer.webp",
      "/images/ITSolutions/Computer-Accessories-Image.webp",
    ],
    services: [
      "Desktop Computers",
      "Laptops",
      "Monitors",
      "Printers",
      "Networking",
      "CCTV",
      "Storage",
      "Computer Accessories",
      "Laptop Accessories",
      "Electronic Components",
      "UPS",
      "Power Solutions",
      "IT Infrastructure",
      "Enterprise Hardware",
      "AMC",
      "IT Support",
    ],
    color: "navy",
    iconBg: "bg-navy-50",
  },
];

export const INDUSTRIES = [
  { name: "Residential", icon: "Home" },
  { name: "Commercial", icon: "Building2" },
  { name: "Industrial", icon: "Factory" },
  { name: "Healthcare", icon: "Heart" },
  { name: "Infrastructure", icon: "Landmark" },
  { name: "Real Estate", icon: "Building" },
  { name: "Architecture", icon: "Compass" },
  { name: "Government", icon: "Scale" },
  { name: "Education", icon: "GraduationCap" },
  { name: "Corporate", icon: "Briefcase" },
] as const;

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discover",
    description:
      "We begin by understanding your vision, requirements, constraints and objectives through detailed consultation.",
    icon: "Search",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Our engineering teams create detailed designs, plans and specifications tailored to your project.",
    icon: "PenTool",
  },
  {
    number: "03",
    title: "Engineer",
    description:
      "Every solution is engineered with precision, using proven methodologies and quality materials.",
    icon: "Cog",
  },
  {
    number: "04",
    title: "Execute",
    description:
      "Professional execution with strict quality control, timeline management and safety standards.",
    icon: "Rocket",
  },
  {
    number: "05",
    title: "Support",
    description:
      "Ongoing maintenance, warranty support and performance optimization beyond project completion.",
    icon: "Headphones",
  },
] as const;

export const WHY_EKOSYS = [
  {
    title: "25+ Years of Warranty",
    description: "Long-term product warranties backed by engineering confidence and quality assurance.",
    icon: "Shield",
  },
  {
    title: "End-to-End Solutions",
    description: "From initial consultation to final handover — complete project lifecycle management.",
    icon: "Layers",
  },
  {
    title: "Multi-Industry Expertise",
    description: "Five specialized divisions serving diverse sectors with domain-specific knowledge.",
    icon: "Globe",
  },
  {
    title: "Project-Focused Execution",
    description: "Dedicated project management with clear milestones, timelines and quality gates.",
    icon: "Target",
  },
  {
    title: "Professional Engineering",
    description: "Licensed engineers and certified professionals delivering precision-grade solutions.",
    icon: "Award",
  },
  {
    title: "Customer-Centric Support",
    description: "Responsive support teams ensuring complete satisfaction through every engagement.",
    icon: "HeartHandshake",
  },
] as const;

export const ENQUIRY_TYPES = [
  "Solar",
  "Facade",
  "Hospital Equipment",
  "Architecture & Design",
  "Electronics / IT Solutions",
  "General Enquiry",
  "Partnership",
  "Other",
] as const;

