import React, { useState } from "react";
import "./Project.css";

function Project() {
    const [activeFilter, setActiveFilter] = useState('all');

    const filters = [
        { id: 'all', label: 'All' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'fullstack', label: 'Fullstack' },
    ];

    const projects = [
        {
            id: 1,
            title: "Live Chat Application",
            description: "A real-time chat application with authentication, smooth UX and responsive design.",
            tech: ["React", "Firebase Authentication"],
            category: 'fullstack',
            year: '2025',
            type: 'Full-stack app',
            liveLink: "https://live-chat-app-git-main-mohdayaansiddiquis-projects.vercel.app",
            featured: false,
            image: "/images/live.jpg"
        },
        {
            id: 2,
            title: "Weather Dashboard",
            description: "A clean weather dashboard that shows current conditions and forecasts using OpenWeather API.",
            tech: ["React", "OpenWeather API"],
            category: 'frontend',
            year: '2024',
            type: 'Frontend UI',
            liveLink: "https://new-weather-app-psi.vercel.app/",
            featured: false,
            image: "/images/weather2.jpg"
        },
        {
            id: 3,
            title: "Notes App",
            description: "A lightweight notes application to create, edit and delete notes efficiently.",
            tech: ["React", "Firebase"],
            category: 'fullstack',
            year: '2025',
            type: 'Full-stack app',
            liveLink: "https://notes-app-git-main-mohdayaansiddiquis-projects.vercel.app",
            featured: false,
            image: "/images/notes.jpg"
        },
       
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <div className="projects-container">
            <div className="projects-content">
                  <div className="projects-header">
                    <h1 className="projects-title">My Projects</h1>
                    <p className="projects-subtitle">
                        Explore my latest work and creative solutions. Each project represents a unique challenge 
                        and showcases different aspects of my development skills.
                    </p>
                </div>

                <div className="filter-buttons">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            type="button"
                            className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter.id)}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                <p className="projects-filter-label">
                    Showing {filteredProjects.length} project{filteredProjects.length > 1 ? 's' : ''}
                    {" · "}
                    {filters.find((f) => f.id === activeFilter)?.label}
                </p>

                <div className="projects-grid">
                    {filteredProjects.map((project) => (
                        <div 
                            key={project.id} 
                            className={`project-card ${project.featured ? 'featured-project' : ''}`}
                        >
                            {project.featured && (
                                <div className="featured-badge">Featured</div>
                            )}
                            
                            <img src={project.image} alt={project.title} className="project-image" />
                            
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <div className="project-meta">
                                    <span className="project-year">{project.year}</span>
                                    <span className="project-dot">•</span>
                                    <span className="project-type">{project.type}</span>
                                </div>
                                <p className="project-description">{project.description}</p>
                                
                                <div className="project-tech">
                                    {project.tech.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                
                                <div className="project-links">
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                         
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Project;