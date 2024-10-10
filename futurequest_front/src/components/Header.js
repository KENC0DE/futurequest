import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { useAuth } from "../AuthContext";
import { useOffers } from "../OffersContext";
import { ReactComponent as Logo } from "../images/logo.svg";

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
    setIsOpen2(false);
  };

  const freeToggle = () => {
    setIsOpen2(!isOpen2);
    setIsOpen1(false);
  };

  const paidWork = () => {
    // setParams({ type: "WORK", is_paid: true });
    setIsOpen1(false);
  };

  const freeWork = () => {
    // setParams({ type: "WORK", is_paid: false });
    setIsOpen2(false);
  };

  const paidEdu = () => {
    // setParams({ type: "EDUCATION", is_paid: true });
    setIsOpen1(false);
  };

  const freeEdu = () => {
    // setParams({ type: "EDUCATION", is_paid: false });
    setIsOpen2(false);
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
          {/* <Link to="/" className="text-blue-500 mr-4 flex">
            <span className="slt-btn flex items-center justify-center px-2 py-1 text-white bg-orange-600 hover:bg-red-700 rounded shadow transform skew[-20deg] transition-transform duration-300">
              Future
            </span>{" "}
            <span className="slt-btn flex items-center justify-center px-4 py-2 text-white bg-gray-800 hover:bg-gray-700 rounded shadow transform skew[-20deg] transition-transform duration-300">
              Quest
            </span>
          </Link> */}
          <div className="m-auto overflow-hidden h-12 w-80">
            <Link to="/" className="text-blue-500 mr-4 flex">
              <Logo className="h-full w-full" />
            </Link>
          </div>
        </div>
        <button
          tabIndex="-1"
          className={`fixed cursor-default h-full w-full inset-0
                  ${isOpen1 || isOpen2 ? "show" : "hidden"}`}
          onClick={() => {
            setIsOpen1(false);
            setIsOpen2(false);
          }}
        ></button>

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
              <button
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 0 4 4 4-4"
                  />
                </svg>
              </button>
              <ul
                className={`absolute bg-slate-50 p-2 rounded-lg mt-2 shadow-md z-20
                ${isOpen1 ? "show" : "hidden"}`}
              >
                <li>
                  <Link
                    to="/work?type=WORK&is_paid=true"
                    onClick={paidWork}
                    className="text-gray-600 hover:text-blue-500 px-4 py-2"
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    to="/education?type=EDUCATION&is_paid=true"
                    onClick={paidEdu}
                    className="text-gray-600 hover:text-blue-500 px-4 py-2"
                  >
                    Education
                  </Link>
                </li>
              </ul>
            </li>
            <li className="relative">
              <button
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 0 4 4 4-4"
                  />
                </svg>
              </button>
              <ul
                className={`absolute bg-slate-50 p-2 rounded-lg mt-2 shadow-md z-20
                ${isOpen2 ? "show" : "hidden"}`}
              >
                <li>
                  <Link
                    to="/work?type=WORK&is_paid=false"
                    onClick={freeWork}
                    className="text-gray-600 hover:text-blue-500 px-4 py-2"
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    to="/education?type=EDUCATION&is_paid=false"
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
                    onClick={() => {
                      setIsOpen1(false);
                      setIsOpen2(false);
                    }}
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
