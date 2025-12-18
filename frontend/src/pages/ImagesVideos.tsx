import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sanityClient } from "../lib/client";

import { GalleryEvent } from "../types";

import { IoWarningOutline, IoImagesOutline } from "react-icons/io5";

import PageHero from "../components/PageHero";
import imagesVideosHero from "../assets/images/heroes/images-videos-hero.jpg";

import "./ImagesVideos.css";

function ImagesVideos() {
  const [galleries, setGalleries] = useState<GalleryEvent[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const DEFAULT_IMAGE = "/src/assets/images/default-gallery.png";

  async function fetchGalleries() {
    setIsLoading(true);
    setError(null);

    try {
      // throw new Error("Kunde inte ansluta till servern");
      const query = `*[_type == "eventGallery"] | order(order asc){
        _id,
        title,
        eventLabel,
        slug,
        eventDate,
        description,
        coverImage{
          asset->{
            url
          },
          alt
        },
        images[]{
          asset->{
            url
          }
        }
      }`;

      // await new Promise((resolve) => setTimeout(resolve, 3000));

      const data = await sanityClient.fetch<GalleryEvent[]>(query);

      setGalleries(data);
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
    fetchGalleries();
  }, []);

  return (
    <>
      <PageHero imageUrl={imagesVideosHero} title="Bilder & Videos" />

      {isLoading && (
        <div className="news__loading">
          <div className="news__spinner"></div>
          <p>Laddar evenemang...</p>
        </div>
      )}

      {error && (
        <div className="gallery__error">
          <div className="gallery__error-icon">
            <IoWarningOutline size={60} color="#d32f2f" />
          </div>
          <h3 className="gallery__error-title">Kunde inte ladda gallerier</h3>
          <p className="gallery__error-text">{error}</p>
          <button onClick={fetchGalleries} className="gallery__error-button">
            Försök igen
          </button>
        </div>
      )}

      {galleries.length === 0 && !isLoading && !error && (
        <div className="gallery__empty">
          <div className="gallery__empty-illustration">
            <IoImagesOutline size={60} />
          </div>
          <h2 className="gallery__empty-title">Inga evenemang att visa</h2>
          <p className="gallery__empty-text">
            Bilder och videos från evenemang kommer läggas till här.
          </p>
        </div>
      )}

      {galleries.length > 0 && (
        <section className="gallery">
          <div className="gallery__grid">
            {galleries.map((gallery) => (
              <Link
                to={`/bilder-videos/${gallery.slug.current}`}
                className="gallery__card"
                key={gallery._id}
              >
                <img
                  src={
                    gallery.coverImage?.asset.url
                      ? gallery.coverImage.asset.url
                      : DEFAULT_IMAGE
                  }
                  alt={
                    gallery.coverImage?.alt
                      ? gallery.coverImage.alt
                      : gallery.title
                  }
                />
                <div className="gallery__content">
                  {gallery.eventLabel && (
                    <p className="gallery__event">{gallery.eventLabel}</p>
                  )}
                  <h2 className="gallery__title">{gallery.title}</h2>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default ImagesVideos;
