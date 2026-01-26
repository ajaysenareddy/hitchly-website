import React, { useState, useEffect } from 'react';
import { ShieldCheck, MapPin, Search, UserCheck, Car } from 'lucide-react';
import './Hero.css';
import './LoadingModal.css';

const Hero = () => {
    const [showModal, setShowModal] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [email, setEmail] = useState('');

    const handleRequestRide = () => {
        setShowModal(true);
        setLoadingProgress(0);
        setEmail('');
    };

    useEffect(() => {
        if (showModal && loadingProgress < 99) {
            const timer = setTimeout(() => {
                setLoadingProgress(prev => Math.min(prev + 1, 99));
            }, 15); // Faster loading - 1.5 seconds total
            return () => clearTimeout(timer);
        }
    }, [showModal, loadingProgress]);

    const handleSignup = (e) => {
        e.preventDefault();
        if (email) {
            const subject = encodeURIComponent('Beta Access Request - Hitchly');
            const body = encodeURIComponent(`Hi Hitchly Team,\n\nI would like to request early access to the Hitchly beta.\n\nEmail: ${email}\n\nThank you!`);
            window.location.href = `mailto:hitchlyride@gmail.com?subject=${subject}&body=${body}`;
            setShowModal(false);
            setLoadingProgress(0);
            setEmail('');
        }
    };

    const closeModal = () => {
        setShowModal(false);
        setLoadingProgress(0);
        setEmail('');
    };

    return (
        <section className="hero container">
            <div className="hero-content">
                <div className="hero-text fade-in-up">
                    <div className="hero-tag">
                        <ShieldCheck size={18} /> Beta Version Coming Soon
                    </div>
                    <h1>
                        Easy, Safe & Efficient<br />
                        <span>Carpooling.</span>
                    </h1>
                    <p>
                        Experience the future of mobility. Hitchly connects you with verified peers for safe and affordable rides.
                        <br /><br />
                        <strong>We are currently in beta testing and will be rolling out soon.</strong>
                    </p>

                    <div className="hero-actions" style={{ marginBottom: '2rem' }}>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '12px',
                            background: 'rgba(0, 200, 83, 0.08)',
                            padding: '12px 24px',
                            borderRadius: '16px',
                            border: '1px solid rgba(0, 200, 83, 0.2)'
                        }}>
                            <span style={{ fontWeight: 700, color: '#00C853', fontSize: '1.1rem', letterSpacing: '-0.5px' }}>Coming Soon</span>
                            <div style={{ height: '20px', width: '2px', background: 'rgba(0, 200, 83, 0.2)' }}></div>
                            <span style={{ color: '#0A0F1C', fontWeight: 500 }}>Beta Rollout</span>
                        </div>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <h3>Beta</h3>
                            <p>Testing Phase</p>
                        </div>
                        <div className="stat-item">
                            <h3>100%</h3>
                            <p>Verified Profiles</p>
                        </div>
                        <div className="stat-item">
                            <h3>Beta</h3>
                            <p>Early Access</p>
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
                                        <div className="driver-rating">★ 4.9 • Verified User</div>
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
                                    <button onClick={handleRequestRide}>Request Ride</button>
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
                                    <p className="joke-text">Just kidding! We're in beta 😄</p>
                                    <p className="cta-text">Join the waitlist for early access!</p>
                                    <form onSubmit={handleSignup} className="signup-form">
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="email-input"
                                        />
                                        <button type="submit" className="signup-btn">
                                            Request Beta Access
                                        </button>
                                    </form>
                                    <button className="close-btn-secondary" onClick={closeModal}>
                                        Maybe later
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
