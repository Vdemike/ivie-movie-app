import React from "react";
import RedirectButton from "../Button/RedirectButton";
function Offer() {
  return (
    <section className="text-center p-5 md:p-20 bg-black dark:bg-gray-900 text-white">
      <p className="mb-6 md:mb-10 md:max-w-[70%] m-auto ">
        Welcome to iVie, the ultimate streaming destination for entertainment
        lovers! <br />
        <br /> With iVie, you can watch all your favorite movies, TV shows, and
        documentaries from anywhere, at any time, on any device. We offer a vast
        library of content from around the world. You'll never run out of things
        to watch.
        <br />
        <br /> Join iVie today and start streaming your story!
      </p>
      <RedirectButton name="Sign Up" redirect="/signUp" />
    </section>
  );
}
export default Offer;
