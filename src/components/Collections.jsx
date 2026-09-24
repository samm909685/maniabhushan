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
  return (
    <section
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

      {/* =========================
          STYLES
      ========================== */}

      <style>{`

        /* SECTION */

        .collections-section {
          width: 100%;
          padding: 72px 0 82px;
        }

        .collections-container {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
        }

        /* =========================
           HEADING
        ========================== */

        .collections-heading {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 38px;
        }

        .collections-eyebrow {
          margin: 0 0 10px;
          color: ${GOLD};
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.32em;
          text-transform: uppercase;
        }

        .collections-title {
          margin: 0;
          color: ${NAVY};
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(36px, 4vw, 52px);
          font-weight: 400;
          line-height: 1;
          letter-spacing: -0.025em;
        }

        .collections-line {
          width: 52px;
          height: 1px;
          margin: 18px auto 16px;
          background: ${GOLD};
        }

        .collections-description {
          max-width: 570px;
          margin: 0 auto;
          color: #38515a;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 14px;
          line-height: 1.7;
        }

        /* =========================
           GRID
        ========================== */

        .collections-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }

        /* =========================
           CARD
        ========================== */

        .collection-card {
          position: relative;
          display: block;
          height: 430px;
          overflow: hidden;
          border: 1px solid rgba(186, 140, 91, 0.35);
          background: ${NAVY};
          text-decoration: none;
        }

        /* =========================
           IMAGE
        ========================== */

        .collection-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.65s ease;
        }

        /* =========================
           OVERLAY
        ========================== */

        .collection-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              to top,
              rgba(6, 45, 62, 0.96) 0%,
              rgba(6, 45, 62, 0.70) 30%,
              rgba(6, 45, 62, 0.18) 68%,
              rgba(6, 45, 62, 0.02) 100%
            );
        }

        /* =========================
           CONTENT
        ========================== */

        .collection-content {
          position: absolute;
          left: 30px;
          right: 30px;
          bottom: 28px;
          z-index: 2;
        }

        .collection-subtitle {
          margin: 0 0 7px;
          color: ${GOLD};
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.27em;
          text-transform: uppercase;
        }

        .collection-name {
          margin: 0;
          color: ${CREAM};
          font-family: Georgia, "Times New Roman", serif;
          font-size: 42px;
          font-weight: 400;
          line-height: 1;
        }

        .collection-description {
          max-width: 410px;
          margin: 12px 0 16px;
          color: rgba(255, 248, 234, 0.84);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 13px;
          line-height: 1.55;
        }

        .collection-link {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          color: ${CREAM};
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.23em;
          text-transform: uppercase;
        }

        .collection-arrow {
          color: ${GOLD};
          font-size: 20px;
          font-weight: 300;
          line-height: 1;
          transition: transform 0.3s ease;
        }

        /* =========================
           HOVER
        ========================== */

        .collection-card {
          transition:
            border-color 0.3s ease,
            transform 0.3s ease;
        }

        .collection-card:hover {
          border-color: ${GOLD};
        }

        .collection-card:hover .collection-image {
          transform: scale(1.045);
        }

        .collection-card:hover .collection-arrow {
          transform: translateX(5px);
        }

        /* =========================
           TABLET
        ========================== */

        @media (max-width: 900px) {

          .collections-section {
            padding: 60px 0 70px;
          }

          .collections-container {
            width: min(720px, calc(100% - 40px));
          }

          .collection-card {
            height: 390px;
          }

          .collection-name {
            font-size: 36px;
          }

        }

        /* =========================
           MOBILE
        ========================== */

        @media (max-width: 640px) {

          .collections-section {
            padding: 52px 0 60px;
          }

          .collections-container {
            width: calc(100% - 28px);
          }

          .collections-heading {
            margin-bottom: 28px;
          }

          .collections-title {
            font-size: 38px;
          }

          .collections-description {
            font-size: 13px;
            line-height: 1.65;
          }

          .collections-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .collection-card {
            height: 360px;
          }

          .collection-content {
            left: 22px;
            right: 22px;
            bottom: 23px;
          }

          .collection-name {
            font-size: 34px;
          }

          .collection-description {
            font-size: 12px;
            line-height: 1.5;
            margin: 10px 0 14px;
          }

        }

      `}</style>
    </section>
  );
}

export default Collections;