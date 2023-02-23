import React from "react";
import AllMovies from "../Component/Movie/AllMovies";
import Random from "../Component/Movie/Random";
import ScrollTop from "../Component/ScrollTop/ScrollTop";
import CarouMovies from "../Component/Movie/carouMovies";

function Movies() {
  return (
    <>
      <CarouMovies />
      <AllMovies />
      <Random />
      <ScrollTop />
    </>
  );
}

export default Movies;
