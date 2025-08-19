import React, { useState } from "react";
import "./Project.css";

function Project() {
    const [activeFilter, setActiveFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: "Live Chat Application",
            description: "An intelligent chat application. Includes real-time messaging, sentiment analysis, and automated responses.",
            tech: ["React", "Firebase Authentication"],
            liveLink: "https://live-chat-app-git-main-mohdayaansiddiquis-projects.vercel.app",
            featured: false,
            image: "/images/live.jpg"
        },
        {
            id: 2,
            title: "Weather Dashboard",
            description: "A beautiful weather dashboard that displays current weather conditions, forecasts, and interactive maps using weather APIs.",
            tech: ["React",  "OpenWeather API"],
            liveLink: "https://new-weather-app-psi.vercel.app/",
            featured: false,
            image: "/images/weather2.jpg"
        },
        {
            id: 3,
            title: "Notes App",
            description: "A lightweight and user-friendly application built with react that allows user to create , edit and delete notes efficiently",
            tech: ["React", "Firebase"],
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