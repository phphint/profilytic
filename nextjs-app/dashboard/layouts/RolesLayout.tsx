import React, { ReactNode } from 'react';
import TopNav from '../components/TopNav';
import TopNav2 from '../components/TopNav2';
import StatusMonitor from '../components/header/StatusMonitor';

interface RolesLayoutProps {
  children: ReactNode;
}

const RolesLayout: React.FC<RolesLayoutProps> = ({ children }) => {
  return (
    <div className="dashboard-layout min-h-screen" style={{ backgroundColor: '#1b2337', height: '100vh' }}>
      <TopNav />
      <TopNav2 />
      <div className="relative z-10 mx-auto flex" >
        <div className="flex w-full">
         
            <StatusMonitor />
        
          <main className="flex-1 p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default RolesLayout;
