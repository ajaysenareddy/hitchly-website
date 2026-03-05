import React from 'react';
import './SeoContent.css';

const SeoContent = () => {
    return (
        <section className="seo-content-section" aria-label="About Hitchly carpooling">
            <div className="container">
                <div className="seo-header">
                    <h2 className="seo-main-heading">
                        Smart Ride Pooling for Daily Office Commutes in <span className="text-primary">Hyderabad</span>
                    </h2>
                    <p className="seo-intro">
                        Hitchly is designed for working professionals who commute daily in Hyderabad and want a smarter,
                        more affordable way to travel. Whether you're heading to Hitech City, Gachibowli, Madhapur,
                        or anywhere across the city, Hitchly helps you find verified co-passengers going the same way.
                    </p>
                </div>

                <div className="seo-grid">
                    {/* Block 1 */}
                    <div className="seo-block">
                        <div className="seo-block-icon">🤝</div>
                        <h3>Carpool With People Going the Same Way</h3>
                        <p>
                            Finding a reliable carpool partner in Hyderabad used to be a challenge — until now.
                            Hitchly connects daily commuters traveling similar routes so you can share your office ride
                            with verified professionals from your area. Whether you're a driver with empty seats or a
                            rider looking to split costs, our platform makes it simple.
                        </p>
                        <p>
                            With smart route matching, Hitchly instantly finds people going in your direction at your
                            preferred time. No more detours, no more empty cars — just efficient, cost-sharing commutes
                            between real people with verified profiles. Carpool Hyderabad the smart way.
                        </p>
                    </div>

                    {/* Block 2 */}
                    <div className="seo-block">
                        <div className="seo-block-icon">💸</div>
                        <h3>Reduce Fuel Costs and Traffic With Hitchly</h3>
                        <p>
                            Daily office commutes in Hyderabad are expensive — fuel, tolls, parking, and vehicle
                            maintenance add up quickly. Ride sharing for office commute lets you split these costs
                            among co-passengers, slashing your monthly travel expenses significantly. Regular
                            carpoolers report saving ₹2,000–₹5,000 per month on commute costs alone.
                        </p>
                        <p>
                            Beyond savings, fewer cars on the road means less congestion on busy routes like the ORR,
                            NH-65, and city flyovers. Ride sharing Hyderabad isn't just good for your wallet —
                            it's better for the environment, cutting down carbon emissions with every shared trip.
                        </p>
                    </div>

                    {/* Block 3 */}
                    <div className="seo-block">
                        <div className="seo-block-icon">🏙️</div>
                        <h3>The Smarter Way to Commute in Hyderabad</h3>
                        <p>
                            Hyderabad is one of India's fastest-growing tech corridors, with thousands of IT
                            professionals commuting daily between residential zones and office hubs like Hitech City,
                            Madhapur, Kondapur, and Nanakramguda. Hitchly is purpose-built for this daily commute
                            ride share India challenge — connecting professionals who share routes, schedules, and
                            the desire for a stress-free commute.
                        </p>
                        <p>
                            With features like real-time GPS tracking, verified profiles, and transparent ride
                            requests, Hitchly makes carpool for work safe and convenient. Join hundreds of
                            professionals who have already switched to shared rides and are enjoying more comfortable,
                            affordable, and social morning commutes.
                        </p>
                    </div>
                </div>

                <div className="seo-cta-strip">
                    <p>
                        Ready to reduce commute cost and travel smarter? <strong>Hitchly's beta is rolling out soon</strong> —
                        join the waitlist and be among the first to experience the future of shared rides for professionals in Hyderabad.
                    </p>
                    <a href="#beta-signup" className="seo-cta-btn">Join the Waitlist →</a>
                </div>
            </div>
        </section>
    );
};

export default SeoContent;
