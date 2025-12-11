import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { IoChevronDown } from "react-icons/io5";
import logo from "../assets/images/logo.jpg";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  function toggleDropdown(name: string) {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    function closeMenus(event: MouseEvent) {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    }

    document.addEventListener("mousedown", closeMenus);
    return () => {
      document.removeEventListener("mousedown", closeMenus);
    };
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <div className="header__container">
        <Link
          to="/"
          className="header__logo"
          onClick={() => setIsMenuOpen(false)}
        >
          <img src={logo} alt="Markbygdens OK" />
        </Link>

        <button
          className={`header__hamburger ${
            isMenuOpen ? "header__hamburger--open" : ""
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Stäng meny" : "Öppna meny"}
          aria-expanded={isMenuOpen}
        >
          <span className="header__hamburger-line"></span>
          <span className="header__hamburger-line"></span>
          <span className="header__hamburger-line"></span>
        </button>

        <nav
          className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}
          aria-label="Huvudnavigation"
        >
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link
                to="/news"
                className="header__nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Nyheter
              </Link>
            </li>

            <li className="header__nav-item">
              <Link
                to="/images-videos"
                className="header__nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Bilder & Videos
              </Link>
            </li>

            <li className="header__nav-item">
              <Link
                to="/sponsors"
                className="header__nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Sponsorer
              </Link>
            </li>

            <li className="header__nav-item">
              <button
                className="header__nav-link header__nav-link--dropdown"
                onClick={() => toggleDropdown("om-markbygden")}
                aria-expanded={activeDropdown === "om-markbygden"}
                aria-controls="dropdown-om-markbygden"
                aria-haspopup="true"
              >
                Om Markbygden
                <IoChevronDown
                  className={`header__dropdown-icon ${
                    activeDropdown === "om-markbygden"
                      ? "header__dropdown-icon--open"
                      : ""
                  }`}
                />
              </button>
              {activeDropdown === "om-markbygden" && (
                <ul
                  className="header__dropdown"
                  id="dropdown-om-markbygden"
                  role="menu"
                >
                  <li className="header__dropdown-item">
                    <Link
                      to="/about/board"
                      className="header__dropdown-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Styrelsen
                    </Link>
                  </li>
                  <li className="header__dropdown-item">
                    <Link
                      to="/about/start-orienteering"
                      className="header__dropdown-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Börja orientera
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="header__nav-item">
              <button
                className="header__nav-link header__nav-link--dropdown"
                onClick={() => toggleDropdown("arrangemang")}
                aria-expanded={activeDropdown === "arrangemang"}
                aria-controls="dropdown-arrangemang"
                aria-haspopup="true"
              >
                Arrangemang
                <IoChevronDown
                  className={`header__dropdown-icon ${
                    activeDropdown === "arrangemang"
                      ? "header__dropdown-icon--open"
                      : ""
                  }`}
                />
              </button>

              {activeDropdown === "arrangemang" && (
                <ul
                  className="header__dropdown"
                  id="dropdown-arrangemang"
                  role="menu"
                >
                  <li className="header__dropdown-item">
                    <Link
                      to="/about/board"
                      className="header__dropdown-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Träningar
                    </Link>
                  </li>

                  <li className="header__dropdown-item">
                    <Link
                      to="/about/start-orienteering"
                      className="header__dropdown-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Tävlingar
                    </Link>
                  </li>

                  <li className="header__dropdown-item">
                    <a
                      href="https://koncept.orientering.se/provapaaktiviteter/hittaut/mark/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="header__dropdown-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Hitta ut
                    </a>
                  </li>

                  <li className="header__dropdown-item">
                    <a
                      href="https://eventor.orientering.se/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="header__dropdown-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Eventor
                    </a>
                  </li>

                  <li className="header__dropdown-item">
                    <Link
                      to="/about/start-orienteering"
                      className="header__dropdown-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Orienteringslänkar
                    </Link>
                  </li>

                  <li className="header__dropdown-item">
                    <Link
                      to="/about/start-orienteering"
                      className="header__dropdown-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Månadens banor 2024
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
