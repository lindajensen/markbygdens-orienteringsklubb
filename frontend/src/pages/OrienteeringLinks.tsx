import { useEffect, useState } from "react";
import { sanityClient } from "../lib/client";

import { LinkItem } from "../types";

import {
  IoWarningOutline,
  IoLinkOutline,
  IoCompassOutline,
} from "react-icons/io5";

import PageHero from "../components/PageHero";
import orienteeringsLinksHero from "../assets/images/heroes/orienteering-links-hero.webp";

import "./OrienteeringLinks.css";

function OrienteeringLinks() {
  const [links, setLinks] = useState<LinkItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchLinks() {
    setIsLoading(true);
    setError(null);

    try {
      // throw new Error("Kunde inte ansluta till servern");
      const query = `*[_type == "orienteeringLink"] | order(category asc, order asc){
        _id,
        name,
        logo{
          asset->{
            url
          }
        },
        description,
        url,
        category,
        order
      }`;

      const data = await sanityClient.fetch<LinkItem[]>(query);

      // await new Promise((resolve) => setTimeout(resolve, 3000));

      setLinks(data);
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
    fetchLinks();
  }, []);

  return (
    <>
      <PageHero imageUrl={orienteeringsLinksHero} title="Orienteringslänkar" />

      {isLoading && (
        <div className="links__loading">
          <div className="links__spinner"></div>
          <p>Laddar länkar...</p>
        </div>
      )}

      {error && (
        <div className="links__error">
          <div className="links__error-icon">
            <IoWarningOutline size={60} color="#d32f2f" />
          </div>
          <h3 className="links__error-title">Kunde inte ladda länkar</h3>
          <p className="links__error-text">{error}</p>
          <button onClick={fetchLinks} className="links__error-button">
            Försök igen
          </button>
        </div>
      )}

      {links.length === 0 && !isLoading && !error && (
        <div className="links__empty">
          <div className="links__empty-illustration">
            <IoLinkOutline size={60} />
          </div>
          <h2 className="links__empty-title">Inga länkar att visa</h2>
          <p className="links__empty-text">
            Länkar till förbund och klubbar kommer läggas till här.
          </p>
        </div>
      )}

      {links.length > 0 && (
        <section className="links">
          <div className="links__section">
            <h2 className="links__section-title">Förbund</h2>
            <div className="links__list">
              {links
                .filter((link) => link.category === "federation")
                .map((link) => (
                  <a
                    key={link._id}
                    href={link.url}
                    className="links__item"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="links__logo">
                      {link.logo?.asset?.url ? (
                        <img
                          src={link.logo.asset.url}
                          alt={`${link.name} logotyp`}
                          className="link__logo"
                        />
                      ) : (
                        <div className="link__logo-placeholder">
                          <IoCompassOutline size={40} color="#999" />
                        </div>
                      )}
                    </div>
                    <div className="links__content">
                      <h3 className="links__name">{link.name}</h3>
                      <p className="links__description">{link.description}</p>
                    </div>
                  </a>
                ))}
            </div>
          </div>

          <div className="links__section">
            <h2 className="links__section-title">Klubbar</h2>
            <div className="links__list">
              {links
                .filter((link) => link.category === "club")
                .map((link) => (
                  <a
                    key={link._id}
                    href={link.url}
                    className="links__item"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="links__logo">
                      {link.logo?.asset?.url ? (
                        <img
                          src={link.logo.asset.url}
                          alt={`${link.name} logotyp`}
                          className="link__logo"
                        />
                      ) : (
                        <div className="link__logo-placeholder">
                          <IoCompassOutline size={40} color="#999" />
                        </div>
                      )}
                    </div>
                    <div className="links__content">
                      <h3 className="links__name">{link.name}</h3>
                      <p className="links__description">{link.description}</p>
                    </div>
                  </a>
                ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default OrienteeringLinks;
