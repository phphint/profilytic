import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaQuestionCircle, FaLanguage, FaArchive } from 'react-icons/fa';
import SelectCompany from './SelectCompany';
import Messages from './Messages';
import UserAvatar from './UserAvatar';

const Header = () => {
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
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
            priority
          />
        </Link>
        <SelectCompany />
      </div>
      <div className="flex items-center space-x-6">
        <Link href="#" className="underline text-[#a32debff] transition duration-300">
          <FaArchive className="inline-block mr-1" /> Archive
        </Link>
        <Messages />
        <div className="relative">
          <div className="cursor-pointer" onClick={toggleLanguageDropdown}>
            <FaLanguage className="text-[#a32debff]" size={24} />
          </div>
          {languageDropdownOpen && (
            <div className="absolute mt-2 w-32 bg-white text-black rounded-md shadow-lg z-20" style={{ right: '0' }}>
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">English</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Español (Spanish)</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">हिन्दी (Hindi)</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">日本語 (Japanese)</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Deutsch (German)</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Français (French)</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">中文 (Mandarin Chinese)</li>
              </ul>
            </div>
          )}
        </div>
        <Link href="/support" className="text-[#a32debff] transition duration-300">
          <FaQuestionCircle className="text-[#a32debff]" />
        </Link>
        <UserAvatar />
      </div>
    </header>
  );
};

export default Header;
