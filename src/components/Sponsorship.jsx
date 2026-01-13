import React from 'react';
import { Car } from 'lucide-react';
import './Sponsorship.css';

const Sponsorship = () => {
    return (
        <section id="sponsorship" className="sponsorship-section">
            <div className="container sponsorship-container">
                <div className="sponsor-content">
                    <span className="sponsor-label">Official Mobility Partner</span>
                    <h2>Hitchly + TEDxSMEC</h2>
                    <p>
                        We are proud to partner with TEDxSMEC. Just as TED talks spread powerful ideas, Hitchly connects powerful communities.
                        Together, we are driving sustainability and innovation forward.
                    </p>
                    <div className="sponsor-logos">
                        <div className="logo-box tedx-logo">
                            TEDx<span>SMEC</span>
                        </div>
                        <div className="logo-divider">✕</div>
                        <div className="logo-box hitchly-logo">
                            <Car size={28} /> Hitchly
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sponsorship;
