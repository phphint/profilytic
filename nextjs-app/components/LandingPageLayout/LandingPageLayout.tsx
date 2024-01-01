import React from 'react';
//import Navbar from './Navbar';  // Adjust the import path as necessary
import Banner from './Banner';  // Adjust the import path as necessary
//import Footer from './Footer';  // Adjust the import path as necessary
import Footer from '../Footer';


const LandingPageLayout = ({ children }) => {
    return (
        <div>
       
            <Banner />
            <main>
                {children} {/* This will be where Section1 and Section2 get rendered */}
            </main>
            <Footer />
        </div>
    );
}

export default LandingPageLayout;
