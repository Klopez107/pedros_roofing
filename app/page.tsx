import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import PromoBanner from "./components/PromoBanner";
import ServiceArea from "./components/ServiceArea";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import StickyCall from "./components/StickyCall";

import FadeIn from "./components/FadeIn";

export default function HomePage() {
  return (
    <>
      <main className="site-bg">
        <FadeIn>
          <Hero />
        </FadeIn>
        <FadeIn direction="left">
          <Services />
        </FadeIn>
        <FadeIn direction="right">
          <WhyUs />
        </FadeIn>
        <FadeIn direction="up">
          <Testimonials />
        </FadeIn>
        <FadeIn delay={0.2}>
          <Gallery />
        </FadeIn>
        <FadeIn delay={0.25}>
          <PromoBanner />
        </FadeIn>
        <FadeIn delay={0.3}>
          <ServiceArea />
        </FadeIn>
        <FadeIn delay={0.35}>
          <FAQ />
        </FadeIn>
        <FadeIn delay={0.4}>
          <ContactForm />
        </FadeIn>
      </main>
      <StickyCall />
    </>
  );
}
