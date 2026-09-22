import type { HubContent, ServiceContent } from "./types";

const solarInsights = [
  "rooftop-solar-installation-guide-bihar",
  "pm-surya-ghar-subsidy-bihar-solar-calculator",
  "solar-on-grid-off-grid-hybrid-system-comparison-bihar",
  "top-solar-epc-companies-bihar-commercial-guide",
];

export const solarHub: HubContent = {
  divisionId: "solar",
  seo: {
    path: "/solar",
    cluster: "solar",
    primaryKeyword: "solar EPC company in Bihar",
    secondaryKeywords: [
      "rooftop solar Bihar",
      "solar installation Hajipur",
      "commercial solar Patna",
      "solar consultancy Bihar",
    ],
    semanticKeywords: [
      "net metering BSPHCL",
      "PM Surya Ghar",
      "on-grid solar",
      "solar O&M",
      "kWp rooftop plant",
    ],
    searchIntent: "commercial",
    audience: "Homeowners, businesses, factories and institutions planning solar in Bihar",
    title: "Solar EPC & Rooftop Solar in Bihar",
    description:
      "EKOSYS designs, supplies and commissions rooftop and ground-mounted solar for homes, commercial buildings and industries across Hajipur, Patna and Bihar. Request a project consultation.",
    h1: "Solar EPC for Homes, Businesses and Industry in Bihar",
    ogImage: "/images/solar/modern-solar-rooftop.jpg",
    ogImageAlt: "Rooftop solar array on a modern building",
    ctaLabel: "Request a Solar Project Consultation",
    conversionGoal: "Solar site assessment / quotation enquiry",
    relatedPaths: ["/solar/solar-epc", "/solar/rooftop-solar", "/contact", "/locations/bihar"],
    insightSlugs: solarInsights,
  },
  eyebrow: "EKOSYS Solar",
  intro:
    "EKOSYS Solar plans and delivers photovoltaic projects as an engineering sequence: load and roof study, array and electrical design, procurement of certified modules and inverters, installation, testing, and handover documentation. Work is centred on Hajipur and Vaishali, with execution support across Patna, North Bihar and other Indian sites where we are engaged as EPC or consultant.",
  whoFor:
    "The division is built for property owners who need a workable plant rather than a product brochure — residences with high tariff bills, shops and offices seeking demand-charge relief, and factories that can host larger rooftop or shed-mounted arrays.",
  differentiator:
    "Solar sits inside a multi-disciplinary corporation. Facade, architecture and IT teams are available when a roof, electrical room or monitoring network needs coordinated work, instead of handing the client between unrelated vendors.",
  serviceSlugs: [
    "rooftop-solar",
    "residential-solar",
    "commercial-solar",
    "industrial-solar",
    "solar-epc",
    "solar-consultancy",
    "solar-om",
  ],
  localNote:
    "Bihar’s solar resource is generally favourable for rooftop generation. Practical constraints that we design around include monsoon wind and water ingress, dust on modules, DISCOM net-metering procedures, and roof structures typical of Hajipur, Patna and district towns.",
  faqs: [
    {
      question: "Does EKOSYS only install solar in Hajipur?",
      answer:
        "Headquarters and primary operations are in Hajipur, Vaishali. We take solar EPC, consultancy and O&M work in Patna, across Bihar and at other Indian locations when the project scope and logistics are agreed in writing.",
    },
    {
      question: "Can you help with net metering?",
      answer:
        "Yes. For grid-tied plants we prepare the technical package typically required by the local DISCOM, including single-line diagrams and equipment datasheets, and coordinate submissions. Approval timelines remain with the utility.",
    },
    {
      question: "Do you quote a fixed rupee-per-kW price on the website?",
      answer:
        "No. Module, inverter, structure, cabling, earthing, access equipment and subsidy eligibility all change the number. We price after a site and load review so the quotation matches the actual plant.",
    },
  ],
};

export const solarServices: ServiceContent[] = [
  {
    divisionId: "solar",
    slug: "rooftop-solar",
    seo: {
      path: "/solar/rooftop-solar",
      cluster: "solar",
      primaryKeyword: "rooftop solar installation in Bihar",
      secondaryKeywords: [
        "rooftop solar Hajipur",
        "rooftop solar Patna",
        "on-grid rooftop solar",
        "solar net metering Bihar",
      ],
      semanticKeywords: [
        "module mounting structure",
        "string inverter",
        "DCDB ACDB",
        "shadow analysis",
      ],
      searchIntent: "transactional",
      audience: "Owners of buildings with usable roof area in Bihar",
      title: "Rooftop Solar Installation in Bihar",
      description:
        "Rooftop solar design and installation for homes and buildings in Hajipur, Patna and Bihar — including structure, electrics, testing and DISCOM documentation. Talk to EKOSYS Solar.",
      h1: "Rooftop Solar Designed for Bihar Buildings",
      ogImage: "/images/solar/solar-rooftop-banner.jpg",
      ogImageAlt: "Rooftop solar installation across a building roof",
      ctaLabel: "Request a Rooftop Solar Assessment",
      conversionGoal: "Rooftop site visit / capacity estimate",
      relatedPaths: [
        "/solar/residential-solar",
        "/solar/commercial-solar",
        "/solar/solar-epc",
        "/solar/solar-consultancy",
      ],
      insightSlugs: [
        "rooftop-solar-installation-guide-bihar",
        "pm-surya-ghar-subsidy-bihar-solar-calculator",
      ],
    },
    eyebrow: "Rooftop Solar",
    intro:
      "A rooftop plant is a structural and electrical project, not only a row of modules. EKOSYS sizes the array to available unshaded area, roof load capacity and sanctioned load, then details mounting, walkways, cable routes and inverter placement so the system can be installed and maintained safely.",
    whoNeeds:
      "This service suits RCC roofs, metal sheds and mixed buildings where the owner wants to generate at the point of use. It is relevant in Hajipur, Vaishali, Patna and other Bihar towns where day-time consumption and tariff pressure make on-site generation practical.",
    problems: [
      {
        title: "Roofs that look large but generate little",
        body: "Water tanks, parapets, neighbouring buildings and HVAC units create shade. We map obstructions before locking kWp so the client is not sold capacity that will underperform.",
      },
      {
        title: "Leakage and rust after installation",
        body: "Poor penetrations and uncoated steel fail in monsoon conditions. Mounting design and sealing are treated as part of the engineering package, not an afterthought for the erector.",
      },
      {
        title: "Plants that cannot be net metered",
        body: "Oversizing against sanctioned load or incomplete drawings delays commissioning. We align plant capacity and documentation with typical DISCOM expectations in Bihar.",
      },
    ],
    approach: [
      {
        title: "Survey and yield sense-check",
        body: "Orientation, tilt options, inter-row spacing and likely soiling are reviewed with the electrical load profile so the plant is useful, not merely large.",
      },
      {
        title: "Engineer the roof interface",
        body: "Rail layout, ballast versus penetration, walkway access and earthing are specified before material is mobilised.",
      },
      {
        title: "Install, test, document",
        body: "DC/AC isolation, polarity, insulation and functional checks are completed before handover. As-built drawings and warranty papers are issued with the plant.",
      },
    ],
    considerations: [
      {
        title: "Design",
        items: [
          "Array layout against shade and maintenance access",
          "Inverter location with ventilation and cable length in mind",
          "Stringing that matches inverter voltage windows",
        ],
      },
      {
        title: "Engineering & safety",
        items: [
          "Roof load path and wind exposure",
          "Earthing and surge protection appropriate to the site",
          "Safe working at height during install and later cleaning",
        ],
      },
      {
        title: "Compliance & support",
        items: [
          "BIS / IEC equipment as specified in the bill of materials",
          "Net-metering file support with the local DISCOM",
          "Optional O&M for cleaning, inspection and performance checks",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does a rooftop solar installation take?",
        answer:
          "Physical installation for a typical home plant is often a matter of days once material is on site. Design, procurement, scaffolding or crane access, and utility approvals usually dominate the overall calendar.",
      },
      {
        question: "Is every roof suitable?",
        answer:
          "No. Weak structures, chronic leakage, extreme shade or inaccessible roofs may need civil repair, an alternate structure, or a smaller plant. That is decided on survey, not on a phone estimate.",
      },
    ],
  },
  {
    divisionId: "solar",
    slug: "residential-solar",
    seo: {
      path: "/solar/residential-solar",
      cluster: "solar",
      primaryKeyword: "residential solar in Bihar",
      secondaryKeywords: [
        "home solar Hajipur",
        "solar for house Patna",
        "PM Surya Ghar Bihar",
        "1 kW 3 kW 5 kW solar",
      ],
      semanticKeywords: ["household sanctioned load", "hybrid inverter", "battery backup optional"],
      searchIntent: "commercial",
      audience: "Homeowners in Hajipur, Patna and Bihar considering a house rooftop plant",
      title: "Residential Solar for Homes in Bihar",
      description:
        "Home rooftop solar in Hajipur, Vaishali and Patna — sized to household load, roof condition and subsidy paperwork. EKOSYS handles design, installation support and commissioning coordination.",
      h1: "Residential Solar Systems for Bihar Households",
      ogImage: "/images/solar/residential-solar.png",
      ogImageAlt: "Residential rooftop solar on a house",
      ctaLabel: "Discuss a Home Solar Plant",
      conversionGoal: "Residential solar enquiry",
      relatedPaths: ["/solar/rooftop-solar", "/solar/solar-consultancy", "/locations/hajipur"],
      insightSlugs: [
        "rooftop-solar-installation-guide-bihar",
        "pm-surya-ghar-subsidy-bihar-solar-calculator",
      ],
    },
    eyebrow: "Residential Solar",
    intro:
      "A house plant should follow the actual bill and the way the family uses power — fans and lights versus air-conditioning, day occupancy versus evening peaks. EKOSYS designs residential solar around sanctioned load, available roof, and whether the client needs a simple on-grid plant or a hybrid arrangement discussed as a separate electrical design.",
    whoNeeds:
      "Independent houses and villas in Hajipur, Patna and similar Bihar towns, including families evaluating central subsidy programmes. Apartments are only considered where the society and terrace rights are clear.",
    problems: [
      {
        title: "Buying kilowatts instead of solving the bill",
        body: "Undersized plants disappoint; oversized plants waste capital and may conflict with load limits. We start from consumption and roof, not from a catalogue kit.",
      },
      {
        title: "Subsidy paperwork after a rushed install",
        body: "If the plant and documents do not match programme rules, incentive claims stall. We treat eligibility as a design input when the client intends to apply.",
      },
    ],
    approach: [
      {
        title: "Read the bill and the roof",
        body: "Recent electricity bills, connected load and a roof sketch are enough to propose a realistic kW range before a site visit finalises it.",
      },
      {
        title: "Specify a maintainable home plant",
        body: "Walkable access for cleaning, isolators the household can understand, and inverter placement away from waterlogging are part of the layout.",
      },
      {
        title: "Commission with the household present",
        body: "Handover includes how to read generation, when to call for service, and what the warranties cover versus what they do not.",
      },
    ],
    considerations: [
      {
        title: "Project notes",
        items: [
          "Typical home sizes discussed: small (around 1–3 kW), family homes (around 3–5 kW), larger residences (5 kW+), always subject to load and roof",
          "On-grid plants export surplus only if net metering is granted",
          "Batteries are not assumed; they are scoped only when backup is a stated requirement",
        ],
      },
    ],
    faqs: [
      {
        question: "Will solar run my house during a grid outage?",
        answer:
          "A standard on-grid inverter shuts down during an outage for safety. Backup requires a different architecture (hybrid/off-grid) and a battery, which we only quote when that need is explicit.",
      },
      {
        question: "Do you guarantee subsidy amounts?",
        answer:
          "No. Subsidy is governed by the applicable government scheme and the implementing agency. We help assemble a compliant plant and documents; disbursement is not controlled by EKOSYS.",
      },
    ],
  },
  {
    divisionId: "solar",
    slug: "commercial-solar",
    seo: {
      path: "/solar/commercial-solar",
      cluster: "solar",
      primaryKeyword: "commercial solar in Bihar",
      secondaryKeywords: [
        "solar for commercial building",
        "office rooftop solar Patna",
        "shop solar installation",
        "institutional solar Bihar",
      ],
      semanticKeywords: ["demand charges", "day-time commercial load", "multiple inverters"],
      searchIntent: "commercial",
      audience: "Offices, retail, schools, clinics and commercial property owners",
      title: "Commercial Solar for Offices and Businesses",
      description:
        "Commercial rooftop solar for offices, retail and institutions in Patna, Hajipur and Bihar. EKOSYS aligns plant size with day-time load, roof rights and electrical rooms.",
      h1: "Commercial Solar Plants for Bihar Businesses",
      ogImage: "/images/solar/modern-solar-rooftop.jpg",
      ogImageAlt: "Commercial building with rooftop solar modules",
      ctaLabel: "Discuss a Commercial Solar Project",
      conversionGoal: "Commercial solar proposal request",
      relatedPaths: ["/solar/industrial-solar", "/solar/solar-epc", "/industries"],
      insightSlugs: ["top-solar-epc-companies-bihar-commercial-guide"],
    },
    eyebrow: "Commercial Solar",
    intro:
      "Commercial loads often peak while the sun is up — offices, clinics, coaching centres, shops and warehouses. That coincidence is what makes rooftop solar useful. EKOSYS designs commercial plants around transformer capacity, existing LT panels, roof warranties and how the property is occupied (owned versus leased).",
    whoNeeds:
      "Building owners and facilities managers who can commit roof access for 20+ years of generation, or tenants with written rights to install. Patna and other commercial belts in Bihar are typical markets; Hajipur industrial and institutional roofs are equally relevant.",
    problems: [
      {
        title: "Electrical rooms that cannot accept the AC side",
        body: "A plant that ignores panel space, cable trays and protection coordination becomes a variation order. We survey the LT room with the roof.",
      },
      {
        title: "Leased properties with unclear roof rights",
        body: "We do not treat a verbal go-ahead as enough. Installation proceeds only when ownership or licence to install is documented.",
      },
    ],
    approach: [
      {
        title: "Match generation to working hours",
        body: "We look at weekday versus weekend load. A plant sized on a single high bill can sit idle on holidays.",
      },
      {
        title: "Plan downtime",
        body: "Installation on occupied buildings needs lifting plans, terrace safety and inverter rooms that do not block fire exits.",
      },
    ],
    considerations: [
      {
        title: "Engineering",
        items: [
          "Multiple MPPT / inverter blocks for large or split roofs",
          "Monitoring that facilities staff can actually use",
          "Coordination with existing DG or UPS where they exist",
        ],
      },
    ],
    faqs: [
      {
        question: "Can a tenant install commercial solar?",
        answer:
          "Only with documented permission from the owner covering structure, waterproofing liability and what happens at lease end. EKOSYS will not install against an unclear title to the roof.",
      },
    ],
  },
  {
    divisionId: "solar",
    slug: "industrial-solar",
    seo: {
      path: "/solar/industrial-solar",
      cluster: "solar",
      primaryKeyword: "industrial solar plant Bihar",
      secondaryKeywords: [
        "factory rooftop solar",
        "industrial solar EPC",
        "shed mounted solar",
        "captive solar Bihar",
      ],
      semanticKeywords: ["pre-engineered building", "high DC capacity", "plant shutdown windows"],
      searchIntent: "commercial",
      audience: "Factories, warehouses and process industries with large roof or land area",
      title: "Industrial Solar for Factories and Sheds",
      description:
        "Industrial solar EPC for factory roofs and sheds in Bihar — structure checks, high-capacity electrics, and installation planned around production. Request an industrial solar discussion.",
      h1: "Industrial Solar for Manufacturing and Warehousing",
      ogImage: "/images/solar/Solar-Industrial-Image.webp",
      ogImageAlt: "Industrial rooftop solar on a factory shed",
      ctaLabel: "Discuss an Industrial Solar Plant",
      conversionGoal: "Industrial solar feasibility / EPC enquiry",
      relatedPaths: ["/solar/commercial-solar", "/solar/solar-epc", "/solar/solar-om"],
      insightSlugs: ["top-solar-epc-companies-bihar-commercial-guide"],
    },
    eyebrow: "Industrial Solar",
    intro:
      "Industrial plants pay for energy at scale and often have PEB sheds that can host large arrays — if purlins, deflection and wind uplift are checked honestly. EKOSYS treats industrial solar as a construction project inside a working factory: lifting, hot work permits, cable routes away from process, and commissioning windows that operations can live with.",
    whoNeeds:
      "Manufacturing units, cold stores, agro-processing, and logistics sheds in and around Hajipur, the Patna industrial belt, and other Bihar industrial areas. Ground-mount is considered only where land, shading and security are real, not assumed.",
    problems: [
      {
        title: "Roofs that were never designed for solar live load",
        body: "We will not overload a light-gauge shed to hit a kWp target. Structure review comes before module count.",
      },
      {
        title: "Installations that stop production without a plan",
        body: "Crane days and roof work are sequenced with the plant’s shutdown or low-output windows.",
      },
    ],
    approach: [
      {
        title: "Capacity versus process risk",
        body: "The useful plant is the one that can be built and maintained without compromising safety or product quality.",
      },
      {
        title: "MV/LT interface",
        body: "Injection point, protection settings and metering are agreed with the client’s electrical team or consultant.",
      },
    ],
    considerations: [
      {
        title: "Quality & O&M",
        items: [
          "Access ladders, life lines and walkways where the roof requires them",
          "Soiling from industrial dust — cleaning frequency is site-specific",
          "Spares and inverter service paths after handover",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you build independent power plants for sale of energy?",
        answer:
          "Our industrial offering is project-based EPC and consultancy for captive or on-site use as defined in the contract. We do not advertise merchant power-plant development on this page.",
      },
    ],
  },
  {
    divisionId: "solar",
    slug: "solar-epc",
    seo: {
      path: "/solar/solar-epc",
      cluster: "solar",
      primaryKeyword: "solar EPC company Bihar",
      secondaryKeywords: [
        "solar EPC contractor Hajipur",
        "solar engineering procurement construction",
        "turnkey solar Bihar",
        "solar project management",
      ],
      semanticKeywords: ["single-point responsibility", "as-built documentation", "commissioning tests"],
      searchIntent: "transactional",
      audience: "Clients who want one accountable contractor from design to commissioning",
      title: "Solar EPC Contractor in Bihar",
      description:
        "Turnkey solar EPC from EKOSYS — engineering, procurement, construction and commissioning for rooftop and industrial plants in Bihar. One point of contact from survey to handover.",
      h1: "Solar EPC: Engineering, Procurement and Construction",
      ogImage: "/images/solar/Solar-Installation.webp",
      ogImageAlt: "Solar modules being installed on a roof structure",
      ctaLabel: "Request Solar EPC Support",
      conversionGoal: "EPC bid / turnkey proposal",
      relatedPaths: ["/solar/solar-consultancy", "/solar/solar-om", "/solar/rooftop-solar"],
      insightSlugs: ["top-solar-epc-companies-bihar-commercial-guide"],
    },
    eyebrow: "Solar EPC",
    intro:
      "EPC means EKOSYS is accountable for the designed plant, the bought-out equipment list, the installation quality and the tests that prove the system works. It is the right model when the client does not want to coordinate a designer, a trader and a local fitter separately.",
    whoNeeds:
      "Households wanting a complete rooftop package, commercial owners, and industrial clients who issue a single work order covering design through commissioning.",
    problems: [
      {
        title: "Split vendors and no as-builts",
        body: "When design and installation are divorced, warranty arguments start at first fault. EPC keeps the paper trail with the same organisation.",
      },
    ],
    approach: [
      {
        title: "Discover",
        body: "Site constraints, load, budget band and statutory path (net metering, electrical inspector where applicable).",
      },
      {
        title: "Design & engineer",
        body: "Layout, SLD, structure concept, BOM and method statement.",
      },
      {
        title: "Execute & support",
        body: "Mobilisation, QA on torque and terminations, commissioning, then optional O&M.",
      },
    ],
    considerations: [
      {
        title: "What EPC includes when scoped",
        items: [
          "Engineering drawings and BOQ",
          "Procurement of agreed makes",
          "Installation labour and supervision",
          "Testing, commissioning and handover dossier",
        ],
      },
    ],
    faqs: [
      {
        question: "Can EKOSYS work only as installer if we buy our own modules?",
        answer:
          "Sometimes, as a defined installation or consultancy contract. That is not full EPC; warranties and performance responsibility must be written to match who supplied what.",
      },
    ],
  },
  {
    divisionId: "solar",
    slug: "solar-consultancy",
    seo: {
      path: "/solar/solar-consultancy",
      cluster: "solar",
      primaryKeyword: "solar consultancy Bihar",
      secondaryKeywords: [
        "solar feasibility study",
        "solar consultant Patna",
        "rooftop solar design consultant",
        "solar tender support",
      ],
      semanticKeywords: ["yield estimate", "vendor-neutral review", "owner’s engineer"],
      searchIntent: "commercial",
      audience: "Owners and institutions who need design or third-party review before buying",
      title: "Solar Consultancy and Feasibility Studies",
      description:
        "Independent solar consultancy from EKOSYS in Bihar — feasibility, layout review, tender support and owner’s-engineer checks before you sign an installation contract.",
      h1: "Solar Consultancy for Clear Project Decisions",
      ogImage: "/images/solar/Solar-Main-Image.webp",
      ogImageAlt: "Solar engineering planning for a rooftop project",
      ctaLabel: "Book a Solar Consultancy Discussion",
      conversionGoal: "Paid/consultative feasibility engagement",
      relatedPaths: ["/solar/solar-epc", "/solar/rooftop-solar", "/contact"],
      insightSlugs: ["solar-on-grid-off-grid-hybrid-system-comparison-bihar"],
    },
    eyebrow: "Solar Consultancy",
    intro:
      "Consultancy is for clients who need a decision, a drawing set, or a review of someone else’s offer. EKOSYS can act before EPC — or as a second pair of eyes on vendor proposals — so capacity, structure and electrical assumptions are visible.",
    whoNeeds:
      "Institutions preparing tenders, factories comparing EPC bids, and homeowners who have received conflicting quotations.",
    problems: [
      {
        title: "Quotations that cannot be compared",
        body: "Different module wattages, missing structure specs and vague warranties. A consultancy note puts bids on a common basis.",
      },
    ],
    approach: [
      {
        title: "Define the question",
        body: "Feasibility, detailed design, or bid evaluation — we do not sell a bundled ‘report’ that answers nothing.",
      },
      {
        title: "State assumptions",
        body: "Irradiation, soiling, outages and tariff are labelled as assumptions, not as guaranteed returns.",
      },
    ],
    considerations: [
      {
        title: "Scope options",
        items: [
          "Roof and load feasibility",
          "Preliminary layout and SLD",
          "Vendor offer review",
          "Support for DISCOM documentation language",
        ],
      },
    ],
    faqs: [
      {
        question: "If you consult, will you also bid as EPC?",
        answer:
          "We can, but conflict must be declared. Some clients want a clean consultancy only; others want the same team to execute. That choice is written into the engagement.",
      },
    ],
  },
  {
    divisionId: "solar",
    slug: "solar-om",
    seo: {
      path: "/solar/solar-om",
      cluster: "solar",
      primaryKeyword: "solar O&M Bihar",
      secondaryKeywords: [
        "solar maintenance Hajipur",
        "solar panel cleaning Bihar",
        "inverter service",
        "solar AMC",
      ],
      semanticKeywords: ["performance ratio checks", "thermography optional", "preventive maintenance"],
      searchIntent: "commercial",
      audience: "Owners of existing plants who need cleaning, inspection and fault response",
      title: "Solar O&M and Plant Maintenance",
      description:
        "Solar operations and maintenance in Bihar — module cleaning, electrical inspection, inverter checks and fault support for rooftop and industrial plants. Ask EKOSYS about an O&M plan.",
      h1: "Solar O&M: Keep Generation Working After Handover",
      ogImage: "/images/solar/Solar-Residential-Image.webp",
      ogImageAlt: "Installed rooftop solar system requiring maintenance access",
      ctaLabel: "Discuss Solar O&M Support",
      conversionGoal: "O&M / AMC enquiry",
      relatedPaths: ["/solar/solar-epc", "/solar/rooftop-solar", "/contact"],
      insightSlugs: ["rooftop-solar-installation-guide-bihar"],
    },
    eyebrow: "Solar O&M",
    intro:
      "Generation falls when modules are dirty, terminations loosen, or inverters trip unnoticed. O&M is scheduled cleaning, visual and electrical checks, and a defined response when monitoring (if installed) or the client reports a drop. EKOSYS offers O&M on plants we built and, after inspection, on some third-party plants.",
    whoNeeds:
      "Commercial and industrial owners who cannot send untrained staff onto roofs, and households that want periodic professional inspection rather than only monsoon-season cleaning.",
    problems: [
      {
        title: "‘Fit and forget’ plants in a dusty climate",
        body: "North Bihar dust and bird droppings are normal. Cleaning frequency is set by the site, not a generic monthly slogan.",
      },
    ],
    approach: [
      {
        title: "Baseline the plant",
        body: "We need as-builts or a fresh survey before committing to an AMC, especially for third-party systems.",
      },
      {
        title: "Separate cleaning from electrical work",
        body: "Water on live equipment is a safety issue. Methods and isolations are written into the method statement.",
      },
    ],
    considerations: [
      {
        title: "Typical O&M tasks",
        items: [
          "Module cleaning with roof-safe access",
          "Visual inspection of structure, cables and earthing",
          "Inverter error-code review",
          "Basic generation versus expected output — without fake ‘guaranteed units’",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you take O&M on any brand of inverter?",
        answer:
          "We support plants after we have identified the equipment and spare path. Obsolete or undocumented inverters may be limited to inspection-only until the client agrees a replacement plan.",
      },
    ],
  },
];
