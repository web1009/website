import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        {/* Upper Section */}
        <div className="footer-upper">
          <div className="footer-column">
            <h3 className="footer-heading">CONTACT</h3>
            <div className="footer-links">
              <a 
                href="https://instagram.com/thelivingwordacademy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link"
              >
                Instagram
              </a>
              <span className="footer-link">
                WhatsApp
              </span>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Application Form</h3>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdu7HpqIJaEagfRa0_DlEkpGw0oiIIjTNsUCgfLViNbsjJiyg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-apply-button"
            >
              Apply Now
            </a>
          </div>
        </div>

        {/* Lower Section */}
        <div className="footer-lower">
          <div className="footer-logo">
            <img src="/logo.png" alt="Logo" className="footer-logo-icon" />
            <span className="footer-logo-text">The Living Word Academy</span>
          </div>
          <div className="footer-copyright">
            <p>©Copyright The Living Word Academy, {new Date().getFullYear()}. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

