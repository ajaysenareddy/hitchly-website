import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="navbar" style={!isHome ? { top: 0 } : undefined}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          Hitchly <span className="beta-tag">Alpha</span>
        </Link>

        {isHome && (
          <>
            {/* Desktop Links */}
            <div className="nav-links">
              <a href="#features" className="nav-link">Features</a>
              <a href="#sponsorship" className="nav-link">Alpha Info</a>
              <a href="#beta-signup" className="nav-link">Join Alpha</a>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation menu" aria-expanded={isOpen}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile menu overlay */}
            <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
              <div className="mobile-nav-links">
                <a href="#features" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Features</a>
                <a href="#sponsorship" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Alpha Info</a>
                <a href="#beta-signup" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Join Alpha</a>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
