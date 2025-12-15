//
import PageHero from "../components/PageHero";
import coursesHero from "../assets/images/heroes/courses-of-the-month-hero.webp";
import coursesMap from "../assets/images/pages/courses-of-the-month.webp";

import "./CoursesOfTheMonth.css";

function CoursesOfTheMonth() {
  return (
    <>
      <PageHero imageUrl={coursesHero} title="Månadens banor 2024" />
      <section className="courses">
        <p className="courses__intro">
          Under månaderna juni, juli och augusti kommer det finnas motionsbanor
          att springa runt om i Kinna-Skene. På reviderade kartor i nya områden
          för många.
        </p>

        <div className="courses__content">
          <div className="courses__sections">
            <div className="courses__section">
              <h2 className="courses__section-title">Perioder</h2>
              <div className="courses__periods">
                <div className="courses__period">
                  <div className="courses__period-date">3/6 – 30/6</div>
                  <div className="courses__period-location">
                    Kinna, Marieberg, Mjögasjön
                  </div>
                </div>
                <div className="courses__period">
                  <div className="courses__period-date">1/7 – 28/7</div>
                  <div className="courses__period-location">Kinnasten</div>
                </div>
                <div className="courses__period">
                  <div className="courses__period-date">29/7 – 25/8</div>
                  <div className="courses__period-location">Skene skog</div>
                </div>
              </div>
            </div>

            <div className="courses__section">
              <h2 className="courses__section-title">Information</h2>
              <ul className="courses__info-list">
                <li className="courses__info-item">
                  Det kommer finnas orange och svart bana under alla tre
                  månaderna, i vissa fall gul bana.
                </li>
                <li className="courses__info-item">
                  Banorna är av varierande längd.
                </li>
                <li className="courses__info-item">
                  Kontrollmarkeringar kommer vara snitslår.
                </li>
                <li className="courses__info-item">
                  Månadens bana kommer finnas på Eventor där även banorna kommer
                  finnas som pdf för egen utskrift.
                </li>
                <li className="courses__info-item">PM kommer närmare släpp.</li>
              </ul>
            </div>
          </div>

          <div className="courses__map">
            <img src={coursesMap} alt="Orienteringskarta" />
          </div>
        </div>

        <div className="courses__contact">
          <h3 className="courses__contact-title">Betalning & Kontakt</h3>
          <ul className="courses__contact-list">
            <li>
              <strong>Frivillig avgift:</strong> Swish till Marcus 072-3005488,
              märk med "Månadens bana"
            </li>
            <li>
              <strong>Ansvariga kartritare och banläggare:</strong>
            </li>
            <li>Stanley Taivula 070-5925240</li>
            <li>Marcus Ragnarsson 072-3005488</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default CoursesOfTheMonth;
