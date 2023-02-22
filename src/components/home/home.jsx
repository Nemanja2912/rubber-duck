import HeroSection from "./../heroSection/heroSection";
import AboutSection from "./../aboutSection/aboutSection";
import ServiceSection from "./../serviceSection/serviceSection";
import ContactForm from "./../contactForm/contactForm";
import Contact from "./../contact/contact";

const Home = () => {
  return (
    <>
      <HeroSection />

      <AboutSection />
      <ServiceSection />

      <ContactForm />
      <Contact />
    </>
  );
};

export default Home;
