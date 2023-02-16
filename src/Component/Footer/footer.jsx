import React from "react";
import ItemsContainer from "./ItemsContainer";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center">
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2023 iVie. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
