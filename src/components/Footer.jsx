import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/images/maniabhushan-logo.png";

function Footer() {
  const sectionRef = useRef(null);

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const revealElements = section.querySelectorAll(
      ".footer-brand-area, .footer-brand, .footer-year, .footer-divider, .footer-column, .footer-message, .footer-bottom"
    );

    const observers = [];

    revealElements.forEach((element) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            element.classList.add("footer-revealed");
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer
        ref={sectionRef}
        className="footer-section"
      >
        <div className="footer-watermark">1994</div>

        <div className="footer-container">

          {/* ================= BRAND AREA ================= */}

          <div className="footer-brand-area">

            <div className="footer-brand">

              <Link
                to="/"
                onClick={scrollToTop}
                className="footer-logo-link"
              >
                <img
                  src={logo}
                  alt="Maniabhushan Jewellers"
                  className="footer-logo"
                />
              </Link>

              <p className="footer-tagline">
                A legacy carried through generations.
              </p>

              <p className="footer-description">
                Traditional craftsmanship, timeless jewellery and a story
                that continues from one generation to the next.
              </p>

            </div>


            <div className="footer-year">

              <span>
                ESTABLISHED
              </span>

              <strong>
                1994
              </strong>

            </div>

          </div>


          {/* ================= DIVIDER ================= */}

          <div className="footer-divider">

            <span></span>

            <b>
              ✦
            </b>

            <span></span>

          </div>


          {/* ================= FOOTER LINKS ================= */}

          <div className="footer-links-grid">

            {/* EXPLORE */}

            <div className="footer-column">

              <p className="footer-column-title">
                EXPLORE
              </p>

              <Link
                to="/"
                onClick={scrollToTop}
              >
                Home
              </Link>

              <Link to="/collections">
                Collections
              </Link>

              <Link to="/design-request">
                Design Request
              </Link>

            </div>


            {/* OUR STORY */}

            <div className="footer-column">

              <p className="footer-column-title">
                OUR STORY
              </p>

              <a href="/#legacy">
                Legacy
              </a>

              <a href="/#legacy">
                Since 1994
              </a>

              <a href="/#legacy">
                Our Heritage
              </a>

            </div>


            {/* CONNECT */}

            <div className="footer-column">

              <p className="footer-column-title">
                CONNECT
              </p>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>

              <a
                href="#"
                onClick={(event) => event.preventDefault()}
              >
                Instagram
              </a>

              <a
                href="#"
                onClick={(event) => event.preventDefault()}
              >
                Contact
              </a>

            </div>


            {/* MESSAGE */}

            <div className="footer-column footer-message">

              <p className="footer-column-title">
                MANIABHUSHAN
              </p>

              <p className="footer-message-text">
                Where tradition meets timeless elegance.
              </p>

              <Link
                to="/design-request"
                className="footer-cta"
              >
                START A CONVERSATION

                <span>
                  →
                </span>

              </Link>

            </div>

          </div>


          {/* ================= BOTTOM ================= */}

          <div className="footer-bottom">

            <p className="footer-copyright">
              © {currentYear} Maniabhushan Jewellers.
              All rights reserved.
            </p>


            <div className="footer-socials">

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>

              <a
                href="#"
                onClick={(event) => event.preventDefault()}
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

            </div>


            <button
              type="button"
              className="footer-top"
              onClick={scrollToTop}
            >
              BACK TO TOP

              <span>
                ↑
              </span>

            </button>

          </div>

        </div>
      </footer>


      {/* =====================================================
          FOOTER CSS
      ===================================================== */}

      <style>{`

/* =====================================================
   MANIABHUSHAN FOOTER
===================================================== */

.footer-section {
  position: relative;

  width: 100%;

  overflow: hidden;

  color: #f8f0e3;

  background: #062d3e;

  border-top:
    1px solid
    rgba(212, 175, 55, 0.3);
}


/* =====================================================
   WATERMARK
===================================================== */

.footer-watermark {
  position: absolute;

  right: -20px;
  bottom: -45px;

  color: rgba(212, 175, 55, 0.035);

  font-family:
    Georgia,
    "Times New Roman",
    serif;

  font-size: 170px;

  line-height: 1;

  pointer-events: none;

  user-select: none;
}


/* =====================================================
   CONTAINER
===================================================== */

.footer-container {
  position: relative;

  z-index: 2;

  width: 100%;

  max-width: 1200px;

  margin: 0 auto;

  padding: 42px 30px 18px;
}


/* =====================================================
   BRAND AREA
===================================================== */

.footer-brand-area {
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 30px;

  opacity: 0;
  translate: 0 30px;
  scale: 0.99;
}

.footer-brand-area.footer-revealed {
  animation:
    footerBrandAreaReveal
    0.9s
    cubic-bezier(0.22, 1, 0.36, 1)
    both;
}

@keyframes footerBrandAreaReveal {

  from {
    opacity: 0;

    translate: 0 30px;

    scale: 0.99;
  }

  to {
    opacity: 1;

    translate: 0 0;

    scale: 1;
  }

}


.footer-brand {
  max-width: 650px;

  opacity: 0;

  translate: -35px 10px;
}

.footer-brand.footer-revealed {
  animation:
    footerBrandReveal
    0.85s
    0.08s
    cubic-bezier(0.22, 1, 0.36, 1)
    both;
}

@keyframes footerBrandReveal {

  from {
    opacity: 0;

    translate: -35px 10px;
  }

  to {
    opacity: 1;

    translate: 0 0;
  }

}


.footer-logo-link {
  display: inline-flex;

  align-items: center;
}


.footer-logo {
  display: block;

  width: auto;

  height: 52px;

  object-fit: contain;

  transition:
    transform 0.3s ease;
}


.footer-logo:hover {
  transform: translateY(-2px);
}


.footer-tagline {
  margin: 14px 0 0;

  color: #d4af37;

  font-family:
    Georgia,
    "Times New Roman",
    serif;

  font-size: 20px;

  line-height: 1.25;
}


.footer-description {
  max-width: 560px;

  margin: 8px 0 0;

  color: rgba(248, 240, 227, 0.65);

  font-size: 12px;

  line-height: 1.6;
}


/* =====================================================
   YEAR
===================================================== */

.footer-year {
  display: flex;

  flex-direction: column;

  align-items: flex-end;

  opacity: 0;

  translate: 35px 10px;
}

.footer-year.footer-revealed {
  animation:
    footerYearReveal
    0.85s
    0.12s
    cubic-bezier(0.22, 1, 0.36, 1)
    both;
}

@keyframes footerYearReveal {

  from {
    opacity: 0;

    translate: 35px 10px;
  }

  to {
    opacity: 1;

    translate: 0 0;
  }

}


.footer-year span {
  color: #ba8c5b;

  font-size: 7px;

  font-weight: 600;

  letter-spacing: 0.3em;
}


.footer-year strong {
  margin-top: 4px;

  color: #f8f0e3;

  font-family:
    Georgia,
    "Times New Roman",
    serif;

  font-size: 42px;

  font-weight: 400;

  line-height: 1;
}


/* =====================================================
   DIVIDER
===================================================== */

.footer-divider {
  display: flex;

  align-items: center;

  gap: 12px;

  width: 100%;

  margin: 30px 0 28px;

  opacity: 0;

  scale: 0.94;
}

.footer-divider.footer-revealed {
  animation:
    footerDividerReveal
    0.75s
    cubic-bezier(0.22, 1, 0.36, 1)
    both;
}

@keyframes footerDividerReveal {

  from {
    opacity: 0;

    scale: 0.94;
  }

  to {
    opacity: 1;

    scale: 1;
  }

}


.footer-divider span {
  flex: 1;

  height: 1px;

  background:
    rgba(186, 140, 91, 0.22);
}


.footer-divider b {
  color: #d4af37;

  font-size: 10px;

  font-weight: 400;
}


/* =====================================================
   LINKS GRID
===================================================== */

.footer-links-grid {
  display: grid;

  grid-template-columns:
    1fr
    1fr
    1fr
    1.5fr;

  gap: 30px;
}


/* =====================================================
   COLUMNS
===================================================== */

.footer-column {
  display: flex;

  flex-direction: column;

  align-items: flex-start;

  opacity: 0;

  translate: 0 28px;
}

.footer-column.footer-revealed {
  animation:
    footerColumnReveal
    0.7s
    cubic-bezier(0.22, 1, 0.36, 1)
    both;
}

@keyframes footerColumnReveal {

  from {
    opacity: 0;

    translate: 0 28px;
  }

  to {
    opacity: 1;

    translate: 0 0;
  }

}


.footer-column-title {
  margin: 0 0 12px;

  color: #ba8c5b;

  font-size: 8px;

  font-weight: 600;

  letter-spacing: 0.28em;
}


.footer-column a {
  width: fit-content;

  margin-bottom: 7px;

  color:
    rgba(248, 240, 227, 0.7);

  font-size: 12px;

  line-height: 1.4;

  text-decoration: none;

  transition:
    color 0.25s ease,
    transform 0.25s ease;
}


.footer-column a:hover {
  color: #d4af37;

  transform: translateX(3px);
}


/* =====================================================
   MESSAGE
===================================================== */

.footer-message-text {
  max-width: 240px;

  margin: 0;

  color: #f8f0e3;

  font-family:
    Georgia,
    "Times New Roman",
    serif;

  font-size: 18px;

  line-height: 1.3;
}


/* =====================================================
   CTA
===================================================== */

.footer-cta {
  display: inline-flex !important;

  align-items: center;

  justify-content: space-between;

  width: 185px !important;

  margin-top: 15px !important;

  padding: 10px 13px;

  color: #062d3e !important;

  background: #d4af37;

  border:
    1px solid
    #d4af37;

  font-size: 7px !important;

  font-weight: 700;

  letter-spacing: 0.18em;

  text-decoration: none;

  transform: none !important;

  transition:
    background 0.25s ease,
    color 0.25s ease;
}


.footer-cta span {
  color: #062d3e;

  font-size: 13px;

  transition:
    transform 0.25s ease;
}


.footer-cta:hover {
  color: #f8f0e3 !important;

  background: transparent;
}


.footer-cta:hover span {
  color: #d4af37;

  transform: translateX(3px);
}


/* =====================================================
   BOTTOM
===================================================== */

.footer-bottom {
  display: grid;

  grid-template-columns:
    1fr
    auto
    1fr;

  align-items: center;

  gap: 20px;

  margin-top: 30px;

  padding-top: 14px;

  border-top:
    1px solid
    rgba(186, 140, 91, 0.18);

  opacity: 0;

  translate: 0 25px;
}

.footer-bottom.footer-revealed {
  animation:
    footerBottomReveal
    0.75s
    cubic-bezier(0.22, 1, 0.36, 1)
    both;
}

@keyframes footerBottomReveal {

  from {
    opacity: 0;

    translate: 0 25px;
  }

  to {
    opacity: 1;

    translate: 0 0;
  }

}


.footer-copyright {
  margin: 0;

  color:
    rgba(248, 240, 227, 0.4);

  font-size: 9px;

  letter-spacing: 0.02em;
}


/* =====================================================
   SOCIAL
===================================================== */

.footer-socials {
  display: flex;

  align-items: center;

  gap: 8px;
}


.footer-socials a {
  display: flex;

  align-items: center;

  justify-content: center;

  width: 29px;

  height: 29px;

  color:
    rgba(248, 240, 227, 0.7);

  border:
    1px solid
    rgba(186, 140, 91, 0.3);

  border-radius: 50%;

  text-decoration: none;

  transition:
    color 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease;
}


.footer-socials a:hover {
  color: #d4af37;

  border-color: #d4af37;

  transform: translateY(-2px);
}


/* =====================================================
   BACK TO TOP
===================================================== */

.footer-top {
  display: inline-flex;

  align-items: center;

  justify-content: flex-end;

  gap: 7px;

  padding: 0;

  color:
    rgba(248, 240, 227, 0.5);

  background: transparent;

  border: 0;

  font-size: 7px;

  font-weight: 600;

  letter-spacing: 0.18em;

  cursor: pointer;
}


.footer-top span {
  color: #d4af37;

  font-size: 14px;
}


.footer-top:hover {
  color: #f8f0e3;
}


/* =====================================================
   TABLET
===================================================== */

@media (max-width: 900px) {

  .footer-container {
    padding: 38px 25px 18px;
  }

  .footer-logo {
    height: 48px;
  }

  .footer-tagline {
    font-size: 18px;
  }

  .footer-description {
    font-size: 11px;
  }

  .footer-year strong {
    font-size: 38px;
  }

  .footer-links-grid {
    grid-template-columns:
      1fr
      1fr
      1fr;

    gap: 28px;
  }

  .footer-message {
    grid-column: 1 / -1;
  }

  .footer-message-text {
    font-size: 17px;
  }

}


/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 600px) {

  .footer-container {
    padding: 32px 20px 16px;
  }

  .footer-watermark {
    right: -25px;

    bottom: -25px;

    font-size: 110px;
  }

  .footer-brand-area {
    display: block;
  }

  .footer-logo {
    height: 46px;
  }

  .footer-tagline {
    margin-top: 12px;

    font-size: 18px;
  }

  .footer-description {
    margin-top: 7px;

    font-size: 11px;

    line-height: 1.55;
  }

  .footer-year {
    align-items: flex-start;

    margin-top: 18px;
  }

  .footer-year strong {
    font-size: 34px;
  }

  .footer-divider {
    margin: 24px 0 24px;
  }

  .footer-links-grid {
    grid-template-columns:
      1fr
      1fr;

    gap: 25px 20px;
  }

  .footer-column-title {
    margin-bottom: 10px;

    font-size: 7px;
  }

  .footer-column a {
    margin-bottom: 6px;

    font-size: 11px;
  }

  .footer-message {
    grid-column: 1 / -1;
  }

  .footer-message-text {
    max-width: 260px;

    font-size: 17px;
  }

  .footer-cta {
    width: 175px !important;

    margin-top: 12px !important;

    padding: 9px 11px;
  }

  .footer-bottom {
    display: flex;

    flex-direction: column;

    align-items: flex-start;

    gap: 15px;

    margin-top: 25px;
  }

  .footer-socials {
    order: 1;
  }

  .footer-copyright {
    order: 2;

    line-height: 1.5;
  }

  .footer-top {
    order: 3;
  }

}


/* =====================================================
   SMALL MOBILE
===================================================== */

@media (max-width: 380px) {

  .footer-container {
    padding-left: 16px;

    padding-right: 16px;
  }

  .footer-logo {
    height: 42px;
  }

  .footer-tagline {
    font-size: 16px;
  }

  .footer-description {
    font-size: 10px;
  }

  .footer-message-text {
    font-size: 16px;
  }

  .footer-links-grid {
    gap: 22px 15px;
  }

}


/* =====================================================
   REDUCED MOTION
===================================================== */

@media (prefers-reduced-motion: reduce) {

  .footer-brand-area,
  .footer-brand,
  .footer-year,
  .footer-divider,
  .footer-column,
  .footer-bottom {
    animation: none !important;

    opacity: 1 !important;

    translate: none !important;

    scale: 1 !important;
  }

  .footer-logo,
  .footer-column a,
  .footer-socials a,
  .footer-cta,
  .footer-cta span {
    transition: none !important;
  }

}

      `}</style>
    </>
  );
}

export default Footer;