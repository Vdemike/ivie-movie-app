import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import MovieThumbnail from "./MovieThumbnail";

function AllMovies() {
  const [allMovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [moviesToShow, setMoviesToShow] = useState(20);
  const [selectedCategory, setSelectedCategory] = useState("All");

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
      console.log(allMovies);
    }
  };

  const categories = [
    "All",
    "Action",
    "Adventure",
    "Science Fiction",
    "Thriller",
    "Romance",
    "Comedy",
    "Crime",
    "Drama",
    "Horror",
    "Mystery",
    "Animation",
    "Family",
    "Fantasy",
    "War",
    "History",
    "Music",
    "TV Movie",
    "Documentary",
    "Western",
  ];
  // movies.forEach((element) => {
  //   element.category.map((movie) => {
  //     if (!categories.includes(movie)) {
  //       categories.push(movie);
  //     }
  //   });
  // });
  // console.log(categories);

  const moviesToDisplay = movies.slice(0, moviesToShow);

  return (
    <section>
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
          <>
            <MovieThumbnail
              key={movie._id}
              poster={movie.poster_path}
              title={movie.title}
              date={movie.release_date}
            />
          </>
        ))}
      </div>
      {moviesToShow < movies.length && (
        <Button
          clickHandler={handleSeeMore}
          value="See more"
          class="bg-black hover:bg-transparent text-[#F4E3D7] font-semibold hover:text-black py-2 px-10 border border-transparent hover:border-black rounded-full flex justify-center items-center m-auto"
        />
      )}
    </section>
  );
}

export default AllMovies;
