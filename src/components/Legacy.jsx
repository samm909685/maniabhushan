import { Link } from "react-router-dom";

function Legacy() {
  return (
    <section className="legacy-section">
      <div className="legacy-container">

        {/* Heading */}
        <div className="legacy-heading">
          <p className="legacy-eyebrow">OUR LEGACY</p>

          <h2>
            A Story Woven Through
            <br />
            Generations
          </h2>

          <span className="legacy-line"></span>
        </div>

        {/* Main Card */}
        <div className="legacy-card">

          {/* Left Content */}
          <div className="legacy-content">

            <p className="legacy-since">SINCE 1965</p>

            <h3>
              Where Tradition
              <br />
              Becomes Legacy
            </h3>

            <p className="legacy-description">
              Maniabhushan carries forward a story built on craftsmanship,
              trust and an enduring love for jewellery. What began with a
              passion for timeless artistry continues through generations,
              bringing traditional elegance into a new era.
            </p>

            <div className="legacy-details">

              <div className="legacy-detail">
                <strong>1965</strong>
                <span>BEGINNING</span>
              </div>

              <div className="legacy-divider"></div>

              <div className="legacy-detail">
                <strong>Generations</strong>
                <span>OF CRAFT</span>
              </div>

            </div>

            <Link to="/legacy" className="legacy-button">
              DISCOVER OUR STORY
              <span>→</span>
            </Link>

          </div>

          {/* Right Image */}
          <div className="legacy-image">

            <img
              src="/family.jpg"
              alt="Maniabhushan family legacy"
            />

            <div className="legacy-image-overlay"></div>

            <div className="legacy-image-text">
              <span>MANIABHUSHAN</span>
              <h4>A Heritage of Trust</h4>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Legacy;