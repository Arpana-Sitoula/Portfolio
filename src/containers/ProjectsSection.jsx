import React, { useEffect, useState } from "react";
import { projects } from "../assets/projects.json";
import Dropdown from "../components/resuable/Dropdown";
import ProjectCard from "../components/resuable/ProjectCard";
import SearchBox from "../components/resuable/SearchBox";

const ProjectsSection = () => {
  const [listedProjects, setListedProjects] = useState(projects);
  const [filter, setFilter] = useState("All Projects");

  useEffect(() => {
    if (filter !== "All Projects") {
      setListedProjects(
        projects.filter((project) => project.category == filter)
      );
    } else {
      setListedProjects(projects);
    }
  }, [filter]);

  const projectList = listedProjects.map((project) => (
    <ProjectCard
      key={project.id}
      projectImg={project.image}
      projectName={project.name}
      projectCategory={project.category}
    />
  ));
  return (
    <section className="projects-section">
      <div className="projects-section__title">Projects portfolio</div>
      <div className="projects-section__info">
        Search projects by title or filter by category
      </div>
      <div className="projects-section__header">
        <SearchBox />
        <Dropdown projects={projects} filter={filter} setFilter={setFilter} />
      </div>
      <div className="projects-section__card-container">{projectList}</div>
    </section>
  );
};

export default ProjectsSection;
