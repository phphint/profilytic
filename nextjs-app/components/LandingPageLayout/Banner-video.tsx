import React, { useEffect, useRef } from "react";
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
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <div  className="relative min-h-[50vh] bg-cover bg-center">
      <video 
       ref={videoRef}

        autoPlay 
        loop 
        muted 
     
        style={{ 
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
          
        }}
        src="/media/banner-bg4.mp4"
      ></video>

      <div style={{overflow: "hidden"}} className="relative min-h-[50vh] bg-cover bg-center z-10">
      <div className="container pt-8">
        <Navbar />
        <div className="md:p-8  w-full md:w-1/4 pt-14 mt-10">
          <h1 className="text-5xl font-bold text-white">
            Revolutionize Your Hiring
          </h1>
          <p className="text-white pt-5">
            Empowering businesses with AI-driven recruitment
          </p>
          <p className="text-white mt-4 mb-8">
            Discover the power of intelligent resume parsing and data-driven
            candidate evaluation.
          </p>
          {/* Learn More Link */}
          <Link href="/features/our-technology" legacyBehavior>
            <a className="text-[#4dedfd] mb-8 inline-flex items-center pb-14">
              Learn More
              <FontAwesomeIcon
                icon={faAngleDoubleRight}
                width="1em"
                height="1em"
                className="ml-2"
              />
            </a>
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
              Efficient Analytics
            </h3>
            <p className="text-white text-sm font-thin">
              Optimize your hiring strategy with actionable insights.
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
              Your data's privacy and security, ensured.
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
              Cost-Effective Solutions
            </h3>
            <p className="text-white text-sm font-thin">
              High-quality services at competitive prices.
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
              Customizable Tools
            </h3>
            <p className="text-white text-sm font-thin">
              Adapt our tools to fit your unique recruitment needs.
            </p>
          </div>

          {/* Add more icons as needed */}
        </div>

        {/* ... Rest of the content ... */}
      </div>
      </div>
    </div>
  );
};

export default Banner;
