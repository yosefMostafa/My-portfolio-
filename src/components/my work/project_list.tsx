import ProjectCard from "./project_card";
import type ProjectInterface from "./project_interface";
import "../../styles/my_work.scss";

import projects from "../../assets/projects.json"; // Assuming you have a JSON file with project data

export default function ProjectList() {
  const mapProjectToInterface = (project: any): ProjectInterface => ({
    title: project.title,
    desc: project.desc,
    images: project.images === undefined ? [] : project.images, // Placeholder for image, can be updated later
    links:  project.links === undefined ? [] : project.links, // Placeholder for links, can be updated later
    tags: [], 
    tech: project.tech === undefined ? [] :project.tech// Placeholder for tags, can be updated later
  });
  const projectInterfaces: ProjectInterface[] = projects.map(
    mapProjectToInterface
  );
  return (
    <section id="work" className="projects">
      <h2>My Work</h2>
      <h3>A collection of projects I've worked on.</h3>
      <div className="cards-grid">
        {projectInterfaces.map((p, index) => ProjectCard(p, index))}
      </div>
    
    </section>
  );
}
