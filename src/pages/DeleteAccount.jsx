import React from 'react';
import PageLayout from './PageLayout';
import SEO from '../components/SEO';
import './PageLayout.css';
import './PrivacyPolicy.css';

const DeleteAccount = () => {
    const pageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Delete Your Hitchly Account",
        "publisher": { "@type": "Organization", "name": "Hitchly" }
    };

    return (
        <>
            <SEO
                title="Delete Your Account | Hitchly"
                description="Request the deletion of your Hitchly account and all associated personal data. We will process your request within 14 business days."
                canonicalUrl="/delete-account"
                schema={pageSchema}
            />
            <PageLayout
                title="Delete Your Account"
                description="You have the right to delete your Hitchly account and all associated personal data at any time."
                hideCta={true}
            >
                <div className="policy-wrapper">

                    <div className="policy-header-card">
                        <div className="policy-meta-grid">
                            <div className="policy-meta-item">
                                <span className="policy-meta-label">Processing Time</span>
                                <span className="policy-meta-value">Within 14 Business Days</span>
                            </div>
                            <div className="policy-meta-item">
                                <span className="policy-meta-label">Contact Email</span>
                                <span className="policy-meta-value">hitchlyride@gmail.com</span>
                            </div>
                            <div className="policy-meta-item">
                                <span className="policy-meta-label">Data Removed</span>
                                <span className="policy-meta-value">All Personal Data</span>
                            </div>
                        </div>
                    </div>

                    <div className="policy-part">
                        <h2 className="policy-part-title">How to Delete Your Account</h2>
                        <p className="policy-intro">
                            Hitchly is committed to your privacy and data rights. If you wish to delete your account,
                            please follow the steps below. All your personal data — including your profile, ride history,
                            chat messages, and location data — will be permanently and irreversibly deleted.
                        </p>

                        <div className="policy-section">
                            <h3>Step 1: Send a Deletion Request Email</h3>
                            <p>Send an email to <strong>hitchlyride@gmail.com</strong> with the following details:</p>
                            <ul>
                                <li><strong>Subject:</strong> <code>Account Deletion Request</code></li>
                                <li><strong>Registered Phone Number:</strong> The phone number linked to your Hitchly account (e.g. +91 XXXXX XXXXX)</li>
                                <li><strong>Reason (optional):</strong> A brief reason for deletion (helps us improve the app)</li>
                            </ul>
                        </div>

                        <div className="policy-section">
                            <h3>Step 2: Confirmation</h3>
                            <p>
                                Once we receive your request, you will receive a confirmation email acknowledging receipt.
                                We will then process the deletion of all your associated data within <strong>14 business days</strong>.
                            </p>
                        </div>

                        <div className="policy-section">
                            <h3>What Data Gets Deleted</h3>
                            <p>Upon processing your account deletion request, the following data will be permanently erased:</p>
                            <ul>
                                <li>Your profile information (name, phone number, profile picture, gender)</li>
                                <li>All ride history you created or participated in as a driver or rider</li>
                                <li>All in-app chat messages and conversations</li>
                                <li>Your push notification token and device identifiers</li>
                                <li>All saved searches and route preferences</li>
                                <li>Your ratings and reviews given or received</li>
                                <li>All location data associated with your account</li>
                            </ul>
                        </div>

                        <div className="policy-section">
                            <h3>What Data May Be Retained</h3>
                            <p>
                                In limited cases, we may retain anonymised, non-personally identifiable aggregate data
                                (e.g. total number of rides in a city) for analytics purposes. This data cannot be linked back to you.
                            </p>
                            <p>
                                We may also retain minimal transactional records for a period required by applicable Indian law
                                (e.g. IT Act compliance), after which these will also be deleted.
                            </p>
                        </div>
                    </div>

                    <div className="policy-highlight-box">
                        <p>
                            Once your account is deleted, this action is <strong>permanent and cannot be undone</strong>.
                            You will need to create a new account if you wish to use Hitchly again in the future.
                            For any questions, contact us at <strong>hitchlyride@gmail.com</strong>.
                        </p>
                    </div>

                </div>
            </PageLayout>
        </>
    );
};

export default DeleteAccount;
