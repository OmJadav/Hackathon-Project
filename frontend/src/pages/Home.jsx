import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import WhyJoin from "../components/WhyJoin";
import Carousel from "../components/Events";
import Testimonials from "../components/Testimonials";
import HowToJoin from "../components/HowToJoin";
import Contact from "../components/Contact";
import MissionVision from "../components/MissionVision";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <MissionVision />
      <WhyJoin />
      <Carousel />
      <Testimonials />
      <HowToJoin />
      <Contact />
    </div>
  );
};

export default Home;
