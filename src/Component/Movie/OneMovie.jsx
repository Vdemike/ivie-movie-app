import Button from "../Button/Button";

function OneMovie(props) {
  return (
    <section className="flex justify-center flex-col items-center lg:flex-row-reverse lg:p-10">
      <img
        src={`https://image.tmdb.org/t/p/original${props.poster}`}
        className="h-[400px] md:h-[500px] lg:h-[calc(100vh-112px)]"
      />
      <div className="md:p-20 bg-white lg:ml-10 p-4">
        <h1 className="font-title text-2xl text-center p-4">{props.title}</h1>
        <p className="py-2">
          Release date: {props.date.substr(8, 2)}/{props.date.substr(5, 2)}/
          {props.date.substr(0, 4)}
        </p>
        <p className="flex flex-wrap items-center py-2">
          Categories:
          {props.category.map((categories) => (
            <p className="inline bg-purple-500 text-white rounded-lg p-1 m-1">
              {categories}
            </p>
          ))}
        </p>
        <p className="py-4 pb-8">{props.overview}</p>
        <Button
          clickHandler={props.onClose}
          value="Go back"
          class="bg-black hover:bg-transparent text-white font-semibold hover:text-black py-2 px-10 border border-transparent hover:border-black rounded flex justify-center items-center m-auto"
        />
      </div>
    </section>
  );
}
export default OneMovie;
