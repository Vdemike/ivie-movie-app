import axios from "axios";
import { useEffect, useState } from "react";

function Random() {
  const [movie, setMovie] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/movies/")
      .then((response) => {
        setMovies(response.data);
        const randomMovie =
          response.data[Math.floor(Math.random() * response.data.length)];
        setMovie(randomMovie);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleRandomMovie = () => {
    const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    setMovie(randomMovie);
  };

  return (
    <div>
      {movie ? (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
            className="w-[250px] h-[375px]"
          />
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <button onClick={handleRandomMovie}>Get Another Random Movie</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Random;
