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

                    <div className="sponsor-logos">
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sponsorship;
