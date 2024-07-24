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
} from "./Components";

const App = () => {
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
      <Footer />
    </>
  );
};

export default App;
