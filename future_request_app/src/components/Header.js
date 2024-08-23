import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function Header() {
  return (
    <header>
      <nav>
        <div className="left-nav">
          <button className="theme-toggle">Theme</button>
          <div className="social-icons">
            <a href=""><FaTwitter /></a>
            <a href=""><FaFacebook /></a>
            <a href=""><FaInstagram /></a>
            <a href=""><FaYoutube /></a>
          </div>
        </div>
        <div className="logo">{/* Add your logo here */}</div>
        <div className="right-nav">
          <ul>
            <li>
              <a href="#shop">Shop</a>
            </li>
            <li>
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
            </li>
          </ul>
          <button className="cart-icon">Cart</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
