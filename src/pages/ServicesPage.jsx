import ServicesHero from "../components/services/ServicesHero";
import ServicesGrid from "../components/services/ServicesGrid";
import ServicesProcess from "../components/services/ServicesProcess";
import ServicesFAQ from "../components/services/ServicesFAQ";
import ServicesCTA from "../components/services/ServicesCTA";

const ServicesPage = () => {
  return (
    <div className="pt-16">
      <ServicesHero />
      <ServicesGrid />
      <ServicesProcess />
      <ServicesFAQ />
      <ServicesCTA />
    </div>
  );
};

export default ServicesPage;
