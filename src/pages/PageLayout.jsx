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
                                <p>Join the Hitchly beta waitlist and be among the first to experience smart ride pooling in Hyderabad.</p>
                                <div className="page-cta-btns">
                                    <a href="/#beta-signup" className="btn-primary-cta">Join the Waitlist</a>
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
