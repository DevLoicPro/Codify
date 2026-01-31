import HomeHero from "../components/home/HomeHero";
import HomeAbout from "../components/home/HomeAbout";
import HomeServicesPreview from "../components/home/HomeServicesPreview";
import HomeFeatures from "../components/home/HomeFeatures";
import HomeProjectsPreview from "../components/home/HomeProjectsPreview";
import HomeCTA from "../components/home/HomeCTA";

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeServicesPreview />
      <HomeFeatures />
      <HomeProjectsPreview />
      <HomeCTA />
    </>
  );
};

export default HomePage;
