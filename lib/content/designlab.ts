import type { HubContent, ServiceContent } from "./types";

const designInsights = [
  "modern-house-design-ideas-bihar",
  "residential-villa-house-design-elevation-bihar",
  "commercial-building-design-planning-bihar-patna",
  "interior-design-home-ideas-hajipur-bihar",
];

export const designlabHub: HubContent = {
  divisionId: "designlab",
  seo: {
    path: "/designlab",
    cluster: "architecture",
    primaryKeyword: "architect in Bihar",
    secondaryKeywords: [
      "house design Hajipur",
      "architect Patna",
      "residential architecture Bihar",
      "commercial architect Vaishali",
    ],
    semanticKeywords: [
      "climate responsive architecture",
      "vastu as client preference",
      "elevation design",
      "society planning",
    ],
    searchIntent: "commercial",
    audience: "Homeowners, developers and institutions needing architectural design in Bihar",
    title: "Architecture & Design Studio in Bihar",
    description:
      "EKOSYS DesignLab provides residential and commercial architecture from Hajipur — climate-aware house design, villas, apartments and building consultancy across Bihar.",
    h1: "Architecture for Bihar Homes, Housing and Commercial Buildings",
    ogImage: "/images/DesignLab/hero_main.jpg",
    ogImageAlt: "Modern architectural interior and living space",
    ctaLabel: "Start Your Design Consultation",
    conversionGoal: "Architectural briefing meeting",
    relatedPaths: [
      "/designlab/residential-architecture",
      "/designlab/villa-design",
      "/designlab/commercial-architecture",
    ],
    insightSlugs: designInsights,
  },
  eyebrow: "EKOSYS DesignLab",
  intro:
    "DesignLab produces architecture that can be built in Bihar’s climate and construction culture: monsoon drainage, heat, local materials, and the way families actually live in Hajipur, Patna and district towns. Drawings are a service, not a decoration — plans, sections, elevations and specifications that a contractor can price.",
  whoFor:
    "Individuals building a house, families planning villas, developers of apartments or small societies, and commercial clients needing a buildable design — not only a 3D still.",
  differentiator:
    "The same corporation can carry a project toward facade, solar and IT scopes when the client wants coordinated consultants instead of a loose stack of vendors.",
  serviceSlugs: [
    "residential-architecture",
    "villa-design",
    "apartment-design",
    "commercial-architecture",
    "architectural-consultancy",
  ],
  localNote:
    "Bihar architecture has to deal with heat, humidity, sudden rain and, in many plots, tight urban neighbours. We design openings, courtyards, verandahs and services for those conditions rather than importing glass boxes unchanged from another climate.",
  faqs: [
    {
      question: "Do you only work in Hajipur?",
      answer:
        "The studio is based in Hajipur. We take design work across Vaishali, Patna and Bihar, and further afield when site visits and documentation can be resourced.",
    },
    {
      question: "Do you construct the building as well?",
      answer:
        "DesignLab’s core is architecture and design consultancy. Construction, if offered on a given project, is a separately defined execution scope — never assumed from a design fee.",
    },
  ],
};

export const designlabServices: ServiceContent[] = [
  {
    divisionId: "designlab",
    slug: "residential-architecture",
    seo: {
      path: "/designlab/residential-architecture",
      cluster: "architecture",
      primaryKeyword: "residential architect Bihar",
      secondaryKeywords: [
        "house design Hajipur",
        "modern house design Bihar",
        "home architect Patna",
        "climate responsive house",
      ],
      semanticKeywords: ["plot coverage", "ventilation", "family zoning"],
      searchIntent: "commercial",
      audience: "Families building or rebuilding a house on a private plot",
      title: "Residential Architecture in Bihar",
      description:
        "House design in Hajipur, Patna and Bihar — plans that respect plot, climate, family use and local bylaws. EKOSYS DesignLab for residential architecture consultancy.",
      h1: "Residential Architecture Shaped by Plot, Climate and Family",
      ogImage: "/images/DesignLab/living_room.jpg",
      ogImageAlt: "Residential living room interior architecture",
      ctaLabel: "Start a House Design Consultation",
      conversionGoal: "Residential design brief",
      relatedPaths: [
        "/designlab/villa-design",
        "/designlab/architectural-consultancy",
        "/solar/residential-solar",
      ],
      insightSlugs: ["modern-house-design-ideas-bihar", "interior-design-home-ideas-hajipur-bihar"],
    },
    eyebrow: "Residential Architecture",
    intro:
      "A house in Bihar is a thermal and social plan: summer heat, monsoon wetness, puja and guest rooms, parking, and often multi-generational living. EKOSYS starts with the plot, setbacks, trees and the client’s daily routine before drawing an elevation that photographs well.",
    whoNeeds:
      "Plot owners in Hajipur, Vaishali, Patna and similar towns who want a designed house rather than a contractor’s copy of a neighbour.",
    problems: [
      {
        title: "Copied plans that ignore orientation",
        body: "West glass without shade and toilets on the wrong stack show up in the first summer. Orientation is a first-week decision.",
      },
    ],
    approach: [
      {
        title: "Brief and measured plot",
        body: "We need boundaries, levels and a honest budget band. Pretty programmes without a budget become unbuildable.",
      },
      {
        title: "Plans before renders",
        body: "Furniture layouts and services are resolved; 3D is used to test, not to hide unresolved plans.",
      },
    ],
    considerations: [
      {
        title: "Design",
        items: [
          "Cross ventilation and daylight without uncontrolled glare",
          "Staircase and lift provisions where the family expects future floors",
          "Roof ready for solar if the client wants it later",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you follow Vastu?",
        answer:
          "When the client asks, we treat Vastu as a constraint alongside bylaws and structure — not as a substitute for engineering. Conflicts are discussed, not silently ignored.",
      },
    ],
  },
  {
    divisionId: "designlab",
    slug: "villa-design",
    seo: {
      path: "/designlab/villa-design",
      cluster: "architecture",
      primaryKeyword: "villa design Bihar",
      secondaryKeywords: [
        "villa architect Patna",
        "luxury house design Hajipur",
        "farmhouse design Bihar",
        "villa elevation",
      ],
      semanticKeywords: ["landscape interface", "double height", "private courtyard"],
      searchIntent: "commercial",
      audience: "Clients with larger plots seeking a villa or large independent house",
      title: "Villa Design and Large Independent Houses",
      description:
        "Villa and large-home architecture in Bihar — indoor-outdoor planning, elevations and climate-aware detailing by EKOSYS DesignLab.",
      h1: "Villa Design for Bihar Plots and Climate",
      ogImage: "/images/DesignLab/Villa-Design-Image.webp",
      ogImageAlt: "Villa architectural design visualization",
      ctaLabel: "Discuss a Villa Design",
      conversionGoal: "Villa design commission",
      relatedPaths: ["/designlab/residential-architecture", "/facade/glass-facade", "/solar/residential-solar"],
      insightSlugs: ["residential-villa-house-design-elevation-bihar"],
    },
    eyebrow: "Villa Design",
    intro:
      "Villas fail when they are suburban glass boxes dropped on a North Bihar plot. EKOSYS plans gardens, driveways, servant and guest flows, and deep shading as part of the architecture. Structure and waterproofing at large spans and terraces are designed with the engineer, not after the render is liked.",
    whoNeeds:
      "Families with generous plots in and around Patna, Hajipur and peri-urban Bihar who want a house with outdoor rooms that survive the monsoon.",
    problems: [
      {
        title: "Terraces that leak into party rooms",
        body: "Waterproofing, falls and parapet details are architectural decisions, not a later civil extra.",
      },
    ],
    approach: [
      {
        title: "Site as the first drawing",
        body: "Trees, wells, neighbours and noise set the massing before stylistic language is chosen.",
      },
    ],
    considerations: [
      {
        title: "Scope",
        items: [
          "Concept to building-permit drawings as contracted",
          "Interior and landscape as optional packages",
          "Coordination with facade and solar if those divisions are engaged",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you design farmhouses far from Hajipur?",
        answer:
          "Yes, if site visits can be scheduled. Remote plots still need a survey; we will not design from a WhatsApp photo alone.",
      },
    ],
  },
  {
    divisionId: "designlab",
    slug: "apartment-design",
    seo: {
      path: "/designlab/apartment-design",
      cluster: "architecture",
      primaryKeyword: "apartment design Bihar",
      secondaryKeywords: [
        "society planning Hajipur",
        "residential apartment architect Patna",
        "multi family housing Bihar",
        "flat typical floor plan",
      ],
      semanticKeywords: ["core planning", "parking yield", "fire stairs"],
      searchIntent: "commercial",
      audience: "Developers and landowners planning walk-up or mid-rise housing",
      title: "Apartment and Society Planning",
      description:
        "Apartment architecture and small-society planning in Bihar — typical floors, cores, parking and bylaws with EKOSYS DesignLab.",
      h1: "Apartment Design and Housing Layouts That Can Be Built",
      ogImage: "/images/DesignLab/Residential-Society-Image.webp",
      ogImageAlt: "Residential society and apartment planning context",
      ctaLabel: "Discuss Apartment or Society Design",
      conversionGoal: "Housing project design enquiry",
      relatedPaths: [
        "/designlab/commercial-architecture",
        "/designlab/residential-architecture",
        "/industries",
      ],
      insightSlugs: ["commercial-building-design-planning-bihar-patna"],
    },
    eyebrow: "Apartment Design",
    intro:
      "Housing economics live in the typical floor: saleable area, natural light in habitable rooms, shaft logic and a core that fire and lifts can actually use. EKOSYS plans apartments and compact societies with those constraints visible to the developer from the first option study.",
    whoNeeds:
      "Landowners in Hajipur, Patna and other Bihar towns doing G+n walk-ups or modest mid-rise, not only metropolitan high-rise specialists.",
    problems: [
      {
        title: "Dark inner rooms to maximise FSI talk",
        body: "We will show the area number and the liveability trade-off. The client decides; we will not hide uninhabitable rooms in a typical.",
      },
    ],
    approach: [
      {
        title: "Options, then freeze",
        body: "Two or three massing/parking options beat a single overworked plan. Freeze precedes working drawings.",
      },
    ],
    considerations: [
      {
        title: "Planning",
        items: [
          "Parking and ramp if cars are part of the product",
          "Refuse, DG and services without blocking light",
          "Bylaw interpretation with the client’s licensed professional as required locally",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you obtain the building permit yourselves?",
        answer:
          "Permit authority sits with the local body and the client’s licensed professionals. We produce drawings and coordination; we do not claim to replace statutory roles we do not hold on a given project.",
      },
    ],
  },
  {
    divisionId: "designlab",
    slug: "commercial-architecture",
    seo: {
      path: "/designlab/commercial-architecture",
      cluster: "architecture",
      primaryKeyword: "commercial architect Bihar",
      secondaryKeywords: [
        "commercial building design Patna",
        "showroom architecture Hajipur",
        "office building design Bihar",
        "institutional architecture",
      ],
      semanticKeywords: ["floor plate efficiency", "service core", "public entry sequence"],
      searchIntent: "commercial",
      audience: "Owners of offices, clinics, showrooms and small commercial plots",
      title: "Commercial Architecture and Building Design",
      description:
        "Commercial and institutional architecture in Patna, Hajipur and Bihar — efficient floor plates, services and elevations by EKOSYS DesignLab.",
      h1: "Commercial Architecture for Work, Care and Retail",
      ogImage: "/images/DesignLab/commercial.jpg",
      ogImageAlt: "Commercial interior architecture for a workplace",
      ctaLabel: "Discuss a Commercial Building Design",
      conversionGoal: "Commercial architecture commission",
      relatedPaths: ["/facade/curtain-wall", "/medtech/hospital-solutions", "/it-solutions/enterprise-it"],
      insightSlugs: ["commercial-building-design-planning-bihar-patna"],
    },
    eyebrow: "Commercial Architecture",
    intro:
      "Commercial buildings earn their keep through clear entry, rentable or usable floor plates, toilets and shafts that do not eat the plan, and an envelope that can be maintained. EKOSYS designs offices, clinics, showrooms and mixed-use plots with those mechanics first.",
    whoNeeds:
      "Business owners building on their own land in Bihar, and institutions needing a buildable design coordinated with facade or MedTech scopes.",
    problems: [
      {
        title: "Elevation as the only design",
        body: "A striking ACP face with a broken plan is not architecture. We sequence plan, section, then elevation.",
      },
    ],
    approach: [
      {
        title: "Programme diagram",
        body: "Public, semi-public and service zones are drawn before structure is optimised.",
      },
    ],
    considerations: [
      {
        title: "Interfaces",
        items: [
          "Facade packages with EKOSYS Facade when specified",
          "OT/clinic rooms with MedTech when specified",
          "IT rooms and CCTV paths with IT Solutions when specified",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you design a hospital building?",
        answer:
          "We can lead or support healthcare architecture at a scale matching the brief, always with clinical planning input from the client’s doctors and, where engaged, MedTech. Large tertiary hospitals may need additional specialist consultants; we will say so rather than overclaim.",
      },
    ],
  },
  {
    divisionId: "designlab",
    slug: "architectural-consultancy",
    seo: {
      path: "/designlab/architectural-consultancy",
      cluster: "architecture",
      primaryKeyword: "architectural consultancy Bihar",
      secondaryKeywords: [
        "building design consultant Hajipur",
        "architect consultant Patna",
        "design review existing house",
        "elevation redesign",
      ],
      semanticKeywords: ["peer review", "as-built documentation", "bylaw check support"],
      searchIntent: "commercial",
      audience: "Clients who need advice, second opinions or limited drawing packages",
      title: "Architectural Consultancy and Design Review",
      description:
        "Architectural consultancy in Bihar — design review, limited drawing packages and coordination advice from EKOSYS DesignLab without forcing a full-build contract.",
      h1: "Architectural Consultancy When You Need a Clear Brief",
      ogImage: "/images/DesignLab/Architectural-Floor-Plan.webp",
      ogImageAlt: "Architectural floor plan drawings",
      ctaLabel: "Book an Architectural Consultancy",
      conversionGoal: "Consultancy appointment",
      relatedPaths: [
        "/designlab/residential-architecture",
        "/facade/facade-consultancy",
        "/contact",
      ],
      insightSlugs: ["modern-house-design-ideas-bihar"],
    },
    eyebrow: "Architectural Consultancy",
    intro:
      "Not every client needs a full design-from-scratch commission. Consultancy covers second opinions on contractor drawings, elevation studies, interior-adjacent advice, and coordination notes between structure, facade and services.",
    whoNeeds:
      "Homeowners mid-construction, buyers reviewing a developer typical, and institutions comparing two design offers.",
    problems: [
      {
        title: "Advice without drawings",
        body: "Verbal ‘just shift this wall’ is how buildings crack. We document recommendations.",
      },
    ],
    approach: [
      {
        title: "Define the question and the deliverable",
        body: "A site note, a markup set, or a concept option — priced as such.",
      },
    ],
    considerations: [
      {
        title: "Limits",
        items: [
          "We do not rubber-stamp unsafe structure",
          "Statutory filings remain with the responsible licensed professional",
          "Existing cracks and damp need investigation, not only paint advice",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you take over a half-drawn project from another architect?",
        answer:
          "Sometimes, after reviewing what is already issued and the legal relationship with the previous consultant. We will not copy another professional’s unlicensed work.",
      },
    ],
  },
];
