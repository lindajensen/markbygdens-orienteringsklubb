import Hero from "../components/Hero";
import FeaturedNews from "../components/FeaturedNews";
import CallToAction from "../components/CallToAction";
import UpcomingActivities from "../components/UpcomingActivities";
import FriendlyClubs from "../components/FriendlyClubs";
import Contact from "../components/Contact";

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedNews />
      <CallToAction />
      <UpcomingActivities />
      <FriendlyClubs />
      <Contact />
    </>
  );
}

export default HomePage;
