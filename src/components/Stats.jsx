import React from 'react';
import { Users, Settings, Clock, TestTube } from 'lucide-react';
import './Stats.css';

const stats = [
    {
        icon: <TestTube size={32} />,
        value: 'Live',
        label: 'App Release',
        sublabel: 'v1.0 on Play Store',
        color: '#00C853'
    },
    {
        icon: <Users size={32} />,
        value: 'Public',
        label: 'User Access',
        sublabel: 'open to everyone',
        color: '#2196F3'
    },
    {
        icon: <Settings size={32} />,
        value: 'Active',
        label: 'Core Features',
        sublabel: 'ride matching & pooling',
        color: '#FF9800'
    },
    {
        icon: <Clock size={32} />,
        value: 'Online',
        label: 'Live Updates',
        sublabel: 'continuous improvements',
        color: '#9C27B0'
    }
];

const Stats = () => {
    return (
        <section className="stats-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Current <span className="text-primary">Status</span></h2>
                    <p className="section-subtitle">Transparent updates from our official public release</p>
                </div>

                <div className="stats-grid">
                    {stats.map((stat, i) => (
                        <div className="stat-card" key={i} style={{ '--delay': `${i * 0.1}s` }}>
                            <div
                                className="stat-icon"
                                style={{ background: `${stat.color}15`, color: stat.color }}
                            >
                                {stat.icon}
                            </div>
                            <div className="stat-content">
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                                <div className="stat-sublabel">{stat.sublabel}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
