import React from "react";
import { FaShoppingBag, FaYoutube, FaSpotify } from "react-icons/fa";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <video autoPlay loop muted>
        {/* Add your background video here */}
      </video>
      <div className="hero-content">
        <h1>The Main TagLine</h1>
        <div className="cta-buttons">
          <Link to="/offers">
            <button className="slanted-button mkbhd-merch">
              <FaShoppingBag className="icon" />
              Education
            </button>
          </Link>
          <button className="slanted-button autofocus">
            <FaYoutube className="icon" />
            Work
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
