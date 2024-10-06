import React from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingBag,
  FaYoutube,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube as FaYoutubeIcon,
} from "react-icons/fa";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen text-center bg-gray-100">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source src="path/to/your/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 p-5">
          <h1 className="text-2xl font-bold text-black mb-8 transform skew[-10deg] md:text-4xl">
            QUALITY EDUCATION AND CAREER GUIDANCE
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

      {/* Recent Videos Section */}
      <section className="py-16 px-8 bg-gray-200 text-center">
        <h2 className="text-3xl font-bold mb-8">Recent Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {/* Add your recent video thumbnails here */}
          <div className="bg-white p-4 rounded shadow">
            {/* Video Thumbnail Example */}
            <img
              src="path/to/thumbnail.jpg"
              alt="Video Thumbnail"
              className="w-full h-auto rounded mb-2"
            />
            <h3 className="text-lg font-semibold">Video Title</h3>
          </div>
          {/* Repeat for more video thumbnails */}
        </div>
        <a
          href="#"
          className="inline-block mt-8 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
        >
          Visit Channel
        </a>
      </section>

      {/* Social Feed Section */}
      <section className="social-feed py-16 px-8 text-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-8">Social Feed</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Post Title 1</h3>
            <p className="text-gray-600">
              This is a brief description of the post content.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Post Title 2</h3>
            <p className="text-gray-600">
              This is a brief description of the post content.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Post Title 3</h3>
            <p className="text-gray-600">
              This is a brief description of the post content.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Post Title 4</h3>
            <p className="text-gray-600">
              This is a brief description of the post content.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-8">
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
