import React, { ReactNode } from 'react';
import TopNav from '../components/TopNav';
import TopNav2 from '../components/TopNav2';
import Header from '../components/header';


  
interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="dashboard-layout ">
      <TopNav />
      <TopNav2 />
      <Header />
    
        <main className="main-content bg-[#202638]">
          {children}
        </main>
  
     </div>
  );
};

export default DashboardLayout;
