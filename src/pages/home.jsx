import React from "react";
import Chiffres from "../Component/Chiffre/Chiffres";

import Caroussel from "../Component/Caroussel/Caroussel";
import Pricing from "../Component/landing/Pricing/Pricing";
import Hero from "../Component/LandingPage/Hero";
import Offer from "../Component/LandingPage/Offer";
function Home() {
  return (
    <>
      <Hero />
      <Chiffres />
      <Caroussel />
      <Offer />
      <Pricing />
    </>
  );
}

export default Home;
