import { useEffect, useState } from "react";
import { sanityClient } from "../lib/client";

import { SponsorItem } from "../types";

import { IoWarningOutline, IoBusinessOutline } from "react-icons/io5";

import PageHero from "../components/PageHero";
import sponsorsHero from "../assets/images/heroes/sponsors-hero.webp";

import "./Sponsors.css";

function Sponsors() {
  const [sponsors, setSponsors] = useState<SponsorItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchSponsors() {
    setIsLoading(true);
    setError(null);

    try {
      // throw new Error("Kunde inte ansluta till servern");
      const query = `*[_type == "sponsor"] | order(order asc){
      _id,
      name,
      website,
      logo{
        asset->{
          url
        },
      },
      order
    }`;

      const data = await sanityClient.fetch<SponsorItem[]>(query);

      setSponsors(data);
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
    fetchSponsors();
  }, []);

  return (
    <>
      <PageHero imageUrl={sponsorsHero} title="Sponsorer" />

      {isLoading && (
        <div className="sponsors__loading">
          <div className="sponsors__spinner"></div>
          <p>Laddar sponsorer...</p>
        </div>
      )}

      {error && (
        <div className="sponsors__error">
          <div className="sponsors__error-icon">
            <IoWarningOutline size={60} color="#d32f2f" />
          </div>
          <h3 className="sponsors__error-title">Kunde inte ladda sponsorer</h3>
          <p className="sponsors__error-text">{error}</p>
          <button onClick={fetchSponsors} className="sponsors__error-button">
            Försök igen
          </button>
        </div>
      )}

      {sponsors.length === 0 && !isLoading && !error && (
        <div className="sponsors__empty">
          <div className="sponsors__empty-illustration">
            <IoBusinessOutline size={60} />
          </div>
          <h2 className="sponsors__empty-title">Inga sponsorer att visa</h2>
          <p className="sponsors__empty-text">
            Sponsorer kommer läggas till här.
          </p>
        </div>
      )}

      {sponsors.length > 0 && (
        <section className="sponsors">
          <h1 className="sponsors__title">Vi tackar alla våra sponsorer</h1>

          <div className="sponsors__grid">
            {sponsors.map((sponsor) => (
              <div className="sponsors__card">
                <img
                  src={sponsor.logo.asset.url}
                  alt={`${sponsor.name} logotyp`}
                />
                <p className="sponsors__name">{sponsor.name}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default Sponsors;
