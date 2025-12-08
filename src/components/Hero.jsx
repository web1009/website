import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroImages = [
    '/img/main1.jpg',
    '/img/main2.jpg',
    '/img/main3.jpg'
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const multiplier = 0.3;
        const offset = getOffset();
        const fromTop = window.pageYOffset;
        const bgCss = `center ${multiplier * fromTop - offset}px`;
        heroRef.current.style.backgroundPosition = bgCss;
      }
    };

    const getOffset = () => {
      let offset = 450;
      const windowHeight = window.innerHeight;

      if (windowHeight > 500) {
        offset = 400;
      }
      if (windowHeight > 680) {
        offset = 300;
      }
      if (windowHeight > 830) {
        offset = 210;
      }

      return offset;
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // 자동 슬라이드
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroImages.length);
    }, 5000); // 5초마다 자동으로 다음 이미지로

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section id="infinite" className="modern-hero-section" ref={heroRef}>
      {/* Main Image Slider - Full Width Background */}
      <div className="hero-image-container">
        <div className="hero-image-wrapper">
          {heroImages.map((image, index) => (
            <img 
              key={index}
              src={image} 
              alt={`Bible Study ${index + 1}`} 
              className={`hero-main-image ${currentSlide === index ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>

      {/* Overlay Content */}
      <div className="hero-overlay-content">
        <div className="container">
          <div className="hero-content">
            {/* Headline Section */}
            <div className="hero-headline">
              <h1 className="hero-main-title">The Living Word Academy</h1>
              <p className="hero-sub-question">Are you looking for true happiness?</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
