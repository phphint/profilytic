import React from "react";
import Navbar from "../LandingPageLayout/Navbar"; // Adjust the path as necessary

const Header = () => {
  return (
   
      <header
        className="bg-cover min-h-[50vh] bg-white border-b border-white text-white flex flex-col pb-10"
        style={{
          backgroundImage: "url('/media/our-tech-bg.png')",
          backgroundPosition: 'right bottom'
        }}
      >
        <div className="container pt-8">
          <Navbar />
        </div>
        <div className="flex-grow flex items-center">
  <div className="container pl-4 md:pl-10 pt-10">
    <div className="w-full md:w-1/3">
      <h1 className="text-5xl font-bold mb-7 text-fffefa">AI Resume/CV Screening</h1>
      <hr className="border-t border-ded7df mb-5" />
      <p className="text-sm text-ded7df font-light mb-7">
        Specializing in AI-driven resume and CV analysis to enhance talent acquisition.
      </p>
      <h2 className="text-xl font-light text-fffefa mb-7">
        Precision AI Candidate Assessment
      </h2>
      <p className="text-sm text-ded7df font-light">
        Our AI solution meticulously screens resumes/CVs, ensuring accurate matching with job requirements for optimal candidate selection.
      </p>
    </div>
  </div>
</div>

      </header>
  
  );
};

export default Header;
