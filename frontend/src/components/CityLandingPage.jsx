import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FiCheckCircle, FiMapPin, FiPhone, FiStar, FiSun, FiArrowRight } from "react-icons/fi";
import { businessInfo } from "../data/seoData";

export default function CityLandingPage({ cityData }) {
  if (!cityData) return null;

  // Schema for LocalBusiness
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${businessInfo.url}/${cityData.slug}#localbusiness`,
    name: `EKOSYS Solar in ${cityData.name}`,
    image: businessInfo.image,
    telephone: businessInfo.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.address.street,
      addressLocality: cityData.name,
      addressRegion: cityData.state,
      postalCode: cityData.postalCode || "844101",
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: cityData.geo.lat,
      longitude: cityData.geo.lng
    },
    areaServed: {
      "@type": "City",
      name: cityData.name
    },
    priceRange: "₹₹"
  };

  // Schema for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cityData.faqs.map(faq => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>{cityData.metaTitle}</title>
        <meta name="description" content={cityData.metaDescription} />
        <meta name="keywords" content={cityData.metaKeywords} />
        <link rel="canonical" href={`https://ekosys.in/solar-company-${cityData.slug}`} />
        
        <meta property="og:title" content={cityData.metaTitle} />
        <meta property="og:description" content={cityData.metaDescription} />
        <meta property="og:url" content={`https://ekosys.in/solar-company-${cityData.slug}`} />
        
        <meta name="geo.region" content="IN-BR" />
        <meta name="geo.placename" content={`${cityData.name}, Bihar`} />
        <meta name="geo.position" content={`${cityData.geo.lat};${cityData.geo.lng}`} />
        
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        
        <style>{`
          .city-hero {
            background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/hero-banner.webp') center/cover;
            padding: 120px 0 80px;
            color: white;
            text-align: center;
          }
          .city-stats {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin-top: 30px;
            flex-wrap: wrap;
          }
          .stat-item {
            background: rgba(255,255,255,0.1);
            padding: 15px 25px;
            border-radius: 8px;
            backdrop-filter: blur(5px);
          }
          .city-section { padding: 80px 0; }
          .bg-light { background: #f8fafc; }
          .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
            margin-top: 40px;
          }
          .service-card {
            background: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.05);
            text-align: center;
            transition: transform 0.3s;
          }
          .service-card:hover { transform: translateY(-10px); }
          .service-card h3 { color: #16a34a; margin: 15px 0; }
          .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
          }
          .testi-card {
            background: white;
            padding: 30px;
            border-radius: 12px;
            border-left: 4px solid #16a34a;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          }
          .stars { color: #f59e0b; margin-bottom: 15px; }
          .map-container iframe {
            width: 100%;
            height: 400px;
            border-radius: 12px;
            border: none;
          }
          .faq-item {
            background: white;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 15px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          }
          .faq-item h4 { color: #1e293b; margin-bottom: 10px; }
          .faq-item p { color: #64748b; margin: 0; }
        `}</style>
      </Helmet>

      <section className="city-hero">
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(22,163,74,0.9)', padding: '5px 15px', borderRadius: '20px', marginBottom: '20px', fontSize: '14px' }}>
            <FiMapPin /> Serving {cityData.name} & Nearby Areas
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '20px' }}>
            {cityData.heroTitle}
          </h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            {cityData.heroDescription.split('\n')[0]}
          </p>
          
          <div className="city-stats">
            <div className="stat-item">
              <FiSun size={24} style={{ color: '#f59e0b', marginBottom: '10px' }} />
              <div style={{ fontWeight: 'bold' }}>{cityData.avgSunlightHours}</div>
              <div style={{ fontSize: '14px', opacity: 0.8 }}>Sunlight</div>
            </div>
            <div className="stat-item">
              <FiCheckCircle size={24} style={{ color: '#10b981', marginBottom: '10px' }} />
              <div style={{ fontWeight: 'bold' }}>{cityData.avgSavings}</div>
              <div style={{ fontSize: '14px', opacity: 0.8 }}>Est. Savings</div>
            </div>
          </div>
          
          <div style={{ marginTop: '40px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={() => window.dispatchEvent(new Event('openPopup'))}>
              Get Free Quote
            </button>
            <a href={`tel:${businessInfo.phone}`} className="btn" style={{ background: 'white', color: '#16a34a', fontWeight: 'bold', padding: '12px 30px', borderRadius: '50px' }}>
              <FiPhone /> Call Now
            </a>
          </div>
        </div>
      </section>

      <section className="city-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 className="section-title">Solar Services in <span className="highlight">{cityData.name}</span></h2>
            <p>Comprehensive solar energy solutions tailored for homes and businesses in {cityData.name}.</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <h3>Rooftop Solar</h3>
              <p>Reduce your home electricity bills by up to 90% with our high-efficiency rooftop systems.</p>
            </div>
            <div className="service-card">
              <h3>Commercial Solar</h3>
              <p>Empower your business in {cityData.name} with reliable solar power and cut operational costs.</p>
            </div>
            <div className="service-card">
              <h3>Subsidy Support</h3>
              <p>Get up to ₹78,000 subsidy under PM Surya Ghar Yojana with our end-to-end assistance.</p>
            </div>
            <div className="service-card">
              <h3>Solar Maintenance</h3>
              <p>Fast, local maintenance and AMC services available throughout {cityData.name} district.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="city-section bg-light">
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
            <div style={{ flex: '1 1 400px' }}>
              <h2 className="section-title">Why Choose EKOSYS in <span className="highlight">{cityData.name}</span></h2>
              <div style={{ marginTop: '30px' }}>
                {cityData.uniqueContent.map((paragraph, idx) => (
                  <p key={idx} style={{ marginBottom: '20px', lineHeight: '1.8' }}>{paragraph}</p>
                ))}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '30px' }}>
                <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FiCheckCircle color="#16a34a" size={20} /> Local support available in {cityData.name}
                </li>
                <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FiCheckCircle color="#16a34a" size={20} /> Complete net metering liaison with local BSPHCL office
                </li>
                <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FiCheckCircle color="#16a34a" size={20} /> 25-year performance warranty on Tier-1 panels
                </li>
              </ul>
            </div>
            <div style={{ flex: '1 1 400px' }}>
              <div className="map-container">
                <iframe
                  title={`Map of ${cityData.name}`}
                  src={`https://maps.google.com/maps?q=${cityData.geo.lat},${cityData.geo.lng}&z=12&output=embed`}
                  loading="lazy"
                ></iframe>
              </div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '20px' }}>
                <strong>Key Areas Served:</strong>
                {cityData.landmarks.map(landmark => (
                  <span key={landmark} style={{ background: '#e2e8f0', padding: '4px 12px', borderRadius: '20px', fontSize: '14px' }}>
                    {landmark}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="city-section">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '50px' }}>
            What People in <span className="highlight">{cityData.name}</span> Say
          </h2>
          <div className="testimonials-grid">
            {cityData.localTestimonials.map((testi, idx) => (
              <div className="testi-card" key={idx}>
                <div className="stars">
                  {[...Array(Math.floor(testi.rating))].map((_, i) => <FiStar key={i} fill="#f59e0b" />)}
                </div>
                <p style={{ fontStyle: 'italic', marginBottom: '20px' }}>"{testi.text}"</p>
                <div>
                  <strong>{testi.name}</strong>
                  <div style={{ fontSize: '14px', color: '#64748b', marginTop: '5px' }}>
                    <FiMapPin size={12} /> {testi.area}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="city-section bg-light">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>
              Frequently Asked Questions in <span className="highlight">{cityData.name}</span>
            </h2>
            <div>
              {cityData.faqs.map((faq, idx) => (
                <div className="faq-item" key={idx}>
                  <h4>{faq.q}</h4>
                  <p>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 0', background: '#16a34a', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Ready to Go Solar in {cityData.name}?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px', opacity: 0.9 }}>
            Join the green revolution and reduce your electricity bills today.
          </p>
          <button className="btn" style={{ background: 'white', color: '#16a34a', padding: '15px 40px', fontSize: '1.1rem' }} onClick={() => window.dispatchEvent(new Event('openPopup'))}>
            Book Free Site Survey
          </button>
        </div>
      </section>
    </>
  );
}
