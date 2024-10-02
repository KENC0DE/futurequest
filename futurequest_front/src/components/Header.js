import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { useAuth } from "../AuthContext";

function Header() {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow">
      <nav className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <Link to="/" className="text-blue-500 mr-4">
            Future Quest
          </Link>
          <div className="hidden md:flex space-x-2">
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-600 hover:text-blue-500"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-600 hover:text-blue-500"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-600 hover:text-blue-500"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="text-gray-600 hover:text-blue-500"
            >
              <FaYoutube />
            </a>
          </div>
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
          <ul className="flex items-center space-x-4">
            <li>
              <Link to="/offers" className="text-gray-600 hover:text-blue-500">
                Offers
              </Link>
            </li>
            <li>
              <Link to="/free" className="text-gray-600 hover:text-blue-500">
                Free
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
                    className="text-gray-600 hover:text-blue-500"
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
                    className="text-gray-600 hover:text-blue-500"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="text-gray-600 hover:text-blue-500"
                  >
                    Register
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
