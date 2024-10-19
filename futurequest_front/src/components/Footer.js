import React from "react";

function Footer() {
  return (
    <footer className="dark:bg-gray-800 dark:text-white py-8 mt-8 bg-gray-300 w-full">
      <div className="footer-links flex justify-center gap-8 mb-4">
        <a href="#contact" className="hover:underline">
          Contact
        </a>
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
