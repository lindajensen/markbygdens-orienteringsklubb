// import { FaFacebook, FaInstagram } from "react-icons/fa";
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
      </div>
    </footer>
  );
}

export default Footer;
