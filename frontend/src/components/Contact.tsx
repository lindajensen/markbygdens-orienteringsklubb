import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="contact__title">Kontakta oss</h2>
      <div className="contact__divider"></div>

      <ul className="contact__list">
        <li className="contact__item">
          <p className="contact__label">E-post</p>
          <a className="contact__link" href="mailto:info@markbygdensok.se">
            info@markbygdensok.se
          </a>
        </li>

        <li className="contact__item">
          <p className="contact__label">Telefon</p>
          <a className="contact__link" href="tel:+46709355368">
            0709-35 53 68
          </a>
        </li>
      </ul>

      <p className="contact__social-title">Följ oss</p>
      <div className="contact__social">
        <a
          className="contact__social-link"
          href="https://www.facebook.com/markbygdensok"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Besök oss på Facebook"
        >
          <FaFacebookF aria-hidden="true" className="contact__social-icon" />
        </a>
        <a
          className="contact__social-link"
          href="https://www.instagram.com/markbygdensok/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Följ oss på Instagram"
        >
          <FaInstagram aria-hidden="true" className="contact__social-icon" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
