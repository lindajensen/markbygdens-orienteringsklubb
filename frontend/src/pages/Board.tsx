import { useEffect, useState } from "react";
import { sanityClient } from "../lib/client";

import { BoardMember } from "../types";

import { IoWarningOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";

import PageHero from "../components/PageHero";
import boardHero from "../assets/images/heroes/board-hero.webp";

import "./Board.css";

function Board() {
  const [boardMembers, setBoardMembers] = useState<BoardMember[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchBoardMembers() {
    setIsLoading(true);
    setError(null);

    try {
      // throw new Error("Kunde inte ansluta till servern");
      const query = `*[_type == "boardMember"] | order(order asc){
        _id,
        name,
        role,
        category
      }`;

      const data = await sanityClient.fetch<BoardMember[]>(query);

      setBoardMembers(data);
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Ett oväntat fel uppstod");
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchBoardMembers();
  }, []);

  return (
    <>
      <PageHero imageUrl={boardHero} title="Styrelsen" />

      {isLoading && (
        <div className="news__loading">
          <div className="news__spinner"></div>
          <p>Laddar styrelsen...</p>
        </div>
      )}

      {error && (
        <div className="board__error">
          <div className="board__error-icon">
            <IoWarningOutline size={60} color="#d32f2f" />
          </div>
          <h3 className="board__error-title">
            Kunde inte ladda styrelsemedlemmar
          </h3>
          <p className="board__error-text">{error}</p>
          <button onClick={fetchBoardMembers} className="board__error-button">
            Försök igen
          </button>
        </div>
      )}

      {boardMembers.length === 0 && !isLoading && !error && (
        <div className="board__empty">
          <div className="board__empty-illustration">
            <IoPersonOutline size={60} />
          </div>
          <h2 className="board__empty-title">
            Inga styrelsemedlemmar att visa
          </h2>
          <p className="board__empty-text">
            Styrelsemedlemmar kommer läggas till här så snart de är
            tillgängliga.
          </p>
        </div>
      )}

      {boardMembers.length > 0 && (
        <section className="board">
          <div className="board__section">
            <h3 className="board__section-title">Styrelsepositioner</h3>
            <ul className="board__list">
              {boardMembers
                .filter((member) => member.category === "board")
                .map((member) => (
                  <li key={member._id} className="board__item">
                    <span className="board__role">{member.role}</span>
                    <span className="board__name">{member.name}</span>
                  </li>
                ))}
            </ul>
          </div>

          <div className="board__section">
            <h3 className="board__section-title">Ledamöter & Suppleanter</h3>
            <div className="board__members">
              {boardMembers
                .filter((member) => member.category === "member")
                .map((member) => (
                  <div key={member._id} className="board__member">
                    {member.name} ({member.role})
                  </div>
                ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Board;
