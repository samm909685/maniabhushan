import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import goldCategory from "../assets/images/goldcategory.png";
import silverCategory from "../assets/images/silvercategory.png";

const GOLD = "#BA8C5B";
const NAVY = "#062D3E";
const CREAM = "#FFF8EA";

const collections = [
  {
    name: "Gold",
    subtitle: "Timeless Indian Craft",
    description:
      "Traditional gold jewellery shaped by heritage and generations of craftsmanship.",
    image: goldCategory,
    path: "/collections/gold",
  },
  {
    name: "Silver",
    subtitle: "Heritage in Silver",
    description:
      "Distinctive silver jewellery inspired by Indian artistry and tradition.",
    image: silverCategory,
    path: "/collections/silver",
  },
];

function Collections() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const revealElements = section.querySelectorAll(
      ".collections-heading, .collection-card"
    );

    const observers = [];

    revealElements.forEach((element) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            element.classList.add("collections-revealed");

            observer.unobserve(element);
          }
        },
        {
          threshold: 0.2,
          rootMargin: "0px 0px -8% 0px",
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="collections-section"
      style={{
        backgroundColor: CREAM,
        color: NAVY,
      }}
    >
      <div className="collections-container">

        {/* =========================
            HEADING
        ========================== */}

        <div className="collections-heading">

          <p className="collections-eyebrow">
            Maniabhushan
          </p>

          <h2 className="collections-title">
            Our Collections
          </h2>

          <div className="collections-line" />

          <p className="collections-description">
            Jewellery rooted in Indian tradition, presented through
            two timeless expressions — gold and silver.
          </p>

        </div>

        {/* =========================
            COLLECTION CARDS
        ========================== */}

        <div className="collections-grid">

          {collections.map((collection) => (
            <Link
              key={collection.name}
              to={collection.path}
              className="collection-card"
            >

              {/* IMAGE */}

              <img
                src={collection.image}
                alt={`${collection.name} jewellery collection`}
                className="collection-image"
              />

              {/* OVERLAY */}

              <div className="collection-overlay" />

              {/* CONTENT */}

              <div className="collection-content">

                <p className="collection-subtitle">
                  {collection.subtitle}
                </p>

                <h3 className="collection-name">
                  {collection.name}
                </h3>

                <p className="collection-description">
                  {collection.description}
                </p>

                <span className="collection-link">
                  Explore Collection

                  <span className="collection-arrow">
                    →
                  </span>
                </span>

              </div>

            </Link>
          ))}

        </div>
      </div>


      {/* =====================================================
          STYLES
      ===================================================== */}

      <style>{`

        /* =====================================================
           SECTION
        ===================================================== */

        .collections-section {
          width: 100%;
          padding: 72px 0 82px;
        }


        .collections-container {
          width:
            min(
              1180px,
              calc(100% - 48px)
            );

          margin:
            0 auto;
        }


        /* =====================================================
           HEADING
        ===================================================== */

        .collections-heading {
          text-align: center;

          max-width: 680px;

          margin:
            0 auto 38px;
        }


        .collections-eyebrow {
          margin:
            0 0 10px;

          color:
            ${GOLD};

          font-size:
            10px;

          font-weight:
            600;

          letter-spacing:
            0.32em;

          text-transform:
            uppercase;
        }


        .collections-title {
          margin:
            0;

          color:
            ${NAVY};

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size:
            clamp(
              36px,
              4vw,
              52px
            );

          font-weight:
            400;

          line-height:
            1;

          letter-spacing:
            -0.025em;
        }


        .collections-line {
          width:
            52px;

          height:
            1px;

          margin:
            18px auto 16px;

          background:
            ${GOLD};
        }


        .collections-description {
          max-width:
            570px;

          margin:
            0 auto;

          color:
            #38515A;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size:
            14px;

          line-height:
            1.7;
        }


        /* =====================================================
           GRID
        ===================================================== */

        .collections-grid {
          display:
            grid;

          grid-template-columns:
            repeat(
              2,
              minmax(
                0,
                1fr
              )
            );

          gap:
            22px;
        }


        /* =====================================================
           CARD
        ===================================================== */

        .collection-card {
          position:
            relative;

          display:
            block;

          height:
            430px;

          overflow:
            hidden;

          border:
            1px solid
            rgba(
              186,
              140,
              91,
              0.35
            );

          background:
            ${NAVY};

          text-decoration:
            none;

          opacity:
            0;

          transition:
            transform 0.45s
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              ),
            border-color 0.35s ease,
            box-shadow 0.45s ease;
        }


        /* =====================================================
           IMAGE
        ===================================================== */

        .collection-image {
          position:
            absolute;

          inset:
            0;

          width:
            100%;

          height:
            100%;

          object-fit:
            cover;

          object-position:
            center;

          transform:
            scale(1.015);

          transition:
            transform 1.1s
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            );
        }


        /* =====================================================
           OVERLAY
        ===================================================== */

        .collection-overlay {
          position:
            absolute;

          inset:
            0;

          background:
            linear-gradient(
              to top,
              rgba(
                6,
                45,
                62,
                0.96
              ) 0%,

              rgba(
                6,
                45,
                62,
                0.70
              ) 30%,

              rgba(
                6,
                45,
                62,
                0.18
              ) 68%,

              rgba(
                6,
                45,
                62,
                0.02
              ) 100%
            );

          transition:
            background 0.6s ease;
        }


        /* =====================================================
           CONTENT
        ===================================================== */

        .collection-content {
          position:
            absolute;

          left:
            30px;

          right:
            30px;

          bottom:
            28px;

          z-index:
            2;

          transition:
            transform 0.45s
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            );
        }


        /* =====================================================
           SUBTITLE
        ===================================================== */

        .collection-subtitle {
          margin:
            0 0 7px;

          color:
            ${GOLD};

          font-size:
            9px;

          font-weight:
            600;

          letter-spacing:
            0.27em;

          text-transform:
            uppercase;

          transition:
            letter-spacing 0.35s ease,
            color 0.35s ease;
        }


        /* =====================================================
           NAME
        ===================================================== */

        .collection-name {
          margin:
            0;

          color:
            ${CREAM};

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size:
            42px;

          font-weight:
            400;

          line-height:
            1;

          transition:
            transform 0.4s ease,
            color 0.35s ease;
        }


        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .collection-description {
          max-width:
            410px;

          margin:
            12px 0 16px;

          color:
            rgba(
              255,
              248,
              234,
              0.84
            );

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size:
            13px;

          line-height:
            1.55;

          transition:
            transform 0.4s ease,
            opacity 0.4s ease;
        }


        /* =====================================================
           LINK
        ===================================================== */

        .collection-link {
          display:
            inline-flex;

          align-items:
            center;

          gap:
            14px;

          color:
            ${CREAM};

          font-size:
            9px;

          font-weight:
            600;

          letter-spacing:
            0.23em;

          text-transform:
            uppercase;

          transition:
            color 0.3s ease,
            gap 0.3s ease;
        }


        .collection-arrow {
          display:
            inline-block;

          color:
            ${GOLD};

          font-size:
            20px;

          font-weight:
            300;

          line-height:
            1;

          transition:
            transform 0.35s
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              ),
            color 0.3s ease;
        }


        /* =====================================================
           HOVER
        ===================================================== */

        .collection-card:hover {
          transform:
            translateY(-6px);

          border-color:
            ${GOLD};

          box-shadow:
            0 20px 45px
            rgba(
              6,
              45,
              62,
              0.16
            );
        }


        .collection-card:hover
        .collection-image {
          transform:
            scale(1.07);
        }


        .collection-card:hover
        .collection-overlay {
          background:
            linear-gradient(
              to top,
              rgba(
                6,
                45,
                62,
                0.98
              ) 0%,

              rgba(
                6,
                45,
                62,
                0.73
              ) 30%,

              rgba(
                6,
                45,
                62,
                0.20
              ) 68%,

              rgba(
                6,
                45,
                62,
                0.04
              ) 100%
            );
        }


        .collection-card:hover
        .collection-content {
          transform:
            translateY(-4px);
        }


        .collection-card:hover
        .collection-subtitle {
          letter-spacing:
            0.34em;

          color:
            #D4AF37;
        }


        .collection-card:hover
        .collection-name {
          color:
            #FFFFFF;

          transform:
            translateX(2px);
        }


        .collection-card:hover
        .collection-description {
          transform:
            translateY(-2px);
        }


        .collection-card:hover
        .collection-link {
          color:
            #FFFFFF;

          gap:
            18px;
        }


        .collection-card:hover
        .collection-arrow {
          color:
            #D4AF37;

          transform:
            translateX(6px);
        }


        /* =====================================================
           IMAGE EDGE SHINE
        ===================================================== */

        .collection-card::after {
          content:
            "";

          position:
            absolute;

          top:
            0;

          left:
            -120%;

          width:
            55%;

          height:
            100%;

          background:
            linear-gradient(
              100deg,
              transparent,
              rgba(
                255,
                255,
                255,
                0.08
              ),
              transparent
            );

          transform:
            skewX(-18deg);

          pointer-events:
            none;

          z-index:
            4;

          transition:
            left 0.9s ease;
        }


        .collection-card:hover::after {
          left:
            140%;
        }


        /* =====================================================
           ELEMENT SCROLL ANIMATION
        ===================================================== */

        .collections-heading {
          opacity:
            0;
        }


        .collections-heading.collections-revealed {
          animation:
            collectionsHeadingReveal
            0.9s
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            )
            both;
        }


        @keyframes collectionsHeadingReveal {

          from {
            opacity:
              0;

            transform:
              translateY(28px);
          }

          to {
            opacity:
              1;

            transform:
              translateY(0);
          }

        }


        /* =====================================================
           HEADING CHILDREN
        ===================================================== */

        .collections-heading.collections-revealed
        .collections-eyebrow {
          animation:
            collectionsFadeUp
            0.7s
            ease-out
            0.1s
            both;
        }


        .collections-heading.collections-revealed
        .collections-title {
          animation:
            collectionsTitleReveal
            0.8s
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            )
            0.18s
            both;
        }


        @keyframes collectionsTitleReveal {

          from {
            opacity:
              0;

            transform:
              translateY(22px);
          }

          to {
            opacity:
              1;

            transform:
              translateY(0);
          }

        }


        .collections-heading.collections-revealed
        .collections-line {
          transform-origin:
            center;

          animation:
            collectionsLineReveal
            0.7s
            ease-out
            0.45s
            both;
        }


        @keyframes collectionsLineReveal {

          from {
            opacity:
              0;

            transform:
              scaleX(0);
          }

          to {
            opacity:
              1;

            transform:
              scaleX(1);
          }

        }


        .collections-heading.collections-revealed
        .collections-description {
          animation:
            collectionsFadeUp
            0.8s
            ease-out
            0.55s
            both;
        }


        @keyframes collectionsFadeUp {

          from {
            opacity:
              0;

            transform:
              translateY(15px);
          }

          to {
            opacity:
              1;

            transform:
              translateY(0);
          }

        }


        /* =====================================================
           GOLD CARD — LEFT
        ===================================================== */

        .collection-card.collections-revealed:nth-child(1) {
          animation:
            collectionGoldReveal
            0.95s
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            )
            0.05s
            both;
        }


        @keyframes collectionGoldReveal {

          from {
            opacity:
              0;

            translate:
              -55px 12px;

            scale:
              0.985;
          }

          to {
            opacity:
              1;

            translate:
              0 0;

            scale:
              1;
          }

        }


        /* =====================================================
           SILVER CARD — RIGHT
        ===================================================== */

        .collection-card.collections-revealed:nth-child(2) {
          animation:
            collectionSilverReveal
            0.95s
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            )
            0.05s
            both;
        }


        @keyframes collectionSilverReveal {

          from {
            opacity:
              0;

            translate:
              55px 12px;

            scale:
              0.985;
          }

          to {
            opacity:
              1;

            translate:
              0 0;

            scale:
              1;
          }

        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 900px) {

          .collections-section {
            padding:
              60px 0 70px;
          }


          .collections-container {
            width:
              min(
                720px,
                calc(100% - 40px)
              );
          }


          .collection-card {
            height:
              390px;
          }


          .collection-name {
            font-size:
              36px;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 640px) {

          .collections-section {
            padding:
              52px 0 60px;
          }


          .collections-container {
            width:
              calc(100% - 28px);
          }


          .collections-heading {
            margin-bottom:
              28px;
          }


          .collections-title {
            font-size:
              38px;
          }


          .collections-description {
            font-size:
              13px;

            line-height:
              1.65;
          }


          .collections-grid {
            grid-template-columns:
              1fr;

            gap:
              14px;
          }


          .collection-card {
            height:
              360px;
          }


          .collection-content {
            left:
              22px;

            right:
              22px;

            bottom:
              23px;
          }


          .collection-name {
            font-size:
              34px;
          }


          .collection-description {
            font-size:
              12px;

            line-height:
              1.5;

            margin:
              10px 0 14px;
          }


          /* -----------------------------------------
             MOBILE ENTRANCE

             Cards enter from below on mobile.
             This prevents horizontal movement
             outside the narrow viewport.
          ----------------------------------------- */

          @keyframes collectionGoldReveal {

            from {
              opacity:
                0;

              translate:
                0 35px;

              scale:
                0.985;
            }

            to {
              opacity:
                1;

              translate:
                0 0;

              scale:
                1;
            }

          }


          @keyframes collectionSilverReveal {

            from {
              opacity:
                0;

              translate:
                0 35px;

              scale:
                0.985;
            }

            to {
              opacity:
                1;

              translate:
                0 0;

              scale:
                1;
            }

          }


          .collection-card:hover {
            transform:
              translateY(-3px);
          }


          .collection-card:hover
          .collection-image {
            transform:
              scale(1.045);
          }


          .collection-card:hover
          .collection-content {
            transform:
              translateY(-2px);
          }


          .collection-card::after {
            display:
              none;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 380px) {

          .collections-container {
            width:
              calc(100% - 22px);
          }


          .collection-card {
            height:
              350px;
          }

        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .collections-heading,
          .collection-card {
            animation:
              none !important;

            opacity:
              1 !important;

            translate:
              none !important;

            scale:
              none !important;
          }


          .collection-card,
          .collection-image,
          .collection-content,
          .collection-name,
          .collection-description,
          .collection-link,
          .collection-arrow {
            transition:
              none !important;
          }

        }

      `}</style>
    </section>
  );
}

export default Collections;