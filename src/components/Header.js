import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold text-blue-700">EduTech</div>

        <nav className="hidden md:flex space-x-8 text-2xl">
          <Link
            to="/"
            className="text-blue-700 hover:text-blue-900 transition duration-300 text-lg font-medium"
          >
            Home
          </Link>
          <Link
            to="/courses"
            className="text-blue-700 hover:text-blue-900 transition duration-300 text-lg font-medium"
          >
            Courses
          </Link>
          <Link
            to="/about"
            className="text-blue-700 hover:text-blue-900 transition duration-300 text-lg font-medium"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-blue-700 hover:text-blue-900 transition duration-300 text-lg font-medium"
          >
            Contact
          </Link>
        </nav>

        {/* Authentication Buttons */}
        <div className="space-x-4">
          <Link to="/auth">
            <button className="bg-blue-700 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-800 transition duration-300">
              Login
            </button>
          </Link>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
