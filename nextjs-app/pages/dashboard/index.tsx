import React from 'react';
import DashboardLayout from '../../dashboard/layouts/DashboardLayout';
import withAuth from '../../dashboard/utils/withAuth';
import { useDashboard } from '../../dashboard/hooks/useDashboard';
import LoadingSpinner from '../../dashboard/components/common/LoadingSpinner';

const DashboardPage = () => {
  const { companies, loading, error } = useDashboard();

  if (loading) {
    return (
      <DashboardLayout>
        <LoadingSpinner />
      </DashboardLayout>
    );
  }

  if (error) {
    return (
      <DashboardLayout>
        <p>Error loading dashboard data: {typeof error === 'string' ? error : JSON.stringify(error)}</p>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <h1>Dashboard</h1>
      <ul>
        {companies.map((company) => (
          <li key={company.companyId}>
            {company.name}
            <ul>
              {company.roles.map((role) => (
                <li key={role.roleId}>{role.title}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </DashboardLayout>
  );
};

export default withAuth(DashboardPage);
