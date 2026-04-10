import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <span className="footer-logo">Hitchly</span>
                    <span className="footer-copyright">© {new Date().getFullYear()}</span>
                </div>
                <div className="footer-links">
                    <Link to="/privacy-policy" className="footer-link">Privacy Policy & Terms</Link>
                    <a href="mailto:support@hitchly.in" className="footer-link">Support</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
