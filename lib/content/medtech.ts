import type { HubContent, ServiceContent } from "./types";

const medtechInsights = [
  "hospital-equipment-buying-guide",
  "modular-operation-theatre-setup-standards-bihar",
  "hospital-ot-setup-equipment-list-cost-india",
];

export const medtechHub: HubContent = {
  divisionId: "medtech",
  seo: {
    path: "/medtech",
    cluster: "medtech",
    primaryKeyword: "hospital equipment supplier Bihar",
    secondaryKeywords: [
      "medical equipment Patna",
      "OT setup Bihar",
      "diagnostic equipment Hajipur",
      "healthcare technology solutions",
    ],
    semanticKeywords: [
      "patient care equipment",
      "hospital infrastructure",
      "biomedical installation",
      "clinical workflow",
    ],
    searchIntent: "commercial",
    audience: "Hospitals, clinics, diagnostic centres and healthcare promoters",
    title: "Hospital Equipment & MedTech Solutions",
    description:
      "EKOSYS MedTech supplies and coordinates hospital equipment, diagnostic devices and OT setup support for healthcare facilities in Hajipur, Patna and Bihar. Discuss your requirement list.",
    h1: "Medical Technology for Hospitals, Clinics and Diagnostic Centres",
    ogImage: "/images/medTech/MedTech-Main-Image.webp",
    ogImageAlt: "Hospital equipment and clinical technology environment",
    ctaLabel: "Discuss Hospital Equipment Requirements",
    conversionGoal: "MedTech requirement / BOQ discussion",
    relatedPaths: [
      "/medtech/hospital-equipment",
      "/medtech/ot-equipment",
      "/medtech/diagnostic-equipment",
    ],
    insightSlugs: medtechInsights,
  },
  eyebrow: "EKOSYS MedTech",
  intro:
    "Healthcare facilities fail when equipment is bought as a catalogue and rooms are finished as civil work. EKOSYS MedTech helps hospitals and clinics specify, source and install medical technology against department layouts, utility provisions and the way clinicians actually work — then supports commissioning coordination with the facility team.",
  whoFor:
    "New hospitals, nursing homes, diagnostic centres, and existing facilities upgrading OT, ICU, ward or lab equipment in Bihar and other Indian locations where we are engaged.",
  differentiator:
    "MedTech sits beside EKOSYS architecture and IT: room planning, electrical/IT backbone and equipment lists can be discussed as one project instead of three disconnected vendors.",
  serviceSlugs: [
    "hospital-equipment",
    "medical-devices",
    "diagnostic-equipment",
    "ot-equipment",
    "hospital-solutions",
  ],
  localNote:
    "Bihar’s healthcare expansion includes district hospitals, private nursing homes and diagnostic chains. Power quality, service access and operator training matter as much as the brand name on the device.",
  faqs: [
    {
      question: "Are you a manufacturer of all listed equipment?",
      answer:
        "EKOSYS is a solutions and supply partner. Makes depend on the approved BOQ, regulatory status of the device in India, and service coverage. We do not invent exclusive manufacturing claims.",
    },
    {
      question: "Do you provide clinical treatment?",
      answer:
        "No. We support facilities with equipment and infrastructure coordination. Clinical decisions remain with licensed medical professionals.",
    },
  ],
};

export const medtechServices: ServiceContent[] = [
  {
    divisionId: "medtech",
    slug: "hospital-equipment",
    seo: {
      path: "/medtech/hospital-equipment",
      cluster: "medtech",
      primaryKeyword: "hospital equipment Bihar",
      secondaryKeywords: [
        "hospital equipment supplier Patna",
        "ward furniture Hajipur",
        "patient care equipment",
        "hospital furniture Bihar",
      ],
      semanticKeywords: ["ICU beds", "suction", "ward equipment", "CSSD coordination"],
      searchIntent: "transactional",
      audience: "Hospital administrators compiling department-wise equipment lists",
      title: "Hospital Equipment Supply and Coordination",
      description:
        "Hospital equipment for wards, ICU and support areas in Bihar — specified against room layouts and utilities. EKOSYS helps facilities build a coherent BOQ instead of mixed ad-hoc purchases.",
      h1: "Hospital Equipment Specified Room by Room",
      ogImage: "/images/medTech/Hospital-Equipment-Image.webp",
      ogImageAlt: "Hospital ward equipment and patient care setting",
      ctaLabel: "Share Your Equipment Requirement",
      conversionGoal: "Hospital BOQ / supply enquiry",
      relatedPaths: ["/medtech/ot-equipment", "/medtech/hospital-solutions", "/medtech/medical-devices"],
      insightSlugs: ["hospital-equipment-buying-guide"],
    },
    eyebrow: "Hospital Equipment",
    intro:
      "Equipment lists should follow beds, oxygen points, nurse stations and circulation — not the other way around. EKOSYS works from architectural layouts (ours or the client’s) to propose ward, ICU and support equipment that fits doors, lifts and electrical loads.",
    whoNeeds:
      "Promoters setting up or expanding hospitals and nursing homes in Hajipur, Patna, Vaishali and other Bihar districts.",
    problems: [
      {
        title: "Gear that will not enter the building",
        body: "Lift size, corridor turns and door widths are checked before bulky items are ordered.",
      },
      {
        title: "Mixed brands with no service map",
        body: "We prefer a serviceable mix over a random collection of leftover models.",
      },
    ],
    approach: [
      {
        title: "Department BOQs",
        body: "Wards, ICU, emergency, CSSD-adjacent items and furniture are grouped so purchasing and civil finishing can sequence together.",
      },
    ],
    considerations: [
      {
        title: "Quality & safety",
        items: [
          "Electrical safety and earthing with the facility engineer",
          "Training for operators on handed-over devices",
          "Warranty terms as given by the manufacturer, stated in writing",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you match an existing hospital’s installed base?",
        answer:
          "Where consumables, trolleys or interfaces must match, we take the installed make as a constraint. Forcing a new ecosystem without a transition plan is avoided.",
      },
    ],
  },
  {
    divisionId: "medtech",
    slug: "medical-devices",
    seo: {
      path: "/medtech/medical-devices",
      cluster: "medtech",
      primaryKeyword: "medical devices supplier Bihar",
      secondaryKeywords: [
        "medical devices Patna",
        "healthcare devices hospital",
        "clinical devices procurement",
      ],
      semanticKeywords: ["CDSCO", "device class", "installation qualification"],
      searchIntent: "commercial",
      audience: "Clinics and hospitals procuring regulated medical devices",
      title: "Medical Devices for Clinical Departments",
      description:
        "Medical device sourcing and installation coordination with EKOSYS MedTech — aligned to department need, utilities and Indian regulatory status of the selected make.",
      h1: "Medical Devices Chosen for Clinical Use, Not a Brochure",
      ogImage: "/images/medTech/Medical Technology Engineer Image.webp",
      ogImageAlt: "Medical technology engineer with clinical equipment",
      ctaLabel: "Discuss Medical Device Requirements",
      conversionGoal: "Device procurement discussion",
      relatedPaths: ["/medtech/diagnostic-equipment", "/medtech/hospital-equipment", "/contact"],
      insightSlugs: ["hospital-equipment-buying-guide"],
    },
    eyebrow: "Medical Devices",
    intro:
      "Device selection is a clinical-plus-engineering task: intended use, accessories, consumable cost, calibration and who will service the unit in Bihar. EKOSYS coordinates procurement and installation against those constraints and does not substitute marketing claims for the manufacturer’s intended use.",
    whoNeeds:
      "Department heads and purchase committees who need a shortlist they can defend, plus a partner for unboxing, positioning and basic installation coordination.",
    problems: [
      {
        title: "Devices arriving before utilities exist",
        body: "Power, water, gas or IT ports are scheduled with civil and MEP so equipment is not stored to death in a corridor.",
      },
    ],
    approach: [
      {
        title: "Intended use first",
        body: "We capture what the clinicians need to do, then map devices — not the reverse.",
      },
    ],
    considerations: [
      {
        title: "Compliance",
        items: [
          "Supply of devices that the seller can legally place in India for the stated use",
          "Documentation pack as provided by the manufacturer",
          "No fabricated CDSCO or NABL claims",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you provide biomedical calibration as a lab?",
        answer:
          "Routine calibration, where required, is arranged through competent service partners or the OEM. EKOSYS is not presented here as an accredited calibration laboratory.",
      },
    ],
  },
  {
    divisionId: "medtech",
    slug: "diagnostic-equipment",
    seo: {
      path: "/medtech/diagnostic-equipment",
      cluster: "medtech",
      primaryKeyword: "diagnostic equipment Bihar",
      secondaryKeywords: [
        "pathology lab equipment Patna",
        "diagnostic centre setup",
        "imaging equipment coordination",
        "laboratory equipment Hajipur",
      ],
      semanticKeywords: ["analyzer", "sample workflow", "lab utilities"],
      searchIntent: "commercial",
      audience: "Diagnostic centres and hospital labs planning analyzers and lab fit-out",
      title: "Diagnostic and Laboratory Equipment Support",
      description:
        "Diagnostic equipment planning for labs and imaging-adjacent rooms in Bihar — workflow, utilities and installation coordination with EKOSYS MedTech.",
      h1: "Diagnostic Equipment Planned Around Laboratory Workflow",
      ogImage: "/images/medTech/Laboratory-Equipment-Image.webp",
      ogImageAlt: "Laboratory diagnostic equipment in a clinical lab",
      ctaLabel: "Discuss Diagnostic Centre Requirements",
      conversionGoal: "Lab / diagnostic BOQ enquiry",
      relatedPaths: ["/medtech/hospital-solutions", "/medtech/medical-devices", "/designlab/commercial-architecture"],
      insightSlugs: ["hospital-equipment-buying-guide"],
    },
    eyebrow: "Diagnostic Equipment",
    intro:
      "Analyzers, microscopes, centrifuges and support furniture only work as a lab if sample flow, bio-waste, UPS and water quality are designed. EKOSYS helps diagnostic centres and hospital labs sequence equipment with interior and electrical work.",
    whoNeeds:
      "New collection centres, hospital pathology, and upgrades where floor loading or dedicated rooms are required.",
    problems: [
      {
        title: "Heavy equipment on ordinary floors",
        body: "Some modalities need structural and radiation or vibration review with the building designer. We flag that early instead of discovering it at delivery.",
      },
    ],
    approach: [
      {
        title: "Workflow sketch",
        body: "Phlebotomy to processing to reporting is laid out before the equipment grid is frozen.",
      },
    ],
    considerations: [
      {
        title: "Site",
        items: [
          "UPS and earthing for sensitive electronics",
          "Ambient temperature limits of the device",
          "Service clearance around cabinets",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you install MRI or CT as a turnkey radiology OEM?",
        answer:
          "High-end imaging is a specialised OEM-led package (RF cage, shielding, applications training). We can coordinate building-side requirements; we do not claim to replace the imaging OEM’s turnkey team on this page.",
      },
    ],
  },
  {
    divisionId: "medtech",
    slug: "ot-equipment",
    seo: {
      path: "/medtech/ot-equipment",
      cluster: "medtech",
      primaryKeyword: "OT equipment Bihar",
      secondaryKeywords: [
        "operation theatre equipment Patna",
        "OT lights tables",
        "modular OT equipment",
        "surgical equipment hospital",
      ],
      semanticKeywords: ["OT table", "surgical lights", "pendant", "anaesthesia workstation interface"],
      searchIntent: "transactional",
      audience: "Hospitals building or refurbishing operating theatres",
      title: "Operation Theatre Equipment and OT Fit-Out Support",
      description:
        "OT equipment for Bihar hospitals — tables, lights and related surgical-area devices coordinated with room size, HVAC and infection-control intent. Talk to EKOSYS MedTech.",
      h1: "OT Equipment Coordinated with the Theatre, Not Dropped Into It",
      ogImage: "/images/medTech/Operation-Theatre-Image.webp",
      ogImageAlt: "Operation theatre with surgical lights and clinical setup",
      ctaLabel: "Discuss OT Equipment",
      conversionGoal: "OT package enquiry",
      relatedPaths: ["/medtech/hospital-solutions", "/medtech/hospital-equipment", "/contact"],
      insightSlugs: [
        "modular-operation-theatre-setup-standards-bihar",
        "hospital-ot-setup-equipment-list-cost-india",
      ],
    },
    eyebrow: "OT Equipment",
    intro:
      "An operating theatre is an integrated room: HVAC, gas, lighting, table, pendants and sterile workflow. EKOSYS supplies and positions OT equipment against the architectural and MEP design. We do not treat ‘modular OT’ as a sticker — finishes and HVAC remain the domain of the relevant specialists, coordinated on the same drawings.",
    whoNeeds:
      "Hospitals adding theatres or replacing aged tables and lights in Patna, Hajipur and other Bihar facilities.",
    problems: [
      {
        title: "Lights and tables that fight each other",
        body: "Boom travel, table slide and imaging C-arm clearance are checked in plan and section.",
      },
    ],
    approach: [
      {
        title: "Room data sheet",
        body: "Speciality (general, ortho, gynae, etc.), preferred laterality and storage are captured before procurement.",
      },
    ],
    considerations: [
      {
        title: "Safety",
        items: [
          "Electrical isolation strategy with the hospital engineer",
          "Cleanability of selected surfaces",
          "Training at handover for OT staff",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you build modular OT panels yourselves?",
        answer:
          "Panel systems, if used, are a specified product installed with the interior contractor. EKOSYS’s MedTech scope is the equipment and coordination described in the contract, not a claim to fabricate every wall cassette.",
      },
    ],
  },
  {
    divisionId: "medtech",
    slug: "hospital-solutions",
    seo: {
      path: "/medtech/hospital-solutions",
      cluster: "medtech",
      primaryKeyword: "hospital infrastructure solutions Bihar",
      secondaryKeywords: [
        "healthcare facility planning",
        "hospital setup company Patna",
        "turnkey hospital equipment",
        "clinic setup Bihar",
      ],
      semanticKeywords: ["department planning", "phased procurement", "facility brief"],
      searchIntent: "commercial",
      audience: "Promoters planning a new facility or multi-department upgrade",
      title: "Hospital Solutions and Healthcare Facility Planning",
      description:
        "Hospital and clinic setup support from EKOSYS — combining equipment planning with architecture and IT where needed for Bihar healthcare projects.",
      h1: "Hospital Solutions: Planning Equipment With the Building",
      ogImage: "/images/medTech/MedTech-Main-Image.webp",
      ogImageAlt: "Healthcare facility planning and medical technology",
      ctaLabel: "Discuss a Hospital Project",
      conversionGoal: "Facility planning / multi-department enquiry",
      relatedPaths: [
        "/medtech/hospital-equipment",
        "/designlab/commercial-architecture",
        "/it-solutions/enterprise-it",
      ],
      insightSlugs: ["hospital-ot-setup-equipment-list-cost-india"],
    },
    eyebrow: "Hospital Solutions",
    intro:
      "This page is for promoters who need more than a single device: a sequenced equipment plan, room-wise utilities, and optional architecture or networking from other EKOSYS divisions. Scope is written project by project — we do not sell a fictional ‘turnkey hospital in 90 days’ package.",
    whoNeeds:
      "New nursing homes, diagnostic-plus-OT combinations, and existing hospitals adding floors or specialties.",
    problems: [
      {
        title: "Civil almost finished, equipment still undecided",
        body: "Late equipment decisions force chasing and extra openings. We push for a frozen brief before wet work closes walls.",
      },
    ],
    approach: [
      {
        title: "Discover → Design → Engineer → Execute → Support",
        body: "The corporate framework applied to healthcare: brief, layouts, utilities, staged supply, then service contacts.",
      },
    ],
    considerations: [
      {
        title: "What we will not claim",
        items: [
          "NABH accreditation as a delivered product — that is the hospital’s quality system",
          "Clinical outcomes",
          "Unnamed ‘tie-ups’ with every global OEM",
        ],
      },
    ],
    faqs: [
      {
        question: "Can architecture and MedTech be one contract?",
        answer:
          "They can be coordinated under EKOSYS with separate scopes and commercial lines so responsibilities stay clear. Combined delivery is discussed case by case.",
      },
    ],
  },
];
