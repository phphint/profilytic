import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <header
        className="features-banner bg-cover min-h-[55vh] mb-0 pb-0 bg-white border-b border-white text-white"
        style={{
          backgroundImage: "url('/media/features-header.png')",
          backgroundPosition: 'right bottom'
        }}
      >
        <div className="container mx-auto p-4 flex items-center h-full min-h-[55vh]">
          {/* Adjust the width of this div to limit text content to 50% */}
          <div className="flex flex-col justify-center md:justify-start w-full md:w-1/2">
            <h1 className="text-5xl font-bold mb-4 text-fffefa">AI Resume Screening Software</h1>
            <p className="mb-4 text-ded7df">
              Discover Proflytic's advanced AI-driven candidate evaluation and intelligent resume analysis. Enhance candidate assessment with Profilytic's AI: precise resume/CV screening, in-depth profile analysis, and intelligent role to candidate matching.
            </p>

            <div className="hidden md:flex items-center">
              <Link href="/pricing">
                <button className="bg-e86aaa text-ebd0df py-2 px-4 rounded mr-4 flex items-center">
                  <FontAwesomeIcon height ='1em' width='1em' icon={faBrain} className="mr-2" style={{ fontSize: '1em', color: '#23bab3' }} />
                  Pricing
                </button>
              </Link>
              <Link href="/features/our-technology">
                <button className="bg-1f8fc1 text-e7fdff py-2 px-4 rounded">
                  Our Technology
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
