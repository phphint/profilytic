import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from './logo-horz-light.svg';

const NavMenu = () => {
  const router = useRouter();

  const isActive = (path) => router.pathname === path;

  return (
    <nav className="bg-[#35345c]">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <img src={Logo} alt="Profilytic Logo" className="h-8 mr-10 cursor-pointer" />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/"><span className={`text-white hover:text-gray-300 cursor-pointer ${isActive('/') ? 'underline' : ''}`}>Home</span></Link>
          <Link href="/features"><span className={`text-white hover:text-gray-300 cursor-pointer ${isActive('/features') ? 'underline' : ''}`}>Features</span></Link>
          <Link href="/features/our-technology"><span className={`text-white hover:text-gray-300 cursor-pointer ${isActive('/features/our-technology') ? 'underline' : ''}`}>Our Technology</span></Link>
          <Link href="/pricing"><span className={`text-white hover:text-gray-300 cursor-pointer ${isActive('/pricing') ? 'underline' : ''}`}>Pricing</span></Link>
          <Link href="/about"><span className={`text-white hover:text-gray-300 cursor-pointer ${isActive('/about') ? 'underline' : ''}`}>About</span></Link>
          <Link href="/login"><span className={`text-white hover:text-gray-300 cursor-pointer ${isActive('/login') ? 'underline' : ''}`}>Login</span></Link>
        </div>
      </div>
    </nav>
  );
}

export default NavMenu;
