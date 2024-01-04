import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header
        className="bg-cover min-h-[33vh] mb-0 pb-0 bg-white border-b border-white text-white flex"
        style={{
          backgroundImage: "url('/media/pricing-banner.png')",
          backgroundPosition: 'right bottom'
        }}
      >
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold mb-4 text-fffefa">Transparent Pricing for Every Business</h1>
          <p className="mb-4  text-2fbfe4 max-w-xl text-center text-2xl mb-14">
            Discover flexible, AI-driven recruitment solutions tailored to your hiring needs.  
          </p>
          <p className="mb-4 text-ded7df max-w-xl text-center ">
          Choose a flexible solution that scales with your recruitment needs.
          </p>
          <div className="flex items-center">
            <Link href="/signup" passHref>
            <button className="bg-[#27c2d4] text-ebd0df py-3 px-6 rounded flex items-center text-lg font-bold">
  Sign Up
</button>

            </Link>
         
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
