import React from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="dark:bg-gray-800 dark:text-white py-8 mt-8 bg-gray-300 w-full">
      <div className="footer-links flex-col text-center gap-8 mb-4">
        <p>Contact</p>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          <FaEnvelope className="inline-block mr-2" size={24} />
          <a
            href="mailto:team@questfuture.net"
            target="_blank"
            className="text-blue-600 dark:text-blue-400"
          >
            team@questfuture.net
          </a>
        </p>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          <FaWhatsapp className="inline-block mr-2" size={24} />
          <a
            href="https://wa.me/+917259182634"
            target="_blank"
            className="text-blue-600 dark:text-blue-400"
          >
            +91 72591 82634
          </a>
        </p>
      </div>
      <div className="copyright text-center text-sm mb-2">
        © 2024 Future Quest
      </div>
      <div className="powered-by text-center text-sm">
        Powered by Future Quest
      </div>
    </footer>
  );
}

export default Footer;
