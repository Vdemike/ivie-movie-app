import axios, { Axios } from "axios";
import { useEffect, useState } from "react";

export default function Chiffres() {
  const [movies, setMovies] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/movies/")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3000/users/")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  let categories = [];
  movies.forEach((element) => {
    element.category.map((movie) => {
      if (!categories.includes(movie)) {
        categories.push(movie);
      }
    });
  });
  return (
    <div className="flex flex-col items-center bg-[#b496c7] p-4 pb-8">
      <div className="mb-6 mt-12 text-center">
        <h1 className="mb-4 text-6xl font-black text-black font-title">
          Our stats
        </h1>
        <p className="text-lg text-black">
          let the numbers speak for themselves
        </p>
      </div>
      <div
        id="pricing-cards"
        className="flex flex-col gap-8 m:flex-row m-8 xl:flex-row border-2 border-black rounded-xl"
      >
        <div className="flex flex-col rounded-3xl p-8">
<<<<<<< HEAD
          <h1 className="mb-4 text-7xl font-black text-black font-title text-center">
            {users.length}
=======
          <h1 className="mb-4 text-5xl font-black text-black font-title text-center">
            20
>>>>>>> Development
          </h1>
          <p className="text-lg text-black text-center">Accounts</p>
        </div>
        <div className="flex  flex-col rounded-3xl p-8">
          <h1 className="mb-4 text-5xl font-black text-black font-title text-center ">
            {movies.length}
          </h1>
          <p className="text-lg text-black text-center">Movies</p>
        </div>
        <div className="flex  flex-col rounded-3xl p-8">
          <h1 className="mb-4 text-5xl font-black text-black font-title text-center">
            {categories.length}
          </h1>
          <p className="text-lg text-black text-center">Categories</p>
        </div>
      </div>
    </div>
  );
}
