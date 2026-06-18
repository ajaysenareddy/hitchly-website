import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import './Navbar.css';

// Landing pages linked from the navbar on inner pages
const LANDING_LINKS = [
  { to: '/car-pool-hyderabad', label: 'Carpool Hyderabad' },
  { to: '/ride-share-office-commute', label: 'Office Commute' },
  { to: '/how-hitchly-works', label: 'How It Works' },
  { to: '/benefits-of-carpooling', label: 'Benefits' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="navbar" style={!isHome ? { top: 0 } : undefined}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          Hitchly <span className="beta-tag">Live</span>
        </Link>

        {isHome ? (
          <>
            {/* Home — anchor links */}
            <div className="nav-links">
              <a href="#features" className="nav-link">Features</a>
              <a href="#sponsorship" className="nav-link">Highlights</a>
              <a href="#beta-signup" className="nav-link active-download">Download App</a>
            </div>

            <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation menu" aria-expanded={isOpen}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
              <div className="mobile-nav-links">
                <a href="#features" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Features</a>
                <a href="#sponsorship" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Highlights</a>
                <a href="#beta-signup" className="mobile-nav-link active-download" onClick={() => setIsOpen(false)}>Download App</a>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Inner pages — route links to landing pages */}
            <div className="nav-links">
              {LANDING_LINKS.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`nav-link${location.pathname === to ? ' nav-link-active' : ''}`}
                >
                  {label}
                </Link>
              ))}
              <a
                href="https://play.google.com/store/apps/details?id=com.hitchly"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link active-download"
              >
                Download App
              </a>
            </div>

            <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation menu" aria-expanded={isOpen}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
              <div className="mobile-nav-links">
                {LANDING_LINKS.map(({ to, label }) => (
                  <Link key={to} to={to} className="mobile-nav-link" onClick={() => setIsOpen(false)}>{label}</Link>
                ))}
                <a
                  href="https://play.google.com/store/apps/details?id=com.hitchly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-nav-link active-download"
                  onClick={() => setIsOpen(false)}
                >
                  Download App
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
