import React, { useState } from 'react';
import ReactLogo from '../assets/react.svg';

const Navbar = () => {
  const [open, setIsOpen] = useState(false);

  const toggleButton = () => {
    setIsOpen(!open);
  };

  return (
    <header className="bg-green-500 fixed top-0 left-0 w-full h-16 z-50 shadow-md">
      <div className="flex justify-between items-center px-4 py-3 md:px-8">
        {/* Logo */}
        <img src={ReactLogo} alt="Logo" className="w-12 h-12" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-white font-semibold text-lg">
          <a href="#" className="hover:text-yellow-300 transition-colors">Home</a>
          <a href="#" className="hover:text-yellow-300 transition-colors">About</a>
          <a href="#" className="hover:text-yellow-300 transition-colors">Meals</a>
          <a href="#" className="hover:text-yellow-300 transition-colors">Contact</a>
          <a href="#" className="hover:text-yellow-300 transition-colors">About Us</a>
        </nav>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={toggleButton}
            className="text-white text-3xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
  className='bg-green-400 w-3/4 fixed left-0 top-0 transition transform bg-opacity-5 z-30
  ${isopen? "translate-x-0": "translate-x-full"}'
>

{open && ( 
        <nav className="md:hidden bg-green-600">
          <ul className="flex flex-col items-center gap-4 py-4 text-white text-lg font-medium">
            <li><a href="#" className="hover:text-yellow-300">Home</a></li>
            <li><a href="#" className="hover:text-yellow-300">About</a></li>
            <li><a href="#" className="hover:text-yellow-300">Meals</a></li>
            <li><a href="#" className="hover:text-yellow-300">Contact</a></li>
            <li><a href="#" className="hover:text-yellow-300">About Us</a></li>
          </ul>
        </nav>
      )}

      </div>
          </header>
  );
};

export default Navbar;
