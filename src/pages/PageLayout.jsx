import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './PageLayout.css';

const PageLayout = ({ title, description, children }) => {
    return (
        <>
            <Navbar />
            <main className="page-layout">
                {title && (
                    <div className="page-hero">
                        <div className="container">
                            <div className="page-hero-content">
                                <h1>{title}</h1>
                                {description && <p className="page-description">{description}</p>}
                            </div>
                        </div>
                    </div>
                )}
                <div className="page-body">
                    <div className="container page-container">
                        {children}
                        <div className="page-cta-block">
                            <h2>Ready to Start Carpooling?</h2>
                            <p>Join the Hitchly beta waitlist and be among the first to experience smart ride pooling in Hyderabad.</p>
                            <div className="page-cta-btns">
                                <a href="/#beta-signup" className="btn-primary-cta">Join the Waitlist</a>
                                <Link to="/" className="btn-secondary-cta">← Back to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default PageLayout;
