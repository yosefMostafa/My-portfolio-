import type ProjectInterface from "./project_interface";
import CarousalView from "./Carousal_image_view";
import { useState } from "react";

const ProjectCard = (project: ProjectInterface, key: number) => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div key={key}>
      <div
        className="project-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        {project.images && <CarousalView images={project.images} animate={isHovered} />}
        <h3>{project.title}</h3>
        <p>{project.desc}</p>

        {project.tech && project.tech.length > 0 && (
          <>
            <h3 className="tech-title">Technologies Used</h3>
            <div className="tech">
              {project.tech.map((tech, index) => (
                <p key={index} className="tech-item">
                  {tech}
                </p>
              ))}
            </div>
          </>
        )}
        <div className="links-row">
          {project.links &&
            project.links.map((link, index) => (
              <a
                href={link.url}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img key={index} alt={link.name} src={link.icon}></img>
              </a>
              // <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
              //     {link.name}
              // </a>
            ))}
        </div>
        {project.tags && project.tags.length > 0 && (
          <div className="tags">
            {project.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
