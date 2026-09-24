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
      {/* Soft overlay */}
      <div className="absolute inset-0 bg-[#FFF8EA]/10" />

      {/* HERO CONTENT */}
      <div className="relative z-10 w-full">
        <div
          className="
            mx-auto
            w-full
            px-5
            py-16
            lg:pl-[120px]
            lg:pr-0
            lg:py-20
          "
        >
          <div
            className="
              w-full
              max-w-[650px]
              lg:w-[52%]
              lg:-translate-y-8
            "
          >

          {/* TOP LABEL */}
          <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2">

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
                ml-0
                min-w-8
                flex-1
                h-px
                bg-[#BA8C5B]
              "
            />

          </div>


          {/* MAIN HEADING */}
          <h1
            className="
              text-5xl
              font-normal
              leading-[0.98]
              text-[#062D3E]
              sm:text-[60px]
              lg:text-[66px]
              xl:text-[70px]
            "
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            A Legacy
          </h1>


          {/* SECOND HEADING */}
          <h2
            className="
              mt-2
              text-4xl
              font-normal
              leading-[1]
              text-[#BA8C5B]
              sm:text-[48px]
              lg:text-[55px]
              xl:text-[59px]
            "
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            In Every Detail
          </h2>


          {/* DECORATIVE LINE */}
          <div className="mt-6 flex w-full items-center gap-4">

            <span className="h-px flex-1 bg-[#BA8C5B]" />

            <span className="text-[21px] leading-none text-[#BA8C5B]">
              ♧
            </span>

            <span className="h-px flex-1 bg-[#BA8C5B]" />

          </div>


          {/* DESCRIPTION */}
          <p
            className="
              mt-6
              max-w-[510px]
              text-[16px]
              leading-7
              text-[#062D3E]
            "
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            Exquisite jewellery inspired by tradition, crafted for today and
            cherished forever.
          </p>


          {/* BUTTONS */}
          <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-5">

            <button
              type="button"
              className="
                flex
                h-[44px]
                items-center
                gap-7
                bg-[#062D3E]
                px-7
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
              <span className="whitespace-nowrap">
                Explore Collections
              </span>

              <span className="text-[18px] text-[#BA8C5B]">
                →
              </span>
            </button>


            <button
              type="button"
              className="
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


          {/* FEATURE STRIP */}
          <div
            className="
              mt-9
              flex
              flex-wrap
              items-center
              gap-y-4
              border-t
              border-[#BA8C5B]/50
              pt-4
            "
          >

            {/* Traditional Craftsmanship */}
            <div className="flex items-center gap-3 pr-6">

              <span className="text-[23px] text-[#BA8C5B]">
                ♧
              </span>

              <div>
                <p className="text-[8px] uppercase tracking-[0.18em] text-[#062D3E]">
                  Traditional
                </p>

                <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-[#062D3E]">
                  Craftsmanship
                </p>
              </div>

            </div>


            <span className="hidden h-9 w-px bg-[#BA8C5B]/60 sm:block" />


            {/* Timeless Designs */}
            <div className="flex items-center gap-3 px-6">

              <span className="text-[23px] text-[#BA8C5B]">
                ◇
              </span>

              <div>
                <p className="text-[8px] uppercase tracking-[0.18em] text-[#062D3E]">
                  Timeless
                </p>

                <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-[#062D3E]">
                  Designs
                </p>
              </div>

            </div>


            <span className="hidden h-9 w-px bg-[#BA8C5B]/60 sm:block" />


            {/* Trusted Since 1965 */}
            <div className="flex items-center gap-3 pl-6">

              <span className="text-[23px] text-[#BA8C5B]">
                ♧
              </span>

              <div>
                <p className="text-[8px] uppercase tracking-[0.18em] text-[#062D3E]">
                  Trusted
                </p>

                <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-[#062D3E]">
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