import "./PageHero.css";

interface PageHeroProps {
  imageUrl: string;
  title: string;
  subtitle?: string;
}

function PageHero({ imageUrl, title, subtitle }: PageHeroProps) {
  return (
    <section className="page-hero">
      <img src={imageUrl} alt="" className="page-hero__image" />
      <div className="page-hero__overlay">
        <h1 className="page-hero__title">{title}</h1>
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}

export default PageHero;
