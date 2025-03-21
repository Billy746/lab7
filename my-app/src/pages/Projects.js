import React from 'react';
import ProjectList from '../components/ProjectList';

const Projects = () => {
  return (
    <div>
      <h1 className="mb-4">My Projects</h1>
      <p className="mb-4">
        Here are some of the projects I've worked on. These showcase my skills and experience in various technologies.
      </p>
      
      <ProjectList />
    </div>
  );
};

export default Projects;