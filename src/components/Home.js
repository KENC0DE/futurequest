import React from "react";
import { Link } from "react-router-dom";
import { FaGraduationCap, FaBriefcase, FaBook } from "react-icons/fa";
import HeroBg from "../background/bg_mkbhd_white.mp4";

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
          <div className="rounded dark:bg-gray-700 dark:text-white bg-white text-black">
            <iframe
              width="100%"
              height="auto"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded mb-2"
            ></iframe>
          </div>
        </div>
        <a
          href="https://www.youtube.com/@Future_Quest"
          target="_blank"
          className="inline-block mt-8 px-4 py-2 rounded dark:bg-gray-700 dark:text-white
          dark:hover:bg-gray-600 bg-gray-800 text-white hover:bg-gray-700"
        >
          Visit Channel
        </a>
      </section>

      {/* Footer */}
      <footer className="dark:bg-gray-800 dark:text-white py-8 mt-8 bg-gray-100">
        <div className="footer-links flex-col justify-center gap-8 mb-4 text-center">
          <p>Contact</p>
          <p>Email: team@questfuture.net</p>
        </div>
        <div className="copyright text-center text-sm mb-2">
          © 2024 Future Quest
        </div>
        <div className="powered-by text-center text-sm">
          Powered by Future Quest
        </div>
      </footer>
    </div>
  );
}

export default Home;
