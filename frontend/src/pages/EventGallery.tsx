import { Link, useParams } from "react-router-dom";
import PageHero from "../components/PageHero";

import sprintByNight1 from "../assets/images/gallery/sprint-by-night/sprint-by-night-1.jpeg";
import sprintByNight2 from "../assets/images/gallery/sprint-by-night/sprint-by-night-2.jpeg";
import sprintByNight3 from "../assets/images/gallery/sprint-by-night/sprint-by-night-3.jpeg";
import sprintByNight4 from "../assets/images/gallery/sprint-by-night/sprint-by-night-4.jpeg";
import sprintByNight5 from "../assets/images/gallery/sprint-by-night/sprint-by-night-5.jpeg";
import sprintByNight6 from "../assets/images/gallery/sprint-by-night/sprint-by-night-6.jpeg";
import sprintByNight7 from "../assets/images/gallery/sprint-by-night/sprint-by-night-7.jpeg";
import sprintByNight8 from "../assets/images/gallery/sprint-by-night/sprint-by-night-8.jpeg";
import sprintByNight9 from "../assets/images/gallery/sprint-by-night/sprint-by-night-9.jpeg";
import sprintByNight10 from "../assets/images/gallery/sprint-by-night/sprint-by-night-10.jpeg";
import sprintByNight11 from "../assets/images/gallery/sprint-by-night/sprint-by-night-11.jpeg";
import sprintByNight12 from "../assets/images/gallery/sprint-by-night/sprint-by-night-12.jpeg";

import zoorientering1 from "../assets/images/gallery/zoorientering/zoorientering-1.jpeg";
import zoorientering2 from "../assets/images/gallery/zoorientering/zoorientering-2.jpeg";
import zoorientering3 from "../assets/images/gallery/zoorientering/zoorientering-3.jpeg";
import zoorientering4 from "../assets/images/gallery/zoorientering/zoorientering-4.jpeg";
import zoorientering5 from "../assets/images/gallery/zoorientering/zoorientering-5.jpeg";
import zoorientering6 from "../assets/images/gallery/zoorientering/zoorientering-6.jpeg";
import "./ImagesVideos.css";

import "./EventGallery.css";

function EventGallery() {
  const { slug } = useParams();

  const events = {
    "sprint-by-night": {
      title: "Sprint by Night",
      images: [
        sprintByNight1,
        sprintByNight2,
        sprintByNight3,
        sprintByNight4,
        sprintByNight5,
        sprintByNight6,
        sprintByNight7,
        sprintByNight8,
        sprintByNight9,
        sprintByNight10,
        sprintByNight11,
        sprintByNight12,
      ],
    },
    zoorientering: {
      title: "Zoorientering",
      images: [
        zoorientering1,
        zoorientering2,
        zoorientering3,
        zoorientering4,
        zoorientering5,
        zoorientering6,
      ],
    },
  };

  const event = events[slug as keyof typeof events];

  if (!event) {
    return (
      <div className="event-not-found">
        <h1 className="event-not-found__title">Event hittades inte</h1>
        <p className="event-not-found__subtitle">
          Det event du letar efter finns inte.
        </p>
        <Link className="event-not-found__link" to="/images-videos">
          Tillbaka till galleriet
        </Link>
      </div>
    );
  }

  return (
    <>
      <PageHero title={event.title} dark />

      <section className="gallery">
        <div className="gallery__grid">
          {event.images.map((image, index) => (
            <div className="gallery__item" key={index}>
              <img src={image} alt={`${event.title} bild ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default EventGallery;
