import React from 'react';
import { MapPin, Search, CheckCircle, Navigation } from 'lucide-react';
import './HowItWorks.css';

const steps = [
    {
        number: '01',
        icon: <MapPin size={28} />,
        title: 'Post or Search',
        description: 'Drivers post rides with route and timing. Riders search for matching rides.',
        detail: 'Set your pickup, destination, and schedule'
    },
    {
        number: '02',
        icon: <Search size={28} />,
        title: 'Find Matches',
        description: 'Smart algorithm matches riders with drivers going the same way.',
        detail: 'Filter by time, price, and preferences'
    },
    {
        number: '03',
        icon: <CheckCircle size={28} />,
        title: 'Book Securely',
        description: 'Review profiles, ratings, and send booking requests for approval.',
        detail: 'Verified profiles ensure safety'
    },
    {
        number: '04',
        icon: <Navigation size={28} />,
        title: 'Track Live',
        description: 'Real-time GPS tracking keeps everyone informed throughout the journey.',
        detail: 'Share location and coordinate pickup'
    }
];

const HowItWorks = () => {
    return (
        <section className="how-it-works-section">
            <div className="container">
                <div className="section-header">
                    <h2>How <span className="text-primary">Hitchly</span> Works</h2>
                    <p>Four simple steps to start carpooling</p>
                </div>

                <div className="steps-container">
                    <div className="timeline-line"></div>
                    {steps.map((step, i) => (
                        <div className="step-card" key={i} style={{ '--step-delay': `${i * 0.15}s` }}>
                            <div className="step-number">{step.number}</div>
                            <div className="step-icon">
                                {step.icon}
                            </div>
                            <div className="step-content">
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                                <div className="step-detail">
                                    <div className="detail-dot"></div>
                                    <span>{step.detail}</span>
                                </div>
                            </div>
                            {i < steps.length - 1 && <div className="step-connector"></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
