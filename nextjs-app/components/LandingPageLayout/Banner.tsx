import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faChartLine,
  faLock,
  faCreditCard,
  faTools,
} from "@fortawesome/free-solid-svg-icons";

import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import Navbar from "./Navbar"; // Adjust the path as necessary

const Banner = () => {
  return (
    <div
      className="relative min-h-[50vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/media/home-banner.png')" }}
    >
      <div className="container pt-8">
        <Navbar />
        <div className="md:p-8  w-full md:w-1/4 pt-14 mt-10">
        <h1 className="text-5xl font-bold text-white">Accelerate Resume/CV Analysis</h1>
          <p className="text-white pt-5">Efficiently evaluate & screen candidates with AI-driven insights against job descriptions.</p>
          <p className="text-white mt-4 mb-8">Profilytic's AI platform streamlines candidate screening, saving time and enhancing decision-making.</p>
          <Link href="/features/our-technology" legacyBehavior>
            <a className="text-[#4dedfd] mb-8 inline-flex items-center pb-14">Explore AI Capabilities <FontAwesomeIcon icon={faAngleDoubleRight} width="1em" height="1em" className="ml-2"/></a>
          </Link>
      
        </div>

        {/* ... Existing content ... */}

        <div className="hidden md:flex justify-around pb-14">
          {/*   Icons Sections */}

          <div className="text-center pl-5 pr-5">
            <div className="flex justify-center">
              <FontAwesomeIcon
                icon={faChartLine}
                size="4x"
                className="text-[#4dedfd]"
                width="4rem"
                height="4rem"
              />
            </div>
            <h3 className="text-xl font-semibold text-white mt-5 mb-3">
            AI-Driven Candidate Insights
            </h3>
            <p className="text-white text-sm font-thin">
            Harness AI for deep insights into candidate profiles, enhancing your understanding and decision-making.
            </p>
          </div>
          <div className="text-center pl-5 pr-5">
            <div className="flex justify-center">
              <FontAwesomeIcon
                icon={faLock}
                size="4x"
                width="4rem"
                height="4rem"
                className="text-[#4dedfd]"
              />
            </div>
            <h3 className="text-xl font-semibold text-white mt-5 mb-3">
              Data Security
            </h3>
            <p className="text-white text-sm font-thin">
            Guarantee the privacy and security of your data with our robust security measures.
            </p>
          </div>
          <div className="text-center pl-5 pr-5">
            <div className="flex justify-center">
              <FontAwesomeIcon
                icon={faCreditCard}
                size="4x"
                width="4rem"
                height="4rem"
                className="text-[#4dedfd]"
              />
            </div>
            <h3 className="text-xl font-semibold text-white mt-5 mb-3">
            Intelligent Candidate Screening
            </h3>
            <p className="text-white text-sm font-thin">
            Efficiently screen candidates using AI, saving time and ensuring optimal matches.
            </p>
          </div>
          <div className="text-center pl-5 pr-5">
            <div className="flex justify-center">
              <FontAwesomeIcon
                icon={faTools}
                size="4x"
                className="text-[#4dedfd]"
                width="4rem"
                height="4rem"
              />
            </div>
            <h3 className="text-xl font-semibold text-white mt-5 mb-3">
            Dynamic AI Matching
            </h3>
            <p className="text-white text-sm font-thin">
            Our AI evaluates CVs/resumes in detail, aligning candidate profiles precisely with job requirements.            </p>
          </div>

          {/* Add more icons as needed */}
        </div>

        {/* ... Rest of the content ... */}
      </div>
    </div>
  );
};

export default Banner;
