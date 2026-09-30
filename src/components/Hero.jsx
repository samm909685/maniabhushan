import heroBackground from "../assets/images/hero.png";
import heroMobileBackground from "../assets/images/hero-mobile.png";

// =====================================================
// INLINE ICONS
// =====================================================

function LotusIcon({ size = 20, color = "#BA8C5B" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.2"
    >
      <path d="M12 21c-4-1-6-4-6-7 3 0 5 1.2 6 3 1-1.8 3-3 6-3 0 3-2 6-6 7Z" />
      <path d="M12 17c-2.8-1-4.2-3.4-4-6.2 2.4.2 4 1.6 4 3.5 0-1.9 1.6-3.3 4-3.5.2 2.8-1.2 5.2-4 6.2Z" />
      <path d="M12 13.5c-1.6-1-2.4-2.6-2.1-4.6 1.7.3 2.8 1.4 2.8 2.9 0-1.5 1.1-2.6 2.8-2.9.3 2-.5 3.6-2.1 4.6Z" />
      <path d="M4 21h16" />
    </svg>
  );
}

function DiamondIcon({ size = 20, color = "#BA8C5B" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.2"
    >
      <path d="M6.5 4h11L21 9l-9 11L3 9l3.5-5Z" />
      <path d="M3 9h18" />
      <path d="M9 4l-2 5 5 11 5-11-2-5" />
    </svg>
  );
}

function TrustIcon({ size = 20, color = "#BA8C5B" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.2"
    >
      <circle cx="9" cy="8" r="2.5" />
      <circle cx="16" cy="9" r="2" />
      <path d="M4 19c0-3 2.2-5 5-5s5 2 5 5" />
      <path d="M14 14.5c2.2.2 3.8 1.9 3.8 4.5" />
    </svg>
  );
}


// =====================================================
// COLORS
// =====================================================

const NAVY = "#062D3E";
const GOLD = "#BA8C5B";
const CREAM = "#FFF8EA";
const BODY_TEXT = "#183B49";


// =====================================================
// HERO
// =====================================================

function Hero() {
  return (
    <section className="maniabhushan-hero">

      {/* =================================================
          LIGHT OVERLAY
      ================================================= */}

      <div className="hero-light-overlay" />


      {/* =================================================
          CONTENT WRAPPER
      ================================================= */}

      <div className="hero-content-wrapper">

        <div className="hero-content">

          {/* =================================================
              TOP LABEL
          ================================================= */}

          <div className="hero-top-label">

            <span>
              Est. 1965
            </span>

            <span className="hero-label-divider">
              |
            </span>

            <span>
              Handcrafted Gold
            </span>

            <span className="hero-top-line" />

          </div>


          {/* =================================================
              HEADING
          ================================================= */}

          <h1 className="hero-title-main">
            Heirlooms
          </h1>

          <h2 className="hero-title-sub">
            Worth Passing On
          </h2>


          {/* =================================================
              DECORATIVE LINE
          ================================================= */}

          <div className="hero-divider">

            <span className="hero-divider-line" />

            <LotusIcon
              size={20}
              color={GOLD}
            />

            <span className="hero-divider-line" />

          </div>


          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p className="hero-description">

            Each piece hand-finished by master artisans,

            <br className="hero-description-break" />

            built to outlast trends and become family history.

          </p>


          {/* =================================================
              BUTTONS
          ================================================= */}

          <div className="hero-buttons">

            <button
              type="button"
              className="hero-shop-button"
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "#0A4054")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  NAVY)
              }
            >

              <span>
                Shop The Collection
              </span>

              <span className="hero-shop-arrow">
                →
              </span>

            </button>


            <button
              type="button"
              className="hero-artisan-button"
            >
              Meet Our Artisans
            </button>

          </div>


          {/* =================================================
              FEATURES
          ================================================= */}

          <div className="hero-features">

            {/* FEATURE 1 */}

            <div className="hero-feature hero-feature-one">

              <LotusIcon
                size={24}
                color={GOLD}
              />

              <div>

                <p>
                  Hand
                </p>

                <p>
                  Finished
                </p>

              </div>

            </div>


            <span className="hero-feature-divider" />


            {/* FEATURE 2 */}

            <div className="hero-feature hero-feature-two">

              <DiamondIcon
                size={24}
                color={GOLD}
              />

              <div>

                <p>
                  Certified
                </p>

                <p>
                  22K Gold
                </p>

              </div>

            </div>


            <span className="hero-feature-divider" />


            {/* FEATURE 3 */}

            <div className="hero-feature hero-feature-three">

              <TrustIcon
                size={24}
                color={GOLD}
              />

              <div>

                <p>
                  Free
                </p>

                <p>
                  Lifetime Care
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          STYLES
      ===================================================== */}

      <style>{`

        /* =================================================
           DESKTOP / LAPTOP

           THESE VALUES MATCH YOUR CURRENT HERO.
           DO NOT CHANGE.
        ================================================= */

        .maniabhushan-hero {
          position: relative;

          width: 100%;

          min-height: 650px;

          overflow: hidden;

          background-color: ${CREAM};

          background-image:
            url(${heroBackground});

          background-size: cover;

          background-position:
            center center;
        }


        /* =================================================
           OVERLAY
        ================================================= */

        .hero-light-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              to right,
              ${CREAM}33,
              transparent 60%
            );
        }


        /* =================================================
           CONTENT WRAPPER
        ================================================= */

        .hero-content-wrapper {
          position: relative;

          z-index: 10;

          display: flex;

          align-items: center;

          min-height: 650px;

          width: 100%;
        }


        /* =================================================
           CONTENT

           DESKTOP VALUES UNCHANGED
        ================================================= */

        .hero-content {
          margin-left: 9%;

          width: 46%;

          max-width: 650px;

          padding: 64px 0;
        }


        /* =================================================
           TOP LABEL
        ================================================= */

        .hero-top-label {
          display: flex;

          align-items: center;

          gap: 16px;

          margin-bottom: 24px;
        }

        .hero-top-label > span {
          white-space: nowrap;

          font-size: 10px;

          font-weight: 500;

          text-transform: uppercase;

          letter-spacing: 0.32em;

          color: ${NAVY};
        }

        .hero-label-divider {
          font-size: 10px !important;

          color: ${GOLD} !important;
        }

        .hero-top-line {
          margin-left: 4px;

          height: 1px;

          width: 105px;

          background-color: ${GOLD};
        }


        /* =================================================
           MAIN HEADING
        ================================================= */

        .hero-title-main {
          margin: 0;

          white-space: nowrap;

          font-size: 58px;

          font-weight: 400;

          line-height: 0.98;

          letter-spacing: -0.025em;

          color: ${NAVY};

          font-family:
            Georgia,
            "Times New Roman",
            serif;
        }

        .hero-title-sub {
          margin: 0;

          white-space: nowrap;

          font-size: 48px;

          font-weight: 400;

          line-height: 1.05;

          letter-spacing: -0.02em;

          color: ${GOLD};

          font-family:
            Georgia,
            "Times New Roman",
            serif;
        }


        /* =================================================
           DECORATIVE DIVIDER
        ================================================= */

        .hero-divider {
          margin-top: 28px;

          display: flex;

          align-items: center;

          gap: 20px;
        }

        .hero-divider-line {
          height: 1px;

          width: 160px;

          background-color: ${GOLD};
        }


        /* =================================================
           DESCRIPTION
        ================================================= */

        .hero-description {
          margin-top: 24px;

          font-size: 16px;

          line-height: 28px;

          color: ${BODY_TEXT};

          font-family:
            Georgia,
            "Times New Roman",
            serif;
        }


        /* =================================================
           BUTTONS
        ================================================= */

        .hero-buttons {
          margin-top: 28px;

          display: flex;

          align-items: center;

          gap: 32px;
        }

        .hero-shop-button {
          display: flex;

          align-items: center;

          gap: 28px;

          height: 68px;

          background-color: ${NAVY};

          padding: 0 36px;

          font-size: 10px;

          font-weight: 500;

          text-transform: uppercase;

          letter-spacing: 0.24em;

          color: ${CREAM};

          border: none;

          cursor: pointer;

          transition:
            background-color 0.3s;
        }

        .hero-shop-arrow {
          font-size: 25px;

          font-weight: 300;

          color: ${GOLD};
        }

        .hero-artisan-button {
          background: none;

          border: none;

          border-bottom:
            1px solid ${GOLD};

          padding-bottom: 8px;

          font-size: 11px;

          font-weight: 600;

          text-transform: uppercase;

          letter-spacing: 0.25em;

          color: ${NAVY};

          cursor: pointer;
        }


        /* =================================================
           FEATURES
        ================================================= */

        .hero-features {
          margin-top: 40px;

          display: flex;

          align-items: center;

          border-top:
            1px solid ${GOLD}99;

          padding-top: 20px;
        }

        .hero-feature {
          display: flex;

          align-items: center;

          gap: 12px;
        }

        .hero-feature-one {
          padding-right: 24px;
        }

        .hero-feature-two {
          padding:
            0 24px;
        }

        .hero-feature-three {
          padding-left: 24px;
        }

        .hero-feature-divider {
          height: 40px;

          width: 1px;

          background-color:
            ${GOLD}B3;
        }

        .hero-feature p {
          margin: 0;

          font-size: 8px;

          font-weight: 500;

          text-transform: uppercase;

          letter-spacing: 0.18em;

          color: ${NAVY};
        }

        .hero-feature p + p {
          margin-top: 4px;
        }


        /* =================================================
           TABLET
           641px - 900px
        ================================================= */

        @media (max-width: 900px) {

          .maniabhushan-hero {
            min-height:
              620px;

            background-position:
              center center;
          }

          .hero-content-wrapper {
            min-height:
              620px;

            align-items:
              center;
          }

          .hero-content {
            width:
              62%;

            max-width:
              560px;

            margin-left:
              7%;

            padding:
              48px 0;
          }


          /* TOP LABEL */

          .hero-top-label {
            gap:
              11px;

            margin-bottom:
              19px;
          }

          .hero-top-label > span {
            font-size:
              8px;

            letter-spacing:
              0.24em;
          }

          .hero-top-line {
            width:
              65px;
          }


          /* HEADING */

          .hero-title-main {
            font-size:
              48px;
          }

          .hero-title-sub {
            font-size:
              39px;
          }


          /* DIVIDER */

          .hero-divider {
            margin-top:
              22px;

            gap:
              13px;
          }

          .hero-divider-line {
            width:
              110px;
          }


          /* DESCRIPTION */

          .hero-description {
            margin-top:
              19px;

            font-size:
              14px;

            line-height:
              24px;
          }


          /* BUTTONS */

          .hero-buttons {
            margin-top:
              23px;

            gap:
              22px;
          }

          .hero-shop-button {
            height:
              60px;

            padding:
              0 28px;

            gap:
              20px;

            font-size:
              8px;
          }

          .hero-shop-arrow {
            font-size:
              22px;
          }

          .hero-artisan-button {
            font-size:
              9px;
          }


          /* FEATURES */

          .hero-features {
            margin-top:
              31px;

            padding-top:
              16px;
          }

          .hero-feature {
            gap:
              8px;
          }

          .hero-feature-one {
            padding-right:
              14px;
          }

          .hero-feature-two {
            padding:
              0 14px;
          }

          .hero-feature-three {
            padding-left:
              14px;
          }

          .hero-feature-divider {
            height:
              34px;
          }

          .hero-feature svg {
            width:
              21px;

            height:
              21px;
          }

          .hero-feature p {
            font-size:
              7px;

            letter-spacing:
              0.14em;
          }

        }


        /* =================================================
           MOBILE
           320px - 640px

           SHORTER RECTANGULAR HERO
        ================================================= */

        @media (max-width: 640px) {

          .maniabhushan-hero {
            min-height:
              calc(100svh - 72px);

            background-image:
              url(${heroMobileBackground});

            background-position:
              center center;

            background-size:
              cover;
          }


          /* OVERLAY */

          .hero-light-overlay {
            background:
              linear-gradient(
                to bottom,
                rgba(
                  255,
                  248,
                  234,
                  0.78
                ) 0%,

                rgba(
                  255,
                  248,
                  234,
                  0.48
                ) 42%,

                rgba(
                  255,
                  248,
                  234,
                  0.08
                ) 100%
              );
          }


          /* CONTENT WRAPPER */

          .hero-content-wrapper {
            min-height:
              calc(100svh - 72px);

            align-items:
              flex-start;
          }


          /* CONTENT */

          .hero-content {
            width:
              calc(100% - 32px);

            max-width:
              none;

            margin-left:
              16px;

            margin-right:
              16px;

            padding:
              140px 0 28px;
          }


          /* TOP LABEL */

          .hero-top-label {
            display:
              flex;

            flex-wrap:
              wrap;

            gap:
              7px;

            margin-bottom:
              16px;
          }

          .hero-top-label > span {
            font-size:
              7px;

            letter-spacing:
              0.19em;
          }

          .hero-top-line {
            width:
              48px;

            margin-left:
              2px;
          }


          /* HEADING */

          .hero-title-main {
            white-space:
              normal;

            font-size:
              43px;

            line-height:
              0.98;
          }

          .hero-title-sub {
            white-space:
              normal;

            max-width:
              330px;

            font-size:
              30px;

            line-height:
              1.05;
          }


          /* DIVIDER */

          .hero-divider {
            margin-top:
              18px;

            gap:
              9px;
          }

          .hero-divider-line {
            width:
              min(
                82px,
                24vw
              );
          }


          /* DESCRIPTION */

          .hero-description {
            margin-top:
              17px;

            max-width:
              390px;

            font-size:
              12px;

            line-height:
              19px;
          }

          .hero-description-break {
            display:
              none;
          }


          /* BUTTONS */

          .hero-buttons {
            margin-top:
              20px;

            display:
              flex;

            flex-direction:
              column;

            align-items:
              flex-start;

            gap:
              13px;
          }

          .hero-shop-button {
            width:
              100%;

            max-width:
              285px;

            height:
              50px;

            justify-content:
              space-between;

            padding:
              0 18px;

            gap:
              12px;

            font-size:
              7px;

            letter-spacing:
              0.17em;
          }

          .hero-shop-arrow {
            font-size:
              19px;
          }

          .hero-artisan-button {
            margin-left:
              1px;

            font-size:
              8px;

            padding-bottom:
              5px;
          }


          /* =================================================
             FEATURES

             3 COLUMN MOBILE STRIP
          ================================================= */

          .hero-features {
            width:
              100%;

            margin-top:
              21px;

            padding-top:
              12px;

            display:
              grid;

            grid-template-columns:
              repeat(3, 1fr);

            align-items:
              stretch;
          }

          .hero-feature {
            min-width:
              0;

            justify-content:
              center;

            gap:
              4px;
          }

          .hero-feature-one {
            padding-right:
              5px;
          }

          .hero-feature-two {
            padding:
              0 5px;
          }

          .hero-feature-three {
            padding-left:
              5px;
          }

          .hero-feature-divider {
            display:
              none;
          }

          .hero-feature svg {
            width:
              16px;

            height:
              16px;

            flex-shrink:
              0;
          }

          .hero-feature p {
            font-size:
              5.5px;

            line-height:
              1.4;

            letter-spacing:
              0.08em;
          }

        }


        /* =================================================
           SMALL MOBILE
           320px - 420px
        ================================================= */

        @media (max-width: 420px) {

          .maniabhushan-hero {
            min-height:
              calc(100svh - 68px);

            background-position:
              center center;
          }

          .hero-content-wrapper {
            min-height:
              calc(100svh - 68px);
          }

          .hero-content {
            width:
              calc(100% - 26px);

            margin-left:
              13px;

            margin-right:
              13px;

            padding-top:
              120px;
          }


          /* TOP LABEL */

          .hero-top-label {
            gap:
              5px;

            margin-bottom:
              13px;
          }

          .hero-top-label > span {
            font-size:
              6.5px;

            letter-spacing:
              0.15em;
          }

          .hero-top-line {
            width:
              35px;
          }


          /* HEADING */

          .hero-title-main {
            font-size:
              43px;
          }

          .hero-title-sub {
            font-size:
              30px;

            max-width:
              285px;
          }


          /* DIVIDER */

          .hero-divider {
            margin-top:
              15px;

            gap:
              7px;
          }

          .hero-divider-line {
            width:
              60px;
          }


          /* DESCRIPTION */

          .hero-description {
            margin-top:
              17px;

            font-size:
              12px;

            line-height:
              19px;
          }


          /* BUTTON */

          .hero-buttons {
            margin-top:
              20px;

            gap:
              10px;
          }

          .hero-shop-button {
            max-width:
              285px;

            height:
              50px;

            font-size:
              7px;
          }


          /* FEATURES */

          .hero-features {
            margin-top:
              24px;

            padding-top:
              12px;
          }

          .hero-feature {
            gap:
              3px;
          }

          .hero-feature-one {
            padding-right:
              3px;
          }

          .hero-feature-two {
            padding:
              0 3px;
          }

          .hero-feature-three {
            padding-left:
              3px;
          }

          .hero-feature svg {
            width:
              16px;

            height:
              16px;
          }

          .hero-feature p {
            font-size:
              5.5px;

            letter-spacing:
              0.08em;
          }

        }

        /* =====================================================
   MANIABHUSHAN HERO - PREMIUM MOTION
   ===================================================== */

/* -----------------------------------------------------
   BACKGROUND MOTION
----------------------------------------------------- */

.maniabhushan-hero {
  animation: heroBackgroundReveal 1.6s ease-out both;
}

@keyframes heroBackgroundReveal {
  from {
    opacity: 0;
    background-size: 104%;
  }

  to {
    opacity: 1;
    background-size: cover;
  }
}


/* -----------------------------------------------------
   LIGHT OVERLAY
----------------------------------------------------- */

.hero-light-overlay {
  animation:
    heroOverlayReveal 1.4s ease-out 0.15s both;
}

@keyframes heroOverlayReveal {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}


/* -----------------------------------------------------
   CONTENT
----------------------------------------------------- */

.hero-content {
  animation:
    heroContentReveal 1s cubic-bezier(0.22, 1, 0.36, 1)
    0.25s both;
}

@keyframes heroContentReveal {
  from {
    opacity: 0;
    transform: translateY(28px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}


/* -----------------------------------------------------
   TOP LABEL
----------------------------------------------------- */

.hero-top-label {
  animation:
    heroFadeUp 0.8s ease-out 0.45s both;
}


/* -----------------------------------------------------
   MAIN TITLE
----------------------------------------------------- */

.hero-title-main {
  animation:
    heroTitleReveal 0.9s cubic-bezier(0.22, 1, 0.36, 1)
    0.55s both;
}

.hero-title-sub {
  animation:
    heroTitleReveal 0.9s cubic-bezier(0.22, 1, 0.36, 1)
    0.68s both;
}

@keyframes heroTitleReveal {
  from {
    opacity: 0;
    transform: translateY(24px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}


/* -----------------------------------------------------
   DIVIDER
----------------------------------------------------- */

.hero-divider {
  animation:
    heroDividerReveal 0.9s ease-out 0.85s both;
}

@keyframes heroDividerReveal {
  from {
    opacity: 0;
    transform: scaleX(0.5);
  }

  to {
    opacity: 1;
    transform: scaleX(1);
  }
}


/* -----------------------------------------------------
   DESCRIPTION
----------------------------------------------------- */

.hero-description {
  animation:
    heroFadeUp 0.8s ease-out 1s both;
}

@keyframes heroFadeUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}


/* -----------------------------------------------------
   BUTTONS
----------------------------------------------------- */

.hero-buttons {
  animation:
    heroFadeUp 0.8s ease-out 1.12s both;
}


/* SHOP BUTTON
----------------------------------------------------- */

.hero-shop-button {
  position: relative;
  overflow: hidden;

  transition:
    background-color 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.hero-shop-button::before {
  content: "";

  position: absolute;

  top: 0;
  left: -120%;

  width: 80%;
  height: 100%;

  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.12),
      transparent
    );

  transform: skewX(-20deg);

  transition:
    left 0.65s ease;
}

.hero-shop-button:hover::before {
  left: 140%;
}

.hero-shop-button:hover {
  transform: translateY(-2px);

  box-shadow:
    0 10px 28px rgba(6, 45, 62, 0.18);
}

.hero-shop-arrow {
  display: inline-block;

  transition:
    transform 0.3s ease;
}

.hero-shop-button:hover .hero-shop-arrow {
  transform: translateX(5px);
}


/* -----------------------------------------------------
   ARTISAN BUTTON
----------------------------------------------------- */

.hero-artisan-button {
  position: relative;

  transition:
    color 0.3s ease;
}

.hero-artisan-button::after {
  content: "";

  position: absolute;

  left: 0;
  bottom: -1px;

  width: 0;
  height: 1px;

  background: #062D3E;

  transition:
    width 0.35s ease;
}

.hero-artisan-button:hover::after {
  width: 100%;
}


/* -----------------------------------------------------
   FEATURES
----------------------------------------------------- */

.hero-features {
  animation:
    heroFeaturesReveal 1s ease-out 1.3s both;
}

@keyframes heroFeaturesReveal {
  from {
    opacity: 0;
    transform: translateY(18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}


/* -----------------------------------------------------
   INDIVIDUAL FEATURE ANIMATION
----------------------------------------------------- */

.hero-feature {
  transition:
    transform 0.3s ease;
}

.hero-feature:hover {
  transform: translateY(-3px);
}

.hero-feature svg {
  transition:
    transform 0.35s ease;
}

.hero-feature:hover svg {
  transform:
    translateY(-2px)
    scale(1.08);
}


/* -----------------------------------------------------
   RESPECT REDUCED MOTION
----------------------------------------------------- */

@media (prefers-reduced-motion: reduce) {

  .maniabhushan-hero,
  .hero-light-overlay,
  .hero-content,
  .hero-top-label,
  .hero-title-main,
  .hero-title-sub,
  .hero-divider,
  .hero-description,
  .hero-buttons,
  .hero-features {
    animation: none !important;
  }

  .hero-shop-button,
  .hero-artisan-button,
  .hero-feature,
  .hero-feature svg {
    transition: none !important;
  }

}

      `}</style>
    </section>
  );
}

export default Hero;