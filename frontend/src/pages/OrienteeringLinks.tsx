import PageHero from "../components/PageHero";
import orienteeringsLinksHero from "../assets/images/heroes/orienteering-links-hero.webp";

import soft from "../assets/images/organizations/svenska-orienteringsforbundet.png";
import iof from "../assets/images/organizations/international-orienteering-federation.png";
import frolunda from "../assets/images/organizations/frolunda-ol.png";

import "./OrienteeringLinks.css";

function OrienteeringLinks() {
  return (
    <>
      <PageHero imageUrl={orienteeringsLinksHero} title="Orienteringslänkar" />

      <section className="links">
        <div className="links__section">
          <h2 className="links__section-title">Förbund</h2>
          <div className="links__list">
            <a
              href="https://www.orientering.se/"
              className="links__item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="links__logo">
                <img src={soft} alt="Svenska Orienteringsförbundet" />
              </div>
              <div className="links__content">
                <h3 className="links__name">Svenska orienteringsförbundet</h3>
                <p className="links__description">
                  Riksorganisation för orientering i Sverige
                </p>
              </div>
            </a>

            <a
              href="https://orienteering.sport/"
              target="_blank"
              rel="noopener noreferrer"
              className="links__item"
            >
              <div className="links__logo">
                <img src={iof} alt="Internationella orienteringsförbundet" />
              </div>
              <div className="links__content">
                <h3 className="links__name">
                  Internationella orienteringsförbundet
                </h3>
                <p className="links__description">
                  Internationell orienteringsorganisation
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="links__section">
          <h2 className="links__section-title">Klubbar</h2>
          <div className="links__list">
            <a
              href="https://frolundaol.se/"
              target="_blank"
              rel="noopener noreferrer"
              className="links__item"
            >
              <div className="links__logo">
                <img src={frolunda} alt="Frölunda OL" />
              </div>
              <div className="links__content">
                <h3 className="links__name">Frölunda OL</h3>
                <p className="links__description">Södra Göteborg</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default OrienteeringLinks;
