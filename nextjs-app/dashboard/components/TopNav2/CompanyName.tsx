// components/CompanyName.tsx
import React, { useEffect } from 'react';
import Link from 'next/link';
import { FaPencilAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { selectDashboard } from '../../state/dashboardState';
import { setSelectedCompany, selectSelectedCompany } from '../../state/companySlice';
import SelectCompany from '../TopNav/SelectCompany';

const CompanyName = () => {
  const dispatch = useDispatch();
  const { companies } = useSelector(selectDashboard);
  const selectedCompany = useSelector(selectSelectedCompany);

  useEffect(() => {
    if (companies.length > 0 && !selectedCompany) {
      dispatch(setSelectedCompany(companies[0]));
    }
  }, [companies, selectedCompany, dispatch]);

  return (
    <div className="flex items-center">
      <Link href="/dashboard" className="text-2xl text-[#e6e6e7] font-semibold flex items-center">
        {selectedCompany ? selectedCompany.name : 'Loading...'}
      </Link>
     
     </div>
  );
};

export default CompanyName;
