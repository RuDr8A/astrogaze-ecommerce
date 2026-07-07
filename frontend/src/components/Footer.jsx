import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer" style={{ padding: '2rem 0', marginTop: 'auto', backgroundColor: '#111827', color: '#e5e7eb' }}>
      <div className="footer-content" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Brand Section */}
        <div className="footer-brand" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <h3 style={{ color: '#8B5CF6', margin: 0 }}>AstroGaze</h3>
          <p style={{ fontSize: '0.9rem', color: '#9ca3af' }}>Premium Astronomy & Observational Equipment.</p>
        </div>

        {/* Links Section */}
        <div className="footer-links" style={{ display: 'flex', gap: '2rem' }}>
          <Link to="/about" style={{ color: '#d1d5db', textDecoration: 'none' }}>About Us</Link>
          <Link to="/return-policy" style={{ color: '#d1d5db', textDecoration: 'none' }}>Return Policy</Link>
          <Link to="/disclaimer" style={{ color: '#d1d5db', textDecoration: 'none' }}>Disclaimer</Link>
        </div>

        {/* Copyright Section */}
        <div className="footer-copyright" style={{ fontSize: '0.85rem', color: '#6b7280', alignSelf: 'center' }}>
          © {new Date().getFullYear()} AstroGaze. All rights reserved.
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;