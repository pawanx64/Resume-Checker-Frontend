import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Only Menu and X icons needed

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Resume Score', href: '/upload' },
    { name: 'About', href: '/about' },
  ];

  return (
    <>
      {/*
        Inline style tag for the animation keyframes.
        In a real-world project, this would typically be in your
        main CSS file (e.g., index.css or a dedicated CSS module).
      */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>

      {/* Navbar container with responsive styling */}
      <nav className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-lg fixed w-full z-50
                      transition-colors duration-500 ease-in-out">
        {/* Adjusted padding for responsiveness: tighter on very small screens, expands on larger */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Logo/Brand Name */}
          <div className="flex items-center">
            <a href="/" className="text-xl sm:text-2xl font-extrabold tracking-tight text-white hover:text-yellow-300 transition duration-300">
              Resume<span className="text-yellow-300">Checker</span>
            </a>
          </div>

          {/* Desktop Links - hidden on small screens */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8"> {/* Adjusted space-x for better spacing */}
            {links.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-base lg:text-lg font-medium text-white hover:text-yellow-300 transition duration-300
                           before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-yellow-300 before:transition-all before:duration-300
                           hover:before:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button - shown only on small screens */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300 p-2 rounded-md" // Added padding and rounded corners
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />} {/* Adjusted icon size */}
            </button>
          </div>
        </div>

        {/* Mobile Links (conditionally rendered and animated) */}
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
    </>
  );
};

export default Navbar;
