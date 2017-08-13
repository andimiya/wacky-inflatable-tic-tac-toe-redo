import React from 'react';
import Logo from '../assets/boof-logo-colored.svg';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <Link to="/">
          <img src={Logo} alt="Better Odds of Football Logo" height="60px" />
        </Link>
      </div>
      <div className="menu-container">
        <div className="menu-item">
          <Link to="/">
            <p>Home</p>
          </Link>
        </div>
        <div className="menu-item">
          <Link to="about">
            <p>About Us</p>
          </Link>
        </div>
        <div className="menu-item">
          <Link to="article/cleveland-browns-quarterback-madness-part-1">
            <p>Articles</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
