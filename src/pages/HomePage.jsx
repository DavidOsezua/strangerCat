import React from "react";
import {
  Contest,
  Disclaimer,
  Footer,
  Hero,
  Navbar,
  Participation,
  Roadmap,
  Tech,
  Tokenomics,
  Vision,
} from "../Components";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Participation />
      <Tokenomics />
      <Roadmap />
      <Vision />
      <Contest />
      <Tech />
      <Disclaimer />
    </>
  );
};

export default HomePage;
