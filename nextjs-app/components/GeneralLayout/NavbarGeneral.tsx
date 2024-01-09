import React from "react";
import Link from "next/link";
import NavMenu from "../NavMenu"; // Adjust the path according to your directory structure

const Navbar = () => {
  return (
    <section className="bg-[#35345c] text-white w-full">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex-grow">
          <NavMenu />
        </div>

        {/* Button hidden on mobile and tablet, visible on medium screens and above */}
        <Link href="/register" passHref>
          <button className="hidden md:flex bg-[#504a7a] text-[#bfbfc7] py-2 px-4 rounded">
            Sign-up
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Navbar;
