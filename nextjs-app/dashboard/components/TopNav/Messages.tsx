import React from 'react';
import Link from 'next/link';
import { FaEnvelope } from 'react-icons/fa';

const Messages = () => {
  return (
    <div className="relative">
      <Link href="#" className="text-[#a32debff] transition duration-300 relative">
        <FaEnvelope className="text-[#a32debff]" />
        <span className="absolute -top-2 -right-2 bg-[#fc0384] text-white text-xs rounded-full px-1">5</span>
      </Link>
    </div>
  );
};

export default Messages;
