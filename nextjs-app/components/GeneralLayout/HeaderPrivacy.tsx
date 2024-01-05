import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import LogoIconLight from "./logo-icon-light.svg"; // Import the SVG file
import Link from "next/link";

const Header = () => {
  return (
    <header
      className="bg-cover bg-bottom min-h-[44vh] mb-0 bg-white border-b border-white"
      style={{ backgroundImage: "url('/media/header.png')" }}
    >
      <div className="container mx-auto flex justify-between items-center h-full px-4 py-8">
        {/* First Column */}
        <div className="hidden md:flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold text-white">Published</h2>
          <p className="text-white flex items-center justify-center">
            <FontAwesomeIcon
              icon={faCalendar}
              style={{ color: "#f775e2", width: "1em", height: "1.5em" }}
            />
            <span className="ml-2 font-thin">12/29/2023</span>
          </p>
        </div>

        {/* Second Column */}
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
          <p className="text-white font-thin">
            At Proflytic.com, we deeply value your privacy and the security of
            your data.
          </p>
        </div>

        {/* Third Column - Hidden on mobile */}
        <div className="hidden md:flex flex-col items-center justify-center">
          <img src={LogoIconLight} alt="Logo" className="w-20 h-20 mb-4" />
          <Link href="/about" passHref>
            <button className="bg-[#f775e2] text-white py-1 px-2 text-sm rounded">
              About Profilytic
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
