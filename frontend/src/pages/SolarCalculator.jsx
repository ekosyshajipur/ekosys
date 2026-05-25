import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FiSun, FiDollarSign, FiCalendar, FiArrowRight, FiDroplet } from "react-icons/fi";
import { FAQSchema, BreadcrumbSchema } from "../components/SchemaMarkup";
import { businessInfo, serviceAreas } from "../data/seoData";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------
const COST_PER_KW_ONGRID = 60000;
const COST_PER_KW_HYBRID = 105000;
const COST_PER_KW_OFFGRID = 90000;
const CO2_PER_KW_YEAR = 1400; // kg CO2 offset per kW per year
const PANEL_AREA_PER_KW = 65; // sq ft per kW
const GENERATION_PER_KW_MONTH = 120; // kWh per kW per month in Bihar
const AVG_RATE_PER_UNIT = 8; // ₹ per kWh average in Bihar

const biharCities = serviceAreas.map((area) => area.name);

const systemTypes = [
  { value: "ongrid", label: "On-Grid", costPerKW: COST_PER_KW_ONGRID },
  { value: "hybrid", label: "Hybrid", costPerKW: COST_PER_KW_HYBRID },
  { value: "offgrid", label: "Off-Grid", costPerKW: COST_PER_KW_OFFGRID },
];

const faqs = [
  {
    q: "How accurate is this solar calculator?",
    a: "This calculator provides a close estimate based on average solar generation in Bihar (4.5-5 peak sun hours), average electricity rates, and standard system costs. For an exact quote tailored to your specific location, roof angle, shading, and consumption pattern, contact our engineers for a free site survey.",
  },
  {
    q: "How is the recommended system size calculated?",
    a: "The recommended system size is calculated based on your monthly electricity bill, divided by the average cost per unit and monthly generation per kW. It is also limited by your available roof area (approximately 65 sq ft per kW). The calculator picks the lower of the two to give a practical recommendation.",
  },
  {
    q: "What government subsidy is available for solar in Bihar?",
    a: "Under the PM Surya Ghar Muft Bijli Yojana, residential on-grid and hybrid solar systems are eligible for subsidy. For 1-2 kW systems, the subsidy is ₹30,000 per kW (up to ₹60,000). For 3 kW and above, the total subsidy is ₹78,000. Off-grid systems are not eligible for this subsidy.",
  },
  {
    q: "How long does it take to recover the solar investment?",
    a: "On-grid systems typically pay back in 3-4 years, hybrid systems in 4-5 years, and off-grid systems in 5-6 years. After the payback period, all electricity generated is essentially free for the remaining 20+ years of the system's lifespan.",
  },
  {
    q: "Does the calculator account for electricity rate increases?",
    a: "The 25-year savings estimate uses current electricity rates. In reality, electricity rates increase 3-5% annually in India, so your actual savings over 25 years will be significantly higher than the estimate shown.",
  },
  {
    q: "Can I use this calculator for commercial or industrial solar?",
    a: "This calculator is designed for residential solar systems up to 10 kW. For commercial and industrial projects (10 kW+), please contact our engineering team for a custom feasibility study and detailed project report.",
  },
];

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------
const styles = `
  .calc-page { color: #0f172a; }

  .calc-hero {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    padding: 140px 0 70px;
    text-align: center;
    color: #fff;
  }
  .calc-hero h1 {
    font-size: 2.8rem; font-weight: 900; margin-bottom: 16px; line-height: 1.2;
  }
  .calc-hero p {
    font-size: 1.1rem; color: rgba(255,255,255,.75);
    max-width: 650px; margin: 0 auto; line-height: 1.7;
  }

  .calc-section { padding: 80px 0; }

  .calc-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 40px;
    align-items: start;
  }

  .calc-form-card {
    background: #fff; border-radius: 20px; padding: 36px;
    box-shadow: 0 4px 30px rgba(0,0,0,.08);
    border: 1px solid rgba(0,0,0,.05);
    position: sticky; top: 100px;
  }
  .calc-form-card h3 {
    font-size: 1.4rem; font-weight: 700; margin-bottom: 28px;
  }

  .form-group { margin-bottom: 24px; }
  .form-group label {
    display: block; font-weight: 600; margin-bottom: 8px;
    font-size: .92rem; color: #334155;
  }
  .form-group .sublabel {
    font-weight: 400; color: #94a3b8; font-size: .82rem;
  }
  .form-input {
    width: 100%; padding: 14px 18px; border-radius: 12px;
    border: 2px solid #e2e8f0; font-size: 1rem;
    font-family: 'Poppins', sans-serif; outline: none;
    transition: border-color .3s;
  }
  .form-input:focus { border-color: #f59e0b; }
  .form-select {
    width: 100%; padding: 14px 18px; border-radius: 12px;
    border: 2px solid #e2e8f0; font-size: 1rem;
    font-family: 'Poppins', sans-serif; outline: none;
    background: #fff; cursor: pointer;
    transition: border-color .3s;
  }
  .form-select:focus { border-color: #f59e0b; }

  .slider-value {
    display: flex; justify-content: space-between; align-items: center;
    margin-bottom: 8px;
  }
  .slider-value .current {
    font-size: 1.4rem; font-weight: 800;
    background: linear-gradient(135deg, #f59e0b, #f97316);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .form-range {
    width: 100%; height: 8px; -webkit-appearance: none;
    background: #e2e8f0; border-radius: 4px; outline: none;
  }
  .form-range::-webkit-slider-thumb {
    -webkit-appearance: none; width: 24px; height: 24px;
    border-radius: 50%; background: linear-gradient(135deg, #f59e0b, #f97316);
    cursor: pointer; box-shadow: 0 2px 8px rgba(245,158,11,.4);
  }
  .form-range::-moz-range-thumb {
    width: 24px; height: 24px; border-radius: 50%; border: none;
    background: linear-gradient(135deg, #f59e0b, #f97316);
    cursor: pointer;
  }

  .radio-group { display: flex; gap: 12px; flex-wrap: wrap; }
  .radio-option {
    flex: 1; min-width: 100px;
  }
  .radio-option input { display: none; }
  .radio-option label {
    display: block; text-align: center; padding: 12px 8px;
    border-radius: 12px; border: 2px solid #e2e8f0;
    cursor: pointer; font-weight: 600; font-size: .9rem;
    transition: all .3s;
  }
  .radio-option input:checked + label {
    border-color: #f59e0b;
    background: linear-gradient(135deg, rgba(245,158,11,.1), rgba(249,115,22,.05));
    color: #d97706;
  }

  .results-card {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    border-radius: 20px; padding: 36px; color: #fff;
  }
  .results-card h3 {
    font-size: 1.4rem; font-weight: 700; margin-bottom: 8px;
  }
  .results-subtitle {
    color: rgba(255,255,255,.6); font-size: .9rem; margin-bottom: 28px;
  }
  .result-items { display: flex; flex-direction: column; gap: 16px; }
  .result-item {
    background: rgba(255,255,255,.06);
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 14px; padding: 20px;
    display: flex; align-items: center; gap: 16px;
    transition: transform .2s;
  }
  .result-item:hover { transform: translateX(4px); }
  .result-icon {
    width: 48px; height: 48px; border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.3rem; flex-shrink: 0;
  }
  .result-icon.green { background: rgba(34,197,94,.15); color: #22c55e; }
  .result-icon.amber { background: rgba(245,158,11,.15); color: #f59e0b; }
  .result-icon.blue { background: rgba(14,165,233,.15); color: #0ea5e9; }
  .result-icon.purple { background: rgba(139,92,246,.15); color: #8b5cf6; }
  .result-info { flex: 1; }
  .result-info .label { color: rgba(255,255,255,.6); font-size: .82rem; margin-bottom: 4px; }
  .result-info .value {
    font-size: 1.4rem; font-weight: 800;
    background: linear-gradient(135deg, #f59e0b, #f97316);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .result-info .value.green-val {
    background: linear-gradient(135deg, #22c55e, #16a34a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .result-highlight {
    background: linear-gradient(135deg, rgba(245,158,11,.15), rgba(249,115,22,.1));
    border: 2px solid rgba(245,158,11,.3);
    border-radius: 14px; padding: 24px; margin-top: 24px;
    text-align: center;
  }
  .result-highlight .big-value {
    font-size: 2.2rem; font-weight: 900;
    background: linear-gradient(135deg, #f59e0b, #f97316);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  }
  .result-highlight .big-label {
    color: rgba(255,255,255,.7); font-size: .9rem; margin-top: 4px;
  }

  .results-cta {
    margin-top: 24px;
    text-align: center;
  }

  .calc-faq-section {
    padding: 80px 0;
    background: #f8fafc;
  }
  .calc-faq-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 20px;
  }
  .calc-faq-card {
    background: #fff; border-radius: 14px; padding: 28px;
    box-shadow: 0 2px 12px rgba(0,0,0,.05);
    border: 1px solid rgba(0,0,0,.04);
  }
  .calc-faq-card h4 { font-size: 1rem; margin-bottom: 10px; color: #0f172a; }
  .calc-faq-card p { color: #64748b; font-size: .9rem; line-height: 1.7; }

  .calc-cta-section {
    padding: 80px 0;
    background: linear-gradient(135deg, #0f172a, #1e293b);
    text-align: center; color: #fff;
  }
  .calc-cta-section h2 { font-size: 2.2rem; font-weight: 800; margin-bottom: 16px; }
  .calc-cta-section p {
    color: rgba(255,255,255,.7); font-size: 1.05rem;
    margin-bottom: 32px; max-width: 600px; margin-left: auto; margin-right: auto;
  }

  @media (max-width: 768px) {
    .calc-hero h1 { font-size: 1.8rem; }
    .calc-hero { padding: 120px 0 50px; }
    .calc-grid { grid-template-columns: 1fr; }
    .calc-form-card { position: static; }
    .result-info .value { font-size: 1.15rem; }
    .result-highlight .big-value { font-size: 1.6rem; }
    .calc-faq-grid { grid-template-columns: 1fr; }
    .calc-cta-section h2 { font-size: 1.6rem; }
  }
`;

// ---------------------------------------------------------------------------
// Formatter helpers
// ---------------------------------------------------------------------------
function formatINR(num) {
  if (num >= 10000000) return `₹${(num / 10000000).toFixed(2)} Cr`;
  if (num >= 100000) return `₹${(num / 100000).toFixed(2)} Lakh`;
  return `₹${num.toLocaleString("en-IN")}`;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function SolarCalculator() {
  const [bill, setBill] = useState(3000);
  const [roofArea, setRoofArea] = useState(300);
  const [city, setCity] = useState("Hajipur");
  const [systemType, setSystemType] = useState("ongrid");

  const canonicalUrl = `${businessInfo.url}/solar-calculator`;

  const calculations = useMemo(() => {
    // System size based on bill
    const sizeFromBill = Math.max(1, Math.round((bill / 1200) * 10) / 10);
    // System size based on roof area
    const sizeFromRoof = Math.max(1, Math.floor((roofArea / PANEL_AREA_PER_KW) * 10) / 10);
    // Recommended size is the minimum of both, capped to practical range
    const recommendedSize = Math.min(sizeFromBill, sizeFromRoof, 10);
    const roundedSize = Math.round(recommendedSize * 2) / 2; // Round to nearest 0.5

    // Cost
    const selectedSystem = systemTypes.find((s) => s.value === systemType);
    const costPerKW = selectedSystem ? selectedSystem.costPerKW : COST_PER_KW_ONGRID;
    const grossCost = Math.round(roundedSize * costPerKW);

    // Subsidy (only for on-grid and hybrid)
    let subsidy = 0;
    if (systemType !== "offgrid") {
      if (roundedSize <= 2) {
        subsidy = Math.round(roundedSize * 30000);
      } else if (roundedSize <= 3) {
        subsidy = 78000;
      } else {
        subsidy = 78000;
      }
    }
    const netCost = grossCost - subsidy;

    // Savings
    const monthlyGeneration = Math.round(roundedSize * GENERATION_PER_KW_MONTH); // kWh
    const monthlySavings = Math.round(monthlyGeneration * AVG_RATE_PER_UNIT);
    const annualSavings = monthlySavings * 12;
    const savings25Year = annualSavings * 25;

    // Payback
    const paybackYears = annualSavings > 0 ? Math.round((netCost / annualSavings) * 10) / 10 : 0;

    // CO2 offset
    const co2OffsetYear = Math.round((roundedSize * CO2_PER_KW_YEAR) / 1000 * 10) / 10; // tons

    return {
      recommendedSize: roundedSize,
      grossCost,
      subsidy,
      netCost,
      monthlyGeneration,
      monthlySavings,
      annualSavings,
      savings25Year,
      paybackYears,
      co2OffsetYear,
    };
  }, [bill, roofArea, city, systemType]);

  const openPopup = () => window.dispatchEvent(new Event("openPopup"));

  // WebApplication schema for rich results
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "EKOSYS Solar Calculator",
    url: canonicalUrl,
    description:
      "Free solar calculator for Bihar homes. Calculate your solar system size, monthly savings, government subsidy, and ROI payback period instantly.",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    provider: {
      "@type": "Organization",
      name: businessInfo.name,
      url: businessInfo.url,
    },
  };

  return (
    <div className="calc-page">
      <Helmet>
        <title>Solar Calculator Bihar | Calculate Solar Savings & ROI | EKOSYS</title>
        <meta
          name="description"
          content="Free solar ROI calculator for Bihar. Calculate recommended solar system size, monthly savings, government subsidy (up to ₹78,000), payback period, and 25-year savings. Get instant results from EKOSYS."
        />
        <meta
          name="keywords"
          content="solar calculator Bihar, solar ROI calculator, solar savings calculator India, solar system size calculator, solar subsidy calculator, solar payback period, EKOSYS solar calculator, solar panel calculator Bihar"
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Solar Calculator Bihar | Calculate Solar Savings & ROI | EKOSYS" />
        <meta property="og:description" content="Free solar calculator. Calculate system size, savings, subsidy & payback period for your home in Bihar." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${businessInfo.url}/images/hero-banner.webp`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(webAppSchema)}</script>
        <style>{styles}</style>
      </Helmet>

      <BreadcrumbSchema
        items={[
          { name: "Home", url: businessInfo.url },
          { name: "Solar Calculator", url: canonicalUrl },
        ]}
      />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="calc-hero">
        <div className="container">
          <h1>
            Solar <span className="highlight">Calculator</span> Bihar
          </h1>
          <p>
            Calculate your recommended solar system size, monthly savings, government subsidy amount,
            and payback period — instantly. Free, no registration required.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="calc-section">
        <div className="container">
          <div className="calc-grid">
            {/* Form */}
            <div className="calc-form-card">
              <h3>
                Enter Your <span className="highlight">Details</span>
              </h3>

              {/* Monthly Bill */}
              <div className="form-group">
                <label>
                  Monthly Electricity Bill{" "}
                  <span className="sublabel">(₹ per month)</span>
                </label>
                <div className="slider-value">
                  <span className="current">₹{bill.toLocaleString("en-IN")}</span>
                  <span style={{ color: "#94a3b8", fontSize: ".82rem" }}>₹500 – ₹50,000</span>
                </div>
                <input
                  type="range"
                  className="form-range"
                  min={500}
                  max={50000}
                  step={100}
                  value={bill}
                  onChange={(e) => setBill(Number(e.target.value))}
                />
              </div>

              {/* Roof Area */}
              <div className="form-group">
                <label>
                  Roof Area Available{" "}
                  <span className="sublabel">(sq ft)</span>
                </label>
                <div className="slider-value">
                  <span className="current">{roofArea} sq ft</span>
                  <span style={{ color: "#94a3b8", fontSize: ".82rem" }}>100 – 5,000 sq ft</span>
                </div>
                <input
                  type="range"
                  className="form-range"
                  min={100}
                  max={5000}
                  step={50}
                  value={roofArea}
                  onChange={(e) => setRoofArea(Number(e.target.value))}
                />
              </div>

              {/* City */}
              <div className="form-group">
                <label>Your City</label>
                <select
                  className="form-select"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  {biharCities.map((c) => (
                    <option key={c} value={c}>
                      {c}, Bihar
                    </option>
                  ))}
                </select>
              </div>

              {/* System Type */}
              <div className="form-group">
                <label>System Type</label>
                <div className="radio-group">
                  {systemTypes.map((st) => (
                    <div className="radio-option" key={st.value}>
                      <input
                        type="radio"
                        id={`st-${st.value}`}
                        name="systemType"
                        value={st.value}
                        checked={systemType === st.value}
                        onChange={(e) => setSystemType(e.target.value)}
                      />
                      <label htmlFor={`st-${st.value}`}>{st.label}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="results-card">
              <h3>
                Your Solar <span className="highlight">Estimate</span>
              </h3>
              <p className="results-subtitle">
                Results for {city}, Bihar — {systemTypes.find((s) => s.value === systemType)?.label} System
              </p>

              <div className="result-items">
                <div className="result-item">
                  <div className="result-icon amber">
                    <FiSun />
                  </div>
                  <div className="result-info">
                    <div className="label">Recommended System Size</div>
                    <div className="value">{calculations.recommendedSize} kW</div>
                  </div>
                </div>

                <div className="result-item">
                  <div className="result-icon green">
                    <FiDollarSign />
                  </div>
                  <div className="result-info">
                    <div className="label">Monthly Savings Estimate</div>
                    <div className="value green-val">{formatINR(calculations.monthlySavings)}/month</div>
                  </div>
                </div>

                <div className="result-item">
                  <div className="result-icon green">
                    <FiDollarSign />
                  </div>
                  <div className="result-info">
                    <div className="label">Annual Savings</div>
                    <div className="value green-val">{formatINR(calculations.annualSavings)}/year</div>
                  </div>
                </div>

                <div className="result-item">
                  <div className="result-icon blue">
                    <FiDollarSign />
                  </div>
                  <div className="result-info">
                    <div className="label">Government Subsidy</div>
                    <div className="value">
                      {calculations.subsidy > 0 ? formatINR(calculations.subsidy) : "Not Eligible"}
                    </div>
                  </div>
                </div>

                <div className="result-item">
                  <div className="result-icon amber">
                    <FiDollarSign />
                  </div>
                  <div className="result-info">
                    <div className="label">System Cost (after subsidy)</div>
                    <div className="value">{formatINR(calculations.netCost)}</div>
                  </div>
                </div>

                <div className="result-item">
                  <div className="result-icon purple">
                    <FiCalendar />
                  </div>
                  <div className="result-info">
                    <div className="label">Payback Period</div>
                    <div className="value">{calculations.paybackYears} years</div>
                  </div>
                </div>

                <div className="result-item">
                  <div className="result-icon green">
                    <FiDroplet />
                  </div>
                  <div className="result-info">
                    <div className="label">CO₂ Offset per Year</div>
                    <div className="value green-val">{calculations.co2OffsetYear} tons</div>
                  </div>
                </div>
              </div>

              {/* 25-Year Savings Highlight */}
              <div className="result-highlight">
                <div className="big-value">{formatINR(calculations.savings25Year)}</div>
                <div className="big-label">Estimated 25-Year Total Savings</div>
              </div>

              {/* CTA */}
              <div className="results-cta">
                <button
                  className="btn btn-primary"
                  onClick={openPopup}
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Get Exact Quote from Our Engineers <FiArrowRight />
                </button>
                <a
                  href={`https://wa.me/918757686826?text=Hi%20EKOSYS%2C%20I%20want%20a%20${calculations.recommendedSize}kW%20${systemType}%20solar%20system%20quote%20for%20${city}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    marginTop: 12,
                    borderColor: "#22c55e",
                    color: "#22c55e",
                  }}
                >
                  WhatsApp for Instant Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="calc-faq-section">
        <div className="container">
          <h2 className="section-title">
            Calculator <span className="highlight">FAQs</span>
          </h2>
          <p className="section-subtitle">
            Understanding your solar calculator results
          </p>

          <div className="calc-faq-grid">
            {faqs.map((faq, i) => (
              <div className="calc-faq-card" key={i}>
                <h4>{faq.q}</h4>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="calc-cta-section">
        <div className="container">
          <h2>
            Ready to Go <span className="highlight">Solar?</span>
          </h2>
          <p>
            Our engineers will visit your site, assess your roof, and provide an exact
            customized quote with complete subsidy assistance — absolutely free.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn btn-primary" onClick={openPopup}>
              Book Free Site Survey <FiArrowRight />
            </button>
            <Link
              to="/solar-system-comparison"
              className="btn btn-outline"
              style={{ borderColor: "#f59e0b", color: "#f59e0b" }}
            >
              Compare Solar Systems
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
