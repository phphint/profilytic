import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const UserAvatar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <div className="relative">
      <div className="cursor-pointer" onClick={toggleDropdown}>
        <Image
          src="/user-dashboard.svg"
          alt="User Avatar"
          width={33}
          height={33}
          priority
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
  );
};

export default UserAvatar;
