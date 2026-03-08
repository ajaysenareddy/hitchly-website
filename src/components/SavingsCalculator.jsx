import React, { useState, useEffect } from 'react';
import { IndianRupee, Leaf, Calculator, ArrowRight } from 'lucide-react';
import './SavingsCalculator.css';

const SavingsCalculator = () => {
    // State for interactive sliders
    const [distance, setDistance] = useState(20); // One-way distance in km
    const [daysPerWeek, setDaysPerWeek] = useState(5);

    // Assumptions for Indian/Hyderabad market
    const soloCostPerKm = 8; // Fuel, wear & tear, basic maintenance for a car
    const hitchlyCostPerKm = 3.5; // Hitchly suggested carpool contribution

    const [savings, setSavings] = useState({
        soloMonthly: 0,
        hitchlyMonthly: 0,
        monthlySaved: 0,
        yearlySaved: 0,
        co2Saved: 0
    });

    useEffect(() => {
        // Calculations (Assuming 4 weeks a month)
        const dailyRoundTrip = distance * 2;
        const monthlyDistance = dailyRoundTrip * daysPerWeek * 4;

        const soloCost = monthlyDistance * soloCostPerKm;
        const hitchlyCost = monthlyDistance * hitchlyCostPerKm;

        const monthlySaved = soloCost - hitchlyCost;
        const yearlySaved = monthlySaved * 12;

        // Approx ~150g CO2 per km for average car
        const co2SavedKg = Math.round((monthlyDistance * 150) / 1000);

        setSavings({
            soloMonthly: soloCost,
            hitchlyMonthly: hitchlyCost,
            monthlySaved: monthlySaved,
            yearlySaved: yearlySaved,
            co2Saved: co2SavedKg
        });
    }, [distance, daysPerWeek]);

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount);
    };

    return (
        <section className="savings-calculator-section" id="calculator">
            <div className="container">
                <div className="calculator-wrapper">
                    <div className="calculator-header text-center fade-in-up">
                        <h2>Calculate Your <span className="text-primary">Savings</span></h2>
                        <p>See exactly how much money and carbon emissions you save by switching from solo driving to Hitchly carpooling.</p>
                    </div>

                    <div className="calculator-grid">
                        {/* Interactive Inputs */}
                        <div className="calculator-inputs glass-card fade-in-up" style={{ animationDelay: '0.1s' }}>
                            <div className="input-header">
                                <Calculator size={24} className="text-primary" />
                                <h3>Your Commute Setup</h3>
                            </div>

                            <div className="slider-group">
                                <div className="slider-label">
                                    <label>One-way Distance</label>
                                    <span className="slider-value">{distance} km</span>
                                </div>
                                <input
                                    type="range"
                                    min="5"
                                    max="60"
                                    step="1"
                                    value={distance}
                                    onChange={(e) => setDistance(Number(e.target.value))}
                                    className="custom-slider"
                                    aria-label="One-way Commute Distance"
                                    style={{ '--value': `${((distance - 5) / (60 - 5)) * 100}%` }}
                                />
                                <div className="slider-markers">
                                    <span>5km</span>
                                    <span>60km</span>
                                </div>
                            </div>

                            <div className="slider-group">
                                <div className="slider-label">
                                    <label>Office Days per Week</label>
                                    <span className="slider-value">{daysPerWeek} days</span>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="6"
                                    step="1"
                                    value={daysPerWeek}
                                    onChange={(e) => setDaysPerWeek(Number(e.target.value))}
                                    className="custom-slider"
                                    aria-label="Office Days per Week"
                                    style={{ '--value': `${((daysPerWeek - 1) / (6 - 1)) * 100}%` }}
                                />
                                <div className="slider-markers">
                                    <span>1 day</span>
                                    <span>6 days</span>
                                </div>
                            </div>
                        </div>

                        {/* Results / Outputs */}
                        <div className="calculator-results fade-in-up" style={{ animationDelay: '0.2s' }}>
                            <div className="comparison-row">
                                <div className="cost-box solo">
                                    <span>Solo Driving</span>
                                    <h4>{formatCurrency(savings.soloMonthly)}</h4>
                                    <p className="period">/ month</p>
                                </div>
                                <div className="vs-badge">VS</div>
                                <div className="cost-box hitchly">
                                    <span>Hitchly Carpool</span>
                                    <h4>{formatCurrency(savings.hitchlyMonthly)}</h4>
                                    <p className="period">/ month</p>
                                </div>
                            </div>

                            <div className="savings-highlight glass-card active-pulse">
                                <div className="savings-main">
                                    <div className="savings-amount">
                                        <span className="savings-label">Your Monthly Savings</span>
                                        <h3>{formatCurrency(savings.monthlySaved)}</h3>
                                        <p className="yearly-projection">That's <strong>{formatCurrency(savings.yearlySaved)}</strong> a year!</p>
                                    </div>
                                    <div className="savings-icon">
                                        <IndianRupee size={40} className="text-primary" />
                                    </div>
                                </div>

                                <div className="co2-impact">
                                    <Leaf size={20} color="#00FF66" />
                                    <span>You also prevent <strong>{savings.co2Saved}kg</strong> of CO₂ emissions monthly.</span>
                                </div>
                            </div>

                            <div className="calc-cta-wrapper">
                                <a href="#beta-signup" className="calc-cta-btn">
                                    Start Saving Now <ArrowRight size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SavingsCalculator;
