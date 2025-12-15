import Navbar from "../components/Navbar";
import Hero from "../components/Hero"; // renamed import
import Story from "../components/OurStory";
import Gallery from "../components/PhotoGallery";
import BigDay from "../components/TheBigDay";
import Details from "../components/Details";
import Contact from "../components/Contact";

import RevealSection from "../components/RevealSection";

function Home() {
  return (
    <>
      <Navbar />

      <RevealSection id="home" animationClass="animate-section-fade">
        <Hero />
      </RevealSection>

      <RevealSection id="story" animationClass="animate-section-fade delay-150">
        <Story />
      </RevealSection>

      <RevealSection id="gallery" animationClass="animate-section-fade delay-300">
        <Gallery />
      </RevealSection>

      <RevealSection id="bigday" animationClass="animate-section-fade delay-450">
        <BigDay />
      </RevealSection>

      <RevealSection id="details" animationClass="animate-section-fade delay-600">
        <Details />
      </RevealSection>

      <RevealSection id="contact" animationClass="animate-section-fade delay-750">
        <Contact />
      </RevealSection>
    </>
  );
}


export default Home;



