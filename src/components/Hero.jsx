import { useState, useEffect } from "react";
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

// --- Breakpoint hook: 'mobile' < 640, 'tablet' 640-1023, 'desktop' >= 1024 ---
function useBreakpoint() {
  const getBp = () => {
    if (typeof window === "undefined") return "desktop";
    const w = window.innerWidth;
    if (w < 640) return "mobile";
    if (w < 1024) return "tablet";
    return "desktop";
  };

  const [bp, setBp] = useState(getBp);

  useEffect(() => {
    const onResize = () => setBp(getBp());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return bp;
}

function Hero() {
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";
  const isTablet = bp === "tablet";
  const isDesktop = bp === "desktop";

  // Values that change per breakpoint. Desktop numbers are UNCHANGED from
  // the original "perfect" version.
  const sectionMinHeight = isMobile ? "auto" : isTablet ? "600px" : "650px";
  const contentWidth = isMobile ? "100%" : isTablet ? "80%" : "46%";
  const contentMarginLeft = isMobile ? "0" : isTablet ? "8%" : "9%";
  const contentMaxWidth = isMobile ? "480px" : isTablet ? "520px" : "650px";
  const contentPadding = isMobile ? "48px 24px" : isTablet ? "56px 0" : "64px 0";
  const contentAlign = isMobile ? "center" : "flex-start";
  const textAlign = isMobile ? "center" : "left";

  const overlayBackground = isMobile
    ? `${CREAM}B3` // solid-ish cream so text stays readable over the photo
    : isTablet
    ? `linear-gradient(to right, ${CREAM}59, ${CREAM}1A 65%, transparent)`
    : `linear-gradient(to right, ${CREAM}33, transparent 60%)`;

  const eyebrowFontSize = isMobile ? "8px" : isTablet ? "9px" : "10px";
  const eyebrowTracking = isMobile ? "0.22em" : "0.32em";
  const eyebrowGap = isMobile ? "8px" : "16px";
  const eyebrowLineWidth = isMobile ? "0" : isTablet ? "70px" : "105px";

  const h1Size = isMobile ? "34px" : isTablet ? "46px" : "58px";
  const h2Size = isMobile ? "28px" : isTablet ? "38px" : "48px";
  const headingWhiteSpace = isMobile ? "normal" : "nowrap";

  const dividerLineWidth = isMobile ? "70px" : isTablet ? "120px" : "160px";
  const dividerGap = isMobile ? "12px" : "20px";
  const dividerMarginTop = isMobile ? "20px" : "28px";

  const descFontSize = isMobile ? "14px" : isTablet ? "15px" : "16px";
  const descLineHeight = isMobile ? "22px" : isTablet ? "26px" : "28px";
  const descMarginTop = isMobile ? "16px" : "24px";

  const buttonsMarginTop = isMobile ? "20px" : "28px";
  const buttonsDirection = isMobile ? "column" : "row";
  const buttonsGap = isMobile ? "16px" : "32px";
  const buttonsAlign = isMobile ? "stretch" : "center";

  const primaryBtnHeight = isMobile ? "54px" : isTablet ? "60px" : "68px";
  const primaryBtnPadding = isMobile ? "0 24px" : isTablet ? "0 30px" : "0 36px";
  const primaryBtnFontSize = isMobile ? "9px" : isTablet ? "9px" : "10px";
  const primaryBtnGap = isMobile ? "16px" : isTablet ? "24px" : "28px";
  const primaryBtnJustify = isMobile ? "space-between" : "flex-start";

  const secondaryBtnAlign = isMobile ? "center" : "flex-start";
  const secondaryBtnDisplay = isMobile ? "inline-block" : "block";

  const featuresMarginTop = isMobile ? "28px" : "40px";
  const featuresDirection = isMobile ? "column" : "row";
  const featuresAlign = isMobile ? "stretch" : "center";
  const featuresGap = isMobile ? "16px" : "0";
  const featureItemJustify = isMobile ? "center" : "flex-start";
  const featureDividerDisplay = isMobile ? "none" : "block";

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: sectionMinHeight,
        overflow: "hidden",
        backgroundColor: CREAM,
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: isMobile ? "center 30%" : "center center",
      }}
    >
      {/* OVERLAY — solid on mobile (image is behind full stacked content),
          gradient on tablet/desktop (image visible on the right) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: overlayBackground,
        }}
      />

      {/* CONTENT WRAPPER */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          minHeight: sectionMinHeight,
          width: "100%",
        }}
      >
        <div
          style={{
            marginLeft: contentMarginLeft,
            marginRight: isMobile ? "auto" : "0",
            width: contentWidth,
            maxWidth: contentMaxWidth,
            padding: contentPadding,
            display: "flex",
            flexDirection: "column",
            alignItems: contentAlign,
            textAlign: textAlign,
          }}
        >
          {/* TOP LABEL */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: isMobile ? "center" : "flex-start",
              gap: eyebrowGap,
              marginBottom: isMobile ? "16px" : "24px",
              width: "100%",
            }}
          >
            <span
              style={{
                whiteSpace: "nowrap",
                fontSize: eyebrowFontSize,
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: eyebrowTracking,
                color: NAVY,
              }}
            >
              Est. 1965
            </span>
            <span style={{ fontSize: eyebrowFontSize, color: GOLD }}>|</span>
            <span
              style={{
                whiteSpace: "nowrap",
                fontSize: eyebrowFontSize,
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: eyebrowTracking,
                color: NAVY,
              }}
            >
              Handcrafted Gold
            </span>
            {!isMobile && (
              <span
                style={{
                  marginLeft: "4px",
                  height: "1px",
                  width: eyebrowLineWidth,
                  backgroundColor: GOLD,
                }}
              />
            )}
          </div>

          {/* HEADING */}
          <h1
            style={{
              margin: 0,
              whiteSpace: headingWhiteSpace,
              fontSize: h1Size,
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
              whiteSpace: headingWhiteSpace,
              fontSize: h2Size,
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
          <div
            style={{
              marginTop: dividerMarginTop,
              display: "flex",
              alignItems: "center",
              justifyContent: isMobile ? "center" : "flex-start",
              gap: dividerGap,
              width: "100%",
            }}
          >
            <span style={{ height: "1px", width: dividerLineWidth, backgroundColor: GOLD }} />
            <LotusIcon size={isMobile ? 16 : 20} color={GOLD} />
            <span style={{ height: "1px", width: dividerLineWidth, backgroundColor: GOLD }} />
          </div>

          {/* DESCRIPTION */}
          <p
            style={{
              marginTop: descMarginTop,
              fontSize: descFontSize,
              lineHeight: descLineHeight,
              color: BODY_TEXT,
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            Each piece hand-finished by master artisans,
            {!isMobile && <br />}
            {isMobile ? " " : ""}built to outlast trends and become family history.
          </p>

          {/* BUTTONS */}
          <div
            style={{
              marginTop: buttonsMarginTop,
              display: "flex",
              flexDirection: buttonsDirection,
              alignItems: buttonsAlign,
              gap: buttonsGap,
              width: isMobile ? "100%" : "auto",
            }}
          >
            <button
              type="button"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: primaryBtnJustify,
                gap: primaryBtnGap,
                height: primaryBtnHeight,
                width: isMobile ? "100%" : "auto",
                backgroundColor: NAVY,
                padding: primaryBtnPadding,
                fontSize: primaryBtnFontSize,
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
              <span style={{ fontSize: isMobile ? "18px" : "25px", fontWeight: 300, color: GOLD }}>
                →
              </span>
            </button>

            <button
              type="button"
              style={{
                display: secondaryBtnDisplay,
                alignSelf: secondaryBtnAlign,
                background: "none",
                border: "none",
                borderBottom: `1px solid ${GOLD}`,
                paddingBottom: "8px",
                fontSize: isMobile ? "10px" : "11px",
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
              marginTop: featuresMarginTop,
              display: "flex",
              flexDirection: featuresDirection,
              alignItems: featuresAlign,
              gap: featuresGap,
              borderTop: `1px solid ${GOLD}99`,
              paddingTop: "20px",
              width: "100%",
            }}
          >
            {/* TRADITIONAL CRAFTSMANSHIP */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: featureItemJustify,
                gap: "12px",
                paddingRight: isMobile ? 0 : "24px",
              }}
            >
              <LotusIcon size={isMobile ? 20 : 24} color={GOLD} />
              <div style={{ textAlign: "left" }}>
                <p style={{ margin: 0, fontSize: "8px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.18em", color: NAVY }}>
                  Hand
                </p>
                <p style={{ margin: "4px 0 0", fontSize: "8px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.18em", color: NAVY }}>
                  Finished
                </p>
              </div>
            </div>

            <span
              style={{
                display: featureDividerDisplay,
                height: "40px",
                width: "1px",
                backgroundColor: `${GOLD}B3`,
              }}
            />

            {/* TIMELESS DESIGNS */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: featureItemJustify,
                gap: "12px",
                padding: isMobile ? 0 : "0 24px",
              }}
            >
              <DiamondIcon size={isMobile ? 20 : 24} color={GOLD} />
              <div style={{ textAlign: "left" }}>
                <p style={{ margin: 0, fontSize: "8px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.18em", color: NAVY }}>
                  Certified
                </p>
                <p style={{ margin: "4px 0 0", fontSize: "8px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.18em", color: NAVY }}>
                  22K Gold
                </p>
              </div>
            </div>

            <span
              style={{
                display: featureDividerDisplay,
                height: "40px",
                width: "1px",
                backgroundColor: `${GOLD}B3`,
              }}
            />

            {/* TRUSTED SINCE 1965 */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: featureItemJustify,
                gap: "12px",
                paddingLeft: isMobile ? 0 : "24px",
              }}
            >
              <TrustIcon size={isMobile ? 20 : 24} color={GOLD} />
              <div style={{ textAlign: "left" }}>
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