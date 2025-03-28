import React from "react";
import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="footer">
        <div className="container">
        <div className="footer-top">
            <div className="footer-logo">
            <img src="img.png" alt="Studently Logo" className="footer-logo-img" />
            <p className="footer-description">
                Studently is your trusted partner in streamlining education management. Empowering institutions, students, and educators with innovative tools for success.
            </p>
            </div>
            <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
                <li><Link to="#">About Us</Link></li>
                <li><Link to="#">Privacy Policy</Link></li>
                <li><Link to="#">Terms of Service</Link></li>
                <li><Link to="#">Contact</Link></li>
            </ul>
            </div>
            <div className="footer-socials">
            <h4>Follow Us</h4>
            <div className="social-icons">
                <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
                </Link>
                <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
                </Link>
            </div>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2025 Studently. All rights reserved. | Designed with ❤️ for education.</p>
        </div>
        </div>
        </footer>
    );
}

export default Footer;