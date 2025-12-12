import { Link } from "react-router-dom";

import PageHero from "../components/PageHero";
import imagesVideosHero from "../assets/images/heroes/images-videos-hero.jpg";
import sprintByNight from "../assets/images/gallery/sprint-by-night/hero.webp";
import zoorientering from "../assets/images/gallery/zoorientering/hero.webp";

import "./ImagesVideos.css";

function ImagesVideos() {
  return (
    <>
      <PageHero imageUrl={imagesVideosHero} title="Bilder & Videos" />

      <section className="gallery">
        <div className="gallery__grid">
          <Link to="/images-videos/sprint-by-night" className="gallery__card">
            <img
              src={sprintByNight}
              alt="Deltagare i Sprint by Night evenemanget"
            />
            <div className="gallery__content">
              <p className="gallery__event">O-event · Dag 1</p>
              <h2 className="gallery__title">Sprint by Night</h2>
            </div>
          </Link>

          <Link to="/images-videos/downhill-sprint" className="gallery__card">
            <div className="gallery__placeholder">
              <p>Bilder kommer snart</p>
            </div>
            <div className="gallery__content">
              <p className="gallery__event">O-event · Dag 2</p>
              <h2 className="gallery__title">Downhill Sprint</h2>
            </div>
          </Link>

          <Link to="/images-videos/zoorientering" className="gallery__card">
            <img
              src={zoorientering}
              alt="Deltagare i Zoorienterings evenemanget"
            />
            <div className="gallery__content">
              <p className="gallery__event">O-event · Dag 3</p>
              <h2 className="gallery__title">Zoorientering</h2>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

export default ImagesVideos;
