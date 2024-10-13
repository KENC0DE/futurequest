import React from "react";
import { Link } from "react-router-dom";
import { FaGraduationCap, FaBriefcase, FaBook } from "react-icons/fa";
import HeroBg from "../background/bg_mkbhd_white.mp4";
import HeroBg1 from "../background/bg_1.mp4";
import HeroBg2 from "../background/bg_2.mp4";

function Home() {
  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-900 dark:text-white bg-white text-black">
      {/* Hero Section */}
      <section
        className="flex items-center
        justify-center h-screen text-center"
      >
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover dark:invert duration-1000"
        >
          <source src={HeroBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 p-5">
          <h1 className="text-2xl font-bold mb-8 transform skew[-10deg] md:text-4xl">
            QUALITY EDUCATION AND CAREER GUIDANCE
          </h1>
          <div className="flex justify-center gap-4">
            <Link to="/education">
              <button className="slanted-button flex items-center justify-center px-4 py-2 text-white bg-orange-600 hover:bg-orange-700 rounded shadow transform skew[-20deg] transition-transform duration-300">
                <FaGraduationCap
                  className="mr-2 transform skew[20deg]"
                  size={24}
                />
                Education
              </button>
            </Link>
            <Link to="/work">
              <button className="slanted-button flex items-center justify-center px-4 py-2 text-white bg-gray-800 dark:bg-white dark:text-slate-900 hover:bg-gray-700 rounded shadow transform skew[-20deg] transition-transform duration-300">
                <FaBriefcase className="mr-2 transform skew[20deg]" size={24} />
                Work
              </button>
            </Link>
            <Link to="/resource">
              <button
                className="slanted-button flex items-center justify-center px-4 py-2 text-white
              bg-blue-600 dark:bg-blue-600 dark:text-white hover:bg-blue-800 dark:hover:bg-blue-800
              rounded shadow transform skew[-20deg] transition-transform duration-300"
              >
                <FaBook className="mr-2 transform skew[20deg]" size={24} />
                Resource
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Videos Section */}
      <section className="py-16 px-8 dark:bg-gray-800 dark:text-white bg-gray-200 text-black text-center">
        <h2 className="text-3xl font-bold mb-8">Recent Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {/*recent video thumbnails here */}
          <div className="p-4 rounded shadow dark:bg-gray-700 dark:text-white bg-white text-black">
            {/* Video Thumbnail*/}
            <img
              src="path/to/thumbnail.jpg"
              alt="Video Thumbnail"
              className="w-full h-auto rounded mb-2"
            />
            <h3 className="text-lg font-semibold">Video Title</h3>
          </div>
          {/*more video thumbnails */}
        </div>
        <a
          href="#"
          className="inline-block mt-8 px-4 py-2 rounded dark:bg-gray-700 dark:text-white
          dark:hover:bg-gray-600 bg-gray-800 text-white hover:bg-gray-700"
        >
          Visit Channel
        </a>
      </section>

      {/* Footer */}
      <footer className="dark:bg-gray-800 dark:text-white py-8 mt-8 bg-gray-100">
        <div className="footer-links flex justify-center gap-8 mb-4">
          <a href="#contact" className="hover:underline">
            Contact
          </a>
          <a href="#privacy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:underline">
            Terms of Service
          </a>
          <a href="#faq" className="hover:underline">
            Returns & FAQ
          </a>
        </div>
        <div className="copyright text-center text-sm mb-2">
          © 2024 Your Brand
        </div>
        <div className="powered-by text-center text-sm">
          Powered by Your Platform
        </div>
      </footer>
    </div>
  );
}

export default Home;
