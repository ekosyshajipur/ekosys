import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/products", label: "Products" },
    { to: "/subsidy", label: "Govt Subsidy" },
    { to: "/installation", label: "Installation" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img
            src="/images/logo.webp"
            alt="EKOSYS Logo"
            className="nav-logo-img"
            width="38"
            height="38"
          />
        </Link>
        <div className="nav-links">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={pathname === l.to ? "active" : ""}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="nav-cta">
          <a
            href="https://console.ultraviewer.net/login.aspx?afterLogin=https%3a%2f%2fconsole.ultraviewer.net%2f%3flang%3den"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Login
          </a>
        </div>
        <button
          type="button"
          className="mobile-toggle"
          aria-label={open ? "Close mobile menu" : "Open mobile menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
      <div id="mobile-menu" className={`mobile-menu ${open ? "open" : ""}`}>
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className={pathname === l.to ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </Link>
        ))}
        <a
          href="https://console.ultraviewer.net/login.aspx?afterLogin=https%3a%2f%2fconsole.ultraviewer.net%2f%3flang%3den"
          className="btn btn-primary mobile-cta-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Login →
        </a>
      </div>
    </nav>
  );
}
