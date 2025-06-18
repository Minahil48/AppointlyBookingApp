import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Appointly</h2>
          <p className="text-sm mb-4">
            Discover unique stays, handpicked for comfort, style, and unforgettable experiences.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-yellow-400 text-xl">
              <i className="ri-facebook-fill"></i>
            </a>
            <a href="#" className="hover:text-yellow-400 text-xl">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="#" className="hover:text-yellow-400 text-xl">
              <i className="ri-twitter-x-line"></i>
            </a>
            <a href="#" className="hover:text-yellow-400 text-xl">
              <i className="ri-linkedin-fill"></i>
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="/listings" className="hover:text-yellow-400">Listings</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
            <li><Link to="/login" className="hover:text-yellow-400">Login</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <i className="ri-map-pin-line text-yellow-400 mt-1"></i>
              123 Appointly Avenue, Downtown, NY 10001
            </li>
            <li className="flex items-center gap-2">
              <i className="ri-mail-line text-yellow-400"></i>
              support@appointly.com
            </li>
            <li className="flex items-center gap-2">
              <i className="ri-phone-line text-yellow-400"></i>
              +1 (800) 123‑4567
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
          <p className="text-sm mb-4">Subscribe to our newsletter for exclusive deals & travel inspiration.</p>
          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-md hover:bg-yellow-500 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Appointly. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
