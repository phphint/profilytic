// Content.tsx
import React from 'react';

const Content = ({ children }) => {
  const gradientStyle = {
    background: 'linear-gradient(to bottom, #ffffff 1%, #e2e1f0 99%)'
  };

  return (
    <section className="gen-content w-full mt-0" style={gradientStyle}>
      <div 
        className="bg-no-repeat bg-bottom w-full h-full min-h-[67vh]"
       >
        <div className="container mx-auto px-4 py-8">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Content;
