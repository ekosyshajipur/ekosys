import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FiCheckCircle, FiXCircle, FiArrowRight, FiSun, FiZap, FiBattery, FiDollarSign } from "react-icons/fi";
import { FAQSchema, BreadcrumbSchema } from "../components/SchemaMarkup";
import { businessInfo } from "../data/seoData";

// ---------------------------------------------------------------------------
// Comparison Data
// ---------------------------------------------------------------------------
const comparisonRows = [
  { label: "Grid Connection", onGrid: "Yes", offGrid: "No", hybrid: "Yes", best: "onGrid" },
  { label: "Battery Required", onGrid: "No", offGrid: "Yes", hybrid: "Yes", best: "onGrid" },
  { label: "Works During Power Cuts", onGrid: "No", offGrid: "Yes", hybrid: "Yes", best: "hybrid" },
  { label: "Net Metering", onGrid: "Yes", offGrid: "No", hybrid: "Yes", best: "hybrid" },
  { label: "Government Subsidy", onGrid: "Up to ₹78,000", offGrid: "No", hybrid: "Up to ₹78,000", best: "onGrid" },
  { label: "Best For", onGrid: "Urban homes", offGrid: "Remote areas", hybrid: "Areas with power cuts", best: "hybrid" },
  { label: "Price Range", onGrid: "₹55,000–65,000/kW", offGrid: "₹85,000–95,000/kW", hybrid: "₹95,000–1,15,000/kW", best: "onGrid" },
  { label: "ROI Period", onGrid: "3–4 years", offGrid: "5–6 years", hybrid: "4–5 years", best: "onGrid" },
  { label: "Maintenance", onGrid: "Low", offGrid: "Medium", hybrid: "Medium", best: "onGrid" },
  { label: "Lifespan", onGrid: "25+ years", offGrid: "25+ years", hybrid: "25+ years", best: "all" },
];

const systemDetails = [
  {
    title: "On-Grid Solar System",
    icon: <FiSun />,
    desc: "An on-grid solar system is connected directly to the utility power grid. It is the most affordable and popular choice for urban homes and businesses where grid power is reliable. Excess electricity is fed back to the grid through net metering, earning you credits that offset your electricity bill.",
    pros: [
      "Lowest upfront cost — no batteries required",
      "Net metering benefits — sell excess power to grid",
      "Fastest ROI — payback in 3-4 years",
      "Government subsidy up to ₹78,000",
      "Minimal maintenance — no battery upkeep",
      "Highest efficiency — direct grid feed",
    ],
    cons: [
      "Does not work during power cuts",
      "Dependent on grid availability",
      "No energy storage for nighttime use",
    ],
  },
  {
    title: "Off-Grid Solar System",
    icon: <FiZap />,
    desc: "An off-grid solar system operates completely independently from the utility grid. It uses solar panels to charge a battery bank during the day, and stored energy powers your home or business 24/7. This is the ideal solution for remote locations, farms, and areas with unreliable or no grid power.",
    pros: [
      "Complete energy independence — no grid needed",
      "Works 24/7 with battery backup",
      "Immune to power cuts and grid failures",
      "Perfect for remote and rural areas",
      "Powers all appliances including AC and refrigerator",
    ],
    cons: [
      "Higher upfront cost due to batteries",
      "Batteries need replacement every 5-10 years",
      "No net metering — cannot sell excess power",
      "Not eligible for government subsidy",
      "Requires more maintenance than on-grid",
    ],
  },
  {
    title: "Hybrid Solar System",
    icon: <FiBattery />,
    desc: "A hybrid solar system combines the best of on-grid and off-grid. It connects to the grid AND has battery backup, giving you uninterrupted power supply. The intelligent hybrid inverter automatically manages solar, battery, and grid power for maximum efficiency and savings.",
    pros: [
      "Grid + battery backup — best of both worlds",
      "Works during power cuts with battery",
      "Net metering benefits + energy storage",
      "Automatic seamless switchover (<10ms)",
      "Government subsidy up to ₹78,000",
      "Future-proof — expandable battery storage",
    ],
    cons: [
      "Highest upfront cost",
      "More complex installation",
      "Battery maintenance and replacement costs",
    ],
  },
];

const batteryComparison = [
  { feature: "Type", lithium: "Lithium Iron Phosphate (LiFePO4)", tubular: "Tubular Lead Acid", gel: "Sealed Gel (VRLA)" },
  { feature: "Cycle Life", lithium: "6,000+ cycles", tubular: "1,500+ cycles", gel: "2,000+ cycles" },
  { feature: "Depth of Discharge", lithium: "95%", tubular: "50%", gel: "60-70%" },
  { feature: "Lifespan", lithium: "10-15 years", tubular: "5-7 years", gel: "6-8 years" },
  { feature: "Maintenance", lithium: "None", tubular: "Water top-up every 3-6 months", gel: "None" },
  { feature: "Weight (150Ah)", lithium: "~25 kg", tubular: "~52 kg", gel: "~48 kg" },
  { feature: "Price (150Ah)", lithium: "₹45,000-65,000", tubular: "₹14,000-18,000", gel: "₹18,000-22,000" },
  { feature: "Best For", lithium: "Premium hybrid systems", tubular: "Budget off-grid systems", gel: "Maintenance-free needs" },
];

const inverterComparison = [
  { feature: "Type", string: "String Inverter", micro: "Micro Inverter", hybrid: "Hybrid Inverter" },
  { feature: "Best For", string: "On-Grid systems", micro: "Shaded rooftops", hybrid: "Grid + Battery" },
  { feature: "Efficiency", string: "98.6%", micro: "96.5%", hybrid: "97.5%" },
  { feature: "Monitoring", string: "System-level", micro: "Panel-level", hybrid: "System + Battery" },
  { feature: "Shading Impact", string: "High — affects entire string", micro: "None — each panel independent", hybrid: "Medium" },
  { feature: "Price (5kW)", string: "₹30,000-45,000", micro: "₹75,000-1,00,000", hybrid: "₹50,000-70,000" },
  { feature: "Warranty", string: "5-10 years", micro: "25 years", hybrid: "5-10 years" },
];

const faqs = [
  {
    q: "Which solar system is best for homes in Bihar?",
    a: "For most homes in Bihar, an on-grid solar system is the best choice because it offers the lowest cost, fastest ROI (3-4 years), and government subsidy up to ₹78,000. However, if your area has frequent power cuts, a hybrid system provides both net metering benefits and battery backup.",
  },
  {
    q: "Can I get government subsidy on all types of solar systems?",
    a: "Government subsidy under PM Surya Ghar Muft Bijli Yojana is available only for on-grid and hybrid solar systems (up to ₹78,000). Off-grid systems are not eligible for this subsidy. However, solar water pumps may qualify for up to 90% subsidy under the PM-KUSUM scheme.",
  },
  {
    q: "What is the price difference between on-grid and hybrid solar systems?",
    a: "On-grid systems cost ₹55,000-65,000 per kW while hybrid systems cost ₹95,000-1,15,000 per kW. The price difference is primarily due to the battery and hybrid inverter. However, hybrid systems provide backup during power cuts, which on-grid systems cannot.",
  },
  {
    q: "Do I need a battery with an on-grid solar system?",
    a: "No, on-grid solar systems do not require batteries. They are connected directly to the electricity grid and use net metering to send excess power back. This makes them the most affordable option. However, they will not work during power cuts.",
  },
  {
    q: "Which battery type is best for solar systems — lithium or tubular?",
    a: "Lithium (LiFePO4) batteries are the best choice for performance — they last 10-15 years, have 95% depth of discharge, and are maintenance-free. However, tubular lead acid batteries cost significantly less upfront and are suitable for budget-conscious installations.",
  },
  {
    q: "How long do solar panels last in Bihar's climate?",
    a: "Quality solar panels (Mono PERC, Bifacial) last 25-30 years in Bihar's climate. They are designed to withstand high temperatures, monsoon rains, and dust. With proper maintenance (cleaning every 2-3 months), panels maintain 80%+ efficiency even after 25 years.",
  },
];

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------
const styles = `
  .comparison-page { color: #0f172a; }

  .comparison-hero {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    padding: 140px 0 70px;
    text-align: center;
    color: #fff;
  }
  .comparison-hero h1 {
    font-size: 2.8rem;
    font-weight: 900;
    margin-bottom: 16px;
    line-height: 1.2;
  }
  .comparison-hero p {
    font-size: 1.15rem;
    color: rgba(255,255,255,.75);
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.7;
  }

  .comparison-table-section {
    padding: 80px 0;
    background: #f8fafc;
  }
  .comparison-table-wrapper {
    overflow-x: auto;
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0,0,0,.1);
  }
  .comparison-table {
    width: 100%;
    border-collapse: collapse;
    background: #fff;
    min-width: 700px;
  }
  .comparison-table thead th {
    padding: 20px 24px;
    text-align: center;
    font-weight: 700;
    font-size: 1.05rem;
    border-bottom: 3px solid #e2e8f0;
  }
  .comparison-table thead th:first-child {
    text-align: left;
    background: #f1f5f9;
    min-width: 180px;
  }
  .comparison-table thead .th-ongrid { background: linear-gradient(135deg, #dcfce7, #bbf7d0); color: #166534; }
  .comparison-table thead .th-offgrid { background: linear-gradient(135deg, #fef3c7, #fde68a); color: #92400e; }
  .comparison-table thead .th-hybrid { background: linear-gradient(135deg, #dbeafe, #bfdbfe); color: #1e40af; }

  .comparison-table tbody td {
    padding: 16px 24px;
    border-bottom: 1px solid #f1f5f9;
    text-align: center;
    font-size: .95rem;
    transition: background .2s;
  }
  .comparison-table tbody td:first-child {
    text-align: left;
    font-weight: 600;
    color: #334155;
    background: #fafafa;
  }
  .comparison-table tbody tr:hover td {
    background: rgba(245,158,11,.04);
  }
  .comparison-table tbody tr:hover td:first-child {
    background: rgba(245,158,11,.08);
  }
  .cell-yes { color: #16a34a; font-weight: 600; }
  .cell-no { color: #dc2626; font-weight: 600; }
  .cell-best { background: rgba(34,197,94,.08) !important; font-weight: 600; color: #166534; }

  .system-details-section { padding: 80px 0; }
  .system-detail-card {
    background: #fff;
    border-radius: 20px;
    padding: 40px;
    margin-bottom: 40px;
    box-shadow: 0 4px 24px rgba(0,0,0,.06);
    border: 1px solid rgba(0,0,0,.05);
  }
  .system-detail-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
  }
  .system-detail-header .icon {
    width: 56px; height: 56px;
    border-radius: 14px;
    background: linear-gradient(135deg, #f59e0b, #f97316);
    display: flex; align-items: center; justify-content: center;
    color: #fff; font-size: 1.5rem;
  }
  .system-detail-header h3 {
    font-size: 1.6rem; font-weight: 800;
  }
  .system-detail-card > p {
    color: #64748b; line-height: 1.8; margin-bottom: 28px; font-size: .95rem;
  }
  .pros-cons-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 30px;
  }
  .pros-list, .cons-list { list-style: none; padding: 0; }
  .pros-list h4, .cons-list h4 {
    font-size: 1.1rem; margin-bottom: 14px;
  }
  .pros-list h4 { color: #16a34a; }
  .cons-list h4 { color: #dc2626; }
  .pros-list li, .cons-list li {
    display: flex; align-items: flex-start; gap: 10px;
    padding: 8px 0; font-size: .92rem; color: #334155;
  }
  .pros-list li svg { color: #16a34a; flex-shrink: 0; margin-top: 3px; }
  .cons-list li svg { color: #dc2626; flex-shrink: 0; margin-top: 3px; }

  .battery-section, .inverter-section {
    padding: 80px 0;
    background: #f8fafc;
  }
  .inverter-section { background: #fff; }
  .sub-table-wrapper {
    overflow-x: auto;
    border-radius: 14px;
    box-shadow: 0 2px 16px rgba(0,0,0,.06);
    margin-top: 30px;
  }
  .sub-table {
    width: 100%; border-collapse: collapse; background: #fff; min-width: 600px;
  }
  .sub-table thead th {
    padding: 16px 20px; font-weight: 700; text-align: center;
    border-bottom: 2px solid #e2e8f0; font-size: .95rem; background: #f8fafc;
  }
  .sub-table thead th:first-child { text-align: left; }
  .sub-table tbody td {
    padding: 14px 20px; border-bottom: 1px solid #f1f5f9;
    text-align: center; font-size: .9rem;
  }
  .sub-table tbody td:first-child { text-align: left; font-weight: 600; color: #334155; }
  .sub-table tbody tr:hover td { background: rgba(245,158,11,.03); }

  .comparison-faq-section {
    padding: 80px 0;
    background: #f8fafc;
  }
  .faq-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 20px;
  }
  .faq-card {
    background: #fff; border-radius: 14px; padding: 28px;
    box-shadow: 0 2px 12px rgba(0,0,0,.05);
    border: 1px solid rgba(0,0,0,.04);
    transition: box-shadow .3s;
  }
  .faq-card:hover { box-shadow: 0 8px 30px rgba(245,158,11,.1); }
  .faq-card h4 {
    font-size: 1rem; margin-bottom: 10px; color: #0f172a; line-height: 1.4;
  }
  .faq-card p { color: #64748b; font-size: .9rem; line-height: 1.7; }

  .comparison-cta {
    padding: 80px 0;
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    text-align: center;
    color: #fff;
  }
  .comparison-cta h2 { font-size: 2.2rem; font-weight: 800; margin-bottom: 16px; }
  .comparison-cta p { color: rgba(255,255,255,.7); font-size: 1.05rem; margin-bottom: 32px; max-width: 600px; margin-left: auto; margin-right: auto; }
  .cta-buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

  @media (max-width: 768px) {
    .comparison-hero h1 { font-size: 1.8rem; }
    .comparison-hero { padding: 120px 0 50px; }
    .pros-cons-grid { grid-template-columns: 1fr; }
    .faq-grid { grid-template-columns: 1fr; }
    .system-detail-card { padding: 24px; }
    .system-detail-header h3 { font-size: 1.3rem; }
    .comparison-cta h2 { font-size: 1.6rem; }
  }
`;

// ---------------------------------------------------------------------------
// Cell renderer
// ---------------------------------------------------------------------------
function CellValue({ value, isBest }) {
  const lc = value.toLowerCase();
  let className = "";
  if (lc === "yes") className = "cell-yes";
  else if (lc === "no") className = "cell-no";
  if (isBest) className += " cell-best";
  return <td className={className}>{value}</td>;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function SolarComparison() {
  const canonicalUrl = `${businessInfo.url}/solar-system-comparison`;

  const openPopup = () => window.dispatchEvent(new Event("openPopup"));

  return (
    <article className="comparison-page">
      <Helmet>
        <title>On-Grid vs Off-Grid vs Hybrid Solar System | Complete Comparison | EKOSYS</title>
        <meta
          name="description"
          content="Compare On-Grid, Off-Grid, and Hybrid solar systems side-by-side. Learn about price, ROI, battery, subsidy, and which solar system is best for your home in Bihar. Complete 2025 guide by EKOSYS."
        />
        <meta
          name="keywords"
          content="on-grid vs off-grid solar, hybrid solar system, solar comparison, best solar system Bihar, solar panel comparison India, on-grid solar price, off-grid solar price, hybrid solar price, solar battery comparison, solar inverter comparison, EKOSYS solar"
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="On-Grid vs Off-Grid vs Hybrid Solar System | Complete Comparison | EKOSYS" />
        <meta property="og:description" content="Compare On-Grid, Off-Grid, and Hybrid solar systems. Price, ROI, battery, subsidy comparison guide for Bihar homes." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${businessInfo.url}/images/hero-banner.webp`} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <style>{styles}</style>
      </Helmet>

      <BreadcrumbSchema
        items={[
          { name: "Home", url: businessInfo.url },
          { name: "Products", url: `${businessInfo.url}/products` },
          { name: "Solar System Comparison", url: canonicalUrl },
        ]}
      />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="comparison-hero">
        <div className="container">
          <h1>
            Complete <span className="highlight">Solar System</span> Comparison Guide
          </h1>
          <p>
            On-Grid vs Off-Grid vs Hybrid — compare prices, features, subsidy eligibility,
            ROI, and find the perfect solar system for your home or business in Bihar.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="comparison-table-section">
        <div className="container">
          <h2 className="section-title">
            Side-by-Side <span className="highlight">Comparison</span>
          </h2>
          <p className="section-subtitle">
            Compare all three solar system types across 10 key parameters
          </p>

          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="th-ongrid">☀️ On-Grid</th>
                  <th className="th-offgrid">🔋 Off-Grid</th>
                  <th className="th-hybrid">⚡ Hybrid</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i}>
                    <td>{row.label}</td>
                    <CellValue
                      value={row.onGrid}
                      isBest={row.best === "onGrid" || row.best === "all"}
                    />
                    <CellValue
                      value={row.offGrid}
                      isBest={row.best === "offGrid" || row.best === "all"}
                    />
                    <CellValue
                      value={row.hybrid}
                      isBest={row.best === "hybrid" || row.best === "all"}
                    />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* System Details with Pros/Cons */}
      <section className="system-details-section">
        <div className="container">
          <h2 className="section-title">
            Detailed <span className="highlight">System Breakdown</span>
          </h2>
          <p className="section-subtitle">
            Understand the pros and cons of each solar system type
          </p>

          {systemDetails.map((system, i) => (
            <div className="system-detail-card" key={i}>
              <div className="system-detail-header">
                <div className="icon">{system.icon}</div>
                <h3>{system.title}</h3>
              </div>
              <p>{system.desc}</p>
              <div className="pros-cons-grid">
                <div>
                  <ul className="pros-list">
                    <h4>✅ Advantages</h4>
                    {system.pros.map((pro, j) => (
                      <li key={j}>
                        <FiCheckCircle size={16} />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <ul className="cons-list">
                    <h4>❌ Disadvantages</h4>
                    {system.cons.map((con, j) => (
                      <li key={j}>
                        <FiXCircle size={16} />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Battery Comparison */}
      <section className="battery-section">
        <div className="container">
          <h2 className="section-title">
            Solar <span className="highlight">Battery Comparison</span>
          </h2>
          <p className="section-subtitle">
            Lithium-ion vs Tubular Lead Acid vs Gel — which battery is right for your solar system?
          </p>

          <div className="sub-table-wrapper">
            <table className="sub-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>🔋 Lithium (LiFePO4)</th>
                  <th>🔌 Tubular Lead Acid</th>
                  <th>🧊 Gel (VRLA)</th>
                </tr>
              </thead>
              <tbody>
                {batteryComparison.map((row, i) => (
                  <tr key={i}>
                    <td>{row.feature}</td>
                    <td>{row.lithium}</td>
                    <td>{row.tubular}</td>
                    <td>{row.gel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Inverter Comparison */}
      <section className="inverter-section">
        <div className="container">
          <h2 className="section-title">
            Solar <span className="highlight">Inverter Comparison</span>
          </h2>
          <p className="section-subtitle">
            String Inverter vs Micro Inverter vs Hybrid Inverter — choose the right inverter for your setup
          </p>

          <div className="sub-table-wrapper">
            <table className="sub-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>⚙️ String Inverter</th>
                  <th>🔲 Micro Inverter</th>
                  <th>⚡ Hybrid Inverter</th>
                </tr>
              </thead>
              <tbody>
                {inverterComparison.map((row, i) => (
                  <tr key={i}>
                    <td>{row.feature}</td>
                    <td>{row.string}</td>
                    <td>{row.micro}</td>
                    <td>{row.hybrid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="comparison-faq-section">
        <div className="container">
          <h2 className="section-title">
            Frequently Asked <span className="highlight">Questions</span>
          </h2>
          <p className="section-subtitle">
            Common questions about solar system comparison answered by our experts
          </p>

          <div className="faq-grid">
            {faqs.map((faq, i) => (
              <div className="faq-card" key={i}>
                <h4>{faq.q}</h4>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="comparison-cta">
        <div className="container">
          <h2>
            Not Sure Which Solar System is Right for You?
          </h2>
          <p>
            Our solar experts will analyze your electricity usage, roof space, and budget
            to recommend the perfect system. Free consultation — no obligation.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary" onClick={openPopup}>
              Get Free Expert Consultation <FiArrowRight />
            </button>
            <a
              href="https://wa.me/918757686826?text=Hi%20EKOSYS%2C%20I%20need%20help%20choosing%20the%20right%20solar%20system"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ borderColor: "#fff", color: "#fff" }}
            >
              WhatsApp Us
            </a>
            <Link to="/contact" className="btn btn-outline" style={{ borderColor: "#f59e0b", color: "#f59e0b" }}>
              Contact Page
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
