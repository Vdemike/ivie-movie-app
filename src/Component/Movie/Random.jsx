import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../Button/Button";

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
        <div className="flex justify-center items-center">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
            className="w-[250px] h-[375px]"
          />
          <div className="bg-black p-28 self-center">
            <Button
              clickHandler={handleRandomMovie}
              value="Get Another Random Movie"
              class="bg-white m-1 hover:bg-transparent text-black font-semibold hover:text-white py-2 px-6 border border-transparent hover:border-white rounded"
            />
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Random;
