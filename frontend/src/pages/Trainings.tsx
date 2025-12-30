import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sanityClient } from "../lib/client";

import PageHero from "../components/PageHero";
import trainingsHero from "../assets/images/heroes/board-hero.webp";

import "./Trainings.css";

function Trainings() {
  const [years, setYears] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchYears() {
    setIsLoading(true);
    try {
      const query = `*[_type == "training"] | order(date desc) {
        "year": string::split(date, "-")[0]
      }`;

      const data = await sanityClient.fetch<{ year: string }[]>(query);

      const uniqueYears = [...new Set(data.map((item) => item.year))]
        .sort()
        .reverse();

      await new Promise((resolve) => setTimeout(resolve, 5000));

      setYears(uniqueYears);
    } catch (error) {
      console.error("Failed to fetch years:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchYears();
  }, []);

  return (
    <>
      <PageHero imageUrl={trainingsHero} title="Träningar" />
      <section className="trainings-years">
        <p>Välj vilket år du vill se träningar för:</p>

        {isLoading && (
          <div className="trainings-years__loading">
            <div className="trainings-years__spinner"></div>
            <p>Laddar...</p>
          </div>
        )}

        <div className="trainings-years__grid">
          {years.map((year) => (
            <Link
              key={year}
              to={`/arrangemang/traningar/${year}`}
              className="training-years-card"
            >
              <h2>{year}</h2>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default Trainings;
