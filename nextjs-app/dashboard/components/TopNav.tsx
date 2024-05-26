import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FaEnvelope } from 'react-icons/fa';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const router = useRouter();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleCompanyDropdown = () => {
    setCompanyDropdownOpen(!companyDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <header className="flex justify-between items-center p-4 border-b border-[#b7b5c4]" style={{ backgroundColor: '#fefefe' }}>
      <div className="flex items-center">
        <Link href="/dashboard">
        
            <Image
              src="/logo-dark-dashboard.svg"
              alt="Profilytic Logo"
              width={150}
              height={40}
            />
         
        </Link>
        <div className="relative ml-4">
          <button
            onClick={toggleCompanyDropdown}
            className="border border-[#aab6cb] text-black py-1 px-2 rounded focus:outline-none"
          >
            Select Company
          </button>
          {companyDropdownOpen && (
            <div className="absolute mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Company 1</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Company 2</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Company 3</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center space-x-6">

 
     
        <Link href="#" className="text-[#a32debff] hover:border-b-2 hover:border-[#c5b7cc] transition duration-300">
       Closed Roles 
        </Link>
   
       
        <div className="relative">
          <Link href="#" className="text-[#a32debff] hover:border-b-2 hover:border-[#c5b7cc] transition duration-300 relative">
       
              <FaEnvelope className="text-[#a32debff]" />
              <span className="absolute -top-2 -right-2 bg-[#fc0384] text-white text-xs rounded-full px-1">5</span>
          
          </Link>
        </div>
        <div className="relative">
          <div className="cursor-pointer" onClick={toggleDropdown}>
            <Image
              src="/user-dashboard.svg"
              alt="User Avatar"
              width={33}
              height={33}
              className="rounded-full"
            />
          </div>
          {dropdownOpen && (
            <div className="absolute mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10" style={{ right: '0' }}>
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <button onClick={handleLogout} className="w-full text-left">Logout</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
