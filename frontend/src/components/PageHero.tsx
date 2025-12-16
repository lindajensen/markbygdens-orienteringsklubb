import "./PageHero.css";

interface PageHeroProps {
  imageUrl?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
}

function PageHero({ imageUrl, title, subtitle, dark = false }: PageHeroProps) {
  return (
    <section className={`page-hero ${dark ? "page-hero--dark" : ""}`}>
      {imageUrl && <img src={imageUrl} alt="" className="page-hero__image" />}
      <div className="page-hero__overlay">
        <h1 className="page-hero__title">{title}</h1>
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}

export default PageHero;
