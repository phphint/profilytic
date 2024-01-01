// GeneralLayout.tsx
import React from 'react';
import Header from './HeaderTerms';  // Adjust the import path as necessary
import Footer from '../Footer';
import NavBarGeneral from './NavbarGeneral';

import Content from './Content';  // Import the new Content component

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
