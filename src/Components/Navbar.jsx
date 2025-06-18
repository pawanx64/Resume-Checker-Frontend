import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Resume Score', path: '/Upload' },
    { name: 'About', path: '/About' },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  const handleLinkClick = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-14 md:h-16">
        <div className="flex items-center">
          <span
            onClick={() => handleLinkClick('/')}
            className="text-xl sm:text-2xl font-extrabold tracking-tight text-white hover:text-yellow-300 transition duration-300 cursor-pointer"
          >
            Resume<span className="text-yellow-300">Checker</span>
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {links.map((link) => (
            <span
              key={link.name}
              onClick={() => handleLinkClick(link.path)}
              className="relative text-base lg:text-lg font-medium text-white hover:text-yellow-300 transition duration-300 cursor-pointer
                         before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-yellow-300 before:transition-all
                         before:duration-300 hover:before:w-full"
            >
              {link.name}
            </span>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none p-3"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        ref={menuRef}
        className={`md:hidden bg-indigo-700 transition-all duration-300 ease-in-out overflow-hidden
                    ${menuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="flex flex-col px-4 py-2 space-y-2">
          {links.map((link) => (
            <span
              key={link.name}
              onClick={() => handleLinkClick(link.path)}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-600 hover:text-yellow-300 transition duration-300 cursor-pointer"
            >
              {link.name}
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
