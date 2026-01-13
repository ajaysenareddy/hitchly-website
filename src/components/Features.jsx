import React from 'react';
import { Map, Users, Shield, Clock } from 'lucide-react';
import './Features.css';

const features = [
    {
        icon: <Map size={32} />,
        title: 'Post Rides Easily',
        desc: 'Going somewhere? Share your route and empty seats in seconds to cut your travel costs.'
    },
    {
        icon: <Users size={32} />,
        title: 'Find Custom Rides',
        desc: 'Search for rides that match your specific schedule and route preferences perfectly.'
    },
    {
        icon: <Clock size={32} />,
        title: 'Live Tracking',
        desc: 'Share your location and view your ride in real-time for seamless coordination.'
    },
    {
        icon: <Shield size={32} />,
        title: 'Secure Requests',
        desc: 'Trust is key. Vet co-travelers through profiles before accepting any ride request.'
    }
];

const Features = () => {
    return (
        <section id="features" className="section features-section container">
            <div className="text-center" style={{ maxWidth: '700px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-secondary)', fontWeight: 700 }}>
                    Easy, Safe & <span className="text-primary">Efficient</span>
                </h2>
                <p style={{ color: 'var(--color-text-light)', fontSize: '1.15rem' }}>
                    Everything you need to commute confidently and efficiently.
                </p>
            </div>

            <div className="features-grid">
                {features.map((f, i) => (
                    <div className="feature-card" key={i}>
                        <div className="feature-icon">{f.icon}</div>
                        <h3>{f.title}</h3>
                        <p>{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
