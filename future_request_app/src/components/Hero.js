import React from 'react';
import { FaShoppingBag, FaYoutube, FaSpotify } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
      <video autoPlay loop muted>
        {/* Add your background video here */}
      </video>
      <div className="hero-content">
        <h1>QUALITY TECH VIDEOS</h1>
        <div className="cta-buttons">
          <button className="slanted-button mkbhd-merch">
            <FaShoppingBag className="icon" />
            MKBHD MERCH
          </button>
          <button className="slanted-button watch-now">
            <FaYoutube className="icon" />
            WATCH NOW
          </button>
          <button className="slanted-button the-studio">
            <FaYoutube className="icon" />
            THE STUDIO
          </button>
          <button className="slanted-button podcast">
            <FaSpotify className="icon" />
            PODCAST
          </button>
          <button className="slanted-button autofocus">
            <FaYoutube className="icon" />
            AUTOFOCUS
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;