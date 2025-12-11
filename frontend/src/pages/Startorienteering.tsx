import PageHero from "../components/PageHero";
import startOrienteeringHero from "../assets/images/heroes/start-orienteering-hero.webp";
import startOrienteering from "../assets/images/pages/start-orienteering.webp";

import "./StartOrienteering.css";

function Startorienteering() {
  return (
    <>
      <PageHero imageUrl={startOrienteeringHero} title="Börja orientera" />
      <section className="start-orienteering">
        <div className="start-orienteering__hero">
          <p className="start-orienteering__intro">
            Att börja orientera kan ha olika motiv och syften beroende på
            sammanhanget. Här är några vanliga anledningar till varför någon
            skulle vilja börja orientera:
          </p>
        </div>

        <div className="start-orienteering__content">
          <div className="start-orienteering__text">
            <div className="start-orienteering__reason">
              <h2 className="start-orienteering__reason-title">
                Intresse för natur och utomhusaktiviteter
              </h2>
              <p className="start-orienteering__reason-text">
                Många människor är naturligt intresserade av att utforska
                naturen och det omgivande landskapet. Orientering ger en
                möjlighet att kombinera detta intresse med fysisk aktivitet och
                utmaning.
              </p>
            </div>

            <div className="start-orienteering__reason">
              <h2 className="start-orienteering__reason-title">
                Fysisk aktivitet
              </h2>
              <p className="start-orienteering__reason-text">
                Orientering är en utmärkt form av motion. Det kräver inte bara
                löpning eller vandring, utan också mental ansträngning när man
                försöker hitta kontrollpunkter med hjälp av karta och kompass.
              </p>
            </div>

            <div className="start-orienteering__reason">
              <h2 className="start-orienteering__reason-title">Tävling</h2>
              <p className="start-orienteering__reason-text">
                Orientering är en tävlingsinriktad sport där man tävlar mot sig
                själv eller andra för att hitta kontrollpunkter på kortast
                möjliga tid. Många människor dras till den konkurrensmomentet i
                orientering.
              </p>
            </div>

            <div className="start-orienteering__reason">
              <h2 className="start-orienteering__reason-title">
                Mental utmaning
              </h2>
              <p className="start-orienteering__reason-text">
                Orientering kräver att man tänker och navigerar snabbt och
                effektivt. Det är en sport där du ständigt måste använda din
                hjärna för att fatta beslut om rutter och vägval.
              </p>
            </div>

            <div className="start-orienteering__reason">
              <h2 className="start-orienteering__reason-title">
                Social gemenskap
              </h2>
              <p className="start-orienteering__reason-text">
                Orienteringsklubbar och evenemang kan erbjuda en chans att
                träffa likasinnade människor och bygga sociala relationer.
              </p>
            </div>

            <div className="start-orienteering__reason">
              <h2 className="start-orienteering__reason-title">
                Utforska nya platser
              </h2>
              <p className="start-orienteering__reason-text">
                Orientering kan ta dig till nya och intressanta platser,
                inklusive skogar, parker och naturreservat som du kanske aldrig
                har besökt tidigare.
              </p>
            </div>

            <div className="start-orienteering__reason">
              <h2 className="start-orienteering__reason-title">
                Kartläsning och navigationsfärdigheter
              </h2>
              <p className="start-orienteering__reason-text">
                Orientering är ett utmärkt sätt att förbättra dina kartläsnings-
                och navigationsfärdigheter, vilka kan vara användbara i många
                andra sammanhang.
              </p>
            </div>
          </div>

          <div className="start-orienteering__image">
            <img src={startOrienteering} alt="Person som orienterar i skogen" />
          </div>
        </div>

        <div className="start-orienteering__cta">
          <p className="start-orienteering__cta-text">
            Så varför någon börjar orientera beror på deras personliga intressen
            och mål.
          </p>
          <p>
            <strong>
              Om du är intresserad av att börja orientera, kan det vara en bra
              idé att kontakta din lokala orienteringsklubb eller förening för
              att få mer information och eventuellt prova på sporten.
            </strong>
          </p>
        </div>
      </section>
    </>
  );
}

export default Startorienteering;
