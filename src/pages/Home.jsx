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
                <p className="hero-subtitle">I'm a Fullstack Developer passionate about building , clean , and user friendly web application  </p>
                
                <Link to="/contact" className="cta-button">
                    Get In Touch
                </Link>
            </div>
        </div>
    )
}

export default Home