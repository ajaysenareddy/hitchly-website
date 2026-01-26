import React, { useState } from 'react';
import { Map, Users, Shield, Clock, TrendingDown, CheckCircle } from 'lucide-react';
import './Features.css';

const features = [
    {
        icon: <Map size={32} />,
        title: 'Post Rides Easily',
        desc: 'Going somewhere? Share your route and empty seats in seconds to cut your travel costs.',
        badge: 'Quick Setup',
        stat: '2 min',
        statLabel: 'to post'
    },
    {
        icon: <Users size={32} />,
        title: 'Find Custom Rides',
        desc: 'Search for rides that match your specific schedule and route preferences perfectly.',
        badge: 'Smart Match',
        stat: '10+',
        statLabel: 'filters'
    },
    {
        icon: <Clock size={32} />,
        title: 'Live Tracking',
        desc: 'Share your location and view your ride in real-time for seamless coordination.',
        badge: 'Real-time',
        stat: 'GPS',
        statLabel: 'enabled'
    },
    {
        icon: <Shield size={32} />,
        title: 'Secure Requests',
        desc: 'Clear ride details and transparent requests help you make confident travel decisions.',
        badge: 'Verified',
        stat: '100%',
        statLabel: 'profiles'
    }
];

const Features = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <section id="features" className="section features-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        Easy, Safe & <span className="text-primary">Efficient</span>
                    </h2>
                    <p className="section-subtitle">
                        Everything you need to commute confidently and efficiently.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((f, i) => (
                        <div
                            className={`feature-card ${hoveredCard === i ? 'active' : ''}`}
                            key={i}
                            onMouseEnter={() => setHoveredCard(i)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="feature-header">
                                <div className="feature-icon">{f.icon}</div>
                                <span className="feature-badge">{f.badge}</span>
                            </div>
                            <h3>{f.title}</h3>
                            <p>{f.desc}</p>
                            <div className="feature-stat">
                                <div className="stat-value">{f.stat}</div>
                                <div className="stat-label">{f.statLabel}</div>
                                <CheckCircle className="stat-check" size={16} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
