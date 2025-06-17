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
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    // Clean up the event listeners
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [menuOpen]);

  const handleLinkClick = (path) => {
    navigate(path);
    setMenuOpen(false); // Close mobile menu after navigating
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-lg fixed w-full z-50
                      transition-colors duration-500 ease-in-out">
        {/*
          Refined padding: px-4 for default (smallest screens), sm:px-6, lg:px-8
          Refined height: h-14 for default (smallest screens), md:h-16 for medium and up
          Ensures consistency and breathing room on all devices, especially very small ones.
        */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-14 md:h-16">
          {/* Logo/Brand Name */}
          <div className="flex items-center">
            <a
              onClick={() => handleLinkClick('/')}
              // Adjust logo font size for really small devices if needed, currently good.
              // text-xl (20px) is fine, but you could add xs:text-lg if you want it tiny on very small screens.
              className="text-xl sm:text-2xl font-extrabold tracking-tight text-white hover:text-yellow-300 transition duration-300 cursor-pointer"
              aria-label="Go to Home page"
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
                aria-label={`Maps to ${link.name} page`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button - shown only on small screens */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              // Increased padding slightly for larger touch target on small screens
              className="text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300 p-3 rounded-md"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Links (conditionally rendered and animated) */}
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
              aria-label={`Maps to ${link.name} page`}
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