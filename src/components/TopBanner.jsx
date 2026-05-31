import React from 'react';
import './TopBanner.css';

const TopBanner = () => {
    return (
        <a 
            href="https://play.google.com/store/apps/details?id=com.hitchly" 
            className="top-banner"
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
        >
            <span>🚀 HITCHLY IS NOW LIVE ON THE <strong>GOOGLE PLAY STORE! DOWNLOAD NOW</strong></span>
        </a>
    );
};

export default TopBanner;
