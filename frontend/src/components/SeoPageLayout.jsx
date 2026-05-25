import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FiCheckCircle, FiChevronRight, FiSun } from "react-icons/fi";
import { FAQSchema, BreadcrumbSchema, ServiceSchema } from "./SchemaMarkup";
import { businessInfo } from "../data/seoData";

export default function SeoPageLayout({
  metaTitle,
  metaDescription,
  metaKeywords,
  pageTitle,
  pageSubtitle,
  descriptionParagraphs,
  heroImage,
  highlights,
  benefits,
  reasons,
  processSteps,
  faqs,
  moreLinks,
  canonicalUrl,
  ogImage,
  serviceName
}) {
  return (
    <div className="seo-page-wrapper">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl || 'https://ekosys.in/'} />
        <meta property="og:image" content={ogImage || 'https://ekosys.in/images/hero-banner.webp'} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImage || 'https://ekosys.in/images/hero-banner.webp'} />
        <meta name="geo.region" content="IN-BR" />
        <meta name="geo.placename" content="Hajipur, Bihar" />
      </Helmet>

      {faqs && faqs.length > 0 && <FAQSchema faqs={faqs} />}
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://ekosys.in/' },
        { name: pageTitle, url: canonicalUrl || 'https://ekosys.in/' }
      ]} />
      {serviceName && <ServiceSchema service={{ name: serviceName, description: metaDescription, provider: businessInfo.name, areaServed: 'Bihar, India', url: canonicalUrl || 'https://ekosys.in/' }} />}

      {/* Hero Section */}
      <section className="seo-hero-section">
        <div className="container">
          <div className="seo-hero-grid">
            <div className="seo-hero-content">
              <h1>{pageTitle}</h1>
              {pageSubtitle && <h2>{pageSubtitle}</h2>}
              {descriptionParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
              <div className="seo-hero-cta">
                <Link to="/contact" className="btn btn-primary">Get Free Quote</Link>
              </div>
            </div>
            <div className="seo-hero-image">
              <img src={heroImage} alt={pageTitle} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      {highlights && highlights.length > 0 && (
        <section className="seo-content-section" style={{ paddingBottom: 0 }}>
          <div className="container">
            <div className="seo-process-grid">
              {highlights.map((hl, idx) => (
                <div className="seo-feature-box" key={idx} style={{ padding: '24px' }}>
                  <h4 style={{ marginBottom: '12px', fontSize: '1.2rem', color: '#0f172a' }}>{hl.title}</h4>
                  <p style={{ color: '#475569', lineHeight: 1.6, margin: 0 }}>{hl.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits & Reasons Section */}
      <section className="seo-content-section" style={{ background: "#f8fafc" }}>
        <div className="container">
          <div className="seo-two-col-grid">
            {benefits && benefits.length > 0 && (
              <div className="seo-feature-box">
                <h3 className="seo-section-title">Benefits of {pageTitle.split(' in ')[0]}</h3>
                <ul className="seo-check-list">
                  {benefits.map((item, idx) => (
                    <li key={idx}><FiCheckCircle className="icon-check" /> <span>{item}</span></li>
                  ))}
                </ul>
              </div>
            )}
            
            {reasons && reasons.length > 0 && (
              <div className="seo-feature-box">
                <h3 className="seo-section-title">Why Choose Ekosys</h3>
                <ul className="seo-check-list">
                  {reasons.map((item, idx) => (
                    <li key={idx}><FiSun className="icon-sun" /> <span>{item}</span></li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Process Section */}
      {processSteps && processSteps.length > 0 && (
        <section className="seo-content-section">
          <div className="container">
            <h2 className="seo-section-title text-center">Our Process</h2>
            <div className="seo-process-grid">
              {processSteps.map((step, idx) => (
                <div className="seo-process-card" key={idx}>
                  <div className="step-number">{idx + 1}</div>
                  <h4>{step}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs Section */}
      {faqs && faqs.length > 0 && (
        <section className="seo-content-section" style={{ background: "#f8fafc" }}>
          <div className="container">
            <h2 className="seo-section-title text-center">Frequently Asked Questions</h2>
            <div className="seo-faq-list">
              {faqs.map((faq, idx) => (
                <div className="seo-faq-item" key={idx}>
                  <h4>{faq.q}</h4>
                  <p>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* More Links Section */}
      {moreLinks && moreLinks.length > 0 && (
        <section className="seo-content-section">
          <div className="container">
            <h2 className="seo-section-title">Explore More Solar Services</h2>
            <div className="seo-links-grid">
              {moreLinks.map((link, idx) => (
                <Link to={link.to} key={idx} className="seo-link-card">
                  {link.label} <FiChevronRight className="icon-arrow" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
