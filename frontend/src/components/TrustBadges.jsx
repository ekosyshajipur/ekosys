import React from 'react';

const badges = [
  { icon: '⚡', label: '500+ Installations' },
  { icon: '🏛️', label: 'MNRE Approved' },
  { icon: '🛡️', label: '25 Year Warranty' },
  { icon: '⭐', label: '4.8★ Google Rating' },
  { icon: '📅', label: '15+ Years Experience' },
];

const TrustBadges = () => {
  return (
    <>
      <style>{`
        .ekosys-trust-strip {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 0;
          max-width: 900px;
          margin: 0 auto;
          overflow: visible;
        }
        .ekosys-trust-badge {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 18px 12px;
          gap: 6px;
          scroll-snap-align: center;
        }
        /* Vertical dividers between badges on desktop */
        .ekosys-trust-badge:not(:last-child)::after {
          content: '';
          position: absolute;
          right: 0;
          top: 25%;
          height: 50%;
          width: 1px;
          background: #cbd5e1;
        }
        @media (max-width: 767px) {
          .ekosys-trust-strip {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            gap: 0;
            max-width: 100%;
            padding: 0 8px;
            scrollbar-width: none;       /* Firefox */
            -ms-overflow-style: none;    /* IE/Edge */
          }
          .ekosys-trust-strip::-webkit-scrollbar {
            display: none;               /* Chrome/Safari */
          }
          .ekosys-trust-badge {
            min-width: 130px;
            flex-shrink: 0;
            padding: 14px 10px;
          }
          .ekosys-trust-badge:not(:last-child)::after {
            display: none;
          }
        }
      `}</style>

      <section
        aria-label="Trust indicators"
        style={{
          background: '#f8fafc',
          borderRadius: 12,
          padding: '4px 0',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          border: '1px solid #e2e8f0',
        }}
      >
        <div className="ekosys-trust-strip" role="list">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="ekosys-trust-badge"
              role="listitem"
            >
              <span
                style={{
                  fontSize: 28,
                  lineHeight: 1,
                }}
                aria-hidden="true"
              >
                {badge.icon}
              </span>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#1e293b',
                  textAlign: 'center',
                  lineHeight: 1.3,
                  letterSpacing: 0.2,
                }}
              >
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TrustBadges;
