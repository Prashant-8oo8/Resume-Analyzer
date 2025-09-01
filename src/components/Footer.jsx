import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Resume Analyzer</h3>
            <p className="text-sm">
              Making the web more beautiful, fast, and open through great design and technology.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-white transition">About</a></li>
              <li><a href="/" className="hover:text-white transition">Home</a></li>
             
              <li><a href="/help" className="hover:text-white transition">Help</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-white transition">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-white transition">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-white transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
