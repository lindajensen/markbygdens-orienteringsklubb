import PageHero from "../components/PageHero";
import competitionsHero from "../assets/images/heroes/competitions-hero.webp";

import "./Competitions.css";

function Competitions() {
  return (
    <>
      <PageHero imageUrl={competitionsHero} title="Tävlingar" />
      <section className="competitions">
        <h2 className="competitions__title">Anmälan i Eventor</h2>

        <div className="competitions__content">
          <p className="competitions-__text">
            I Eventors tävlingsprogram har du översikt över vad du är anmäld
            till och du får också en personlig sida med dina tävlingsresultat.
            Loggar du in med din personliga kod är ditt namn, normala
            tävlingsklass och SportIdent-nummer förvalt samt att du får uppgift
            om avståndet från din hemadress till tävlingen i tävlingsprogrammet.
          </p>

          <p className="competitions__text">
            Du har också möjlighet att anmäla andra tävlande från klubben.
          </p>

          <p className="competitions__text">
            Hör av dig till en ledare i din klubb för hjälp med att skapa en
            inloggning om du inte redan har en sådan.
          </p>
        </div>

        <div className="competitions__cta">
          <h3 className="competitions__cta-title">Redo att anmäla dig?</h3>
          <p className="competitions__cta-text">
            Besök Eventor för att se kommande tävlingar och anmäla dig.
          </p>
          <a
            href="https://eventor.orientering.se/"
            target="_blank"
            rel="noopener noreferrer"
            className="competitions__button"
          >
            Gå till Eventor
          </a>
        </div>
      </section>
    </>
  );
}

export default Competitions;
