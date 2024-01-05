import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGoogle,
  faMicrosoft,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const AuthSection = () => {
  const linkedinIconStyle = { color: "#0A66C2", width: "2rem", height: "auto" }; // LinkedIn Blue
  const googleIconStyle = { color: "#DB4437", width: "2rem", height: "auto" }; // Google Red
  const microsoftIconStyle = { color: "#F25022", width: "2rem", height: "auto" }; // Microsoft Red
  const appleIconStyle = { color: "#A3AAAE", width: "2rem", height: "auto" }; // Apple Grey
  const lockIconStyle = { color: "#384a70", width: "3rem", height: "3rem" };
  const emailLinkStyle = { color: "#384a70" };

  return (
    <section className="bg-white min-h-[25vh]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-4 pt-10">
          {/* Column 1 - Social Login Options */}
          <div className="p-4 md:p-14">
            <h3 className="font-semibold mb-2 text-2xl">Single Sign-On</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <FontAwesomeIcon
                icon={faLinkedin}
                style={linkedinIconStyle}
              />
              <FontAwesomeIcon
                icon={faGoogle}
                style={googleIconStyle}
              />
              <FontAwesomeIcon
                icon={faMicrosoft}
                style={microsoftIconStyle}
              />
              <FontAwesomeIcon
                icon={faApple}
                style={appleIconStyle}
              />
            </div>
          </div>

          {/* Column 2 - Secure Login */}
          <div className="p-4 md:p-14 flex justify-center md:justify-start">
            <FontAwesomeIcon
              icon={faLock}
              style={lockIconStyle}
            />
            <p className="text-center md:text-left ml-5">Your information is safely encrypted and secure.</p>
          </div>

          {/* Column 3 - User Support/FAQs */}
          <div className="p-4 md:p-14">
            <h3 className="font-semibold mb-2 text-2xl">Need Help?</h3>
            <p className="text-center md:text-left">
              Contact us for support at{" "}
              <a href="mailto:info@profilytic.com" style={emailLinkStyle}>
                <u>info@profilytic.com</u>
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthSection;
