import { useEffect, useState } from 'react';
import DashboardLayout from '../../dashboard/layouts/DashboardLayout';
import withAuth from '../../dashboard/utils/withAuth';

const DashboardPage = () => {
  // Your dashboard page content

  return (
    
    <DashboardLayout>
    <h1>Dashboard</h1>
    {/* Your dashboard content */}
  </DashboardLayout>
   );
};

export default withAuth(DashboardPage);
