import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

function Header() {
  return (
    <header>
      <nav>
        <div className="left-nav">
          <button className="theme-toggle">
            <Link to="/">Theme</Link>
          </button>
          <div className="social-icons">
            <a href="">
              <FaTwitter />
            </a>
            <a href="">
              <FaFacebook />
            </a>
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="logo">{/* Add your logo here */}</div>
        <div className="right-nav">
          <ul>
            <li>
              <Link to="/offers">Offers</Link>
            </li>
            {/*             <li>
              <a href="#brand">Your Brand</a>
            </li>
            <li>
              <a href="#studio">The Studio</a>
            </li>
            <li>
              <a href="#podcast">Podcast</a>
            </li>
            <li>
              <a href="#custom">Custom Category</a>
            </li> */}
            <button className="cart-icon">
              <Link to="/login">Login</Link>
            </button>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
