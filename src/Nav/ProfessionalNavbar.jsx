import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarStyles.css'; // We'll create custom styles

const ProfessionalNavbar = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive);
  };

  return (
    <nav 
      className="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar shadow-lg animated-navbar" 
      style={{ backgroundColor: '#1A4314 !important' }}
    >
      <div className="container-fluid">
        {/* Brand Logo with Pulse Animation */}
        <a 
          className="navbar-brand logo-pulse text-white fw-bold" 
          href="#home"
        >
          YourLogo
        </a>

        {/* Responsive Toggle Button with Animation */}
        <button 
          className="navbar-toggler menu-toggle" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNavDropdown" 
          aria-controls="navbarNavDropdown" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon animated-icon"></span>
        </button>

        {/* Navbar Content */}
        <div 
          className="collapse navbar-collapse" 
          id="navbarNavDropdown"
        >
          {/* Left Side Navigation with Interactive Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {['Home', 'Features', 'About'].map((link) => (
              <li 
                key={link.toLowerCase()} 
                className="nav-item"
              >
                <a 
                  className={`nav-link hover-effect ${activeLink === link.toLowerCase() ? 'active' : ''}`}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setActiveLink(link.toLowerCase())}
                >
                  <i className={`bi bi-${link.toLowerCase() === 'home' ? 'house' : link.toLowerCase() === 'features' ? 'gear' : 'info-circle'} me-2 icon-bounce`}></i> 
                  {link}
                </a>
              </li>
            ))}

            {/* Dropdown with Hover Effects */}
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle hover-effect" 
                href="#" 
                id="navbarDropdownMenuLink" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                <i className="bi bi-person-circle me-2 icon-rotate"></i> Profile
              </a>
              <ul 
                className="dropdown-menu dropdown-menu-dark custom-dropdown" 
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a 
                    className="dropdown-item hover-slide" 
                    href="#"
                  >
                    <i className="bi bi-pencil me-2"></i> Edit Profile
                  </a>
                </li>
                <li>
                  <a 
                    className="dropdown-item hover-slide" 
                    href="#"
                  >
                    <i className="bi bi-gear me-2"></i> Account Settings
                  </a>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <a 
                    className="dropdown-item text-danger hover-slide" 
                    href="#"
                  >
                    <i className="bi bi-box-arrow-right me-2"></i> Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          {/* Right Side Navigation with Interactive Search */}
          <ul className="navbar-nav align-items-center">
            <li className="nav-item me-3">
              <div className="search-container">
                <input 
                  type="text" 
                  className={`form-control search-input ${isSearchActive ? 'active' : ''}`} 
                  placeholder="Search..." 
                />
                <button 
                  className="btn btn-outline-light search-button"
                  onClick={handleSearchClick}
                >
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </li>
            <li className="nav-item">
              <a 
                className="btn btn-outline-light contact-btn hover-grow" 
                href="#contact"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ProfessionalNavbar;