import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { useAuth } from "../AuthContext";
import { useOffers } from "../OffersContext";

function Header() {
  const { user } = useAuth();
  const { setParams } = useOffers();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const paidToggle = () => {
    setIsOpen1(!isOpen1);
  };
  const freeToggle = () => {
    setIsOpen2(!isOpen2);
  };
  const paidWork = () => {
    setParams({ type: "WORK", is_paid: true });
  };
  const freeWork = () => {
    setParams({ type: "WORK", is_paid: false });
  };
  const paidEdu = () => {
    setParams({ type: "EDUCATION", is_paid: true });
  };
  const freeEdu = () => {
    setParams({ type: "EDUCATION", is_paid: false });
  };
  return (
    <header className="bg-white shadow fixed z-50 w-full">
      <nav className="flex justify-between items-center p-3">
        <div className="flex items-center">
          <div className="hidden md:flex space-x-2">
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-600 hover:text-blue-500"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-600 hover:text-blue-500"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-600 hover:text-blue-500"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="text-gray-600 hover:text-blue-500"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
        <div className="m-auto">
          <Link to="/" className="text-blue-500 mr-4 flex">
            <span className="slt-btn flex items-center justify-center px-2 py-1 text-white bg-orange-600 hover:bg-red-700 rounded shadow transform skew[-20deg] transition-transform duration-300">
              Future
            </span>{" "}
            <span className="slt-btn flex items-center justify-center px-4 py-2 text-white bg-gray-800 hover:bg-gray-700 rounded shadow transform skew[-20deg] transition-transform duration-300">
              Quest
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <div
          className={`flex-col md:flex md:flex-row ${
            isOpen ? "flex" : "hidden"
          } md:flex`}
        >
          <ul className="flex items-center space-x-4 gap-3">
            <li className="relative">
              <Link
                onClick={paidToggle}
                className="text-gray-600 hover:text-orange-500 relative flex"
              >
                Paid
                <svg
                  className="w-2.5 h-2.5 ms-3 text-orange-500 absolute -right-3 bottom-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 0 4 4 4-4"
                  />
                </svg>
              </Link>

              <ul
                className={`absolute bg-slate-50 p-2 rounded-lg mt-2 shadow-md
                ${isOpen1 ? "show" : "hidden"}`}
              >
                <li>
                  <Link
                    to="/work"
                    onClick={paidWork}
                    className="text-gray-600 hover:text-blue-500 px-4 py-2"
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    to="/education"
                    onClick={paidEdu}
                    className="text-gray-600 hover:text-blue-500 px-4 py-2"
                  >
                    Education
                  </Link>
                </li>
              </ul>
            </li>
            <li className="relative">
              <Link
                onClick={freeToggle}
                className="text-gray-600 hover:text-orange-500"
              >
                Free
                <svg
                  className="w-2.5 h-2.5 ms-3 text-orange-500 absolute -right-3 bottom-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 0 4 4 4-4"
                  />
                </svg>
              </Link>
              <ul
                className={`absolute bg-slate-50 p-2 rounded-lg mt-2 shadow-md
                ${isOpen2 ? "show" : "hidden"}`}
              >
                <li>
                  <Link
                    to="/work"
                    onClick={freeWork}
                    className="text-gray-600 hover:text-blue-500 px-4 py-2"
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    to="/education"
                    onClick={freeEdu}
                    className="text-gray-600 hover:text-blue-500 px-4 py-2"
                  >
                    Education
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="text-gray-600 hover:text-orange-500">
                Resource
              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link
                    to="/profile"
                    className="text-gray-600 hover:text-blue-500"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/logout"
                    className="slant-button flex ml-4 items-center justify-center px-2 py-1.5 
                    text-white bg-orange-600 hover:bg-red-700 rounded shadow transform 
                    skew[-20deg] transition-transform duration-300"
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    className="slant-button flex ml-4 items-center justify-center 
                    px-2 py-1.5 text-white bg-orange-600 hover:bg-red-700 
                    rounded shadow transform skew[-20deg] transition-transform duration-300"
                  >
                    Sign In/Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
