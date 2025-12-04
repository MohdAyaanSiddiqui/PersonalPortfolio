import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./Navbar.css";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuOpen && navRef.current && !navRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };
        
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [isMenuOpen]);
    
    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} ref={navRef}>
            <div className="nav-container">
                <NavLink to="/" className="nav-logo" onClick={() => isMenuOpen && setIsMenuOpen(false)}>
                    Ayaan.dev
                </NavLink>
                
                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/project"
                            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Project
                        </NavLink>
                    </li>
                    <li className="nav-cta-item">
                        <NavLink
                            to="/contact"
                            className="nav-cta"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {"Let's talk"}
                        </NavLink>
                    </li>
                </ul>
                
                <button 
                    className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`} 
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            
            {/* Overlay for mobile menu background */}
            {isMenuOpen && <div className="menu-overlay" onClick={() => setIsMenuOpen(false)}></div>}
        </nav>
    );
}

export default Navbar;