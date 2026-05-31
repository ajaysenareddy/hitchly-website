import React from 'react';
import { ArrowRight } from 'lucide-react';
import './BetaSignup.css';

const BetaSignup = () => {
    const playStoreUrl = "https://play.google.com/store/apps/details?id=com.hitchly";
    const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(playStoreUrl)}&color=00c853&bgcolor=ffffff`;

    return (
        <section id="beta-signup" className="beta-signup-section">
            <div className="container">
                <div className="signup-content-inline" style={{ maxWidth: '800px' }}>
                    <div className="signup-header-inline">
                        <h2>Download <span className="text-primary">Hitchly</span> Today</h2>
                        <p>Join verified professionals sharing daily office commutes in Hyderabad. Safe, convenient, and affordable.</p>
                    </div>

                    <div className="qr-divider">OR</div>

                    <div className="qr-section">
                        <div className="qr-image-wrapper">
                            <div className="qr-ring"></div>
                            <img 
                                src={qrImageUrl} 
                                alt="Hitchly Play Store QR Code" 
                                className="qr-image"
                            />
                        </div>

                        <div className="qr-cta-text">
                            <h3>Scan to Download</h3>
                            <p>
                                Scan this QR code with your mobile camera to open Hitchly directly on the Google Play Store.
                            </p>
                            <a 
                                href={playStoreUrl}
                                className="qr-link-btn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Get it on Google Play <ArrowRight size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BetaSignup;
