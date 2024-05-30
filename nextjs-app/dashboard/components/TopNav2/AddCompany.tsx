import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaPlus } from 'react-icons/fa';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { fetchDashboardData } from '../../state/dashboardState';

const customStyles = {
  content: {
    zIndex: 1000,
    background: 'white',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '600px',
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

const AddCompany = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCompanyName('');
    setErrorMessage('');
  };

  const handleInputChange = (e) => {
    setCompanyName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      setErrorMessage('User is not authenticated');
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/companies`,
        { name: companyName },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('Company added:', response.data);
      dispatch(fetchDashboardData());
      closeModal();
    } catch (error) {
      console.error('Error adding company:', error);
      setErrorMessage('Error adding company. Please try again.');
    }
  };

  return (
    <div>
      <div className="flex items-center space-x-2 text-[#e6e6e7]" onClick={openModal}>
        <div className="flex items-center justify-center w-5 h-5 bg-[#e5deeb] rounded-full text-[#3c3570]">
          <FaPlus />
        </div>
        <span className="underline cursor-pointer">Company</span>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add Company Modal"
      >
        <h2 className="text-2xl font-bold">Add New Company</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              id="companyName"
              value={companyName}
              onChange={handleInputChange}
              required
              className="w-full p-2 mt-2 border rounded"
            />
          </div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <div className="mt-4 flex justify-end">
            <button type="button" onClick={closeModal} className="mr-4 px-4 py-2 bg-gray-200 rounded">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-[#e001ef] text-white rounded">
              Add Company
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddCompany;
