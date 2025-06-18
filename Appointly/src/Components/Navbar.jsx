import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/location.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Listings", path: "/listings" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/login" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-16 lg:px-24 py-4 flex justify-between items-center ${isScrolled ? "bg-white shadow-md text-gray-700" : "bg-white text-gray-800"}`}>
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="logo" className="h-9" />
        <span className="font-bold text-xl text-blue-800">Appointly</span>
      </Link>
      <div className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <Link key={link.name} to={link.path} className="hover:text-yellow-500">
            {link.name}
          </Link>
        ))}
      </div>
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
        <i className="ri-menu-line text-2xl"></i>
      </button>
    </nav>
  );
};

export default Navbar;
