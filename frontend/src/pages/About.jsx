import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { BreadcrumbSchema } from '../components/SchemaMarkup';
import { motion } from 'framer-motion';
import { FiTarget, FiZap, FiShield, FiCpu, FiTool, FiClock } from 'react-icons/fi';
import './About.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function About() {
  return (
    <>
      <Helmet>
        <title>About EKOSYS | Solar EPC & Facade Engineering Company Bihar</title>
        <meta name="description" content="EKOSYS is Bihar's trusted engineering company with 15+ years in Solar EPC and Architectural Facade Engineering. 1000+ projects, 100% customer satisfaction. Hajipur, Bihar." />
        <meta name="keywords" content="about EKOSYS, solar company Bihar, facade engineering Bihar, EKOSYS Hajipur, solar EPC company, architectural facade company India" />
        <link rel="canonical" href="https://ekosys.in/about" />
        <meta property="og:title" content="About EKOSYS | Solar EPC & Facade Engineering Company" />
        <meta property="og:description" content="Bihar's trusted engineering company — Solar EPC and Architectural Facade solutions. 15+ years, 1000+ projects." />
        <meta property="og:url" content="https://ekosys.in/about" />
        <meta property="og:image" content="https://ekosys.in/images/about.webp" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About EKOSYS | Solar EPC & Facade Engineering" />
        <meta name="twitter:description" content="Bihar's trusted engineering company — Solar EPC and Architectural Facade solutions." />
        <meta name="twitter:image" content="https://ekosys.in/images/about.webp" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About EKOSYS",
          "description": "EKOSYS is Bihar's trusted engineering company with expertise in Solar EPC and Architectural Facade Engineering.",
          "url": "https://ekosys.in/about",
          "mainEntity": {
            "@type": "Organization",
            "name": "EKOSYS",
            "url": "https://ekosys.in"
          }
        })}</script>
      </Helmet>
      
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://ekosys.in/' },
        { name: 'About Us', url: 'https://ekosys.in/about' }
      ]} />

      {/* ── Premium Hero ── */}
      <section className="about-hero-v3">
        <motion.div 
          className="about-hero-v3-inner"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="about-badge">✨ Engineering Excellence Since 2010</div>
          <h1>About <span className="highlight">EKOSYS</span></h1>
          <p>
            Powering a Greener Tomorrow – Your trusted Solar EPC & Architectural Facade Partner in Bihar. We deliver state-of-the-art engineering solutions tailored for scale, efficiency, and sustainability.
          </p>
        </motion.div>
      </section>

      {/* ── Bento Box Grid (Vision & Mission) ── */}
      <section className="bento-section">
        <div className="container">
          <motion.div 
            style={{ textAlign: "center", marginBottom: 60 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
          >
            <h2 className="section-title">Our <span className="highlight">Vision & Mission</span></h2>
            <p style={{ color: "#64748b", fontSize: "1.2rem", maxWidth: 600, margin: "0 auto" }}>
              Driving the transition to sustainable energy and modern architectural excellence across India.
            </p>
          </motion.div>

          <div className="bento-grid">
            <motion.div 
              className="bento-item bento-main-image"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img src="/images/about.webp" alt="EKOSYS Solar Plant" loading="lazy" />
            </motion.div>

            <motion.div 
              className="bento-item bento-text-box"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3>End-to-End Excellence</h3>
              <p>
                At EKOSYS, we deliver comprehensive solar EPC solutions tailored for industrial, commercial, and residential needs. From precision engineering and design to flawless commissioning, our expert team ensures reliable, high-performance systems with full compliance.
              </p>
              <p>
                Beyond solar, we excel in architectural facade engineering and advanced power control units, including Online UPS and Servo Stabilizers, ensuring holistic infrastructure development.
              </p>
            </motion.div>

            <motion.div 
              className="bento-item bento-highlight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bento-icon"><FiTarget /></div>
              <h4>Integrity & Quality</h4>
              <p>Uncompromising standards in every project.</p>
            </motion.div>

            <motion.div 
              className="bento-item bento-highlight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bento-icon"><FiZap /></div>
              <h4>Innovation Driven</h4>
              <p>State-of-the-art tech for maximum efficiency.</p>
            </motion.div>

            <motion.div 
              className="bento-item bento-highlight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bento-icon"><FiShield /></div>
              <h4>Customer Focused</h4>
              <p>100% satisfaction and lifetime support.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Why Partner Grid ── */}
      <section className="partner-section">
        <div className="container">
          <motion.div 
            style={{ textAlign: "center" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="about-badge" style={{ background: "#f1f5f9", color: "#334155", borderColor: "#cbd5e1" }}>Government Supported</div>
            <h2 className="section-title">Why <span className="highlight">Partner</span> With Us?</h2>
            <p style={{ fontSize: "1.2rem", color: "#64748b", fontStyle: "italic", maxWidth: 700, margin: "20px auto 0" }}>
              "सोलर रूफटॉप लगाओ, बिजली का बिल बचाओ और पर्यावरण को स्वच्छ बनाओ।" - भारत सरकार
            </p>
          </motion.div>

          <div className="partner-grid">
            {[
              { icon: <FiTarget />, title: "Trusted in Bihar", desc: "Based in Hajipur, Vaishali, we serve across Bihar with a strong reputation for reliability and localized expertise." },
              { icon: <FiZap />, title: "Industrial EPC", desc: "Specialized in handling large-scale commercial and industrial solar power plants with complex load requirements." },
              { icon: <FiShield />, title: "Complete Compliance", desc: "We handle all necessary approvals, CEIG inspections, net metering, and subsidy documentation (PM Surya Ghar)." },
              { icon: <FiCpu />, title: "Beyond Solar", desc: "We provide power stability solutions including Online UPS, heavy-duty Servo Stabilizers, and modern Facade designs." },
              { icon: <FiTool />, title: "Expert Maintenance", desc: "Comprehensive AMC (Annual Maintenance Contract) and post-installation support ensuring peak efficiency." },
              { icon: <FiClock />, title: "On-Time Execution", desc: "We value your time and guarantee project completion within the stipulated deadlines without cost overruns." },
            ].map((c, i) => (
              <motion.div 
                className="partner-card" 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="icon-wrapper">
                  {c.icon}
                </div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Premium CTA ── */}
      <section className="premium-cta">
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: 20 }}>
              Let's Build a Greener Future
            </h2>
            <p style={{ color: "#cbd5e1", fontSize: "1.2rem", maxWidth: 600, margin: "0 auto 40px", lineHeight: 1.6 }}>
              Join hands with EKOSYS to transition your facility to clean, renewable, and cost-effective solar power.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ padding: "16px 40px", fontSize: "1.1rem" }}>
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
