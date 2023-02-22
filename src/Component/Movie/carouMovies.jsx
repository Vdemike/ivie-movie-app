import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import MovieThumbnail from "./MovieThumbnail";
import OneMovie from "./OneMovie";
function carouMovies() {
  const [allMovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [moviesToShow] = useState(4);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const fetchMovies = useCallback(() => {
    axios
      .get("http://localhost:3000/movies/")
      .then((response) => {
        setMovies(response.data.slice(0, 10));
        setAllMovies(response.data.slice(0, 10));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    if (movies.length === 0) {
      fetchMovies();
    }
  }, [fetchMovies]);
  let categories = [];
  allMovies.forEach((element) => {
    element.category.map((movie) => {
      if (!categories.includes(movie)) {
        categories.push(movie);
      }
    });
  });
  const moviesToDisplay = movies.slice(
    currentIndex,
    currentIndex + moviesToShow
  );
  const handleNext = () => {
    if (currentIndex + moviesToShow < movies.length) {
      setCurrentIndex(currentIndex + moviesToShow);
    }
  };
  const handlePrev = () => {
    if (currentIndex - moviesToShow >= 0) {
      setCurrentIndex(currentIndex - moviesToShow);
    }
  };
  return (
    <section className="flex flex-col items-center">
      <div className="w-full overflow-x-hidden">
        <div className="flex justify-center space-x-4">
          {moviesToDisplay.map((movie, index) => (
            <div
              key={movie._id}
              className={`${
                index % moviesToShow === 0 ? "ml-0" : "ml-4"
              } transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110`}
            >
              <MovieThumbnail
                id={movie._id}
                poster={movie.poster_path}
                title={movie.title}
                date={movie.release_date}
                handleClick={() => setSelectedMovie(movie)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center space-x-2 mt-6">
        <button onClick={handlePrev}>suivant </button>
        <button onClick={handleNext}>precedent</button>
      </div>
      {selectedMovie && (
        <OneMovie
          title={selectedMovie.title}
          onClose={() => setSelectedMovie(null)}
          overview={selectedMovie.overview}
          poster={selectedMovie.poster_path}
          date={selectedMovie.release_date}
          category={selectedMovie.category}
          rating={selectedMovie.vote_average}
        />
      )}
    </section>
  );
}
export default carouMovies;
