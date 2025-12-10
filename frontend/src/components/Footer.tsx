import { FaFacebook, FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__copyright">
          <small className="footer__text">
            {" "}
            &copy; {currentYear} Markbygdens OK
          </small>
        </div>
        <div className="footer__social">
          <ul className="footer__social-list">
            <li className="footer__social-item">
              <a
                className="footer__social-link"
                href="https://www.facebook.com/markbygdensok"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Besök oss på Facebook"
              >
                <FaFacebook
                  aria-hidden="true"
                  className="footer__social-icon"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/markbygdensok/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Följ oss på Instagram"
              >
                <FaInstagram
                  aria-hidden="true"
                  className="footer__social-icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
