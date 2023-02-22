import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import MovieThumbnail from "./MovieThumbnail";
import OneMovie from "./OneMovie";

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
          <div className="flex  flex-wrap mx-2 px-2 mt-6 mb-6 md:mx-8 md:px-8 lg:mx-12 lg:px-12">
            {categories.map((category) => (
              <Button
                key={category}
                clickHandler={() => handleCategoryFilter(category)}
                value={category}
                class={
                  selectedCategory === category
                    ? "bg-black text-[#F4E3D7] text-sm py-2 px-4 m-2 rounded-full"
                    : "bg-[#F4E3D7] text-black text-sm py-2 px-4 m-2 rounded-full border border-black"
                }
              />
            ))}
          </div>
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
              class="bg-black hover:bg-transparent text-[#F4E3D7] font-semibold hover:text-black py-2 px-10 border border-transparent hover:border-black rounded-full flex justify-center items-center m-auto"
            />
          )}
        </>
      )}
    </section>
  );
}

export default AllMovies;
