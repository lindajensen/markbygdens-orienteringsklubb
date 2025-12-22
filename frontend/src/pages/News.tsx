import { useEffect, useState } from "react";
import { sanityClient } from "../lib/client";

import { NewsItem } from "../types";
import { formatDate } from "../utils/formatDate";

import { IoWarningOutline, IoNewspaperOutline } from "react-icons/io5";

import PageHero from "../components/PageHero";
import "./News.css";

// import newsHero from "../assets/images/heroes/board-hero.webp";

function News() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const DEFAULT_IMAGE = "/src/assets/images/default-news.png";

  async function fetchNews() {
    setIsLoading(true);
    setError(null);

    try {
      const query = `*[_type == "news"] | order(publishedAt desc){
      _id,
      title,
      slug,
      publishedAt,
      mainImage{
        asset->{
          url
        },
        alt
      },
      teaser,
      body,
      externalLinks,
      category->{
        _id,
        title,
        slug
      },
      tags,
      is_featured
    }`;

      const data = await sanityClient.fetch<NewsItem[]>(query);

      setNews(data);
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
    fetchNews();
  }, []);

  return (
    <>
      <PageHero title="Nyheter" />

      {isLoading && (
        <div className="news__loading">
          <div className="news__spinner"></div>
          <p>Laddar nyheter...</p>
        </div>
      )}

      {error && (
        <div className="news__error">
          <div className="news__error-icon">
            <IoWarningOutline size={60} color="#d32f2f" />
          </div>
          <h3 className="news__error-title">Kunde inte ladda nyheter</h3>
          <p className="news__error-text">{error}</p>
          <button onClick={fetchNews} className="news__error-button">
            Försök igen
          </button>
        </div>
      )}

      {news.length === 0 && !isLoading && !error && (
        <div className="news__empty">
          <div className="news__empty-illustration">
            <IoNewspaperOutline size={60} />
          </div>
          <h2 className="news__empty-title">Inga nyheter att visa</h2>
          <p className="news__empty-text">
            Nya artiklar dyker upp här när de publiceras.
          </p>
        </div>
      )}

      {news.length > 0 && (
        <section className="news">
          {/* Featured - latest article */}

          <article className="news__featured">
            <a
              href={`/nyheter/${news[0].slug.current}`}
              className="news__featured-link"
            >
              <figure className="news__featured-image">
                <img
                  src={news[0].mainImage?.asset?.url || DEFAULT_IMAGE}
                  alt={news[0].title}
                />
                <time
                  className="news__date-badge"
                  dateTime={news[0].publishedAt}
                >
                  {formatDate(news[0].publishedAt)}
                </time>
              </figure>
              <div className="news__featured-content">
                <h2 className="news__featured-title">{news[0].title}</h2>
                <p className="news__featured-excerpt">{news[0].teaser}</p>
                <span className="news__read-more">Läs mer →</span>
              </div>
            </a>
          </article>

          {/* Rest of the articles */}
          <div className="news__grid">
            {news.slice(1).map((article) => (
              <article key={article._id} className="news__card">
                <a
                  href={`/nyheter/${article.slug.current}`}
                  className="news__card-link"
                >
                  <figure className="news__card-image">
                    <img
                      src={article.mainImage?.asset?.url || DEFAULT_IMAGE}
                      alt={article.title}
                    />
                    <time
                      className="news__card-date"
                      dateTime={article.publishedAt}
                    >
                      {formatDate(article.publishedAt)}
                    </time>
                  </figure>
                  <div className="news__card-content">
                    <h3 className="news__card-title">{article.title}</h3>
                    <p className="news__card-excerpt">{article.teaser}</p>
                    <span className="news__read-more">Läs mer →</span>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default News;
