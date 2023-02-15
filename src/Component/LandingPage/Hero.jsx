import React from "react";
import Button from "../Button/Button";
import { BrowserRouter, Route, Link } from "react-router-dom";
import RedirectButton from "../Button/RedirectButton";

function Hero() {
  return (
    <section className="bg-hero-pattern h-[calc(100vh-60px)] md:h-[calc(100vh-56px)] bg-center w-full">
      <div className="bg-black/50 w-full h-full flex justify-center items-start flex-col">
        <div className=" text-white mb-6 ml-5 lg:w-1/2 md:w-3/4 ">
          <h2 className="text-3xl m-2">
            Stream your favorite moments with iVie
          </h2>
          <h5 className="text-l m-2">Enjoy now iVie one month for free</h5>
        </div>
        <div className="flex justify-center w-full md:w-3/4 lg:w-1/2">
          <RedirectButton name="Sign Up !" redirect="/signUp" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
