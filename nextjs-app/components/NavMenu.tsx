import React from 'react';
import Link from 'next/link'; // Import the Link component
import Logo from './logo-horz-light.svg'; // Adjust the path to your logo.svg file

const NavMenu = () => {
  return (
    <nav className="bg-[#35345c]">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo as a hyperlink using Link */}
          <Link href="/">
            <img src={Logo} alt="Profilytic Logo" className="h-8 mr-10 cursor-pointer" />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/"><span className="text-white hover:text-gray-300 cursor-pointer">Home</span></Link>
          <Link href="/features"><span className="text-white hover:text-gray-300 cursor-pointer">Features</span></Link>
          <Link href="/about"><span className="text-white hover:text-gray-300 cursor-pointer">About</span></Link>
          <Link href="/login"><span className="text-white hover:text-gray-300 cursor-pointer">Login</span></Link>

          {/* Additional navigation items can be added here */}
        </div>
      </div>
    </nav>
  );
}

export default NavMenu;
