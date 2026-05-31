import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './PageLayout.css';

const PageLayout = ({ title, description, children, hideCta = false, hideNavbar = false }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            {!hideNavbar && <Navbar />}
            <main className={`page-layout ${hideNavbar ? 'no-navbar' : ''}`}>
                {title && (
                    <header className="page-hero">
                        <div className="container">
                            <div className="page-hero-content">
                                <h1>{title}</h1>
                                {description && <p className="page-description">{description}</p>}
                            </div>
                        </div>
                    </header>
                )}
                <article className="page-body">
                    <div className="container page-container">
                        {children}
                        {!hideCta && (
                            <div className="page-cta-block">
                                <h2>Ready to Start Carpooling?</h2>
                                <p>Download the official Hitchly app from the Google Play Store today and start smart ride pooling in Hyderabad.</p>
                                <div className="page-cta-btns">
                                    <a href="https://play.google.com/store/apps/details?id=com.hitchly" target="_blank" rel="noopener noreferrer" className="btn-primary-cta">Download App</a>
                                    <Link to="/" className="btn-secondary-cta">← Back to Home</Link>
                                </div>
                            </div>
                        )}
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
};

export default PageLayout;
