import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-8">
      <div className="flex justify-center gap-8 mb-4">
        <a href="#contact" className="hover:underline">Contact</a>
        <a href="#privacy" className="hover:underline">Privacy Policy</a>
        <a href="#terms" className="hover:underline">Terms of Service</a>
        <a href="#faq" className="hover:underline">Returns & FAQ</a>
      </div>
      <div className="text-center text-sm mb-2">© 2024 Your Brand</div>
      <div className="text-center text-sm">Powered by Your Platform</div>
    </footer>
  );
}

export default Footer;
