import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import familyImage from "../assets/images/family.png";

function Legacy() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.18,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`legacy-section ${
        isVisible ? "legacy-visible" : ""
      }`}
    >
      <div className="legacy-container">

        {/* =========================
            DESKTOP / TABLET / MOBILE
            ========================= */}

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

            {/* Decorative gold mark */}
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

              <div className="legacy-eyebrow-row">
                <span className="legacy-symbol">✦</span>

                <span className="legacy-eyebrow">
                  OUR LEGACY
                </span>

                <span className="legacy-eyebrow-line"></span>
              </div>

              <h2>
                A Story Woven
                <br />
                Through Generations
              </h2>

              <div className="legacy-flourish">
                <span></span>
                <b>✦</b>
                <span></span>
              </div>

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
                  <span>ESTABLISHED</span>
                </div>

                <div className="legacy-divider"></div>

                <div className="legacy-detail">
                  <strong>2</strong>
                  <span>GENERATIONS</span>
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
                <span>DISCOVER OUR STORY</span>
                <b>→</b>
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Legacy;