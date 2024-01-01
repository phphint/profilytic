// GeneralLayout.tsx
import React from 'react';
import Header from './HeaderFeatures';  // Adjust the import path as necessary
import Footer from '../Footer';
import NavBarGeneral from './NavbarGeneral';

import Content from './ContentDarkBlue';  // Import the new Content component

const GeneralLayout = ({ children }) => {
    return (
        <div>
            <NavBarGeneral />
            <Header/> 
            <Content>
                {children} {/* This will be where the page content gets rendered */}
            </Content>
            <Footer />
        </div>
    );
}

export default GeneralLayout;
