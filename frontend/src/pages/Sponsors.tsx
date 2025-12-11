import PageHero from "../components/PageHero";
import sponsorsHero from "../assets/images/heroes/sponsors-hero.webp";

import icaKvantum from "../assets/images/sponsors/ica-kvantum-skene.webp";
import bilkonsulten from "../assets/images/sponsors/bilkonsulten.png";
import sparbanken from "../assets/images/sponsors/sparbanken-sjuharad.webp";
import markbladet from "../assets/images/sponsors/markbladet.png";

import "./Sponsors.css";

function Sponsors() {
  return (
    <>
      <PageHero imageUrl={sponsorsHero} title="Sponsorer" />
      
      <section className="sponsors">
        <h1 className="sponsors__title">Vi tackar alla våra sponsorer</h1>

        <div className="sponsors__grid">
          <div className="sponsors__card">
            <img src={icaKvantum} alt="ICA Kvantum Skene" />
            <p className="sponsors__name">ICA Kvantum Skene</p>
          </div>

          <div className="sponsors__card">
            <img src={bilkonsulten} alt="Bilkonsulten" />
            <p className="sponsors__name">Bilkonsulten</p>
          </div>

          <div className="sponsors__card">
            <img src={sparbanken} alt="Sparbanken Sjuhärad" />
            <p className="sponsors__name">Sparbanken Sjuhärad</p>
          </div>

          <div className="sponsors__card">
            <img src={markbladet} alt="Markbladet" />
            <p className="sponsors__name">Markbladet</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sponsors;
