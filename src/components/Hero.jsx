import React from 'react';
import { ArrowRight, ShieldCheck, MapPin, Search, UserCheck } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero container">
            <div className="hero-content">
                <div className="hero-text fade-in-up">
                    <div className="hero-tag">
                        <ShieldCheck size={18} /> Official Mobility Partner of TEDxSMEC
                    </div>
                    <h1>
                        Your Daily Commute,<br />
                        <span>Reimagined.</span>
                    </h1>
                    <p>
                        Connect with verified professionals and students for a safe, efficient, and eco-friendly carpooling experience. Hitchly is now in open Beta.
                    </p>
                    <div className="hero-actions">
                        <a href="#join" className="btn btn-primary">
                            Download Beta App <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </a>
                        <a href="#features" className="btn btn-secondary">
                            How it Works
                        </a>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <h3>100%</h3>
                            <p>Verified Users</p>
                        </div>
                        <div className="stat-item">
                            <h3>Trusted</h3>
                            <p>Community</p>
                        </div>
                        <div className="stat-item">
                            <h3>Safe</h3>
                            <p>Secure Rides</p>
                        </div>
                    </div>
                </div>

                <div className="hero-image-wrapper fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="hero-visual">
                        {/* This would be a high quality screenshot in production. Using a Mockup representation */}
                        <div style={{
                            width: '100%',
                            height: '100%',
                            background: '#fafafa',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative'
                        }}>
                            <div style={{
                                width: '80%',
                                height: '60%',
                                background: 'white',
                                borderRadius: '16px',
                                boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
                                padding: '20px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '15px'
                            }}>
                                {/* UI Mockup elements */}
                                <div style={{ height: '40px', background: '#F0FDF4', borderRadius: '8px', width: '100%' }}></div>
                                <div style={{ height: '100px', background: '#F3F4F6', borderRadius: '8px', width: '100%' }}></div>
                                <div style={{ height: '60px', background: '#F9FAFB', borderRadius: '8px', width: '100%' }}></div>
                            </div>

                            {/* Decoration Element */}
                            <div style={{ position: 'absolute', bottom: '15%', opacity: 0.1 }}>
                                <MapPin size={200} color="#00C853" />
                            </div>
                        </div>

                        {/* Floating Cards */}
                        <div className="floating-card card-top">
                            <div style={{ background: '#E8F5E9', padding: '8px', borderRadius: '50%' }}>
                                <Search size={20} color="#00C853" />
                            </div>
                            <div>
                                <div style={{ fontSize: '12px', color: '#757575' }}>Find a Ride</div>
                                <div style={{ fontWeight: 'bold', fontSize: '14px' }}>Near You</div>
                            </div>
                        </div>

                        <div className="floating-card card-bottom">
                            <div style={{ background: '#E3F2FD', padding: '8px', borderRadius: '50%' }}>
                                <UserCheck size={20} color="#1565C0" />
                            </div>
                            <div>
                                <div style={{ fontSize: '12px', color: '#757575' }}>Verified</div>
                                <div style={{ fontWeight: 'bold', fontSize: '14px' }}>Trusted Profiles</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};
export default Hero;
