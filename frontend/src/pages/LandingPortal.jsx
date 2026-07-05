import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiSun, FiLayout, FiArrowRight } from 'react-icons/fi';
import { Helmet } from 'react-helmet-async';
import './LandingPortal.css';

const LandingPortal = () => {
  return (
    <>
      <Helmet>
        <title>EKOSYS | Solar EPC & Architectural Facade Engineering</title>
        <meta name="description" content="Ekosys works in both Solar EPC and premium Architectural Facade engineering industries. Choose your sector to explore our services." />
      </Helmet>
      
      <div className="landing-portal">
        <div className="landing-background"></div>
        
        <div className="landing-content">
          <motion.div 
            className="landing-header"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img src="/images/navLogo.png" alt="Ekosys" className="landing-logo" />
            <h1 className="landing-title">Engineering the Future</h1>
            <p className="landing-subtitle">
              Ekosys delivers world-class solutions across two primary sectors. 
              Select a division below to explore our specialized services and portfolio.
            </p>
          </motion.div>

          <div className="landing-options">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              style={{ display: 'flex', width: '100%' }}
            >
              <Link to="/home" className="landing-card solar">
                <div className="card-image-container">
                  <img src="/images/hero-solar.png" alt="Solar Panels" className="card-image" />
                  <div className="card-image-overlay"></div>
                </div>
                <div className="card-content">
                  <h2 className="card-title">Solar EPC Work</h2>
                  <p className="card-description">
                    Complete rooftop and ground-mounted solar solutions. We provide design, 
                    installation, and maintenance for residential, commercial, and industrial sectors.
                  </p>
                  <div className="card-action">
                    <FiSun size={20} />
                    Explore Solar Services
                    <FiArrowRight size={18} />
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              style={{ display: 'flex', width: '100%' }}
            >
              <a href="https://ekosys.facade.in" className="landing-card facade">
                <div className="card-image-container">
                  <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" alt="Architectural Facade" className="card-image" />
                  <div className="card-image-overlay"></div>
                </div>
                <div className="card-content">
                  <h2 className="card-title">Architectural Design & Exterior Work</h2>
                  <p className="card-description">
                    Premium facade engineering, unitized curtain walls, structural glazing, 
                    and advanced exterior cladding solutions for modern skylines.
                  </p>
                  <div className="card-action">
                    <FiLayout size={20} />
                    Explore Facade Services
                    <FiArrowRight size={18} />
                  </div>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPortal;
