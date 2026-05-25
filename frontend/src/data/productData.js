// =============================================================================
// EKOSYS Solar — Product Catalog Data Store
// =============================================================================
// Complete product data used for product listing pages, individual product
// detail pages, ProductSchema (JSON-LD), and sitemap generation.
// =============================================================================

export const productCategories = [
  // =========================================================================
  // 1. SOLAR PANELS
  // =========================================================================
  {
    category: "solar-panels",
    name: "Solar Panels",
    description:
      "High-efficiency solar panels from top brands. ALMM-approved, Tier-1 modules with 25-year performance warranty.",
    image: "/images/ongrid.webp",
    products: [
      {
        slug: "mono-perc-half-cut-solar-panel",
        name: "Mono PERC Half-Cut Solar Panel",
        brand: "EKOSYS Premium",
        description:
          "High-efficiency Mono PERC Half-Cut solar panels delivering superior performance in Indian climatic conditions. These 144-cell modules feature advanced passivated emitter rear contact (PERC) technology with half-cut cell design that reduces resistive losses and improves shade tolerance. ALMM approved and BIS certified for government subsidy eligibility under PM Surya Ghar Yojana.",
        image: "/images/ongrid.webp",
        price: 24000,
        priceUnit: "per panel",
        capacity: "540W - 550W",
        sku: "EK-MPANEL-540",
        ratingValue: 4.9,
        reviewCount: 342,
        specs: {
          type: "Mono PERC Half-Cut",
          wattage: "540W - 550W",
          efficiency: "21.3%",
          warranty: "25 years performance, 12 years product",
          cells: "144 cells (Half-Cut)",
          dimensions: "2278 × 1134 × 35 mm",
          weight: "28.5 kg",
          connector: "MC4 compatible",
          certification: "ALMM, BIS, IEC 61215, IEC 61730",
        },
        features: [
          "21.3% module efficiency — industry leading",
          "Anti-PID technology for long-term reliability",
          "Excellent low-light and cloudy day performance",
          "Salt mist & ammonia resistant — IP68 junction box",
          "ALMM approved — eligible for government subsidy",
          "Half-cut cell design reduces hot-spot risk",
          "25-year linear performance warranty",
        ],
        metaTitle:
          "Mono PERC Half-Cut Solar Panel | 540W-550W | Best Price Bihar | EKOSYS",
        metaDescription:
          "Buy high-efficiency 540W-550W Mono PERC Half-Cut solar panels at best price in Bihar. ALMM approved, 25-year warranty, government subsidy eligible. Free installation by EKOSYS.",
      },
      {
        slug: "bifacial-solar-panel",
        name: "Bifacial Solar Panel",
        brand: "EKOSYS Premium",
        description:
          "Next-generation bifacial solar panels that capture sunlight from both front and rear surfaces, generating up to 30% more energy compared to monofacial panels. The transparent backsheet allows reflected light from the ground to be absorbed, making these panels ideal for rooftop and ground-mount installations with reflective surfaces.",
        image: "/images/ongrid.webp",
        price: 28000,
        priceUnit: "per panel",
        capacity: "545W - 555W",
        sku: "EK-BFPANEL-545",
        ratingValue: 4.8,
        reviewCount: 187,
        specs: {
          type: "Bifacial Mono PERC",
          wattage: "545W - 555W (front) + up to 30% rear gain",
          efficiency: "21.5% (front side)",
          warranty: "30 years performance, 12 years product",
          cells: "144 cells (Half-Cut Bifacial)",
          dimensions: "2278 × 1134 × 35 mm",
          weight: "29.2 kg",
          connector: "MC4 compatible",
          certification: "ALMM, BIS, IEC 61215, IEC 61730",
        },
        features: [
          "Up to 30% more energy from rear side",
          "21.5% front-side efficiency",
          "Dual-glass construction — enhanced durability",
          "Ideal for ground-mount and elevated rooftop systems",
          "30-year linear performance warranty",
          "Lower LCOE (Levelized Cost of Energy)",
          "ALMM approved for subsidy eligibility",
        ],
        metaTitle:
          "Bifacial Solar Panel | 545W-555W | Up to 30% Extra Power | EKOSYS",
        metaDescription:
          "Buy bifacial solar panels generating up to 30% extra power from both sides. 545W-555W, 30-year warranty, ALMM approved. Best price in Bihar from EKOSYS.",
      },
      {
        slug: "polycrystalline-solar-panel",
        name: "Polycrystalline Solar Panel",
        brand: "EKOSYS Value",
        description:
          "Cost-effective polycrystalline solar panels suitable for budget-conscious installations. These 72-cell modules offer reliable performance with proven silicon technology. Ideal for large-scale rooftop and ground-mount projects where cost per watt is the primary consideration.",
        image: "/images/ongrid.webp",
        price: 16000,
        priceUnit: "per panel",
        capacity: "330W - 340W",
        sku: "EK-PPANEL-335",
        ratingValue: 4.6,
        reviewCount: 256,
        specs: {
          type: "Polycrystalline",
          wattage: "330W - 340W",
          efficiency: "17.2%",
          warranty: "25 years performance, 10 years product",
          cells: "72 cells",
          dimensions: "1960 × 992 × 40 mm",
          weight: "22.5 kg",
          connector: "MC4 compatible",
          certification: "BIS, IEC 61215, IEC 61730",
        },
        features: [
          "Most affordable solar panel option",
          "Proven polycrystalline silicon technology",
          "Good performance in hot Indian climate",
          "25-year performance warranty",
          "Ideal for large commercial installations",
          "Robust aluminium alloy frame",
          "BIS certified for quality assurance",
        ],
        metaTitle:
          "Polycrystalline Solar Panel | 330W-340W | Affordable Price | EKOSYS",
        metaDescription:
          "Buy affordable polycrystalline solar panels at best price in Bihar. 330W-340W, 25-year warranty, BIS certified. Budget-friendly solar solution by EKOSYS.",
      },
    ],
  },

  // =========================================================================
  // 2. SOLAR INVERTERS
  // =========================================================================
  {
    category: "solar-inverters",
    name: "Solar Inverters",
    description:
      "Premium solar inverters for on-grid, off-grid, and hybrid systems. MPPT tracking, Wi-Fi monitoring, MNRE approved.",
    image: "/images/inverter.webp",
    products: [
      {
        slug: "on-grid-solar-inverter",
        name: "On-Grid Solar Inverter",
        brand: "Growatt / Havells",
        description:
          "High-efficiency on-grid solar inverter with dual MPPT tracking for maximum power harvesting. Features built-in Wi-Fi monitoring, wide input voltage range, and IP65 protection rating. Designed for grid-tied rooftop solar systems with net metering support. Compatible with all major solar panel brands.",
        image: "/images/inverter.webp",
        price: 35000,
        priceUnit: "per unit (3kW)",
        capacity: "1kW - 100kW",
        sku: "EK-OGINV-3K",
        ratingValue: 4.8,
        reviewCount: 289,
        specs: {
          type: "On-Grid String Inverter",
          capacity: "1kW to 100kW",
          efficiency: "98.6% peak",
          mppt: "Dual MPPT with wide voltage range",
          protection: "IP65 outdoor rated",
          monitoring: "Built-in Wi-Fi + App",
          display: "OLED / LCD with status indicators",
          warranty: "5 years standard, extendable to 10 years",
          certification: "MNRE approved, IEC 62109, CEA compliant",
        },
        features: [
          "98.6% peak conversion efficiency",
          "Dual MPPT tracking for max power harvest",
          "Built-in Wi-Fi — monitor from phone app",
          "IP65 rated — suitable for outdoor installation",
          "MNRE approved for government subsidy",
          "Wide input voltage range 100V-550V DC",
          "Zero export function available",
        ],
        metaTitle:
          "On-Grid Solar Inverter | 1kW-100kW | Growatt Havells | EKOSYS",
        metaDescription:
          "Buy MNRE approved on-grid solar inverters with dual MPPT, Wi-Fi monitoring, and 98.6% efficiency. Growatt & Havells brands at best price in Bihar. EKOSYS.",
      },
      {
        slug: "off-grid-solar-inverter",
        name: "Off-Grid Solar Inverter",
        brand: "Luminous / UTL",
        description:
          "Pure sine wave off-grid solar inverter with integrated MPPT charge controller for battery-based solar systems. Delivers clean, stable AC power for all home appliances including sensitive electronics. Features intelligent battery management with multiple charging modes and LCD display for real-time monitoring.",
        image: "/images/inverter.webp",
        price: 28000,
        priceUnit: "per unit (3kVA)",
        capacity: "1kVA - 50kVA",
        sku: "EK-OFINV-3K",
        ratingValue: 4.7,
        reviewCount: 214,
        specs: {
          type: "Off-Grid Pure Sine Wave Inverter",
          capacity: "1kVA to 50kVA",
          waveform: "Pure Sine Wave",
          chargeController: "Built-in MPPT / PWM",
          batteryVoltage: "12V / 24V / 48V configurations",
          efficiency: "93% peak",
          display: "LCD with battery, load, solar status",
          warranty: "2 years standard",
          certification: "BIS certified",
        },
        features: [
          "Pure sine wave output — safe for all appliances",
          "Built-in MPPT charge controller",
          "Intelligent battery management system",
          "Multiple charging modes: Solar + Grid + Generator",
          "LCD display with real-time monitoring",
          "Overload, short-circuit, and deep-discharge protection",
          "Compatible with lithium and tubular batteries",
        ],
        metaTitle:
          "Off-Grid Solar Inverter | Pure Sine Wave | Luminous UTL | EKOSYS",
        metaDescription:
          "Buy pure sine wave off-grid solar inverters with MPPT charge controller. Luminous & UTL brands, 1kVA-50kVA. Best price in Bihar with installation by EKOSYS.",
      },
      {
        slug: "hybrid-solar-inverter",
        name: "Hybrid Solar Inverter",
        brand: "Growatt / Goodwe",
        description:
          "Advanced hybrid solar inverter that seamlessly manages solar, battery, and grid power. Features intelligent energy management with automatic switchover during power cuts (less than 10ms transfer time). Supports both on-grid and off-grid operation with net metering capability and battery charging priority settings.",
        image: "/images/inverter.webp",
        price: 55000,
        priceUnit: "per unit (5kW)",
        capacity: "3kW - 100kW",
        sku: "EK-HYINV-5K",
        ratingValue: 4.9,
        reviewCount: 176,
        specs: {
          type: "Hybrid Inverter (Grid-Tied + Battery)",
          capacity: "3kW to 100kW",
          efficiency: "97.5% peak",
          transferTime: "<10ms automatic switchover",
          batteryType: "Lithium-ion / Lead Acid compatible",
          mppt: "Dual MPPT",
          monitoring: "Wi-Fi + 4G + App monitoring",
          warranty: "5 years standard, extendable to 10 years",
          certification: "MNRE approved, IEC 62109, CEA compliant",
        },
        features: [
          "Seamless solar + battery + grid management",
          "<10ms automatic switchover during power cuts",
          "Net metering support with battery backup",
          "Dual MPPT with 97.5% efficiency",
          "Wi-Fi + 4G remote monitoring and control",
          "Time-of-use programming for max savings",
          "Compatible with lithium and lead-acid batteries",
        ],
        metaTitle:
          "Hybrid Solar Inverter | Grid + Battery | Growatt Goodwe | EKOSYS",
        metaDescription:
          "Buy hybrid solar inverters with seamless grid + battery management. Growatt & Goodwe brands, <10ms switchover, Wi-Fi monitoring. Best price Bihar. EKOSYS.",
      },
      {
        slug: "micro-inverter",
        name: "Micro Inverter",
        brand: "Enphase / APSystems",
        description:
          "Panel-level micro inverters that maximize energy harvest from each individual solar panel. Unlike string inverters, micro inverters eliminate the impact of shading on overall system performance. Each panel operates independently, ensuring the highest possible energy yield even in partially shaded conditions.",
        image: "/images/inverter.webp",
        price: 8500,
        priceUnit: "per unit",
        capacity: "300W - 500W per unit",
        sku: "EK-MCINV-400",
        ratingValue: 4.8,
        reviewCount: 98,
        specs: {
          type: "Micro Inverter (Panel-Level)",
          capacity: "300W - 500W per unit",
          efficiency: "96.5% CEC weighted",
          monitoring: "Panel-level monitoring via cloud",
          protection: "IP67 waterproof",
          warranty: "25 years",
          communication: "Power Line Communication (PLC)",
          certification: "IEC 62109, UL 1741",
        },
        features: [
          "Panel-level MPPT — no shading losses",
          "25-year warranty — matches panel lifespan",
          "IP67 waterproof — install anywhere",
          "Panel-level monitoring for each module",
          "No single point of failure",
          "Easy system expansion — add panels anytime",
          "Safest option — no high-voltage DC on roof",
        ],
        metaTitle:
          "Micro Inverter | Panel-Level | Enphase APSystems | EKOSYS",
        metaDescription:
          "Buy micro inverters for panel-level optimization. Enphase & APSystems, 25-year warranty, IP67 waterproof, no shading losses. Best solar solution by EKOSYS.",
      },
    ],
  },

  // =========================================================================
  // 3. SOLAR BATTERIES
  // =========================================================================
  {
    category: "solar-batteries",
    name: "Solar Batteries",
    description:
      "Premium solar batteries for off-grid and hybrid systems. Lithium-ion, tubular lead acid, and gel options available.",
    image: "/images/battery.webp",
    products: [
      {
        slug: "lithium-ion-solar-battery",
        name: "Lithium-Ion Solar Battery",
        brand: "EKOSYS / Luminous",
        description:
          "High-performance lithium iron phosphate (LiFePO4) solar battery with integrated Battery Management System (BMS). Offers 6000+ deep cycle life, 95% depth of discharge, and 10+ year lifespan. Lightweight, compact, and maintenance-free — the premium choice for modern hybrid and off-grid solar systems.",
        image: "/images/battery.webp",
        price: 65000,
        priceUnit: "per unit (5kWh)",
        capacity: "5kWh - 20kWh",
        sku: "EK-LIBAT-5K",
        ratingValue: 4.9,
        reviewCount: 198,
        specs: {
          type: "Lithium Iron Phosphate (LiFePO4)",
          capacity: "5kWh to 20kWh modules",
          voltage: "48V / 51.2V",
          depthOfDischarge: "95% DoD",
          cycleLife: "6000+ cycles at 80% DoD",
          lifespan: "10-15 years",
          weight: "45 kg (5kWh unit)",
          bms: "Integrated smart BMS",
          warranty: "10 years",
          certification: "BIS, UN38.3, IEC 62619",
        },
        features: [
          "6000+ deep cycle life — 3x longer than lead acid",
          "95% depth of discharge — use more stored energy",
          "Integrated smart BMS with cell balancing",
          "Maintenance-free — no water top-up needed",
          "50% lighter and 40% smaller than tubular batteries",
          "Fast charging — 0 to 100% in 2-3 hours",
          "10-year manufacturer warranty",
        ],
        metaTitle:
          "Lithium-Ion Solar Battery | LiFePO4 | 5kWh-20kWh | EKOSYS",
        metaDescription:
          "Buy LiFePO4 lithium solar batteries with 6000+ cycle life, 95% DoD, and 10-year warranty. Maintenance-free, lightweight. Best price in Bihar from EKOSYS.",
      },
      {
        slug: "tubular-lead-acid-solar-battery",
        name: "Tubular Lead Acid Solar Battery",
        brand: "Luminous / Exide",
        description:
          "Heavy-duty tubular lead acid solar batteries designed for deep cycle applications. Featuring thick tubular positive plates and special alloy grids for extended life. These batteries are the proven, cost-effective choice for off-grid solar systems, providing reliable power storage in Indian conditions.",
        image: "/images/battery.webp",
        price: 18000,
        priceUnit: "per unit (150Ah)",
        capacity: "100Ah - 250Ah",
        sku: "EK-TBBAT-150",
        ratingValue: 4.6,
        reviewCount: 312,
        specs: {
          type: "Tubular Lead Acid (Flooded)",
          capacity: "100Ah to 250Ah",
          voltage: "12V",
          depthOfDischarge: "50-60% DoD recommended",
          cycleLife: "1500+ cycles at 50% DoD",
          lifespan: "5-7 years",
          weight: "52 kg (150Ah)",
          maintenance: "Water top-up every 3-6 months",
          warranty: "3-5 years",
          certification: "BIS certified",
        },
        features: [
          "Most affordable deep-cycle battery option",
          "Thick tubular positive plates for longer life",
          "Proven technology — reliable Indian climate performance",
          "1500+ deep cycle life at 50% DoD",
          "Wide availability of replacement units",
          "Compatible with all off-grid and hybrid inverters",
          "3-5 year warranty from leading brands",
        ],
        metaTitle:
          "Tubular Lead Acid Solar Battery | 100Ah-250Ah | Luminous Exide | EKOSYS",
        metaDescription:
          "Buy tubular lead acid solar batteries from Luminous & Exide. 100Ah-250Ah, deep cycle, 5-7 year lifespan. Most affordable battery for solar systems in Bihar.",
      },
      {
        slug: "gel-solar-battery",
        name: "Gel Solar Battery",
        brand: "Amaron / Exide",
        description:
          "Sealed gel solar batteries offering maintenance-free operation with excellent deep cycle performance. The gelled electrolyte prevents acid stratification and allows installation in any orientation. Ideal for locations where regular maintenance is difficult, such as rooftop-mounted battery enclosures and remote installations.",
        image: "/images/battery.webp",
        price: 22000,
        priceUnit: "per unit (150Ah)",
        capacity: "100Ah - 200Ah",
        sku: "EK-GLBAT-150",
        ratingValue: 4.7,
        reviewCount: 145,
        specs: {
          type: "Sealed Gel (VRLA)",
          capacity: "100Ah to 200Ah",
          voltage: "12V",
          depthOfDischarge: "60-70% DoD",
          cycleLife: "2000+ cycles at 50% DoD",
          lifespan: "6-8 years",
          weight: "48 kg (150Ah)",
          maintenance: "Maintenance-free (sealed)",
          warranty: "3-5 years",
          certification: "BIS, IEC 61427",
        },
        features: [
          "100% maintenance-free — sealed design",
          "No acid spills — safe for indoor installation",
          "Install in any orientation",
          "2000+ deep cycle life at 50% DoD",
          "Excellent performance in high temperatures",
          "Low self-discharge rate",
          "No hydrogen gas emission — safe for enclosed spaces",
        ],
        metaTitle:
          "Gel Solar Battery | Sealed Maintenance-Free | 100Ah-200Ah | EKOSYS",
        metaDescription:
          "Buy sealed gel solar batteries — maintenance-free, spill-proof, 2000+ cycles. Amaron & Exide brands, 100Ah-200Ah. Safe indoor installation. EKOSYS Bihar.",
      },
    ],
  },

  // =========================================================================
  // 4. SOLAR ACCESSORIES & SPECIALTY PRODUCTS
  // =========================================================================
  {
    category: "solar-accessories",
    name: "Solar Accessories & Specialty Products",
    description:
      "Complete range of solar accessories including street lights, water heaters, water pumps, online UPS, and servo stabilizers.",
    image: "/images/street-light.webp",
    products: [
      {
        slug: "solar-street-light",
        name: "Solar LED Street Light",
        brand: "EKOSYS",
        description:
          "All-in-one solar LED street lights with integrated panel, battery, and controller. Fully automatic dusk-to-dawn operation with intelligent motion sensing for energy conservation. IP65 weatherproof construction withstands harsh Indian weather. Ideal for roads, highways, parks, campuses, housing societies, and rural areas.",
        image: "/images/street-light.webp",
        price: 8500,
        priceUnit: "per unit (30W)",
        capacity: "12W - 120W",
        sku: "EK-STLT-30W",
        ratingValue: 4.7,
        reviewCount: 223,
        specs: {
          type: "All-in-One Solar LED Street Light",
          wattage: "12W to 120W LED",
          panel: "Integrated monocrystalline",
          battery: "LiFePO4 built-in",
          runtime: "12-14 hours on full charge",
          sensor: "PIR motion sensor + light sensor",
          protection: "IP65 weatherproof",
          warranty: "3 years",
          mounting: "Pole mount (pole not included)",
        },
        features: [
          "All-in-one design — panel, battery, LED integrated",
          "Automatic dusk-to-dawn operation",
          "PIR motion sensor for energy saving",
          "IP65 weatherproof — rain, dust, storm resistant",
          "50,000+ hours LED lifespan",
          "Zero electricity cost — 100% solar powered",
          "Easy installation — no wiring required",
        ],
        metaTitle:
          "Solar LED Street Light | All-in-One | 12W-120W | EKOSYS Bihar",
        metaDescription:
          "Buy solar LED street lights with integrated panel, battery & motion sensor. 12W-120W, IP65 weatherproof, zero electricity cost. Best price Bihar. EKOSYS.",
      },
      {
        slug: "solar-water-heater",
        name: "Solar Water Heater",
        brand: "EKOSYS / V-Guard",
        description:
          "Energy-efficient solar water heating systems using Evacuated Tube Collector (ETC) technology for reliable hot water supply even on cloudy days. Reduces water heating costs by up to 80% with zero running costs after installation. Available in 100L to 500L capacities for homes, hotels, and hospitals.",
        image: "/images/water-heater.webp",
        price: 18000,
        priceUnit: "per unit (100L)",
        capacity: "100L - 500L",
        sku: "EK-SWHT-100",
        ratingValue: 4.6,
        reviewCount: 178,
        specs: {
          type: "Evacuated Tube Collector (ETC)",
          capacity: "100L to 500L",
          tubes: "10 to 50 vacuum tubes",
          tankMaterial: "SS304 stainless steel inner tank",
          insulation: "55mm high-density PUF",
          standbyLoss: "Less than 5°C in 24 hours",
          warranty: "5 years tank, 1 year tubes",
          backup: "Electric backup element optional",
        },
        features: [
          "80% savings on water heating bills",
          "Hot water available even on cloudy days",
          "SS304 stainless steel tank — no corrosion",
          "55mm PUF insulation — retains heat 24+ hours",
          "Zero running cost — uses free solar energy",
          "5-year tank warranty",
          "Electric backup available for rainy seasons",
        ],
        metaTitle:
          "Solar Water Heater | ETC | 100L-500L | Best Price Bihar | EKOSYS",
        metaDescription:
          "Buy solar water heaters with ETC technology. 100L-500L, SS304 tank, 80% savings on heating bills. 5-year warranty. Best price in Bihar from EKOSYS.",
      },
      {
        slug: "solar-water-pump",
        name: "Solar Water Pump",
        brand: "EKOSYS / Shakti",
        description:
          "Solar-powered water pumping systems for agriculture, irrigation, and drinking water supply. AC and DC submersible models running directly on solar energy, eliminating diesel and electricity costs. Eligible for up to 90% government subsidy under PM-KUSUM scheme for farmers.",
        image: "/images/solar-water-pump.webp",
        price: 125000,
        priceUnit: "per system (3HP)",
        capacity: "1HP - 10HP",
        sku: "EK-SWPM-3HP",
        ratingValue: 4.8,
        reviewCount: 156,
        specs: {
          type: "Solar Submersible Pump (AC/DC)",
          capacity: "1HP to 10HP",
          headRange: "Up to 300 feet",
          flowRate: "Up to 50,000 LPD",
          motorType: "AC / DC brushless",
          controller: "MPPT solar pump controller",
          warranty: "5 years motor, 25 years panel",
          subsidy: "Up to 90% under PM-KUSUM",
        },
        features: [
          "Zero running cost — powered by solar energy",
          "Up to 90% subsidy under PM-KUSUM scheme",
          "AC & DC submersible models available",
          "Suitable for borewell depths up to 300 feet",
          "MPPT controller for maximum water output",
          "No diesel or grid electricity needed",
          "Designed for Indian agricultural conditions",
        ],
        metaTitle:
          "Solar Water Pump | 1HP-10HP | PM-KUSUM Subsidy | EKOSYS Bihar",
        metaDescription:
          "Buy solar water pumps with up to 90% PM-KUSUM subsidy. 1HP-10HP, AC/DC submersible, zero running cost. Best for farming in Bihar. EKOSYS.",
      },
      {
        slug: "online-ups",
        name: "Online UPS System",
        brand: "APC / Luminous",
        description:
          "Enterprise-grade Online UPS systems providing zero transfer time and pure sine wave output. Double-conversion technology ensures complete isolation from mains power fluctuations. Protects critical IT infrastructure, medical equipment, telecom towers, and sensitive industrial machinery from voltage surges, sags, and outages.",
        image: "/images/online-ups.webp",
        price: 45000,
        priceUnit: "per unit (3kVA)",
        capacity: "1kVA - 200kVA",
        sku: "EK-OUPS-3K",
        ratingValue: 4.8,
        reviewCount: 132,
        specs: {
          type: "Online Double Conversion UPS",
          capacity: "1kVA to 200kVA",
          transferTime: "0ms (zero transfer time)",
          waveform: "Pure sine wave",
          inputRange: "110V-300V AC",
          efficiency: "Up to 95%",
          monitoring: "SNMP card / USB / RS232",
          warranty: "2 years standard",
          certification: "BIS, IEC 62040",
        },
        features: [
          "Zero transfer time — true online UPS",
          "Double conversion technology",
          "Pure sine wave output — safe for all equipment",
          "Wide input voltage range 110V-300V",
          "Hot-swappable battery option",
          "SNMP / USB remote monitoring",
          "Rack mount and tower options available",
        ],
        metaTitle:
          "Online UPS System | Zero Transfer Time | 1kVA-200kVA | EKOSYS",
        metaDescription:
          "Buy online UPS systems with zero transfer time and pure sine wave output. APC & Luminous brands, 1kVA-200kVA. Protect IT & medical equipment. EKOSYS Bihar.",
      },
      {
        slug: "servo-stabilizer",
        name: "Servo Voltage Stabilizer",
        brand: "EKOSYS / V-Guard",
        description:
          "High-precision servo voltage stabilizers for industrial, commercial, and residential applications. Ultra-fast correction speed with ±1% output accuracy protects expensive equipment from erratic voltage fluctuations common in Indian power grid conditions. Available in air-cooled and oil-cooled variants.",
        image: "/images/servo-stabilizer.webp",
        price: 35000,
        priceUnit: "per unit (5kVA)",
        capacity: "1kVA - 2000kVA",
        sku: "EK-SRVS-5K",
        ratingValue: 4.7,
        reviewCount: 167,
        specs: {
          type: "Servo Voltage Stabilizer",
          capacity: "1kVA to 2000kVA",
          outputAccuracy: "±1%",
          inputRange: "300V-470V (3-phase)",
          efficiency: "99%",
          correctionSpeed: "35V/sec",
          cooling: "Air cooled / Oil cooled",
          warranty: "2 years",
          certification: "BIS, IS 16221",
        },
        features: [
          "±1% output voltage accuracy",
          "99% efficiency — minimal power loss",
          "Fast correction speed — 35V/sec",
          "Overload & short circuit protection",
          "Digital display with voltage readings",
          "Available in single and three phase",
          "Air-cooled and oil-cooled variants",
        ],
        metaTitle:
          "Servo Voltage Stabilizer | ±1% Accuracy | 1kVA-2000kVA | EKOSYS",
        metaDescription:
          "Buy servo voltage stabilizers with ±1% accuracy and 99% efficiency. 1kVA-2000kVA, industrial and residential. Protect your equipment. EKOSYS Bihar.",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Helper: Find a product by category slug and product slug
// ---------------------------------------------------------------------------
export function findProduct(categorySlug, productSlug) {
  const category = productCategories.find(
    (cat) => cat.category === categorySlug
  );
  if (!category) return { category: null, product: null };
  const product = category.products.find((p) => p.slug === productSlug);
  return { category, product };
}

// ---------------------------------------------------------------------------
// Helper: Get all products as a flat array
// ---------------------------------------------------------------------------
export function getAllProducts() {
  return productCategories.flatMap((cat) =>
    cat.products.map((p) => ({ ...p, categorySlug: cat.category, categoryName: cat.name }))
  );
}

// ---------------------------------------------------------------------------
// Helper: Get related products (same category, excluding current)
// ---------------------------------------------------------------------------
export function getRelatedProducts(categorySlug, currentSlug) {
  const category = productCategories.find(
    (cat) => cat.category === categorySlug
  );
  if (!category) return [];
  return category.products.filter((p) => p.slug !== currentSlug);
}
