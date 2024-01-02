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
            <a className="mr-10">
              <img src={Logo} alt="Profilytic Logo" className="h-8" />
            </a>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/"><a className="text-white hover:text-gray-300">Home</a></Link>
          <Link href="/features"><a className="text-white hover:text-gray-300">Features</a></Link>
          <Link href="/about"><a className="text-white hover:text-gray-300">About</a></Link>
          <Link href="/login"><a className="text-white hover:text-gray-300">Login</a></Link>

          {/* Additional navigation items can be added here */}
        </div>
      </div>
    </nav>
  );
}

export default NavMenu;
