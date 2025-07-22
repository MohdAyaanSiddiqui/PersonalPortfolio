import React from "react";
import "./Contact.css";

function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-content">
                <div className="contact-header">
                    <h1 className="contact-title">Get In Touch</h1>
                    <p className="contact-subtitle">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>
                </div>

                <div className="contact-info-only">
                    <div className="info-card">
                        <div className="info-icon">📍</div>
                        <h3 className="info-title">Location</h3>
                        <p className="info-text">Lucknow, UP , India</p>
                    </div>

                    <div className="info-card">
                        <div className="info-icon">🌐</div>
                        <h3 className="info-title">Social Media</h3>
                        <p className="info-text">Connect with me on social platforms</p>
                        <div className="social-links">
                            <a href="https://github.com/MohdAyaanSiddiqui" className="social-link" >Github</a>
                            <a href="https://www.linkedin.com/in/mohd-ayaan-355305342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-link">LinedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;