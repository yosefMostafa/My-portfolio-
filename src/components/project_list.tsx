import React from 'react';

const projects = [
  { title: 'bay.js', desc: 'Lightweight web‑component library' },
  { title: 'bay.js‑starter', desc: 'Starter project for bay.js using Vite and Jampack' },
  { title: 'Cookiemunch', desc: 'Minimal cookie‑consent plugin' },
  // … add more as needed
];

export default function ProjectList() {
  return (
    <section id="work" className="projects">
      <h2>My Work</h2>
      {projects.map(p => (
        <div key={p.title} className="project">
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
        </div>
      ))}
    </section>
  );
}
