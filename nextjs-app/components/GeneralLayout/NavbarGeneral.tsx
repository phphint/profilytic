import React from 'react';
import NavMenu from '../NavMenu'; // Adjust the path according to your directory structure

const Navbar = () => {
  return (
    <section className="bg-[#35345c] text-white w-full">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <NavMenu />

        {/* Button aligned to the right */}
        <button className="bg-[#504a7a] text-[#bfbfc7] py-2 px-4 rounded">
          Sign-up  
        </button>
        
      </div>
    </section>
  );
}

export default Navbar;
