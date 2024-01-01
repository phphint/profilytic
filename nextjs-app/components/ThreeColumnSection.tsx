import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faUserTie, faCogs, faChartBar } from "@fortawesome/free-solid-svg-icons";

const ThreeColumnSection = () => {
  return (
    <section className="bg-custom-dark text-white py-8 pt-10 pb-10">
      <div className="container mx-auto px-4 pt-10 pb-10">
        <div className="flex justify-between">
          {/* First Column - Our Approach */}
          <div className="w-1/3 px-2 pl-10 pr-10">
            <h2 className="text-xl font-bold mb-4">Our Approach</h2>
            <ul className="list-none w-full">
              <li className="flex items-center w-full shadow-lg mb-2 p-4 font-light">
                <FontAwesomeIcon icon={faUserTie} className="mr-2 text-button-color" />
                Personalized Candidate Matching
              </li>
              <li className="flex items-center w-full shadow-lg mb-2 p-4 font-light">
                <FontAwesomeIcon icon={faCogs} className="mr-2 text-button-color" />
                Automated Screening Process
              </li>
              <li className="flex items-center w-full shadow-lg mb-2 p-4 font-light">
                <FontAwesomeIcon icon={faChartBar} className="mr-2 text-button-color" />
                Real-time Analytics & Reporting
              </li>
              {/* Add more list items as needed */}
            </ul>
            <button className="w-full px-4 py-2 bg-button-color text-custom-dark rounded shadow-lg">
              Learn More
            </button>
          </div>

          {/* Second Column - Why Proflytic */}
          <div className="w-1/3 px-2 pl-10 pr-10">
            <h2 className="text-xl font-bold">Why Proflytic?</h2>
            <p className="mt-2 mb-4 font-thin">
              Experience a new era of recruitment with our AI-driven solutions that make hiring smarter, faster, and more efficient.
            </p>
            <a href="/about" className="text-[#4dedfd] mb-4 inline-block">
              About Us
            </a>
            <p className="mt-2 mb-4 font-thin">
              Join countless businesses already benefiting from our technology in streamlining their hiring processes.
            </p>
          </div>

          {/* Third Column - Get Started */}
          <div className="w-1/3 px-2 pl-10 pr-10">
            <h2 className="text-xl font-bold">Get Started</h2>
            <p className="mt-2 mb-4 font-thin">
              Ready to transform your hiring process? Contact us today to get started with Proflytic.
            </p>
            <button className="w-full px-4 py-2 bg-button-color text-custom-dark rounded shadow-lg">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeColumnSection;
