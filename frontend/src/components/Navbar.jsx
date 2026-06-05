import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiPhone, FiMenu, FiX, FiChevronDown, FiChevronLeft } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const mainLinks = [
    { to: "/", label: "HOME" },
    { to: "/about", label: "ABOUT" },
  ];

  const serviceLinks = [
    { to: "/products", label: "Solar Products" },
    { to: "/rooftop-solar-bihar", label: "Rooftop Solar" },
    { to: "/residential-solar-bihar", label: "Residential Solar" },
    { to: "/industrial-solar-bihar", label: "Industrial Solar" },
    { to: "/solar-maintenance", label: "Solar Maintenance" },
    { to: "/solar-installation-bihar", label: "Installation Services" },
  ];

  const afterLinks = [
    { to: "/subsidy", label: "SUBSIDY" },
    { to: "/installation", label: "INSTALLATION" },
    { to: "/blog", label: "BLOG" },
    { to: "/contact", label: "CONTACT" },
  ];

  const openPopup = () => {
    window.dispatchEvent(new Event("openPopup"));
  };

  return (
    <>
      <nav className={`navbar-v2 ${scrolled ? "navbar-scrolled" : ""}`}>
        {/* Main Navbar */}
        <div className="nav-main">
          <div className="nav-main-inner">
            {/* Logo */}
            <Link to="/" className="nav-logo-v2">
              <img
                src="/images/navLogo.jpeg"
                alt="EKOSYS Solar"
                className="nav-logo-img-v2"
              />
              <div className="nav-logo-text-v2">
                <span className="logo-title-v2">EKOSYS Solar</span>
                <span className="logo-subtitle-v2">SOLAR PANELS • SUBSIDY • INSTALLATION • BIHAR</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="nav-links-v2">
              {mainLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`nav-link-v2 ${pathname === l.to ? "active" : ""}`}
                >
                  {l.label}
                </Link>
              ))}

              {/* Services Dropdown */}
              <div
                className="nav-dropdown"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className={`nav-link-v2 dropdown-trigger ${pathname.includes("solar") || pathname === "/products" ? "active" : ""}`}>
                  SERVICES <FiChevronDown className={`chevron ${servicesOpen ? "rotated" : ""}`} />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      className="dropdown-menu"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {serviceLinks.map((sl) => (
                        <Link
                          key={sl.to}
                          to={sl.to}
                          className="dropdown-item"
                          onClick={() => setServicesOpen(false)}
                        >
                          {sl.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {afterLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`nav-link-v2 ${pathname === l.to ? "active" : ""}`}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* RHS: Phone + CTA */}
            <div className="nav-cta-v2">
              <button className="nav-quote-btn" onClick={openPopup}>
                Get Free Quote
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              type="button"
              className="mobile-toggle-v2"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(!open)}
            >
              {open ? <FiX size={24} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu-v2"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="mobile-menu-header">
              <img src="/images/navLogo.jpeg" alt="EKOSYS" className="mobile-menu-logo" style={{ height: "45px", width: "auto", objectFit: "contain" }} />
              <div className="mobile-header-actions">
                <button className="mobile-close-btn" onClick={() => setOpen(false)} aria-label="Close menu">
                  <FiChevronLeft size={22} />
                </button>
              </div>
            </div>

            {mainLinks.map((l) => (
              <Link key={l.to} to={l.to} className={`mobile-link-v2 ${pathname === l.to ? "active" : ""}`} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}

            <div className="mobile-services-group">
              <div className="mobile-services-title" onClick={() => setServicesOpen(!servicesOpen)}>
                SERVICES <FiChevronDown className={`chevron ${servicesOpen ? "rotated" : ""}`} />
              </div>
              {servicesOpen && (
                <div className="mobile-services-list">
                  {serviceLinks.map((sl) => (
                    <Link key={sl.to} to={sl.to} className="mobile-service-link" onClick={() => setOpen(false)}>
                      {sl.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {afterLinks.map((l) => (
              <Link key={l.to} to={l.to} className={`mobile-link-v2 ${pathname === l.to ? "active" : ""}`} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}

            <div className="mobile-cta-group">
              <button className="nav-quote-btn mobile-quote" onClick={() => { openPopup(); setOpen(false); }}>
                Get Free Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}
