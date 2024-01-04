import React from "react";
import AuthSection from "./AuthSection"; // Adjust the import path as necessary
import Logo from "./logo-horz-light.svg";

const Header = ({ children }) => {
  return (
    <>
      <header
        className="bg-cover min-h-[75vh] mb-0 pb-0 bg-white text-white"
        style={{
          backgroundImage: "url('/media/auth-bg.png')",
          backgroundPosition: "right bottom",
        }}
      >
        <div className="container mx-auto    flex flex-col justify-start items-start pt-20">
          {/* Logo */}
          <div className="w-1/3">
            <img src={Logo} alt="Profilytic Logo" className="h-12 mb-6 " />

            {children}
          </div>
        </div>
      </header>
      <AuthSection />
    </>
  );
};

export default Header;
