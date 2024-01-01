import React from 'react';
import Logo from './logo-horz-light.svg'; // Adjust the path to your logo.svg file

const NavMenu = () => {
  return (
    <nav className="bg-[#35345c]">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo as a hyperlink */}
          <a href="/" className="mr-10">
            <img src={Logo} alt="Profilytic Logo" className="h-8" />
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="/" className="text-white hover:text-gray-300">Home</a>
          <a href="/features" className="text-white hover:text-gray-300">Features</a>
          <a href="/about" className="text-white hover:text-gray-300">About</a>
          <a href="/login" className="text-white hover:text-gray-300">Login</a>

          {/* Additional navigation items can be added here */}
        </div>
      </div>
    </nav>
  );
}

export default NavMenu;
