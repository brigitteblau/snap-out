import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span>·</span>
          <Link to="/help">Help</Link>
          <span>·</span>
          <Link to="/contributors">Contributors</Link>
          <span>·</span>
        </div>
        <p className="footer-text">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;