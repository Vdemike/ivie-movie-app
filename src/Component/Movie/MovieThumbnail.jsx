function MovieThumbnail(props) {
  return (
    <>
      <div className="relative m-4" onClick={props.handleClick}>
        <img
          key={props.id}
          className="w-[300px] md:w-[200px]"
          src={`https://image.tmdb.org/t/p/original${props.poster}`}
        />
        <div
          className="bg-black/80 absolute bottom-0 text-white h-full md:w-[200px]
        opacity-0 transition-opacity hover:opacity-100 flex justify-end items-center flex-col text-center cursor-pointer p-4"
        >
          <p> {props.title}</p>
          <p> {props.date.split("-").shift()}</p>
        </div>
      </div>
    </>
  );
}

export default MovieThumbnail;
