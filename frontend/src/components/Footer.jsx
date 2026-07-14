import { Link } from "react-router-dom";
let API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
if (API && !API.endsWith('/api')) API += '/api';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            <div className="footer-about">
              <img
                src="/images/navLogo.png"
                alt="EKOSYS"
                loading="lazy"
                decoding="async"
                width="240"
                height="90"
                style={{
                  height: "90px",
                  width: "auto",
                  maxWidth: "none",
                  flexShrink: 0,
                  marginBottom: "20px",
                  objectFit: "contain",
                }}
              />
              <p>
                EKOSYS works across Solar EPC and Architectural Exterior
                solutions, helping homes, businesses, and institutions build
                cleaner energy systems and stronger modern facades.
              </p>
            </div>
            
            <div className="footer-links">
              <h4>Company</h4>
              <Link to="/home">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/blog">Blog & News</Link>
              <Link to="/contact">Contact Us</Link>
            </div>

            <div className="footer-links">
              <h4>Solar EPC</h4>
              <Link to="/products">Solar Products</Link>
              <Link to="/rooftop-solar-bihar">Rooftop Solar</Link>
              <Link to="/industrial-solar-bihar">Industrial Solar</Link>
              <Link to="/subsidy">Govt Subsidy Assistance</Link>
              <Link to="/installation">Installation Guide</Link>
              <p style={{ marginTop: "10px", color: "#f59e0b", fontStyle: "italic", fontSize: "0.85rem", lineHeight: 1.4 }}>
                "PM सूर्य घर योजना के तहत ₹78,000 तक की सब्सिडी"
              </p>
            </div>

            <div className="footer-links">
              <h4>Facade Engineering</h4>
              <Link to="/facade">Facade Hub</Link>
              <Link to="/facade/structural-glazing">Structural Glazing</Link>
              <Link to="/facade/curtain-walls">Curtain Walls</Link>
              <Link to="/facade/acp-cladding">ACP Cladding</Link>
              <Link to="/facade/glass-facade">Glass Facade</Link>
              <Link to="/facade/aluminium-facade">Aluminium Facade</Link>
            </div>

            <div className="footer-links">
              <h4>Contact & Support</h4>
              <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '15px' }}>
                📞 +91-8757686826
                <br />✉ corp.ekosys@gmail.com
                <br />
                📍 Hajipur, Vaishali, Bihar
              </p>
              <a
                href="https://biziverse.com/Index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-login-btn"
                style={{ display: 'inline-block' }}
              >
                Employee Login
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 EKOSYS. All Rights Reserved. | Vaishali, Bihar</p>
          </div>
        </div>
      </footer>
    </>
  );
}
