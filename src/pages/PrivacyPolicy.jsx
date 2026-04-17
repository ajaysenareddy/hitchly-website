import React from 'react';
import PageLayout from './PageLayout';
import SEO from '../components/SEO';
import './PageLayout.css';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    const pageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Privacy Policy & Terms of Service for Hitchly",
        "publisher": { "@type": "Organization", "name": "Hitchly" }
    };

    return (
        <>
            <SEO
                title="Privacy Policy & Terms of Service | Hitchly"
                description="Information regarding Hitchly's Terms of Service and Privacy Policy, including DPDP compliance and liability frameworks."
                canonicalUrl="/privacy-policy"
                schema={pageSchema}
            />
            <PageLayout
                title="Privacy Policy & Terms of Service"
                description="Hitchly operates under strict adherence to Indian laws, the DPDP framework, and Motor Vehicles Act 1988 guidelines."
                hideCta={true}
            >
                <div className="policy-wrapper">

                    {/* Meta Header */}
                    <div className="policy-header-card">
                        <div className="policy-meta-grid">
                            <div className="policy-meta-item">
                                <span className="policy-meta-label">Effective Date</span>
                                <span className="policy-meta-value">April 2026</span>
                            </div>
                            <div className="policy-meta-item">
                                <span className="policy-meta-label">Contact Email</span>
                                <span className="policy-meta-value">hitchlyride@gmail.com</span>
                            </div>
                            <div className="policy-meta-item">
                                <span className="policy-meta-label">Governing Law</span>
                                <span className="policy-meta-value">Hyderabad, Telangana</span>
                            </div>
                        </div>
                    </div>

                    {/* Terms of Service Section */}
                    <div className="policy-part">
                        <h2 className="policy-part-title">Part 1: Terms of Service and User Agreement</h2>
                        <p className="policy-intro">
                            Welcome to Hitchly! By downloading, installing, or using the Hitchly mobile application ("App"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the application.
                        </p>

                        <div className="policy-section">
                            <h3>1. Nature of the Platform</h3>
                            <p>Hitchly operates strictly as an <strong>Intermediary</strong> software platform as defined under Section 79 of the Information Technology Act, 2000 (India).</p>
                            <ul>
                                <li><strong>Hitchly is NOT a transportation provider, taxi aggregator, or cab service.</strong></li>
                                <li>The App merely provides a technological framework that allows private individuals ("Users") travelling in the same direction to connect and share the journey.</li>
                            </ul>
                        </div>

                        <div className="policy-section">
                            <h3>2. Strict Adherence to the Motor Vehicles Act, 1988</h3>
                            <p>It is illegal in India to use a private vehicle (White Number Plate) for commercial public transport or generating business profit.</p>
                            <ul>
                                <li><strong>Cost-Sharing Only:</strong> The monetary exchange facilitated through Hitchly is strictly limited to the sharing of travel expenses (fuel, tolls, and standard vehicle maintenance).</li>
                                <li><strong>No Profit Generation:</strong> Ride-Givers are expressly forbidden from utilizing Hitchly to earn an income, generate profit, or operate effectively as a commercial taxi. Hitchly systemically caps contribution amounts to reflect standard point-to-point fuel economics (typically ₹3 - ₹5 per kilometer).</li>
                                <li><strong>Compliance Duty:</strong> Users acting as Ride-Givers take full legal responsibility for ensuring their private vehicle has valid registration, up-to-date insurance (covering passengers), and a valid Driver’s License.</li>
                            </ul>
                        </div>

                        <div className="policy-section">
                            <h3>3. Liability & Risk Assumption</h3>
                            <p><strong>Users participate in carpooling entirely at their own risk.</strong></p>
                            <ul>
                                <li>Hitchly uses OTP-based phone number authentication to verify users and build a trusted community. However, Hitchly <strong>does not</strong> conduct manual criminal background checks on its users.</li>
                                <li>Hitchly shall not be liable for any accidents, physical injuries, loss of property, traffic violations, or disputes that occur during a ride.</li>
                                <li>Users are strongly advised to exercise personal judgment, share ride details with trusted family members, and abide by all local traffic laws (including wearing seatbelts and helmets).</li>
                            </ul>
                        </div>

                        <div className="policy-section">
                            <h3>4. Code of Conduct</h3>
                            <ul>
                                <li>No user shall transport illegal goods, weapons, or hazardous materials during a Hitchly ride.</li>
                                <li>Any reports of harassment, discrimination, or dangerous driving will result in an immediate, permanent ban from the platform.</li>
                                <li>Women-only features are strictly reserved for female users; any attempt by a male user to bypass this security feature will result in a permanent ban and potential reporting to local law enforcement.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Privacy Policy Section */}
                    <div className="policy-part">
                        <h2 className="policy-part-title">Part 2: Privacy Policy</h2>
                        <p className="policy-intro">
                            This Privacy Policy explains how Hitchly handles your Personal Information to comply with Google Play Store policies and the Digital Personal Data Protection (DPDP) frameworks in India.
                        </p>

                        <div className="policy-section">
                            <h3>1. Data We Collect and Why We Collect It</h3>
                            <p>To provide a safe and functioning carpool environment, we collect the following:</p>
                            <ul>
                                <li><strong>Account Information:</strong> Name, Phone Number, and Profile Picture. This is used to build trust and accountability within the community.</li>
                                <li><strong>Location Data (CRITICAL FOR FUNCTIONALITY):</strong>
                                    <ul>
                                        <li><em>Foreground Location:</em> Used to accurately match you with nearby co-riders and suggest pick-up/drop-off points.</li>
                                        <li><em>Background Location:</em> <strong>Hitchly only accesses your background location when an active ride is in progress.</strong> This is strictly required to provide real-time GPS tracking for your matched co-rider so they know when to meet you at the pickup point. Hitchly immediately stops tracking location once the ride is completed or cancelled. We do NOT track your location for advertising, nor do we track it when you are not in an active ride.</li>
                                    </ul>
                                </li>
                                <li><strong>Device Information:</strong> IP address, device model, and OS version for debugging crashes and preventing fraudulent accounts.</li>
                            </ul>
                        </div>

                        <div className="policy-section">
                            <h3>2. How Your Data is Shared</h3>
                            <ul>
                                <li><strong>With Co-Riders:</strong> When you confirm a ride, your matched co-rider will see your First Name, Profile Picture, Rating, and Live Location (only during the ride duration).</li>
                                <li><strong>Zero Phone Number Scraping:</strong> Phone numbers are kept secure. In-app communication is facilitated via encrypted WebSockets to prevent exposing your private phone number to strangers.</li>
                                <li><strong>No Third-Party Selling:</strong> Hitchly <strong>does not</strong> sell your personal data, travel history, or demographic profiles to third-party ad networks, marketing agencies, or data brokers.</li>
                            </ul>
                        </div>

                        <div className="policy-section">
                            <h3>3. Data Localization & Security</h3>
                            <ul>
                                <li>All personal data is stored in highly secure, industry-standard cloud databases.</li>
                                <li>Chat messages between riders and drivers are transmitted via secure HTTPS/WSS protocols and are strictly contained within the context of an active ride.</li>
                            </ul>
                        </div>

                        <div className="policy-section">
                            <h3>4. Data Retention and Account Deletion</h3>
                            <p>You have absolute control over your data in compliance with Play Store requirements.</p>
                            <ul>
                                <li><strong>Retention:</strong> We retain your ride history and profile data only as long as your account is active.</li>
                                <li><strong>Deletion:</strong> You can request the complete deletion of your account and all associated personal data at any time.</li>
                                <li><strong>How to Delete:</strong> To request complete deletion of your account and data, email <code>hitchlyride@gmail.com</code> with the subject "Data Deletion Request" from your registered phone number. All associated tracking data, active ride history, chats, and records will be purged within 14 business days.</li>
                            </ul>
                        </div>

                        <div className="policy-section">
                            <h3>5. Changes to This Policy</h3>
                            <p>
                                We may update this Privacy Policy as local laws or app features evolve. Any significant changes will be communicated via an in-app persistent notification.
                            </p>
                        </div>
                    </div>

                    {/* Acknowledgment */}
                    <div className="policy-highlight-box">
                        <p>
                            By registering an account with Hitchly, you acknowledge that you have read, understood, and agreed to this dual Terms of Service and Privacy Policy document.
                        </p>
                    </div>

                </div>
            </PageLayout>
        </>
    );
};

export default PrivacyPolicy;
