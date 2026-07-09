import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { BreadcrumbSchema } from '../components/SchemaMarkup';

export default function Installation() {
  return (
    <>
      <Helmet>
        <title>Solar Installation Process Bihar | 8-Step Guide | EKOSYS</title>
        <meta name="description" content="Professional solar installation in 3-5 days across Bihar. Free consultation, site survey, custom design, DISCOM approval, installation & net metering by EKOSYS engineers." />
        <meta name="keywords" content="solar installation Bihar, solar panel installation process, rooftop solar installation, EKOSYS installation, solar installation steps, solar installation guide Bihar" />
        <link rel="canonical" href="https://ekosys.in/installation" />
        <meta property="og:title" content="Solar Installation Process Bihar | 8-Step Guide | EKOSYS" />
        <meta property="og:description" content="Professional solar installation in 3-5 days across Bihar. Free consultation, site survey, custom design, DISCOM approval, and net metering." />
        <meta property="og:url" content="https://ekosys.in/installation" />
        <meta property="og:image" content="https://ekosys.in/images/installation.webp" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Solar Installation Process Bihar | EKOSYS" />
        <meta name="twitter:description" content="Professional solar installation in 3-5 days across Bihar." />
        <meta name="twitter:image" content="https://ekosys.in/images/installation.webp" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to Install a Solar Power System in Bihar",
          "description": "The complete 8-step process for residential, commercial, and industrial solar panel installation by EKOSYS.",
          "step": [
            { "@type": "HowToStep", "position": 1, "name": "Free Site Survey", "text": "Our engineers visit your site to assess roof space, shadowing, structure, and load requirements." },
            { "@type": "HowToStep", "position": 2, "name": "Custom System Design", "text": "We design a system tailored to your budget and energy needs." },
            { "@type": "HowToStep", "position": 3, "name": "Government Approvals", "text": "We handle all DISCOM approvals and PM Surya Ghar subsidy registrations." },
            { "@type": "HowToStep", "position": 4, "name": "Professional Installation", "text": "Our certified team installs the mounting structures, solar panels, and wiring." },
            { "@type": "HowToStep", "position": 5, "name": "Net Meter & Commissioning", "text": "DISCOM installs the bi-directional net meter. The system is tested and commissioned." },
            { "@type": "HowToStep", "position": 6, "name": "Subsidy Disbursement", "text": "We upload all necessary documents to the national portal for your subsidy." },
            { "@type": "HowToStep", "position": 7, "name": "Monitoring & Maintenance", "text": "We provide comprehensive maintenance and monitoring." },
            { "@type": "HowToStep", "position": 8, "name": "Long-Term Performance", "text": "Enjoy 25+ years of clean, sustainable power generation." }
          ]
        })}</script>
      </Helmet>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://ekosys.in/' },
        { name: 'Installation Process', url: 'https://ekosys.in/installation' }
      ]} />
      <section className="page-header">
        <div className="container">
          <h1>
            Installation <span className="highlight">Process</span>
          </h1>
          <p>
            From site survey to commissioning — EKOSYS ensures a
            hassle-free experience.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: 16 }}>
              Professional <span className="highlight">Installation</span>
            </h2>
          </div>
          <div className="content-grid" style={{ marginBottom: 50 }}>
            <img
              src="/images/installation.webp"
              alt="Solar Installation"
              loading="lazy"
              width="600"
              height="600"
              style={{
                borderRadius: 16,
                boxShadow: "0 20px 60px rgba(0,0,0,.15)",
                width: "100%",
                height: "auto",
                objectFit: "cover"
              }}
            />
            <div>
              <p style={{ color: "#94a3b8", lineHeight: 1.8 }}>
                Our expert team guarantees strict compliance and on-time
                delivery for all industrial, commercial, and residential
                projects. Based in Hajipur, Vaishali, we manage everything from
                initial design to final commissioning.
              </p>

              <div
                style={{
                  background: "rgba(245,158,11,.1)",
                  padding: "15px",
                  borderRadius: "8px",
                  borderLeft: "4px solid #f59e0b",
                  marginTop: 20,
                }}
              >
                <p style={{ color: "#f59e0b", fontStyle: "italic", margin: 0 }}>
                  "गुणवत्ता और सुरक्षा के साथ - आपके घर और व्यापार के लिए
                  बेहतरीन सोलर।"
                </p>
              </div>
            </div>
          </div>

          <h2 className="section-title">
            Our <span className="highlight">8-Step</span> Process
          </h2>
          <div className="steps-grid">
            {[
              {
                n: "01",
                t: "Free Site Survey",
                d: "Our engineers visit your site to assess roof space, shadowing, structure, and load requirements. We create a custom 3D rooftop design.",
              },
              {
                n: "02",
                t: "Custom System Design",
                d: "Based on the survey, we design a system tailored to your budget and energy needs, selecting the right capacity and components.",
              },
              {
                n: "03",
                t: "Government Approvals",
                d: "We handle all DISCOM approvals and PM Surya Ghar subsidy registrations. The net metering application is filed by our team.",
              },
              {
                n: "04",
                t: "Professional Installation",
                d: "Our certified team installs the mounting structures, solar panels, and wiring. We also integrate voltage stabilizers if required.",
              },
              {
                n: "05",
                t: "Net Meter & Commissioning",
                d: "DISCOM installs the bi-directional net meter. The system is tested, commissioned, and connected to the grid seamlessly.",
              },
              {
                n: "06",
                t: "Subsidy Disbursement",
                d: "We upload all necessary documents to the national portal, ensuring your subsidy arrives in your bank account promptly.",
              },
              {
                n: "07",
                t: "Monitoring & Maintenance",
                d: "We provide comprehensive maintenance and monitoring to ensure your plant operates at peak efficiency year-round.",
              },
              {
                n: "08",
                t: "Long-Term Performance",
                d: "Enjoy 25+ years of clean, sustainable power generation with significant reductions in your energy costs.",
              },
            ].map((s, i) => (
              <div
                className="card"
                key={i}
                style={{ display: "flex", gap: 20, alignItems: "start" }}
              >
                <div className="step-num" style={{ flexShrink: 0 }}>
                  {s.n}
                </div>
                <div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <h2 style={{ marginBottom: 16 }}>Ready for a Site Survey?</h2>
          <p style={{ color: "#94a3b8", maxWidth: 500, margin: "0 auto 30px" }}>
            Contact EKOSYS today to schedule a free site visit by our
            expert engineers.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Book Free Survey →
          </Link>
        </div>
      </section>
    </>
  );
}
