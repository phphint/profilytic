import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { selectDashboard, fetchDashboardData } from '../../../../dashboard/state/dashboardState';
import { setSelectedCompany, selectSelectedCompany } from '../../../../dashboard/state/companySlice';
import { RootState } from '../../../../dashboard/state/store';
import RolesLayout from '../../../../dashboard/layouts/RolesLayout';
import withAuth from '../../../../dashboard/utils/withAuth';
import LoadingSpinner from '../../../../dashboard/components/common/LoadingSpinner';

const JobsPage = () => {
  const router = useRouter();
  const { companyId } = router.query;
  const dispatch = useDispatch();
  const { companies, loading, error } = useSelector((state: RootState) => selectDashboard(state));
  const selectedCompany = useSelector(selectSelectedCompany);

  useEffect(() => {
    dispatch(fetchDashboardData());
  }, [dispatch]);

  useEffect(() => {
    if (companies.length > 0 && companyId) {
      const company = companies.find((company) => company.companyId === companyId);
      if (company) {
        dispatch(setSelectedCompany(company));
      }
    }
  }, [companies, companyId, dispatch]);

  const handleEdit = (roleId) => {
    // Logic for editing a role
    console.log(`Edit role ${roleId}`);
  };

  const handleArchive = (roleId) => {
    // Logic for archiving a role
    console.log(`Archive role ${roleId}`);
  };

  if (loading) {
    return (
      <RolesLayout>
        <LoadingSpinner />
      </RolesLayout>
    );
  }

  if (error) {
    return (
      <RolesLayout>
        <p>Error loading jobs data: {typeof error === 'string' ? error : JSON.stringify(error)}</p>
      </RolesLayout>
    );
  }

  if (!selectedCompany) {
    return (
      <RolesLayout>
        <p>Company not found</p>
      </RolesLayout>
    );
  }

  return (
    <RolesLayout>
      <h1 className="text-2xl font-bold mb-4">Jobs for {selectedCompany.name}</h1>
      <table className="min-w-full bg-[#fffefe] border border-gray-300 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {selectedCompany.roles.map((role, index) => (
            <tr key={role.roleId} className={index % 2 === 0 ? 'bg-[#e6e5e7]' : 'bg-[#fffefe]'}>
              <td className="py-2 px-4 border-b">{role.title}</td>
              <td className="py-2 px-4 border-b">{role.status}</td>
              <td className="py-2 px-4 border-b flex space-x-2">
                <button
                  onClick={() => handleEdit(role.roleId)}
                  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleArchive(role.roleId)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Archive
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </RolesLayout>
  );
};

export default withAuth(JobsPage);
