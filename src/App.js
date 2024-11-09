import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import EPaper from "./Components/EPaper";
import MyExpress from "./Components/MyExpress";
import UPSC from "./Components/UPSC";
import India from "./Components/India";
import Explained from "./Components/Explained";
import Opinion from "./Components/Opinion";
import Politics from "./Components/Politics";
import Business from "./Components/Business";
import Entertainment from "./Components/Entertainment";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ePaper" element={<EPaper />} />
        <Route path="/MyExpress" element={<MyExpress />} />
        <Route path="/UPSC" element={<UPSC />} />
        <Route path="/India" element={<India />} />
        <Route path="/Explained" element={<Explained />} />
        <Route path="/Opinion" element={<Opinion />} />
        <Route path="/Politics" element={<Politics />} />
        <Route path="/Business" element={<Business />} />
        <Route path="/Entertainment" element={<Entertainment />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
