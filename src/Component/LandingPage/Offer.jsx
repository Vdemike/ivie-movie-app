import React from "react";
import RedirectButtonNew from "../Button/RedirectButtonNew";
function Offer() {
  return (
    <section className="text-center justify-center p-8 md:p-20  text-[#F4E3D7] bg-[#170f1d] flex flex-col items-center">
      <video
        src="./src/assets/Composition 1.mp4"
        autoPlay
        loop={true}
        muted
        className="w-full h-full object-cover"
      />
      <p className="mb-6 md:mb-10 md:max-w-[70%] m-auto ">
        Welcome to iVie, the ultimate streaming destination for entertainment
        lovers! <br />
        <br /> With iVie, you can watch all your favorite movies from anywhere,
        at any time, on any device. We offer a vast library of content from
        around the world. You'll never run out of things to watch.
        <br />
        <br /> Join iVie today and start streaming your story!
      </p>
      <RedirectButtonNew
        linkTo="/signUp"
        buttonText="Sign Up!"
        className=""
        spanClassName="bg-[#9975B6]"
      />
    </section>
  );
}
export default Offer;
