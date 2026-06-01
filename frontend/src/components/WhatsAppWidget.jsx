import React, { useState, useEffect } from 'react';

const WHATSAPP_URL =
  'https://wa.me/918757686826?text=Hi%20EKOSYS%2C%20I%27m%20interested%20in%20solar%20installation.%20Please%20share%20details.';

const WhatsAppWidget = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger entrance animation after mount
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Keyframe animations — injected once */}
      <style>{`
        @keyframes ekosys-wa-pulse {
          0%   { box-shadow: 0 4px 15px rgba(37,211,102,.4); }
          50%  { box-shadow: 0 4px 15px rgba(37,211,102,.4), 0 0 0 12px rgba(37,211,102,.15); }
          100% { box-shadow: 0 4px 15px rgba(37,211,102,.4), 0 0 0 24px rgba(37,211,102,0); }
        }
        @keyframes ekosys-wa-entrance {
          from { opacity: 0; transform: scale(0.4) translateY(30px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>

      <div
        role="complementary"
        aria-label="WhatsApp chat"
        style={{
          position: 'fixed',
          right: 20,
          bottom: 90,
          zIndex: 9998,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          animation: mounted ? 'ekosys-wa-entrance .5s cubic-bezier(.34,1.56,.64,1) forwards' : 'none',
          opacity: mounted ? 1 : 0,
        }}
      >
        {/* Tooltip */}
        <div
          style={{
            background: '#1a1a2e',
            color: '#fff',
            fontSize: 13,
            fontWeight: 500,
            padding: '6px 12px',
            borderRadius: 8,
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            opacity: showTooltip ? 1 : 0,
            transform: showTooltip ? 'translateX(0)' : 'translateX(8px)',
            transition: 'opacity .25s, transform .25s',
            boxShadow: '0 2px 8px rgba(0,0,0,.15)',
          }}
        >
          Chat on WhatsApp
        </div>

        {/* Button */}
        <button
          onClick={handleClick}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onFocus={() => setShowTooltip(true)}
          onBlur={() => setShowTooltip(false)}
          aria-label="Chat on WhatsApp"
          style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            border: 'none',
            background: '#25D366',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(37,211,102,.4)',
            animation: 'ekosys-wa-pulse 2s ease-in-out 3',
            transition: 'transform .25s ease, box-shadow .25s ease',
            outline: 'none',
            padding: 0,
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,211,102,.55)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(37,211,102,.4)';
          }}
        >
          {/* WhatsApp SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width={30}
            height={30}
            fill="#fff"
            aria-hidden="true"
          >
            <path d="M16.004 3.2C9.04 3.2 3.38 8.86 3.38 15.82c0 2.22.58 4.39 1.68 6.3L3.2 28.8l6.88-1.8a12.54 12.54 0 0 0 5.92 1.49h.01c6.96 0 12.62-5.66 12.62-12.62S22.97 3.2 16.004 3.2zm0 23.08c-1.88 0-3.73-.51-5.33-1.47l-.38-.23-3.96 1.04 1.06-3.86-.25-.39a10.45 10.45 0 0 1-1.6-5.55c0-5.78 4.7-10.48 10.48-10.48 2.8 0 5.43 1.09 7.41 3.07a10.42 10.42 0 0 1 3.07 7.41c-.01 5.78-4.71 10.46-10.5 10.46zm5.74-7.84c-.31-.16-1.86-.92-2.15-1.02-.29-.11-.5-.16-.71.16-.21.31-.82 1.02-1 1.23-.19.21-.37.24-.69.08-.31-.16-1.32-.49-2.52-1.56-.93-.83-1.56-1.86-1.74-2.17-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.19.21-.31.31-.53.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.53-.71-.54h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.22 3.39 5.38 4.76.75.32 1.34.52 1.8.66.75.24 1.44.21 1.98.13.6-.09 1.86-.76 2.12-1.5.26-.74.26-1.37.19-1.5-.08-.14-.29-.22-.6-.37z" />
          </svg>
        </button>
      </div>

      {/* Mobile overrides */}
      <style>{`
        @media (max-width: 767px) {
          [aria-label="WhatsApp chat"] {
            bottom: 80px !important;
          }
          [aria-label="WhatsApp chat"] button {
            width: 50px !important;
            height: 50px !important;
          }
          [aria-label="WhatsApp chat"] button svg {
            width: 26px !important;
            height: 26px !important;
          }
        }
      `}</style>
    </>
  );
};

export default WhatsAppWidget;
