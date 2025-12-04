import React from "react";
import "./About.css";

function About() {
    return (
        <div className="about-container">
            <div className="about-content">
                <div className="about-header">
                    <h1 className="about-title">About Me</h1>
                    <p className="about-subtitle">
                        Passionate full-stack developer with expertise in React and modern web technologies.
                        I love creating innovative solutions and bringing ideas to life through clean, maintainable code.
                    </p>
                </div>

                <div className="about-grid">
                    <div className="about-card about-profile-card">
                        <div className="profile-avatar">MAS</div>
                        <h3 className="card-title">Full-Stack Developer</h3>
                        <p className="card-description">
                            Based in Lucknow, India. I love turning ideas into beautiful, fast and accessible web experiences.
                        </p>
                        <div className="profile-tags">
                            <span className="profile-tag">Open Source</span>
                            <span className="profile-tag">Full-Stack</span>
                            <span className="profile-tag">Problem Solver</span>
                        </div>
                    </div>

                    <div className="about-card" style={{ textAlign: 'center' }}>
                        <div className="card-icon">💻</div>
                        <h3 className="card-title">Front-End Development</h3>
                        <p className="card-description">
                            Crafting responsive, pixel-perfect UIs with React, modern JavaScript and CSS.
                        </p>
                    </div>

                    <div className="about-card" style={{ textAlign: 'center' }}>
                        <div className="card-icon">⚙️</div>
                        <h3 className="card-title">Back-End & Tools</h3>
                        <p className="card-description">
                            Comfortable with APIs, databases and Git-based workflows to ship features reliably.
                        </p>
                    </div>
                </div>

                <div className="skills-section">
                    <h2 className="skills-title">Technical Skills</h2>
                    <div className="skills-grid">
                        <div className="skill-item">
                            <div className="skill-name">HTML / Tailwind CSS</div>
                            <div className="skill-level">
                                <div className="skill-progress" style={{ width: '90%' }}></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <div className="skill-name">JavaScript</div>
                            <div className="skill-level">
                                <div className="skill-progress" style={{ width: '85%' }}></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <div className="skill-name">React.js</div>
                            <div className="skill-level">
                                <div className="skill-progress" style={{ width: '85%' }}></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <div className="skill-name">Java</div>
                            <div className="skill-level">
                                <div className="skill-progress" style={{ width: '70%' }}></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <div className="skill-name">SQL</div>
                            <div className="skill-level">
                                <div className="skill-progress" style={{ width: '75%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="skills-section">
                    <h2 className="skills-title">Version Controls</h2>
                    <div className="skills-grid">
                        <div className="skill-item">
                            <div className="skill-name">Git / GitHub</div>
                            <div className="skill-level">
                                <div className="skill-progress" style={{ width: '80%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="timeline-section">
                    <h2 className="timeline-title">Experience</h2>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-content">
                                <h3 className="timeline-title">Open Source Contributor | GitHub Readme Quotes | Remote | 2025</h3>
                                <p className="timeline-description">
                                    Contributed to an active open-source project by:
                                    <br />
                                    • Implementing “Custom Themes from Website” (#147).
                                    <br />
                                    • Integrating Unsplash API for dynamic quote backgrounds (#239).
                                    <br />
                                    • Enhancing developer documentation for custom font support and React integration (#119, #130).
                                    <br />
                                    • Adding custom quote support with auto-correct (#241).
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