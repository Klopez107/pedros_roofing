import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import ServiceArea from "./components/ServiceArea";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Testimonials />
        <Gallery />
        <ServiceArea />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
