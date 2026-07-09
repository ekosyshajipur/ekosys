import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BreadcrumbSchema } from '../components/SchemaMarkup';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiArrowRight, FiInfo } from 'react-icons/fi';
import './Subsidy.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Subsidy() {
  const openPopup = () => window.dispatchEvent(new Event("openPopup"));

  return (
    <>
      <Helmet>
        <title>Solar Subsidy Bihar 2026 | PM Surya Ghar Yojana | Up to ₹78,000 | EKOSYS</title>
        <meta name="description" content="Get up to ₹78,000 solar subsidy in Bihar under PM Surya Ghar Muft Bijli Yojana. EKOSYS handles complete application, approval & disbursement process. Call +91-8757686826." />
        <meta name="keywords" content="solar subsidy Bihar, PM Surya Ghar Yojana, solar panel subsidy, government subsidy solar, free solar scheme Bihar, EKOSYS subsidy assistance, rooftop solar subsidy" />
        <link rel="canonical" href="https://ekosys.in/subsidy" />
        <meta property="og:title" content="Solar Subsidy Bihar 2026 | PM Surya Ghar Yojana | EKOSYS" />
        <meta property="og:description" content="Get up to ₹78,000 solar subsidy in Bihar under PM Surya Ghar Muft Bijli Yojana. EKOSYS handles complete application, approval & disbursement process." />
        <meta property="og:url" content="https://ekosys.in/subsidy" />
        <meta property="og:image" content="https://ekosys.in/images/subsidy.webp" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Solar Subsidy Bihar 2026 | PM Surya Ghar Yojana" />
        <meta name="twitter:description" content="Get up to ₹78,000 solar subsidy in Bihar under PM Surya Ghar Muft Bijli Yojana." />
        <meta name="twitter:image" content="https://ekosys.in/images/subsidy.webp" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GovernmentService",
          "name": "PM Surya Ghar Muft Bijli Yojana Subsidy Assistance",
          "description": "Assistance with application, approval, and disbursement of government solar subsidy in Bihar.",
          "provider": {
            "@type": "Organization",
            "name": "EKOSYS",
            "url": "https://ekosys.in"
          },
          "areaServed": {
            "@type": "State",
            "name": "Bihar"
          }
        })}</script>
      </Helmet>
      
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://ekosys.in/' },
        { name: 'Government Subsidy', url: 'https://ekosys.in/subsidy' }
      ]} />

      {/* ── Premium Hero ── */}
      <section className="subsidy-hero">
        <motion.div 
          className="subsidy-hero-inner"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="subsidy-badge">🇮🇳 PM Surya Ghar Muft Bijli Yojana</div>
          <h1>Unlock Up To <span className="highlight">₹78,000</span> Solar Subsidy</h1>
          <p>
            Transform your roof into a power plant. The Government of India is offering massive subsidies transferred directly to your bank account via DBT. EKOSYS handles 100% of the paperwork.
          </p>
        </motion.div>
      </section>

      {/* ── Explanation Section ── */}
      <section className="subsidy-info-section">
        <div className="container">
          <div className="subsidy-info-grid">
            <motion.div 
              className="subsidy-image-wrapper"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img src="/images/subsidy.webp" alt="PM Surya Ghar Subsidy Registration" loading="lazy" />
            </motion.div>
            
            <motion.div 
              className="subsidy-info-content"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2>What is <span className="highlight">PM Surya Ghar Yojana?</span></h2>
              <p>
                Launched by the central government, the PM Surya Ghar Muft Bijli Yojana aims to illuminate 1 crore households across India with clean, free electricity. By installing a grid-connected rooftop solar system, you not only eliminate your electricity bill but also receive a substantial upfront subsidy.
              </p>
              <div className="quote-box">
                <p>
                  "पीएम सूर्य घर योजना - हर महीने 300 यूनिट तक मुफ़्त बिजली और ₹78,000 तक की डायरेक्ट बैंक ट्रांसफर (DBT) सब्सिडी!"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Tier Cards Section ── */}
      <section className="subsidy-tiers-section">
        <div className="container">
          <motion.div 
            style={{ textAlign: "center" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="section-title">Subsidy <span className="highlight">Structure</span> (2024-2026)</h2>
            <p style={{ color: "#64748b", fontSize: "1.15rem", maxWidth: 600, margin: "10px auto 0" }}>
              Subsidy amounts are calculated based on the kW capacity of the solar panels installed on your rooftop.
            </p>
          </motion.div>

          <motion.div 
            className="tiers-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {/* Tier 1 */}
            <motion.div className="tier-card" variants={fadeUp}>
              <div className="tier-capacity">Up to 2 kW System</div>
              <div className="tier-subsidy">₹60,000 <span>Max Subsidy (₹30,000 per kW)</span></div>
              <ul className="tier-features">
                <li><FiCheckCircle /> Ideal for small homes (1-2 BHK)</li>
                <li><FiCheckCircle /> Offsets bill up to ₹1,500/month</li>
                <li><FiCheckCircle /> Requires ~200 sq.ft roof space</li>
              </ul>
            </motion.div>

            {/* Tier 2 (Popular) */}
            <motion.div className="tier-card popular" variants={fadeUp}>
              <div className="popular-badge">Most Popular</div>
              <div className="tier-capacity">Exactly 3 kW System</div>
              <div className="tier-subsidy">₹78,000 <span>Maximum Scheme Subsidy</span></div>
              <ul className="tier-features">
                <li><FiCheckCircle /> Ideal for medium homes (3-4 BHK)</li>
                <li><FiCheckCircle /> Powers 1-2 ACs easily during day</li>
                <li><FiCheckCircle /> Offsets bill up to ₹3,000/month</li>
                <li><FiCheckCircle /> Requires ~300 sq.ft roof space</li>
              </ul>
            </motion.div>

            {/* Tier 3 */}
            <motion.div className="tier-card" variants={fadeUp}>
              <div className="tier-capacity">Above 3 kW System</div>
              <div className="tier-subsidy">₹78,000 <span>Capped Maximum Subsidy</span></div>
              <ul className="tier-features">
                <li><FiCheckCircle /> Ideal for large homes / villas</li>
                <li><FiCheckCircle /> Heavy load handling (3+ ACs)</li>
                <li><FiCheckCircle /> Maximum ROI via Net Metering</li>
                <li><FiCheckCircle /> Requires 400+ sq.ft roof space</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* ── CTA Action ── */}
          <motion.div 
            className="subsidy-cta"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Ready to Claim Your Subsidy?</h3>
            <p>Don't wait! Use our interactive calculator to estimate your exact system size and subsidy amount, or speak directly with our experts to start your hassle-free application.</p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/solar-calculator" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FiInfo /> Calculate Subsidy
              </Link>
              <button className="btn btn-primary" onClick={openPopup} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                Check Eligibility <FiArrowRight />
              </button>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
