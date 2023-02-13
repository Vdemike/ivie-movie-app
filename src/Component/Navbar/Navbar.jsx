import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
//De ce que j'ai compris la navbar doit être la meme sur
//tout le site, il faudras avoir un state userLoggedIn et
//un autre state userNotLogged pour avoir 2 navbar différentes
function Navbar() {
  return (
    <nav className="w-full bg-black text-white p-4">
      <ul className="container flex flex-wrap items-center justify-between mx-auto">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signUp">Sign up</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
