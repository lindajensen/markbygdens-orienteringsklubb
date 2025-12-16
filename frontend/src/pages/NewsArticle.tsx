import { Link, useParams } from "react-router-dom";
import PageHero from "../components/PageHero";

import kickoff2026 from "../assets/images/news/kickoff-2026.webp";
import flitpris2025 from "../assets/images/news/flitpris-2025.webp";
import manna2025 from "../assets/images/news/25-manna-2025.webp";

import "./NewsArticle.css";

function NewsArticle() {
  const { slug } = useParams();

  interface Article {
    title: string;
    date: string;
    dateTime: string;
    image: string;
    content: string[];
    links?: { text: string; url: string }[];
  }

  const articles: Record<string, Article> = {
    kickoff2026: {
      title: "Kickoff och Markbygdsgalan",
      date: "15 december 2025",
      dateTime: "2025-12-15",
      image: kickoff2026,
      content: [
        "Äntligen så närmar sig säsongen 2026 och det är högtid för årets kick-off.",
        "I år kommer vi att vara i OK Rävens stuga, Sätila 24/1.",
        "Vi börjar kl. 13:00 med en Kick-off/planeringsmöte och håller på till ca. 16:00. Efter mötet så finns det möjlighet för fyspass med efterföljande bastubad.",
        "Kl. 18:30 inleder vi MARKBYGDSGALAN med middag, prisutdelningar och aktiviteter. Middagen inkl. måltidsdryck erbjuds till självkostnadspris, vill man dricka något annat så får var och en ta med detta själv.",
        "Anmäl via anmälningsformulär eller till kattekullaaspelund@gmail.com senast 15/1",
        "Vid frågor, kontakta: Martin Granat 0709-355368",
      ],
      links: [{ text: "Inbjudan Kick-off 2026 →", url: "#" }],
    },
    "markbygdens-ok-flitpris": {
      title: "Markbygdens OK flitpris ställning",
      date: "19 september 2025",
      dateTime: "2025-09-19",
      image: flitpris2025,
      content: [
        "Nu finns en sammanställning för ställningen i vårt nyinstiftade flitpris. För att få vara med i sammanställningen måste man ha varit på minst 5 träningar.",
        "Kolla resultaten och se vem som leder i år!",
      ],
      links: [{ text: "Hela ställningen hittar du här →", url: "#" }],
    },
    "25-manna": {
      title: "25-Manna",
      date: "28 augusti 2025",
      dateTime: "2025-08-28",
      image: manna2025,
      content: [
        "25-manna går i år av stapeln helgen 11-13 oktober strax norr om Stockholm. Vi planerar att ha ett kombinationslag tillsammans med Orinto och vi behöver löpare av alla slag – vita, röda, orangea, violetta och blå; unga, gamla och elit-löpare. 25-manna handlar om att belöna de klubben med störst bredd! Reseplan: Vi åker upp till Stockholm gemensamt på fredag eftermiddag. 25-manna budkavlen går under lördagen och lördag kväll brukar vi gå ut och äta hela laget tillsammans.På söndag springer vi alla 25-manna medlen – en vanlig medeldistans tävling och sen åker vi hem skönt trötta. För att kunna planera med hotellrum osv. så behöver vi ganska snart få veta hur många som är intresserade av att åka med. Preliminär kostnad för att åka med kommer att bli ca. 2200:-/person. Vi har sökt bidrag, men ej fått beviljat ännu.",
      ],
      links: [
        {
          text: "Läs mer på Eventor →",
          url: "https://eventor.orientering.se/Events/Show/51284",
        },
        {
          text: "Anmälan här →",
          url: "https://eventor.orientering.se/Activities/Show/24365",
        },
      ],
    },
  };

  const article = articles[slug as keyof typeof articles];

  if (!article) {
    return (
      <>
        <div className="article-not-found">
          <h1 className="article-not-found__title">Artikeln hittades inte</h1>
          <p className="article-not-found__text">
            Den artikel du letar efter finns inte.
          </p>
          <Link className="article-not-found__link" to="/news">
            Tillbaka till nyheter
         </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <PageHero title={article.title} />
      <article className="article">
        <div className="article__meta">
          <time className="article__date" dateTime={article.dateTime}>
            {article.date}
          </time>
        </div>

        <div className="article__content">
          {article.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          {article.links &&
            article.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="article__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.text}
              </a>
            ))}
        </div>
      </article>
    </>
  );
}

export default NewsArticle;
