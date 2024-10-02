import React from "react";
import { FaShoppingBag, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative flex items-center justify-center h-screen text-center bg-gray-100">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        {/* Add your background video source here */}
        <source src="path/to/your/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 p-5">
        <h1 className="text-4xl font-bold text-black mb-8 transform skew[-10deg] md:text-2.5xl">
          The Main TagLine
        </h1>
        <div className="flex justify-center gap-4">
          <Link to="/education">
            <button className="slanted-button flex items-center justify-center px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded shadow transform skew[-20deg] transition-transform duration-300">
              <FaShoppingBag className="mr-2 transform skew[20deg]" />
              Education
            </button>
          </Link>
          <Link to="/work">
            <button className="slanted-button flex items-center justify-center px-4 py-2 text-white bg-gray-800 hover:bg-gray-700 rounded shadow transform skew[-20deg] transition-transform duration-300">
              <FaYoutube className="mr-2 transform skew[20deg]" />
              Work
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
