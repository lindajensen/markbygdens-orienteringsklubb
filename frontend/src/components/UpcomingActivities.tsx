import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sanityClient } from "../lib/client";

import {
  IoWarningOutline,
  IoCalendarOutline,
  IoLocationOutline,
} from "react-icons/io5";

import { TrainingItem } from "../types";

import "./UpcomingActivities.css";

function UpcomingActivities() {
  const [activities, setActivities] = useState<TrainingItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchUpcomingActivities() {
    setIsLoading(true);

    try {
      const today = new Date().toISOString().split("T")[0];

      // throw new Error("Kunde inte ansluta till servern");

      const query = `*[_type == "training" && date >= $today] | order(date asc)[0...4]{
        _id,
        title,
        date,
        location,
        category
      }`;

      // await new Promise((resolve) => setTimeout(resolve, 10000));

      const data = await sanityClient.fetch<TrainingItem[]>(query, { today });
      setActivities(data);
    } catch (error) {
      console.error("Failed to fetch upcoming activities:", error);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Ett oväntat fel uppstod");
      }
    } finally {
      setIsLoading(false);
    }
  }

  function getCategoryLabel(category: string) {
    const labels: Record<string, string> = {
      training: "Träning",
      competition: "Tävling",
      event: "Event",
    };
    return labels[category] || category;
  }

  function formatDateParts(dateString: string) {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date
        .toLocaleDateString("sv-SE", { month: "short" })
        .toUpperCase()
        .replace(".", ""),
    };
  }

  useEffect(() => {
    fetchUpcomingActivities();
  }, []);

  return (
    <section className="upcoming-activities">
      <h2 className="upcoming-activities__title">Kommande Aktiviteter</h2>

      {isLoading && (
        <div className="upcoming-activities__loading">
          <div className="upcoming-activities__spinner"></div>
          <p>Laddar aktivieter...</p>
        </div>
      )}

      {error && (
        <div className="upcoming-activities__error">
          <div className="upcoming-activities__error-icon">
            <IoWarningOutline size={60} color="#d32f2f" />
          </div>
          <h3 className="upcoming-activities__error-title">
            Kunde inte ladda aktiviteter
          </h3>
          <p className="upcoming-activities__error-text">{error}</p>
          <button
            onClick={fetchUpcomingActivities}
            className="upcoming-activities__error-button"
          >
            Försök igen
          </button>
        </div>
      )}

      {activities.length === 0 && !isLoading && !error && (
        <div className="upcoming-activities__empty">
          <div className="upcoming-activities__empty-illustration">
            <IoCalendarOutline size={60} />
          </div>
          <h2 className="upcoming-activities__empty-title">
            Inga aktiviteter inplanerade just nu
          </h2>
          <p className="upcoming-activities__empty-text">
            Håll utkik här för kommande träningar, tävlingar och events!
          </p>
        </div>
      )}

      {activities.length > 0 && (
        <>
          {activities.map((activity) => {
            const { day, month } = formatDateParts(activity.date);

            return (
              <article key={activity._id} className="upcoming-activities__item">
                <div className="upcoming-activities__date-box">
                  <span className="upcoming-activities__day">{day}</span>
                  <span className="upcoming-activities__month">{month}</span>
                </div>
                <div className="upcoming-activities__content">
                  <div className="upcoming-activities__header">
                    <h3>{activity.title}</h3>
                    <span className="upcoming-activities__type">
                      {getCategoryLabel(activity.category)}
                    </span>
                  </div>
                  {activity.location && (
                    <p className="upcoming-activities__location">
                      <IoLocationOutline className="upcoming-activities__location-icon" />
                      {activity.location}
                    </p>
                  )}
                </div>
              </article>
            );
          })}

          <div className="upcoming-activities__cta">
            <Link
              to="/arrangemang/traningar"
              className="upcoming-activities__button"
            >
              Se alla aktiviteter →
            </Link>
          </div>
        </>
      )}
    </section>
  );
}

export default UpcomingActivities;
