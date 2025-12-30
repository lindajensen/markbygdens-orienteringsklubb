import { useEffect, useState } from "react";
import { sanityClient } from "../lib/client";

import { friendlyClubItem } from "../types";

import "./FriendlyClubs.css";

function FriendlyClubs() {
  const [clubs, setClubs] = useState<friendlyClubItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchClubs() {
    setIsLoading(true);

    try {
      const query = `*[_type == "friendlyClub"] | order(order asc){
        _id,
        name,
        logo{
          asset->{
            url
          },
        },
      }`;

      const data = await sanityClient.fetch<friendlyClubItem[]>(query);

      setClubs(data);
    } catch (error) {
      console.error("Error fetching friendly clubs:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchClubs();
  }, []);

  if (isLoading || clubs.length === 0) {
    return null;
  }

  return (
    <section className="friendly-clubs">
      <div className="friendly-clubs__container">
        <h2 className="friendly-clubs__title">Moderklubbar</h2>
        <div className="friendly-clubs__logos">
          {clubs.map((club) => (
            <img
              key={club._id}
              src={club.logo.asset.url}
              alt={`${club.name} logotyp`}
              className="friendly-clubs__logo"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FriendlyClubs;
