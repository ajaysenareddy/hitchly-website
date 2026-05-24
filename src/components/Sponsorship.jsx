import React from 'react';
import { Shield, Lock, Navigation, CheckCircle } from 'lucide-react';
import './Sponsorship.css';

const Sponsorship = () => {
    return (
        <section id="sponsorship" className="sponsorship-section">
            <div className="container sponsorship-container">
                <div className="sponsor-content">
                    <span className="sponsor-label">Closed Alpha Phase</span>
                    <h2>Hitchly Alpha</h2>
                    <p>
                        We are currently running a closed alpha testing phase to ensure the best possible experience for our users.
                        The alpha version has been rolled out with enhanced features for safe, efficient, and sustainable carpooling.
                        Request access to be among the first to experience the future of mobility.
                    </p>

                    {/* Trust Indicators */}
                    <div className="trust-indicators">
                        <div className="trust-badge">
                            <Shield size={20} />
                            <span>Verified Profiles</span>
                        </div>
                        <div className="trust-badge">
                            <Lock size={20} />
                            <span>Secure Payments</span>
                        </div>
                        <div className="trust-badge">
                            <Navigation size={20} />
                            <span>Real-time GPS</span>
                        </div>
                    </div>

                    {/* Alpha Progress */}
                    {/* Project Status */}
                    <div className="project-status">
                        <div className="status-item">
                            <span className="status-label">Current Phase</span>
                            <span className="status-value active-phase">Closed Alpha</span>
                        </div>
                        <div className="status-divider"></div>
                        <div className="status-item">
                            <span className="status-label">Next Milestone</span>
                            <span className="status-value">Official Launch Q2 2026</span>
                        </div>
                    </div>

                    {/* Recognition / Credibility Booster */}
                    <div className="sponsor-logos" style={{ flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                        <span className="status-label" style={{ marginBottom: '0.5rem' }}>Recognized By</span>
                        <div className="recognition-card" style={{ 
                            background: 'rgba(255, 255, 255, 0.05)', 
                            borderRadius: '24px', 
                            padding: '1.5rem',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1.5rem',
                            maxWidth: '600px',
                            margin: '0 auto',
                            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
                        }}>
                            <img src="/images/BITS_event.png" alt="Hitchly team at BITS Pilani Ground Reality 2026" style={{ maxWidth: '100%', height: 'auto', borderRadius: '16px', border: '2px solid rgba(0, 200, 83, 0.3)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }} />
                            <div>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: 600, margin: 0, color: 'white' }}>Finalist - Ground Reality 2026</h3>
                                <p style={{ margin: '0.5rem 0 0 0', fontSize: '1rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.5 }}>Recognized as a top emerging mobility startup at BITS Pilani's premier business plan competition.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sponsorship;
