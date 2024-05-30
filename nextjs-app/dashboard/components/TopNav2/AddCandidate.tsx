import React from 'react';
import { FaPlus } from 'react-icons/fa';

const AddCandidate = () => {
  return (
    <button className="bg-[#ba7fdb] text-[#e5deeb] font-bold py-2 px-4 rounded-lg flex items-center space-x-2 transition duration-300">
      <div className="flex items-center justify-center w-5 h-5 bg-[#e5deeb] rounded-full text-[#ba7fdb]">
        <FaPlus />
      </div>
      <span>Candidates</span>
    </button>
  );
};

export default AddCandidate;
