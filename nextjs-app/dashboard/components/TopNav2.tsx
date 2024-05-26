import React from 'react';
import Link from 'next/link';
import { FaPlus, FaBriefcase } from 'react-icons/fa'; // Import the plus and briefcase icons from react-icons

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 border-t border-[#838199] shadow-lg z-11" style={{ background: 'linear-gradient(to bottom, #3c3570, #282a5e)' }}>
      <div className="flex items-center space-x-4">
        <nav className="flex items-center text-[#e6e6e7]">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/dashboard" className="text-[#e6e6e7] font-semibold">
                CompanyName 
              </Link>
            </li>
            <li>
              <span className="text-[#e6e6e7]">-</span>
            </li>
            <li className="flex items-center">
              <FaBriefcase className="mr-1 text-[#e6e6e7]" />
              <span className="text-[#e6e6e7]">Roles</span>
            </li>
            <li className="flex items-center">
               <span className="text-[#e6e6e7]">/</span>
            </li>
            <li className="flex items-center">
               <span className="text-[#e6e6e7]"> Senior Full-stack Software Engineer</span>
            </li>
          </ol>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 text-[#e6e6e7]">
          <div className="flex items-center justify-center w-5 h-5 bg-[#e5deeb] rounded-full text-[#3c3570]">
            <FaPlus />
          </div>
          <span>Company</span>
        </div>
        <div className="flex items-center space-x-2 text-[#e6e6e7]">
          <div className="flex items-center justify-center w-5 h-5 bg-[#e5deeb] rounded-full text-[#3c3570]">
            <FaPlus />
          </div>
          <span>Role</span>
        </div>
        <button className="bg-[#ba7fdb] text-[#e5deeb] font-bold py-2 px-4 rounded-lg flex items-center space-x-2 transition duration-300">
          <div className="flex items-center justify-center w-5 h-5 bg-[#e5deeb] rounded-full text-[#ba7fdb]">
            <FaPlus />
          </div>
          <span>Candidates</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
