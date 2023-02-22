import React from "react";
import AllMovies from "../Component/Movie/AllMovies";
import Random from "../Component/Movie/Random";
import ScrollTop from "../Component/ScrollTop/ScrollTop";

function Movies() {
  return (
    <>
      <AllMovies />
      <Random />
      <ScrollTop />
    </>
  );
}

export default Movies;
