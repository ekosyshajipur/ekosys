import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const WHATSAPP_URL = 'https://wa.me/918757686826?text=Hi%20EKOSYS%2C%20I%27m%20interested%20in%20solar%20installation.%20Please%20share%20details.';
const PHONE_URL = 'tel:+918757686826';

const FloatingContact = () => {
  const [showTooltipWA, setShowTooltipWA] = useState(false);
  const [showTooltipPhone, setShowTooltipPhone] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer');
  const handlePhoneClick = () => window.location.href = PHONE_URL;

  return (
    <>
      <style>{`
        @keyframes ekosys-float-entrance {
          from { opacity: 0; transform: scale(0.4) translateY(30px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        .floating-contact-container {
          position: fixed;
          right: 20px;
          bottom: 24px;
          z-index: 9998;
          display: flex;
          flex-direction: column;
          gap: 16px;
          animation: ekosys-float-entrance .5s cubic-bezier(.34,1.56,.64,1) forwards;
        }
        .floating-btn-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-direction: row-reverse;
        }
        .floating-tooltip {
          background: #1e293b;
          color: #fff;
          font-size: 13px;
          font-weight: 500;
          padding: 8px 14px;
          border-radius: 8px;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transform: translateX(8px);
          transition: opacity .25s, transform .25s;
          box-shadow: 0 4px 15px rgba(0,0,0,.15);
        }
        .floating-tooltip.show {
          opacity: 1;
          transform: translateX(0);
        }
        .floating-btn {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform .25s ease, box-shadow .25s ease;
          outline: none;
          padding: 0;
        }
        .floating-btn:hover {
          transform: scale(1.1);
        }
        .floating-wa {
          background: #25D366;
          box-shadow: 0 4px 15px rgba(37,211,102,.4);
          color: white;
          font-size: 30px;
        }
        .floating-wa:hover {
          box-shadow: 0 6px 20px rgba(37,211,102,.55);
        }
        .floating-phone {
          background: #0f172a;
          box-shadow: 0 4px 15px rgba(15,23,42,.4);
          color: white;
          font-size: 24px;
        }
        .floating-phone:hover {
          box-shadow: 0 6px 20px rgba(15,23,42,.55);
        }
        
        @media (max-width: 767px) {
          .floating-contact-container {
            bottom: 20px;
            right: 16px;
            gap: 12px;
          }
          .floating-btn {
            width: 50px;
            height: 50px;
          }
          .floating-wa { font-size: 26px; }
          .floating-phone { font-size: 20px; }
          .floating-tooltip { display: none; }
        }
      `}</style>

      {mounted && (
        <div className="floating-contact-container">
          {/* WhatsApp Button */}
          <div className="floating-btn-wrapper">
            <button
              onClick={handleWhatsAppClick}
              onMouseEnter={() => setShowTooltipWA(true)}
              onMouseLeave={() => setShowTooltipWA(false)}
              onFocus={() => setShowTooltipWA(true)}
              onBlur={() => setShowTooltipWA(false)}
              className="floating-btn floating-wa"
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp />
            </button>
            <div className={`floating-tooltip ${showTooltipWA ? 'show' : ''}`}>
              Chat on WhatsApp
            </div>
          </div>

          {/* Phone Button */}
          <div className="floating-btn-wrapper">
            <button
              onClick={handlePhoneClick}
              onMouseEnter={() => setShowTooltipPhone(true)}
              onMouseLeave={() => setShowTooltipPhone(false)}
              onFocus={() => setShowTooltipPhone(true)}
              onBlur={() => setShowTooltipPhone(false)}
              className="floating-btn floating-phone"
              aria-label="Call Us"
            >
              <FaPhoneAlt />
            </button>
            <div className={`floating-tooltip ${showTooltipPhone ? 'show' : ''}`}>
              Call Now
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingContact;
