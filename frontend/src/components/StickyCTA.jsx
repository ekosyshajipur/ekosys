import React, { useState, useEffect } from 'react';

const WHATSAPP_URL =
  'https://wa.me/919304000000?text=Hi%20EKOSYS%2C%20I%27m%20interested%20in%20solar%20installation.%20Please%20share%20details.';

const PHONE_URL = 'tel:+919304000000';

const StickyCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Slide-up on mount
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleFreeQuote = (e) => {
    e.preventDefault();
    window.dispatchEvent(new Event('openPopup'));
  };

  const buttons = [
    {
      label: 'Call Now',
      icon: '📞',
      href: PHONE_URL,
      bg: '#16a34a',
      hoverBg: '#15803d',
      ariaLabel: 'Call EKOSYS now',
    },
    {
      label: 'WhatsApp',
      icon: '💬',
      href: WHATSAPP_URL,
      bg: '#25D366',
      hoverBg: '#1ebe5d',
      ariaLabel: 'Chat on WhatsApp',
      target: '_blank',
    },
    {
      label: 'Free Quote',
      icon: '📋',
      onClick: handleFreeQuote,
      bg: '#f59e0b',
      hoverBg: '#d97706',
      ariaLabel: 'Get a free solar quote',
    },
  ];

  return (
    <>
      <style>{`
        @keyframes ekosys-cta-slideup {
          from { transform: translateY(100%); }
          to   { transform: translateY(0); }
        }
        /* Only show on mobile */
        .ekosys-sticky-cta {
          display: none !important;
        }
        @media (max-width: 767px) {
          .ekosys-sticky-cta {
            display: flex !important;
          }
        }
      `}</style>

      <nav
        className="ekosys-sticky-cta"
        role="navigation"
        aria-label="Quick actions"
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          height: 56,
          background: '#fff',
          display: 'flex',
          alignItems: 'stretch',
          boxShadow: '0 -2px 12px rgba(0,0,0,.12)',
          animation: visible ? 'ekosys-cta-slideup .4s cubic-bezier(.22,1,.36,1) forwards' : 'none',
          transform: visible ? 'translateY(0)' : 'translateY(100%)',
          paddingBottom: 'env(safe-area-inset-bottom, 0px)',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        }}
      >
        {buttons.map((btn, idx) => {
          const isLast = idx === buttons.length - 1;
          const commonStyles = {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            background: btn.bg,
            color: '#fff',
            border: 'none',
            borderRight: isLast ? 'none' : '1px solid rgba(255,255,255,.2)',
            fontSize: 11,
            fontWeight: 600,
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'background .2s ease',
            letterSpacing: 0.3,
            padding: '4px 0',
            outline: 'none',
            WebkitTapHighlightColor: 'transparent',
          };

          const handleHover = (e) => {
            e.currentTarget.style.background = btn.hoverBg;
          };
          const handleLeave = (e) => {
            e.currentTarget.style.background = btn.bg;
          };

          if (btn.onClick) {
            return (
              <button
                key={btn.label}
                onClick={btn.onClick}
                aria-label={btn.ariaLabel}
                style={commonStyles}
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
              >
                <span style={{ fontSize: 20, lineHeight: 1 }} aria-hidden="true">
                  {btn.icon}
                </span>
                <span>{btn.label}</span>
              </button>
            );
          }

          return (
            <a
              key={btn.label}
              href={btn.href}
              target={btn.target || '_self'}
              rel={btn.target === '_blank' ? 'noopener noreferrer' : undefined}
              aria-label={btn.ariaLabel}
              style={commonStyles}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >
              <span style={{ fontSize: 20, lineHeight: 1 }} aria-hidden="true">
                {btn.icon}
              </span>
              <span>{btn.label}</span>
            </a>
          );
        })}
      </nav>
    </>
  );
};

export default StickyCTA;
