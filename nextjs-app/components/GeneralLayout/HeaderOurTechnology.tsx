import React from "react";
import Navbar from "../LandingPageLayout/Navbar"; // Adjust the path as necessary

const Header = () => {
  return (
    <>
      <header
        className="bg-cover min-h-[50vh] bg-white border-b border-white text-white flex flex-col"
        style={{
          backgroundImage: "url('/media/our-tech-bg.png')",
          backgroundPosition: 'right bottom'
        }}
      >
        <div className="container pt-8">
          <Navbar />
        </div>
        <div className="flex-grow flex items-center">
          <div className="container pl-10">
            <div className="w-1/3">
              <h1 className="text-5xl font-bold mb-7 text-fffefa">AI-Driven Recruitment</h1>
              <hr className="border-t border-ded7df mb-5" />
              <p className="text-sm text-ded7df font-light mb-7">
                Redefining talent acquisition with advanced AI technology.
              </p>
              <h2 className="text-xl font-light text-fffefa mb-7">
                Advanced Candidate Screening
              </h2>
              <p className="text-sm text-ded7df font-light">
                Profilytic's AI algorithms offer precise, efficient candidate evaluation, tailored to role-specific needs.
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
