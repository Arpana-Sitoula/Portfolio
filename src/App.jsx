import React from "react";

import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Project from "./pages/Project";
import ContactPage from "./pages/ContactPage";
import ProjectDetail from "./containers/ProjectDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ProjectDetail />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="project" element={<Project />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="project/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
