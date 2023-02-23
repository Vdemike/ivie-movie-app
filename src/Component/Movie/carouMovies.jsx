import { useEffect, useState, useCallback, useMemo } from "react";
import axios from "axios";
import MovieThumbnail from "./MovieThumbnail";
import OneMovie from "./OneMovie";
function carouMovies() {
  const [allMovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [moviesToShow, setMoviesToShow] = useState(4);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const fetchMovies = useCallback(() => {
    axios
      .get("http://localhost:3000/movies/")
      .then((response) => {
        setMovies(response.data.slice(0, 12));
        setAllMovies(response.data.slice(0, 12));
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
  const categories = useMemo(() => {
    let categories = [];
    allMovies.forEach((element) => {
      element.category.map((movie) => {
        if (!categories.includes(movie)) {
          categories.push(movie);
        }
      });
    });
    return categories;
  }, [allMovies]);
  const handleResize = () => {
    const width = window.innerWidth;
    if (width <= 768) {
      setMoviesToShow(2);
    } else if (width <= 1024) {
      setMoviesToShow(3);
    } else {
      setMoviesToShow(4);
    }
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
    <section className="flex flex-col ">
      <h1 class="font-title text-[#F4E3D7] text-3xl mx-16 mt-16 mb-6 relative w-max two text-justify	uppercase ">
        The trends
        <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-[#b496c7]"></span>
        <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-[#b496c7]"></span>
      </h1>
      <p className="text-lg text-[#F4E3D7] pl-16 pb-16">
        Let yourself be tempted by the most popular films.
      </p>
      {}
      <div className="w-full overflow-x-hidden mb-8 scrollbar-hide overflow-clip">
        {}
        <div className="flex justify-center space-x-4">
          {}
          {}
          {}
          {}
          {moviesToDisplay.map((movie, index) => (
            <div
              key={movie._id}
              className={`${
                index % moviesToShow === 0 ? "ml-0" : "ml-4"
              } transition-all duration-500 ease-in-out transform hover:-translate-y-1 md:hover:scale-110 lg:hover:scale-110`}
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
      {}
      <div class="flex justify-center items-center">
        <button
          type="button"
          class="relative top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F4E3D7]/30  group-hover:bg-[#F4E3D7]/50  group-focus:ring-4 group-focus:ring-[#F4E3D7]  group-focus:outline-none">
            <svg
              aria-hidden="true"
              class="w-6 h-6 text-[#F4E3D7] dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handlePrev}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="relative top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F4E3D7]/30  group-hover:bg-[#F4E3D7]/50  group-focus:ring-4 group-focus:ring-[#F4E3D7]  group-focus:outline-none">
            <svg
              aria-hidden="true"
              class="w-6 h-6 text-[#F4E3D7] "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleNext}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>

      {}
      {}
      {selectedMovie && (
        <OneMovie
          title={selectedMovie.title}
          onClose={() => setSelectedMovie(null)}
          overview={selectedMovie.overview}
          poster={selectedMovie.poster_path}
          date={selectedMovie.release_date}
          category={categories}
          rating={selectedMovie.vote_average}
        />
      )}
    </section>
  );
}
export default carouMovies;
