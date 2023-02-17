import * as React from "react";
import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

import SignUp from "./pages/signUp";
import Footer from "./Component/Footer/footer";
import Login from "./pages/login";
import { useState } from "react";
import DataService from "./services/services";

function App() {
  const [color, changeColor] = useState(
    "linear-gradient(0deg, rgba(175,151,196,1) 0%, rgba(240,224,209,1) 100%)"
  );
  return (

    <div style={{ background: color }}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </div>

  );
}

export default App;
