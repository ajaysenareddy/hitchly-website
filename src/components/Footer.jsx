import React from 'react';
import { Car, Twitter, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footercol footer-logo-col">
                        <div className="footer-logo">
                            <Car size={24} className="text-primary" /> Hitchly
                        </div>
                        <p style={{ color: 'var(--color-text-light)', maxWidth: '320px', lineHeight: '1.7' }}>
                            Building the future of shared mobility. Safe, trusted, and efficient carpooling for everyone.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                            {/* Social placeholders */}
                            <a href="#" style={{ color: '#9CA3AF' }}><Twitter size={20} /></a>
                            <a href="#" style={{ color: '#9CA3AF' }}><Instagram size={20} /></a>
                            <a href="#" style={{ color: '#9CA3AF' }}><Linkedin size={20} /></a>
                        </div>
                    </div>

                    <div className="footercol">
                        <h4>Product</h4>
                        <a href="#features">Features</a>
                        <a href="#sponsorship">Sponsorship</a>
                        <a href="#join">Beta Access</a>
                        <a href="#safety">Safety</a>
                    </div>

                    <div className="footercol">
                        <h4>Company</h4>
                        <a href="#">About Us</a>
                        <a href="#">Contact</a>
                        <a href="#">Careers</a>
                    </div>

                    <div className="footercol">
                        <h4>Legal</h4>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Use</a>
                        <a href="#">Cookie Policy</a>
                    </div>
                </div>

                <div className="copyright">
                    <span>&copy; {new Date().getFullYear()} Hitchly Inc. All rights reserved.</span>
                    <span style={{ color: '#E0E0E0' }}>Asso. TEDxSMEC</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
