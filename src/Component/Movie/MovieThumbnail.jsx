import OneMovie from "./OneMovie";
import { useState } from "react";
function MovieThumbnail(props) {
  const [oneMovie, setOneMovies] = useState(false);
  return (
    <>
      {oneMovie ? (
        oneMovie && <OneMovie title={props.title} />
      ) : (
        <div
          className="relative m-4"
          onClick={() => {
            setOneMovies(true);
          }}
        >
          <img
            key={props.id}
            className="w-[300px] md:w-[200px]"
            src={`https://image.tmdb.org/t/p/original${props.poster}`}
          />
          <div
            className="bg-black/80 absolute bottom-0 text-white w-[300px] h-full md:w-[200px]
        opacity-0 transition-opacity hover:opacity-100 flex justify-end items-center flex-col p-4 text-center"
          >
            <p> {props.title}</p>
            <p> {props.date.split("-").shift()}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default MovieThumbnail;
