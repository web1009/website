import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsMenuOpen(false);
    setActiveLink(sectionId === 'infinite' ? 'home' : sectionId);
  };

  return (
    <nav className={`modern-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand-wrapper">
          <img src="/logo.png" alt="Logo" className="navbar-logo-icon" />
          <a href="#infinite" className="navbar-brand" onClick={(e) => scrollToSection(e, 'infinite')}>
            The Living Word Academy
          </a>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`navbar-menu ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a 
                className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
                href="#infinite" 
                onClick={(e) => scrollToSection(e, 'infinite')}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#whatwedo" 
                onClick={(e) => scrollToSection(e, 'whatwedo')}
              >
                Introduction
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#connect" 
                onClick={(e) => scrollToSection(e, 'connect')}
              >
                Connect
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdu7HpqIJaEagfRa0_DlEkpGw0oiIIjTNsUCgfLViNbsjJiyg/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
