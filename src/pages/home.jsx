import React from "react";
import Caroussel from "../Component/Caroussel/Caroussel";
import Pricing from "../Component/landing/Pricing/Pricing";
import Hero from "../Component/LandingPage/Hero";
import Offer from "../Component/LandingPage/Offer";
function Home() {
  return (
    <>
      <Hero />
      <Caroussel />
      <Offer />
      <Pricing />
    </>
  );
}

export default Home;
