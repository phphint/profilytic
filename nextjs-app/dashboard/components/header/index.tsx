// components/Header.js
import React from 'react';
import StatusMonitor from './StatusMonitor';
import WelcomeMessage from './WelcomeMessage';

const Header = () => {
  return (
    <header className="relative bg-cover bg-center" style={{ backgroundImage: 'url(/dashboard/header-bg.png)', height: '89vh' }}>
      <div className="absolute inset-0"></div> {/* Gradient Overlay */}
      <div className="relative z-10 mx-auto h-full flex items-start">
        <div className="flex w-full">
          <StatusMonitor />
          <WelcomeMessage />
        </div>
      </div>
    </header>
  );
};

export default Header;
