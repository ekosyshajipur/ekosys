import { Link } from "react-router-dom";
let API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
if (API && !API.endsWith('/api')) API += '/api';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <img
                src="/images/navLogo.png"
                alt="EKOSYS"
                loading="lazy"
                decoding="async"
                width="240"
                height="75"
                style={{
                  height: "75px",
                  marginBottom: "20px",
                  objectFit: "contain",
                }}
              />
              <p>
                EKOSYS works across Solar EPC and Architectural Exterior
                solutions, helping homes, businesses, and institutions build
                cleaner energy systems and stronger modern facades.
              </p>
              <p>
                📞 8757686826
                <br />✉ corp.ekosys@gmail.com
                <br />
                📍Hajipur, Vaishali, Bihar
              </p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/products">Products</Link>
              <Link to="/subsidy">Govt Subsidy</Link>
              <Link to="/installation">Installation</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
            <div className="footer-links">
              <h4>Our Products</h4>
              <Link to="/products">On-Grid / Off-Grid / Hybrid</Link>
              <Link to="/products">Solar Street Lights</Link>
              <Link to="/products">Solar Water Heaters</Link>
              <Link to="/products">Solar Water Pumps</Link>
              <Link to="/products">Inverters & Batteries</Link>
              <Link to="/products">UPS & Stabilizers</Link>
            </div>
            <div className="footer-links">
              <h4>Support</h4>
              <Link to="/contact">Contact Us</Link>
              <Link to="/installation">Installation Guide</Link>
              <Link to="/subsidy">Subsidy Information</Link>
              <p
                style={{
                  marginTop: "20px",
                  color: "#f59e0b",
                  fontStyle: "italic",
                  fontSize: "0.9rem",
                }}
              >
                "PM सूर्य घर योजना के तहत ₹78,000 तक की सब्सिडी प्राप्त करें -
                भारत सरकार"
              </p>
              <a
                href="https://biziverse.com/Index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-login-btn"
              >
                Login
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
