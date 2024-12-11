import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroBannerStyles.css';

const HeroBanner = () => {
  const [animateText, setAnimateText] = useState(false);
  const [currentBackground, setCurrentBackground] = useState(0);

  // Background images array (you'd replace these with your actual images)
  const backgrounds = [
    'https://wallpapers.com/images/hd/4k-programming-background-6eukid8bfwo4dv3y.jpg',
    'https://www.pc-tablet.co.in/wp-content/uploads/2024/07/RD280U-Programming-Monitor.jpg',
    'https://c4.wallpaperflare.com/wallpaper/218/40/1006/coder-developer-programmer-programming-wallpaper-preview.jpg'
  ];

  // Auto-change background every 5 seconds
  useEffect(() => {
    const backgroundInterval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
    }, 5000);

    // Trigger text animation
    const animationTimer = setTimeout(() => {
      setAnimateText(true);
    }, 500);

    return () => {
      clearInterval(backgroundInterval);
      clearTimeout(animationTimer);
    };
  }, []);

  return (
    <div 
      className="hero-banner position-relative overflow-hidden text-white" 
      style={{
        backgroundImage: `url(${backgrounds[currentBackground]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="hero-overlay"></div>
      <div className="container position-relative">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-8">
            <div className={`hero-content ${animateText ? 'animate-in' : ''}`}>
              <h1 className="display-3 fw-bold mb-4">
                Transform Your Digital Experience
              </h1>
              
              <p className="lead mb-4">
                Discover innovative solutions that drive your business forward 
                with cutting-edge technology and creative strategies.
              </p>
              
              <div className="d-flex flex-wrap gap-3">
                <button 
                  className="btn btn-success btn-lg hover-lift" 
                  onClick={() => alert('Get Started Clicked!')}
                >
                  Get Started
                  <i className="bi bi-arrow-right ms-2"></i>
                </button>
                
                <button 
                  className="btn btn-outline-light btn-lg hover-lift" 
                  onClick={() => alert('Learn More Clicked!')}
                >
                  Learn More
                  <i className="bi bi-play-circle ms-2"></i>
                </button>
              </div>

              {/* Social Proof Section */}
              <div className="social-proof mt-5">
                <div className="d-flex align-items-center">
                  <div className="user-avatars me-3">
                    {[1, 2, 3, 4, 5].map((user) => (
                      <img 
                        key={user}
                        src={`/api/placeholder/50/50?text=${user}`} 
                        alt={`User ${user}`} 
                        className="rounded-circle border border-white"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="mb-0 fw-bold">
                      Trusted by 50,000+ Businesses
                    </p>
                    <div className="text-warning">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-half"></i>
                      <span className="ms-2 text-white">(4.8)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image/Graphic */}
          <div className="col-lg-4 d-none d-lg-block">
            <div className="hero-graphic">
              <img 
                src="https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-programmer-clipart-developer-sitting-behind-his-computer-in-glasses-cartoon-vector-png-image_6815441.png" 
                alt="Hero Graphic" 
                className="img-fluid floating-animation"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background Change Indicators */}
      <div className="background-indicators position-absolute bottom-0 start-50 translate-middle-x mb-4">
        {backgrounds.map((_, index) => (
          <span 
            key={index} 
            className={`indicator ${index === currentBackground ? 'active' : ''}`}
            onClick={() => setCurrentBackground(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;