import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import CompanyName from './CompanyName';
import { selectSelectedCompany } from '../../state/companySlice';
import { selectDashboard } from '../../state/dashboardState';
import { RootState } from '../../state/store';

const Breadcrumb = () => {
  const selectedCompany = useSelector(selectSelectedCompany);
  const companies = useSelector((state: RootState) => selectDashboard(state).companies);

  const currentCompany = companies.find(company => company.companyId === selectedCompany?.companyId);
  const roleCount = currentCompany?.roles.length || 0;
  const companyId = selectedCompany?.companyId;

  return (
    <nav className="flex items-center text-[#e6e6e7]">
      <ol className="flex items-center space-x-2">
        <li>
          <CompanyName />
        </li>
        <li>
          <span className="text-[#e6e6e7]">-</span>
        </li>
        <li className="flex items-center">
          {companyId && (
            <Link href={`/dashboard/company/${companyId}/jobs`} className="text-[#e6e6e7] underline">
             ({roleCount}) Roles 
            </Link>
          )}
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
