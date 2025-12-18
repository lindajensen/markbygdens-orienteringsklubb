import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { sanityClient } from "../lib/client";

import { GalleryEvent } from "../types";

import { IoWarningOutline, IoImagesOutline } from "react-icons/io5";

import PageHero from "../components/PageHero";

import "./EventGallery.css";

function EventGallery() {
  const { slug } = useParams();

  const [event, setEvent] = useState<GalleryEvent | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchEvent() {
    setIsLoading(true);
    setError(null);

    try {
      const query = `*[_type == "eventGallery" && slug.current == $slug][0]{
        _id,
        title,
        slug,
        images[]{
          asset->{
            url
          }
        }
      }`;

      const data = await sanityClient.fetch<GalleryEvent>(query, { slug });

      setEvent(data);
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
    fetchEvent();
  }, [slug]);

  return (
    <>
      {event && <PageHero title={event.title} dark />}

      {isLoading && (
        <div className="event__loading">
          <div className="event__spinner"></div>
          <p>Laddar galleri...</p>
        </div>
      )}

      {error && (
        <div className="event__error">
          <div className="event__error-icon">
            <IoWarningOutline size={60} color="#d32f2f" />
          </div>
          <h3 className="event__error-title">Kunde inte ladda galleriet</h3>
          <p className="event__error-text">{error}</p>
          <button onClick={fetchEvent} className="event__error-button">
            Försök igen
          </button>
        </div>
      )}

      {!event && !isLoading && !error && (
        <div className="event__empty">
          <div className="event__empty-illustration">
            <IoImagesOutline size={60} />
          </div>
          <h2 className="event__empty-title">Galleri hittades inte</h2>
          <p className="event__empty-text">
            Detta evenemang kunde inte hittas.
          </p>
          <Link to="/bilder-videos" className="event__error-button">
            Tillbaka till gallerier
          </Link>
        </div>
      )}

      <section className="event">
        {event && event.images && event.images.length > 0 ? (
          <div className="event__grid">
            {event.images.map((image, index) => (
              <div className="event__item" key={index}>
                <img
                  src={image.asset.url}
                  alt={image.alt || `${event.title} bild ${index + 1}`}
                />
                {image.caption && (
                  <p className="event__caption">{image.caption}</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="event__no-images">
            <div className="event__no-images-illustration">
              <IoImagesOutline size={80} />
            </div>
            <h3 className="event__no-images-title">Inga bilder ännu</h3>
            <p className="event__no-images-text">
              Bilder från detta evenemang kommer läggas till snart
            </p>
          </div>
        )}
      </section>
    </>
  );
}

export default EventGallery;
