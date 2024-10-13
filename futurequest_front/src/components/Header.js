import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaSun,
  FaMoon,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useAuth } from "../AuthContext";
import { useOffers } from "../OffersContext";
import { ReactComponent as Logo } from "../images/logo.svg";
import Logo3 from "../images/logo3.png";

function Header() {
  const { user } = useAuth();
  const { setParams, darkMode, setDarkMode } = useOffers();
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);
  }, [setDarkMode]);

  const paidToggle = () => {
    setIsOpen1(!isOpen1);
    setIsOpen2(false);
  };

  const freeToggle = () => {
    setIsOpen2(!isOpen2);
    setIsOpen1(false);
  };

  const closeDropdowns = () => {
    setIsOpen1(false);
    setIsOpen2(false);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    closeDropdowns();
  };

  return (
    <header className="sticky top-0 z-20 h-14 w-full p-3 bg-transparent dark:bg-transparent">
      <nav className="flex items-center justify-between p-3 h-full">
        {/* Left Section: Dark Mode Toggle and Social Media Icons */}
        <div className="flex items-center">
          <button
            tabIndex="-1"
            className={`fixed cursor-default h-full w-full inset-0
                  ${isOpen1 || isOpen2 ? "show" : "hidden"}`}
            onClick={() => {
              setIsOpen1(false);
              setIsOpen2(false);
            }}
          ></button>
          <button
            onClick={toggleDarkMode}
            className="text-white text-center bg-slate-900 dark:text-orange-400
             dark:bg-white focus:outline-none rounded-full p-3 mr-4 transition duration-500"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          {/* Social Media Icons */}
          <div className="hidden md:flex space-x-2">
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-600 dark:text-white hover:text-orange-500 dark:hover:text-orange-500"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-600 dark:text-white hover:text-orange-500 dark:hover:text-orange-500"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-600 dark:text-white hover:text-orange-500 dark:hover:text-orange-500"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="text-gray-600 dark:text-white hover:text-orange-500 dark:hover:text-orange-500"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
        {/* Center Section: Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/" className="flex items-center">
            <img src={Logo3} alt="Future Quest Logo" className="w-24 p-3" />
          </Link>
        </div>
        {/* Right Section: Menu and Navigation Links */}
        <div className="flex items-center">
          {/* Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 dark:text-gray-300 hover:text-orange-500 focus:outline-none"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <ul className="flex items-center space-x-4">
              <li className="relative">
                <button
                  onClick={paidToggle}
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-orange-500 focus:outline-none"
                >
                  Paid
                  <svg
                    className="w-2.5 h-2.5 ml-1 text-orange-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 0 4 4 4-4"
                    />
                  </svg>
                </button>
                <ul
                  className={`absolute bg-slate-50 dark:bg-gray-700 p-2 rounded-lg mt-2 shadow-md z-20 w-40
                      ${isOpen1 ? "block" : "hidden"}`}
                >
                  <li>
                    <Link
                      to="/work?type=WORK&is_paid=true"
                      onClick={closeDropdowns}
                      className="block text-gray-600 dark:text-gray-300 hover:text-blue-500 px-4 py-2"
                    >
                      Work
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/education?type=EDUCATION&is_paid=true"
                      onClick={closeDropdowns}
                      className="block text-gray-600 dark:text-gray-300 hover:text-blue-500 px-4 py-2"
                    >
                      Education
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="relative">
                <button
                  onClick={freeToggle}
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-orange-500 focus:outline-none"
                >
                  Free
                  <svg
                    className="w-2.5 h-2.5 ml-1 text-orange-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 0 4 4 4-4"
                    />
                  </svg>
                </button>
                <ul
                  className={`absolute bg-slate-50 dark:bg-gray-700 p-2 rounded-lg mt-2 shadow-md z-20 w-40
                      ${isOpen2 ? "block" : "hidden"}`}
                >
                  <li>
                    <Link
                      to="/work?type=WORK&is_paid=false"
                      onClick={closeDropdowns}
                      className="block text-gray-600 dark:text-gray-300 hover:text-blue-500 px-4 py-2"
                    >
                      Work
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/education?type=EDUCATION&is_paid=false"
                      onClick={closeDropdowns}
                      className="block text-gray-600 dark:text-gray-300 hover:text-blue-500 px-4 py-2"
                    >
                      Education
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="/resource"
                  onClick={closeDropdowns}
                  className="text-gray-600 dark:text-gray-300 hover:text-orange-500"
                >
                  Resource
                </Link>
              </li>
              {user ? (
                <>
                  <li>
                    <Link
                      to="/profile"
                      onClick={closeDropdowns}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about-us"
                      onClick={closeDropdowns}
                      className="text-gray-600 dark:text-gray-300 hover:text-orange-500"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/logout"
                      onClick={closeDropdowns}
                      className="slant-button flex items-center justify-center px-4 py-2
                            text-white bg-orange-600 hover:bg-orange-700 rounded shadow transform
                            skew-x-[-20deg] transition-transform duration-300"
                    >
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to="/about-us"
                      onClick={closeDropdowns}
                      className="text-gray-600 dark:text-gray-300 hover:text-orange-500"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/login"
                      onClick={closeDropdowns}
                      className="slant-button flex items-center justify-center px-4 py-2
                            text-white bg-orange-600 hover:bg-orange-700 rounded shadow transform
                            skew-x-[-20deg] transition-transform duration-300"
                    >
                      Sign In/Up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-800 md:hidden">
          <ul className="flex flex-col items-center p-4 space-y-4 w-full">
            <li className="relative w-full">
              <button
                onClick={paidToggle}
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-orange-500 focus:outline-none"
              >
                Paid
                <svg
                  className="w-2.5 h-2.5 ml-1 text-orange-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 0 4 4 4-4"
                  />
                </svg>
              </button>
              {isOpen1 && (
                <ul className="bg-slate-50 dark:bg-gray-700 p-2 rounded-lg mt-2 shadow-md w-full">
                  <li>
                    <Link
                      to="/work?type=WORK&is_paid=true"
                      onClick={() => {
                        closeDropdowns();
                        setIsMobileMenuOpen(false);
                      }}
                      className="block text-gray-600 dark:text-gray-300 hover:text-blue-500 px-4 py-2"
                    >
                      Work
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/education?type=EDUCATION&is_paid=true"
                      onClick={() => {
                        closeDropdowns();
                        setIsMobileMenuOpen(false);
                      }}
                      className="block text-gray-600 dark:text-gray-300 hover:text-blue-500 px-4 py-2"
                    >
                      Education
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="relative w-full">
              <button
                onClick={freeToggle}
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-orange-500 focus:outline-none"
              >
                Free
                <svg
                  className="w-2.5 h-2.5 ml-1 text-orange-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 0 4 4 4-4"
                  />
                </svg>
              </button>
              {isOpen2 && (
                <ul className="bg-slate-50 dark:bg-gray-700 p-2 rounded-lg mt-2 shadow-md w-full">
                  <li>
                    <Link
                      to="/work?type=WORK&is_paid=false"
                      onClick={() => {
                        closeDropdowns();
                        setIsMobileMenuOpen(false);
                      }}
                      className="block text-gray-600 dark:text-gray-300 hover:text-blue-500 px-4 py-2"
                    >
                      Work
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/education?type=EDUCATION&is_paid=false"
                      onClick={() => {
                        closeDropdowns();
                        setIsMobileMenuOpen(false);
                      }}
                      className="block text-gray-600 dark:text-gray-300 hover:text-blue-500 px-4 py-2"
                    >
                      Education
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="w-full">
              <Link
                to="/resource"
                onClick={() => {
                  closeDropdowns();
                  setIsMobileMenuOpen(false);
                }}
                className="text-gray-600 dark:text-gray-300 hover:text-orange-500"
              >
                Resource
              </Link>
            </li>
            {user ? (
              <>
                <li className="w-full">
                  <Link
                    to="/profile"
                    onClick={() => {
                      closeDropdowns();
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
                  >
                    Profile
                  </Link>
                </li>
                <li className="w-full">
                  <Link
                    to="/about-us"
                    onClick={() => {
                      closeDropdowns();
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-gray-600 dark:text-gray-300 hover:text-orange-500"
                  >
                    About Us
                  </Link>
                </li>
                <li className="w-full">
                  <Link
                    to="/logout"
                    onClick={() => {
                      closeDropdowns();
                      setIsMobileMenuOpen(false);
                    }}
                    className="slant-button flex items-center justify-center px-4 py-2
                          text-white bg-orange-600 hover:bg-orange-700 rounded shadow transform
                          skew-x-[-20deg] transition-transform duration-300"
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="w-full">
                  <Link
                    to="/about-us"
                    onClick={() => {
                      closeDropdowns();
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-gray-600 dark:text-gray-300 hover:text-orange-500"
                  >
                    About Us
                  </Link>
                </li>
                <li className="w-full">
                  <Link
                    to="/login"
                    onClick={() => {
                      closeDropdowns();
                      setIsMobileMenuOpen(false);
                    }}
                    className="slant-button flex items-center justify-center px-4 py-2
                          text-white bg-orange-600 hover:bg-orange-700 rounded shadow transform
                          skew-x-[-20deg] transition-transform duration-300"
                  >
                    Sign In/Up
                  </Link>
                </li>
              </>
            )}
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4 w-full justify-center">
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-600 dark:text-white hover:text-orange-500 dark:hover:text-orange-500"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-600 dark:text-white hover:text-orange-500 dark:hover:text-orange-500"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-600 dark:text-white hover:text-orange-500 dark:hover:text-orange-500"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-gray-600 dark:text-white hover:text-orange-500 dark:hover:text-orange-500"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
