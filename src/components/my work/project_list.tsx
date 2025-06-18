import React from "react";
import ProjectCard from "./project_card";
import type ProjectInterface from "./project_interface";
import "../../styles/my_work.scss";
import image from "../../assets/coding.png";
import ImageModalCustom  from "./image_modal";
const projects: any[] = [
  {
    title: "bay.js",
    desc: "Lightweight web‑componedasdasdsant library",
    image: image,
  },
  {
    title: "bay.js‑starter",
    desc: "Starter project for bay.js using Vite and Jampack",
    image: image,
  },
  { title: "Cookiemunch", desc: "Minimal cookie‑consent plugin", image: image },
  {
    title: "bay.js",
    desc: "Lightweight web‑componedsadddddddd dddddddddd ddddddddasdasdsant library",
    image: image,
  },
  {
    title: "bay.js‑starter",
    desc: "Starter project for bay.js using Vite and Jampack",
    image: image,
  },
  { title: "Cookiemunch", desc: "Minimal cookie‑consent plugin", image: image },
  // … add more as needed
];

export default function ProjectList() {
  const mapProjectToInterface = (project: any): ProjectInterface => ({
    title: project.title,
    desc: project.desc,
    image: project.image === undefined ? "" : project.image, // Placeholder for image, can be updated later
    link: [], // Placeholder for links, can be updated later
    tags: [], // Placeholder for tags, can be updated later
  });
  const projectInterfaces: ProjectInterface[] = projects.map(
    mapProjectToInterface
  );
  return (
    <section id="work" className="projects">
      <h2>My Work</h2>
      <div className="cards-grid">
        {projectInterfaces.map((p, index) => ProjectCard(p, index))}
      </div>
      {ImageModalCustom(image)}
    </section>
  );
}
