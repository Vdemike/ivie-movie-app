import React from "react";
import Button from "../Button/Button";
import { BrowserRouter, Route, Link } from "react-router-dom";
import RedirectButtonNew from "../Button/RedirectButtonNew";

function Hero() {
  return (
    <section>
      <div className="flex flex-row">
        <div className="basis-1/2 bg-[#170f1d]">
          <img
            src="./src/assets/186.png"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="basis-1/2 bg-[#170f1d]">
          <div className=" w-full h-full flex justify-center items-start flex-col">
            <div className=" text-[#F4E3D7] mb-6 ml-5 md:w-3/4 ">
              <h2 className="text-3xl m-2 font-title">
                Stream your favorite moments with iVie
              </h2>
              <h5 className="text-l m-2">Enjoy now iVie one month for free</h5>
            </div>
            <div className="flex justify-center w-full md:w-3/4 lg:w-1/2">
              <RedirectButtonNew
                linkTo="/signUp"
                buttonText="Sign Up!"
                className="text-[#F4E3D7]"
                spanClassName="bg-[#9975B6]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
