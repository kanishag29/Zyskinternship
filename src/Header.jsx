import React from 'react';
import './App.css'; 
import profileimg from './images/profile.jpg';
import hero from './images/heroimg.jpeg';
import tech from './images/WhatsApp Image 2025-01-18 at 10.19.28 AM.jpeg';

const Header = () => {
  return (
    <header className="header-container">
      <nav className="navbar">
        <div className="logo">
        <img src={tech} alt="Profile" className="techimg" />
        </div>
        <ul className="nav-links">
          <li><a href="#features-section">Features</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#resources">Resources</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#faq">FAQ's</a></li>
        </ul>
        <div className="profile">
          <img src={profileimg} alt="Profile" className="profile-img" />
        </div>
        <button className="hamburger-menu" aria-label="Menu">
          ☰
        </button>
      </nav>
      <div className="header-content">
        <p className="new-feature">New feature</p>
        <a href="#team-dashboard" className="dashboard-link">Check out the team dashboard →</a>
        <h2 className="header-title">Beautiful analytics to grow smarter</h2>
        <p className="header-description">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="header-buttons">
          <button className="btn-demo">Demo</button>
          <button className="btn-signup">Sign up</button>
        </div>
        <div>
          <img src={hero} alt='heroimage' className='hero' />

        </div>
      </div>
    </header>
  );
};

export default Header;