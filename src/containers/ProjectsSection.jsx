import React, { useEffect, useState, useContext } from "react";
import { projects } from "../assets/project/projects";
import Dropdown from "../components/resuable/Dropdown";
import ProjectCard from "../components/resuable/ProjectCard";
import SearchBox from "../components/resuable/SearchBox";
import { ThemeContext } from "../context/themeContext";

const ProjectsSection = ({number}) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [listedProjects, setListedProjects] = useState(projects);
  const [filter, setFilter] = useState("All Projects");
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    if (searchInput !== "") {
      setListedProjects(
        projects.filter((project) => project.name.toLowerCase().includes(searchInput))
      );
    } else {
      setListedProjects(projects);
    }
  }
 

  useEffect(() => {
    if (filter !== "All Projects") {
      setListedProjects(
        projects.filter((project) => project.category == filter)
      );
    } else {
      setListedProjects(projects);
    }
  }, [filter]);



  useEffect(() => {
    if (number <= 3) {
      setListedProjects(projects.slice(1,4));
    }
    else {
      setListedProjects(projects.slice(1,7));
    }
  }, [number]);

  const projectList = listedProjects.map((project) => (
    <ProjectCard
      key={project.id}
      projectImg={project.image}
      projectName={project.name}
      projectCategory={project.category}
    />
  ));
  return (
    <section className={`projects-section ${theme}`}>
      <div className="projects-section__title">Projects portfolio</div>
      <div className="projects-section__info">
        Search projects by title or filter by category
      </div>
      <div className="projects-section__header">
        <SearchBox setSearchInput={setSearchInput} handleSearch={handleSearch} />
        <Dropdown projects={projects} filter={filter} setFilter={setFilter} />
      </div>
      <div className={`projects-section__card-container ${theme}`}>
        {projectList}
      </div>
    </section>
  );
};

export default ProjectsSection;
