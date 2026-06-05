// =============================================================================
// EKOSYS Solar — Centralized SEO Data Store
// =============================================================================
// Single source of truth for all SEO-related business data used across
// JSON-LD structured data, meta tags, Open Graph tags, and sitemap generation.
// =============================================================================

export const businessInfo = {
  name: "EKOSYS",
  legalName: "Ekosys Solar Energy Solutions",
  url: "https://ekosys.in",
  logo: "https://ekosys.in/images/ekosys-logo.webp",
  image: "https://ekosys.in/images/hero-banner.webp",
  description:
    "EKOSYS is Bihar's leading solar installation company providing rooftop solar systems, industrial solar solutions, residential solar panels, solar batteries, inverters, and government subsidy assistance across Vaishali, Hajipur, Patna, and all of Bihar.",
  phone: "+91-8757686826",
  email: "corp.ekosys@gmail.com",
  address: {
    street: "Main Road, Hajipur",
    city: "Hajipur",
    district: "Vaishali",
    state: "Bihar",
    postalCode: "844101",
    country: "IN",
  },
  geo: { lat: 25.6873, lng: 85.2135 },
  foundingDate: "2010",
  openingHours: ["Mo-Sa 09:00-19:00"],
  priceRange: "₹₹",
  rating: { value: 4.8, count: 527 },
  social: {
    facebook: "https://facebook.com/ekosyssolar",
    instagram: "https://instagram.com/ekosyssolar",
    youtube: "https://youtube.com/@ekosyssolar",
    linkedin: "https://linkedin.com/company/ekosys",
  },
};

// ---------------------------------------------------------------------------
// Service Areas — 12 major cities in Bihar served by EKOSYS
// Each entry includes a URL-friendly slug, geo coordinates, and straight-line
// distance from the Hajipur HQ (for "distance from HQ" UI features).
// ---------------------------------------------------------------------------
export const serviceAreas = [
  {
    name: "Vaishali",
    slug: "vaishali",
    geo: { lat: 25.6841, lng: 85.2178 },
    distanceFromHQ: 0,
  },
  {
    name: "Hajipur",
    slug: "hajipur",
    geo: { lat: 25.6873, lng: 85.2135 },
    distanceFromHQ: 0,
  },
  {
    name: "Patna",
    slug: "patna",
    geo: { lat: 25.6093, lng: 85.1376 },
    distanceFromHQ: 12,
  },
  {
    name: "Muzaffarpur",
    slug: "muzaffarpur",
    geo: { lat: 26.1209, lng: 85.3647 },
    distanceFromHQ: 52,
  },
  {
    name: "Samastipur",
    slug: "samastipur",
    geo: { lat: 25.8628, lng: 85.7812 },
    distanceFromHQ: 58,
  },
  {
    name: "Begusarai",
    slug: "begusarai",
    geo: { lat: 25.4182, lng: 86.1272 },
    distanceFromHQ: 95,
  },
  {
    name: "Darbhanga",
    slug: "darbhanga",
    geo: { lat: 26.1542, lng: 85.8918 },
    distanceFromHQ: 82,
  },
  {
    name: "Chapra",
    slug: "chapra",
    geo: { lat: 25.7847, lng: 84.7414 },
    distanceFromHQ: 52,
  },
  {
    name: "Gaya",
    slug: "gaya",
    geo: { lat: 24.7955, lng: 85.0002 },
    distanceFromHQ: 101,
  },
  {
    name: "Nalanda",
    slug: "nalanda",
    geo: { lat: 25.1359, lng: 85.4432 },
    distanceFromHQ: 65,
  },
  {
    name: "Bhagalpur",
    slug: "bhagalpur",
    geo: { lat: 25.2425, lng: 86.9842 },
    distanceFromHQ: 185,
  },
  {
    name: "Motihari",
    slug: "motihari",
    geo: { lat: 26.6488, lng: 84.9158 },
    distanceFromHQ: 112,
  },
];

// ---------------------------------------------------------------------------
// Service Types — Full catalogue of services offered by EKOSYS
// ---------------------------------------------------------------------------
export const serviceTypes = [
  {
    name: "Rooftop Solar Installation",
    slug: "rooftop-solar-installation",
    description:
      "Complete rooftop solar panel installation for homes and businesses in Bihar with net metering support.",
  },
  {
    name: "Industrial Solar Solutions",
    slug: "industrial-solar-solutions",
    description:
      "Large-scale solar power systems for factories, warehouses, and industrial facilities across Bihar.",
  },
  {
    name: "Residential Solar Panels",
    slug: "residential-solar-panels",
    description:
      "Affordable residential solar panel systems designed for Indian homes with 25-year warranty.",
  },
  {
    name: "Solar Battery Storage",
    slug: "solar-battery-storage",
    description:
      "High-capacity solar battery storage solutions for uninterrupted power supply and energy independence.",
  },
  {
    name: "Solar Inverter Installation",
    slug: "solar-inverter-installation",
    description:
      "Premium solar inverter installation and maintenance services with brands like Growatt, Havells, and Luminous.",
  },
  {
    name: "Government Subsidy Assistance",
    slug: "government-subsidy-assistance",
    description:
      "End-to-end assistance for PM Surya Ghar Muft Bijli Yojana and Bihar state solar subsidies.",
  },
  {
    name: "Solar Water Pump",
    slug: "solar-water-pump",
    description:
      "Solar-powered water pumping systems for agriculture and irrigation in rural Bihar.",
  },
  {
    name: "Solar Street Lighting",
    slug: "solar-street-lighting",
    description:
      "Energy-efficient solar LED street lights for municipalities, housing societies, and rural roads.",
  },
  {
    name: "Solar Panel Maintenance & AMC",
    slug: "solar-panel-maintenance",
    description:
      "Annual maintenance contracts and cleaning services to keep your solar system running at peak efficiency.",
  },
  {
    name: "Net Metering Setup",
    slug: "net-metering-setup",
    description:
      "Complete net metering application, approval, and installation support with Bihar State Power Holding Company.",
  },
  {
    name: "EPC Solar Projects",
    slug: "epc-solar-projects",
    description:
      "Turnkey EPC (Engineering, Procurement, Construction) solar projects for commercial and institutional clients.",
  },
  {
    name: "Solar Consultation & Site Survey",
    slug: "solar-consultation",
    description:
      "Free expert solar consultation and on-site survey to design the optimal solar system for your needs.",
  },
];

// ---------------------------------------------------------------------------
// Brand Partners — Solar equipment manufacturers & brands EKOSYS works with
// ---------------------------------------------------------------------------
export const brandPartners = [
  { name: "Adani Solar", logo: "https://ekosys.in/images/brands/adani.webp" },
  { name: "Tata Power Solar", logo: "https://ekosys.in/images/brands/tata-power-solar.webp" },
  { name: "Luminous", logo: "https://ekosys.in/images/brands/luminous.webp" },
  { name: "Havells", logo: "https://ekosys.in/images/brands/havells.webp" },
  { name: "Growatt", logo: "https://ekosys.in/images/brands/growatt.webp" },
  { name: "Waaree", logo: "https://ekosys.in/images/brands/waaree.webp" },
  { name: "Vikram Solar", logo: "https://ekosys.in/images/brands/vikram-solar.webp" },
  { name: "Microtek", logo: "https://ekosys.in/images/brands/microtek.webp" },
  { name: "UTL Solar", logo: "https://ekosys.in/images/brands/utl.webp" },
  { name: "Loom Solar", logo: "https://ekosys.in/images/brands/loom-solar.webp" },
];

// ---------------------------------------------------------------------------
// Testimonials Summary — Aggregate rating data for structured data / schema
// ---------------------------------------------------------------------------
export const testimonialsSummary = {
  aggregateRating: {
    ratingValue: 4.8,
    reviewCount: 527,
    bestRating: 5,
    worstRating: 1,
  },
  featuredTestimonials: [
    {
      author: "Rajesh Kumar",
      location: "Patna, Bihar",
      rating: 5,
      text: "EKOSYS installed a 5kW rooftop solar system at my home. Excellent service and the team handled all the subsidy paperwork. Highly recommended!",
      date: "2025-11-15",
    },
    {
      author: "Sunita Devi",
      location: "Muzaffarpur, Bihar",
      rating: 5,
      text: "Very professional and affordable solar panel installation. My electricity bill has reduced by 90%. Thank you EKOSYS team!",
      date: "2025-10-22",
    },
    {
      author: "Amit Singh",
      location: "Hajipur, Bihar",
      rating: 5,
      text: "Best solar company in Bihar. They guided us through the entire PM Surya Ghar scheme and installed the system within a week.",
      date: "2026-01-08",
    },
  ],
};
