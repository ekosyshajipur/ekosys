import type { HubContent, ServiceContent } from "./types";

const facadeInsights = [
  "curtain-wall-vs-structural-glazing",
  "commercial-facade-trends-india-structural-glazing-acp",
  "acp-cladding-facade-india-cost-types-installation",
];

export const facadeHub: HubContent = {
  divisionId: "facade",
  seo: {
    path: "/facade",
    cluster: "facade",
    primaryKeyword: "architectural facade contractor Bihar",
    secondaryKeywords: [
      "curtain wall Patna",
      "structural glazing Bihar",
      "ACP cladding Hajipur",
      "glass facade company",
    ],
    semanticKeywords: [
      "building envelope",
      "unitized facade",
      "aluminium system",
      "spider glazing",
      "weather tightness",
    ],
    searchIntent: "commercial",
    audience: "Developers, architects and building owners specifying exterior envelopes",
    title: "Architectural Facades & Glazing in Bihar",
    description:
      "EKOSYS Facade engineers curtain wall, structural glazing, ACP cladding and aluminium envelopes for commercial and institutional buildings in Patna, Hajipur and across India.",
    h1: "Facade Engineering for Commercial and Institutional Buildings",
    ogImage: "/images/facade/hero_facade.png",
    ogImageAlt: "Modern commercial building glass facade",
    ctaLabel: "Discuss Your Facade Project",
    conversionGoal: "Facade design/build enquiry",
    relatedPaths: ["/facade/curtain-wall", "/facade/structural-glazing", "/facade/acp-cladding"],
    insightSlugs: facadeInsights,
  },
  eyebrow: "EKOSYS Facade",
  intro:
    "A facade is a weather barrier, a structural interface and the public face of a building. EKOSYS works from architectural intent through system selection, detailing, fabrication coordination and site installation — with attention to monsoon-driven water management that Bihar buildings actually experience.",
  whoFor:
    "Commercial towers, hospitals, hotels, campuses and high-quality residential elevations where glass, aluminium and cladding must be specified as a system, not as disconnected packages.",
  differentiator:
    "Facade work is coordinated with EKOSYS architecture and solar teams when roofs, canopies or BIPV-adjacent details appear in the same project — reducing clashes at parapet and terrace edges.",
  serviceSlugs: [
    "curtain-wall",
    "structural-glazing",
    "acp-cladding",
    "glass-facade",
    "aluminium-facade",
    "facade-consultancy",
  ],
  localNote:
    "Patna and other Bihar cities combine high monsoon rainfall, dust and strong sun. We detail drainage, gasket lines and maintenance access accordingly, rather than copying coastal or Himalayan facade details unchanged.",
  faqs: [
    {
      question: "Do you manufacture every aluminium profile in-house?",
      answer:
        "System supply depends on the specified brand and the project BOM. EKOSYS’s role is engineering, coordination, installation quality and accountability for the contracted scope — not a claim that every extrusion is mill-owned.",
    },
    {
      question: "Can you work from another architect’s drawings?",
      answer:
        "Yes. We routinely develop shop drawings from architectural GA and typical details, then close RFIs before fabrication.",
    },
  ],
};

export const facadeServices: ServiceContent[] = [
  {
    divisionId: "facade",
    slug: "curtain-wall",
    seo: {
      path: "/facade/curtain-wall",
      cluster: "facade",
      primaryKeyword: "curtain wall system India",
      secondaryKeywords: [
        "curtain wall contractor Bihar",
        "unitized curtain wall",
        "stick curtain wall",
        "aluminium curtain wall Patna",
      ],
      semanticKeywords: ["mullion transom", "thermal break", "floor slab anchor"],
      searchIntent: "commercial",
      audience: "Architects and developers specifying non-loadbearing glazed walls",
      title: "Curtain Wall Systems and Installation",
      description:
        "Stick and unitized curtain wall engineering and installation by EKOSYS — slab anchors, drainage, glass selection and site QA for commercial buildings in Bihar and India.",
      h1: "Curtain Wall Facades Engineered as a System",
      ogImage: "/images/facade/service_curtain_wall.png",
      ogImageAlt: "Aluminium curtain wall on a commercial elevation",
      ctaLabel: "Discuss a Curtain Wall Package",
      conversionGoal: "Curtain wall shop-drawing / install enquiry",
      relatedPaths: ["/facade/structural-glazing", "/facade/glass-facade", "/facade/facade-consultancy"],
      insightSlugs: ["curtain-wall-vs-structural-glazing"],
    },
    eyebrow: "Curtain Wall",
    intro:
      "Curtain wall hangs from the structure; it does not replace columns. EKOSYS details mullion–transom grids, anchors, fire stops at slabs and a drainage path that keeps water out of occupied floors. Stick systems are typical for many Bihar sites; unitized is discussed when factory-glazed modules and crane logistics make sense.",
    whoNeeds:
      "Multi-storey commercial, institutional and hospitality buildings where vision glass, spandrel and aluminium must read as one elevation.",
    problems: [
      {
        title: "Leaks at transoms and sill flashings",
        body: "Most failures are detailing and installation, not ‘the glass’. We treat pressure-equalised cavities and end dams as non-negotiable.",
      },
      {
        title: "Anchors fighting the RCC tolerance",
        body: "Indian site slabs vary. Anchor design needs adjustment range, not hope.",
      },
    ],
    approach: [
      {
        title: "System selection with the architect",
        body: "Sightlines, U-value intent, glass build-up and opening vents are fixed before extrusion lengths are ordered.",
      },
      {
        title: "Shop drawings and interface",
        body: "Parapets, canopies, stone, ACP and MEP louvres are coordinated so the curtain wall is not the leftover gap.",
      },
    ],
    considerations: [
      {
        title: "Safety & quality",
        items: [
          "Glass specification against wind and human impact as required by the design",
          "Installation access and fall protection",
          "Sealant compatibility and weather-seal QA",
        ],
      },
    ],
    faqs: [
      {
        question: "Stick versus unitized — which do you recommend?",
        answer:
          "Stick is often more practical for mid-rise sites with limited crane time. Unitized pays off when repetition, factory glazing and programme compression justify logistics. We recommend from the building, not from a slogan.",
      },
    ],
  },
  {
    divisionId: "facade",
    slug: "structural-glazing",
    seo: {
      path: "/facade/structural-glazing",
      cluster: "facade",
      primaryKeyword: "structural glazing Bihar",
      secondaryKeywords: [
        "structural glazing contractor Patna",
        "SSG facade",
        "silicone structural glazing",
        "frameless look glass wall",
      ],
      semanticKeywords: ["structural silicone", "dead load support", "weather seal"],
      searchIntent: "commercial",
      audience: "Projects that want a flush glass appearance with engineered silicone joints",
      title: "Structural Glazing for Flush Glass Elevations",
      description:
        "Structural silicone glazing by EKOSYS — flush glass facades with designed dead-load support, compatible sealants and installation controls for Indian climate exposure.",
      h1: "Structural Glazing with Engineered Silicone Joints",
      ogImage: "/images/facade/service_structural_glazing.png",
      ogImageAlt: "Flush structural glazing on a building facade",
      ctaLabel: "Discuss Structural Glazing",
      conversionGoal: "SSG facade enquiry",
      relatedPaths: ["/facade/curtain-wall", "/facade/glass-facade", "/facade/facade-consultancy"],
      insightSlugs: ["curtain-wall-vs-structural-glazing"],
    },
    eyebrow: "Structural Glazing",
    intro:
      "Structural glazing uses silicone (and mechanical safety devices as designed) to present a near-flush glass plane. It is not a substitute for engineering: glass thickness, bite, dead-load shoes and compatible primers decide whether the elevation lasts.",
    whoNeeds:
      "Corporate and institutional elevations where the architect wants minimal aluminium sightlines and is prepared to fund proper system accessories.",
    problems: [
      {
        title: "Field silicone used as structure",
        body: "Weather seal and structural seal are different jobs. Mixing them is a common failure mode we refuse to specify.",
      },
    ],
    approach: [
      {
        title: "Confirm the system, not just the look",
        body: "We lock glass type, spacer, structural silicone brand compatibility and mechanical restraint before mock-ups.",
      },
    ],
    considerations: [
      {
        title: "Execution",
        items: [
          "Surface preparation and primer as per silicone manufacturer",
          "Cure times before loading or stacking",
          "Replacement strategy if a lite fails later",
        ],
      },
    ],
    faqs: [
      {
        question: "Is structural glazing suitable for every high-rise?",
        answer:
          "Not automatically. Wind, maintenance access, glass sizes and the client’s replacement philosophy all matter. Sometimes a captured curtain wall is the more honest specification.",
      },
    ],
  },
  {
    divisionId: "facade",
    slug: "acp-cladding",
    seo: {
      path: "/facade/acp-cladding",
      cluster: "facade",
      primaryKeyword: "ACP cladding Bihar",
      secondaryKeywords: [
        "ACP facade contractor Patna",
        "aluminium composite panel cladding",
        "fire rated ACP",
        "exterior ACP elevation",
      ],
      semanticKeywords: ["tray panel", "cassette cladding", "routing grooving", "FR core"],
      searchIntent: "commercial",
      audience: "Buildings needing metal composite rainscreen or feature cladding",
      title: "ACP Cladding and Aluminium Composite Facades",
      description:
        "ACP cladding design and installation in Bihar — tray detailing, sub-frame, fire-performance discussion as specified, and monsoon-aware joints. Request an EKOSYS cladding review.",
      h1: "ACP Cladding Specified as a Rainscreen, Not a Skin",
      ogImage: "/images/facade/service_acp_cladding.png",
      ogImageAlt: "Aluminium composite panel cladding on a commercial facade",
      ctaLabel: "Discuss ACP Cladding",
      conversionGoal: "ACP package enquiry",
      relatedPaths: ["/facade/aluminium-facade", "/facade/curtain-wall", "/industries"],
      insightSlugs: ["acp-cladding-facade-india-cost-types-installation"],
    },
    eyebrow: "ACP Cladding",
    intro:
      "Aluminium composite panels can be a durable rainscreen when trays, sub-girts, ventilation and fire performance are specified. They fail when they are treated as decorative sheets screwed to an uneven wall. EKOSYS details ACP with the backup wall, openings and coping as one envelope.",
    whoNeeds:
      "Commercial elevations, hospitals, showrooms and residential podiums in Patna, Hajipur and similar markets that want colour, flatness and serviceable cladding.",
    problems: [
      {
        title: "Oil-canning and open grooves",
        body: "Wrong tray sizes and missing stiffeners show every night. Panel module is an engineering choice.",
      },
      {
        title: "Core and fire discussions after the PO",
        body: "We ask the architect and owner to state the required reaction-to-fire approach up front. We do not invent certificates the product does not have.",
      },
    ],
    approach: [
      {
        title: "Sub-frame first",
        body: "Alignment, thermal movement and drainage cavities are set before a single tray is routed.",
      },
    ],
    considerations: [
      {
        title: "Maintenance",
        items: [
          "Access for washing in dusty Bihar cities",
          "Replacement of damaged trays without stripping a whole elevation",
          "Sealant joints at dissimilar materials",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you only use one ACP brand?",
        answer:
          "Brand is a project specification. We install systems that match the approved make, thickness and core type written into the contract.",
      },
    ],
  },
  {
    divisionId: "facade",
    slug: "glass-facade",
    seo: {
      path: "/facade/glass-facade",
      cluster: "facade",
      primaryKeyword: "glass facade company Bihar",
      secondaryKeywords: [
        "glass building facade Patna",
        "spider glazing",
        "commercial glass elevation",
        "glazed envelope",
      ],
      semanticKeywords: ["IGU", "low-e coating", "point-fixed glazing"],
      searchIntent: "commercial",
      audience: "Clients searching for glass-led building envelopes rather than a specific system name",
      title: "Glass Facade Design and Glazing Packages",
      description:
        "Glass facade engineering from EKOSYS — vision glass, IGUs, spider and captured systems selected for heat, glare and monsoon performance on Indian commercial buildings.",
      h1: "Glass Facades Selected for Light, Heat and Weather",
      ogImage: "/images/facade/hero_facade_2.png",
      ogImageAlt: "Glass facade of a contemporary commercial building",
      ctaLabel: "Discuss a Glass Facade",
      conversionGoal: "Glazing package enquiry",
      relatedPaths: ["/facade/curtain-wall", "/facade/structural-glazing", "/facade/facade-consultancy"],
      insightSlugs: ["commercial-facade-trends-india-structural-glazing-acp"],
    },
    eyebrow: "Glass Facade",
    intro:
      "‘Glass facade’ on a search is usually a mix of curtain wall, structural glazing, spider fittings or shopfronts. EKOSYS starts by naming the actual system, then specifies glass (monolithic, laminated, IGU, coatings) against solar gain, safety and the building’s HVAC reality.",
    whoNeeds:
      "Developers and architects who want a glazed identity and need a contractor who will talk about SHGC and maintenance, not only renderings.",
    problems: [
      {
        title: "Over-glazed west facades in Bihar heat",
        body: "We flag comfort and energy consequences. Sometimes the right answer is less vision glass, better shading, or high-performance IGUs — decided with the architect.",
      },
    ],
    approach: [
      {
        title: "Glass as a building-physics choice",
        body: "Orientation, shading devices and internal loads are part of the conversation before a lite schedule is frozen.",
      },
    ],
    considerations: [
      {
        title: "Types we regularly coordinate",
        items: [
          "Captured aluminium glazed walls",
          "Structural silicone glazing",
          "Point-fixed / spider glazing where the structure can take it",
          "Canopies and entrance glazing as related packages",
        ],
      },
    ],
    faqs: [
      {
        question: "Can spider glazing be used on every atrium?",
        answer:
          "Only if the steel or concrete support, deflection limits and glass make-up are designed together. Decorative fittings on an undersized structure are not a facade system.",
      },
    ],
  },
  {
    divisionId: "facade",
    slug: "aluminium-facade",
    seo: {
      path: "/facade/aluminium-facade",
      cluster: "facade",
      primaryKeyword: "aluminium facade Bihar",
      secondaryKeywords: [
        "aluminium cladding Patna",
        "aluminium rainscreen",
        "metal facade contractor",
        "aluminium elevation systems",
      ],
      semanticKeywords: ["extruded fins", "aluminium cassette", "powder coating"],
      searchIntent: "commercial",
      audience: "Projects using aluminium as the primary envelope language",
      title: "Aluminium Facade and Metal Envelope Systems",
      description:
        "Aluminium facades by EKOSYS — extruded systems, cassettes, fins and openings coordinated with glazing. Engineering and installation for commercial buildings in Bihar and North India.",
      h1: "Aluminium Facades Beyond Panel Cladding",
      ogImage: "/images/facade/innovation_banner.png",
      ogImageAlt: "Aluminium architectural facade with vertical fins",
      ctaLabel: "Discuss an Aluminium Facade",
      conversionGoal: "Aluminium envelope enquiry",
      relatedPaths: ["/facade/acp-cladding", "/facade/curtain-wall", "/facade/facade-consultancy"],
      insightSlugs: ["commercial-facade-trends-india-structural-glazing-acp"],
    },
    eyebrow: "Aluminium Facade",
    intro:
      "Aluminium facades include curtain-wall extrusions, cassette rainscreens, fins, brise-soleil and custom flashings. EKOSYS treats alloy, coating (anodising or powder), thermal movement and bimetallic contact as part of the specification so the elevation does not stain or seize after the first monsoon.",
    whoNeeds:
      "Architects who want a metal-led language rather than only ACP sheets, and owners who need a maintainable, lightweight envelope on RCC or steel frames.",
    problems: [
      {
        title: "Coatings that chalk or mismatch after a year",
        body: "Batch control and specified coating systems matter more than the colour name in a render.",
      },
    ],
    approach: [
      {
        title: "Detail the openings",
        body: "Windows, doors, louvres and stone interfaces are where aluminium facades usually leak. Those junctions are drawn, not improvised.",
      },
    ],
    considerations: [
      {
        title: "Engineering",
        items: [
          "Wind load on fins and long-span rails",
          "Isolation from dissimilar metals",
          "Access for recoating or panel swap",
        ],
      },
    ],
    faqs: [
      {
        question: "Is aluminium facade the same as ACP?",
        answer:
          "ACP is one aluminium-composite product. An aluminium facade can also mean extruded stick systems, solid sheet, or custom cassettes. We name the product on drawings so procurement matches intent.",
      },
    ],
  },
  {
    divisionId: "facade",
    slug: "facade-consultancy",
    seo: {
      path: "/facade/facade-consultancy",
      cluster: "facade",
      primaryKeyword: "facade consultancy India",
      secondaryKeywords: [
        "facade engineer Bihar",
        "building envelope consultant",
        "facade design review",
        "shop drawing review",
      ],
      semanticKeywords: ["performance specification", "mock-up review", "leak investigation"],
      searchIntent: "commercial",
      audience: "Architects and owners needing envelope advice without jumping straight to a supply contract",
      title: "Facade Consultancy and Envelope Review",
      description:
        "Facade consultancy from EKOSYS — system selection, performance specs, shop-drawing review and leak diagnosis for buildings in Bihar and India. Engage an envelope specialist early.",
      h1: "Facade Consultancy Before the Wrong System Is Ordered",
      ogImage: "/images/facade/about_company.png",
      ogImageAlt: "Facade engineering discussion on a commercial building project",
      ctaLabel: "Start a Facade Consultancy",
      conversionGoal: "Consultancy engagement",
      relatedPaths: ["/facade/curtain-wall", "/designlab/architectural-consultancy", "/contact"],
      insightSlugs: ["curtain-wall-vs-structural-glazing"],
    },
    eyebrow: "Facade Consultancy",
    intro:
      "Consultancy covers performance writing, alternative system studies, peer review of vendor shop drawings, and investigation of leaking or failing elevations. It is useful when the architect needs an envelope partner or when an owner has received incompatible bids.",
    whoNeeds:
      "Design teams on commercial and healthcare buildings, and owners facing water ingress or glass replacement decisions.",
    problems: [
      {
        title: "Specs copied from another climate",
        body: "We rewrite details for Bihar rain, dust and maintenance reality instead of pasting a metro-city typical.",
      },
    ],
    approach: [
      {
        title: "Separate advice from supply",
        body: "When EKOSYS both consults and later installs, that dual role is disclosed. Pure consultancy engagements stay inside the agreed advisory scope.",
      },
    ],
    considerations: [
      {
        title: "Typical deliverables",
        items: [
          "System comparison notes",
          "Outline performance specification",
          "Shop drawing comments",
          "Site observation reports during install",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you certify facades as a licensed testing laboratory?",
        answer:
          "No. Independent lab tests, if required, are arranged with accredited facilities. We interpret results and installation quality; we do not impersonate a test house.",
      },
    ],
  },
];
