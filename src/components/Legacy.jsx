import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import familyImage from "../assets/images/family.png";

function Legacy() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    /*
      Each Legacy element gets its own observer.

      This prevents the content from animating early
      on mobile when it is still below the viewport.
    */

    const revealElements = section.querySelectorAll(
      ".legacy-image, .legacy-content, .legacy-year-bg, .legacy-eyebrow-row, .legacy-content h2, .legacy-flourish, .legacy-description, .legacy-details, .legacy-button"
    );

    const observers = [];

    revealElements.forEach((element) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            element.classList.add("legacy-revealed");

            // Animate this element only once.
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
    <>
      <section
        ref={sectionRef}
        className="legacy-section"
      >
        <div className="legacy-container">
          <div className="legacy-card">

            {/* =========================
                OWNER IMAGE
                ========================= */}

            <div className="legacy-image">
              <img
                src={familyImage}
                alt="Maniabhushan family legacy"
              />

              <div className="legacy-image-frame"></div>

              <div className="legacy-image-glow"></div>

              <div className="legacy-image-mark">
                ✦
              </div>
            </div>

            {/* =========================
                LEGACY CONTENT
                ========================= */}

            <div className="legacy-content">

              {/* Large background year */}

              <div className="legacy-year-bg">
                1994
              </div>

              <div className="legacy-content-inner">

                {/* Eyebrow */}

                <div className="legacy-eyebrow-row">
                  <span className="legacy-symbol">
                    ✦
                  </span>

                  <span className="legacy-eyebrow">
                    OUR LEGACY
                  </span>

                  <span className="legacy-eyebrow-line"></span>
                </div>

                {/* Heading */}

                <h2>
                  A Story Woven
                  <br />
                  Through Generations
                </h2>

                {/* Flourish */}

                <div className="legacy-flourish">
                  <span></span>
                  <b>✦</b>
                  <span></span>
                </div>

                {/* Description */}

                <p className="legacy-description">
                  Since 1994, Maniabhushan has been more than just a jewellery
                  house — it’s a family legacy, shaped by trust, craftsmanship
                  and an unwavering commitment to timeless beauty. What began
                  as a vision continues to shine through generations, in every
                  design we create.
                </p>

                {/* =========================
                    LEGACY STATS
                    ========================= */}

                <div className="legacy-details">

                  <div className="legacy-detail">
                    <strong>1994</strong>

                    <span>
                      ESTABLISHED
                    </span>
                  </div>

                  <div className="legacy-divider"></div>

                  <div className="legacy-detail">
                    <strong>2</strong>

                    <span>
                      GENERATIONS
                    </span>
                  </div>

                  <div className="legacy-divider"></div>

                  <div className="legacy-detail">
                    <strong>∞</strong>

                    <span>
                      VALUES
                      <br />
                      THAT CONTINUE
                    </span>
                  </div>

                </div>

                {/* =========================
                    CTA
                    ========================= */}

                <Link
                  to="/legacy"
                  className="legacy-button"
                >
                  <span>
                    DISCOVER OUR STORY
                  </span>

                  <b>
                    →
                  </b>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LEGACY CSS
          ===================================================== */}

      <style>{`
        /* =========================================================
           MANIABHUSHAN - LEGACY SECTION
           ========================================================= */

        .legacy-section {
          position: relative;
          width: 100%;
          padding: 110px 24px;
          overflow: hidden;
          background: #f8f0e3;
        }

        .legacy-container {
          position: relative;
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
        }

        /* =========================================================
           MAIN CARD
           ========================================================= */

        .legacy-card {
          position: relative;
          display: grid;
          grid-template-columns: 48% 52%;
          width: 100%;
          min-height: 700px;
          overflow: hidden;

          background: #f8f0e3;

          border: 1px solid rgba(186, 140, 91, 0.55);

          box-shadow:
            0 30px 80px rgba(6, 45, 62, 0.12);
        }

        .legacy-card::before {
          content: "";
          position: absolute;
          z-index: 10;

          inset: 14px;

          border: 1px solid rgba(186, 140, 91, 0.28);

          pointer-events: none;
        }

        /* =========================================================
           OWNER IMAGE
           ========================================================= */

        .legacy-image {
          position: relative;
          z-index: 2;

          min-height: 700px;

          overflow: hidden;

          background: #062d3e;

          opacity: 0;
        }

        .legacy-image img {
          display: block;

          width: 100%;
          height: 100%;
          min-height: 700px;

          object-fit: cover;

          object-position: center center;

          transform: scale(1.015);

          transition:
            transform 1.2s cubic-bezier(0.2, 0.65, 0.25, 1);
        }

        .legacy-card:hover .legacy-image img {
          transform: scale(1.045);
        }

        .legacy-image-glow {
          position: absolute;
          inset: 0;

          pointer-events: none;

          background:
            linear-gradient(
              90deg,
              rgba(6, 45, 62, 0.05) 0%,
              transparent 50%,
              rgba(6, 45, 62, 0.16) 100%
            );
        }

        .legacy-image-frame {
          position: absolute;

          top: 30px;
          right: 30px;
          bottom: 30px;
          left: 30px;

          border: 1px solid rgba(212, 175, 55, 0.65);

          pointer-events: none;

          transition:
            border-color 0.4s ease,
            inset 0.4s ease;
        }

        .legacy-image:hover .legacy-image-frame {
          border-color: rgba(186, 140, 91, 0.95);
        }

        .legacy-image-mark {
          position: absolute;

          right: 48px;
          bottom: 42px;

          display: flex;
          align-items: center;
          justify-content: center;

          width: 46px;
          height: 46px;

          color: #d4af37;

          font-size: 18px;

          border: 1px solid rgba(212, 175, 55, 0.65);

          background: rgba(6, 45, 62, 0.55);

          backdrop-filter: blur(5px);

          z-index: 4;

          transition:
            transform 0.45s ease,
            opacity 0.35s ease;
        }

        .legacy-image:hover .legacy-image-mark {
          transform:
            rotate(45deg)
            scale(1.08);
        }

        /* =========================================================
           CONTENT AREA
           ========================================================= */

        .legacy-content {
          position: relative;
          z-index: 3;

          display: flex;
          align-items: center;

          min-height: 700px;

          overflow: hidden;

          padding: 90px 75px;

          background:
            radial-gradient(
              circle at 85% 10%,
              rgba(186, 140, 91, 0.08),
              transparent 30%
            ),
            #f8f0e3;

          opacity: 0;
        }

        .legacy-year-bg {
          position: absolute;

          top: 5px;
          right: 15px;

          color: rgba(186, 140, 91, 0.10);

          font-family: Georgia, "Times New Roman", serif;

          font-size: clamp(130px, 14vw, 220px);

          font-weight: 400;

          line-height: 1;

          pointer-events: none;

          user-select: none;

          opacity: 0;
        }

        .legacy-content-inner {
          position: relative;
          z-index: 3;

          width: 100%;
          max-width: 650px;
        }

        /* =========================================================
           EYEBROW
           ========================================================= */

        .legacy-eyebrow-row {
          display: flex;
          align-items: center;

          gap: 13px;

          margin-bottom: 26px;

          opacity: 0;
        }

        .legacy-symbol {
          color: #ba8c5b;

          font-size: 15px;
        }

        .legacy-eyebrow {
          color: #ba8c5b;

          font-size: 10px;

          font-weight: 600;

          letter-spacing: 0.42em;

          white-space: nowrap;
        }

        .legacy-eyebrow-line {
          width: 70px;
          height: 1px;

          background: #ba8c5b;
        }

        /* =========================================================
           MAIN TITLE
           ========================================================= */

        .legacy-content h2 {
          margin: 0;

          color: #062d3e;

          font-family: Georgia, "Times New Roman", serif;

          font-size: clamp(50px, 4.4vw, 70px);

          font-weight: 400;

          line-height: 0.98;

          letter-spacing: -0.035em;

          opacity: 0;
        }

        /* =========================================================
           FLOURISH
           ========================================================= */

        .legacy-flourish {
          display: flex;
          align-items: center;

          width: 155px;

          gap: 10px;

          margin: 30px 0 28px;

          opacity: 0;
        }

        .legacy-flourish span {
          flex: 1;

          height: 1px;

          background: #ba8c5b;
        }

        .legacy-flourish b {
          color: #ba8c5b;

          font-size: 14px;

          font-weight: 400;
        }

        /* =========================================================
           DESCRIPTION
           ========================================================= */

        .legacy-description {
          max-width: 590px;

          margin: 0;

          color: #38515a;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          font-size: 15px;

          line-height: 1.85;

          letter-spacing: 0.01em;

          opacity: 0;
        }

        /* =========================================================
           STATS
           ========================================================= */

        .legacy-details {
          display: flex;
          align-items: center;

          width: fit-content;

          margin-top: 38px;

          opacity: 0;
        }

        .legacy-detail {
          display: flex;
          flex-direction: column;

          min-width: 100px;
        }

        .legacy-detail strong {
          color: #9b6c32;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 32px;

          font-weight: 400;

          line-height: 1;
        }

        .legacy-detail span {
          margin-top: 9px;

          color: #ba8c5b;

          font-size: 8px;

          font-weight: 600;

          line-height: 1.5;

          letter-spacing: 0.23em;
        }

        .legacy-divider {
          width: 1px;
          height: 52px;

          margin: 0 28px;

          background: rgba(186, 140, 91, 0.35);
        }

        /* =========================================================
           BUTTON
           ========================================================= */

        .legacy-button {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;

          width: 260px;

          margin-top: 42px;

          padding: 17px 22px;

          color: #f8f0e3;

          background: #062d3e;

          border: 1px solid #ba8c5b;

          text-decoration: none;

          font-size: 10px;

          font-weight: 600;

          letter-spacing: 0.25em;

          opacity: 0;

          transition:
            transform 0.35s ease,
            background-color 0.35s ease,
            color 0.35s ease,
            border-color 0.35s ease;
        }

        .legacy-button b {
          display: inline-block;

          color: #d4af37;

          font-size: 17px;

          font-weight: 400;

          transition:
            transform 0.35s
            cubic-bezier(0.22, 1, 0.36, 1);
        }

        .legacy-button:hover {
          color: #062d3e;

          background: #d4af37;

          border-color: #d4af37;

          transform: translateY(-3px);

          box-shadow:
            0 12px 30px rgba(6, 45, 62, 0.16);
        }

        .legacy-button:hover b {
          color: #062d3e;

          transform: translateX(5px);
        }

        /* =========================================================
           TABLET
           ========================================================= */

        @media (max-width: 1100px) {
          .legacy-section {
            padding: 80px 20px;
          }

          .legacy-card {
            grid-template-columns: 50% 50%;
            min-height: 600px;
          }

          .legacy-image {
            min-height: 600px;
          }

          .legacy-image img {
            min-height: 600px;
          }

          .legacy-content {
            min-height: 600px;

            padding: 65px 45px;
          }

          .legacy-content h2 {
            font-size: 48px;
          }

          .legacy-description {
            font-size: 14px;
          }

          .legacy-detail {
            min-width: 80px;
          }

          .legacy-divider {
            margin: 0 18px;
          }
        }

        /* =========================================================
           TABLET / LARGE MOBILE
           ========================================================= */

        @media (max-width: 768px) {
          .legacy-section {
            padding: 70px 16px;
          }

          .legacy-card {
            display: flex;
            flex-direction: column;

            min-height: auto;

            border-radius: 0;
          }

          .legacy-image {
            order: 1;

            width: 100%;

            height: 560px;
            min-height: 560px;
          }

          .legacy-image img {
            width: 100%;
            height: 100%;
            min-height: 560px;

            object-position: center 38%;

            transform: none;
          }

          .legacy-card:hover .legacy-image img {
            transform: none;
          }

          .legacy-image-frame {
            top: 18px;
            right: 18px;
            bottom: 18px;
            left: 18px;
          }

          .legacy-image-mark {
            right: 28px;
            bottom: 28px;

            width: 40px;
            height: 40px;
          }

          .legacy-content {
            order: 2;

            min-height: auto;

            padding: 58px 34px 55px;
          }

          .legacy-year-bg {
            top: 5px;
            right: 10px;

            font-size: 115px;
          }

          .legacy-content h2 {
            font-size: 44px;

            line-height: 1.02;
          }

          .legacy-description {
            max-width: 100%;

            font-size: 14px;

            line-height: 1.8;
          }

          .legacy-details {
            width: 100%;

            justify-content: space-between;

            margin-top: 32px;
          }

          .legacy-detail {
            min-width: auto;
          }

          .legacy-divider {
            height: 45px;

            margin: 0 10px;
          }

          .legacy-button {
            width: 245px;

            margin-top: 35px;
          }
        }

        /* =========================================================
           MOBILE
           ========================================================= */

        @media (max-width: 600px) {
          .legacy-section {
            padding: 55px 10px;
          }

          .legacy-container {
            max-width: 100%;
          }

          .legacy-card {
            width: 100%;
          }

          .legacy-image {
            height: 485px;
            min-height: 485px;
          }

          .legacy-image img {
            height: 100%;
            min-height: 485px;

            object-position: center 36%;
          }

          .legacy-image-frame {
            top: 14px;
            right: 14px;
            bottom: 14px;
            left: 14px;
          }

          .legacy-image-mark {
            right: 24px;
            bottom: 24px;

            width: 36px;
            height: 36px;

            font-size: 14px;
          }

          .legacy-content {
            padding: 48px 25px 42px;
          }

          .legacy-year-bg {
            top: 5px;
            right: 0;

            font-size: 105px;

            color: rgba(186, 140, 91, 0.09);
          }

          .legacy-eyebrow-row {
            gap: 9px;

            margin-bottom: 20px;
          }

          .legacy-symbol {
            font-size: 12px;
          }

          .legacy-eyebrow {
            font-size: 8px;

            letter-spacing: 0.32em;
          }

          .legacy-eyebrow-line {
            width: 45px;
          }

          .legacy-content h2 {
            font-size: 38px;

            line-height: 1.04;

            letter-spacing: -0.025em;
          }

          .legacy-flourish {
            width: 125px;

            margin: 23px 0 22px;
          }

          .legacy-flourish b {
            font-size: 12px;
          }

          .legacy-description {
            font-size: 13px;

            line-height: 1.78;
          }

          .legacy-details {
            margin-top: 28px;

            padding-top: 3px;
          }

          .legacy-detail strong {
            font-size: 24px;
          }

          .legacy-detail span {
            margin-top: 7px;

            font-size: 6.5px;

            letter-spacing: 0.16em;
          }

          .legacy-divider {
            height: 38px;

            margin: 0 7px;
          }

          .legacy-button {
            width: 100%;

            max-width: 260px;

            margin-top: 30px;

            padding: 15px 17px;

            font-size: 8px;

            letter-spacing: 0.2em;
          }
        }

        /* =========================================================
           SMALL MOBILE
           ========================================================= */

        @media (max-width: 380px) {
          .legacy-section {
            padding-left: 7px;
            padding-right: 7px;
          }

          .legacy-image {
            height: 455px;
            min-height: 455px;
          }

          .legacy-image img {
            min-height: 455px;

            object-position: center 35%;
          }

          .legacy-content {
            padding: 44px 21px 38px;
          }

          .legacy-content h2 {
            font-size: 34px;
          }

          .legacy-description {
            font-size: 12.5px;
          }

          .legacy-detail strong {
            font-size: 22px;
          }

          .legacy-divider {
            margin: 0 5px;
          }

          .legacy-detail span {
            font-size: 6px;
          }

          .legacy-button {
            max-width: 100%;

            font-size: 7.5px;
          }
        }

        /* =====================================================
           ELEMENT-LEVEL SCROLL ANIMATION
           ===================================================== */

        .legacy-image,
        .legacy-content,
        .legacy-year-bg,
        .legacy-eyebrow-row,
        .legacy-content h2,
        .legacy-flourish,
        .legacy-description,
        .legacy-details,
        .legacy-button {
          opacity: 0;
        }

        /* =====================================================
           IMAGE - DESKTOP
           ===================================================== */

        .legacy-image.legacy-revealed {
          animation:
            legacyImageReveal
            1s
            cubic-bezier(0.22, 1, 0.36, 1)
            both;
        }

        @keyframes legacyImageReveal {
          from {
            opacity: 0;
            translate: -55px 15px;
            scale: 0.985;
          }

          to {
            opacity: 1;
            translate: 0 0;
            scale: 1;
          }
        }

        /* =====================================================
           CONTENT - DESKTOP
           ===================================================== */

        .legacy-content.legacy-revealed {
          animation:
            legacyContentReveal
            1s
            cubic-bezier(0.22, 1, 0.36, 1)
            both;
        }

        @keyframes legacyContentReveal {
          from {
            opacity: 0;
            translate: 55px 15px;
            scale: 0.985;
          }

          to {
            opacity: 1;
            translate: 0 0;
            scale: 1;
          }
        }

        /* =====================================================
           YEAR
           ===================================================== */

        .legacy-year-bg.legacy-revealed {
          animation:
            legacyYearReveal
            1.1s
            ease-out
            both;
        }

        @keyframes legacyYearReveal {
          from {
            opacity: 0;
            translate: 25px 0;
            scale: 0.96;
          }

          to {
            opacity: 1;
            translate: 0 0;
            scale: 1;
          }
        }

        /* =====================================================
           EYEBROW
           ===================================================== */

        .legacy-eyebrow-row.legacy-revealed {
          animation:
            legacyFadeUp
            0.7s
            ease-out
            both;
        }

        /* =====================================================
           HEADING
           ===================================================== */

        .legacy-content h2.legacy-revealed {
          animation:
            legacyHeadingReveal
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            both;
        }

        @keyframes legacyHeadingReveal {
          from {
            opacity: 0;
            translate: 0 24px;
          }

          to {
            opacity: 1;
            translate: 0 0;
          }
        }

        /* =====================================================
           FLOURISH
           ===================================================== */

        .legacy-flourish.legacy-revealed {
          animation:
            legacyFlourishReveal
            0.7s
            ease-out
            both;
        }

        @keyframes legacyFlourishReveal {
          from {
            opacity: 0;
            scale: 0.45 1;
          }

          to {
            opacity: 1;
            scale: 1 1;
          }
        }

        /* =====================================================
           DESCRIPTION
           ===================================================== */

        .legacy-description.legacy-revealed {
          animation:
            legacyFadeUp
            0.8s
            ease-out
            both;
        }

        @keyframes legacyFadeUp {
          from {
            opacity: 0;
            translate: 0 18px;
          }

          to {
            opacity: 1;
            translate: 0 0;
          }
        }

        /* =====================================================
           STATS
           ===================================================== */

        .legacy-details.legacy-revealed {
          animation:
            legacyFadeUp
            0.8s
            ease-out
            both;
        }

        /* =====================================================
           CTA
           ===================================================== */

        .legacy-button.legacy-revealed {
          animation:
            legacyFadeUp
            0.8s
            ease-out
            both;
        }

        /* =====================================================
           MOBILE ANIMATION
           ===================================================== */

        @media (max-width: 640px) {
          .legacy-image.legacy-revealed {
            animation:
              legacyMobileReveal
              0.9s
              cubic-bezier(0.22, 1, 0.36, 1)
              both;
          }

          .legacy-content.legacy-revealed {
            animation:
              legacyMobileContentReveal
              0.9s
              cubic-bezier(0.22, 1, 0.36, 1)
              both;
          }

          @keyframes legacyMobileReveal {
            from {
              opacity: 0;
              translate: 0 35px;
              scale: 0.985;
            }

            to {
              opacity: 1;
              translate: 0 0;
              scale: 1;
            }
          }

          @keyframes legacyMobileContentReveal {
            from {
              opacity: 0;
              translate: 0 30px;
            }

            to {
              opacity: 1;
              translate: 0 0;
            }
          }
        }

        /* =====================================================
           REDUCED MOTION
           ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .legacy-image,
          .legacy-content,
          .legacy-year-bg,
          .legacy-eyebrow-row,
          .legacy-content h2,
          .legacy-flourish,
          .legacy-description,
          .legacy-details,
          .legacy-button {
            animation: none !important;
            opacity: 1 !important;
            translate: none !important;
            scale: 1 !important;
          }

          .legacy-image img,
          .legacy-image-frame,
          .legacy-image-mark,
          .legacy-button,
          .legacy-button b {
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
}

export default Legacy;