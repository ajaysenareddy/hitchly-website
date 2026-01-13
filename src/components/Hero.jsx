import React from 'react';
import { ArrowRight, ShieldCheck, MapPin, Search, UserCheck } from 'lucide-react';
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
                        <strong>We are launching our Beta exclusively at TEDxSMEC.</strong> Enter your email to get early access.
                    </p>

                    <div className="hero-actions" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
                        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', gap: '10px', width: '100%', maxWidth: '480px', flexWrap: 'wrap' }}>
                            <input
                                type="email"
                                placeholder="Enter your email for Beta Access"
                                style={{
                                    flex: 1,
                                    padding: '16px 24px',
                                    borderRadius: '50px',
                                    border: '1px solid #E0E0E0',
                                    outline: 'none',
                                    fontSize: '1rem',
                                    minWidth: '240px',
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.03)'
                                }}
                            />
                            <button className="btn btn-primary" type="submit">
                                Notify Me <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                            </button>
                        </form>
                        <span style={{ fontSize: '0.85rem', color: '#607D8B', marginLeft: '12px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <UserCheck size={14} /> Join 500+ students on the waitlist
                        </span>
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
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '10px'
                                }}>
                                    <div style={{ height: '12px', width: '40px', background: '#CFD8DC', borderRadius: '4px' }}></div>
                                    <div style={{ height: '24px', width: '24px', background: '#ECEFF1', borderRadius: '50%' }}></div>
                                </div>

                                <div style={{ height: '40px', background: '#F0FDF4', borderRadius: '8px', width: '100%', display: 'flex', alignItems: 'center', padding: '0 15px', color: '#1B5E20', fontSize: '10px', fontWeight: 'bold' }}>
                                    Ofifcial Partner: TEDxSMEC
                                </div>
                                <div style={{ height: '80px', background: '#F3F4F6', borderRadius: '8px', width: '100%' }}></div>
                                <div style={{ height: '40px', background: '#F9FAFB', borderRadius: '8px', width: '100%' }}></div>
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
                                <div style={{ fontSize: '12px', color: '#757575' }}>Launching at</div>
                                <div style={{ fontWeight: 'bold', fontSize: '14px' }}>TEDxSMEC</div>
                            </div>
                        </div>

                        <div className="floating-card card-bottom">
                            <div style={{ background: '#E3F2FD', padding: '8px', borderRadius: '50%' }}>
                                <UserCheck size={20} color="#1565C0" />
                            </div>
                            <div>
                                <div style={{ fontSize: '12px', color: '#757575' }}>First Access</div>
                                <div style={{ fontWeight: 'bold', fontSize: '14px' }}>Join Waitlist</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};
export default Hero;
