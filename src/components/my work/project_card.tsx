import React from 'react';
import type ProjectInterface from './project_interface';


const ProjectCard =(project:ProjectInterface,key:number)=>{

    return (
        <div key={key} >
            <div className="project-card">
                {project.image && <img src={project.image} alt={`${project.title} screenshot`} />}
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                {project.link && project.link.map((link, index) => (
                    <a key={index} href={link} target="_blank" rel="noopener noreferrer">
                        {link}
                    </a>
                ))}
                {project.tags && project.tags.length > 0 && (
                    <div className="tags">
                        {project.tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProjectCard;