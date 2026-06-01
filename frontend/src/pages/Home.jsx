import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FAQSchema, ReviewSchema, BreadcrumbSchema } from "../components/SchemaMarkup";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiArrowRight, FiSun, FiZap, FiShield, FiTool, FiCheckCircle, FiStar, FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Home.css";

/* ── Animated Section Wrapper ── */
function AnimSection({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

/* ── Counter ── */
function Counter({ end, suffix = "", prefix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let s = 0;
        const step = Math.ceil(end / 60);
        const t = setInterval(() => {
          s += step;
          if (s >= end) { setCount(end); clearInterval(t); } else setCount(s);
        }, 20);
      }
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);
  return <span ref={ref}>{prefix}{count.toLocaleString("en-IN")}{suffix}</span>;
}

/* ── Data ── */
const services = [
  { img: "/images/services/residential.png", icon: <FiSun />, title: "Residential Solar", desc: "Complete rooftop solar solutions for homes with PM Surya Ghar Yojana subsidy assistance.", link: "/residential-solar-bihar", color: "#f59e0b" },
  { img: "/images/services/commercial.png", icon: <FiZap />, title: "Commercial Solar", desc: "Large-scale solar EPC for offices, factories, and commercial establishments across Bihar.", link: "/industrial-solar-bihar", color: "#0ea5e9" },
  { img: "/images/services/industrial.png", icon: <FiShield />, title: "Industrial Solar", desc: "High-capacity solar plants for manufacturing, warehouses and industrial complexes.", link: "/industrial-solar-bihar", color: "#22c55e" },
  { img: "/images/services/maintenance.png", icon: <FiTool />, title: "Solar Maintenance", desc: "Annual maintenance contracts, cleaning, and performance monitoring of solar systems.", link: "/solar-maintenance", color: "#8b5cf6" },
  { img: "/images/services/subsidy.png", icon: <FiCheckCircle />, title: "Solar Subsidy", desc: "End-to-end assistance in applying for government solar subsidies and net metering.", link: "/subsidy", color: "#ef4444" },
  { img: "/images/services/products.png", icon: <FiStar />, title: "Solar Products", desc: "Premium solar panels, inverters, batteries, street lights, water heaters & more.", link: "/products", color: "#f97316" },
];

const processSteps = [
  { num: "01", title: "Free Consultation", desc: "Our solar experts analyze your energy needs and site feasibility at no cost." },
  { num: "02", title: "Site Survey", desc: "Detailed roof measurement, shadow analysis, and load assessment." },
  { num: "03", title: "Custom Design", desc: "Tailored solar system design maximizing your energy generation and ROI." },
  { num: "04", title: "Government Approval", desc: "We handle all paperwork for DISCOM approval and subsidy registration." },
  { num: "05", title: "Installation", desc: "Professional installation by certified engineers within 3-5 days." },
  { num: "06", title: "Net Metering", desc: "Complete net meter installation and grid connection setup." },
];

const testimonials = [
  { name: "Rajesh Kumar", loc: "Hajipur, Bihar", text: "EKOSYS installed a 5kW system on my rooftop. My electricity bill dropped from ₹4,500 to ₹200! The team was very professional and completed installation in just 2 days.", rating: 5 },
  { name: "Priya Singh", loc: "Patna, Bihar", text: "I was confused about solar subsidy, but EKOSYS guided me through the entire PM Surya Ghar process. Got ₹78,000 subsidy credited to my account within 3 months!", rating: 5 },
  { name: "Ashutosh Mishra", loc: "Muzaffarpur, Bihar", text: "Best solar company in Bihar! Their 3kW system is working perfectly. Very responsive customer support and excellent after-sales service.", rating: 5 },
  { name: "Sunita Devi", loc: "Vaishali, Bihar", text: "EKOSYS solar panels are of premium quality. Our 4kW system generates more power than expected. Very happy with the investment and team support.", rating: 5 },
  { name: "Manish Gupta", loc: "Bhagalpur, Bihar", text: "Got an industrial solar setup for my factory through EKOSYS. The 25kW system has reduced our electricity costs by 80%. Excellent ROI!", rating: 5 },
  { name: "Anita Sharma", loc: "Gaya, Bihar", text: "Highly recommend EKOSYS! They handled everything from subsidy paperwork to installation. The system is running flawlessly for 2 years now.", rating: 5 },
  { name: "Vikram Yadav", loc: "Darbhanga, Bihar", text: "Professional team, quality panels, and transparent pricing. EKOSYS is the real deal for solar in Bihar. My 3kW system paid for itself in 3 years.", rating: 5 },
  { name: "Neha Kumari", loc: "Samastipur, Bihar", text: "The EKOSYS team installed a hybrid system at our home. Even during power cuts, we have uninterrupted supply. Best decision we ever made!", rating: 5 },
  { name: "Dinesh Prasad", loc: "Chhapra, Bihar", text: "EKOSYS provided us with a 10kW commercial system for our showroom. Installation was fast and clean. Very satisfied with the performance.", rating: 4 },
  { name: "Kavita Jha", loc: "Motihari, Bihar", text: "Excellent service from start to finish. The team explained everything clearly about subsidy and savings. My monthly bill is now almost zero!", rating: 5 },
  { name: "Rahul Verma", loc: "Ara, Bihar", text: "I compared 5 solar companies before choosing EKOSYS. They offered the best quality panels at competitive prices with complete transparency.", rating: 5 },
  { name: "Meena Devi", loc: "Sitamarhi, Bihar", text: "Very impressed with EKOSYS's work. They installed a 2kW system for my small house and helped me get the government subsidy too.", rating: 5 },
];

const partners = [
  "Tata Power Solar", "Adani Solar", "Luminous", "Havells",
  "Vikram Solar", "Waaree", "Loom Solar", "Microtek",
  "Polycab", "Growatt", "Jinko Solar", "Canadian Solar",
];

const faqs = [
  { q: "What is the cost of a solar system in Bihar?", a: "Residential systems cost ₹55,000 to ₹65,000 per kW before subsidy. With PM Surya Ghar Yojana, you can get ₹30,000-₹78,000 subsidy depending on system size." },
  { q: "How does PM Surya Ghar Yojana work?", a: "Under this scheme, households get up to ₹78,000 subsidy for on-grid rooftop solar, credited directly to their bank account after installation and inspection." },
  { q: "How long does solar installation take?", a: "Typically 2-5 days for residential systems and 7-15 days for commercial setups, including all approvals and net metering." },
  { q: "What is the lifespan of solar panels?", a: "Our Tier-1 Mono PERC panels come with a 25-year performance warranty and can last 30+ years with proper maintenance." },
  { q: "Do solar panels work during monsoon/cloudy days?", a: "Yes! Modern panels generate 25-40% of their peak output even on cloudy days. Bihar receives excellent sunlight for 300+ days a year." },
  { q: "What maintenance is required for solar panels?", a: "Minimal — occasional cleaning every 2-3 weeks and an annual inspection. EKOSYS offers AMC plans for hassle-free maintenance." },
];

const blogs = [
  { title: "बिहार में सोलर क्रांति की तैयारी", slug: "bihar-solar-revolution", tag: "News", img: "/images/blog/jeevika-solar-bihar.png", date: "June 1, 2026" },
  { title: "बिजली विभाग घर की छत पर फ्री में लगाएंगे सोलर पैनल", slug: "free-solar-panel-scheme", tag: "News", img: "/images/blog/free-solar-scheme.png", date: "May 31, 2026" },
  { title: "Benefits of Solar Energy in Bihar", slug: "benefits-of-solar-energy", tag: "Solar Guide", img: "/images/hero-banner.webp", date: "May 18, 2025" },
  { title: "Solar Subsidy Guide: PM Surya Ghar Yojana", slug: "solar-subsidy-in-bihar", tag: "Subsidy", img: "/images/subsidy.webp", date: "May 16, 2025" },
  { title: "How Solar Reduces Your Electricity Bill", slug: "how-solar-reduces-electricity-bill", tag: "Savings", img: "/images/ongrid.webp", date: "May 14, 2025" },
  { title: "Best Solar Company in Bihar 2026", slug: "best-solar-company-in-bihar", tag: "Reviews", img: "/images/about.webp", date: "May 12, 2025" },
  { title: "Rooftop Solar Installation Guide", slug: "rooftop-solar-guide", tag: "Installation", img: "/images/installation.webp", date: "May 10, 2025" },
];

const sortedBlogs = [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date));

/* ── Component ── */
export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const openPopup = () => window.dispatchEvent(new Event("openPopup"));

  return (
    <>
      <Helmet>
        <title>Best Solar Installation Company in Bihar | EKOSYS Solar</title>
        <meta name="description" content="EKOSYS is Bihar's #1 solar installation company offering rooftop solar panels, PM Surya Ghar Yojana subsidy assistance, solar EPC services for homes, businesses & industries. Get up to ₹78,000 government subsidy. Call +91-8757686826." />
        <meta name="keywords" content="solar installation Bihar, solar company Bihar, solar panel Bihar, EKOSYS solar, rooftop solar Hajipur, PM Surya Ghar Yojana Bihar, solar EPC Bihar, best solar company Bihar, solar subsidy Bihar, solar panel installation near me" />
        <link rel="canonical" href="https://ekosys.in/" />
        <meta property="og:title" content="Best Solar Installation Company in Bihar | EKOSYS Solar" />
        <meta property="og:description" content="EKOSYS is Bihar's #1 solar installation company. Rooftop solar panels, PM Surya Ghar Yojana subsidy, solar EPC for homes & industries. Call +91-8757686826." />
        <meta property="og:url" content="https://ekosys.in/" />
        <meta property="og:image" content="https://ekosys.in/images/hero-banner.webp" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Solar Installation Company in Bihar | EKOSYS Solar" />
        <meta name="twitter:description" content="EKOSYS is Bihar's #1 solar installation company. Rooftop solar, subsidy assistance & EPC services." />
        <meta name="twitter:image" content="https://ekosys.in/images/hero-banner.webp" />
        <meta name="geo.region" content="IN-BR" />
        <meta name="geo.placename" content="Hajipur, Bihar" />
      </Helmet>
      <FAQSchema faqs={faqs} />
      <ReviewSchema />
      <BreadcrumbSchema items={[{ name: 'Home', url: 'https://ekosys.in/' }]} />

      {/* ═══════ HERO ═══════ */}
      <section className="hero-v2">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video-bg"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-solar-panels-on-a-roof-40618-large.mp4" type="video/mp4" />
        </video>

        {/* Animated WebP Background Image */}
        <div className="hero-animated-bg-img" style={{ backgroundImage: "url('/images/hero-banner.webp')" }} />
        
        {/* Dark subtle overlay for text readability */}
        <div className="hero-bg-overlay-v3" />

        <div className="container hero-v2-inner">
          <motion.div className="hero-v2-content" initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="hero-badge-v2">☀️ Bihar's Most Trusted Solar Company</div>
            <h1>Powering Bihar With <span className="hero-highlight">Clean Solar Energy</span></h1>
            <p>End-to-end solar EPC solutions for homes, businesses & industries. Get up to ₹78,000 government subsidy under PM Surya Ghar Yojana.</p>
            <div className="hero-stats-row">
              <div className="hero-stat-item"><strong>1000+</strong><span>Projects</span></div>
              <div className="hero-stat-divider" />
              <div className="hero-stat-item"><strong>10+ MW</strong><span>Installed</span></div>
              <div className="hero-stat-divider" />
              <div className="hero-stat-item"><strong>15+ Yrs</strong><span>Experience</span></div>
            </div>
            <div className="hero-btns-v2">
              <button className="btn btn-primary" onClick={openPopup}>Get Free Quote <FiArrowRight /></button>
              <Link to="/products" className="btn btn-outline">Explore Products</Link>
            </div>
          </motion.div>
          <motion.div className="hero-v2-image" initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <img src="/images/hero-solar.png" alt="EKOSYS Solar Panel Installation" width="700" height="500" />
            <div className="hero-float-card hf1">
              <span className="hf-icon">⚡</span>
              <div><strong>90%</strong><small>Bill Reduction</small></div>
            </div>
            <div className="hero-float-card hf2">
              <span className="hf-icon">🌱</span>
              <div><strong>25 Yr</strong><small>Warranty</small></div>
            </div>
          </motion.div>
        </div>
        <div className="hero-scroll-indicator">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>↓</motion.div>
        </div>
      </section>

      {/* ═══════ TRUST BAR ═══════ */}
      <section className="trust-bar">
        <div className="container">
          <div className="trust-items">
            {["Google ★★★★★", "500+ Happy Families", "Govt. Approved", "MNRE Certified", "25-Year Warranty"].map((t, i) => (
              <AnimSection key={i} delay={i * 0.1}><div className="trust-item">{t}</div></AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ STATS ═══════ */}
      <section className="stats-v2">
        <div className="container">
          <div className="stats-grid-v2">
            {[
              { end: 1000, suffix: "+", label: "Projects Completed", icon: "🏠" },
              { end: 10, suffix: "+ MW", label: "Capacity Installed", icon: "⚡" },
              { end: 15, suffix: "+ Yrs", label: "Industry Experience", icon: "📅" },
              { end: 100, suffix: "%", label: "Customer Satisfaction", icon: "💯" },
            ].map((s, i) => (
              <AnimSection key={i} delay={i * 0.1}>
                <div className="stat-card-v2">
                  <div className="stat-icon-v2">{s.icon}</div>
                  <div className="stat-num-v2"><Counter end={s.end} suffix={s.suffix} /></div>
                  <div className="stat-label-v2">{s.label}</div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SERVICES ═══════ */}
      <section id="services" className="section services-section" style={{ background: "#fff" }}>
        <div className="container">
          <AnimSection>
            <h2 className="section-title">Our Solar <span className="highlight">Services</span></h2>
            <p className="section-subtitle">Comprehensive solar solutions designed to power every need — from small homes to large industries.</p>
          </AnimSection>
          <div className="services-grid-v2">
            {services.map((s, i) => (
              <AnimSection key={i} delay={i * 0.08}>
                <Link to={s.link} className="service-card-v2">
                  <div className="service-img-v2">
                    <img src={s.img} alt={s.title} loading="lazy" />
                  </div>
                  <div className="service-content-v2">
                    <div className="service-icon-v2" style={{ color: s.color, background: s.color + "15" }}>{s.icon}</div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <span className="service-link">Learn More <FiArrowRight /></span>
                  </div>
                </Link>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ WHY CHOOSE US ═══════ */}
      <section className="section" style={{ background: "#ffffff" }}>
        <div className="container">
          <AnimSection>
            <h2 className="section-title">Why Choose <span className="highlight">EKOSYS</span>?</h2>
            <p className="section-subtitle">Driven by innovation and backed by years of industry expertise across Bihar.</p>
          </AnimSection>
          <div className="why-grid-v2">
            {[
              { icon: "💡", title: "End-to-End EPC", desc: "Complete solar lifecycle — from design and engineering to procurement, construction, and commissioning." },
              { icon: "🏆", title: "Tier-1 Components", desc: "We use only MNRE-approved, top-tier Mono PERC Bifacial panels with 25-year performance warranty." },
              { icon: "🏛️", title: "Govt. Subsidy Expert", desc: "Full assistance in PM Surya Ghar Yojana — we handle all paperwork from application to disbursement." },
              { icon: "🔧", title: "Lifetime Support", desc: "Dedicated maintenance, monitoring, and 24/7 customer support throughout the system's lifetime." },
              { icon: "⚡", title: "Fast Installation", desc: "Professional installation within 3-5 days by certified engineers with zero disruption." },
              { icon: "💰", title: "Best ROI in Bihar", desc: "Transparent pricing, maximum savings, and fastest payback period with net metering benefits." },
            ].map((c, i) => (
              <AnimSection key={i} delay={i * 0.08}>
                <div className="why-card-v2">
                  <div className="why-icon-v2">{c.icon}</div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ WHY CHOOSE US ═══════ */}
      <section className="section about-feature-section" style={{ background: "#f8fafc" }}>
        <div className="container about-feature-grid">
          <div className="about-feature-image">
            <img src="/images/solar-about.png" alt="Solar About EKOSYS" />
          </div>
          <div className="about-feature-copy">
            <h2>Solar Expertise Built for Bihar Homes</h2>
            <p>EKOSYS combines local experience, premium solar products, and fast installation to deliver reliable rooftop systems with government subsidy support.</p>
            <ul className="about-feature-list">
              <li>Expert site surveys and personalized solar design</li>
              <li>MNRE-approved panels, inverters, and mounting structures</li>
              <li>Fast approvals, safe wiring, and clean installation</li>
              <li>Dedicated customer support and annual maintenance plans</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section process-section" style={{ background: "#fff" }}>
        <div className="container">
          <AnimSection>
            <h2 className="section-title">Our Installation <span className="highlight">Process</span></h2>
            <p className="section-subtitle">A seamless 6-step journey from consultation to clean energy — we handle everything.</p>
          </AnimSection>
          <div className="process-highlight-grid">
            <div className="process-highlight-image">
              <img src="/images/team-installation.png" alt="EKOSYS solar installation team" />
            </div>
            <div className="process-highlight-copy">
              <h3>Trusted Team, Timely Installation</h3>
              <p>Our installation crew installs rooftop solar systems with precision, safety and clean workmanship, so your home starts saving from day one.</p>
              <ul className="process-feature-list">
                <li>Certified installation engineers</li>
                <li>Secure rooftop mounting with weather-resistant fittings</li>
                <li>Safe electrical wiring, earthing and net metering support</li>
                <li>Hassle-free commissioning and aftercare service</li>
              </ul>
            </div>
          </div>
          <div className="process-grid-v2">
            {processSteps.map((s, i) => (
              <AnimSection key={i} delay={i * 0.1}>
                <div className="process-card-v2">
                  <div className="process-num">{s.num}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <section className="section" style={{ background: "#ffffff" }}>
        <div className="container">
          <AnimSection>
            <h2 className="section-title">What Our <span className="highlight">Clients Say</span></h2>
            <p className="section-subtitle">Real reviews from real customers across Bihar who trust EKOSYS for their solar needs.</p>
          </AnimSection>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            className="testimonials-swiper"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="testimonial-card-v2">
                  <div className="stars-v2">{"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}</div>
                  <p>"{t.text}"</p>
                  <div className="testimonial-author-v2">
                    <div className="testimonial-avatar-v2">{t.name.charAt(0)}</div>
                    <div>
                      <div className="testimonial-name-v2">{t.name}</div>
                      <div className="testimonial-loc-v2"><FiMapPin size={12} /> {t.loc}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ═══════ PARTNERS ═══════ */}
      <section className="section partners-section" style={{ background: "#fff" }}>
        <div className="container">
          <AnimSection>
            <h2 className="section-title">Our Trusted <span className="highlight">Partners</span></h2>
            <p className="section-subtitle">We work with India's leading solar equipment manufacturers to deliver premium quality.</p>
          </AnimSection>
          <div className="partners-visual-grid">
            <div className="partners-image-card">
              <img src="/images/partners.png" alt="Solar partner logos" />
              <p className="partners-note">Recognized partner brands and manufacturer names across the Indian solar ecosystem.</p>
            </div>
            <div className="partners-name-grid">
              {partners.map((p, i) => (
                <AnimSection key={i} delay={i * 0.05}>
                  <div className="partner-name-pill">{p}</div>
                </AnimSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ BLOG PREVIEW ═══════ */}
      <section className="section" style={{ background: "#ffffff" }}>
        <div className="container">
          <AnimSection>
            <h2 className="section-title">Latest <span className="highlight">Blog Posts</span></h2>
            <p className="section-subtitle">Stay updated with solar energy news, tips, and guides.</p>
          </AnimSection>
          <div className="blog-grid-v2">
            {sortedBlogs.map((b, i) => (
              <AnimSection key={i} delay={i * 0.1}>
                <Link to={`/blog/${b.slug}`} className="blog-card-v2">
                  <div className="blog-img-v2"><img src={b.img} alt={b.title} loading="lazy" /></div>
                  <div className="blog-body-v2">
                    <span className="blog-tag-v2">{b.tag}</span>
                    <h3>{b.title}</h3>
                    <span className="blog-read-more">Read More <FiArrowRight /></span>
                  </div>
                </Link>
              </AnimSection>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 30 }}>
            <Link to="/blog" className="btn btn-outline">View All Articles <FiArrowRight /></Link>
          </div>
        </div>
      </section>

      {/* ═══════ FAQ ═══════ */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="container">
          <AnimSection>
            <h2 className="section-title">Frequently Asked <span className="highlight">Questions</span></h2>
          </AnimSection>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            {faqs.map((f, i) => (
              <AnimSection key={i} delay={i * 0.05}>
                <div className="faq-item-v2">
                  <div className="faq-question-v2" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    {f.q} <span>{openFaq === i ? "−" : "+"}</span>
                  </div>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="faq-answer-v2">{f.a}</div>
                  </motion.div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ MAP ═══════ */}
      <section className="section" style={{ background: "#ffffff" }}>
        <div className="container">
          <AnimSection>
            <h2 className="section-title">Find <span className="highlight">Us</span></h2>
            <p className="section-subtitle">Visit our office at Hajipur, Bihar for a free consultation.</p>
          </AnimSection>
          <div className="map-contact-grid">
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.3!2d85.2085!3d25.6867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQxJzEyLjEiTiA4NcKwMTInMzAuNiJF!5e0!3m2!1sen!2sin!4v1"
                width="100%" height="400" style={{ border: 0, borderRadius: 16 }} allowFullScreen loading="lazy"
                title="EKOSYS Office Location"
              />
            </div>
            <div className="map-contact-info">
              <h3>EKOSYS Solar Energy</h3>
              <p><FiMapPin /> 1st Floor, Tulsi Singh Complex, Marai Road, In Front Of Aakash Ganga TVS, Hajipur - 844101 (Bihar) India</p>
              <p><FiPhone /> <a href="tel:+918757686826">+91 8757686826</a></p>
              <p><FiMail /> <a href="mailto:corp.ekosys@gmail.com">corp.ekosys@gmail.com</a></p>
              <p>🕐 Mon - Sat: 9:00 AM - 7:00 PM</p>
              <button className="btn btn-primary" onClick={openPopup} style={{ marginTop: 16 }}>Get Free Consultation <FiArrowRight /></button>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
