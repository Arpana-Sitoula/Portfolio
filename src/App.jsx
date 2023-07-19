import React from "react"
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="about" element={  <AboutMe/>}/>
      </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
