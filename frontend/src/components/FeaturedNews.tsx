import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sanityClient } from "../lib/client";

import { NewsItem } from "../types";
import { formatDate } from "../utils/formatDate";

import "./FeaturedNews.css";

function FeaturedNews() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchFeaturedNews() {
    setIsLoading(true);

    try {
      const query = `*[_type == "news" && is_featured == true] | order(publishedAt desc)[0...4]{
        _id,
        title,
        slug,
        publishedAt,
        mainImage{
          asset->{
            url
          }
        },
        teaser
      }`;

      const data = await sanityClient.fetch<NewsItem[]>(query);

      setNews(data);
    } catch (error) {
      console.error("Failed to fetch featured news:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchFeaturedNews();
  }, []);

  if (isLoading || news.length === 0) {
    return null;
  }

  return (
    <section className="featured-news">
      <h2 className="featured-news__title">Senaste Nyheterna</h2>

      <div className="featured-news__grid">
        {news.map((article) => (
          <article key={article._id} className="featured-news__card">
            <Link
              to={`/nyheter/${article.slug.current}`}
              className="featured-news__link"
            >
              {article.mainImage?.asset?.url && (
                <figure className="featured-news__image">
                  <img src={article.mainImage.asset.url} alt={article.title} />
                </figure>
              )}
              <div className="featured-news__content">
                <time
                  className="featured-news__date"
                  dateTime={article.publishedAt}
                >
                  {formatDate(article.publishedAt)}
                </time>
                <h3 className="featured-news__title-card">{article.title}</h3>
                {article.teaser && (
                  <p className="featured-news__excerpt">{article.teaser}</p>
                )}
              </div>
            </Link>
          </article>
        ))}
      </div>

      <div className="featured-news__cta">
        <Link to="/nyheter" className="featured-news__button">
          Se alla nyheter →
        </Link>
      </div>
    </section>
  );
}

export default FeaturedNews;
