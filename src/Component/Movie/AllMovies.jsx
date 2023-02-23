import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import MovieThumbnail from "./MovieThumbnail";
import OneMovie from "./OneMovie";
import Search from "../Search Bar/Search";

function AllMovies() {
  const [allMovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [moviesToShow, setMoviesToShow] = useState(20);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/movies/")
      .then((response) => {
        setMovies(response.data);
        setAllMovies(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSeeMore = () => {
    setMoviesToShow((prevMoviesToShow) => prevMoviesToShow + 10);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setMovies(allMovies);
    } else {
      const filteredMovies = allMovies.filter((movie) =>
        movie.category.includes(category)
      );
      setMovies(filteredMovies);
    }
    setSelectedMovie(null);
  };

  const categories = ["All"];
  allMovies.forEach((element) => {
    element.category.map((movie) => {
      if (!categories.includes(movie)) {
        categories.push(movie);
      }
    });
  });

  const moviesToDisplay = movies.slice(0, moviesToShow);

  return (
    <section>
      <h1 class="font-title text-3xl text-[#F4E3D7] mx-16 mt-16 mb-6 relative w-max two text-justify	uppercase ">
        All movies
        <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-[#b496c7]"></span>
        <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-[#b496c7]"></span>
      </h1>
      <p className="text-lg text-[#F4E3D7] ml-16 pb-8">
        Take your pick from this vast array of films.
      </p>
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
      ) : (
        <>
          <div className=" text-[#F4E3D7] flex flex-wrap mx-2 px-2 mt-6 mb-6 md:mx-8 md:px-8 lg:mx-12 lg:px-12">
            {categories.map((category) => (
              <button
                key={category}
                className="text-l relative w-max three mx-6 rounded-full text-[#F4E3D7] font-bold text-sm py-2 px-4 m-2 border-none transition-all hover:bg-opacity-75 "
                onClick={() => handleCategoryFilter(category)}
              >
                <span className="px-1">{category}</span>
                {selectedCategory === category && (
                  <span className="absolute left-0 -bottom-1 w-full h-1 transition-all bg-[#9975B6]"></span>
                )}
              </button>
            ))}
          </div>

          <Search
            handleSearch={(value) => {
              const filteredMovies = allMovies.filter((movie) =>
                movie.title.toLowerCase().includes(value.toLowerCase())
              );
              setMovies(filteredMovies);
              setSelectedCategory("All");
              setSelectedMovie(null);
            }}
          />
          <div className="flex flex-wrap justify-center items-center">
            {moviesToDisplay.map((movie) => (
              <MovieThumbnail
                key={movie._id}
                id={movie._id}
                poster={movie.poster_path}
                title={movie.title}
                date={movie.release_date}
                handleClick={() => setSelectedMovie(movie)}
              />
            ))}
          </div>

          {moviesToShow < movies.length && (
            <Button
              clickHandler={handleSeeMore}
              value="See more"
              class="bg-[#9975B6] hover:bg-transparent text-[#170f1d] font-semibold hover:text-[#9975B6] py-2 px-10 border border-transparent hover:border-[#9975B6] rounded-full flex justify-center my-8 items-center mx-auto"
            />
          )}
        </>
      )}
    </section>
  );
}

export default AllMovies;
