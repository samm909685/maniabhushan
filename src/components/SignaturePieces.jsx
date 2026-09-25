import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";

const NAVY = "#062D3E";
const GOLD = "#BA8C5B";
const CREAM = "#F4EAD8";
const TEXT = "#38515A";

const pieces = [
  {
    name: "Thushi",
    eyebrow: "Traditional Craft",
    description:
      "A graceful expression of Indian heritage, crafted with intricate detail and timeless character.",
    image: image1,
    size: "large",
  },
  {
    name: "Saaj",
    eyebrow: "Heritage Form",
    description:
      "Distinctive traditional artistry shaped with character, elegance and generations of Indian craft.",
    image: image2,
    size: "small",
  },
  {
    name: "Mala",
    eyebrow: "Timeless Elegance",
    description:
      "Classic Indian jewellery that carries the beauty of tradition into every occasion.",
    image: image3,
    size: "small",
  },
];

function SignatureCard({ piece }) {
  return (
    <article className={`signature-card signature-card-${piece.size}`}>
      {/* OUTER DECORATIVE FRAME */}

      <div className="signature-frame">

        {/* IMAGE */}

        <div className="signature-image-wrap">
          <img
            src={piece.image}
            alt={`${piece.name} jewellery`}
            className="signature-image"
          />
        </div>

        {/* CONTENT */}

        <div className="signature-card-content">

          <p className="signature-eyebrow">
            {piece.eyebrow}
          </p>

          <h3 className="signature-name">
            {piece.name}
          </h3>

          <p className="signature-description">
            {piece.description}
          </p>

          <button
            type="button"
            className="signature-button"
          >
            <span>Explore Collection</span>

            <span className="signature-button-arrow">
              →
            </span>
          </button>

        </div>
      </div>
    </article>
  );
}

function SignaturePieces() {
  return (
    <section
      id="signature-pieces"
      className="signature-section"
    >
      <div className="signature-container">

        {/* =====================================
            SECTION HEADING
        ====================================== */}

        <div className="signature-heading">

          <p className="signature-heading-eyebrow">
            Maniabhushan
          </p>

          <h2 className="signature-title">
            Signature Pieces
          </h2>

          <div className="signature-heading-line" />

          <p className="signature-intro">
            Discover distinctive expressions of Indian jewellery,
            shaped by tradition and refined through generations
            of craftsmanship.
          </p>

        </div>

        {/* =====================================
            MAIN EDITORIAL LAYOUT

            LEFT  = BIG CARD
            RIGHT = TWO SMALL CARDS
        ====================================== */}

        <div className="signature-layout">

          {/* LEFT LARGE CARD */}

          <SignatureCard piece={pieces[0]} />

          {/* RIGHT TWO CARDS */}

          <div className="signature-right-column">

            <SignatureCard piece={pieces[1]} />

            <SignatureCard piece={pieces[2]} />

          </div>

        </div>
      </div>

      {/* =====================================
          STYLES
      ====================================== */}

      <style>{`

        /* =====================================
           SECTION
        ====================================== */

        .signature-section {
          width: 100%;
          background: ${CREAM};
          padding: 88px 0 100px;
          color: ${NAVY};
        }

        .signature-container {
          width: min(1280px, calc(100% - 48px));
          margin: 0 auto;
        }


        /* =====================================
           HEADING
        ====================================== */

        .signature-heading {
          max-width: 700px;
          margin: 0 auto 52px;
          text-align: center;
        }

        .signature-heading-eyebrow {
          margin: 0 0 11px;
          color: ${GOLD};
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.32em;
          line-height: 1;
          text-transform: uppercase;
        }

        .signature-title {
          margin: 0;
          color: ${NAVY};
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(38px, 4vw, 54px);
          font-weight: 400;
          line-height: 1;
          letter-spacing: -0.025em;
        }

        .signature-heading-line {
          width: 52px;
          height: 1px;
          margin: 19px auto 17px;
          background: ${GOLD};
        }

        .signature-intro {
          max-width: 600px;
          margin: 0 auto;
          color: ${TEXT};
          font-family: Georgia, "Times New Roman", serif;
          font-size: 14px;
          line-height: 1.75;
        }


        /* =====================================
           DESKTOP LAYOUT

           BIG CARD       SMALL CARD
           BIG CARD       SMALL CARD
        ====================================== */

        .signature-layout {
          width: min(1190px, 100%);
          margin: 0 auto;

          display: grid;
          grid-template-columns:
            minmax(0, 1.05fr)
            minmax(0, 0.95fr);

          gap: 28px;
          align-items: stretch;
        }


        /* =====================================
           RIGHT COLUMN
        ====================================== */

        .signature-right-column {
          min-width: 0;

          display: grid;
          grid-template-rows:
            repeat(2, minmax(0, 1fr));

          gap: 28px;
        }


        /* =====================================
           CARD
        ====================================== */

        .signature-card {
          position: relative;
          min-width: 0;

          background: #FFF8EA;

          transition:
            transform 0.35s ease;
        }

        .signature-card:hover {
          transform: translateY(-3px);
        }


        /* =====================================
           UNIQUE DECORATIVE FRAME

           This creates the premium
           double/inset border effect.
        ====================================== */

        .signature-frame {
          position: relative;

          width: 100%;
          height: 100%;

          padding: 7px;

          border: 1px solid
            rgba(186, 140, 91, 0.72);

background: #FFF8EA;
          box-shadow:
            inset 0 0 0 1px
              rgba(255, 255, 255, 0.75);
        }

        /*
          SECOND INNER FRAME
        */

        .signature-frame::before {
          content: "";

          position: absolute;

          top: 4px;
          right: 4px;
          bottom: 4px;
          left: 4px;

          pointer-events: none;

          border: 1px solid
            rgba(186, 140, 91, 0.28);

          z-index: 5;
        }

        /*
          SMALL CORNER ACCENTS
        */

        .signature-frame::after {
          content: "";

          position: absolute;

          top: 0;
          left: 0;

          width: 34px;
          height: 34px;

          border-top: 2px solid ${GOLD};
          border-left: 2px solid ${GOLD};

          pointer-events: none;

          z-index: 6;
        }


        /* =====================================
           IMAGE
        ====================================== */

        .signature-image-wrap {
          position: relative;

          width: 100%;

          overflow: hidden;

          background: #eadfce;
        }

        .signature-image {
          display: block;

          width: 100%;
          height: 100%;

          object-fit: cover;
          object-position: center;

          transition:
            transform 0.7s cubic-bezier(
              0.2,
              0.7,
              0.2,
              1
            );
        }

        .signature-card:hover .signature-image {
          transform: scale(1.035);
        }


        /* =====================================
           LARGE LEFT CARD
        ====================================== */

        .signature-card-large {
          min-height: 690px;
        }

        .signature-card-large
        .signature-image-wrap {
          height: 445px;
        }


        /* =====================================
           SMALL RIGHT CARDS
        ====================================== */

        .signature-card-small {
          min-height: 331px;
        }

        .signature-card-small
        .signature-image-wrap {
          height: 188px;
        }


        /* =====================================
           CARD CONTENT
        ====================================== */

        .signature-card-content {
          position: relative;

          padding: 22px 25px 25px;

            background: #FFF8EA !important;

        }


        /* =====================================
           EYEBROW
        ====================================== */

        .signature-eyebrow {
          margin: 0 0 7px;

          color: ${GOLD};

          font-size: 9px;
          font-weight: 600;

          letter-spacing: 0.27em;
          line-height: 1.2;

          text-transform: uppercase;
        }


        /* =====================================
           NAME
        ====================================== */

        .signature-name {
          margin: 0;

          color: ${NAVY};

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 34px;
          font-weight: 400;

          line-height: 1;

          letter-spacing: -0.02em;
        }


        /* =====================================
           DESCRIPTION
        ====================================== */

        .signature-description {
          max-width: 500px;

          margin: 11px 0 17px;

          color: ${TEXT};

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 12.5px;

          line-height: 1.6;
        }


        /* =====================================
           BUTTON
        ====================================== */

        .signature-button {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          gap: 13px;

          min-height: 35px;

          padding: 8px 15px;

          border: 1px solid
            rgba(186, 140, 91, 0.75);

          background: transparent;

          color: ${NAVY};

          font-size: 9px;
          font-weight: 600;

          letter-spacing: 0.17em;

          text-transform: uppercase;

          cursor: pointer;

          transition:
            background-color 0.3s ease,
            color 0.3s ease,
            border-color 0.3s ease;
        }

        .signature-button-arrow {
          color: ${GOLD};

          font-size: 17px;
          font-weight: 300;

          line-height: 1;

          transition:
            transform 0.3s ease;
        }

        .signature-button:hover {
          background: ${NAVY};
          border-color: ${NAVY};
          color: ${CREAM};
        }

        .signature-button:hover
        .signature-button-arrow {
          transform: translateX(4px);
        }


        /* =====================================
           LARGE CARD TYPOGRAPHY
        ====================================== */

        .signature-card-large
        .signature-card-content {
          padding:
            27px
            30px
            30px;
        }

        .signature-card-large
        .signature-name {
          font-size: 42px;
        }

        .signature-card-large
        .signature-description {
          max-width: 500px;
          font-size: 13px;
          line-height: 1.65;
        }


        /* =====================================
           LAPTOP
        ====================================== */

        @media (max-width: 1100px) {

          .signature-section {
            padding: 76px 0 85px;
          }

          .signature-container {
            width:
              min(
                100% - 40px,
                1000px
              );
          }

          .signature-layout {
            gap: 22px;
          }

          .signature-right-column {
            gap: 22px;
          }

          .signature-card-large {
            min-height: 610px;
          }

          .signature-card-large
          .signature-image-wrap {
            height: 380px;
          }

          .signature-card-small {
            min-height: 294px;
          }

          .signature-card-small
          .signature-image-wrap {
            height: 165px;
          }

          .signature-card-large
          .signature-card-content {
            padding:
              23px
              24px
              25px;
          }

          .signature-card-small
          .signature-card-content {
            padding:
              18px
              20px
              20px;
          }

          .signature-card-large
          .signature-name {
            font-size: 38px;
          }

          .signature-name {
            font-size: 30px;
          }

        }


        /* =====================================
           TABLET
        ====================================== */

        @media (max-width: 900px) {

          .signature-section {
            padding: 65px 0 75px;
          }

          .signature-container {
            width:
              min(
                720px,
                calc(100% - 40px)
              );
          }

          .signature-heading {
            margin-bottom: 40px;
          }

          .signature-layout {
            grid-template-columns:
              minmax(0, 1fr)
              minmax(0, 0.9fr);

            gap: 18px;
          }

          .signature-right-column {
            gap: 18px;
          }

          .signature-card-large {
            min-height: 550px;
          }

          .signature-card-large
          .signature-image-wrap {
            height: 350px;
          }

          .signature-card-small {
            min-height: 266px;
          }

          .signature-card-small
          .signature-image-wrap {
            height: 145px;
          }

          .signature-card-large
          .signature-card-content {
            padding:
              20px
              21px
              22px;
          }

          .signature-card-small
          .signature-card-content {
            padding:
              15px
              17px
              17px;
          }

          .signature-card-large
          .signature-name {
            font-size: 34px;
          }

          .signature-name {
            font-size: 27px;
          }

          .signature-description {
            font-size: 11.5px;
          }

        }


        /* =====================================
           MOBILE

           Everything becomes vertical.
        ====================================== */

        @media (max-width: 640px) {

          .signature-section {
            padding: 54px 0 62px;
          }

          .signature-container {
            width:
              calc(100% - 28px);
          }

          .signature-heading {
            margin-bottom: 30px;
          }

          .signature-title {
            font-size: 38px;
          }

          .signature-intro {
            font-size: 13px;
            line-height: 1.65;
          }

          .signature-layout {
            display: grid;

            grid-template-columns: 1fr;

            gap: 15px;
          }

          .signature-right-column {
            display: grid;

            grid-template-rows: none;

            grid-template-columns: 1fr;

            gap: 15px;
          }

          .signature-card-large,
          .signature-card-small {
            min-height: auto;
          }

          .signature-card-large
          .signature-image-wrap,
          .signature-card-small
          .signature-image-wrap {
            height: 245px;
          }

          .signature-card-large
          .signature-card-content,
          .signature-card-small
          .signature-card-content {
            padding:
              19px
              20px
              21px;
          }

          .signature-card-large
          .signature-name {
            font-size: 34px;
          }

          .signature-name {
            font-size: 31px;
          }

          .signature-description {
            font-size: 12px;
            line-height: 1.55;
          }

          .signature-button {
            min-height: 34px;
            padding: 8px 13px;
          }

          .signature-frame {
            padding: 6px;
          }

          .signature-frame::after {
            width: 27px;
            height: 27px;
          }

        }


        /* =====================================
           SMALL MOBILE
        ====================================== */

        @media (max-width: 420px) {

          .signature-section {
            padding: 48px 0 55px;
          }

          .signature-container {
            width:
              calc(100% - 22px);
          }

          .signature-title {
            font-size: 34px;
          }

          .signature-intro {
            font-size: 12px;
          }

          .signature-layout,
          .signature-right-column {
            gap: 12px;
          }

          .signature-card-large
          .signature-image-wrap,
          .signature-card-small
          .signature-image-wrap {
            height: 205px;
          }

          .signature-card-large
          .signature-card-content,
          .signature-card-small
          .signature-card-content {
            padding:
              17px
              17px
              18px;
          }

          .signature-card-large
          .signature-name {
            font-size: 31px;
          }

          .signature-name {
            font-size: 28px;
          }

          .signature-description {
            margin-top: 9px;
            margin-bottom: 14px;
            font-size: 11.5px;
          }

        }

      `}</style>
    </section>
  );
}

export default SignaturePieces;