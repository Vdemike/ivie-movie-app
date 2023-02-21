import * as React from "react";
import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Movies from "./pages/movies";
import SignUp from "./pages/signUp";
import Footer from "./Component/Footer/footer";
import Login from "./pages/login";
import { useState } from "react";
import DataService from "./services/services";
import UserProfile from "./pages/userProfile";

function App() {
  const [color, changeColor] = useState(
    "linear-gradient(0deg, rgba(175,151,196,1) 0%, rgba(240,224,209,1) 100%)"
  );
  return (
    <div
      className="min-h-screen m-0 flex flex-col"
      style={{ background: color }}
    >
      <Router>
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/movies" element={<Movies />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
