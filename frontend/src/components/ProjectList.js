import React, { useState, useEffect } from "react";

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://app-portfolio-lab7.netlify.app/.netlify/functions/api/projects") 
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <strong>{project.name}</strong> - {project.languages}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
