import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiHeart,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import logo from "../assets/images/maniabhushan-logo.png";

const FAVORITES_KEY = "maniabhushan_favorites";

function getFavorites() {
  try {
    const saved = localStorage.getItem(FAVORITES_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error("Failed to load favorites:", error);
    return [];
  }
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [favoriteCount, setFavoriteCount] = useState(0);

  useEffect(() => {
    const updateFavoriteCount = () => {
      setFavoriteCount(getFavorites().length);
    };

    updateFavoriteCount();

    window.addEventListener(
      "favoritesChanged",
      updateFavoriteCount
    );

    return () => {
      window.removeEventListener(
        "favoritesChanged",
        updateFavoriteCount
      );
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#C8A044]/25 bg-[#071720]">

      {/* =========================
          MAIN NAVBAR
      ========================== */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex h-[72px] items-center justify-between md:h-[82px]">

          {/* =========================
              LOGO
          ========================== */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center"
          >
            <img
              src={logo}
              alt="Maniabhushan Jewellers"
              className="h-12 w-auto object-contain md:h-[62px]"
            />
          </Link>

          {/* =========================
              DESKTOP
          ========================== */}
          <div className="hidden items-center gap-9 lg:flex">

            {/* Navigation */}
            <nav className="flex items-center gap-8 text-[15px]">

              <Link
                to="/"
                className="text-[#F8F0E3] transition hover:text-[#C8A044]"
              >
                Home
              </Link>

              <Link
                to="/collections"
                className="text-[#F8F0E3] transition hover:text-[#C8A044]"
              >
                Collections
              </Link>

              <Link
                to="/about"
                className="text-[#F8F0E3] transition hover:text-[#C8A044]"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="text-[#F8F0E3] transition hover:text-[#C8A044]"
              >
                Contact
              </Link>

            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-4 text-[20px]">

              {/* SEARCH */}
              <button
                type="button"
                aria-label="Search"
                className="text-[#F8F0E3] transition hover:text-[#C8A044]"
              >
                <FiSearch />
              </button>

              {/* FAVORITES */}
              <Link
                to="/favorites"
                aria-label="Favorites"
                className="relative text-[#F8F0E3] transition hover:text-[#C8A044]"
              >
                <FiHeart />

                {favoriteCount > 0 && (
                  <span className="absolute -right-3 -top-2 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#18322F] px-1 text-[10px] text-white">
                    {favoriteCount}
                  </span>
                )}
              </Link>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-green-500 transition hover:text-green-400"
              >
                <FaWhatsapp />
              </a>

            </div>
          </div>

          {/* =========================
              MOBILE RIGHT SIDE
          ========================== */}
          <div className="flex items-center gap-4 lg:hidden">

            {/* SEARCH */}
            <button
              type="button"
              aria-label="Search"
              className="text-[#F8F0E3]"
            >
              <FiSearch className="text-xl" />
            </button>

            {/* FAVORITES */}
            <Link
              to="/favorites"
              aria-label="Favorites"
              className="relative text-[#F8F0E3]"
            >
              <FiHeart className="text-xl" />

              {favoriteCount > 0 && (
                <span className="absolute -right-3 -top-2 flex h-[16px] min-w-[16px] items-center justify-center rounded-full bg-[#18322F] px-1 text-[9px] text-white">
                  {favoriteCount}
                </span>
              )}
            </Link>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-xl text-green-500"
            >
              <FaWhatsapp />
            </a>

            {/* MENU */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="text-2xl text-[#F8F0E3]"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>

          </div>
        </div>
      </div>

      {/* =========================
          MOBILE NAVIGATION
      ========================== */}
      {menuOpen && (
        <div className="border-t border-[#C8A044]/20 bg-[#071720] lg:hidden">

          <nav className="flex flex-col py-5">

            <Link
              to="/"
              onClick={closeMenu}
              className="px-6 py-4 text-[#F8F0E3] transition hover:bg-[#102832] hover:text-[#C8A044]"
            >
              Home
            </Link>

            <Link
              to="/collections"
              onClick={closeMenu}
              className="px-6 py-4 text-[#F8F0E3] transition hover:bg-[#102832] hover:text-[#C8A044]"
            >
              Collections
            </Link>

            <Link
              to="/about"
              onClick={closeMenu}
              className="px-6 py-4 text-[#F8F0E3] transition hover:bg-[#102832] hover:text-[#C8A044]"
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="px-6 py-4 text-[#F8F0E3] transition hover:bg-[#102832] hover:text-[#C8A044]"
            >
              Contact
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;