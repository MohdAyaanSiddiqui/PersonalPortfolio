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
                                <h3 className="timeline-title">Open Soure Contribution | GitHub Readme Quotes | Remote | 2025</h3>
                                <p className="timeline-description">
                                - Contributed 5 issues (features & documentation) to an active open-source project.
                                <br/>
                                Implemented “Custom Themes from Website” (#147) 
                                <br/>
                                integrated Un Splash API for dynamic quote backgrounds (#239).
                                <br/>
                                Enhanced developer documentation (#119, #130) for custom font support and React integration,
                                <br/>
                                Add Custom quote for auto correct (#241)  
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