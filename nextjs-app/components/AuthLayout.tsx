// GeneralLayout.tsx
import React from "react";
import Header from "./AuthBackground"; // Adjust the import path as necessary

 
const GeneralLayout = ({ children }) => {
  return (
    <div>
      <Header>{children}</Header>
    </div>
  );
};

export default GeneralLayout;
