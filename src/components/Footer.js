import React from "react";

function Footer() {
  return (
    <footer className="dark:bg-gray-800 dark:text-white py-8 mt-8 bg-gray-300 w-full">
      <div className="footer-links flex-col text-center gap-8 mb-4">
        <p>
          Contact
        </p>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          Email:{" "}
          <a
            href="mailto:team@questfuture.net"
            className="text-blue-600 dark:text-blue-400"
          >
            team@questfuture.net
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
