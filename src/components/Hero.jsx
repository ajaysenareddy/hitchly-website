import React, { useState, useEffect } from 'react';
import { ShieldCheck, MapPin, Search, UserCheck, Car, Star, Laugh } from 'lucide-react';
import './Hero.css';
import './LoadingModal.css';

const Hero = () => {
    const [showModal, setShowModal] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);

    const handleRequestRide = () => {
        setShowModal(true);
        setLoadingProgress(0);
    };

    useEffect(() => {
        if (showModal && loadingProgress < 99) {
            const timer = setTimeout(() => {
                setLoadingProgress(prev => Math.min(prev + 1, 99));
            }, 15); // Faster loading - 1.5 seconds total
            return () => clearTimeout(timer);
        }
    }, [showModal, loadingProgress]);

    const closeModal = () => {
        setShowModal(false);
        setLoadingProgress(0);
    };

    return (
        <section className="hero container">
            <div className="hero-content">
                <div className="hero-text fade-in-up">
                    <div className="hero-tag">
                        <ShieldCheck size={18} /> Now Live on the Google Play Store! 🚀
                    </div>
                    <h1>
                        Easy, Safe & Efficient<br />
                        <span>Carpooling.</span>
                    </h1>
                    <p>
                        Experience the future of daily office commute in Hyderabad. Hitchly connects you with verified professionals and peers for safe, comfortable, and highly affordable rides.
                        <br /><br />
                        <strong>Download the official app today and start pooling!</strong>
                    </p>

                    <div className="hero-actions" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '2rem' }}>
                        <a 
                            href="https://play.google.com/store/apps/details?id=com.hitchly" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn-playstore"
                            style={{
                                background: '#0A0F1C',
                                color: 'white',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '12px',
                                padding: '10px 24px',
                                borderRadius: '16px',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 8px 24px rgba(10, 15, 28, 0.15)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                height: '50px',
                                boxSizing: 'border-box'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 12px 30px rgba(10, 15, 28, 0.25)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 8px 24px rgba(10, 15, 28, 0.15)';
                            }}
                        >
                            <svg viewBox="0 0 512 512" width="24" height="24" fill="currentColor">
                                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58 33.3-60.7-60.7 60.1-60.1 58.6 33.6c24.8 14.2 24.8 39.5 0 53.9zm-147 52.1L104.6 499l220.7-126.7 60.1-60.1-60.1-34.5z"/>
                            </svg>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: '1.2' }}>
                                <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', opacity: '0.7', letterSpacing: '0.5px' }}>Get it on</span>
                                <span style={{ fontSize: '1.05rem', fontWeight: '700', fontFamily: 'system-ui, -apple-system, sans-serif' }}>Google Play</span>
                            </div>
                        </a>
                        <a 
                            href="#features" 
                            className="btn-secondary"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'rgba(255, 255, 255, 0.8)',
                                color: '#0A0F1C',
                                border: '1px solid rgba(0, 0, 0, 0.1)',
                                padding: '12px 24px',
                                borderRadius: '16px',
                                fontWeight: 600,
                                fontSize: '1rem',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                                height: '50px',
                                boxSizing: 'border-box'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-1px)';
                                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.08)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
                            }}
                        >
                            Explore Features
                        </a>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <h3>Live</h3>
                            <p>On Play Store</p>
                        </div>
                        <div className="stat-item">
                            <h3>100%</h3>
                            <p>Verified Users</p>
                        </div>
                        <div className="stat-item">
                            <h3>Free</h3>
                            <p>To Download</p>
                        </div>
                    </div>
                </div>

                <div className="hero-image-wrapper fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="hero-visual">
                        {/* High Fidelity App UI Mockup */}
                        <div className="app-interface">
                            {/* App Header */}
                            <div className="app-header">
                                <div className="app-time">9:41</div>
                                <div className="app-status">
                                    <div className="status-dot"></div>
                                    <div className="status-signal"></div>
                                    <div className="status-battery"></div>
                                </div>
                            </div>

                            {/* Map / Route Visualization Area */}
                            <div className="app-map-area">
                                <div className="route-line">
                                    <div className="route-point start"></div>
                                    <div className="route-path"></div>
                                    <div className="route-point end"></div>
                                </div>
                                {/* Driver Marker */}
                                <div className="driver-marker">
                                    <div className="marker-sonar"></div>
                                    <Car size={16} color="white" fill="white" />
                                </div>
                            </div>

                            {/* Active Ride Card */}
                            <div className="app-card ride-card">
                                <div className="driver-info">
                                    <div className="driver-avatar">
                                        <UserCheck size={20} color="#555" />
                                    </div>
                                    <div className="driver-details">
                                        <div className="driver-name">Sarah M.</div>
                                        <div className="driver-rating"><Star size={14} fill="#FBBF24" color="#FBBF24" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />4.9 • Verified User</div>
                                    </div>
                                    <div className="ride-price">₹ 100</div>
                                </div>
                                <div className="ride-route">
                                    <div className="route-time">
                                        <span>08:00 AM</span>
                                        <span className="location">Alwal</span>
                                    </div>
                                    <div className="route-divider"></div>
                                    <div className="route-time">
                                        <span>09:00 AM</span>
                                        <span className="location">Hightec City</span>
                                    </div>
                                </div>
                                <div className="ride-action">
                                    <button onClick={handleRequestRide} aria-label="Simulate Request Ride">Request Ride</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Loading Modal */}
            {showModal && (
                <div className="loading-modal-overlay" onClick={closeModal}>
                    <div className="loading-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="loading-content">
                            <div className="loading-icon">
                                <Car size={48} strokeWidth={2} />
                            </div>
                            <h3>Loading your ride...</h3>
                            <div className="progress-container">
                                <div
                                    className="progress-bar-fill"
                                    style={{ width: `${loadingProgress}%` }}
                                ></div>
                                <span className="progress-text">{loadingProgress}%</span>
                            </div>
                            {loadingProgress === 99 && (
                                <div className="beta-message">
                                    <p className="cta-text" style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0A0F1C', margin: '1rem 0 0.5rem 0' }}>Hitchly is Live! 🚀</p>
                                    <p style={{ color: '#4A5568', fontSize: '0.95rem', margin: '0 0 1.5rem 0', lineHeight: '1.6' }}>
                                        Our official Android app is now live on the Google Play Store! Download it today to book real rides, match with co-commuters, and share daily office rides.
                                    </p>
                                    <a 
                                        href="https://play.google.com/store/apps/details?id=com.hitchly" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="signup-btn"
                                        style={{
                                            textDecoration: 'none',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '8px',
                                            width: '100%',
                                            boxSizing: 'border-box',
                                            backgroundColor: 'var(--color-primary)',
                                            color: 'white',
                                            fontWeight: '600',
                                            padding: '12px 24px',
                                            borderRadius: '12px',
                                            boxShadow: '0 4px 12px rgba(0, 200, 83, 0.2)',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor = 'var(--color-primary-dark)';
                                            e.currentTarget.style.transform = 'translateY(-1px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                                            e.currentTarget.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        Download on Google Play
                                    </a>
                                    <button className="close-btn-secondary" onClick={closeModal} style={{ marginTop: '0.75rem' }}>
                                        Close
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
export default Hero;
