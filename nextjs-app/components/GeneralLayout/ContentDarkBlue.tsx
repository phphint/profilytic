// Content.tsx
import React from 'react';

const Content = ({ children }) => {
  const gradientStyle = {
    background: 'linear-gradient(to right, #272a4b, #161e35)'
  };

  return (
    <section className="gen-content w-full mt-0" style={gradientStyle}>
      <div 
        className="bg-no-repeat bg-bottom w-full h-full "
       >
        <div className="container mx-auto ">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Content;
