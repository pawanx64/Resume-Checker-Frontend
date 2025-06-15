import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Only Menu and X icons needed

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Resume Score', href: 'Upload' },
    { name: 'About', href: 'About' },
  ];

  return (
    // Navbar container with responsive styling (no dark mode classes)
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-lg fixed w-full z-50
                    transition-colors duration-500 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo/Brand Name */}
        <div className="flex items-center">
          <a href="/" className="text-2xl font-extrabold tracking-tight text-white hover:text-yellow-300 transition duration-300">
            Resume<span className="text-yellow-300">Checker</span>
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-lg font-medium text-white hover:text-yellow-300 transition duration-300
                         before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-yellow-300 before:transition-all before:duration-300
                         hover:before:w-full"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Links (conditionally rendered) */}
      {menuOpen && (
        <div id="mobile-menu" className="md:hidden bg-indigo-700 px-4 pt-2 pb-4 space-y-2
                                         transition-all duration-300 ease-in-out transform origin-top
                                         animate-slideDown">
          {links.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-600
                         hover:text-yellow-300 transition duration-300"
              onClick={() => setMenuOpen(false)} // Close menu on link click
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
