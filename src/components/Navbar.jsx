import React from 'react';
import { Car } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#" className="logo">
          <Car className="logo-icon" size={28} strokeWidth={2.5} />
          Hitchly <span className="beta-tag">Beta</span>
        </a>
        <div className="nav-links">
          <a href="#features" className="nav-link">Features</a>
          <a href="#sponsorship" className="nav-link">TEDxSMEC</a>

        </div>
        <div className="nav-cta">
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
