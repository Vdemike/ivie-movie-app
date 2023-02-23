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
          <div className="flex justify-center items-center flex-wrap space-x-4 mb-4">
            {categories.map((category) => (
              <Button
                key={category}
                clickHandler={() => handleCategoryFilter(category)}
                value={category}
                class={
                  selectedCategory === category
                    ? "bg-black text-white font-semibold py-2 px-4 m-2 rounded"
                    : "bg-white text-black font-semibold py-2 px-4 m-2 rounded border border-black"
                }
              />
            ))}
          </div>
          <Search handleSearch={(value) => {
    const filteredMovies = allMovies.filter((movie) =>
      movie.title.toLowerCase().includes(value.toLowerCase())
    );
    setMovies(filteredMovies);
    setSelectedCategory("All");
    setSelectedMovie(null);
  }} />
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
              class="bg-black hover:bg-transparent text-white font-semibold hover:text-black py-2 px-10 border border-transparent hover:border-black rounded flex justify-center items-center m-auto"
            />
          )}
        </>
      )}
    </section>
  );
}

export default AllMovies;
