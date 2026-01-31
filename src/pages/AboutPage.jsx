import AboutHero from "../components/about/AboutHero";
import AboutStory from "../components/about/AboutStory";
import AboutFounders from "../components/about/AboutFounders";
import AboutValues from "../components/about/AboutValues";
import useDocumentTitle from "../hooks/useDocumentTitle";

const AboutPage = () => {
  useDocumentTitle("À propos");
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutFounders />
      <AboutValues />
    </>
  );
};

export default AboutPage;
