import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'; // Social media icons

const Footer = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNavLinkClick = (path) => {
    navigate(path);
    // You might want to scroll to top or a specific section if these were section links
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">

          {/* Logo and Copyright */}
          <div className="flex-shrink-0 text-center md:text-left">
            <h3 className="text-2xl font-bold tracking-wide text-white">
              Resume<span className="text-yellow-300">Checker</span>
            </h3>
            <p className="mt-4 text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} ResumeChecker. All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h4 className="text-lg font-semibold text-white mb-2">Quick Links</h4>
            {/* Updated to use onClick with useNavigate for client-side routing */}
            <a onClick={() => handleNavLinkClick('/')} className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">Home</a>
            <a onClick={() => handleNavLinkClick('/Upload')} className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">Upload</a>
            <a onClick={() => handleNavLinkClick('/About')} className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">About Us</a>
            <a onClick={() => handleNavLinkClick('/Details')} className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">FAQs</a>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start space-y-3 text-center">
            <h4 className="text-lg font-semibold text-white mb-2">Contact Us</h4>
            <p className="text-gray-400">Email: info@resumechecker.com</p>
            <p className="text-gray-400">Phone: +1 (123) 456-7890</p>
            <p className="text-gray-400 ">Address: 123 Resume Lane, Job City, JC 12345</p>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {/* For external social links, keep href or use appropriate external link handlers */}
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-200" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors duration-200" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors duration-200" aria-label="Instagram">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
