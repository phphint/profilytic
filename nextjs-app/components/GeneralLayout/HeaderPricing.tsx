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
        <div className="w-full flex flex-col justify-center items-center px-4 mb-10 pt-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 text-fffefa text-center">Profilytic's AI Screening Pricing</h1>
          <p className="text-lg md:text-2xl text-2fbfe4 max-w-xl text-center mb-4 md:mb-14">
            Explore our straightforward pricing for AI-driven resume/CV analysis. Perfect for recruiters and businesses alike.
          </p>
          <div className="flex items-center">
            <Link href="/signup" passHref>
              <button className="bg-[#27c2d4] text-ebd0df py-2 px-4 rounded text-sm md:text-lg font-bold">
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
