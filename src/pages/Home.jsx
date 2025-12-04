import './Home.css'
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home-container">
            {/* Floating background elements */}
            <div className="floating-elements">
                <div className="floating-element"></div>
                <div className="floating-element"></div>
                <div className="floating-element"></div>
            </div>
            
            <div className="hero-content">
                <h1 className="hero-title">Hi, I'm Mohd Ayaan Siddiqui</h1>
                <p className="hero-subtitle">
                    I'm a full-stack developer passionate about building clean, modern and user-friendly web applications.
                </p>
                
                <Link to="/contact" className="cta-button">
                    Get In Touch
                </Link>

                <div className="skills-showcase">
                    <span className="skill-tag">React</span>
                    <span className="skill-tag">JavaScript</span>
                    <span className="skill-tag">Tailwind CSS</span>
                    <span className="skill-tag">Firebase</span>
                </div>
            </div>
        </div>
    )
}

export default Home