import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./Sitemap.css";

function HTMLSitemap() {
  return (
    <div className="sitemap-container" style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <Helmet>
        <title>Sitemap | EKOSYS</title>
        <meta name="description" content="Complete sitemap for EKOSYS. Find all our solar and facade engineering services, products, and information." />
        <link rel="canonical" href="https://ekosys.in/sitemap" />
      </Helmet>
      
      <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#0f172a' }}>EKOSYS Sitemap</h1>

      <div className="sitemap-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
        
        <div className="sitemap-section">
          <h3>Company</h3>
          <ul>
            <li><Link to="/">Landing Portal</Link></li>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/blog">Blog & News</Link></li>
          </ul>
        </div>

        <div className="sitemap-section">
          <h3>Solar Services</h3>
          <ul>
            <li><Link to="/products">Solar Products</Link></li>
            <li><Link to="/rooftop-solar-bihar">Rooftop Solar</Link></li>
            <li><Link to="/residential-solar-bihar">Residential Solar</Link></li>
            <li><Link to="/industrial-solar-bihar">Industrial Solar</Link></li>
            <li><Link to="/solar-installation-bihar">Solar Installation Services</Link></li>
            <li><Link to="/solar-maintenance">Solar Maintenance</Link></li>
            <li><Link to="/subsidy">Subsidy Information</Link></li>
            <li><Link to="/solar-subsidy-bihar">Solar Subsidy in Bihar</Link></li>
          </ul>
        </div>

        <div className="sitemap-section">
          <h3>Facade Engineering</h3>
          <ul>
            <li><Link to="/facade">Facade Hub</Link></li>
            <li><Link to="/facade/structural-glazing">Structural Glazing</Link></li>
            <li><Link to="/facade/curtain-walls">Curtain Walls</Link></li>
            <li><Link to="/facade/acp-cladding">ACP Cladding</Link></li>
            <li><Link to="/facade/glass-facade">Glass Facade</Link></li>
            <li><Link to="/facade/aluminium-facade">Aluminium Facade</Link></li>
          </ul>
        </div>

        <div className="sitemap-section">
          <h3>Tools & Utilities</h3>
          <ul>
            <li><Link to="/solar-calculator">Solar Calculator</Link></li>
            <li><Link to="/solar-system-comparison">Solar System Comparison</Link></li>
            <li><Link to="/installation">Installation Guide</Link></li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default HTMLSitemap;
