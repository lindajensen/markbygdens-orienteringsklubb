import Hero from "../components/Hero";
import FeaturedNews from "../components/FeaturedNews";
import UpcomingActivities from "../components/UpcomingActivities";
import CallToAction from "../components/CallToAction";
import Contact from "../components/Contact";

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedNews />
      <CallToAction />
      <UpcomingActivities />
      <Contact />
    </>
  );
}

export default HomePage;
