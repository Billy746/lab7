import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const ProjectList = () => {
  const { theme } = useContext(ThemeContext);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/projects`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setProjects(data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
        setError("Could not load projects. Please try again later.");
        
        // Fallback to sample data for testing
        setProjects([
          { 
            id: 1, 
            name: "E-commerce Platform", 
            author: "Jane Doe", 
            languages: ["React", "Node.js", "MongoDB"],
            description: "A full-stack e-commerce platform with user authentication, product management, and payment integration."
          },
          { 
            id: 2, 
            name: "Task Management App", 
            author: "John Smith", 
            languages: ["JavaScript", "Express", "MySQL"],
            description: "A productivity application for managing tasks, deadlines, and team collaboration."
          },
          { 
            id: 3, 
            name: "Weather Dashboard", 
            author: "Alex Johnson", 
            languages: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
            description: "A responsive weather application showing current conditions and forecasts for multiple locations."
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }

  return (
    <div className="row">
      {projects.map(project => (
        <div key={project.id} className="col-md-6 col-lg-4 mb-4">
          <div className={`card h-100 ${theme === 'dark' ? 'bg-dark text-light' : ''}`}>
            <div className="card-body">
              <h5 className="card-title">{project.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">By {project.author}</h6>
              <p className="card-text">{project.description}</p>
              <div className="mt-3">
                {project.languages.map((lang, index) => (
                  <span key={index} className="badge bg-secondary me-1">{lang}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;