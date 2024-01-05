import React from "react";
import Header from "./AuthBackground"; // Adjust the import path as necessary

const GeneralLayout = ({ children, backgroundImage }) => {
  return (
    <div>
      <Header backgroundImage={backgroundImage}>{children}</Header>
    </div>
  );
};

export default GeneralLayout;
