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
import TextComponent from "../Components/TextComponent";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <TextComponent /> */}
      <Participation />
      <Tokenomics />
      <Vision />
      <Contest />
      <Tech />
      <Disclaimer />
    </>
  );
};

export default HomePage;
