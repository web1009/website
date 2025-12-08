import React from 'react';
import './Connect.css';

const Connect = () => {
  return (
    <section id="connect" className="connect-section">
      <div className="container">
        <div className="connect-header">
          <span className="connect-label">Connect</span>
          <h2 className="connect-title">Join Our Community</h2>
          <p className="connect-card-description-white">
                Ready to start your Bible study journey? Join our free online course today.
              </p>
        </div>

        <div className="connect-grid-social">
          {/* WhatsApp Community Card */}
          <div className="connect-card">
            <div className="connect-card-content">
              <div className="connect-icon-large-wrapper">
                <i className="fab fa-whatsapp connect-icon-brand connect-icon-whatsapp"></i>
              </div>
              <h3 className="connect-card-title">WhatsApp Community</h3>
              <p className="connect-card-description">
                Join our WhatsApp community to stay connected with fellow students, receive updates, and participate in discussions.
              </p>
              <div className="connect-link-wrapper">
                <a 
                  href="https://chat.whatsapp.com/I5p0FLpWc337yBGa2QetDk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="connect-social-link connect-social-link-whatsapp"
                >
                  <i className="fab fa-whatsapp"></i>
                  <span>Go to WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Instagram Card */}
          <div className="connect-card">
            <div className="connect-card-content">
              <div className="connect-icon-large-wrapper">
                <i className="fab fa-instagram connect-icon-brand connect-icon-instagram"></i>
              </div>
              <h3 className="connect-card-title">Instagram</h3>
              <p className="connect-card-description">
                Follow us on Instagram for daily inspiration, Bible verses, course updates, and stories from our community.
              </p>
              <div className="connect-link-wrapper">
                <a 
                  href="https://instagram.com/thelivingwordacademy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="connect-social-link connect-social-link-instagram"
                >
                  <i className="fab fa-instagram"></i>
                  <span>Go to Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="connect-grid">
        </div>
      </div>
    </section>
  );
};

export default Connect;

