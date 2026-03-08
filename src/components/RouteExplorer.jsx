import React, { useState, useEffect } from 'react';
import { MapPin, UserCheck, Clock, ArrowRight, Car, AlertCircle, Loader, Coffee, Laugh, Rocket, Activity, Zap, Star, Shield } from 'lucide-react';
import './RouteExplorer.css';

const funnyMessages = [
    { text: "Hold your horses! This is just a simulation.", icon: <Laugh size={18} /> },
    { text: "Beep beep! Beta phase parking only.", icon: <Car size={18} /> },
    { text: "Whoa there! Real rides coming soon.", icon: <Rocket size={18} /> },
    { text: "Your chauffeur is currently rendering...", icon: <Loader size={18} /> },
    { text: "Fasten your seatbelt! Actually, wait for the beta.", icon: <AlertCircle size={18} /> },
    { text: "Plot twist: We're still matching you.", icon: <Activity size={18} /> },
    { text: "Drivers are busy drinking chai.", icon: <Coffee size={18} /> },
    { text: "Reticulating splines for your ride...", icon: <Zap size={18} /> }
];

// Mock data mapping corridors to realistic driver profiles
const routeDatabase = [
    {
        id: "alwal-hitec",
        from: "Alwal / Secunderabad",
        to: "Hitec City / Madhapur",
        drivers: [
            { id: 1, name: "Rahul M.", rating: "4.8", trips: 142, departTime: "08:30 AM", cost: 120 },
            { id: 2, name: "Sneha V.", rating: "4.9", trips: 89, departTime: "09:00 AM", cost: 110 },
            { id: 3, name: "Kiran P.", rating: "4.7", trips: 210, departTime: "09:45 AM", cost: 120 }
        ]
    },
    {
        id: "uppal-gachibowli",
        from: "Uppal / LB Nagar",
        to: "Gachibowli",
        drivers: [
            { id: 4, name: "Vikram S.", rating: "4.9", trips: 315, departTime: "08:15 AM", cost: 140 },
            { id: 5, name: "Anjali K.", rating: "5.0", trips: 62, departTime: "09:30 AM", cost: 150 }
        ]
    },
    {
        id: "kompally-kondapur",
        from: "Kompally",
        to: "Kondapur",
        drivers: [
            { id: 6, name: "Priya D.", rating: "4.8", trips: 118, departTime: "08:45 AM", cost: 130 },
            { id: 7, name: "Amit T.", rating: "4.6", trips: 45, departTime: "10:00 AM", cost: 120 },
            { id: 8, name: "Suresh R.", rating: "4.9", trips: 275, departTime: "09:15 AM", cost: 130 }
        ]
    },
    {
        id: "miyapur-financial",
        from: "Miyapur / Bachupally",
        to: "Financial District",
        drivers: [
            { id: 9, name: "Neha C.", rating: "4.9", trips: 190, departTime: "08:30 AM", cost: 90 },
            { id: 10, name: "Ravi B.", rating: "4.8", trips: 105, departTime: "09:00 AM", cost: 80 }
        ]
    }
];

const RouteExplorer = () => {
    const [selectedRoute, setSelectedRoute] = useState(routeDatabase[0]);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState(null);

    const handleBookRide = () => {
        const randomMsg = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
        setToastMessage(randomMsg);
        setTimeout(() => setToastMessage(null), 3000);
    };

    const handleRouteSelect = (routeId) => {
        const newRoute = routeDatabase.find(r => r.id === routeId);

        if (newRoute.id !== selectedRoute.id) {
            setIsAnimating(true);
            setTimeout(() => {
                setSelectedRoute(newRoute);
                setIsAnimating(false);
            }, 300); // Wait for fade out
        }
    };

    return (
        <section className="route-explorer-section" id="route-explorer">
            <div className="container">
                <div className="explorer-header text-center">
                    <h2>See Who's Going <span className="text-primary">Your Way</span></h2>
                    <p>Select your daily commute route to view active, verified Hitchly members matching your journey.</p>
                </div>

                <div className="explorer-layout">
                    {/* Left Side: Selector & Map Visual */}
                    <div className="explorer-controls">
                        <h3>Find Your Route</h3>

                        <div className="route-selector">
                            <label>Select Corridor</label>
                            <div className="custom-dropdown-container">
                                <div
                                    className={`custom-select-trigger ${isDropdownOpen ? 'open' : ''}`}
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                >
                                    <MapPin size={18} className="select-icon" />
                                    <span className="selected-text">
                                        {selectedRoute.from} → {selectedRoute.to}
                                    </span>
                                </div>

                                {isDropdownOpen && (
                                    <div className="custom-options-list">
                                        {routeDatabase.map(route => (
                                            <div
                                                key={route.id}
                                                className={`custom-option ${selectedRoute.id === route.id ? 'active' : ''}`}
                                                onClick={() => {
                                                    handleRouteSelect(route.id);
                                                    setIsDropdownOpen(false);
                                                }}
                                            >
                                                {route.from} → {route.to}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Abstract Map Visual */}
                        <div className="abstract-route-visual premium-glow-box">
                            <div className="route-endpoints-grid">
                                <div className="dot pulse-dot start-dot"></div>
                                <span className="route-label start-label">{selectedRoute.from}</span>

                                <div className="svg-path-container">
                                    <svg viewBox="0 0 20 100" preserveAspectRatio="none" className="route-svg">
                                        <line
                                            x1="10" y1="0" x2="10" y2="100"
                                            stroke="rgba(0, 200, 83, 0.4)"
                                            strokeWidth="3"
                                            strokeDasharray="6 6"
                                            className="animated-dashed-path"
                                        />
                                    </svg>
                                    <div className="car-marker-premium">
                                        <Car size={16} color="white" />
                                    </div>
                                </div>

                                <div className="dot end-dot"></div>
                                <span className="route-label end-label">{selectedRoute.to}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Mock Profiles Grid */}
                    <div className="explorer-results">
                        <div className="results-header">
                            <h4>Available Matches</h4>
                            <span className="badge">{selectedRoute.drivers.length} Verified Drivers</span>
                        </div>

                        <div className={`profiles-grid ${isAnimating ? 'fade-out' : 'fade-in'}`}>
                            {selectedRoute.drivers.map(driver => (
                                <div key={driver.id} className="mock-profile-card">
                                    <div className="profile-top">
                                        <div className="avatar-circle">
                                            <UserCheck size={20} color="#555" />
                                        </div>
                                        <div className="profile-info">
                                            <h5>{driver.name}</h5>
                                            <div className="rating-row">
                                                <Star size={14} fill="#FBBF24" color="#FBBF24" /> {driver.rating}
                                                <span className="bullet">•</span> {driver.trips} trips
                                            </div>
                                        </div>
                                        <div className="price-tag">
                                            ₹{driver.cost}
                                        </div>
                                    </div>

                                    <div className="profile-bottom">
                                        <div className="time-info">
                                            <Clock size={16} color="#6B7280" />
                                            <span>Departs <strong>{driver.departTime}</strong></span>
                                        </div>
                                        <button className="book-btn-mock" onClick={handleBookRide}>
                                            Ride <ArrowRight size={14} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="explorer-footer text-center">
                            <p>These are simulated profiles for {selectedRoute.from} to {selectedRoute.to}.</p>
                            <a href="#beta-signup" className="text-primary font-weight-600 hover-underline">
                                Join the beta to see real matches →
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {toastMessage && (
                <div className="funny-toast" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {toastMessage.icon}
                    <span>{toastMessage.text}</span>
                </div>
            )}
        </section>
    );
};

export default RouteExplorer;
