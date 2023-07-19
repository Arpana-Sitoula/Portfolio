
import React from "react";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import ProjectsSection from "./containers/ProjectsSection";

import React from "react"
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <React.Fragment>

      <Navbar />
      <main>
        <ProjectsSection />
      </main>
      <Footer />

      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="about" element={  <AboutMe/>}/>
      </Routes>
      </BrowserRouter>

    </React.Fragment>
  );
}

export default App;
