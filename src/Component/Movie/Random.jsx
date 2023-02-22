import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import OneMovie from "./OneMovie";

function Random() {
  const [movie, setMovie] = useState(null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

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
  console.log(selectedMovie);
  return (
    <div className="m-10">
      {selectedMovie ? (
        <OneMovie
          title={selectedMovie.title}
          onClose={() => setSelectedMovie(null)}
          overview={selectedMovie.overview}
          poster={selectedMovie.poster_path}
          date={selectedMovie.release_date}
          category={selectedMovie.category}
          rating={selectedMovie.vote_average}
        />
      ) : movie ? (
        <div className="flex justify-center items-center flex-col md:flex-row">
          <div className="relative">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
              className="w-[200px] md:w-[250px] md:h-[375px] cursor-pointer"
            />
            <div
              onClick={() => {
                setSelectedMovie(movie);
              }}
              className="bg-black/80 absolute bottom-0 text-white h-full w-[200px] md:w-[250px]
        opacity-0 transition-opacity hover:opacity-100 flex justify-end items-center flex-col text-center cursor-pointer"
            >
              <p> {movie.title}</p>
              <p> {movie.release_date.split("-").shift()}</p>
            </div>
          </div>
          <div className="bg-black p-10 md:p-20 self-center text-white">
            <h2 className="font-title text-3xl">Random</h2>
            <p className="pb-10">
              Don't waste more time choosing than watching
            </p>
            <Button
              clickHandler={handleRandomMovie}
              value="Generate"
              class="bg-white hover:bg-transparent text-black font-semibold hover:text-white py-2 px-10 border border-transparent hover:border-white rounded flex justify-center items-center m-auto"
            />
          </div>
        </div>
      ) : (
        <div className="w-full h-screen flex justify-center items-center bg-black/80 z-10">
          <div className="w-[64px] h-[64px] rounded-full border-y-2 animate-spin"></div>
        </div>
      )}
    </div>
  );
}

export default Random;
