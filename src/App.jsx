import React from "react";

import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Project from "./pages/Project";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="project"  element={<Project/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
