import React from 'react';
import { TrendingDown, Users, Leaf, IndianRupee } from 'lucide-react';
import './Stats.css';

const stats = [
    {
        icon: <Users size={32} />,
        value: '500+',
        label: 'Active Users',
        sublabel: 'in beta testing',
        color: '#2196F3'
    },
    {
        icon: <IndianRupee size={32} />,
        value: '₹25K+',
        label: 'Money Saved',
        sublabel: 'by our community',
        color: '#00C853'
    },
    {
        icon: <Leaf size={32} />,
        value: '2.5T',
        label: 'CO₂ Reduced',
        sublabel: 'tons saved',
        color: '#4CAF50'
    },
    {
        icon: <TrendingDown size={32} />,
        value: '60%',
        label: 'Cost Reduction',
        sublabel: 'average savings',
        color: '#FF9800'
    }
];

const Stats = () => {
    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-header">
                    <h2>Making an <span className="text-primary">Impact</span></h2>
                    <p>Real numbers from our beta testing community</p>
                </div>

                <div className="stats-grid">
                    {stats.map((stat, i) => (
                        <div className="stat-card" key={i} style={{ '--delay': `${i * 0.1}s` }}>
                            <div className="stat-icon" style={{ background: `${stat.color}15`, color: stat.color }}>
                                {stat.icon}
                            </div>
                            <div className="stat-content">
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                                <div className="stat-sublabel">{stat.sublabel}</div>
                            </div>
                            <div className="stat-progress">
                                <div className="progress-bar" style={{ background: stat.color }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
