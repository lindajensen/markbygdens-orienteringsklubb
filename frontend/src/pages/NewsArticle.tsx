import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { sanityClient } from "../lib/client";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";

import { NewsItem } from "../types";
import { formatDate } from "../utils/formatDate";

import { IoWarningOutline, IoNewspaperOutline } from "react-icons/io5";

import PageHero from "../components/PageHero";

import "./NewsArticle.css";

function NewsArticle() {
  const { slug } = useParams();

  const [article, setArticle] = useState<NewsItem | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const components: Partial<PortableTextReactComponents> = {
    list: {
      bullet: ({ children }) => <ul className="article__list">{children}</ul>,
      number: ({ children }) => (
        <ol className="article__list article__list--numbered">{children}</ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => (
        <li className="article__list-item">{children}</li>
      ),
      number: ({ children }) => (
        <li className="article__list-item">{children}</li>
      ),
    },
    block: {
      normal: ({ children }) => (
        <p className="article__paragraph">{children}</p>
      ),
    },
  };

  async function fetchArticle() {
    setIsLoading(true);
    setError(null);

    try {
      const query = `*[_type == "news" && slug.current == $slug][0]{
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

      const data = await sanityClient.fetch<NewsItem>(query, { slug });

      setArticle(data);
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
    fetchArticle();
  }, [slug]);

  return (
    <>
      {article && <PageHero title={article.title} />}

      {isLoading && (
        <div className="article__loading">
          <div className="article__spinner"></div>
          <p>Laddar artikel...</p>
        </div>
      )}

      {error && (
        <div className="article__error">
          <div className="article__error-icon">
            <IoWarningOutline size={60} color="#d32f2f" />
          </div>
          <h3 className="article__error-title">Kunde inte ladda artikeln</h3>
          <p className="article__error-text">{error}</p>
          <Link className="article__error-button" to="/nyheter">
            Tillbaka till nyheter
          </Link>
        </div>
      )}

      {!article && !isLoading && !error && (
        <div className="article__empty">
          <div className="article__empty-illustration">
            <IoNewspaperOutline size={60} />
          </div>
          <h2 className="article__empty-title">Artikeln kunde inte hittas</h2>
          <p className="article__empty-text">
            Den här artikeln finns inte längre eller så är länken fel.
          </p>
        </div>
      )}

      {article && (
        <article className="article">
          <div className="article__meta">
            <time className="article__date" dateTime={article.publishedAt}>
              {formatDate(article.publishedAt)}
            </time>
          </div>

          <div className="article__content">
            <PortableText value={article.body} components={components} />

            {article.externalLinks?.map((link, index) => (
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
      )}
    </>
  );
}

export default NewsArticle;
