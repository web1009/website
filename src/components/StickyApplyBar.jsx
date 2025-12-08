import React, { useState, useEffect } from 'react';
import './StickyApplyBar.css';

const StickyApplyBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤이 300px 이상 내려가면 바 표시
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="sticky-apply-bar">
      <div className="sticky-apply-content">
        <span className="sticky-apply-text">First come, first served! Get a certificate upon completion! Sign up now for free!</span>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdu7HpqIJaEagfRa0_DlEkpGw0oiIIjTNsUCgfLViNbsjJiyg/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="sticky-go-button"
        >
          go
        </a>
      </div>
    </div>
  );
};

export default StickyApplyBar;

