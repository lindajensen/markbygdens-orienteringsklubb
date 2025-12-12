import PageHero from "../components/PageHero";
import orienteeringMapHero from "../assets/images/heroes/start-orienteering-hero.webp";
import orienteeringMap from "../assets/images/heroes/board-hero.webp";

import "./OrienteeringMap.css";

function OrienteeringMap() {
  return (
    <>
      <PageHero imageUrl={orienteeringMapHero} title="Orienteringskartan" />

      <section className="orienteering-map">
        <div className="orienteering-map__hero">
          <p className="orienteering-map__intro">
            En orienteringskarta är en speciell typ av karta som används inom
            sporten orientering. Den är utformad för att hjälpa orienterare att
            navigera och hitta kontrollpunkter i terrängen så snabbt och
            effektivt som möjligt. Här är några viktiga delar av en
            orienteringskarta:
          </p>
        </div>

        <div className="orienteering-map__content">
          <div className="orienteering-map__text">
            <div className="orienteering-map__reason">
              <h2 className="orienteering-map__title">Terrängdetaljer</h2>
              <p className="orienteering-map__reason-text">
                Kartan visar olika terrängdetaljer som skog, sankmarker, öppen
                mark, sjöar, vägar, stigar, höjdlinjer och andra natur- och
                markformationer. Dessa detaljer är avgörande för att
                orienteraren ska kunna fatta beslut om bästa vägen att ta.
              </p>
            </div>

            <div className="orienteering-map__reason">
              <h2 className="orienteering-map__title">Kontrollpunkter</h2>
              <p className="orienteering-map__reason-text">
                Kontrollpunkterna är markerade på kartan med cirklar och nummer.
                Dessa representerar de platser som orienteraren måste besöka i
                en viss ordning under tävlingen. Kontrollpunkterna kan vara
                markerade med en specifik symbol som gör det lätt att känna igen
                dem.
              </p>
            </div>

            <div className="orienteering-map__reason">
              <h2 className="orienteering-map__title">Skala</h2>
              <p className="orienteering-map__reason-text">
                Skalan på kartan visar förhållandet mellan kartans storlek och
                verklig terräng. Till exempel kan skalan vara 1:10 000, vilket
                innebär att varje centimeter på kartan motsvarar 100 meter i
                verkligheten.
              </p>
            </div>

            <div className="orienteering-map__reason">
              <h2 className="orienteering-map__title">Områdesbeskrivning</h2>
              <p className="orienteering-map__reason-text">
                Kartan kan innehålla en beskrivning av området, inklusive
                markägarens namn och eventuella restriktioner, såsom områden som
                är privata eller skyddade.
              </p>
            </div>

            <div className="orienteering-map__reason">
              <h2 className="orienteering-map__title">Höjdlinjer</h2>
              <p className="orienteering-map__reason-text">
                Höjdlinjer används för att visa terrängens höjdskillnader. De
                hjälper orienteraren att förstå områdets topografi och vilka
                sluttningar som måste övervinnas.
              </p>
            </div>

            <div className="orienteering-map__reason">
              <h2 className="orienteering-map__title">Riktning</h2>
              <p className="orienteering-map__reason-text">
                Kartan visar riktningen, vanligtvis norr, så att orienteraren
                kan använda kompassen för att räkna ut sin riktning i terrängen.
              </p>
            </div>

            <div className="orienteering-map__reason">
              <h2 className="orienteering-map__title">Kompasståtring</h2>
              <p className="orienteering-map__reason-text">
                En orienteringskarta innehåller ofta en kompasståtring som
                hjälper orienteraren att justera sin kompass så att den pekar i
                rätt riktning i förhållande till kartan.
              </p>
            </div>

            <div className="orienteering-map__reason">
              <h2 className="orienteering-map__title">Kontrollnummer</h2>
              <p className="orienteering-map__reason-text">
                Vid varje kontrollpunkt finns ett nummer som korresponderar med
                numret på kartan. När orienteraren når en kontrollpunkt ska de
                kontrollera att numret stämmer överens med kartan.
              </p>
            </div>
          </div>

          <div className="orienteering-map__image">
            <img src={orienteeringMap} alt="Orienteringskarta" />
          </div>
        </div>

        <div className="orienteering-map__cta">
          <p className="orienteering-map__cta-text">
            Orienteringskartor är vanligtvis mycket detaljerade och precist
            uppmätta för att ge orienteraren nödvändig information för att
            navigera genom terrängen och hitta kontrollpunkterna. Kartan är en
            central del av orienteringssporten och kräver färdigheter i att
            använda den tillsammans med en kompass för att följa en planerad
            rutt och hitta kontrollpunkterna i rätt ordning.
          </p>
        </div>
      </section>
    </>
  );
}

export default OrienteeringMap;
