import heroBackground from "../assets/images/hero.png";

function Hero() {
  return (
    <section
      className="
        relative
        w-full
        min-h-[650px]
        overflow-hidden
        flex
        items-center
      "
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#FFF8EA]/10" />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}
      <div className="relative z-10 w-full">
        <div
          className="
            w-full
            px-6
            sm:px-10
            lg:px-0
          "
          style={{
            paddingLeft: "clamp(24px, 8.7vw, 145px)",
          }}
        >
          <div
            className="
              w-[610px]
              max-w-full
            "
          >
            {/* =================================================
                TOP LABEL
            ================================================= */}
            <div
              className="
                flex
                items-center
                gap-4
                mb-6
                whitespace-nowrap
              "
            >
              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.30em]
                  text-[#062D3E]
                "
              >
                Indian Heritage
              </span>

              <span className="text-[#BA8C5B]">
                |
              </span>

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.30em]
                  text-[#062D3E]
                "
              >
                Modern Elegance
              </span>

              <span
                className="
                  ml-2
                  h-px
                  w-[105px]
                  shrink-0
                  bg-[#BA8C5B]
                "
              />
            </div>

            {/* =================================================
                HEADING
            ================================================= */}
            <h1
              className="
                m-0
                text-[70px]
                font-normal
                leading-[0.92]
                tracking-[-0.035em]
                text-[#062D3E]
              "
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
              }}
            >
              A Legacy
            </h1>

            <h2
              className="
                m-0
                mt-3
                text-[59px]
                font-normal
                leading-[0.95]
                tracking-[-0.03em]
                text-[#BA8C5B]
              "
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
              }}
            >
              In Every Detail
            </h2>

            {/* =================================================
                DECORATIVE LINE
            ================================================= */}
            <div
              className="
                mt-7
                flex
                w-[605px]
                max-w-full
                items-center
                gap-5
              "
            >
              <span className="h-px flex-1 bg-[#BA8C5B]" />

              <span
                className="
                  flex
                  h-[28px]
                  w-[28px]
                  shrink-0
                  items-center
                  justify-center
                  text-[24px]
                  leading-none
                  text-[#BA8C5B]
                "
              >
                ♧
              </span>

              <span className="h-px flex-1 bg-[#BA8C5B]" />
            </div>

            {/* =================================================
                DESCRIPTION
            ================================================= */}
            <p
              className="
                m-0
                mt-6
                w-[500px]
                max-w-full
                text-[16px]
                leading-[1.55]
                text-[#062D3E]
              "
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
              }}
            >
              Exquisite jewellery inspired by tradition, crafted for today
              and cherished forever.
            </p>

            {/* =================================================
                BUTTON ROW
            ================================================= */}
            <div
              className="
                mt-7
                flex
                items-center
                gap-8
              "
            >
              {/* EXPLORE BUTTON */}

              <button
                type="button"
                className="
                  flex
                  h-[48px]
                  w-[260px]
                  shrink-0
                  items-center
                  justify-between
                  bg-[#062D3E]
                  px-6

                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.20em]
                  text-[#FFF8EA]

                  transition
                  duration-300
                  hover:bg-[#0A4054]
                "
              >
                <span>
                  Explore Collections
                </span>

                <span
                  className="
                    text-[21px]
                    font-light
                    leading-none
                    text-[#BA8C5B]
                  "
                >
                  →
                </span>
              </button>

              {/* OUR STORY */}

              <button
                type="button"
                className="
                  shrink-0
                  whitespace-nowrap
                  border-b
                  border-[#BA8C5B]
                  pb-1

                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#062D3E]

                  transition
                  duration-300
                  hover:text-[#BA8C5B]
                "
              >
                Our Story
              </button>
            </div>

            {/* =================================================
                FEATURE STRIP
            ================================================= */}
            <div
              className="
                mt-8
                flex
                h-[48px]
                items-center
              "
            >
              {/* TRADITIONAL */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                  pr-5
                "
              >
                <span
                  className="
                    text-[27px]
                    leading-none
                    text-[#BA8C5B]
                  "
                >
                  ♧
                </span>

                <div>
                  <p
                    className="
                      m-0
                      text-[8px]
                      uppercase
                      leading-[1.2]
                      tracking-[0.18em]
                      text-[#062D3E]
                    "
                  >
                    Traditional
                  </p>

                  <p
                    className="
                      m-0
                      mt-1
                      text-[8px]
                      uppercase
                      leading-[1.2]
                      tracking-[0.18em]
                      text-[#062D3E]
                    "
                  >
                    Craftsmanship
                  </p>
                </div>
              </div>

              {/* DIVIDER */}

              <span
                className="
                  h-9
                  w-px
                  shrink-0
                  bg-[#BA8C5B]/60
                "
              />

              {/* TIMELESS */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                  px-5
                "
              >
                <span
                  className="
                    text-[27px]
                    leading-none
                    text-[#BA8C5B]
                  "
                >
                  ◇
                </span>

                <div>
                  <p
                    className="
                      m-0
                      text-[8px]
                      uppercase
                      leading-[1.2]
                      tracking-[0.18em]
                      text-[#062D3E]
                    "
                  >
                    Timeless
                  </p>

                  <p
                    className="
                      m-0
                      mt-1
                      text-[8px]
                      uppercase
                      leading-[1.2]
                      tracking-[0.18em]
                      text-[#062D3E]
                    "
                  >
                    Designs
                  </p>
                </div>
              </div>

              {/* DIVIDER */}

              <span
                className="
                  h-9
                  w-px
                  shrink-0
                  bg-[#BA8C5B]/60
                "
              />

              {/* TRUSTED */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                  pl-5
                "
              >
                <span
                  className="
                    text-[27px]
                    leading-none
                    text-[#BA8C5B]
                  "
                >
                  ♧
                </span>

                <div>
                  <p
                    className="
                      m-0
                      text-[8px]
                      uppercase
                      leading-[1.2]
                      tracking-[0.18em]
                      text-[#062D3E]
                    "
                  >
                    Trusted
                  </p>

                  <p
                    className="
                      m-0
                      mt-1
                      text-[8px]
                      uppercase
                      leading-[1.2]
                      tracking-[0.18em]
                      text-[#062D3E]
                    "
                  >
                    Since 1965
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;