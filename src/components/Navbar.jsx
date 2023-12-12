// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed top-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <span>Your Logo</span>
        </div>
        <div className="flex space-x-4">
          <a href="#home" className="text-white hover:text-gray-300">Home</a>
          <a href="#about" className="text-white hover:text-gray-300">About</a>
          <a href="#expertise" className="text-white hover:text-gray-300">Expertise</a>
          <a href="#portfolio" className="text-white hover:text-gray-300">Portfolio</a>
          <a href="#gallery" className="text-white hover:text-gray-300">Gallery</a>
          <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
