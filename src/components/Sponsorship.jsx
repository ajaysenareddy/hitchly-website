import React from 'react';
import { Car, Shield, Lock, HeadphonesIcon, CheckCircle } from 'lucide-react';
import './Sponsorship.css';

const Sponsorship = () => {
    return (
        <section id="sponsorship" className="sponsorship-section">
            <div className="container sponsorship-container">
                <div className="sponsor-content">
                    <span className="sponsor-label">Beta Testing Phase</span>
                    <h2>Hitchly Beta</h2>
                    <p>
                        We are currently in beta testing to ensure the best possible experience for our users.
                        The beta version will be rolled out soon with enhanced features for safe, efficient, and sustainable carpooling.
                        Join our waitlist to be among the first to experience the future of mobility.
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
                            <HeadphonesIcon size={20} />
                            <span>24/7 Support</span>
                        </div>
                        <div className="trust-badge">
                            <CheckCircle size={20} />
                            <span>Quality Assured</span>
                        </div>
                    </div>

                    {/* Beta Progress */}
                    <div className="beta-progress">
                        <div className="progress-header">
                            <span className="progress-label">Beta Testing Progress</span>
                            <span className="progress-percentage">75%</span>
                        </div>
                        <div className="progress-track">
                            <div className="progress-fill"></div>
                        </div>
                        <p className="progress-note">Expected full launch: Q2 2026</p>
                    </div>

                    <div className="sponsor-logos">
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sponsorship;
