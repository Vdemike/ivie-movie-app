import React from "react";
import Button from "../Button/Button";
import { BrowserRouter, Route, Link } from "react-router-dom";
import RedirectButton from "../Button/RedirectButton";

function Hero() {
  return (
    <section>
      <div class="flex flex-row">
        <div class="basis-2/5">
          <video
            src="./src/assets/Composition 1.mp4"
            autoPlay
            loop={true}
            muted
            className="w-full h-full object-cover"
          />
        </div>
        <div class="basis-3/5 bg-[#F4E3D7]">
          <div className=" w-full h-full flex justify-center items-start flex-col">
            <div className=" text-black mb-6 ml-5 md:w-3/4 ">
              <h2 className="text-3xl m-2 font-title">
                Stream your favorite moments with iVie
              </h2>
              <h5 className="text-l m-2">Enjoy now iVie one month for free</h5>
            </div>
            <div className="flex justify-center w-full md:w-3/4 lg:w-1/2">
              <RedirectButton name="Sign Up !" redirect="/signUp" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
