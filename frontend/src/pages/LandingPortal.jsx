import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { Helmet } from 'react-helmet-async';
import './LandingPortal.css';

const LandingPortal = () => {
  return (
    <>
      <Helmet>
        <title>EKOSYS | Solar EPC & Architectural Facade Engineering</title>
        <meta name="description" content="Ekosys delivers world-class solutions across Solar EPC and premium Architectural Facade engineering industries." />
      </Helmet>
      
      <div className="landing-main-wrapper">
        <div className="landing-portal">
          <div className="landing-content">
            <motion.div 
              className="landing-header"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="landing-logo-container">
                <img src="/images/navLogo.png" alt="Ekosys Logo" className="landing-logo" />
              </div>
              <h1 className="landing-title">
                Engineering the <span className="text-gradient">Future</span>
              </h1>
              <p className="landing-subtitle">
                Delivering world-class solutions across two primary sectors. Select a 
                division below to explore our specialized services and premium portfolio.
              </p>
            </motion.div>

            <div className="landing-options">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="landing-card-wrapper"
              >
                <Link to="/home" className="landing-card solar">
                  <div className="card-image-container">
                    <img src="/images/hero-solar.png" alt="Solar Panels" className="card-image" />
                    <div className="card-badge solar-badge">Solar EPC</div>
                  </div>
                  <div className="card-content">
                    <h2 className="card-title">Renewable Energy Solutions</h2>
                    <p className="card-description">
                      Complete end-to-end solar solutions for homes, businesses, and industries. 
                      Maximize efficiency with up to 25 years warranty and government subsidies.
                    </p>
                    <div className="card-action solar-action">
                      Explore Solar Services <FiArrowRight size={18} />
                    </div>
                  </div>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="landing-card-wrapper"
              >
                <a href="https://facade.ekosys.in/" className="landing-card facade" target="_blank" rel="noopener noreferrer">
                  <div className="card-image-container">
                    <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" alt="Architectural Facade" className="card-image" />
                    <div className="card-badge facade-badge">Architectural Facade</div>
                  </div>
                  <div className="card-content">
                    <h2 className="card-title">Premium Facade Engineering</h2>
                    <p className="card-description">
                      Transforming skylines with unitized curtain walls, structural glazing, 
                      ACP cladding, and advanced exterior architectural designs.
                    </p>
                    <div className="card-action facade-action">
                      Explore Facade Services <FiArrowRight size={18} />
                    </div>
                  </div>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPortal;
