// components/WelcomeMessage.js
import React from 'react';
import { FaMagic } from 'react-icons/fa';

const WelcomeMessage = () => {
  return (
    <div className="flex-1 p-8">
      <div className="text-[#cec4d5] p-6 rounded-lg">
        <h4 className="text-2xl font-bold mb-4 mt-10">Jason</h4>
        <h1 className="text-5xl font-bold mb-4">Welcomex to Your Dashboard!</h1>
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
  );
};

export default WelcomeMessage;
