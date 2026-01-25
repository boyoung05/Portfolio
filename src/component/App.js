import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Project from "../pages/Project/Project";
import About from "../pages/About/About";
import Footer from "./Footer";
import Header from "./Header";
import '../App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
