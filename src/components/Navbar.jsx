import React, { useState } from 'react';
import { Car, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#" className="logo">
          <Car className="logo-icon" size={28} strokeWidth={2.5} />
          Hitchly <span className="beta-tag">Beta</span>
        </a>

        {/* Desktop Links */}
        <div className="nav-links">
          <a href="#features" className="nav-link">Features</a>
          <a href="#sponsorship" className="nav-link">Beta Info</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu overlay */}
        <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
          <div className="mobile-nav-links">
            <a href="#features" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Features</a>
            <a href="#sponsorship" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Beta Info</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
