import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null); // Ref for the mobile menu container

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Resume Score', path: '/Upload' },
    { name: 'About', path: '/About' },
  ];

  // Effect to handle clicks outside the mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the menu is open and the click is outside the menuRef element, close the menu
      if (menuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    // Add event listener when the menu is open
    // We only add it if menuOpen is true, and clean it up when menuOpen becomes false or component unmounts
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Optional: Add touchstart for better mobile responsiveness for tap outside
      document.addEventListener('touchstart', handleClickOutside);
    }

    // Clean up the event listeners
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      // Clean up touchstart listener too
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [menuOpen]); // Dependency array: re-run effect when menuOpen state changes

  const handleLinkClick = (path) => {
    navigate(path);
    setMenuOpen(false); // Close mobile menu after navigating
  };

  return (
    <>
      {/* Navbar container with responsive styling */}
      <nav className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-lg fixed w-full z-50
                      transition-colors duration-500 ease-in-out">
        {/* Adjusted padding for responsiveness: tighter on very small screens, expands on larger */}
        <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Logo/Brand Name */}
          <div className="flex items-center">
            <a
              onClick={() => handleLinkClick('/')}
              className="text-xl sm:text-2xl font-extrabold tracking-tight text-white hover:text-yellow-300 transition duration-300 cursor-pointer"
              aria-label="Go to Home page" // Added for accessibility
            >
              Resume<span className="text-yellow-300">Checker</span>
            </a>
          </div>

          {/* Desktop Links - hidden on small screens */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {links.map(link => (
              <a
                key={link.name}
                onClick={() => handleLinkClick(link.path)}
                className="relative text-base lg:text-lg font-medium text-white hover:text-yellow-300 transition duration-300
                           before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-yellow-300 before:transition-all before:duration-300
                           hover:before:w-full cursor-pointer"
                aria-label={`Maps to ${link.name} page`} // Added for accessibility
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button - shown only on small screens */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300 p-2 rounded-md"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} // Added for accessibility
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Links (conditionally rendered and animated) */}
        {/* The ref is attached here to detect clicks outside this div */}
        <div
          ref={menuRef}
          id="mobile-menu"
          className={`md:hidden bg-indigo-700 px-4 pt-2 pb-4 space-y-2
                      transition-all duration-300 ease-in-out overflow-hidden
                      ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
        >
          {links.map(link => (
            <a
              key={link.name}
              onClick={() => handleLinkClick(link.path)}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-600
                         hover:text-yellow-300 transition duration-300 cursor-pointer"
              aria-label={`Maps to ${link.name} page`} // Added for accessibility
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;