import React, { useState } from 'react';
import { Mail, User, CheckCircle, AlertCircle } from 'lucide-react';
import './BetaSignup.css';

const BetaSignup = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const subject = encodeURIComponent('Hitchly Beta Count Me In');

            const body = encodeURIComponent(
                `Hey Hitchly Team,\n\n` +
                `I just discovered Hitchly and I am already excited. I would love to join the beta and try it out.\n\n` +
                `Here is a little about me:\n` +
                `Name: ${formData.fullName}\n` +
                `Email: ${formData.email}\n\n` +
                `Looking forward to sharing rides, saving costs, and being part of the Hitchly journey.\n\n` +
                `Talk soon!\n`
            );

            window.location.href = `mailto:hitchlyride@gmail.com?subject=${subject}&body=${body}`;

            setTimeout(() => {
                setStatus('success');
                setFormData({ fullName: '', email: '' });
            }, 500);
        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
            setErrorMessage('Failed to open email client. Please email us directly at hitchlyride@gmail.com');
        }
    };

    return (
        <section id="beta-signup" className="beta-signup-section">
            <div className="container">
                <div className="signup-content-inline">
                    <div className="signup-header-inline">
                        <h2>Join the <span className="text-primary">Beta Waitlist</span></h2>
                        <p>Be among the first to experience the future of carpooling</p>
                    </div>

                    {status === 'success' ? (
                        <div className="success-message-inline">
                            <CheckCircle size={32} />
                            <div>
                                <h3>Email Ready!</h3>
                                <p>Please send the email from your email app to complete your request.</p>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="signup-form-inline">
                            <div className="form-row">
                                <div className="form-field">
                                    <User size={20} />
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Full Name"
                                    />
                                </div>

                                <div className="form-field">
                                    <Mail size={20} />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="Email Address"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="submit-btn-inline"
                                    disabled={status === 'loading'}
                                >
                                    {status === 'loading' ? 'Opening Email...' : "I'm Interested"}
                                </button>
                            </div>

                            {status === 'error' && (
                                <div className="error-message-inline">
                                    <AlertCircle size={18} />
                                    <span>{errorMessage}</span>
                                </div>
                            )}

                            <p className="form-helper-text">
                                Clicking "I'm Interested" will open your email app with a pre-filled message to send.
                            </p>
                        </form>
                    )}

                    {/* Hitchly Beta APK QR Code */}
                    <div className="qr-divider">
                        <span>or scan to download</span>
                    </div>

                    <div className="qr-section">
                        <div className="qr-image-wrapper">
                            <div className="qr-ring"></div>
                            <a
                                href="https://drive.google.com/drive/folders/1OgF1t7DKK37hhRRcx1j3u7_tvzl4hTk1"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Download Hitchly Beta APK"
                            >
                                <img
                                    src="/images/Hitchly_Beta.png"
                                    alt="Scan to download Hitchly Beta APK"
                                    className="qr-image"
                                />
                            </a>
                        </div>
                        <div className="qr-cta-text">
                            <h3>Try Hitchly Beta</h3>
                            <p>Scan the QR code to download the Hitchly Beta APK.</p>
                            <a
                                href="https://drive.google.com/drive/folders/1OgF1t7DKK37hhRRcx1j3u7_tvzl4hTk1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="qr-link-btn"
                            >
                                Download APK
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BetaSignup;
