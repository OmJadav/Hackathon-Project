import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Your Club</div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link to="#about" className="text-white hover:text-gray-200">
            About
          </Link>
          <Link to="#why-join" className="text-white hover:text-gray-200">
            Why Join
          </Link>
          <Link to="#events" className="text-white hover:text-gray-200">
            Events
          </Link>
          <Link to="#testimonials" className="text-white hover:text-gray-200">
            Testimonials
          </Link>
          <Link to="#how-to-join" className="text-white hover:text-gray-200">
            How to Join
          </Link>
          <Link to="#contact" className="text-white hover:text-gray-200">
            Contact
          </Link>
        </div>
        {/* Hamburger menu for mobile can be added here */}
      </div>
    </nav>
  );
};

export default Navbar;
