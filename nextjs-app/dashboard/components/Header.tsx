// components/Header.js
import React from 'react';
import { FaCoins, FaSpinner, FaMagic } from 'react-icons/fa'; // Import the necessary icons from react-icons

const Header = () => {
  return (
    <header className="relative bg-cover bg-center" style={{ backgroundImage: 'url(/dashboard/header-bg.png)', height: '89vh' }}>
      <div className="absolute inset-0 "></div> {/* Gradient Overlay */}
      <div className="relative z-10 mx-auto h-full flex items-start">
        <div className="flex w-full">
          {/* Left Column */}
          <div className="w-1/5 p-4">
            <div className="bg-[#1c2438] text-[#a5a7b3] p-0 rounded-md shadow-2xl mt-4 border-t-4 border-l-4 border-[#2d3148]">
              <h2 className="text-lg font-bold mb-0 p-2">Tokens</h2>
              <hr className="border-t-4 border-[#14d0f1] mb-2" />
              <div className="flex justify-between items-center p-2">
                <p className="font-bold">133 Tokens Remaining</p>
                <FaCoins className="text-[#b51dd9]" />
              </div>
              <div className="flex mb-4 pl-2">
                <button className="border border-[#c1228b] text-[#c1228b] font-bold py-1 px-3 rounded-lg transition duration-300">Add Tokens</button>
              </div>
              <hr className="border-t-2 border-[#2d3148] mb-2" />
              <div className="p-2">
                <div className="flex justify-between items-center mb-2">
                  <p>Processing Senior Full-stack Software Engineer</p>
                  <FaSpinner className="animate-spin text-[#14d0f1]" />
                </div>
                <hr className="border-t-2 border-[#2d3148] mb-2" />
                <div className="flex justify-between items-center mb-2">
                  <p>Processing Data Scientist</p>
                  <FaSpinner className="animate-spin text-[#14d0f1]" />
                </div>
                <hr className="border-t-2 border-[#2d3148] mb-2" />
                <div className="flex justify-between items-center mb-2">
                  <p>Processing Product Manager</p>
                  <FaSpinner className="animate-spin text-[#14d0f1]" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="flex-1 p-8">
            <div className=" text-[#cec4d5] p-6 rounded-lg  ">
              <h4 className="text-xl font-bold mb-4 mt-10">Jason</h4>
              <h1 className="text-5xl font-bold mb-4">Welcome to Your Dashboard!</h1>
              <p className="text-lg mb-6 bg-[#2e1e62] bg-opacity-70 p-4 rounded border-l-4 border-[#26b3eb]">
  Getting started with our resume processing wizard is quick and easy. 
  Click the "Start Wizard" button below to begin uploading and analyzing 
  your candidates' resumes in just a few simple steps.
</p>

<button className="bg-[#fe0988] text-[#fff] font-bold py-2 px-4 rounded-lg transition duration-300 text-xl flex items-center space-x-2">
  <FaMagic />
  <span>Start Wizard</span>
</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
