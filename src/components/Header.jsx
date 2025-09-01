import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-white via-blue-50 to-white shadow-md backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          
          <span className="text-xl font-bold text-blue-700 tracking-wide">ResumeAnalyzer</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-10 text-gray-700 font-medium text-sm">
          <Link to="/" className="hover:text-blue-600 transition-all duration-200">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-600 transition-all duration-200">
            About
          </Link>
          <Link to="/help" className="hover:text-blue-600 transition-all duration-200">
            Help
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-4">

          <Link
            to="/analyzer"
            className="bg-blue-600 text-white px-5 py-2 text-sm font-semibold rounded-full shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-200"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-6 pb-6 bg-white shadow-md rounded-b-md">
          <div className="flex flex-col space-y-4 text-sm text-gray-700 font-medium">
            <Link to="/" className="hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/about" className="hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/help" className="hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          
            <Link
              to="/analyzer"
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all duration-200 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
