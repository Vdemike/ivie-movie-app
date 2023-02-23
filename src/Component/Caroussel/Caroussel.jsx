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
    <section>
      <div className="pb-2 pt-12 text-center bg-black">
        <h1 className="pb-4 text-6xl font-black text-[#F4E3D7] font-title">
          All the movies you want,
        </h1>
        <p className="text-lg text-[#F4E3D7] pb-4">
          what you really, really want!
        </p>
      </div>
      <div className="slider-container pt-8 pb-8">
        <div className="slider">
          <div className="slide-track">
            {movies.slice(0, 17).map((movie) => (
              <div
                key={movie.title}
                className="slide bg-cover"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Caroussel;
