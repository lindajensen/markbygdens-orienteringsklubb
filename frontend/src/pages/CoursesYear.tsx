import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { sanityClient } from "../lib/client";
import { PortableText } from "@portabletext/react";

import { CourseItem } from "../types";

import { IoWarningOutline, IoMapOutline } from "react-icons/io5";

import PageHero from "../components/PageHero";
import coursesHero from "../assets/images/heroes/courses-of-the-month-hero.webp";
// import coursesMap from "../assets/images/pages/courses-of-the-month.webp";

import "./CoursesYear.css";

function CoursesYear() {
  const { year } = useParams();

  const [course, setCourse] = useState<CourseItem | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const paymentComponents = {
    block: {
      normal: ({ children }: any) => (
        <p className="courses-year__contact-item">{children}</p>
      ),
      h4: ({ children }: any) => (
        <h4 className="courses-year__contact-heading">{children}</h4>
      ),
    },
    marks: {
      strong: ({ children }: any) => (
        <strong className="courses-year__contact-heading">{children}</strong>
      ),
    },
  };

  async function fetchCourse() {
    setIsLoading(true);
    setError(null);

    try {
      // throw new Error("Kunde inte ansluta till servern");
      const query = `*[_type == "courseOfTheMonth" && year == $year][0]{
        _id,
        year,
        mapImage{
          asset->{
            url
          }
        },
        introduction,
        periods,
        information,
        paymentInfo,
        contacts
      }`;

      const data = await sanityClient.fetch<CourseItem>(query, {
        year: parseInt(year!),
      });

      // await new Promise((resolve) => setTimeout(resolve, 5000));

      setCourse(data);
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
    fetchCourse();
  }, [year]);

  return (
    <>
      <PageHero imageUrl={coursesHero} title={`Månadens banor ${year}`} />

      {isLoading && (
        <div className="courses-year__loading">
          <div className="courses-year__spinner"></div>
          <p>Laddar banor för {year}...</p>
        </div>
      )}

      {error && (
        <div className="courses-year__error">
          <div className="courses-year__error-icon">
            <IoWarningOutline size={60} color="#d32f2f" />
          </div>
          <h3 className="courses-year__error-title">Kunde inte ladda banor</h3>
          <p className="courses-year__error-text">{error}</p>
          <button onClick={fetchCourse} className="courses-year__error-button">
            Försök igen
          </button>
        </div>
      )}

      {!course && !isLoading && !error && (
        <div className="courses-year__empty">
          <div className="courses-year__empty-illustration">
            <IoMapOutline size={60} />
          </div>
          <h2 className="courses-year__empty-title">Inga banor att visa</h2>
          <p className="courses-year__empty-text">
            Månadens banor för olika år kommer läggas till här.
          </p>
        </div>
      )}
      {course && (
        <section className="courses-year">
          {course.introduction && (
            <p className="courses-year__intro">{course.introduction}</p>
          )}

          <div className="courses-year__content">
            <div className="courses-year__sections">
              {course.periods && (
                <div className="courses-year__section">
                  <h2 className="courses-year__section-title">Perioder</h2>
                  <div className="courses-year__periods">
                    {course.periods.map((period, index) => (
                      <div key={index} className="courses-year__period">
                        <div className="courses-year__period-date">
                          {period.dates}
                        </div>
                        <div className="courses-year__period-location">
                          {period.location}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {course.information && (
                <div className="courses-year__section">
                  <h2 className="courses-year__section-title">Information</h2>
                  <ul className="courses-year__info-list">
                    {course.information.map((info, index) => (
                      <li key={index} className="courses-year__info-item">
                        {info}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {course.mapImage?.asset?.url && (
              <div className="courses-year__map">
                <img src={course.mapImage.asset.url} alt="Orienteringskarta" />
              </div>
            )}
          </div>

          {(course.paymentInfo || course.contacts) && (
            <div className="courses-year__contact">
              <h3 className="courses-year__contact-title">
                Betalning & Kontakt
              </h3>

              {course.paymentInfo && (
                <div className="courses-year__payment">
                  <PortableText
                    value={course.paymentInfo}
                    components={paymentComponents}
                  />
                </div>
              )}

              {course.contacts && course.contacts.length > 0 && (
                <div className="courses-year__contacts">
                  <h4 className="courses-year__contact-heading">
                    Ansvariga kartritare och banläggare:
                  </h4>
                  {course.contacts.map((contact, index) => (
                    <p key={index} className="courses-year__contact-item">
                      {contact.name} {contact.phone}
                    </p>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* {course.paymentInfo && (
            <div className="courses-year__payment">
              <PortableText
                value={course.paymentInfo}
                components={paymentComponents}
              />
            </div>
          )} */}
        </section>
      )}
    </>
  );
}

export default CoursesYear;
