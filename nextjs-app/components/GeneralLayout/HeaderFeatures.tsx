import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <header
        className="bg-cover min-h-[55vh] mb-0 pb-0 bg-white border-b border-white text-white flex"
        style={{
          backgroundImage: "url('/media/features-header.png')",
          backgroundPosition: 'right bottom'
        }}
      >
        <div className="w-1/2 flex flex-col justify-center items-start pl-10">
          <h1 className="text-5xl font-bold mb-4 text-fffefa">AI-Driven Recruitment, Redefined</h1>
          <p className="mb-4 text-ded7df">
            Explore the advanced capabilities of Proflytic in streamlining the hiring process with cutting-edge AI technology.
          </p>
          <div className="flex items-center">
            <Link href="/pricing" passHref>
              <button className="bg-e86aaa text-ebd0df py-2 px-4 rounded mr-4 flex items-center">
                <FontAwesomeIcon icon={faBrain} className="mr-2" style={{ fontSize: '1em', color: '#23bab3' }} />
                Pricing
              </button>
            </Link>
            <Link href="/features/our-technology" passHref>
              <button className="bg-1f8fc1 text-e7fdff py-2 px-4 rounded">
                Our Technology
              </button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
