import { Link } from "react-router-dom";

import "./CallToAction.css";

function CallToAction() {
  return (
    <section className="cta">
      <div className="cta__container">
        <h2 className="cta__title">Nybörjare? Kom igång här!</h2>
        <p className="cta__text">
          Orientering är för alla! Vi hjälper dig att ta dina första steg i
          skogen.
        </p>
        <Link to="/om/borja-orientera" className="cta__button">
          Börja orientera →
        </Link>
      </div>
    </section>
  );
}

export default CallToAction;
