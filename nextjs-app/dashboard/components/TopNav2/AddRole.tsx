import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { FaPlus } from 'react-icons/fa';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDashboardData, selectDashboard } from '../../state/dashboardState';
import { selectSelectedCompany } from '../../state/companySlice';
import 'react-quill/dist/quill.snow.css';

import dynamic from 'next/dynamic';

// Import React Quill dynamically
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const customStyles = {
  content: {
    zIndex: 1000,
    background: 'white',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '800px',
    margin: 'auto',
    marginTop: '10vh',
    maxHeight: '90vh',
    overflowY: 'auto',
    position: 'relative',
    top: '10%',
    transform: 'translateY(-10%)',
  },
  overlay: {
    zIndex: 999,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '@media (max-width: 768px)': {
    content: {
      maxWidth: '90vw',
      marginTop: '5vh',
      top: '5%',
      transform: 'translateY(-5%)',
    },
  },
};

const importanceLevels = ['Not Important', 'Somewhat Important', 'Important', 'Very Important'];

const AddRole: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { companies } = useSelector(selectDashboard);
  const selectedCompany = useSelector(selectSelectedCompany);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    companyId: selectedCompany?.companyId || '',
    lengthOfExperience: 'Not Important',
    relevantExperience: 'Not Important',
    relevantDegreeObtained: 'Not Important',
    matchingSkills: 'Not Important',
    relevantCertificationsAndTraining: 'Not Important',
    leadershipRoles: 'Not Important',
    lengthOfTenureAtPreviousJobs: 'Not Important',
    status: 'Open',
  });
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (selectedCompany) {
      setFormData((prevData) => ({
        ...prevData,
        companyId: selectedCompany.companyId,
      }));
    }
  }, [selectedCompany]);

  const openModal = () => {
    setFormData({
      title: '',
      description: '',
      companyId: selectedCompany?.companyId || '',
      lengthOfExperience: 'Not Important',
      relevantExperience: 'Not Important',
      relevantDegreeObtained: 'Not Important',
      matchingSkills: 'Not Important',
      relevantCertificationsAndTraining: 'Not Important',
      leadershipRoles: 'Not Important',
      lengthOfTenureAtPreviousJobs: 'Not Important',
      status: 'Open',
    });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setErrorMessage('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDescriptionChange = (value: string) => {
    setFormData({ ...formData, description: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      setErrorMessage('User is not authenticated');
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/jobs`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('Role added:', response.data);
      dispatch(fetchDashboardData());
      closeModal();
    } catch (error) {
      console.error('Error adding role:', error);
      setErrorMessage('Error adding role. Please try again.');
    }
  };

  return (
    <div>
      <div className="flex items-center space-x-2 text-[#e6e6e7]" onClick={openModal}>
        <div className="flex items-center justify-center w-5 h-5 bg-[#e5deeb] rounded-full text-[#3c3570]">
          <FaPlus />
        </div>
        <span className="underline cursor-pointer">Role</span>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add Role Modal"
      >
        <h2 className="text-2xl font-bold">Add New Role</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="w-full p-2 mt-2 border rounded"
            />
            <label htmlFor="description" className="mt-4 block">Description</label>
            <ReactQuill
              value={formData.description}
              onChange={handleDescriptionChange}
              className="w-full mt-2 h-40 mb-20 rounded"
            />
            <label htmlFor="companyId" className="mt-4 block">Company</label>
            <select
              id="companyId"
              name="companyId"
              value={formData.companyId}
              onChange={handleInputChange}
              className="w-full p-2 mt-2 border rounded"
              required
            >
              {companies.map((company) => (
                <option key={company.companyId} value={company.companyId}>
                  {company.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mt-4">Importance Levels</h3>
            {[
              'lengthOfExperience',
              'relevantExperience',
              'relevantDegreeObtained',
              'matchingSkills',
              'relevantCertificationsAndTraining',
              'leadershipRoles',
              'lengthOfTenureAtPreviousJobs',
            ].map((field) => (
              <div key={field} className="mb-4">
                <label htmlFor={field}>{field.replace(/([A-Z])/g, ' $1')}</label>
                <select
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  className="w-full p-2 mt-2 border rounded"
                >
                  {importanceLevels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
          {errorMessage && <p className="text-red-500 md:col-span-2">{errorMessage}</p>}
          <div className="mt-4 flex justify-end md:col-span-2">
            <button type="button" onClick={closeModal} className="mr-4 px-4 py-2 bg-gray-200 rounded">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-[#df00f0] text-white rounded">
              Add Role
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddRole;
