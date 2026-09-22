import type { LocationContent } from "./types";

const napRelated = [
  { href: "/solar", label: "Solar EPC" },
  { href: "/facade", label: "Architectural Facades" },
  { href: "/medtech", label: "MedTech" },
  { href: "/designlab", label: "Architecture" },
  { href: "/it-solutions", label: "IT Solutions" },
  { href: "/contact", label: "Contact & enquiry" },
];

export const locationsHubSeoPath = "/locations";

export const locationPages: LocationContent[] = [
  {
    slug: "hajipur",
    seo: {
      path: "/locations/hajipur",
      cluster: "local",
      primaryKeyword: "EKOSYS Hajipur",
      secondaryKeywords: [
        "engineering company Hajipur",
        "solar company Hajipur",
        "architect Hajipur",
        "CCTV Hajipur",
      ],
      semanticKeywords: ["Vaishali headquarters", "Municipal Office Hajipur", "844101"],
      searchIntent: "local",
      audience: "People searching for EKOSYS or engineering services in Hajipur",
      title: "EKOSYS in Hajipur, Vaishali",
      description:
        "EKOSYS Corporation is headquartered in Hajipur, Vaishali — solar EPC, facades, MedTech, architecture and IT from Opposite Municipal Office, PIN 844101. Call +91 76 44 86 80 86.",
      h1: "Engineering and Technology Services in Hajipur",
      ogImage: "/images/facade/about_company.png",
      ogImageAlt: "EKOSYS corporate engineering presence",
      ctaLabel: "Contact the Hajipur Office",
      conversionGoal: "Local visit / call",
      relatedPaths: ["/locations/vaishali", "/locations/patna", "/contact"],
      insightSlugs: ["interior-design-home-ideas-hajipur-bihar", "rooftop-solar-installation-guide-bihar"],
    },
    eyebrow: "Headquarters — Hajipur",
    intro:
      "EKOSYS Corporation operates from Hajipur, the district headquarters of Vaishali. The office is the primary point of contact for consultation across all five divisions. Site work radiates from here into Vaishali, Patna and other Bihar locations as projects require.",
    context: [
      {
        title: "Why Hajipur is the operating base",
        body: "Hajipur sits on major road and rail links to Patna and North Bihar. That matters for solar and facade crews, equipment deliveries for hospitals, and client meetings that do not all need to happen in a metro CBD.",
      },
      {
        title: "Local project conditions",
        body: "Plots and roofs in Hajipur include dense mohalla houses, new roadside commercial, and industrial sheds toward the NH corridor. Designs account for monsoon drainage, dust and typical RCC / PEB construction quality rather than assuming a sealed glass campus.",
      },
      {
        title: "How to engage",
        body: "Call, WhatsApp or the contact form with your city, plot or facility type, and which division you need. Walk-ins during published hours are possible; complex surveys are still scheduled.",
      },
    ],
    servicesAvailable: napRelated,
    faqs: [
      {
        question: "Where is the office?",
        answer:
          "Opposite to Municipal Office, Hajipur - 844101, Vaishali, Bihar, India. Use the map on the Contact page for directions.",
      },
      {
        question: "What are the hours?",
        answer: "Monday to Saturday, 9:00 AM to 7:00 PM IST. Sunday is closed unless a site visit is pre-agreed.",
      },
    ],
  },
  {
    slug: "vaishali",
    seo: {
      path: "/locations/vaishali",
      cluster: "local",
      primaryKeyword: "engineering company Vaishali Bihar",
      secondaryKeywords: [
        "solar Vaishali",
        "architect Vaishali",
        "hospital equipment Vaishali",
        "IT services Vaishali district",
      ],
      semanticKeywords: ["Hajipur district HQ", "North Bihar", "rural and town mix"],
      searchIntent: "local",
      audience: "Clients across Vaishali district including towns beyond Hajipur",
      title: "EKOSYS Services in Vaishali District",
      description:
        "EKOSYS serves Vaishali district from Hajipur — rooftop solar, architecture, hospital equipment, facades and IT for towns and industrial sites across the district.",
      h1: "Vaishali District: Local Engineering From Hajipur",
      ogImage: "/images/solar/solar-home-hero.png",
      ogImageAlt: "Residential solar context relevant to Vaishali homes",
      ctaLabel: "Discuss a Vaishali Project",
      conversionGoal: "District-level enquiry",
      relatedPaths: ["/locations/hajipur", "/locations/bihar", "/solar/rooftop-solar"],
      insightSlugs: ["rooftop-solar-installation-guide-bihar", "modern-house-design-ideas-bihar"],
    },
    eyebrow: "Vaishali District",
    intro:
      "Vaishali is not only Hajipur city. Clients come from surrounding blocks with agricultural sheds, small factories, clinics and new houses. EKOSYS treats travel time, material lead and DISCOM geography as part of the project plan.",
    context: [
      {
        title: "What we typically see",
        body: "Residential solar on independent houses, architecture for plot homes, CCTV for shops and godowns, and medical equipment for nursing homes serving the district population.",
      },
      {
        title: "Logistics",
        body: "Facade and industrial solar still need crane or lifting plans; those are scheduled, not assumed same-day from Hajipur for every village site.",
      },
    ],
    servicesAvailable: napRelated,
    faqs: [
      {
        question: "Do you visit sites outside Hajipur town?",
        answer:
          "Yes, within Vaishali and nearby districts when the enquiry is serious enough to justify a survey. Remote pin-drops without a contact person on site are not useful.",
      },
    ],
  },
  {
    slug: "patna",
    seo: {
      path: "/locations/patna",
      cluster: "local",
      primaryKeyword: "solar EPC Patna",
      secondaryKeywords: [
        "facade contractor Patna",
        "architect in Patna",
        "hospital equipment Patna",
        "IT company Patna",
      ],
      semanticKeywords: ["capital region", "commercial buildings Patna", "BSPHCL net metering"],
      searchIntent: "local",
      audience: "Patna businesses, hospitals, developers and homeowners",
      title: "EKOSYS Projects in Patna",
      description:
        "EKOSYS delivers solar, facade, MedTech, architecture and IT projects in Patna from its Hajipur headquarters — commercial roofs, clinics, offices and homes.",
      h1: "Patna Projects Delivered From a Bihar Engineering Base",
      ogImage: "/images/facade/project_commercial.png",
      ogImageAlt: "Commercial building facade relevant to Patna projects",
      ctaLabel: "Discuss a Patna Project",
      conversionGoal: "Patna commercial/residential enquiry",
      relatedPaths: ["/solar/commercial-solar", "/facade", "/designlab/commercial-architecture"],
      insightSlugs: [
        "commercial-building-design-planning-bihar-patna",
        "top-solar-epc-companies-bihar-commercial-guide",
      ],
    },
    eyebrow: "Patna",
    intro:
      "Patna concentrates commercial roofs, hospitals, coaching and office demand that Hajipur’s industrial and residential mix does not fully overlap. EKOSYS executes in the capital region with the same engineering process, with travel and statutory interfaces (building bye-laws, DISCOM) planned into the programme.",
    context: [
      {
        title: "Typical Patna scopes",
        body: "Commercial and institutional rooftop solar, glazed and ACP elevations, clinic and hospital equipment coordination, apartment and commercial architecture, and office networking/CCTV.",
      },
      {
        title: "Not a doorway page",
        body: "We do not run a separate fake ‘Patna HQ’ address. The legal office remains Hajipur; Patna is a service market we actively work.",
      },
    ],
    servicesAvailable: napRelated,
    faqs: [
      {
        question: "Do you have a Patna branch office?",
        answer:
          "The published office is Hajipur. Meetings in Patna can be arranged on project sites or by appointment. Do not rely on an unofficial third-party listing that copies our name.",
      },
    ],
  },
  {
    slug: "bihar",
    seo: {
      path: "/locations/bihar",
      cluster: "local",
      primaryKeyword: "engineering company in Bihar",
      secondaryKeywords: [
        "solar company Bihar",
        "facade company Bihar",
        "architect Bihar",
        "hospital equipment Bihar",
      ],
      semanticKeywords: ["North Bihar", "state-wide EPC", "Hajipur based"],
      searchIntent: "local",
      audience: "Statewide searchers comparing Bihar-based engineering firms",
      title: "Engineering Services Across Bihar",
      description:
        "EKOSYS Corporation is a Hajipur-based engineering company serving Bihar — solar EPC, facades, MedTech, architecture and IT. We work statewide where logistics and scope allow.",
      h1: "A Bihar-Based Engineering Company, Not a Visiting Brand",
      ogImage: "/images/solar/modern-solar-rooftop.jpg",
      ogImageAlt: "Rooftop solar installation in a Bihar context",
      ctaLabel: "Talk to EKOSYS in Bihar",
      conversionGoal: "Statewide project enquiry",
      relatedPaths: ["/locations/hajipur", "/locations/patna", "/about"],
      insightSlugs: [
        "rooftop-solar-installation-guide-bihar",
        "pm-surya-ghar-subsidy-bihar-solar-calculator",
      ],
    },
    eyebrow: "Bihar",
    intro:
      "EKOSYS is incorporated around work in Bihar: language, DISCOM practice, monsoon construction windows, and the mix of household, SME and institutional clients that actually exist here. North Bihar is a natural extension of Hajipur operations; other districts are taken when the project justifies mobilisation.",
    context: [
      {
        title: "Climate and construction",
        body: "Solar soiling, facade drainage, and house design for heat and rain are recurring themes across the state. Our service pages discuss those as engineering, not slogans.",
      },
      {
        title: "India beyond Bihar",
        body: "We accept work in other Indian states when contracted. This page does not pretend we have a branch in every metro.",
      },
    ],
    servicesAvailable: napRelated,
    faqs: [
      {
        question: "Which districts do you cover?",
        answer:
          "Vaishali and Patna are routine. Other Bihar districts are case-by-case. Tell us the site location in the enquiry so we can confirm travel and local statutory context.",
      },
    ],
  },
];
