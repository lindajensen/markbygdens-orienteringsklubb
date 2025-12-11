import PageHero from "../components/PageHero";
import boardHero from "../assets/images/heroes/board-hero.webp";

import "./Board.css";

function Board() {
  return (
    <>
      <PageHero imageUrl={boardHero} title="Styrelsen" />

      <section className="board">
        <div className="board__section">
          <h3 className="board__section-title">Styrelsepositioner</h3>
          <ul className="board__list">
            <li className="board__item">
              <span className="board__role">Ordförande</span>
              <span className="board__name">Martin Granat</span>
            </li>

            <li className="board__item">
              <span className="board__role">Kassör</span>
              <span className="board__name">Anders Andersson</span>
            </li>

            <li className="board__item">
              <span className="board__role">Sekreterare</span>
              <span className="board__name">Marcus Ragnarsson</span>
            </li>

            <li className="board__item">
              <span className="board__role">Webb</span>
              <span className="board__name">Eric Lindvall</span>
            </li>
          </ul>
        </div>

        <div className="board__section">
          <h3 className="board__section-title">Ledamöter & Suppleanter</h3>
          <div className="board__members">
            <div className="board__member">
              Kristin "Tintin" Hansson (Ledamot)
            </div>
            <div className="board__member">Pontus Karlsson (Suppleant)</div>
            <div className="board__member">Matilda Fagerlind (Suppleant)</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Board;
