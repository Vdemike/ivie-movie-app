import axios from "axios";
import { useEffect, useState } from "react";

function Caroussel() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/movies/")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="slider-container">
      <div className="slider">
        <div className="slide-track">
          {movies.slice(0, 18).map((movie) => (
            <div
              key={movie.id}
              className="slide bg-cover"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Caroussel;
