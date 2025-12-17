import PageHero from "../components/PageHero";
import trainingsHero from "../assets/images/heroes/board-hero.webp";

import "./Trainings.css";

function Trainings() {
  return (
    <>
      <PageHero imageUrl={trainingsHero} title="Träningar" />

      <article className="trainings">
        <p className="trainings__intro">
          Här hittar du alla träningar och events för våren 2024. Välkommen!
        </p>

        <div className="trainings__months">
          <section className="trainings__month">
            <h2 className="trainings__month-title">Mars 2025</h2>
            <ul className="trainings__events">
              <li className="trainings__event">
                <div className="trainings__event-header">
                  <time className="trainings__event-date" dateTime="2025-03-23">
                    Lördag 23 mars
                  </time>
                </div>
                <p className="trainings__event-description">
                  Träningsdag i Kinnaström, Kinna, för 13 år och äldre
                </p>
              </li>

              <li className="trainings__event">
                <div className="trainings__event-header">
                  <time className="trainings__event-date" dateTime="2025-03-26">
                    Tisdag 26 mars
                  </time>
                </div>
                <p className="trainings__event-description">
                  Vårupptakt vid Hedgårdessjon i Skene, träning + info
                </p>
              </li>
            </ul>
          </section>

          <section className="trainings__month">
            <h2 className="trainings__month-title">April 2025</h2>
            <ul className="trainings__events">
              <li className="trainings__event">
                <div className="trainings__event-header">
                  <time className="trainings__event-date" dateTime="2025-04-01">
                    Måndag 1 april
                  </time>
                </div>
                <p className="trainings__event-description">
                  Orienteringstävling i Fjärås (Fjärås AIK och OK Löftan)
                </p>
              </li>

              <li className="trainings__event">
                <div className="trainings__event-header">
                  <time className="trainings__event-date" dateTime="2025-04-02">
                    Tisdag 2 april
                  </time>
                </div>
                <p className="trainings__event-description">
                  Markbygdens gemensamma ungdoms/vuxen-träning i Sätila
                </p>
              </li>

              <li className="trainings__event">
                <div className="trainings__event-header">
                  <time className="trainings__event-date" dateTime="2025-04-06">
                    Lördag 6 april
                  </time>
                </div>
                <p className="trainings__event-description">
                  Brudarebackens sprintstafett (Göteborgs SK)
                </p>
              </li>

              <li className="trainings__event">
                <div className="trainings__event-header">
                  <time className="trainings__event-date" dateTime="2025-04-09">
                    Tisdag 9 april
                  </time>
                </div>
                <p className="trainings__event-description">
                  Markbygdens gemensamma ungdoms/vuxen-träning i Skene +
                  Nybörjarkurs
                </p>
              </li>

              <li className="trainings__event">
                <div className="trainings__event-header">
                  <time className="trainings__event-date" dateTime="2025-04-11">
                    Torsdag 11 april
                  </time>
                </div>
                <p className="trainings__event-description">
                  Kretsträning i Mark – Teknikträning för 13 år och äldre
                  (orange + svart)
                </p>
              </li>

              <li className="trainings__event">
                <div className="trainings__event-header">
                  <time className="trainings__event-date" dateTime="2025-04-16">
                    Tisdag 16 april
                  </time>
                </div>
                <p className="trainings__event-description">
                  Markbygdens gemensamma ungdoms/vuxen-träning i Sätila +
                  Nybörjarkurs
                </p>
              </li>

              <li className="trainings__event">
                <div className="trainings__event-header">
                  <time className="trainings__event-date" dateTime="2025-04-18">
                    Torsdag 18 april
                  </time>
                </div>
                <p className="trainings__event-description">
                  Kretsträning i Mark – Teknikträning för 13 år och äldre
                  (orange + svart)
                </p>
              </li>

              <li className="trainings__event">
                <div className="trainings__event-header">
                  <time className="trainings__event-date" dateTime="2025-04-23">
                    Tisdag 23 april
                  </time>
                </div>
                <p className="trainings__event-description">
                  Skogsmatchen Bollebygd/Rävlanda, OK Orinto + Nybörjarkurs
                </p>
              </li>

              <li className="trainings__event">
                <div className="trainings__event-header">
                  <time className="trainings__event-date" dateTime="2025-04-25">
                    Torsdag 25 april
                  </time>
                </div>
                <p className="trainings__event-description">
                  Kretsträning i Mark – Teknikträning för 13 år och äldre
                  (orange + svart)
                </p>
              </li>

              <li className="trainings__event">
                <div className="trainings__event-header">
                  <time className="trainings__event-date" dateTime="2025-04-27">
                    Lördag 27 april
                  </time>
                </div>
                <p className="trainings__event-description">
                  Orienteringstävling i Tranemo (OK Tranan)
                </p>
              </li>
            </ul>
          </section>

          <section className="trainings__month">
            <h2 className="trainings__month-title">Maj 2025</h2>
            <ul className="trainings__events">
              <li className="trainings__event">
                <div className="trainings__event-header">
                  <time className="trainings__event-date" dateTime="2025-05-02">
                    Torsdag 2 maj
                  </time>
                </div>
                <p className="trainings__event-description">
                  Kretsträning i Mark – Teknikträning för 13 år och äldre
                  (orange + svart)
                </p>
              </li>

              <li className="trainings__event">
                <div className="trainings__event-header">
                  <time className="trainings__event-date" dateTime="2025-05-07">
                    Tisdag 7 maj
                  </time>
                </div>
                <p className="trainings__event-description">
                  Markbygdens gemensamma ungdoms/vuxen-träning i Skene +
                  Nybörjarkurs
                </p>
              </li>

              <li className="trainings__event">
                <div className="trainings__event-header">
                  <time className="trainings__event-date" dateTime="2025-05-12">
                    Söndag 12 maj
                  </time>
                </div>
                <p className="trainings__event-description">
                  Orienteringstävling i Bollebygd/Rävlanda (OK Orinto) +
                  Nybörjarkurs
                </p>
              </li>

              <li className="trainings__event">
                <div className="trainings__event-header">
                  <time className="trainings__event-date" dateTime="2025-05-14">
                    Tisdag 14 maj
                  </time>
                </div>
                <p className="trainings__event-description">
                  Skogsmatchen Sätila/Fotskäl (OK Raven)
                </p>
              </li>

              <li className="trainings__event">
                <div className="trainings__event-header">
                  <time className="trainings__event-date" dateTime="2025-05-16">
                    Torsdag 16 maj
                  </time>
                </div>
                <p className="trainings__event-description">
                  Dag 7:an i Rydboholm (Rydboholms SK)
                </p>
              </li>

              <li className="trainings__event">
                <div className="trainings__event-header">
                  <time className="trainings__event-date" dateTime="2025-05-19">
                    Söndag 19 maj
                  </time>
                </div>
                <p className="trainings__event-description">
                  Orienteringstävling i Lidköping (Lidköpings VSK), sprint
                  individuellt och stafett, bussresa i klubben
                </p>
              </li>

              <li className="trainings__event">
                <div className="trainings__event-header">
                  <time className="trainings__event-date" dateTime="2025-05-21">
                    Tisdag 21 maj
                  </time>
                </div>
                <p className="trainings__event-description">
                  Markbygdens gemensamma ungdoms/vuxen-träning i Sätila +
                  Nybörjarkurs
                </p>
              </li>

              <li className="trainings__event">
                <div className="trainings__event-header">
                  <time className="trainings__event-date" dateTime="2025-05-25">
                    Söndag 25 maj
                  </time>
                </div>
                <p className="trainings__event-description">
                  Orienteringstävling i Herrljunga (Herrljunga SK)
                </p>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </>
  );
}

export default Trainings;
