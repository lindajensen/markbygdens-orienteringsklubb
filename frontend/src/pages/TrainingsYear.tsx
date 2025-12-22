import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { sanityClient } from "../lib/client";

import { TrainingItem } from "../types";
import { formatDate } from "../utils/formatDate";

import { IoWarningOutline, IoCalendarOutline } from "react-icons/io5";

import PageHero from "../components/PageHero";
import trainingsHero from "../assets/images/heroes/board-hero.webp";

import "./TrainingsYear.css";

function TrainingsYear() {
  const { year } = useParams();

  const [trainings, setTrainings] = useState<TrainingItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchTrainings() {
    setIsLoading(true);
    setError(null);

    try {
      // throw new Error("Kunde inte ansluta till servern");
      const query = `*[_type == "training" && string::split(date, "-")[0] == $year] | order(date asc){
        _id,
        title,
        date,
        location,
        description,
        category
      }`;

      const data = await sanityClient.fetch<TrainingItem[]>(query, { year });

      // await new Promise((resolve) => setTimeout(resolve, 3000));

      setTrainings(data);
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
    fetchTrainings();
  }, [year]);

  const groupedByMonth = trainings.reduce((acc, training) => {
    const date = new Date(training.date);
    const monthKey = date.toLocaleDateString("sv-SE", {
      month: "long",
      year: "numeric",
    });

    if (!acc[monthKey]) {
      acc[monthKey] = [];
    }

    acc[monthKey].push(training);
    return acc;
  }, {} as Record<string, TrainingItem[]>);

  return (
    <>
      <PageHero imageUrl={trainingsHero} title={`Träningar ${year}`} />

      {isLoading && (
        <div className="trainings-year__loading">
          <div className="trainings-year__spinner"></div>
          <p>Laddar träningar...</p>
        </div>
      )}

      {error && (
        <div className="trainings-year__error">
          <div className="trainings-year__error-icon">
            <IoWarningOutline size={60} color="#d32f2f" />
          </div>
          <h3 className="trainings-year__error-title">
            Kunde inte ladda träningar
          </h3>
          <p className="trainings-year__error-text">{error}</p>
          <button
            onClick={fetchTrainings}
            className="trainings-year__error-button"
          >
            Försök igen
          </button>
        </div>
      )}

      {trainings.length === 0 && !isLoading && !error && (
        <div className="trainings-year__empty">
          <div className="trainings-year__empty-illustration">
            <IoCalendarOutline size={60} />
          </div>
          <h2 className="trainings-year__empty-title">
            Inga träningar för {year}
          </h2>
          <p className="trainings-year__empty-text">
            Det finns inga träningar inlagda för detta år än.
          </p>
          <Link
            className="trainings-year__error-button"
            to="/arrangemang/traningar"
          >
            Välj annat år
          </Link>
        </div>
      )}

      {trainings.length > 0 && (
        <article className="trainings-year">
          <p className="trainings-year__intro">
            Här hittar du alla träningar, tävlingar och events för {year}.
            Välkommen!
          </p>

          <div className="trainings-year__months">
            {Object.entries(groupedByMonth).map(([month, monthTrainings]) => (
              <section key={month} className="trainings-year__month">
                <h2 className="trainings-year__month-title">
                  {month.charAt(0).toUpperCase() + month.slice(1)}
                </h2>
                <ul className="trainings-year__events">
                  {monthTrainings.map((training) => (
                    <li key={training._id} className="trainings-year__event">
                      <div className="trainings-year__event-header">
                        <time
                          className="trainings-year__event-date"
                          dateTime={training.date}
                        >
                          {formatDate(training.date)}
                        </time>
                        {training.location && (
                          <span className="trainings-year__event-location">
                            {training.location}
                          </span>
                        )}
                      </div>
                      <h3 className="trainings-year__event-title">
                        {training.title}
                      </h3>
                      {training.description && (
                        <p className="trainings-year__event-description">
                          {training.description}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </article>
      )}
    </>
  );
}

export default TrainingsYear;
