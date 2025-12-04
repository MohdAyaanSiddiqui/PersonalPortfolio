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

                <div className="contact-grid">
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
                                <a
                                    href="https://github.com/MohdAyaanSiddiqui"
                                    className="social-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/mohd-ayaan-355305342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                    className="social-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-card">
                        <h2 className="contact-form-title">Send me a message</h2>
                        <p className="contact-form-subtitle">
                            Share a quick idea, question or opportunity. I&apos;ll get back as soon as I can.
                        </p>
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input id="name" name="name" type="text" placeholder="Your name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input id="email" name="email" type="email" placeholder="you@example.com" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Tell me a bit about what you have in mind..."
                                ></textarea>
                            </div>
                            <button type="submit" className="contact-submit">
                                Send message
                            </button>
                            <p className="contact-note">
                                Prefer email or social? You can always reach me via GitHub or LinkedIn as well.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;