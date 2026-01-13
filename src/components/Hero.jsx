import React from 'react';
import { ShieldCheck, MapPin, Search, UserCheck, Car } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero container">
            <div className="hero-content">
                <div className="hero-text fade-in-up">
                    <div className="hero-tag">
                        <ShieldCheck size={18} /> Launching Live at TEDxSMEC
                    </div>
                    <h1>
                        Easy, Safe & Efficient<br />
                        <span>Carpooling.</span>
                    </h1>
                    <p>
                        Experience the future of mobility. Hitchly connects you with verified peers for safe and affordable rides.
                        <br /><br />
                        <strong>We are launching our Beta exclusively at TEDxSMEC.</strong>
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
                            <span style={{ color: '#0A0F1C', fontWeight: 500 }}>Live at TEDxSMEC</span>
                        </div>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <h3>TEDxSMEC</h3>
                            <p>Official Launch</p>
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
                                    <div className="ride-price">₹40</div>
                                </div>
                                <div className="ride-route">
                                    <div className="route-time">
                                        <span>09:00 AM</span>
                                        <span className="location">Hostel Block A</span>
                                    </div>
                                    <div className="route-divider"></div>
                                    <div className="route-time">
                                        <span>09:20 AM</span>
                                        <span className="location">TEDx Venue</span>
                                    </div>
                                </div>
                                <div className="ride-action">
                                    <button>Request Ride</button>
                                </div>
                            </div>
                        </div>

                        {/* Anchored Trust Badge - Replaces Floating Cards */}
                        <div className="trust-badge">
                            <div className="trust-avatars">
                                <div className="avatar"></div>
                                <div className="avatar"></div>
                                <div className="avatar"></div>
                            </div>
                            <div className="trust-text">
                                <span>Now in</span>
                                <strong>Private Beta</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Hero;
