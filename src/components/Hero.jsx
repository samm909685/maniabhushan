import heroBackground from "../assets/images/hero.png";

// --- Inline icon components (outline style, currentColor) ---

function LotusIcon({ size = 20, color = "#BA8C5B" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.2">
      <path d="M12 21c-4-1-6-4-6-7 3 0 5 1.2 6 3 1-1.8 3-3 6-3 0 3-2 6-6 7Z" />
      <path d="M12 17c-2.8-1-4.2-3.4-4-6.2 2.4.2 4 1.6 4 3.5 0-1.9 1.6-3.3 4-3.5.2 2.8-1.2 5.2-4 6.2Z" />
      <path d="M12 13.5c-1.6-1-2.4-2.6-2.1-4.6 1.7.3 2.8 1.4 2.8 2.9 0-1.5 1.1-2.6 2.8-2.9.3 2-.5 3.6-2.1 4.6Z" />
      <path d="M4 21h16" />
    </svg>
  );
}

function DiamondIcon({ size = 20, color = "#BA8C5B" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.2">
      <path d="M6.5 4h11L21 9l-9 11L3 9l3.5-5Z" />
      <path d="M3 9h18" />
      <path d="M9 4l-2 5 5 11 5-11-2-5" />
    </svg>
  );
}

function TrustIcon({ size = 20, color = "#BA8C5B" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.2">
      <circle cx="9" cy="8" r="2.5" />
      <circle cx="16" cy="9" r="2" />
      <path d="M4 19c0-3 2.2-5 5-5s5 2 5 5" />
      <path d="M14 14.5c2.2.2 3.8 1.9 3.8 4.5" />
    </svg>
  );
}

const NAVY = "#062D3E";
const GOLD = "#BA8C5B";
const CREAM = "#FFF8EA";
const BODY_TEXT = "#183B49";

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "650px",
        overflow: "hidden",
        backgroundColor: CREAM,
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      {/* LIGHT OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(to right, ${CREAM}33, transparent 60%)`,
        }}
      />

      {/* CONTENT WRAPPER */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          minHeight: "650px",
          width: "100%",
        }}
      >
        <div
          style={{
            marginLeft: "9%",
            width: "46%",
            maxWidth: "650px",
            padding: "64px 0",
          }}
        >
          {/* TOP LABEL */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
            <span
              style={{
                whiteSpace: "nowrap",
                fontSize: "10px",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.32em",
                color: NAVY,
              }}
            >
              Est. 1965
            </span>
            <span style={{ fontSize: "10px", color: GOLD }}>|</span>
            <span
              style={{
                whiteSpace: "nowrap",
                fontSize: "10px",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.32em",
                color: NAVY,
              }}
            >
              Handcrafted Gold
            </span>
            <span style={{ marginLeft: "4px", height: "1px", width: "105px", backgroundColor: GOLD }} />
          </div>

          {/* HEADING */}
          <h1
            style={{
              margin: 0,
              whiteSpace: "nowrap",
              fontSize: "58px",
              fontWeight: 400,
              lineHeight: 0.98,
              letterSpacing: "-0.025em",
              color: NAVY,
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            Heirlooms
          </h1>

          <h2
            style={{
              margin: 0,
              whiteSpace: "nowrap",
              fontSize: "48px",
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: GOLD,
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            Worth Passing On
          </h2>

          {/* DECORATIVE LINE */}
          <div style={{ marginTop: "28px", display: "flex", alignItems: "center", gap: "20px" }}>
            <span style={{ height: "1px", width: "160px", backgroundColor: GOLD }} />
            <LotusIcon size={20} color={GOLD} />
            <span style={{ height: "1px", width: "160px", backgroundColor: GOLD }} />
          </div>

          {/* DESCRIPTION */}
          <p
            style={{
              marginTop: "24px",
              fontSize: "16px",
              lineHeight: "28px",
              color: BODY_TEXT,
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            Each piece hand-finished by master artisans,
            <br />
            built to outlast trends and become family history.
          </p>

          {/* BUTTONS */}
          <div style={{ marginTop: "28px", display: "flex", alignItems: "center", gap: "32px" }}>
            <button
              type="button"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "28px",
                height: "68px",
                backgroundColor: NAVY,
                padding: "0 36px",
                fontSize: "10px",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.24em",
                color: CREAM,
                border: "none",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0A4054")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = NAVY)}
            >
              <span>Shop The Collection</span>
              <span style={{ fontSize: "25px", fontWeight: 300, color: GOLD }}>→</span>
            </button>

            <button
              type="button"
              style={{
                background: "none",
                border: "none",
                borderBottom: `1px solid ${GOLD}`,
                paddingBottom: "8px",
                fontSize: "11px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.25em",
                color: NAVY,
                cursor: "pointer",
              }}
            >
              Meet Our Artisans
            </button>
          </div>

          {/* FEATURES */}
          <div
            style={{
              marginTop: "40px",
              display: "flex",
              alignItems: "center",
              borderTop: `1px solid ${GOLD}99`,
              paddingTop: "20px",
            }}
          >
            {/* TRADITIONAL CRAFTSMANSHIP */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingRight: "24px" }}>
              <LotusIcon size={24} color={GOLD} />
              <div>
                <p style={{ margin: 0, fontSize: "8px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.18em", color: NAVY }}>
                  Hand
                </p>
                <p style={{ margin: "4px 0 0", fontSize: "8px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.18em", color: NAVY }}>
                  Finished
                </p>
              </div>
            </div>

            <span style={{ height: "40px", width: "1px", backgroundColor: `${GOLD}B3` }} />

            {/* TIMELESS DESIGNS */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "0 24px" }}>
              <DiamondIcon size={24} color={GOLD} />
              <div>
                <p style={{ margin: 0, fontSize: "8px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.18em", color: NAVY }}>
                  Certified
                </p>
                <p style={{ margin: "4px 0 0", fontSize: "8px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.18em", color: NAVY }}>
                  22K Gold
                </p>
              </div>
            </div>

            <span style={{ height: "40px", width: "1px", backgroundColor: `${GOLD}B3` }} />

            {/* TRUSTED SINCE 1965 */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingLeft: "24px" }}>
              <TrustIcon size={24} color={GOLD} />
              <div>
                <p style={{ margin: 0, fontSize: "8px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.18em", color: NAVY }}>
                  Free
                </p>
                <p style={{ margin: "4px 0 0", fontSize: "8px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.18em", color: NAVY }}>
                  Lifetime Care
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;