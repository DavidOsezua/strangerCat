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
import Timer from "../Components/Timer";

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
      <Timer/>
    </>
  );
};

export default HomePage;
