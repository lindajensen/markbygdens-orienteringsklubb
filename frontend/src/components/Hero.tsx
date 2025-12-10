import hero from "../assets/img/hero-img.webp";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${hero})` }}>
      <div className="hero__overlay"></div>
      <div className="hero__content">
        <h1 className="hero__title">Välkommen till Markbygdens OK</h1>
        <p className="hero__subtitle">Orientering i Västergötland</p>
        <a href="#contact" className="hero__button">
          Kontakta oss
        </a>
      </div>
    </section>
  );
}

export default Hero;
