// components/common/LoadingSpinner.tsx
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-[#242a5b] bg-opacity-90 z-50">
      <div className="spinner-border animate-spin inline-block w-16 h-16 border-8 border-t-8 border-t-transparent border-white rounded-full" role="status">
      </div>
    </div>
  );
};

export default LoadingSpinner;
