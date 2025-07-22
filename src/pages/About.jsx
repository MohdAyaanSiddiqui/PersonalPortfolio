import React from "react";
import "./About.css";

function About() {
    return (
        <div className="about-container">
            <div className="about-content">
                <div className="about-header">
                    <h1 className="about-title">About Me</h1>
                    <p className="about-subtitle">
                        Passionate Fullstack Developer with expertise in React and AI technologies. 
                        I love creating innovative solutions and bringing ideas to life through code.
                    </p>
                </div>

                <div className="about-grid">
                    <div className="about-card" style={{ textAlign: 'center' }}>
                        <div className="card-icon">💻</div>
                        <h3 className="card-title">Front-End Development</h3>
                        <p className="card-description">
                            Experienced in building complete web applications from frontend to backend, 
                            with expertise in React, JavaScript, and modern web technologies.
                        </p>
                    </div>
                </div>

                <div className="skills-section">
                    <h2 className="skills-title">Technical Skills</h2>
                    <div className="skills-grid">
                        <div className="skill-item">
                            <div className="skill-name">HTML / Tailwind CSS</div>
                            <div className="skill-level">
                                <div className="skill-progress"></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <div className="skill-name">JavaScript</div>
                            <div className="skill-level">
                                <div className="skill-progress"></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <div className="skill-name">React.js</div>
                            <div className="skill-level">
                                <div className="skill-progress"></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <div className="skill-name">Java</div>
                            <div className="skill-level">
                                <div className="skill-progress"></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <div className="skill-name">SQL</div>
                            <div className="skill-level">
                                <div className="skill-progress"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="skills-section">
                    <h2 className="skills-title">Version Controls</h2>
                    <div className="skills-grid">
                        <div className="skill-item">
                            <div className="skill-name">Git/ Github</div>
                            <div className="skill-level">
                                <div className="skill-progress"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="timeline-section">
                    <h2 className="timeline-title">Experience</h2>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-content">
                                <div className="timeline-date">Jan 2025 - Mar 2025</div>
                                <h3 className="timeline-title">Front-End Developer Intern at Plasmid</h3>
                                <p className="timeline-description">
                                    During my 3-month internship at Plasmid, I contributed to the design and development of responsive web applications using modern technologies such as HTML/CSS, JavaScript, and React.js. I collaborated with a talented team to deliver user-friendly features and improve overall site performance.
                                </p>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
            <div className="about-funfact" style={{marginTop: '2rem', textAlign: 'center', color: '#888'}}>
                <em>"When I am not coding, you can find me exploring new tech trends or hiking in nature!"</em>
            </div>
        </div>
    );
}

export default About;