import * as React from "react";
import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/signUp";
import Footer from "./Component/Footer/footer";
import Pricing from "./Component/landing/Pricing/Pricing";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUP />} />
      </Routes>
      <Pricing />
      <Footer />
    </Router>
  );
}

export default App;
