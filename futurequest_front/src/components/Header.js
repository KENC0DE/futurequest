import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { useAuth } from "../AuthContext";

function Header() {
  const { user } = useAuth();
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
            <li>
              <Link to="/free">Free</Link>
            </li>
            {user ? (
              <>
                <button className="cart-icon">
                  <Link to="/profile">Profile</Link>
                </button>
                <button className="cart-icon">
                  <Link to="/logout">Logout</Link>
                </button>
              </>
            ) : (
              <>
                <button className="cart-icon">
                  <Link to="/login">Login</Link>
                </button>
                <button className="cart-icon">
                  <Link to="/register">Register</Link>
                </button>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
