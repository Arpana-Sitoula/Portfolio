import React from "react";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import ProjectsSection from "./containers/ProjectsSection";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <ProjectsSection />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
