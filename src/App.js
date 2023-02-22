import Navigation from "./components/navigation/navigation";
import HeroSection from "./components/heroSection/heroSection";
import AboutSection from "./components/aboutSection/aboutSection";
import ServiceSection from "./components/serviceSection/serviceSection";
import ContactForm from "./components/contactForm/contactForm";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div className="App">
      <Navigation />
      <HeroSection />

      <AboutSection />
      <ServiceSection />

      <ContactForm />
      <Contact />
    </div>
  );
}

export default App;
