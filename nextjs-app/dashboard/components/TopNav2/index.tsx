import React from 'react';
import Breadcrumb from './Breadcrumb';
import AddCompany from './AddCompany';
import AddRole from './AddRole';
import AddCandidate from './AddCandidate';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 border-t border-[#838199] shadow-lg z-12" style={{ background: 'linear-gradient(to bottom, #3c3570, #282a5e)' }}>
      <div className="flex items-center space-x-4">
        <Breadcrumb />
      </div>
      <div className="flex items-center space-x-4">
        <AddCompany />
        <AddRole />
        <AddCandidate />
      </div>
    </header>
  );
};

export default Header;
