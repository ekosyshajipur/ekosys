import type { HubContent, ServiceContent } from "./types";

const itInsights = [
  "it-infrastructure-checklist-small-business",
  "corporate-it-amc-networking-cctv-bihar",
  "cctv-surveillance-system-installation-guide-bihar",
];

export const itHub: HubContent = {
  divisionId: "itsolutions",
  seo: {
    path: "/it-solutions",
    cluster: "it",
    primaryKeyword: "IT solutions Bihar",
    secondaryKeywords: [
      "computer shop Hajipur",
      "networking company Patna",
      "CCTV installation Vaishali",
      "enterprise IT infrastructure Bihar",
    ],
    semanticKeywords: [
      "LAN structured cabling",
      "NVR CCTV",
      "NAS storage",
      "business AMC",
    ],
    searchIntent: "commercial",
    audience: "Households, shops, offices and institutions needing hardware and networks",
    title: "IT Infrastructure, Computers and CCTV in Bihar",
    description:
      "EKOSYS IT Solutions supplies computers, networking, CCTV, storage and enterprise hardware from Hajipur — planned as infrastructure, not only box sales. Discuss your requirement.",
    h1: "Computers, Networks and Security Systems for Bihar Businesses",
    ogImage: "/images/ITSolutions/IT-Solutions-Main-Image.webp",
    ogImageAlt: "Enterprise IT infrastructure and computing environment",
    ctaLabel: "Discuss Your IT Infrastructure",
    conversionGoal: "IT survey / hardware quotation",
    relatedPaths: [
      "/it-solutions/networking",
      "/it-solutions/cctv",
      "/it-solutions/enterprise-it",
    ],
    insightSlugs: itInsights,
  },
  eyebrow: "EKOSYS IT Solutions",
  intro:
    "IT fails in small organisations when machines, cameras and Wi-Fi are bought separately and never documented. EKOSYS specifies computers, networks, CCTV and storage as a small infrastructure: cable paths, power, naming, and who will support it after week one. Primary service is Hajipur and Vaishali, with Patna and other Bihar sites by engagement.",
  whoFor:
    "Retail and offices, clinics, coaching centres, factories, and households that need more than a single laptop — plus enterprises that want a local partner for hardware and cabling.",
  differentiator:
    "IT can be coordinated with DesignLab (server rooms, conduit) and MedTech (clinic networks) when those projects run in parallel.",
  serviceSlugs: [
    "computers-laptops",
    "networking",
    "cctv",
    "storage",
    "enterprise-it",
  ],
  localNote:
    "Power cuts and dust are normal in North Bihar. We size UPS, earthing and filtration-adjacent placement honestly instead of quoting equipment that assumes a data-centre room.",
  faqs: [
    {
      question: "Do you only sell branded PCs?",
      answer:
        "We supply branded and assembled systems as specified. The quotation names make, warranty channel and what is excluded (for example, software licences the client must own).",
    },
    {
      question: "Is remote-only support available?",
      answer:
        "Remote help is useful for software issues. Cabling, CCTV focusing and hardware swaps still need a site visit. We will not pretend otherwise.",
    },
  ],
};

export const itServices: ServiceContent[] = [
  {
    divisionId: "itsolutions",
    slug: "computers-laptops",
    seo: {
      path: "/it-solutions/computers-laptops",
      cluster: "it",
      primaryKeyword: "computers and laptops Hajipur",
      secondaryKeywords: [
        "laptop dealer Vaishali",
        "desktop computers Patna",
        "business PC Bihar",
        "IT hardware supplier",
      ],
      semanticKeywords: ["workstation", "RAM SSD", "OEM warranty"],
      searchIntent: "transactional",
      audience: "Buyers of PCs and laptops for home, office and institutional use",
      title: "Computers and Laptops for Home and Business",
      description:
        "Desktops, laptops and related hardware from EKOSYS in Hajipur — specified for the actual workload, with warranty terms stated. Enquire for business or home systems.",
      h1: "Computers and Laptops Specified for the Work, Not the Sticker",
      ogImage: "/images/ITSolutions/Computer-Laptop-Image.webp",
      ogImageAlt: "Business computers and laptops on a workspace",
      ctaLabel: "Enquire About Computers or Laptops",
      conversionGoal: "Hardware quotation",
      relatedPaths: ["/it-solutions/enterprise-it", "/it-solutions/storage", "/it-solutions/networking"],
      insightSlugs: ["it-infrastructure-checklist-small-business"],
    },
    eyebrow: "Computers & Laptops",
    intro:
      "A machine for accounts, CAD, classroom or reception is four different BOMs. EKOSYS asks about software, hours of use, and whether the device leaves the building, then quotes a configuration with named components and the warranty path.",
    whoNeeds:
      "Households in Hajipur, offices refreshing fleets, and institutions buying a batch with the same image.",
    problems: [
      {
        title: "Under-specced ‘office PCs’ that cannot run the real software",
        body: "We want the software list. Tally, AutoCAD, video editing and browser-only work do not share a SKU.",
      },
    ],
    approach: [
      {
        title: "Use-case, then SKU",
        body: "Portability, screen size, GPU and storage are decided after the job is named.",
      },
    ],
    considerations: [
      {
        title: "Supply notes",
        items: [
          "Accessories (UPS, bags, docks) quoted separately unless included",
          "OS licences only when legally supplied",
          "No fabricated ‘lifetime warranty’ language",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you repair all laptop brands?",
        answer:
          "Repair depends on parts and whether the unit is under OEM warranty (which we will not void casually). We diagnose first, then quote.",
      },
    ],
  },
  {
    divisionId: "itsolutions",
    slug: "networking",
    seo: {
      path: "/it-solutions/networking",
      cluster: "it",
      primaryKeyword: "networking company Bihar",
      secondaryKeywords: [
        "LAN installation Hajipur",
        "office networking Patna",
        "structured cabling Bihar",
        "Wi-Fi for business",
      ],
      semanticKeywords: ["rack", "PoE switch", "VLAN", "fibre backbone"],
      searchIntent: "commercial",
      audience: "Offices and campuses that need a designed LAN, not a consumer mesh kit",
      title: "Business Networking and Structured Cabling",
      description:
        "Office networking in Hajipur, Patna and Bihar — structured cabling, switches, Wi-Fi and racks designed for growth. EKOSYS IT Solutions.",
      h1: "Networking Built as Cabling, Switching and Wi-Fi Together",
      ogImage: "/images/ITSolutions/Networking-Solutions-Image.webp",
      ogImageAlt: "Network rack and structured cabling infrastructure",
      ctaLabel: "Discuss Office Networking",
      conversionGoal: "Network survey",
      relatedPaths: ["/it-solutions/cctv", "/it-solutions/enterprise-it", "/it-solutions/storage"],
      insightSlugs: ["corporate-it-amc-networking-cctv-bihar"],
    },
    eyebrow: "Networking",
    intro:
      "Wi-Fi problems are often cable and switch problems. EKOSYS designs point counts, rack location, PoE budget and AP placement from a floor plan — then labels the plant so the next technician is not guessing.",
    whoNeeds:
      "Growing shops, clinics, schools, factories and offices in Bihar that have outgrown a single ISP router.",
    problems: [
      {
        title: "Consumer routers in a 30-user office",
        body: "We will say when the box is the wrong class. That is cheaper than a year of ‘the internet is slow’.",
      },
    ],
    approach: [
      {
        title: "Draw the drops",
        body: "Every camera, AP, desktop and printer that needs a cable is a drop. Wireless is planned, not hoped.",
      },
    ],
    considerations: [
      {
        title: "Engineering",
        items: [
          "Earthing and surge on incoming ISP",
          "Cable category suited to length and PoE",
          "Documentation: patch schedule and simple network diagram",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you provide internet connectivity?",
        answer:
          "ISP last-mile is the telecom operator’s product. We coordinate LAN-side termination, routing and failover as scoped — we are not an ISP.",
      },
    ],
  },
  {
    divisionId: "itsolutions",
    slug: "cctv",
    seo: {
      path: "/it-solutions/cctv",
      cluster: "it",
      primaryKeyword: "CCTV installation Bihar",
      secondaryKeywords: [
        "CCTV Hajipur",
        "surveillance system Patna",
        "IP camera installation",
        "NVR CCTV Bihar",
      ],
      semanticKeywords: ["PoE camera", "retention days", "night IR", "privacy angles"],
      searchIntent: "transactional",
      audience: "Homes, shops and facilities needing recorded surveillance",
      title: "CCTV and Surveillance System Installation",
      description:
        "CCTV design and installation in Hajipur, Vaishali and Patna — camera placement, NVR storage days and network load planned together. Request an EKOSYS site look-over.",
      h1: "CCTV Systems Designed for Coverage, Storage and Power",
      ogImage: "/images/ITSolutions/IT-Support-Engineer.webp",
      ogImageAlt: "IT engineer working on infrastructure and systems",
      ctaLabel: "Discuss a CCTV System",
      conversionGoal: "CCTV site survey",
      relatedPaths: ["/it-solutions/networking", "/it-solutions/storage", "/it-solutions/enterprise-it"],
      insightSlugs: ["cctv-surveillance-system-installation-guide-bihar"],
    },
    eyebrow: "CCTV",
    intro:
      "A useful CCTV system has identifiable faces or plates where the client needs them, storage that lasts the promised days, and cables that survive heat and rain. EKOSYS starts with a walk-through of entry points and cash or asset areas, then sizes NVR, HDD and PoE — not a random camera count.",
    whoNeeds:
      "Homes, retail, warehouses, clinics and offices in Bihar. Public-space legality and neighbour privacy remain the client’s responsibility; we will not aim cameras into homes that are not part of the brief.",
    problems: [
      {
        title: "Pixelated evidence",
        body: "Megapixel numbers mean nothing if the lens, light and bitrate are wrong. We design for the identification task.",
      },
    ],
    approach: [
      {
        title: "Coverage map",
        body: "Each camera has a job. Overlapping decorative cameras that nobody reviews are omitted.",
      },
    ],
    considerations: [
      {
        title: "Operations",
        items: [
          "Who watches live vs who reviews recordings",
          "UPS so recordings survive short outages",
          "Password and physical NVR security",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I view cameras on my phone?",
        answer:
          "Usually yes, if the NVR/DVR and network allow it and the client accepts the security implications of remote access. We enable it only with unique credentials — not default passwords.",
      },
    ],
  },
  {
    divisionId: "itsolutions",
    slug: "storage",
    seo: {
      path: "/it-solutions/storage",
      cluster: "it",
      primaryKeyword: "data storage solutions Bihar",
      secondaryKeywords: [
        "NAS Hajipur",
        "server storage Patna",
        "backup storage business",
        "CCTV HDD storage",
      ],
      semanticKeywords: ["RAID", "backup 3-2-1", "file server"],
      searchIntent: "commercial",
      audience: "Offices that have outgrown USB disks and untracked shares",
      title: "Storage, NAS and Backup Hardware",
      description:
        "Business storage from EKOSYS — NAS, server disks and backup hardware sized for documents, CCTV retention and shared files in Bihar offices.",
      h1: "Storage Systems With a Backup Idea, Not Only Bigger Disks",
      ogImage: "/images/ITSolutions/Computer-Accessories-Image.webp",
      ogImageAlt: "IT accessories and storage-related hardware",
      ctaLabel: "Discuss Storage and Backup",
      conversionGoal: "Storage architecture discussion",
      relatedPaths: ["/it-solutions/enterprise-it", "/it-solutions/cctv", "/it-solutions/computers-laptops"],
      insightSlugs: ["it-infrastructure-checklist-small-business"],
    },
    eyebrow: "Storage",
    intro:
      "Disk is not a strategy. EKOSYS helps offices choose NAS or server storage, RAID levels they can actually rebuild, and a backup target that is not the same disk. CCTV retention is treated as a storage calculation, not a surprise on day 31.",
    whoNeeds:
      "Accountants, clinics, coaching centres and factories that cannot afford to lose files, plus CCTV owners who need honest retention maths.",
    problems: [
      {
        title: "RAID as a substitute for backup",
        body: "We will explain the difference. RAID survives a disk failure; it does not survive ransomware or theft of the NAS.",
      },
    ],
    approach: [
      {
        title: "Capacity from real data",
        body: "We estimate from current folders and growth, then add headroom — not a round-number TB that looks impressive.",
      },
    ],
    considerations: [
      {
        title: "Limits",
        items: [
          "Cloud backup, if used, is an additional service with its own contract",
          "We do not claim indelible legal archives unless that product is specified",
        ],
      },
    ],
    faqs: [
      {
        question: "Will you recover data from a failed disk?",
        answer:
          "Basic logical issues may be attempted. Physical recovery is a specialist lab. We will not promise miracles on mechanically failed drives.",
      },
    ],
  },
  {
    divisionId: "itsolutions",
    slug: "enterprise-it",
    seo: {
      path: "/it-solutions/enterprise-it",
      cluster: "it",
      primaryKeyword: "enterprise IT infrastructure Bihar",
      secondaryKeywords: [
        "IT infrastructure company Patna",
        "server setup Hajipur",
        "business IT AMC Bihar",
        "office IT partner",
      ],
      semanticKeywords: ["rack server", "UPS sizing", "IT AMC", "directory basics"],
      searchIntent: "commercial",
      audience: "Organisations needing a coherent office IT stack and ongoing support",
      title: "Enterprise IT Infrastructure and AMC Support",
      description:
        "Enterprise-style IT for Bihar organisations — servers, racks, UPS, networking and optional AMC from EKOSYS. Built to the size of the business, not a metro data-centre copy.",
      h1: "IT Infrastructure Scaled to the Organisation You Actually Run",
      ogImage: "/images/ITSolutions/IT-Solutions-Main-Image.webp",
      ogImageAlt: "Enterprise IT infrastructure operations",
      ctaLabel: "Discuss Enterprise IT",
      conversionGoal: "Infrastructure + AMC conversation",
      relatedPaths: [
        "/it-solutions/networking",
        "/it-solutions/storage",
        "/it-solutions/computers-laptops",
        "/contact",
      ],
      insightSlugs: ["corporate-it-amc-networking-cctv-bihar"],
    },
    eyebrow: "Enterprise IT",
    intro:
      "‘Enterprise’ here means documented infrastructure for a real Bihar organisation: a small server or NAS, a proper rack, UPS, patching, user devices and an AMC if wanted. It does not mean we operate a hyperscale cloud. EKOSYS sizes the stack to headcount and risk.",
    whoNeeds:
      "Factories, hospitals, schools and growing offices that need one accountable IT partner for hardware and cabling, with software remaining the client’s licensed estate.",
    problems: [
      {
        title: "Single-person ‘IT knowledge’ with no passwords file",
        body: "Handover includes a credential and diagram pack stored with the client, not only in a technician’s head.",
      },
    ],
    approach: [
      {
        title: "Discover the estate",
        body: "We inventory what exists before proposing a rip-and-replace.",
      },
      {
        title: "Execute in slices",
        body: "Cabling, then switching, then servers — so the office can keep working.",
      },
    ],
    considerations: [
      {
        title: "AMC",
        items: [
          "Scope: break-fix, preventive, or both — written",
          "Response times that match Hajipur/Patna logistics, not fictional 15-minute SLAs",
          "Consumables and OEM parts extra unless included",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you implement SAP or custom ERP?",
        answer:
          "Those are specialist software projects. We can provide the hardware, network and endpoint environment they run on. We do not advertise ourselves as an ERP product company on this page.",
      },
    ],
  },
];
