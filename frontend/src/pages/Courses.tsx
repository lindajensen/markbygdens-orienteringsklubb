import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sanityClient } from "../lib/client";

import { IoWarningOutline, IoMapOutline } from "react-icons/io5";

import PageHero from "../components/PageHero";
import coursesHero from "../assets/images/heroes/courses-of-the-month-hero.webp";

import "./Courses.css";

function Courses() {
  const [years, setYears] = useState<number[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchYears() {
    setIsLoading(true);
    setError(null);

    try {
      const query = `*[_type == "courseOfTheMonth"] | order(year desc) {
        year
      }`;

      const data = await sanityClient.fetch<{ year: number }[]>(query);

      const uniqueYears = [...new Set(data.map((item) => item.year))]
        .sort()
        .reverse();

      setYears(uniqueYears);
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
    fetchYears();
  }, []);

  return (
    <>
      <PageHero imageUrl={coursesHero} title="Månadens banor" />
      <section className="courses">
        <p>Välj vilket år du vill se månadens banor för:</p>

        {isLoading && (
          <div className="courses__loading">
            <div className="courses__spinner"></div>
            <p>Laddar galleri...</p>
          </div>
        )}

        {error && (
          <div className="courses__error">
            <div className="courses__error-icon">
              <IoWarningOutline size={60} color="#d32f2f" />
            </div>
            <h3 className="courses__error-title">Kunde inte ladda år</h3>
            <p className="courses__error-text">{error}</p>
            <button onClick={fetchYears} className="courses__error-button">
              Försök igen
            </button>
          </div>
        )}

        {years.length === 0 && !isLoading && !error && (
          <div className="courses__empty">
            <div className="courses__empty-illustration">
              <IoMapOutline size={60} />
            </div>
            <h2 className="courses__empty-title">Inga banor att visa</h2>
            <p className="courses__empty-text">
              Månadens banor har inte lagts till än.
            </p>
          </div>
        )}

        {years.length > 0 && (
          <div className="courses__grid">
            {years.map((year) => (
              <Link
                key={year}
                to={`/arrangemang/manadens-banor/${year}`}
                className="year-card"
              >
                <h2>{year}</h2>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default Courses;
