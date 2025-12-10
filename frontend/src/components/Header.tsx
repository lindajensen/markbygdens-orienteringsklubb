import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">LOGO</div>

        <button
          className={`header__hamburger ${
            isMenuOpen ? "header__hamburger--open" : ""
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Öppna meny"
        >
          <span className="header__hamburger-line"></span>
          <span className="header__hamburger-line"></span>
          <span className="header__hamburger-line"></span>
        </button>

        <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link to="/news" className="header__nav-link">
                Nyheter
              </Link>
            </li>

            <li className="header__nav-item">
              <Link to="/images-videos" className="header__nav-link">
                Bilder & Videos
              </Link>
            </li>

            <li className="header__nav-item">
              <Link to="/sponsors" className="header__nav-link">
                Sponsorer
              </Link>
            </li>
            {/* Dropdowns här sen */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
