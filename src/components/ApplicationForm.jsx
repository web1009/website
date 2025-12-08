import React from 'react';
import './ApplicationForm.css';

const ApplicationForm = () => {
  return (
    <section id="application" className="application-form-section">
      <div className="container">
        <div className="application-content">
          <h2 className="application-main-title">Application Form</h2>
          
          <div className="application-highlight">
            <div className="application-badge">
              <i className="fas fa-star"></i>
              <span>200 Full Scholarships Available</span>
            </div>
            <p className="application-subtitle">100% FREE Online Bible Seminar</p>
          </div>

          <div className="application-button-wrapper">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdu7HpqIJaEagfRa0_DlEkpGw0oiIIjTNsUCgfLViNbsjJiyg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="application-submit-button"
            >
              <span className="button-text">Apply Now</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
