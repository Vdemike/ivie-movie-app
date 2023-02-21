import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../Button/Button";

function AllMovies() {
  const [movies, setMovies] = useState([]);
  const [moviesToShow, setMoviesToShow] = useState(20);
  const moviesToDisplay = movies.slice(0, moviesToShow);
  useEffect(() => {
    axios
      .get("http://localhost:3000/movies/")
      .then((response) => {
        setMovies(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSeeMore = () => {
    setMoviesToShow((prevMoviesToShow) => prevMoviesToShow + 10);
  };

  return (
    <section>
      <div className="flex flex-wrap justify-center items-center">
        {moviesToDisplay.map((movie) => (
          <img
            key={movie._id}
            className="w-[300px] md:w-[200px] p-4"
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
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
    </section>
  );
}

export default AllMovies;
