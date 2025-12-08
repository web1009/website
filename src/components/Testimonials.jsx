import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonials.css';

const Testimonials = () => {
  const sectionRef = useRef(null);
  // Background image: diverse group discussion/education theme
  // You can replace this with a local image: 'url(/img/your-image.jpg)'
  const [backgroundImage, setBackgroundImage] = useState('url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)');

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        if (window.innerWidth > 768) {
          // Desktop: parallax effect with fixed background
          const multiplier = 0.3;
          const firstTop = sectionRef.current.offsetTop;
          const pos = window.pageYOffset;
          const yPos = Math.round(multiplier * (firstTop - pos));
          const bgCss = `center ${yPos}px`;
          sectionRef.current.style.backgroundPosition = bgCss;
        } else {
          // Mobile: fixed position
          sectionRef.current.style.backgroundPosition = 'center';
        }
      }
    };

    const updateBackground = () => {
      // Diverse group discussion/education image
      // Desktop and mobile use the same image, or you can use different images:
      // if (window.innerWidth <= 991) {
      //   setBackgroundImage('url(/img/education-mobile.jpg)');
      // } else {
      //   setBackgroundImage('url(/img/education-desktop.jpg)');
      // }
      setBackgroundImage('url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)');
    };

    updateBackground();
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    window.addEventListener('resize', updateBackground);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('resize', updateBackground);
    };
  }, []);

  const testimonials = [
    {
      icon: 'fas fa-quote-left',
      quote: 'This Bible course has completely transformed my understanding of Scripture. The teachers are dedicated and present the material with such clarity and love. I\'ve grown in faith more than I ever imagined.',
      author: 'Sarah Johnson, Student'
    },
    {
      icon: 'fas fa-quote-left',
      quote: 'I\'m so grateful for this free opportunity to study God\'s Word from beginning to end. The online format makes it accessible, and the community support throughout the journey has been incredible.',
      author: 'Michael Brown, Student'
    },
    {
      icon: 'fas fa-quote-left',
      quote: 'The scholarship program made it possible for me to join this life-changing course. The 7-8 month journey through the entire Bible has deepened my relationship with God in ways I never expected.',
      author: 'Emily Davis, Student'
    },
    {
      icon: 'fas fa-quote-left',
      quote: 'The Living Word Academy has helped me grow in faith like never before. The teaching is deep, clear, and truly transformative. I recommend it to anyone seeking to understand the Bible better.',
      author: 'David Wilson, Student'
    },
    {
      icon: 'fas fa-quote-left',
      quote: 'This course has been a blessing in my life. The commitment to free Bible education and the quality of teaching is outstanding. I\'ve learned so much about God\'s Word and His heart for us.',
      author: 'Lisa Anderson, Student'
    }
  ];

  const settings = {
    dots: true,
    prevArrow: false,
    nextArrow: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <section
      id="testimonials"
      className="testimonials-section"
      ref={sectionRef}
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'relative'
      }}
    >
      <div className="testimonials-overlay"></div>
      <div className="container testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">Testimonials</h2>
          <p className="testimonials-subtitle">
            Hear from our students who have been transformed through studying God's Word. Their testimonies reflect the impact of faithful Bible teaching.
          </p>
        </div>
        <div className="testimonials-carousel-wrapper">
          <Slider {...settings} className="testimonials-carousel">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <blockquote className="testimonial-quote">
                  <span className="quote-mark quote-mark-open">"</span>
                  {testimonial.quote}
                  <span className="quote-mark quote-mark-close">"</span>
                </blockquote>
                <figcaption className="testimonial-author">
                  — {testimonial.author}
                </figcaption>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
