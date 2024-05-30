import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectDashboard } from '../../state/dashboardState';
import { setSelectedCompany, selectSelectedCompany } from '../../state/companySlice';

Modal.setAppElement('#__next'); // Set the app element for accessibility

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

const ITEMS_PER_COLUMN = 5;
const MAX_COLUMNS = 3;

const SelectCompany = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();
  const { companies } = useSelector(selectDashboard);
  const selectedCompany = useSelector(selectSelectedCompany);

  const openModal = () => {
    setModalIsOpen(true);
    setCurrentPage(0);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleCompanySelect = (company) => {
    dispatch(setSelectedCompany(company));
    closeModal();
  };

  const getPagedCompanies = () => {
    const startIndex = currentPage * ITEMS_PER_COLUMN * MAX_COLUMNS;
    return companies.slice(startIndex, startIndex + ITEMS_PER_COLUMN * MAX_COLUMNS);
  };

  const pagedCompanies = getPagedCompanies();
  const columns = Array.from({ length: MAX_COLUMNS }, (_, i) =>
    pagedCompanies.slice(i * ITEMS_PER_COLUMN, (i + 1) * ITEMS_PER_COLUMN)
  );

  const totalPages = Math.ceil(companies.length / (ITEMS_PER_COLUMN * MAX_COLUMNS));

  return (
    <div className="relative ml-4">
      <button
        onClick={openModal}
        className="border border-[#aab6cb] text-black py-1 px-2 rounded focus:outline-none"
      >
        Select Company
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Select Company"
        style={customStyles}
      >
        <h2 className="text-lg font-bold mb-4">Select Company</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {columns.map((column, colIndex) => (
            <ul key={colIndex}>
              {column.map((company) => (
                <li
                  key={company.companyId}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleCompanySelect(company)}
                >
                  {company.name}
                </li>
              ))}
            </ul>
          ))}
        </div>
        {companies.length > ITEMS_PER_COLUMN * MAX_COLUMNS && (
          <div className="flex justify-between mt-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
              disabled={currentPage === 0}
              className="bg-gray-200 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Prev
            </button>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
              disabled={currentPage >= totalPages - 1}
              className="bg-gray-200 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Next
            </button>
          </div>
        )}
        <button
          onClick={closeModal}
          className="mt-4 bg-[#e001ef] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default SelectCompany;
