// components/StatusMonitor.js
import React from 'react';
import { FaCoins, FaSpinner, FaCheck } from 'react-icons/fa';
import Link from 'next/link';

const StatusMonitor = () => {
  return (
    <div className="w-1/5 p-4">
      <div className="bg-[#1c2438] text-[#a5a7b3] p-0 rounded-md shadow-2xl mt-4 border-t-4 border-l-4 border-[#2d3148]">
        <h2 className="text-lg font-bold mb-0 p-2">Status Monitor</h2>
        <hr className="border-t-4 border-[#14d0f1] mb-2 " />
        <div className="flex justify-between items-center p-2">
          <p className="font-bold">133 Tokens Remaining</p>
          <FaCoins className="text-[#b51dd9]" />
        </div>
        <div className="flex mb-4 pl-2">
          <button className="border border-[#c1228b] text-[#c1228b] font-bold py-1 px-3 rounded-lg transition duration-300">
            Add Tokens
          </button>
        </div>
        <hr className="border-t-2 border-[#2d3148] mb-2 ml-2 mr-2" />
        <div className="p-2">
          <div className="flex justify-between items-center mb-2">
            <p className="flex-grow">
              <FaSpinner className="animate-spin text-[#14d0f1] float-right ml-10" />
              CompanyName - Senior Full-stack Software Engineer
            </p>
          </div>
          <hr className="border-t-2 border-[#2d3148] mb-2" />
          <div className="flex justify-between items-center mb-2">
            <p className="flex-grow">
              <FaSpinner className="animate-spin text-[#14d0f1] float-right" />
              NamedCo - Data Scientist
            </p>
          </div>
          <hr className="border-t-2 border-[#2d3148] mb-2" />
          <div className="flex justify-between items-center mb-2">
            <p className="flex-grow">
              <FaCheck className="text-[#14d0f1] float-right" />
              <u>CompanyName Product Manager</u>
            </p>
          </div>
        </div>
        <div className="p-2">
        <hr className="border-t-2 border-[#2d3148] mb-2" />

          <Link href="/task-history" className="text-[#14d0f1] underline text-sm">
          View Task History 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StatusMonitor;
