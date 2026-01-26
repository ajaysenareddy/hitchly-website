import React from 'react';
import { MapPin, Search, CheckCircle, Navigation } from 'lucide-react';
import './HowItWorks.css';

const steps = [
    {
        number: '01',
        icon: <MapPin size={28} />,
        title: 'Post or Search',
        description: 'Drivers publish their upcoming trips, specifying the route, date, and exact departure time. Riders simply enter their destination to browse available rides that match their schedule.',
        detail: 'Set your pickup, destination, and schedule'
    },
    {
        number: '02',
        icon: <Search size={28} />,
        title: 'Find Perfect Matches',
        description: 'Our advanced matching algorithm instantly connects riders with reliable drivers traveling in the same direction, ensuring optimal routes, fair pricing, and minimal detours for everyone.',
        detail: 'Filter by time, price, and preferences'
    },
    {
        number: '03',
        icon: <CheckCircle size={28} />,
        title: 'Book Securely',
        description: 'Browse verified driver profiles, read community reviews, and check ratings. Once you find the perfect ride, send a booking request and get approved in minutes.',
        detail: 'Verified profiles ensure safety'
    },
    {
        number: '04',
        icon: <Navigation size={28} />,
        title: 'Track & Travel',
        description: 'Enjoy peace of mind with live GPS tracking. Share your ride status with loved ones, coordinate effortless pickups, and track your journey in real-time until the destination.',
        detail: 'Share location and coordinate pickup'
    }
];

const HowItWorks = () => {
    return (
        <section className="how-it-works-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">How <span className="text-primary">Hitchly</span> Works</h2>
                    <p className="section-subtitle">Four simple steps to start carpooling</p>
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
