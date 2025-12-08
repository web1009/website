import React from 'react';
import './WhatWeDo.css';

const WhatWeDo = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="whatwedo" className="whatwedo-section">
      <div className="container">
        {/* Section 1: Welcome - Text Left, Image Right */}
        <div className="whatwedo-content-block">
          <div className="whatwedo-text-content">
            <h3 className="whatwedo-block-title">Welcome to The Living Word Academy</h3>
            <div className="whatwedo-block-text">
                  <p>
                    At The Living Word Academy, our heart is to guide others in learning and understanding the Bible,
                    following the example of Jesus and his disciples who taught freely and without cost.
                  </p>
                  <p>
                    We offer a free online Bible course that covers the entire Bible, from beginning to end—available
                    to anyone, anywhere in the world, at any time.
                  </p>
                  <p>
                    Our team is made up of believers from diverse backgrounds, united by a shared desire to faithfully
                    teach God's Word with clarity, love, and purpose. All of our courses are hosted fully online,
                    making it accessible no matter where you are.
                  </p>
                </div>
              </div>
          <div className="whatwedo-image-content">
            <div className="whatwedo-circle-image">
              <img 
                src="/img/whatwedo-welcome.jpg" 
                alt="Welcome to The Living Word Academy - Bible study and education"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <i className="fas fa-dove" style={{ display: 'none' }}></i>
            </div>
          </div>
            </div>

        {/* Section 2: How the Course Works - Image Left, Text Right */}
        <div className="whatwedo-content-block">
          <div className="whatwedo-image-content">
            <div className="whatwedo-circle-image">
              <img 
                src="/img/whatwedo-course.jpg" 
                alt="How the Course Works - Online Bible course schedule"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <i className="fas fa-book-open" style={{ display: 'none' }}></i>
            </div>
                </div>
          <div className="whatwedo-text-content">
            <h3 className="whatwedo-block-title">How the Course Works</h3>
            <div className="whatwedo-block-text">
              <p>
                    We offer two class schedule options that run at the same time each week. You may choose only one option when registering:
                  </p>
                  <div className="whatwedo-options-grid">
                    <div className="whatwedo-option-card">
                      <h4 className="option-card-title">Option 1</h4>
                      <div className="option-card-details">
                        <p><i className="far fa-calendar"></i> Mondays & Thursdays</p>
                        <p><i className="far fa-clock"></i> 7/8 PM (Jamaica / Most Caribbean time)</p>
                        <p><i className="fas fa-hourglass-half"></i> Duration: 7–8 months</p>
                      </div>
                    </div>
                    <div className="whatwedo-option-card">
                      <h4 className="option-card-title">Option 2</h4>
                      <div className="option-card-details">
                        <p><i className="far fa-calendar"></i> Tuesdays & Fridays</p>
                        <p><i className="far fa-clock"></i> 7/8 PM (Jamaica / Most Caribbean time)</p>
                        <p><i className="fas fa-hourglass-half"></i> Duration: 7–8 months</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        {/* Section 3: About the Scholarship - Text Left, Image Right */}
        <div className="whatwedo-content-block">
          <div className="whatwedo-text-content">
            <h3 className="whatwedo-block-title">About the Scholarship</h3>
            <div className="whatwedo-block-text">
                  <p>
                    At The Living Word Academy, we are grateful for the many students who desire to study the Bible with us.
                    Because our course is offered completely free, we want to ensure that these opportunities are given to
                    those who are ready to commit fully to the journey.
                  </p>
                  <p>
                    To help us identify committed students, we begin with an introductory class, where participants can learn
                    how the program works and determine whether they are able to continue.
                  </p>
                  <p>
                    Students who attend consistently and demonstrate dedication will be invited to apply for the scholarship.
                    This process includes completing a registration form and a brief conversation with a staff member to confirm
                    readiness for the full course.
                  </p>
                  <p>
                    Once accepted, students transition from the intro sessions into the official Bible course, where the full
                    7–8 month study begins.
                  </p>
                </div>
                <div className="whatwedo-cta-wrapper whatwedo-cta-desktop">
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdu7HpqIJaEagfRa0_DlEkpGw0oiIIjTNsUCgfLViNbsjJiyg/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatwedo-cta-button" 
                  >
                    Learn More
                  </a>
                </div>
              </div>
          <div className="whatwedo-image-content">
            <div className="whatwedo-circle-image">
              <img 
                src="/img/whatwedo-scholarship.jpg" 
                alt="About the Scholarship - Free Bible education"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <i className="fas fa-graduation-cap" style={{ display: 'none' }}></i>
            </div>
            <div className="whatwedo-cta-wrapper whatwedo-cta-mobile">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdu7HpqIJaEagfRa0_DlEkpGw0oiIIjTNsUCgfLViNbsjJiyg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="whatwedo-cta-button" 
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
